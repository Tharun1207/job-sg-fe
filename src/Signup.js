import { useState } from "react";
import Dropdown from "./Dropdown";
import './index.css';
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    // const [profilePic, setProfilePic] = useState(new Image())

    const genderOptions = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" }
    ];

    return ( 
        <div className="signup-form">
            <h2>Sign Up to JobSG here!</h2>

            <form>
                <label>First Name:</label>
                <input
                    type = "text"
                    required
                    value = { firstName }
                    onChange = {(e) => setFirstName(e.target.value)}
                />

                <label>Last Name:</label>
                <input
                    type = "text"
                    required
                    value = { lastName }
                    onChange = {(e) => setLastName(e.target.value)}
                />

                <label>Phone Number:</label>
                <input
                    type = "tel"
                    required
                    value = { phoneNo }
                    width = {8}
                    placeholder = "91234567"
                    pattern = "[6,9]{1}[0-9]{7}"
                    onChange = {(e) => setPhoneNo(e.target.value)}
                />

                <label>Age:</label>
                <input
                    type = "number"
                    required
                    value = { age }
                    min = "16"
                    max = "80"
                    onChange = {(e) => setAge(e.target.value)}
                />
                
                <label>Email ID:</label>
                <input
                    type = "email"
                    required
                    value = { email }
                    onChange = {(e) => setEmail(e.target.value)}
                />

                <label>Password:</label>
                <input
                    type = "text"
                    required
                    value = { password }
                    onChange = {(e) => setPassword(e.target.value)}
                />

                <label>Gender:</label>
                <Dropdown
                    isSearchable = {false}
                    isMulti = {false} 
                    placeHolder="Select..." 
                    options = { genderOptions }
                    onChange = {(value) => setGender(value)}
                />

                <br></br>
                <br></br>
                <button className="signup-button">Sign Up Now!</button>
                <br></br>
                <br></br>
                <Link to = "/login" className="loginRedirect">Have an existing account? Login now!</Link> 
            </form>
        </div>
     );
}
 
export default Signup;