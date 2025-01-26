import HeroBanner from "../components/HeroBanner";
import JobCard from "../components/JobCard";
import JobFilter from "../components/JobFilter";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";

const Dashboard = () =>{
    return (
        <>
         {/* Navbar Component */}
        <Navbar/>
        {/* Main content section */}
        <div className="bg-[#F4F4F4] md:flex item-center">
          {/* Sidebar Section */}
        <Sidebar/>
        {/* Main content area */}
        <div className="flex-1 p-4">
        <HeroBanner/>

        {/* Search bar */}
        <SearchBar/>
        {/* Job Filter */}
        <JobFilter/>

        {/* Featured Jobs Section */}
        <section className="mt-6 font-neue-haas">
          <h2 className="font-normal mb-4 flex flex-wrap items-center gap-5 text-black-3">Featured Jobs 
            <span className="underline text-[#0154AA] cursor-pointer">See Featured Jobs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" promoted />
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" promoted />
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" promoted />
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" promoted />
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" promoted />
          </div>
        </section>
        {/* Recommended Jobs Section */}
        <section className="mt-6 font-neue-haas">
          <h2 className="font-normal mb-4 flex flex-wrap items-center gap-5 text-black-3">Recommended Jobs 
            <span className="underline text-[#0154AA] cursor-pointer">See Recommended Jobs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" />
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" />
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" />
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" />
            <JobCard title="UI/UX Designer" company='Team' location="Seattle, USA (Remote)" day='1' applicants="22" />
          </div>
        </section>
        </div>
        </div>
        </>
    )
}

export default Dashboard