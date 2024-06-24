import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to My Website</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida.
          </p>
          <div className="mt-8">
            <Link href="/about-us" prefetch={false} className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Features</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">Explore the features of our website.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/150" alt="Feature One" className="w-full h-32 object-cover rounded-t-lg"/>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Feature One</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque odio ac magna facilisis gravida.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/150" alt="Feature Two" className="w-full h-32 object-cover rounded-t-lg"/>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Feature Two</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Proin a urna eget eros fermentum bibendum. Nam viverra, nisl nec vehicula varius, sapien odio scelerisque nisl.</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
            <img src="https://via.placeholder.com/150" alt="Feature Three" className="w-full h-32 object-cover rounded-t-lg"/>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Feature Three</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Donec nec eros nec mi fringilla varius. Sed sit amet justo et risus scelerisque hendrerit.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Testimonials</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            What our users are saying about us.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <img src="https://via.placeholder.com/150" alt="User One" className="w-16 h-16 rounded-full mx-auto"/>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque odio ac magna facilisis gravida."
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">User One</h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <img src="https://via.placeholder.com/150" alt="User Two" className="w-16 h-16 rounded-full mx-auto"/>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                "Proin a urna eget eros fermentum bibendum. Nam viverra, nisl nec vehicula varius, sapien odio scelerisque nisl."
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">User Two</h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <img src="https://via.placeholder.com/150" alt="User Three" className="w-16 h-16 rounded-full mx-auto"/>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                "Donec nec eros nec mi fringilla varius. Sed sit amet justo et risus scelerisque hendrerit."
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">User Three</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
