import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import appStyles from '../../p1-main/m1-ui/u1-app/App.module.css'
import {v1} from "uuid";


// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        const newUser = {_id: v1(), name}
        setUsers([newUser, ...users])
    }

    return (
        <div className={appStyles.hw__inner}>
            <hr/>
            <h2 className={appStyles.hw__title}>
                homeworks 3 - Greeting
            </h2>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
