const JobFilter = () => {
    return(
    <div className="flex flex-wrap items-center gap-4 my-4 text-[#737A91] font-neue-haas">
    {/* Title of the filter section */}
    <h2 className="text-md font-normal">Similar:</h2>
    {/* Filter buttons for different job roles */}
      <button className="border-2 rounded-lg px-4 py-2 bg-gray-100 text-xs md:text-md">Frontend</button>
      <button className="border-2 rounded-lg px-4 py-2 bg-gray-100 text-xs md:text-md">Backend</button>
      <button className="border-2 rounded-lg px-4 py-2 bg-gray-100 text-xs md:text-md">Graphic Designer</button>
    </div>
    )
}

export default JobFilter