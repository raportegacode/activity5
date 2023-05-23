import React, { useState } from 'react'

function Register(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCPass] = useState('');
    const [gender, setGender] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const users = props.users;
    const toggleform = props.onFormSwitch;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pass !== cpass) {
            alert("Passwords do not match");
            return;
        }

        const userExists = users.find((user) => user.email === email);
        if (userExists) {
            alert("User already exists with this email");
            return;
        }

        if (email == "" || pass == "" || fname == "" || lname == "") {
            alert("Please complete all inputs!")
        }

        if (fname !== "", lname !== "", gender !== "", email !== "", pass !== "", cpass !== "") {
            users.push({ firstName: fname, lastName: lname, gender: gender, email: email, password: pass });
            alert("Registration successful");
            toggleform('login');
        }

    }
    return (
        <div className='container'>
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name:</label>
                <input value={fname} name="fname" onChange={(e) => setFname(e.target.value)} id="fname" placeholder="First Name" />
                <label htmlFor="lname">Last Name:</label>
                <input value={lname} name="lname" onChange={(e) => setLname(e.target.value)} id="lname" placeholder="Last Name" />
                <label htmlFor='gender'>
                    Gender:
                </label>
                <select name='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password:</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="cpassword">Confirm Password:</label>
                <input value={cpass} onChange={(e) => setCPass(e.target.value)} type="password" placeholder="********" id="cpassword" name="cpassword" />
                <div className='submit-cont'>
                    <button className='submit' type="submit">Register</button>
                </div>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register
