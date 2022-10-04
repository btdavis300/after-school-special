import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Dropdown } from 'flowbite-react'
import icon from "../assets/as-icon.png"
import defaultpic from '../assets/profile-pic.webp'


function NavBar({ loggedIn, currentUser, setCurrentUser, setLoggedIn, visible, setVisible, setProfileCard, setProgramComp, setConnectionComp, fetchSearch, searchErrors, searchFunction, errorsFunction, profPhoto }) {
    const [search, setSearch] = useState("")
    const history = useHistory()

    function handleSearch(e) {
        const query = e.target.value
        setSearch(query)
    }

    function onSearch(e) {
        e.preventDefault()
        if (search.includes("1")) {
            fetch(`/search_zipcode?q=${search}`)
                .then((res) => {
                    if (res.ok) {
                        res.json().then((data) => {
                            searchFunction(data)
                            history.push('/programs')
                        });
                    } else {
                        res.json().then((errors) => {
                            errorsFunction(errors)
                        });
                    }
                });
        } else {
            fetch(`/search_community?q=${search}`)
                .then((res) => {
                    if (res.ok) {
                        res.json().then((data) => {
                            searchFunction(data)
                            history.push('/programs')
                        });
                    } else {
                        res.json().then((errors) => {
                            errorsFunction(errors)
                        });
                    }
                });
        }
    }



    function toLogin() {
        history.push('/login')
        setVisible(true)
    }

    function handleProfDropClick(e) {
        const click = e.target.textContent
        if (click === "My Programs") {
            setProfileCard(false)
            setProgramComp(true)
            setConnectionComp(false)
        } else if (click === "Profile") {
            setProfileCard(true)
            setProgramComp(false)
            setConnectionComp(false)
        } else {
            setProfileCard(false)
            setProgramComp(false)
            setConnectionComp(true)
        }
        history.push('/profile')
    }

    function onSignOut() {
        fetch('/logout', { method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                    setLoggedIn(false)
                    history.push('./')
                }
            })
    }

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src={icon}
                        className="mr-3 h-6 sm:h-9"
                        alt="Afterschool Special"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Afterschool Special
                    </span>
                </Navbar.Brand>
                {loggedIn ?
                    (<div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={currentUser ? <img class='object-cover w-12 h-12 rounded-full border-2 border-gray-400' src={profPhoto.image_url} alt='' /> :
                                null}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Signed in as:
                                </span>
                                <span className="block truncate text-sm font-bold">
                                    {currentUser.username}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={handleProfDropClick}>
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleProfDropClick}>
                                My Programs
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleProfDropClick}>
                                My Connections
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={(onSignOut)}>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                    :
                    (<div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<img class='object-cover w-12 h-12 rounded-full border-2 border-gray-400' src={defaultpic} alt='' />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm font-bold">
                                    Welcome
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    Please Sign In
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={toLogin}>
                                Login
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>)
                }
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="http://localhost:4000/programs">
                        Programs
                    </Navbar.Link>
                    <Navbar.Link href="./connectivity">
                        Connectivity
                    </Navbar.Link>
                    <Navbar.Link href="./navbars">
                        Carpool
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <div class='flex flex-col items-center'>
                <form onSubmit={onSearch} class='w-full sm:w-full md:w-3/4 lg:w-6/12 xl:w-3/5 pb-3 pt-3'>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={handleSearch} autocomplete="off" type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by community, or zipcode..." required="" />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form >
                <div className='absolute pt-20'>
                    {searchErrors.length > 0 ?
                        <></>
                        :
                        <h6 className='text-sm animate-bounce text-red-600'>{searchErrors.error}</h6>
                    }
                </div>
            </div>


        </div >
    )
}

export default NavBar