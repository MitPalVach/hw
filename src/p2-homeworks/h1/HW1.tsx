import React from 'react'
import Message from "./Message";
import appStyles from '../../p1-main/m1-ui/u1-app/App.module.css'


const messageData = {
    avatar: 'https://pbs.twimg.com/profile_images/890611271028137984/_5xAXOi-_400x400.jpg',
    name: 'MitPal',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci consectetur reprehenderit?',
    time: '22:00',
}

function HW1() {
    return (
        <div className={appStyles.hw__inner}>
            <hr/>
            <h2 className={appStyles.hw__title}>
                homeworks 1 - Message
            </h2>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1




