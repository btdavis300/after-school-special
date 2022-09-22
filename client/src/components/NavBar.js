import React from 'react'
import { useHistory } from 'react-router-dom'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import icon from "../assets/as-icon.png"


function NavBar({ loggedIn, currentUser, setCurrentUser, setLoggedIn, visible, setVisible }) {

    const history = useHistory()

    function toLogin() {
        history.push('/login')
        setVisible(!visible)
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
                        alt="Flowbite Logo"
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
                            label={<Avatar alt="User settings" rounded={true} bordered={true} />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Signed in as:
                                </span>
                                <span className="block truncate text-sm font-bold">
                                    {currentUser.username}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={() => history.push('./profile')}>
                                Profile
                            </Dropdown.Item>
                            <Dropdown.Item>
                                My Programs
                            </Dropdown.Item>
                            <Dropdown.Item>
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
                            label={<Avatar alt="User settings" rounded={true} bordered={true} />}
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
                    <Navbar.Link href="/programs">
                        Programs
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Connectivity
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        Carpool
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <div class='flex justify-center'>
                <form class='sm:w-full md:w-6/12 lg:w-2/5 pb-3 pt-3'>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300" > Search</label >
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search program name or zipcode..." required="" />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form >
            </div>




            {/* <Link className="route-link" to="/signup">Signup</Link> */}
        </div >
    )
}

export default NavBar