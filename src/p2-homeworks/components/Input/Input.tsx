import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent} from 'react';
import appStyles from "../../../p1-main/m1-ui/u1-app/App.module.css";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type InputPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}
const Input: FC<InputPropsType> = (
    {
        type,
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter()
    }
    const inputClass = error ? appStyles.inputError : appStyles.inputOrig

    return (<div className={appStyles.input__inner}>
            <input type={'text'}
                   onChange={onChangeCallback}
                   onKeyDown={onKeyPressCallback}
                   className={inputClass}
                   {...restProps}  />
            <div>
                <div className={appStyles.errorMessage}>{error}</div>
            </div>
        </div>
    )

};

export default Input;





