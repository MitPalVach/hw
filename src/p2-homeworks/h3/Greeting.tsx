import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    users: UserType[]
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}


const Greeting: React.FC<GreetingPropsType> = ({
                                                   name,
                                                   setNameCallback,
                                                   addUser,
                                                   error,
                                                   totalUsers,
                                                   onKeyPressHandler,
                                                   users
                                               }) => {
    const inputClass = error ? s.errorInput : s.input

    const renderedUsers = users.map(u => u.name + ' ')

    return (
        <div className={s.greeting__wrapper}>
            <div className={s.greeting__inner}>
                <input value={name}
                       onChange={setNameCallback}
                       onKeyDown={onKeyPressHandler}
                       className={inputClass}
                       placeholder={'Введите имя...'}
                       onBlur={setNameCallback}/>
                <button className={s.greeting__btn} onClick={addUser}>add</button>
                <span className={s.total_usersCount}>{totalUsers}</span>
                <span className={s.total_usersNames}>{renderedUsers}</span>
            </div>
            <div className={s.error}>{error}</div>

        </div>
    )
}

export default Greeting
