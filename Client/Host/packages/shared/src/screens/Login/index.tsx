import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Box } from '@mui/material';
import firebase from 'firebase';
import { Button, Link, Text } from 'native-base';
import React, { useState } from 'react';
import { ActivityIndicator, NativeSyntheticEvent, TextInputKeyPressEventData, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../../config/firebase';
import { FormInput } from '../../components/Forms/Input';
import { DefaultScreen } from '../../navigation/RootNavigation';
import { ShowAlertAction, ShowScreenAction } from '../../state/contexts/app/Actions';
import { CreateUserAction, SigninLoadingAction } from '../../state/contexts/user/Actions';
import { getUserState } from '../../state/contexts/user/Selectors';
import './styles.css';

export function Login() {
    const [email, setEmail] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [registering, setRegistering] = useState<boolean>(false)

    const {
        signingIn,
        user,
        authSuccess,
    } = useSelector(getUserState)

    const dispatch = useDispatch()

    React.useEffect(() => {
        if (user) {
            dispatch(ShowScreenAction({
                screen: DefaultScreen
            }))
        }
    }, [user])

    const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (e.nativeEvent.key === "Enter") {
            if (registering)
                handleSignUp()
            else
                handleLogin()
        }
    }

    const handleLogin = () => {
        dispatch(SigninLoadingAction())

        auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {

                auth.signInWithEmailAndPassword(email, password)
                    .catch((error: any) => {
                        dispatch(ShowAlertAction({
                            title: "Error",
                            message: error.message,
                        }))

                        dispatch(SigninLoadingAction())
                    })

            })
            .catch(error => {
                dispatch(ShowAlertAction({
                    title: "Error",
                    message: error.message,
                }))
                dispatch(SigninLoadingAction())
            })
    }

    const handleSignUp = () => {
        dispatch(SigninLoadingAction())

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;

                if (user) {
                    dispatch(CreateUserAction({
                        name,
                        email,
                        FirebaseUid: user.uid
                    }))
                    dispatch(SigninLoadingAction())
                }
            })
            .catch(error => {
                dispatch(ShowAlertAction({
                    title: "Error",
                    message: error.message,
                }))
                dispatch(SigninLoadingAction())
            })
    }

    let disabled = false

    if (!email || !password || authSuccess) {
        disabled = true
    }

    if (registering && !name) {
        disabled = true
    }

    return (
        <View style={{ height: '100%', marginTop: 100 }}>
            <Box sx={{ alignSelf: "center", marginTop: 5, boxShadow: 2, padding: 2, width: 300, bgcolor: 'background.paper', borderRadius: 2 }}>

                <form className="form">
                    <h2>{registering ? "Join Midpoint." : "Login to MidPoint."}</h2>
                    {
                        registering &&
                        <FormInput
                            labelText="Name"
                            id="name"
                            formControlProps={{
                                fullWidth: false
                            }}
                            handleChange={e => setName(e.target.value)}
                            type="text"
                            inputRootCustomClasses={''}
                        />
                    }
                    <FormInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                            fullWidth: false
                        }}
                        handleChange={e => setEmail(e.target.value)}
                        type="text"
                        inputRootCustomClasses={''}
                    />
                    <FormInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }}
                        handleChange={e => setPassword(e.target.value)}
                        inputRootCustomClasses={''}
                        type="password"
                    />




                    <Button mt="2" colorScheme="indigo"
                        disabled={disabled}
                        style={{
                            backgroundColor: (authSuccess ? '#4DD181' : !disabled ? '#09c' : 'grey')
                        }}
                        onPress={() => registering ? handleSignUp() : handleLogin()}
                    >
                        {authSuccess ?
                            <FontAwesomeIcon icon={authSuccess ? faCheckCircle : faTimesCircle} color="white" /> :
                            signingIn ?
                                <ActivityIndicator color="white" /> :
                                registering ? "Join" : "Login"
                        }
                    </Button>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {registering ? "I've already registered" : "I'm a new user"}.{" "}
                        </Text>
                        <Link
                            onPress={() => setRegistering(!registering)}
                            _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} href="#">
                            {registering ? "Login" : "Join"}
                        </Link>
                    </View>
                </form>

                {/* <VStack space={3} mt="5">
                    {
                        registering &&
                        <FormControl>
                            <FormControl.Label>
                                Display Name
                            </FormControl.Label>
                            <Input
                                value={name}
                                onChangeText={text => setName(text)}
                            />
                        </FormControl>
                    }
                    <FormControl>
                        <FormControl.Label>
                            Email
                        </FormControl.Label>
                        <Input
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>
                            Password
                        </FormControl.Label>
                        <Input type="password"
                            onKeyPress={handleKeyPress}
                            onChangeText={text => setPassword(text)}
                        />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Forgot Password?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo"
                        disabled={disabled}
                        style={{
                            backgroundColor: (authSuccess ? '#4DD181' : !disabled ? '#09c' : 'grey')
                        }}
                        onPress={() => registering ? handleSignUp() : handleLogin()}
                    >
                        {authSuccess ?
                            <FontAwesomeIcon icon={authSuccess ? faCheckCircle : faTimesCircle} color="white" /> :
                            signingIn ?
                                <ActivityIndicator color="white" /> :
                                registering ? "Join" : "Login"
                        }
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {registering ? "I've already registered" : "I'm a new user"}.{" "}
                        </Text>
                        <Link
                            onPress={() => setRegistering(!registering)}
                            _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }} href="#">
                            {registering ? "Login" : "Join"}
                        </Link>
                    </HStack>
                </VStack> */}
            </Box>
        </View>
    )
}