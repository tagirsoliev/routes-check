import { useState } from 'react'
import Input from '../input'
import { Link } from 'react-router'

function Auth() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        console.log(formData);

    }
    const createUser = (e) => {
        e.preventDefault()
    }
    const findUser = () => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        if (users.find(user => user.email === formData.email && user.password === formData.password)) {
            console.log('Успешно')
            window.location.href = '/'
        } else {
            alert('Неверный логин или пароль')
        }
    }

    return (
        <>
            <div>
                <h1>Авторизация</h1>
                <form onSubmit={createUser}>
                    <Input label="Email" name="email" value={formData.email} onChange={onChange} />
                    <Input label="Password" name="password" type="password" value={formData.password} onChange={onChange} />
                    <button type="submit" onClick={findUser}>Зарегестрироваться</button>
                </form>
                <Link to='/'>Назад</Link>
            </div>
        </>
    )
}

export default Auth
