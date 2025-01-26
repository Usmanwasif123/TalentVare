const Sidebar = () => {
    return (
    <aside className="w-full md:w-1/4 p-5 md:p-6 relative flex flex-col items-center"> 
    {/* Profile section */}   
      <div className="bg-white rounded-lg shadow-lg z-10">
    <a href="#">
        <img className="rounded-t-lg w-full object-cover h-40 md:h-20 lg:h-28" src="https://i.ibb.co/CswpjJ7/Rectangle-18369.png" alt="cover photo" />
    </a>

    {/* Avatar and name */}
    <div className="flex justify-center relative -mt-8 md:-mt-10 lg:-mt-14 pb-20 md:pb-24 z-20">
    <img className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 p-1 absolute rounded-full ring-2 bg-white ring-white"
     src="https://i.ibb.co/NLQCrtM/image.png" alt="Bordered avatar"/>
    </div>

    {/* Name and job description */}
    <div className="p-5 flex flex-col items-center text-center font-neue-haas">
    <h2 className="text-base md:text-lg lg:text-xl font-bold font-black-3 font-neue-haas">Albert Flores</h2>
        <p className="text-xs md:text-xs lg:text-base font-black-3  mt-1 pb-1.5 font-neue-haas">
        Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...
        </p>
        <p className="text-xs md:text-xs lg:text-base text-gray-500">Clinton, Maryland</p>
    </div>
    </div>

    {/* Stats section */}
    <div className="mt-2 bg-white rounded-lg w-full p-5 md:p-4 lg:p-6 shadow-md">
        <ul className="flex justify-between font-normal font-neue-haas text-sm md:text-base lg:text-lg border-b-1 border-gray-300">
          <li className="text-black-3  pb-1">Profile Visitors</li>
          <li className="text-[#0154AA] pb-1">140</li>
        </ul>
        <ul className="flex justify-between font-normal font-neue-haas text-sm md:text-base lg:text-lg mt-2 border-b-1 border-gray-300">
          <li className="text-black-3  pb-1">Resume Viewers</li>
          <li className="text-[#0154AA] pb-1">20</li>
          </ul>
          <ul className="flex justify-between font-normal font-neue-haas text-sm md:text-base lg:text-lg mt-2">
          <li className="text-black-3  pb-1">My Jobs</li>
          <li className="text-[#0154AA] pb-1">88</li>
        </ul>
      </div>
      
      {/* Calendar section */}
      <div className="mt-2 bg-white rounded-lg w-full p-5 md:p-4 flex justify-between items-center">
      <div className="flex flex-col md:items-start font-neue-haas">
      <h3 className="font-bold text-lg md:text-md lg:text-xl">My Calendar</h3>
      <p className="text-sm text-gray-500 mt-1 md:mt-0">Upcoming Interviews</p>
      </div>
      <img src="https://i.ibb.co/dp4BJHX/Vector.png" className="h-2 w-auto mt-2 md:mt-0" />
      </div>
    </aside>
    )
}
export default Sidebar