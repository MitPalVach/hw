import React from 'react'
import s from './Affair.module.css';
import {AffairType} from "./HW2";
import appStyles from '../../p1-main/m1-ui/u1-app/App.module.css';


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
            <button className={appStyles.btnRound} onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
