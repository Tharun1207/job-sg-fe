import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const JobListingDetails = () => {
    // To use the customisable route parameters
    const { id } = useParams();
    const { data: jobListing, error, isLoading } = useFetch('http://localhost:8000/shortJobListings/' + id);

    return ( 
        <div className="job-listing-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { jobListing && (
                <article>
                    <h2 className="job-listing-title">{ jobListing.jobTitle }</h2>
                    <img src={require("./images/sweeper.png")} className="job-listing-image"></img>
                    <p>Job Description: { jobListing.jobDescription }</p>
                    <p>Total Pay: { jobListing.totalPay }</p>
                    <p>Start Date & Time: { jobListing.startDateTime }</p>
                    <p>End Date & Time: { jobListing.endDateTime }</p>
                </article>
            )}
        </div>
     );
}
 
export default JobListingDetails;