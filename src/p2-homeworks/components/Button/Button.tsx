import React, {FC, ButtonHTMLAttributes} from 'react';
import appStyles from "../../../p1-main/m1-ui/u1-app/App.module.css";


type ButtonPropsType = {
    error?: string
}
const Button: FC<React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropsType, HTMLButtonElement>> = (props) => {
    const btnClass = props.error ? appStyles.btnRed : appStyles.btnOrig

    return (
        <button {...props} className={btnClass}/>
    );
};

export default Button;