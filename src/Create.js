import { useState } from "react";    
  
const Create = () => {  
  
    // States created for each job listing  
    const [jobTitle, setJobTitle] = useState('');  
    const [jobDescription, setJobDescription] = useState('');  
    const [totalPay, setTotalPay] = useState('');  
    const [startDateTime, setStartDateTime] = useState(new Date());  
    const [endDateTime, setEndDateTime] = useState(new Date());
    const [imageLink, setImageLink] = useState('');

    // const [location, setLocation] = useState('');  
    // const [reqNumOfWorkers, setReqNumOfWorkers] = useState(0);  
    // const [numApplicants, setNumApplicants] = useState(0);  
    // const [creatorName, setCreatorName] = useState('');  
    // const [workerNames, setWorkerNames] = useState([]);  
    const [isPending, setIsPending] = useState(false); 
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const newJobListing = { jobTitle, jobDescription, totalPay, startDateTime, endDateTime, imageLink };

        setIsPending(true);

        console.log(newJobListing);
        fetch('http://localhost:8000/shortJobListings', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newJobListing)
        }).then(() => {
            console.log('New Job Listing Added');
            setIsPending(false);
        })
    }

 
    return (   
        <div className="create"> 
            <h2>Add a New Job</h2> 
            <form onSubmit={handleSubmit}> 
                <label>Job title:</label> 
                <input  
                    type="text"  
                    required 
                    value = {jobTitle} 
                    onChange={(e) => setJobTitle(e.target.value)} 
                /> 
                <label>Job Description:</label> 
                <textarea 
                    required 
                    value={jobDescription} 
                    onChange={(e) => setJobDescription(e.target.value)} 
                ></textarea> 
                <label>Total Pay:</label> 
                <input  
                    type="text"  
                    required
                    value = {totalPay} 
                    onChange={(e) => setTotalPay(e.target.value)} 
                /> 
                <label>Enter starting date and time:</label> 
                <input 
                    type="datetime-local" 
                    name="startDateTime" 
                    value = {startDateTime} 
                    onChange={(e) => setStartDateTime(e.target.value)} 
                    required  
                /> 
                <label>Enter ending date and time:</label> 
                <input 
                    type="datetime-local" 
                    name="endDateTime" 
                    value = {endDateTime} 
                    onChange={(e) => setEndDateTime(e.target.value)} 
                    required  
                /> 
                {/* <label>Location (Postal Code):</label> 
                <input  
                    type="text"  
                    required 
                    value = {location} 
                    onChange={(e) => setLocation(e.target.value)} 
                /> 
                <label>Required number of workers:</label> 
                <input  
                    type="number"  
                    required 
                    value = {reqNumOfWorkers} 
                    onChange={(e) => setReqNumOfWorkers(e.target.value)} 
                />
                */}

                <br></br> 
                <br></br> 
                <button className ="UploadJob"> 
                  Upload Job Image 
                  <input 
                    accept="image/*" 
                    type="file" 
                    id="img" 
                    name="img"
                    value={imageLink} 
                    onChange={(e) => setImageLink(e.target.value)}
                    required/> 
                </button> 
                
                <br></br> 
                <br></br>
                { <button className="AddJob">Add Job</button> } 
                { isPending && <button className="AddJob" disabled>Adding Job Listing...</button> }
            </form> 
        </div> 
    );  
}
 
export default Create;