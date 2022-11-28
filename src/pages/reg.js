import Page from "../components/elements/form";
import { useNavigate } from 'react-router-dom'

function Reg () {
    const navigation = useNavigate()

    const handleLink = () => {
        navigation('/auth')
    }

    return (
        <Page
        title='Регистрация'
        link='Авторизоваться'
        btn='Зарегистрироваться'
        handleClick={handleLink}
        />
    )
}

export default Reg