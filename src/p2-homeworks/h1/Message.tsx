import React from 'react'
import s from './Message.module.css'


type MessageTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageTypes) {
    return (
        <div className={s.message__wrapper}>
            <img className={s.message__avatar} src={props.avatar} alt="avatar"/>
            <div className={s.message__item}>
                <div className={s.message__item_nameTime}>
                    <h4 className={s.message__item_name}>{props.name}</h4>
                    <span className={s.message__item_time}>{props.time}</span>
                </div>
                <p className={s.message__item_message}>{props.message}</p>
            </div>
        </div>
    )
}

export default Message
