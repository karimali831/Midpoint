import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { ActivityIndicator, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../../config/firebase';
import { DefaultScreen } from '../../navigation/RootNavigation';
import { ShowAlertAction, ShowScreenAction } from '../../state/contexts/app/Actions';
import { RegisterUserAction, SigninLoadingAction } from '../../state/contexts/user/Actions';
import { getUserState } from '../../state/contexts/user/Selectors';

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

        setPersistence(auth, browserLocalPersistence)
            .then(() => {

                signInWithEmailAndPassword(auth, email, password)
                    .catch(error => {
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

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;

                if (user) {
                    dispatch(RegisterUserAction({
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
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading
                    size="lg"
                    fontWeight="600"
                    color="coolGray.800"
                    _dark={{
                        color: "warmGray.50"
                    }}
                >
                    Welcome
                </Heading>
                <Heading
                    mt="1"
                    _dark={{
                        color: "warmGray.200"
                    }}
                    color="coolGray.600"
                    fontWeight="medium"
                    size="xs"
                >
                    Sign in to continue!
                </Heading>
                <VStack space={3} mt="5">
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
                </VStack>
            </Box>
        </Center>
    )
}