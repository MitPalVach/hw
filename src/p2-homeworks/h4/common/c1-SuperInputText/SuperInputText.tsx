// import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
// import s from './SuperInputText.module.css'
// import appStyles from '../../../../p1-main/m1-ui/u1-app/App.module.css';
//
//
// // тип пропсов обычного инпута
// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
//
// // здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// // (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
// type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
//     onChangeText?: (value: string) => void
//     onEnter?: () => void
//     error?: string
//     spanClassName?: string
// }
//
// const SuperInputText: React.FC<SuperInputTextPropsType> = (
//     {
//         type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
//         onChange, onChangeText,
//         onKeyPress, onEnter,
//         error,
//         className, spanClassName,
//
//         ...restProps// все остальные пропсы попадут в объект restProps
//     }
// ) => {
//     const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
//         onChange // если есть пропс onChange
//         && onChange(e) // то передать ему е (поскольку onChange не обязателен)
//
//         onChangeText && onChangeText(e.currentTarget.value)
//     }
//     const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
//         onKeyPress && onKeyPress(e);
//
//         onEnter // если есть пропс onEnter
//         && e.key === 'Enter' // и если нажата кнопка Enter
//         && onEnter() // то вызвать его
//     }
//
//     // const finalSpanClassName = error && `${s.error} ${spanClassName ? spanClassName : ''}`
//     const finalSpanClassName = error ? appStyles.spanTagError : appStyles.spanTag
//     const finalInputClassName = error ? appStyles.inputError : appStyles.inputOrig // need to fix with (?:) and s.superInput
//
//     return (
//         <>
//             <input
//                 type={'text'}
//                 onChange={onChangeCallback}
//                 onKeyDown={onKeyPressCallback}
//                 className={finalInputClassName}
//                 {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
//             />
//             {error && <span className={finalSpanClassName}>{error}</span>}
//         </>
//     )
// }
//
// export default SuperInputText


import React from 'react';

const SuperInputText = () => {
    return (
        <div>

        </div>
    );
};

export default SuperInputText;