
// src/views/HealthInfoView.jsx
// @author: Brendan Dileo, 2025-02-10


// Imports variables for managing app state, handling navigation,
// and importing data validation functions.
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { isValidAddress, isValidDOB, isValidHealthCard } from '../utils/DataValidation'

// CSS file for component styles
import '../styles/HealthInfoView.css'

/**
 * Functional component that manages and renders the health info view 
 * form component, which allows the user to enter date of birth, health
 * card number, gender, and address. 
 * 
 * @returns JSX rendering the Health Info form component.
 */
const HealthInfoView = () => {

    // Loads the state data from the state passed to current view
    const loc = useLocation();
    const {firstName, lastName, email} = loc.state;

    // The state variables and their setters for the form data
    // By default the states are empty strings

    // State variables for form data and their setters,
    // initialized to an empty string.
    const [dob, setDob] = useState('')
    const [healthCardNumber, setHealthCardNumber] = useState('')
    const [gender, setGender] = useState('')
    const [homeAddress, setHomeAddress] = useState('')

    /**
     * Stores the result of the 'useNavigate' function call, allowing for
     * routing between pages.
     */
    const nav = useNavigate();

    /**
     * Functional component using the nav hook to navigate to the previous
     * page.
     */
    const previousPage = () => {
        nav(-1)
    };

    /**
     * Handles the form submission event, preventing the default form submission
     * behaviour. Uses the util data validation functions to validate the form 
     * data, and if the data is valid the nav navigates to the next page, 
     * passing the state data.
     * 
     * @param {Event} event The form submission event.
     */
    const handleFormSubmission = (event) => {
        event.preventDefault();

        if (isValidDOB(dob) && isValidHealthCard(healthCardNumber) && isValidAddress(homeAddress)) {
            nav('/summaryview', 
                { replace: false,
                  state: { firstName, lastName, email, dob, healthCardNumber, gender, homeAddress
                }
            });
        }
    };

    // Returns the JSX that will be rendered on the page, creating the form
    return (
        <div className="container">
            {/* Main content which will is where the form will be */}
            <main>
                <section className="health-info-view">
                    <h2>Patient Health Information</h2>
                    <p>Please accurately enter your Date of Birth, Health Card Number, and Gender.</p>
                    {/* Form where date of birth, health card num, gender, and address is entered */}
                    <form onSubmit={handleFormSubmission}>
                        <div>
                            <label htmlFor="dob-field">Date of Birth (YYY-MM-DD)</label>
                            <input 
                                type="date" 
                                id="dob-field" 
                                name="dob" 
                                value={dob} 
                                // Binds input value to state var
                                onChange={(event) => setDob(event.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="health-card-number">Health Card Number:</label>
                            <input 
                                type="text" 
                                id="health-card-number" 
                                name="healthCardNumber" 
                                value={healthCardNumber} 
                                // Binds input value to state var
                                onChange={(event) => setHealthCardNumber(event.target.value)} 
                                placeholder='Enter your Health Card Number' 
                                required
                            />
                        </div>

                        <div className="dropdown-container">
                            <label htmlFor="gender" className="dropdown-label">Gender:</label>
                            <select       
                                id="gender"
                                name="gender"
                                value={gender}
                                // Binds input value to state var (which gender selected)
                                onChange={(event) => setGender(event.target.value)}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="non-binary">Non-Binary</option>
                                <option value="other">Other / My gender is not listed</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="home-address">Home Address:</label>
                            <input 
                                type="text" 
                                id="home-address" 
                                name="homeAddress" 
                                value={homeAddress} 
                                // Binds address
                                onChange={(event) => setHomeAddress(event.target.value)} 
                                placeholder='Enter your Home Address' 
                                required
                            />
                        </div>
                        {/* Wanted Buttons to appear 'Back' -> 'Next' so swapped them */}
                        <div className="button-container"> 
                            <button type="button" className="back-button" onClick={previousPage}>Back</button>
                            <button type="submit" className="next-button">Next</button>

                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}
// Exports HealthInfoView component to be used 
// in other files/components.
export default HealthInfoView;
