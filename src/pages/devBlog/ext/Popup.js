// --------------------------------------------------
//                   Necro Studios
//                 Developed in 2020
//
//               https://necrostudios.eu
// --------------------------------------------------

// Imports
import React, {Component} from 'react'
import {Transition} from '@headlessui/react'
import {useState} from 'react'

import '../../../css/popup.css'

function Popup() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Transition
            show={isOpen}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className={"fixed z-10 inset-0 overflow-y-auto"}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div onClick={() => setIsOpen(!isOpen)} className="fixed inset-0 transition-opacity"
                         aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-900 opacity-75">
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div
                            className="dark:bg-gray-700 inline-block align-bottom bg-gray-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
                            role="dialog" aria-modal="true" aria-labelledby="modal-headline">

                            <div className="gradient-bg">
                                <img alt="" src="https://me.tsukidev.de/1vxJEIr2kX.jpg"/>
                                <div className="px-4">
                                    <span
                                        className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase pl-1">PHP, HTML, Css</span>
                                    <br/>
                                    <span
                                        className="text-gray-800 dark:text-white font-semibold text-6xl mt-2 hover:no-underline hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Hello There</span>
                                </div>
                            </div>

                            <div className="bg-gray-200 dark:bg-gray-700 px-11">
                                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tortor eu sapien
                                    fringilla gravida quis at mauris. Praesent vel nunc ut lorem finibus suscipit in
                                    eget nisi. Maecenas imperdiet, elit eget vulputate pharetra, erat eros gravida erat,
                                    ac posuere nulla erat id justo. Vestibulum luctus eget turpis vel aliquam. Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Fusce eget
                                    laoreet dui, sit amet consectetur dolor. Suspendisse euismod urna arcu, vestibulum
                                    facilisis erat blandit blandit.
                                    <br/>
                                    Proin vel dapibus urna. Vestibulum rutrum lectus sit amet dui luctus dapibus. Fusce
                                    nec cursus tellus. Cras pellentesque tortor sed nisl interdum venenatis. Mauris
                                    faucibus mattis justo sit amet hendrerit. Suspendisse molestie velit sit amet
                                    dapibus pharetra. In lobortis augue pulvinar metus rhoncus laoreet. Nunc sed
                                    imperdiet ante, tincidunt dictum orci. Sed lobortis nisl libero, pulvinar cursus ex
                                    pretium sed. Phasellus ultricies porttitor dui auctor suscipit. Phasellus tincidunt
                                    molestie nunc ac finibus. Nullam lectus nisl, tristique nec augue a, maximus
                                    efficitur est. Praesent accumsan, sem eget maximus molestie, quam nunc laoreet
                                    lectus, malesuada consequat justo urna id augue. Phasellus a nunc quis nibh
                                    convallis porttitor. Donec sed tortor risus. Vivamus nec ligula elementum, aliquet
                                    massa id, sagittis nibh.
                                </p>

                                <button
                                    className="py-2 px-4 mt-4 mb-10 capitalize text-xl tracking-wide bg-blue-600 text-white font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    Weitere Previews
                                </button>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </Transition>
    )
}

export default Popup