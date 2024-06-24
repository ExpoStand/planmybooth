import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">About</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Careers</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Brand Center</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Discord Server</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Twitter</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Facebook</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Privacy Policy</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Licensing</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">iOS</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Android</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">Windows</Link>
              </li>
              <li className="mb-4">
                <Link href="#" prefetch={false} className="hover:underline">MacOS</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <Link href="https://flowbite.com" prefetch={false} className="hover:underline">Flowbite™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link href="#" prefetch={false} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link href="#" prefetch={false} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>
            <Link href="#" prefetch={false} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.392.75a4.015 4.015 0 0 0-.554 2.032 4.027 4.027 0 0 0 1.8 3.359A4.204 4.204 0 0 1 .8 5.59v.048a4.08 4.08 0 0 0 3.289 3.968c-.3.08-.616.12-.936.118a3.87 3.87 0 0 1-.774-.073 4.1 4.1 0 0 0 3.834 2.826A8.3 8.3 0 0 1 .978 14.6c-.315 0-.626-.015-.935-.045A11.724 11.724 0 0 0 6.354 16.5c7.547 0 11.675-6.155 11.675-11.494 0-.175 0-.354-.011-.529A8.248 8.248 0 0 0 20 1.892Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link href="#" prefetch={false} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .064c-5.505 0-9.969 4.461-9.969 9.969 0 4.408 2.863 8.148 6.838 9.459a.722.722 0 0 0 .313.068c.349 0 .506-.23.506-.457 0-.224-.018-1.276-.018-1.847 0 0-2.782.603-3.369-1.188a.722.722 0 0 0-.207-.321c-.55-.29-.939-.99-.207-1.01.729-.018 1.248.672 1.422.949.83 1.39 2.158 1.001 2.688.758a1.869 1.869 0 0 1 .215-.672c-2.431-.285-4.98-1.209-4.98-5.377 0-1.188.418-2.15 1.107-2.912a3.838 3.838 0 0 1 .104-2.87s.91-.292 2.977 1.115a10.297 10.297 0 0 1 5.427 0c2.067-1.407 2.977-1.115 2.977-1.115.591 1.215.571 2.422.104 2.87.697.762 1.114 1.724 1.114 2.912 0 4.178-2.55 5.085-4.98 5.378.367.516.42 1.345.42 1.82 0 1.318-.018 2.38-.018 2.693 0 .225.157.488.507.456 3.97-1.311 6.832-5.051 6.832-9.459C19.97 4.525 15.505.064 10 .064Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
