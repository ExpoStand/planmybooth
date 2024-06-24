import Link from "next/link"

export default function ContactUs() {
    return (
        <main>
            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    We would love to hear from you. Get in touch with us for any queries or support.
                </p>
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.
                    </p>
                    <form action="#" method="POST" className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea id="message" name="message" rows="4" className="mt-1 block w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-white"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send Message</button>
                    </div>
                    </form>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="https://via.placeholder.com/400x300" alt="Contact Us" className="rounded-lg shadow mb-6"/>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Our Office</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                    1234 Main Street, Suite 500<br/>
                    City, State, 12345<br/>
                    Phone: (123) 456-7890
                    </p>
                </div>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Follow Us</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Stay connected with us through social media.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                    <span className="sr-only">Discord</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.64 11.64 0 0 0 18 4.236c0-.177 0-.348-.013-.522A8.125 8.125 0 0 0 20 1.892Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M17.839 5.7a6.632 6.632 0 0 1-1.9.537 3.293 3.293 0 0 0 1.444-1.816 6.541 6.541 0 0 1-2.084.797A3.28 3.28 0 0 0 8.818 7.94a9.325 9.325 0 0 1-6.766-3.43 3.275 3.275 0 0 0 1.014 4.373 3.235 3.235 0 0 1-1.485-.4v.04a3.282 3.282 0 0 0 2.635 3.218 3.286 3.286 0 0 1-1.481.057 3.283 3.283 0 0 0 3.065 2.28A6.583 6.583 0 0 1 0 15.535a9.315 9.315 0 0 0 5.044 1.48c6.053 0 9.36-5.015 9.36-9.36l-.011-.426A6.673 6.673 0 0 0 18 4.646a6.553 6.553 0 0 1-1.916.527 3.292 3.292 0 0 0 1.449-1.816 6.541 6.541 0 0 1-2.084.797 3.277 3.277 0 0 0-5.64 2.991c-.001.127-.001.253.004.379a9.321 9.321 0 0 1-6.767-3.43 3.272 3.272 0 0 0 1.014 4.373 3.23 3.23 0 0 1-1.483-.4v.04a3.284 3.284 0 0 0 2.635 3.218A3.283 3.283 0 0 1 .658 10.55v.04a3.283 3.283 0 0 0 3.065 2.28A6.583 6.583 0 0 1 0 15.535a9.315 9.315 0 0 0 5.044 1.48c6.053 0 9.36-5.015 9.36-9.36l-.011-.426A6.673 6.673 0 0 0 18 4.646a6.553 6.553 0 0 1-1.916.527 3.292 3.292 0 0 0 1.449-1.816 6.541 6.541 0 0 1-2.084.797A3.277 3.277 0 0 0 12.927 4.08c.052.285.08.576.08.868a6.574 6.574 0 0 1-6.573 6.572 6.565 6.565 0 0 1-3.695-1.14 6.517 6.517 0 0 0 3.103 8.492 6.552 6.552 0 0 1-2.984.114A6.574 6.574 0 0 0 12.926 18c7.258 0 11.218-6.014 11.218-11.218l-.011-.426A6.673 6.673 0 0 0 18 4.646a6.553 6.553 0 0 1-1.916.527 3.292 3.292 0 0 0 1.449-1.816 6.541 6.541 0 0 1-2.084.797Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Instagram</span>
                    </Link>
                </div>
                </div>
            </section>
        </main>
    )
}