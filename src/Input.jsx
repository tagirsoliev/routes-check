function Input({ label, name, value, onChange,}) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export default Input


