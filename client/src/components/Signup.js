import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Label, TextInput, Button, Checkbox } from 'flowbite-react'

function Signup({ setCurrentUser, setLoggedIn }) {
    const [errors, setErrors] = useState([]);
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
                res.json().then((data) => {
                    setErrors(Object.entries(data.errors));
                    console.log(errors)
                });
            }
        });
    }

    return (
        <React.Fragment>
            <Modal show={true} size="md" popup={true} onClose={() => history.push('./')}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                Create Your Account
                            </h3>
                            <div>
                                {errors ? errors.map(e => <div className='text-sm text-red-600'><span className='text-black dark:text-white'>{e[0] + ': '}</span> {e[1]}</div>) : null}
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
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )


}

export default Signup