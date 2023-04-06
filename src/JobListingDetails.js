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
                    <img src={`${jobListing.imageLink}`} className="job-listing-image"></img>
                    <br></br>
                    <label>Job Description:</label>
                    <p>{ jobListing.jobDescription }</p>
                    <label>Total Pay:</label>
                    <p>{ jobListing.totalPay }</p>
                    <label>Start Date & Time:</label>
                    <p>{ jobListing.startDateTime }</p>
                    <label>End Date & Time:</label>
                    <p>{ jobListing.endDateTime }</p>
                </article>
            )}
        </div>
     );
}
 
export default JobListingDetails;