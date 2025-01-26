const JobCard = ({ company, title, location, day, applicants, promoted }: any) => {
    return (
        <div className="p-4 rounded-lg shadow-sm bg-white">
          {/* Display 'Promoted' label if the job is promoted */}
          {promoted && <p className="text-sm font-semibold text-[#333333] mb-2 md:mb-3">Promoted</p>}
          {/* Company logo and job title section */}
          <div className="flex items-center gap-3">
          <img src="https://i.ibb.co/2dVdBSH/Frame-1321315412.png" alt="company photo" 
          className="w-10 h-10 rounded-md" 
          />
          <div className="flex flex-col gap-0.5">
          <h3 className="font-normal text-sm md:text-base">{title}</h3>
          <h4 className="font-normal text-xs md:text-sm text-gray-600">{company}</h4>
          </div>
          </div>
          {/* Location details */}
          <div className="flex items-center gap-1.5 mt-3 mb-1.5">
            <img src='https://i.ibb.co/nsK8YfV/Vector-3.png' className='w-3 h-3' alt='location'/>
          <p className="text-[0.70rem] md:text-[0.810rem] text-gray-500">{location}</p>
          </div>
          {/* Job duration and number of applicants */}
          <div className="flex items-center justify-start md:justify-between gap-2 mb-2">
          <img src='https://i.ibb.co/hmkDMSH/Vector-4.png' className='w-3 h-3' alt='duration'/>
          <p className="text-[0.70rem] md:text-[0.810rem]">
          <span className="text-[#585D6E]">{day} day ago | </span>
          <span className="text-[#0154AA]">{applicants} applicants</span> 
          </p>
          </div>
          {/* Buttons section: Apply now and job save icon */}
          <div className='flex flex-wrap items-center justify-between gap-4 mt-4'>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm md:text-base">Apply Now</button>
          <img src="https://i.ibb.co/cczDnGk/Vector-2.png" alt="save icon" 
          className="w-5 h-5 md:h-6" 
          />
          </div>
        </div>
    );
}

export default JobCard