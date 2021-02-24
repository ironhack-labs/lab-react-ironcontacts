import React from 'react'

export default function Contact({name, pictureUrl, popularity, clickToDelete}) {
    return (
        <div>
            <li className="border-gray-400 flex flex-row mb-2">
                <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        <a href="#" className="block relative">
                            <img alt={name} src={pictureUrl} className="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                    </div>
                    <div className="flex-1 pl-1 md:mr-16">
                        <div className="font-medium dark:text-white">
                            {name}
                    </div>
                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                            {popularity}
                    </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-xs">
                        
                    </div>
                    <button onClick={clickToDelete} className="w-24 text-right flex justify-end">
                        <svg width="20" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z">
                            </path>
                        </svg>
                    </button>
                </div>
            </li>
        </div>
    )
}
