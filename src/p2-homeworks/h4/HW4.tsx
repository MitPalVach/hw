import React, {ChangeEvent, useState} from 'react'
import appStyles from '../../p1-main/m1-ui/u1-app/App.module.css'
import s from './HW4.module.css';
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Checkbox from "../components/Checkbox/Checkbox";


function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div className={appStyles.hw__inner}>
            <hr/>
            <h2 className={appStyles.hw__title}>
                homeworks 4 - Input, Button, Checkbox
            </h2>
            <div className={s.hw__items}>
                <Input
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={s.testSpanError}
                />
                <Input/>

                <Button>default</Button>

                <Button
                    error={error}
                    onClick={showAlert}
                >
                    delete
                </Button>

                <Button disabled>
                    disabled
                </Button>

                <Checkbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </Checkbox>

                <Checkbox checked={checked} onChange={testOnChange}/>
            </div>
        </div>
    )
}

export default HW4
