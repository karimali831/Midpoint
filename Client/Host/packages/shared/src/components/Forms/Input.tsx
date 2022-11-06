import { FormControl, Input, InputLabel } from "@mui/material";
import classNames from "classnames";
import React from "react";
import useStyles from './inputStyle';

interface IOwnProps {
    labelText: string,
    labelProps?: object,
    id: string,
    inputProps?: object,
    formControlProps: any,
    inputRootCustomClasses: string,
    error?: boolean,
    success?: boolean,
    white?: boolean
    type?: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export const FormInput: React.FC<IOwnProps> = (props) => {

    const {
        classes
    } = useStyles();
    const {
        formControlProps,
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        white,
        inputRootCustomClasses,
        success,
        type,
        handleChange
    } = props;

    const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white
    });
    const marginTop = classNames({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = classNames({
        [classes.input]: true,
        [classes.whiteInput]: white
    });
    var formControlClasses;
    if (formControlProps !== undefined) {
        formControlClasses = classNames(
            formControlProps.className,
            classes.formControl
        );
    } else {
        formControlClasses = classes.formControl;
    }
    return (
        <FormControl {...formControlProps} className={formControlClasses}>
            {labelText !== undefined ? (
                <InputLabel
                    className={classes.labelRoot + " " + labelClasses}
                    htmlFor={id}
                    {...labelProps}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <Input
                classes={{
                    input: inputClasses,
                    root: marginTop,
                    disabled: classes.disabled,
                    underline: underlineClasses
                }}
                id={id}
                onChange={handleChange}
                {...inputProps}
                type={type}
            />
        </FormControl>
    );
}

