import React from 'react'
import s from './Affair.module.css';
import {AffairType} from "./HW2";


type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.affair__wrapper}>
            <div className={s.affair__text}>{props.affair.name}</div>
            <div className={s.affair__priority}>{props.affair.priority}</div>
            <button className={s.delete__btn} onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
