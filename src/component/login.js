import React, { useState } from 'react'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const users = props.users;
    const handleSubmit = (e) => {
        e.preventDefault();

        // Find user with matching email and password
        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        console.log(users)
        if (user) {
            alert(`Welcome ${user.firstName} ${user.lastName} Gender: ${user.gender} Email: ${user.email}`);
        } else {
            alert('Invalid email and password!')
        }
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' name='email'></input>
                <label for="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='********' name='password'></input>
                <div className='submit-cont'>
                    <button className='submit' type="submit">Log In</button>
                </div>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login
