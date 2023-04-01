import { Link } from "react-router-dom";

const ListJobs = ({ jobListings, title }) => {
    return ( 
        <div className="list-jobs">
            <h2 className="all-jobs-title">{ title }</h2>
            {jobListings.map((jl) => (
                <div className="job-listing-preview" key = { jl.id }>                    
                    <Link to={`/joblistingdetails/${jl.id}`} className="job-listing-links">
                        <img className = "job-image" src={() => require(jl.imageLink) }></img>
                        <p className="jobTitle">Job Title: { jl.jobTitle }</p>
                        <p>Job Description: { jl.jobDescription }</p>
                        <p>Total Pay: { jl.totalPay }</p>
                        <p>Start Date & Time: { jl.startDateTime }</p>
                        <p>End Date & Time: { jl.endDateTime }</p>
                        <button>Find out more!</button>
                    </Link>
                </div>
            ))
            }
        </div>
     );
}
 
export default ListJobs;