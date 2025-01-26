const SearchBar = () => {
    return (
        <div className="flex flex-wrap gap-4 md:gap-6 bg-white shadow p-4 rounded-lg">
        <input 
          type="text" 
          placeholder="Job Title, Company, or Keywords" 
          className="flex-1 px-4 py-2 font-neue-haas"
        />
        {/* Location selection dropdown */}
        <select className="border-l-2 border-gray-300 px-4 py-2 font-neue-haas">
          <option>Select Location</option>
        </select>
        {/* Job Type selection dropdown */}
        <select className="border-l-2 border-gray-300 px-4 py-2 font-neue-haas">
          <option>Job Type</option>
        </select>
        {/*Job search bar*/}
        <button className="font-neue-haas bg-blue-500 text-white rounded-lg px-6 py-2 flex items-center overflow-hidden">
        <img src="https://i.ibb.co/D5xkRR2/Group-1321315337-1.png" 
        className="h-3.5 px-2" alt="search icon" />Search</button>
      </div>
    )
}
export default SearchBar