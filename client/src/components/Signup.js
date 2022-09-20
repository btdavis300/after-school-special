import React, { useState } from 'react'

function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { username, email, password } = formData;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((formData) => {
                    console.log(formData)
                });
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    }

    return (
        <div>
            <div className="form-box">
                <div className="login-box">
                    <h1>Signup</h1>
                    <div className="form-container">
                        <form className="login-signup-form" onSubmit={handleSubmit}>
                            <section className="input-form">
                                <label>Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                    placeholder="  Enter Username">
                                </input>
                            </section>

                            <section className="input-form">
                                <label>Email:</label>
                                <input type="text" name="email" value={email} onChange={handleChange} placeholder="  Enter Email" />
                            </section>
                            <section className="input-form">
                                <label>Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    placeholder="  Enter Password" />
                            </section>
                            <section className="input-form">
                                <input className="lg-su-button" type="submit" value="Sign up!" />
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup