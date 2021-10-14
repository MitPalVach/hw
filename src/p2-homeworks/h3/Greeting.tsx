import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import appStyles from '../../p1-main/m1-ui/u1-app/App.module.css';
import {UserType} from "./HW3";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";


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
    const inputClass = error ? appStyles.inputError : appStyles.inputOrig

    const renderedUsers = users.map(u => u.name + ' ')

    return (
        <div className={s.greeting__wrapper}>
            <Input value={name}
                   onChange={setNameCallback}
                   onKeyDown={onKeyPressHandler}
                   className={inputClass}
                   placeholder={'Введите имя...'}
                   onBlur={setNameCallback}
                   error={error}
            />
            <Button onClick={addUser}>add</Button>
            <span className={s.total_usersCount}>{totalUsers}</span>
            <span className={s.total_usersNames}>{renderedUsers}</span>
        </div>
    )
}

export default Greeting
