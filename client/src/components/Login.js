import React, { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((formData) => {
                    console.log(formData);
                });
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    }

    return (
        <div className='form-box'>
            <div className='login-box'>
                <h1>Login</h1>
                <div className='form-container'>
                    <form className='login-setup-form' onSubmit={handleSubmit}>
                        <section className='input-form'>
                            <label>Email:</label>
                            <input
                                type='text'
                                name='email'
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter Email"
                            />
                        </section>
                        <section className='input-form'>
                            <label>Password:</label>
                            <input
                                type='password'
                                name='password'
                                value={password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                            />
                        </section>
                        <section className='input-form'>
                            <input className='button' type='submit' value="Login" />
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login