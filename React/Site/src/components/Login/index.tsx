import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EastIcon from '@mui/icons-material/East';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormInput } from '../../components/Form/input';
import { FormMessage } from '../../components/Form/message';
import { IFormMessage, IFormMessageCode } from '../../enum/IFormMessage';
import { IMessage } from '../../interface/IMessage';
import { isMobile } from 'react-device-detect';
import { SetRegisteringAction, ShowScreenAction } from '../../state/contexts/app/Actions';
import { getAppState } from '../../state/contexts/app/Selectors';
import { CreateUserAction, SigninLoadingAction } from '../../state/contexts/user/Actions';
import { getUserState } from '../../state/contexts/user/Selectors';
import { auth } from '../../config/firebase';
import { AppScreen } from '../../enum/AppScreen';
import { LoginHighlight } from './Highlight';
import { Button, Link } from '@mui/material';
import { Loader } from '../Loader';
import { browserLocalPersistence, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

export type FormValidation = {
    value: string
    minCharsRequired?: number
    maxCharsRequired?: number
    emailValidator?: boolean
    urlValidator?: boolean
}

type FormFields = {
    username: FormValidation
    email: FormValidation
    name: FormValidation
    password: FormValidation
    repeatPassword: FormValidation

}

export function Login() {
    const { registering } = useSelector(getAppState)

    const [formFields, setFormFields] = useState<FormFields>({
        username: {
            value: '',
            minCharsRequired: 3
        },
        email: {
            value: '',
            emailValidator: true
        },
        name: {
            value: '',
            minCharsRequired: 3
        },
        password: {
            value: '',
            minCharsRequired: 6
        },
        repeatPassword: {
            value: '',
            minCharsRequired: 6
        }
    })
    const [messages, setMessages] = useState<IFormMessage[]>([])

    const {
        username,
        email,
        name,
        password,
        repeatPassword
    } = formFields

    const {
        signingIn,
        user,
        authSuccess,
    } = useSelector(getUserState)

    const onInputChange = (
        name: keyof FormFields,
        text: string
    ) => {
        setFormFields({
            ...formFields,
            [name]: {
                ...formFields[name],
                value: text
            }
        })
    }

    const dispatch = useDispatch()
    const formMessage = messages.find(x =>
        x.code !== IFormMessageCode.InvalidEmail &&
        x.code !== IFormMessageCode.UserNotFound &&
        x.code !== IFormMessageCode.WrongPassword &&
        x.code !== IFormMessageCode.PasswowrdsMismatched &&
        x.code !== IFormMessageCode.EmailAlreadyInUse
    )

    React.useEffect(() => {
        if (user) {
            setTimeout(() => {
                dispatch(ShowScreenAction({
                    screen: AppScreen.Dashboard
                }))
            }, 1000)
        }
    }, [user])

    const handleLogin = () => {
        dispatch(SigninLoadingAction(true))

        // var user = firebase.auth().currentUser;

        auth.setPersistence(browserLocalPersistence)
            .then(() => {
                return signInWithEmailAndPassword(auth, email.value, password.value)
                    .catch((message: IMessage) => {
                        dispatch(SigninLoadingAction(false))
                        setFormMessage(message)
                    })

            })
            .catch((message: IMessage) => {
                dispatch(SigninLoadingAction(false))
                setFormMessage(message)
            })
    }

    const handleSignUp = () => {

        // so here if you try to submit the form the fields with required validation
        // it doesn't show the errors

        dispatch(SigninLoadingAction(true))

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(userCredentials => {
                const user = userCredentials.user;

                if (user) {
                    dispatch(CreateUserAction({
                        fullName: name.value,
                        email: email.value,
                        firebaseUid: user.uid,
                        displayName: username.value,
                        purchasedTokens: 0,
                        remainingTokens: 0
                    }))
                }

                dispatch(SigninLoadingAction(false))
            })
            .catch((message: IMessage) => {
                dispatch(SigninLoadingAction(false))
                setFormMessage(message)
            })
    }

    const setFormMessage = (message: IFormMessage) => {
        const errorExists = messages.some(x => x.code === message.code)

        if (!errorExists) {
            setMessages(messages => [...messages, message])
        }
    }

    const sendForgotPassword = () => {
        sendPasswordResetEmail(auth, email.value)
            .then(() => {
                setMessages([{
                    message: "A link to reset your password has been sent to " + formFields.email.value,
                    isSuccess: true
                }])

            })
            .catch(setFormMessage)

    }

    const checkPasswordMismatch = (text: string) => {
        const code = IFormMessageCode.PasswowrdsMismatched
        const errorExists = messages.some(x => x.code === code)

        if (password.value === "" || repeatPassword.value === "") {
            if (errorExists) {
                setMessages(messages.filter(x => x.code !== code))
            }
        }
        else {
            const mismatched = formFields.password !== formFields.repeatPassword

            if (errorExists && !mismatched) {
                setMessages(messages.filter(x => x.code !== code))
            }
            else {
                if (mismatched) {
                    setMessages(messages => [...messages, {
                        code,
                        message: "Passwords do no match.",
                        isClient: true
                    }])
                }
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                height: '100%',
                marginTop: 100,
                display: 'flex',
                width: '100%',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            }}>

            <div style={{ width: isMobile ? '90%' : 380 }}>
                <div style={{
                    padding: '15px 0',
                    backgroundColor: '#195DC4',
                    borderRadius: 5,
                    textAlign: 'center',
                    boxShadow: '0px -2px 20px 2px rgba(0, 0, 0, 0.4)'
                }}>
                    <span style={{ fontSize: 22 }}>
                        The future of collaborative music industry projects is in the cloud.
                    </span>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    marginTop: 20,
                    height: 260
                }}>
                    <LoginHighlight
                        icon={<AccessTimeIcon />}
                        title="Start within minutes"
                        desc="No set up required, just login and start from a single click."
                    />
                    <LoginHighlight
                        icon={<EastIcon />}
                        title="Fully accessible with convenience"
                        desc="Use your cloud machine from the browser, no installation needed."
                    />
                    <LoginHighlight
                        icon={<FileDownloadIcon />}
                        title="Download any app"
                        desc="Install any app, software or game that you normally would on your machine."
                    />
                </div>
            </div>
            <form
                className='midpoint-form'
                style={{
                    width: isMobile ? '90%' : 380,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <span style={{ marginBottom: 15, fontWeight: 500, fontSize: 36 }}>
                    {registering ? "Sign up" : "Sign In"}
                </span>
                {
                    registering &&
                    <FormInput
                        placeholder="Full name"
                        validation={formFields.name}
                        onChange={e => onInputChange("name", e)}
                    />
                }
                <FormInput
                    placeholder="Email"
                    validation={formFields.email}
                    onChange={e => onInputChange("email", e)}
                    message={messages.find(x =>
                        x.code === IFormMessageCode.InvalidEmail ||
                        x.code === IFormMessageCode.UserNotFound ||
                        x.code === IFormMessageCode.EmailAlreadyInUse
                    )}
                />
                {
                    registering &&
                    <FormInput
                        placeholder="Username"
                        validation={formFields.username}
                        onChange={e => onInputChange("username", e)}
                    />
                }
                <FormInput
                    placeholder="Password"
                    validation={formFields.password}
                    onChange={e => onInputChange("password", e)}
                    message={messages.find(x => x.code === IFormMessageCode.WrongPassword)}
                    onBlur={checkPasswordMismatch}
                    passwordToggleEnabled={true}

                />
                {
                    registering &&
                    <FormInput
                        placeholder="Repeat password"
                        validation={formFields.repeatPassword}
                        onChange={e => onInputChange("repeatPassword", e)}
                        message={messages.find(x => x.code === IFormMessageCode.PasswowrdsMismatched)}
                        onBlur={checkPasswordMismatch}
                        passwordToggleEnabled={true}
                    />
                }
                {!!formMessage && <FormMessage message={formMessage} />}

                <div style={{ alignSelf: 'flex-end', marginBottom: 15 }}>
                    {
                        registering ?
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <input type="checkbox" style={{ marginRight: 10 }} />
                                    <span style={{ marginTop: 15, fontSize: 14 }}>By creating an account you agree with the <a href="#" >Terms of Service</a> and the <a href="">Privacy Policy</a>.</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <input type="checkbox" style={{ marginRight: 10 }} />
                                    <span style={{ marginTop: 15, fontSize: 14 }}>Please verify yourself.</span>
                                </div>
                            </div>
                            :
                            <Link
                                onClick={sendForgotPassword}
                                // _text={{
                                //     color: "warmGray.200",
                                //     fontSize: "sm",
                                //     textDecoration: 'underline'
                                // }} 
                                href="#"
                            >
                                Forgot password?
                            </Link>
                    }
                </div>

                <Button 
                    style={{
                        borderRadius: 25,
                        backgroundColor: (authSuccess ? '#4DD181' : '#195DC4')

                    }}
                    onClick={() => registering ? handleSignUp() : handleLogin()}
                    startIcon={authSuccess ? <CheckCircleIcon /> : <CloseIcon />}
                >
                    {
                        signingIn 
                        ? <Loader /> 
                        : registering ? "Create account" : "Login"
                    }
                </Button>

                <div style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
                    {/* <Text fontSize="sm" color="coolGray.500" _dark={{
                        color: "warmGray.200"
                    }}> */}
                    <span>
                        {registering ? "Already have an account?" : "Don't have an account?"} {" "}
                    </span>
                    <Link
                        onClick={() => {
                            setMessages([])
                            dispatch(SetRegisteringAction(!registering))
                        }}
                        // _text={{
                        //     color: "#fff",
                        //     fontWeight: "medium",
                        //     fontSize: "sm",
                        //     textDecoration: 'underline'
                        // }} 
                        href="#">
                        {registering ? "Login" : "Sign up"}
                    </Link>
                </div>
            </form>
        </motion.div>
    )
}