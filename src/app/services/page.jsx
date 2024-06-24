import Link from "next/link";

export default function Services(){
    return (
        <main>
            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Explore our wide range of services tailored to meet your needs.
                </p>
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/600x400" alt="Service 1" className="w-full h-64 object-cover object-center"/>
                    <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Service Title 1</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.
                    </p>
                    <Link href="#" className="text-blue-500 hover:text-blue-700 font-medium">Learn More</Link>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/600x400" alt="Service 2" className="w-full h-64 object-cover object-center"/>
                    <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Service Title 2</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.
                    </p>
                    <Link href="#" className="text-blue-500 hover:text-blue-700 font-medium">Learn More</Link>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <img src="https://via.placeholder.com/600x400" alt="Service 3" className="w-full h-64 object-cover object-center"/>
                    <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Service Title 3</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.
                    </p>
                    <Link href="#" className="text-blue-500 hover:text-blue-700 font-medium">Learn More</Link>
                    </div>
                </div>
                </div>
            </section>
        </main>

    )
}