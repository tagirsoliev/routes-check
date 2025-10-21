import { useState } from "react"
import Input from "../input"
import { Link, useNavigate } from "react-router-dom"

function Reg({ setName }) {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        password: '',
        passwordRetry: '',
        email: ''
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validate = (data) => {
        const e = {}
        if (!data.email) e.email = 'Введите email'
        if (!data.name) e.name = 'Введите имя'
        if (!data.surname) e.surname = 'Введите фамилию'
        if (!data.password || data.password.length < 6) e.password = 'Пароль минимум 6 символов'
        if (data.password !== data.passwordRetry) e.passwordRetry = 'Пароли не совпадают'
        setErrors(e)
        return Object.keys(e).length === 0
    }

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors(prev => ({ ...prev, [name]: undefined }))
    }

    const createUser = (e) => {
        e.preventDefault()
        if (!validate(formData)) return
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        users.push(formData)
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('isAuth', JSON.stringify(true))
        setName(formData.name)
        navigate('/')
    }

    return (
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={createUser}>
                <Input label="Email" name="email" value={formData.email} onChange={onChange} error={!!errors.email} errorMessage={errors.email} />
                <Input label="Name" name="name" value={formData.name} onChange={onChange} error={!!errors.name} errorMessage={errors.name} />
                <Input label="Surname" name="surname" value={formData.surname} onChange={onChange} error={!!errors.surname} errorMessage={errors.surname} />
                <Input label="Password" name="password" type="password" value={formData.password} onChange={onChange} error={!!errors.password} errorMessage={errors.password} />
                <Input label="Password retry" name="passwordRetry" type="password" value={formData.passwordRetry} onChange={onChange} error={!!errors.passwordRetry} errorMessage={errors.passwordRetry} />
                <button type="submit">Зарегестрироваться</button>
            </form>
            <Link to='/'>Назад</Link>
        </div>
    )
}

export default Reg
