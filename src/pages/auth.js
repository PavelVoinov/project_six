import Page from "../components/elements/form";
import { useNavigate } from 'react-router-dom'

function Auth () {
    const navigation = useNavigate()

    const handleLink = () => {
        navigation('/reg')
    }

    return (
        <Page
        title='Вход'
        link='Зарегистрироваться'
        btn='Войти'
        handleClick={handleLink}
        />
    )
}

export default Auth