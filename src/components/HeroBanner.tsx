const HeroBanner = () => {
    return (
        <div className="w-full px-4 md:px-0 text-center md:text-left">
         {/* Main title with dynamic name highlighting */}
         <h1 className="text-lg md:text-2xl text-black-3 font-neue-haas font-bold">Find your Dream Job, 
         <span className="text-[#0154AA]"> Albert!</span>
         </h1>
         {/* Subtitle with a brief job search description */}
         <p className="text-sm md:text-base text-[#585D6E] font-neue-haas mb-2 md:mb-4">
         Explore the latest job openings and apply for the best opportunities available today!
        </p> 
    </div>
    )
}

export default HeroBanner