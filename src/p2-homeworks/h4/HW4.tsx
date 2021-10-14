import React, {ChangeEvent, useState} from 'react'
import appStyles from '../../p1-main/m1-ui/u1-app/App.module.css'
import s from './HW4.module.css';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";


function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
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
                    // spanClassName={s.testSpanError}
                />

                {/*<SuperInputText*/}
                {/*    className={s.blue} // проверьте, работает ли смешивание классов*/}
                {/*/>*/}

                {/*----------------------------------------------------*/}

                <Button >
                    default
                </Button>

                <Button
                    error={error} // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </Button>

                <Button disabled>
                    disabled
                </Button>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>
        </div>
    )
}

export default HW4
