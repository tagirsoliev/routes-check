import { useState } from "react"
import Input from "../input"
import { Link } from "react-router"

function Reg() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        password: '',
        email: ''
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const addUser = () => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        users.push(formData)
        localStorage.setItem('users', JSON.stringify(users))
    }

    const createUser = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={createUser}>
                <Input label="Email" name="email" value={formData.email} onChange={onChange} />
                <Input label="Name" name="name" value={formData.name} onChange={onChange} />
                <Input label="Surname" name="surname" value={formData.surname} onChange={onChange} />
                <Input label="Password" name="password" type="password" value={formData.password} onChange={onChange} />
                <Input label="Password retry" name="passwordRetry" type="password" value={formData.passwordRetry} onChange={onChange} />
                <button type="submit" onClick={addUser}>Зарегестрироваться</button>
            </form>
            <Link to='/'>Назад</Link>
        </div>
    )
}

export default Reg
