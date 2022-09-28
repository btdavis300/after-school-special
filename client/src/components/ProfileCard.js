import React, { useState } from 'react'
import profPic from '../assets/prof-pic-ph.png'
import { Button } from 'flowbite-react'



function ProfileCard({ currentUser, setCurrentUser }) {
    const [showEdit, setShowEdit] = useState(false)
    const [formData, setFormData] = useState({})
    const [checked, setChecked] = useState(true)

    function handleInputChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
    }

    function handleCheckbox(e) {
        setFormData({ ...formData, [e.target.name]: e.target.checked })
    }

    function handleChecked() {
        setChecked(!checked)
    }

    const form = document.getElementById("update-form")

    function handleSubmit(e) {
        // e.preventDefault();
        fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                setCurrentUser(data)
                // setShowEdit(false)
                // form.reset()
            });
    }


    function handleEdit() {
        setShowEdit(!showEdit)
        form.scrollIntoView({ behavior: "smooth" });
    }


    return (
        <div class='w-3/4'>
            <div class='flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center'>
                <img class="w-72 h-72 rounded-full " src={profPic} alt="profile picture" />

                <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div class="flex flex-col pb-3">
                        <dt class="mb-1 text-gray-500 md:text-sm dark:text-gray-400">Full name</dt>
                        <dd class="text-sm font-semibold">{currentUser.first_name} {currentUser.last_name}</dd>
                    </div>
                    <div class="flex flex-col py-3">
                        <dt class="mb-1 text-gray-500 md:text-sm dark:text-gray-400">Username</dt>
                        <dd class="text-sm font-semibold">{currentUser.username}</dd>
                    </div>
                    <div class="flex flex-col pt-3">
                        <dt class="mb-1 text-gray-500 md:text-sm dark:text-gray-400">Email address</dt>
                        <dd class="text-sm font-semibold">{currentUser.email}</dd>
                    </div>
                </dl>

                <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div class="flex flex-col pb-3">
                        <dt class="mb-1 text-gray-500 md:text-sm dark:text-gray-400">Home address</dt>
                        <dd class="text-sm font-semibold">{currentUser.address} {currentUser.zipcode}, New York City, New York</dd>
                    </div>
                    <div class="flex flex-col py-3">
                        <dt class="mb-1 text-gray-500 md:text-sm dark:text-gray-400">Number of children</dt>
                        <dd class="text-sm font-semibold">{currentUser.children_quantity}</dd>
                    </div>
                    <div class="flex flex-col pt-3">
                        <dt class="mb-1 text-gray-500 md:text-sm dark:text-gray-400">Grade level</dt>
                        <dd class="text-sm font-semibold">{currentUser.grade_level}</dd>
                    </div>
                </dl>

            </div>

            <div class='flex justify-center'>
                <Button
                    onClick={handleEdit}
                    outline={true}
                    gradientDuoTone="cyanToBlue"
                    class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white active:text-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
                >
                    Edit Profile
                </Button>
            </div>
            {/* {showEdit ? */}
            <div class={showEdit ? " " : "invisible"}>
                <form id="update-form" class='pt-4 pb-10' onSubmit={handleSubmit}>
                    <div class="relative z-0 mb-6 w-full group">
                        <input onChange={handleInputChange} type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input onChange={handleInputChange} type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    {/* <div class="relative z-0 mb-6 w-full group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                    <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div> */}
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 mb-6 w-full group">
                            <input onChange={handleInputChange} type="text" name="first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div class="relative z-0 mb-6 w-full group">
                            <input onChange={handleInputChange} type="text" name="last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 mb-6 w-full group">
                            <input onChange={handleInputChange} type="text" name="address" id="floating_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street Address</label>
                        </div>
                        <div class="relative z-0 mb-6 w-full group">
                            <input onChange={handleInputChange} type="text" name="zipcode" id="floating_zipcode" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label for="floating_zipcode" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Zipcode</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 mb-6 w-full group">
                            <label for="children" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Number of Children</label>
                            <select onChange={handleInputChange} name="children_quantity" id="children" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7+</option>
                            </select>
                        </div>
                        <div class="relative z-0 mb-6 w-full group">
                            <label for="grade_level" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select Grade Level</label>
                            <select onChange={handleInputChange} name="grade_level" id="grade_level" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Elementary</option>
                                <option>Elementary/Middle School</option>
                                <option>Middle School</option>
                                <option>Middle/High School</option>
                                <option>High School</option>
                            </select>
                        </div>
                    </div>
                    {currentUser.private ?
                        <div class="flex items-center mb-4">
                            <input id="private" name="private" onChange={handleCheckbox} onClick={handleChecked} type="checkbox" checked={checked} value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="private" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Set to private account?</label>
                        </div>
                        :
                        <div class="flex items-center mb-4">
                            <input id="private" name="private" onChange={handleCheckbox} onClick={handleChecked} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="private" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Set to private account?</label>
                        </div>
                    }
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                </form>
            </div>
            {/* : */}
            {/* <></>
            } */}
        </div>
    )
}

export default ProfileCard