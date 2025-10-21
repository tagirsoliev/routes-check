import Input from "../input"
import { useState } from "react"
import { Link } from "react-router-dom"

function Search() {
    const [results, setResults] = useState([])
    const [formData, setFormData] = useState({ name: '' })
    const [errors, setErrors] = useState({})

    const validate = (data) => {
        const e = {}
        if (!data.name) e.name = 'Введите название миссии или имя пилота'
        setErrors(e)
        return Object.keys(e).length === 0
    }

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors(prev => ({ ...prev, [name]: undefined }))
    }

    const findMission = (e) => {
        e.preventDefault()
        if (!validate(formData)) return

        const q = formData.name.trim().toLowerCase()
        const missions = JSON.parse(localStorage.getItem('missions') || '[]')

        const matches = missions.filter(item => {
            const m = item.mission || item
            const nameMatch = m.name?.toLowerCase().includes(q)
            const crewMatch = !!(m.spacecraft?.crew?.some(c => c.name?.toLowerCase().includes(q)))
            return nameMatch || crewMatch
        })

        if (matches.length === 0) {
            alert('Миссия не найдена')
            setResults([])
            return
        }

        const nodes = matches.map((item, idx) => {
            const m = item.mission || item
            return (
                <details key={idx}>
                    <summary>{m.name}</summary>
                    <p><strong>Запуск:</strong> {m.launch_details?.launch_date} — {m.launch_details?.launch_site?.name}</p>
                    <p><strong>Посадка:</strong> {m.landing_details?.landing_date} — {m.landing_details?.landing_site?.name}</p>
                    <p><strong>Корабль:</strong> {m.spacecraft?.command_module} / {m.spacecraft?.lunar_module}</p>
                    <p><strong>Экипаж:</strong></p>
                    <ul>
                        {m.spacecraft?.crew?.map((c, i) => <li key={i}>{c.name} — {c.role}</li>)}
                    </ul>
                </details>
            )
        })

        setResults(nodes)
    }

    return (
        <div>
            <form onSubmit={findMission}>
                <Input label="Name" name="name" value={formData.name} onChange={onChange} error={!!errors.name} errorMessage={errors.name} />
                <button type="submit">Найти</button>
            </form>

            <div style={{ marginTop: 16 }}>
                {results.length > 0 ? results : <div>Результатов нет</div>}
            </div>

            <Link to='/'>Назад</Link>
        </div>
    )
}

export default Search