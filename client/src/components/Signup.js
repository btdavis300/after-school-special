import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Label, TextInput, Button, Checkbox } from 'flowbite-react'

function Signup({ setCurrentUser, setLoggedIn, setVisible, visible }) {
    const history = useHistory()
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
                    setCurrentUser(formData);
                    setLoggedIn(formData)
                    history.push('/profile')

                });
            } else {
                res.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
    }

    return (
        // <div>
        //     <div className="form-box">
        //         <div className="login-box">
        //             <h1>Signup</h1>
        //             <div className="form-container">
        //                 <form className="login-signup-form" onSubmit={handleSubmit}>
        //                     <section className="input-form">
        //                         <label>Username:</label>
        //                         <input
        //                             type="text"
        //                             name="username"
        //                             value={username}
        //                             onChange={handleChange}
        //                             placeholder="  Enter Username">
        //                         </input>
        //                     </section>

        //                     <section className="input-form">
        //                         <label>Email:</label>
        //                         <input type="text" name="email" value={email} onChange={handleChange} placeholder="  Enter Email" />
        //                     </section>
        //                     <section className="input-form">
        //                         <label>Password:</label>
        //                         <input
        //                             type="password"
        //                             name="password"
        //                             value={password}
        //                             onChange={handleChange}
        //                             placeholder="  Enter Password" />
        //                     </section>
        //                     <section className="input-form">
        //                         <input className="lg-su-button" type="submit" value="Sign up!" />
        //                     </section>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <React.Fragment>
            <Modal show={visible} size="md" popup={true} onClose={() => setVisible(false)}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Create Your Account
                            </h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="username" value="Your username" />
                                </div>
                                <TextInput
                                    placeholder="Username"
                                    required={true}
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" />
                                </div>
                                <TextInput
                                    placeholder="name@email.com"
                                    required={true}
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your password" />
                                </div>
                                <TextInput
                                    name="password"
                                    type="password"
                                    required={true}
                                    value={password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                            </div>
                            <div className="w-full">
                                <Button type="submit">Create Account</Button>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?
                                <a
                                    href="/signup"
                                    className="text-blue-700 hover:underline dark:text-blue-500"
                                >
                                    Create account
                                </a>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )


}

export default Signup