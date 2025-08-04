import { useState } from 'react'
import axios from 'axios'
import '../styles/login.css' 
import user from '../assets/user.png'

function Login() {
    const [form, setForm] = useState({
        username: '',
        password: '',
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
            const response = await axios.post('http://127.0.0.1:8000/api/users/login/', {
                username: form.username,
                password: form.password,
            })
            alert('Login successful!')
            console.log(response.data)
        } catch (error) {
            console.error('There was an error logging in!', error)
            alert('Login failed. Please try again.')
        }
    }

    return (
        <div className="login-container">
            <h2>USER LOGIN</h2>
            <div className="login-icon">
                <img src={user} alt="User Icon" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className='input-section'>
                    <div>
                        <label htmlFor="username"></label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder='User Name'
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password"></label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className='forget-password'>Forget password?</div>
                <button type="submit"><span>Login</span></button>
                <div className='account'>Don't have an account? Sign up</div>
            </form>
        </div>
    )
}
export default Login









