import CloseIcon from '@mui/icons-material/Close';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import React, { useRef, useState } from 'react';
import { IFormMessage } from '../../enum/IFormMessage';
import { FormMessage } from './message';
import './styles.css';

interface IOwnProps {
    placeholder: string
    type?: "text" | "password"
    passwordToggleEnabled?: boolean
    message?: IFormMessage
    autoCompleteOff?: boolean,
    minCharsRequired?: number
    onChange: (text: string) => void
    onBlur?: (text: string) => void
}

export const FormInput: React.FC<IOwnProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState<string>('')
    const [showPwd, setShowPwd] = useState<boolean>(false)
    const [alert, setAlert] = useState<IFormMessage | undefined>(undefined)

    const {
        message,
        type,
        autoCompleteOff,
        placeholder,
        passwordToggleEnabled,
        minCharsRequired,
        onChange,
        onBlur
    } = props

    React.useEffect(() => {

        console.log(message)

        setAlert(message)
        return () => setAlert(undefined)
    }, [message])

    React.useEffect(() => {
        if (!!alert) {
            if (value.length >= Number(minCharsRequired) || value.length === 0) {
                setAlert(undefined)
            }
        }
    }, [value])

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValue(e.target.value)
        onChange(e.target.value)
    }

    const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const inputLength = e.target.value.length
        if (inputLength > 0 && e.target.value.length < Number(minCharsRequired)) {
            setAlert({
                message: `${placeholder}  ${(minCharsRequired === 1 ? "cannot be empty." : `must be at least 3 characters.`)}`
            })
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
                    {!!alert && <CloseIcon style={{ color: "#C41919" }} />}
                </div>

                {!!alert && <FormMessage message={alert} />}
            </div>
        </>
    )
}