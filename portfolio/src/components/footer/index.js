import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-6 lg:py-8">
                        <div className="text-center md:text-left">
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Where to find me</h2>
                            <div className="text-gray-500 dark:text-gray-400 font-medium">
                                RZ-I/3, Tamil Enclave, near Vijay Enclave, Palam Road, Dabri, South West Delhi, Delhi-110045
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <Link to="https://www.linkedin.com/in/mihir-kumar-ba237926a/" className="hover:underline cursor-pointer">Linkedin</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="https://github.com/Mihir069" className="hover:underline cursor-pointer">Github</Link>
                                </li>
                                <li className="mb-2">
                                    <div className="hover:underline cursor-pointer">Facebook</div>
                                </li>
                                <li className="mb-2">
                                    <div className="hover:underline cursor-pointer">Instagram</div>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact me</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-2">mihitozx11@gmail.com</li>
                                <li className="mb-2">+91 8800487466</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
