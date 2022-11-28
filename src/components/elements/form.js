import './form.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Page ({title, link, btn, handleClick}) {
    const navigation = useNavigate()

    const [valuelog, setValuelog] = useState('');
    function handleChangeOne(event) {
        setValuelog(event.target.value); // ссылка на DOM элемент инпута
    }

    const [valuepass, setValuepass] = useState('');
    function handleChangeTwo(event) {
        setValuepass(event.target.value); // ссылка на DOM элемент инпута
    }

    let [displayLogOne, setDisplayLogOne] = useState({display: 'none'});
    const changeDisplayLogOne = () => {
        setDisplayLogOne({display: 'block'})
    }

    let [displayPassOne, setDisplayPassOne] = useState({display: 'none'});
    const changeDisplayPassOne = () => {
        setDisplayPassOne({display: 'block'})
    }

    let [displayLogTwo, setDisplayLogTwo] = useState({display: 'none'});
    const changeDisplayLogTwo = () => {
        setDisplayLogTwo({display: 'block'})
    }

    let [displayPassTwo, setDisplayPassTwo] = useState({display: 'none'});
    const changeDisplayPassTwo = () => {
        setDisplayPassTwo({display: 'block'})
    }

    const handleClickReg = (e) => {
        e.preventDefault()

        if (valuelog.length === 0) {
            changeDisplayLogOne()
        } else if (valuelog.length < 4) {
            changeDisplayLogTwo()
        }
        
        if (valuepass.length === 0) {
            changeDisplayPassOne()
        } else if (valuepass.length < 4) {
            changeDisplayPassTwo()
        } else {
        navigation ('/')
        }

    function makeUser(valuelog, valuepass) {
        return {
            login: valuelog,
          password: valuepass
        };
    }

    let user = makeUser(valuelog, valuepass);

    localStorage.setItem('user', JSON.stringify(user))

    console.log('login:', valuelog)
    console.log('Password:', valuepass)
}

    return (
        <main className="main">
            <div className="window">
                <div onClick={handleClick} className="window__authorization">{link}</div>

                <div className="window__registration">{title}</div>

                <form action="">
                    <input
                    value={valuelog}
                    onChange={handleChangeOne}
                    className="login__input"
                    type="text"
                    placeholder="Логин" />
                    <span style={displayLogOne} className='error__log_one'>Поле не должно быть пустым</span>
                    <span style={displayLogTwo} className='error__log_two'>Логин должен содержать не менее 4-х символов</span>

                    <input
                    value={valuepass}
                    onChange={handleChangeTwo}
                    className="password__input"
                    type="text"
                    placeholder="Пароль" />
                    <span style={displayPassOne} className='error__pass_one' >Поле не должно быть пустым</span>
                    <span style={displayPassTwo} className='error__pass_two' >Пароль должен содержать не менее 4-х символов</span>

                    <div className="updates__checkbox">
                        <input
                        className="checkbox"
                        type="checkbox" />

                        <div className="window__updates">Я согласен получать обновления на почту</div>
                    </div>

                    <button onClick={handleClickReg} className="button">{btn}</button>
                </form>
            </div>
        </main>
        )
}

export default Page
