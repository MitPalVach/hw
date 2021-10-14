import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css';
import appStyles from '../../p1-main/m1-ui/u1-app/App.module.css';

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={s.affairs__wrapper}>
            <div className={s.mappedAffairs}>
                {mappedAffairs}
            </div>
            <div className={s.affairs__buttons}>
                <button className={appStyles.btnOrig} onClick={setAll}>All</button>
                <button className={appStyles.btnOrig} onClick={setHigh}>High</button>
                <button className={appStyles.btnOrig} onClick={setMiddle}>Middle</button>
                <button className={appStyles.btnOrig} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
