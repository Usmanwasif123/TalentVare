import { useState } from 'react';

const Navbar = () => {
    {/*State for managing dropdown and menu visibility*/}
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    {/* Toggle Userprofile dropdown visibility*/}
    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
        
      };
      {/*Toggle mobile menu visibility*/}
    const MenutoggleDown = () => {
        setIsMenuOpen(prevState => !prevState);
        console.log('menubar is click and open')

    };
    return (
    <nav className="border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-2xl flex flex-wrap items-center justify-between p-4">
    {/* Logo Section */}
  <a href="/" className="flex items-center">
      <img src="https://i.ibb.co/2K5fVML/logo.png" className="h-8 md:h-10" alt="TalentVare Logo" />
  </a>
  <div className="flex md:order-2 space-x-5">
    {/* Search Input (Desktop) */}
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <img src="https://i.ibb.co/LR45DCb/Group-1321315337.png" className="h-4" alt="search icon" />
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 font-neue-haas" placeholder="Search..."/>
    </div>
    {/* Resume Builder Button (Desktop) */}
    <div className="relative">
    <button type="button" className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 cursor-pointer font-neue-haas font-medium rounded-lg text-sm px-4 py-2 text-center">Resume Builder</button>
    </div>
    {/* User Profile Button */}
    <div>
    <button type="button" className="cursor-pointer flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" 
    onClick={toggleDropdown} // Toggle the dropdown on click
    aria-expanded={isDropdownOpen ? 'true' : 'false'}>
        <span className="sr-only">Open userprofile menu</span>
        <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/PtRbDKN/Rectangle-1516.png" alt="user photo"/>
    </button>
      
      {/* Userprofile Dropdown Menu */}
      {isDropdownOpen && (
      <div className="z-50 my-4 text-base list-none bg-white absolute -ml-32 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Albert Flores</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">albertflores@mail.com</span>
        </div>
        <ul className="py-2 font-neue-haas" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      )}
    </div>
{/* Mobile Menu Toggle Button */} 
    <button data-collapse-toggle="navbar-search" type="button" 
    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" 
    aria-expanded={isMenuOpen ? "true" : "false"}
    onClick={MenutoggleDown}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"} md:block`} id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <img src="https://i.ibb.co/LR45DCb/Group-1321315337.png" className="h-4" alt="search icon" />
        </div> 
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>

      {/* Navigation Links */}
      <ul className="font-neue-haas flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Find Jobs</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Top Companies</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Job Tracker</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My  Calendar</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Documents</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Messages</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notifications</a>
        </li>
      </ul>
      {/* Resume Builder Button (Mobile) */}
      <div className="relative mt-5">
    <button type="button" className="md:hidden block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Resume Builder</button>
    </div>
    </div>
  </div>
</nav>

    )
}

export default Navbar 