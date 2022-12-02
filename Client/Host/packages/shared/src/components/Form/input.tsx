import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import React, { useRef, useState } from 'react';
import { IFormMessage } from '../../enum/IFormMessage';
import { FormValidation } from '../../screens/Login';
import { IsValidEmail, isValidUrl } from '../../utils/Validators';
import { FormMessage } from './message';
import './styles.css';

interface IOwnProps {
    placeholder: string
    validation: FormValidation
    type?: "text" | "password"
    passwordToggleEnabled?: boolean
    message?: IFormMessage
    autoCompleteOff?: boolean,
    onChange: (text: string) => void
    onBlur?: (text: string) => void
}

export const FormInput: React.FC<IOwnProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>(props.validation.value)
    const [showPwd, setShowPwd] = useState<boolean>(false)
    const [alert, setAlert] = useState<IFormMessage | undefined>(undefined)
    const [validValue, setValidValue] = useState<boolean>(false)

    const {
        message,
        type,
        autoCompleteOff,
        placeholder,
        passwordToggleEnabled,
        onChange,
        onBlur,
        validation: {
            minCharsRequired,
            emailValidator,
            urlValidator
        }
    } = props

    React.useEffect(() => {
        setAlert(message)
        return () => {
            setAlert(undefined)
            setValidValue(false)
        }
    }, [message])

    React.useEffect(() => {
        if (!!alert) {
            if (value.length >= Number(minCharsRequired) || value.length === 0) {
                setAlert(undefined)
                setValidValue(false)
            }
        }


    }, [value])

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValue(e.target.value)
        onChange(e.target.value)
    }

    const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const value = e.target.value

        if (e.target.value.length < Number(minCharsRequired)) {
            if (value.length > 0) {
                setAlert({
                    message: `${placeholder}  ${(minCharsRequired === 1 ? "cannot be empty." : `must be at least ${minCharsRequired} characters.`)}`
                })
            }
            else {
                if (validValue) {
                    setValidValue(false)
                }
            }
        }
        else if (emailValidator) {
            if (!IsValidEmail(value)) {
                setAlert({
                    message: `The email address is badly formatted.` // same as aws server  error
                })
            }
            else {
                setAlert(undefined)
                setValidValue(true)
            }
        }
        else if (urlValidator) {
            if (!isValidUrl(value)) {
                setAlert({
                    message: `The link is badly formatted.`
                })
            }
            else {
                setAlert(undefined)
                setValidValue(true)
            }
        }

        else {
            setValidValue(true)
        }

        onBlur && onBlur(e.target.value)
    }

    return (
        <>
            <div style={{ position: 'relative' }}>
                <input
                    ref={ref}
                    placeholder={placeholder}
                    type={type ?? passwordToggleEnabled ? !showPwd ? "password" : "text" : "text"}
                    style={{ width: '100%' }}
                    autoComplete={autoCompleteOff ? "off" : undefined}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    value={value}
                />
                <div style={{ position: 'absolute', top: 20, right: 0 }}>
                    {!!passwordToggleEnabled &&
                        <span onClick={() => setShowPwd(!showPwd)}>
                            {showPwd ? <VisibilityOffOutlinedIcon style={{ color: 'grey ' }} /> : <VisibilityOutlinedIcon style={{ color: 'grey ' }} />}
                        </span>
                    }

                    {
                        !!alert ? <CloseIcon style={{ color: "#C41919" }} /> :
                            validValue ? <CheckIcon style={{ color: "#45C419" }} />
                                : null
                    }
                </div>

                {!!alert && <FormMessage message={alert} />}
            </div>
        </>
    )
}