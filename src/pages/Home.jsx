import { useState } from "react"
import { Link } from "react-router"

function Home({ name, email }) {
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('isAuth') || 'false'))

    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userName = name || users.find(user => user.email === email)?.name

    const exit = () => {
        setAuth(false)
        localStorage.setItem('isAuth', JSON.stringify(false))
        console.log('exit');
    }
    if (!auth) {
        return (
            <div>
                <Link to="/reg">Регистрация</Link>
                <Link to="/auth">Вход</Link>
                <button onClick={exit} type="button">Выйти</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Добро пожаловать! {userName}</h1>
                <Link to="/gagarin">Информация о Гагарине</Link>
                <Link to="/missions">Миссии</Link>
                <Link to="/moon">Заказ на луне</Link>
                <Link to="/search">Поиск</Link>
                <button onClick={exit} type="button">Выйти</button>
            </div>
        )
    }

}

export default Home
