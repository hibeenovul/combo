import { useState } from 'react'
import axios from 'axios'

function Register() {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
            const response = await axios.post('/api/users/register/', {
                first_name: form.first_name,
                last_name: form.last_name,
                username: form.username,
                email: form.email,
                password: form.password,
            })
            alert('Registration successful!')
            console.log(response.data)
        } catch (error) {
            console.error('There was an error registering!', error)
            alert('Registration failed. Please try again.')
        }
    }

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Comfirm Password:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="first_name">First Name:</label>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>
        </div>
    )
}

export default Register