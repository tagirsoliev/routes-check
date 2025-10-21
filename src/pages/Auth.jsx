import { useState } from 'react'
import Input from '../input'
import { Link, useNavigate } from "react-router-dom"

function Auth({ setEmail }) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const validate = (data) => {
        const e = {}
        if (!data.email) e.email = 'Введите email'
        if (!data.password) e.password = 'Введите пароль'
        setErrors(e)
        return Object.keys(e).length === 0
    }

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
        if (!validate(formData)) return
        if (users.find(user => user.email === formData.email && user.password === formData.password)) {
            setEmail(formData.email)
            console.log('Успешно')
            navigate('/gagarin')
            localStorage.setItem('isAuth', JSON.stringify(true))
        } else {
            setErrors({password: 'Почта или пароль неверны'})
        }
    }

    return (
        <>
            <div>
                <h1>Авторизация</h1>
                <form onSubmit={createUser}>
                    <Input label="Email" name="email" value={formData.email} onChange={onChange} error={!!errors.email} errorMessage={errors.email} />
                    <Input label="Password" name="password" type="password" value={formData.password} onChange={onChange} error={!!errors.password} errorMessage={errors.password} />
                    <button type="submit" onClick={findUser}>Войти</button>
                </form>
                <Link to='/'>Назад</Link>
            </div>
        </>
    )
}

export default Auth
