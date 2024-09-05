import React from 'react'

function Footer() {
  return (
    <footer className=" px-[5vw] text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-black text-4xl font-bold mb-4">.DOT</h2>
          <p className="mb-4 text-gray-500 text-lg font-semibold">
            Project Collaboration Platform is all about making education more exciting and better for students in Indian colleges and universities.
          </p>
        </div>
        <div>
          <h2 className="text-black text-2xl font-bold mb-4 uppercase">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-green-500 transition-colors duration-300 text-gray-500 text-lg font-semibold"
              >
                Learn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-500 transition-colors duration-300 text-gray-500 text-lg font-semibold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-green-500 transition-colors duration-300 text-gray-500 text-lg font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-black text-2xl font-bold mb-4 uppercase">Follow Us</h2>
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="hover:text-green-500 transition-colors duration-300 text-gray-500 text-lg font-semibold"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-green-500 transition-colors duration-300 text-gray-500 text-lg font-semibold"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-green-500 transition-colors duration-300 text-gray-500 text-lg font-semibold"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-black text-2xl font-bold mb-4 uppercase ">Contact Us</h2>
          <p className='mb-2 text-gray-500 text-lg font-semibold'>New Delhi, India</p>
          <p className='mb-2 text-gray-500 text-lg font-semibold'>Delhi 10001</p>
          <p className='mb-2 text-gray-500 text-lg font-semibold'>Email: info@dot.com</p>
          <p className='mb-2 text-gray-500 text-lg font-semibold'>Phone: (123) 456-7890</p>
        </div>
        </div>
        <p className="text-center text-sm pt-8">© 2024 Project Collaboration Platform. All rights reserved.</p>
    </footer>
  )
}

export default Footer
