export default function Pricing(){
    return (
        <main>
            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Pricing Plans</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Choose the plan that best suits your needs.
                </p>
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Basic Plan</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.
                    </p>
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-2xl font-semibold text-gray-900 dark:text-white">$10</span>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">/ month</span>
                    </div>
                    <a href="#" className="block text-center text-white bg-blue-500 hover:bg-blue-600 font-medium px-6 py-3 mt-6 rounded-lg">Choose Plan</a>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Standard Plan</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.
                    </p>
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-2xl font-semibold text-gray-900 dark:text-white">$20</span>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">/ month</span>
                    </div>
                    <a href="#" className="block text-center text-white bg-blue-500 hover:bg-blue-600 font-medium px-6 py-3 mt-6 rounded-lg">Choose Plan</a>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Premium Plan</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus.
                    </p>
                    <div className="flex items-center justify-center mt-4">
                        <span className="text-2xl font-semibold text-gray-900 dark:text-white">$30</span>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">/ month</span>
                    </div>
                    <a href="#" className="block text-center text-white bg-blue-500 hover:bg-blue-600 font-medium px-6 py-3 mt-6 rounded-lg">Choose Plan</a>
                    </div>
                </div>
                </div>
            </section>
        </main>

    )
}