 function Input({ label, name, value, onChange, error, errorMessage }) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                style={{ backgroundColor: error ? '#ffd6d6' : undefined }}
            />
            {errorMessage && <div style={{ color: 'red', fontSize: 12 }}>{errorMessage}</div>}
        </>
    )
}

export default Input


