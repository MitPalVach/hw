import React, {FC, InputHTMLAttributes} from 'react';


type CheckboxPropsType = {
    disabled?: boolean
}
const Checkbox: FC<React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement> & CheckboxPropsType, HTMLInputElement>> = (props) => {


    return (
        <input {...props} type={'checkbox'}/>
    );
};

export default Checkbox;