import { useEffect, useState } from "react";
import ListJobs from "./ListJobs";
import useFetch from "./useFetch";

const Home = () => {
    // Creating job listings
    // const [shortJobListings, setShortJobListings] = useState([
    //     { jobTitle: "sweeper", jobDescription: "testing 123 ", totalPay: "100", startDateTime: "1970-01-01T00:00:00.037Z", endDateTime: "1970-01-01T00:00:00.099Z", id: 1 },
    //     { jobTitle: "programmer", jobDescription: "testing 123 ", totalPay: "100", startDateTime: "1970-01-01T00:00:00.037Z", endDateTime: "1970-01-01T00:00:00.099Z", id: 2 },
    //     { jobTitle: "dancer", jobDescription: "testing 123 ", totalPay: "100", startDateTime: "1970-01-01T00:00:00.037Z", endDateTime: "1970-01-01T00:00:00.099Z", id: 3 }
    // ]);
    const { data: shortJobListings, isLoading, error } = useFetch('http://localhost:8000/shortJobListings');

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div> }
            { shortJobListings && <ListJobs jobListings = { shortJobListings } title = "All Jobs"/> }
        </div>
     );
}
 
export default Home;