import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <div className="text-purple-700 font-bold text-xl">Job portal</div>
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
          <ul className="flex gap-6 items-center text-gray-800">
            <li>
              <a href="/" className="hover:bg-purple-600 hover:text-white px-3 py-2 rounded transition">
                Home
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:bg-purple-600 hover:text-white px-3 py-2 rounded transition">
                Jobs
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:bg-purple-600 hover:text-white px-3 py-2 rounded transition">
                Login
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 min-w-[150px] z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Employee
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Employeer
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="hover:bg-purple-600 hover:text-white px-3 py-2 rounded transition">
                Register
              </a>
            </li>
            <li>
              <a href="/post-job" className="hover:bg-purple-600 hover:text-white px-3 py-2 rounded transition">
                Post a Job
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Find the <br /> job that fit your life</h1>
          <p className="mb-6 text-gray-600">
            Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus.
          </p>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Job Title or Company Name" className="border px-4 py-2 w-1/2" />
            <input type="text" placeholder="Locations" className="border px-4 py-2 w-1/2" />
            <button className="bg-purple-500 text-white px-4 py-2 rounded">🔍</button>
          </div>
        </div>
        <img src="./images/4236127.jpg" alt="Hero" className="md:w-1/2 mt-8 md:mt-0" />
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>
        <p className="mb-12 text-gray-600">Most popular categories of portal, sorted by popularity</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: 'Web design', jobs: 0 },
            { name: 'Graphic design', jobs: 0 },
            { name: 'Web development', jobs: 5 },
            { name: 'Human Resource', jobs: 0 },
            { name: 'Support', jobs: 1 },
            { name: 'Android Development', jobs: 2 },
          ].map((cat) => (
            <div key={cat.name} className="border rounded-lg p-6 bg-white text-center transform transition duration-300 hover:scale-105 hover:shadow-md hover:bg-purple-50">
              <div className="font-semibold text-lg">{cat.name}</div>
              <div className="text-sm text-gray-500">({cat.jobs} jobs)</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">How It Works?</h2>
        <p className="mb-12 text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices dignissim quam.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Create an Account', desc: 'Post a job to tell us about your project. We’ll match you with freelancers.' },
            { title: 'Search Jobs', desc: 'Search projects posted and quickly find work that suits you.' },
            { title: 'Apply', desc: 'Apply to jobs that match your skills and interests easily.' },
          ].map((step, i) => (
            <div key={i} className="p-6 border rounded shadow-sm hover:shadow-md transition">
              <div className="text-2xl mb-4">{['👤', '🔍', '🏆'][i]}</div>
              <div className="text-lg font-medium mb-2">{step.title}</div>
              <div className="text-sm text-gray-500">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-10 px-6">
        <div className="flex justify-between flex-col md:flex-row gap-8">
          <div>
            <h3 className="font-bold mb-4 text-xl">React Job Portal</h3>
            <p className="text-gray-300">React job portal with Django backend</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { name: 'instagram', url: 'https://instagram.com', img: '/images/instagram_2111463.png' },
                { name: 'facebook', url: 'https://facebook.com', img: '/images/facebook_2504903.png' },
                { name: 'twitter', url: 'https://twitter.com', img: '/images/twitter.png' },
                { name: 'linkedin', url: 'https://linkedin.com', img: '/images/linkedin_2504923.png' },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-75 transition transform hover:scale-110"
                >
                  <img src={platform.img} alt={platform.name} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
