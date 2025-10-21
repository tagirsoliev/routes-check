import { Link, useNavigate } from "react-router-dom"


function Missions() {
    const navigate = useNavigate()

    const lunarMission = [
        {
            mission: {
                name: "Аполлон-11",
                launch_details: {
                    launch_date: "1969-07-16",
                    launch_site: {
                        name: "Космический центр имени Кеннеди",
                        location: { latitude: "28.5721000", longitude: "-80.6480000" }
                    }
                },
                landing_details: {
                    landing_date: "1969-07-20",
                    landing_site: {
                        name: "Море спокойствия",
                        coordinates: { latitude: "0.6740000", longitude: "23.4720000" }
                    }
                },
                spacecraft: {
                    command_module: "Колумбия",
                    lunar_module: "Орел",
                    crew: [
                        { name: "Нил Армстронг", role: "Командир" },
                        { name: "Базз Олдрин", role: "Пилот лунного модуля" },
                        { name: "Майкл Коллинз", role: "Пилот командного модуля" }
                    ]
                }
            }
        },
        {
            mission: {
                name: "Аполлон-17",
                launch_details: {
                    launch_date: "1972-12-07",
                    launch_site: {
                        name: "Космический центр имени Кеннеди",
                        location: { latitude: "28.5721000", longitude: "-80.6480000" }
                    }
                },
                landing_details: {
                    landing_date: "1972-12-19",
                    landing_site: {
                        name: "Телец-Литтров",
                        coordinates: { latitude: "20.1908000", longitude: "30.7717000" }
                    }
                },
                spacecraft: {
                    command_module: "Америка",
                    lunar_module: "Челленджер",
                    crew: [
                        { name: "Евгений Сернан", role: "Командир" },
                        { name: "Харрисон Шмитт", role: "Пилот лунного модуля" },
                        { name: "Рональд Эванс", role: "Пилот командного модуля" }
                    ]
                }
            }
        }
    ]
    if (!localStorage.getItem('missions')) {
        localStorage.setItem('missions', JSON.stringify(lunarMission))
    }
    const deleteMission = (idx) => {
        const missions = JSON.parse(localStorage.getItem('missions'));
        missions.splice(idx, 1);
        localStorage.setItem('missions', JSON.stringify(missions));
        window.location.reload();
    }

    const changeMission = (idx) => {
        navigate('/')
    }

    const missions = JSON.parse(localStorage.getItem('missions') || '[]')

    return (
        <div>
            {missions.map((item, idx) => {
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
                        <button onClick={deleteMission}>Удалить</button>
                        <button onClick={changeMission}>Редактирование миссии</button>
                    </details>
                )
            })}
            <button onClick={changeMission}>Добавление миссии</button>
            <button onClick={navigate('/missions')}>Список миссий</button>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default Missions
