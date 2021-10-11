import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css';


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
                <button className={s.filter__btn} onClick={setAll}>All</button>
                <button className={s.filter__btn} onClick={setHigh}>High</button>
                <button className={s.filter__btn} onClick={setMiddle}>Middle</button>
                <button className={s.filter__btn} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
