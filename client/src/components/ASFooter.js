import React from 'react'
import icon from "../assets/as-icon.png"

function ASFooter() {
    return (


        <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                    <img src={icon} class="mr-3 h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Afterschool Special</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/brennantdavis/" target="_blank" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/btdavis300" target="_blank" class="mr-4 hover:underline md:mr-6 ">Github</a>
                    </li>
                    <li>
                        <a href="mailto: brennantd@gmail.com" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://github.com/btdavis300/after-school-special" target="_blank" class="hover:underline">Github Repo Here</a>.
            </span>
        </footer>


    )
}

export default ASFooter