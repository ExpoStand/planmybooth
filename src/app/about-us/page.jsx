import Link from "next/link"

export default function AboutUs(){
    return (
        <main>
            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Us</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Learn more about our company, our mission, and our team.
                </p>
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.
                </p>
                </div>
                <div className="text-center">
                <img src="https://via.placeholder.com/600x400" alt="Our Mission" className="mx-auto rounded-lg shadow"/>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Proin a urna eget eros fermentum bibendum. Nam viverra, nisl nec vehicula varius, sapien odio scelerisque nisl.
                </p>
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet the Team</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">Get to know the people behind our company.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    <img src="https://via.placeholder.com/150" alt="Team Member One" className="w-32 h-32 object-cover rounded-full mx-auto"/>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Team Member One</h3>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    <img src="https://via.placeholder.com/150" alt="Team Member Two" className="w-32 h-32 object-cover rounded-full mx-auto"/>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Team Member Two</h3>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Nullam scelerisque odio ac magna facilisis gravida.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    <img src="https://via.placeholder.com/150" alt="Team Member Three" className="w-32 h-32 object-cover rounded-full mx-auto"/>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Team Member Three</h3>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Proin a urna eget eros fermentum bibendum.</p>
                </div>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Join Us</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    We are always looking for talented individuals to join our team. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="mt-8">
                    <Link href="/contact-us" prefetch={false} className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Contact
                    </Link>
                </div>
                </div>
            </section>
        </main>

    )
}