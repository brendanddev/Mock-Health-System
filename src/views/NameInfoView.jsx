
// views/NameInfoView.jsx
// @author: Brendan Dileo, 2025-02-10

// Variables for manging the apps state, handling navigation
// between views, and importing data validation functions from
// utility file (DataValidation.jsx)
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isValidName, isValidEmail } from '../utils/DataValidation'

// Imports css file for this component
import '../styles/NameInfoView.css'

/**
 * Functional component responsible for managing and rendering a form component
 * where a user can enter their first name, last name, and email.
 * 
 * @returns JSX rendering the Name Info form component.
 */
const NameInfoView = () => {
    // State variables and their setters using the useState hook to 
    // initialize, manage, and track the form data between renders
    // of components.
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    /**
     * Stores the result of the 'useNavigate' function call, allowing for
     * routing between pages.
     */
    const nav = useNavigate();

    /**
     * Handles the form submission event, and prevents the default form submission
     * behaviour. It uses the function from the util module to validate the names
     * and email entered, and if the data is valid, it will navigate to the next
     * view passing the current state.
     * 
     * @param {Event} event The form submission event. 
     */
    const handleFormSubmission = (event) => {
        event.preventDefault();
    
        if (isValidName(firstName, lastName) && isValidEmail(email)) {
            // Navigates to next view, passes state.
            nav('/healthinfoview', {state: {firstName, lastName, email}});
        }
    };

    // JSX that will be rendered on the page
    return (
        <div className="container">
            {/* Main content which will is where the form will be */}
            <main>
                <section className="name-info-view">
                    <h2>Patient Name Information</h2>
                    <p className="subheading">Please accurately enter your first and last name, and email address below:</p>

                    {/* Form Component, where the first and last name, and email will be entered */}
                    <form onSubmit={handleFormSubmission}>
                        <div>
                            <label htmlFor="first-name">First Name:</label>
                            <input 
                                type="text" 
                                id="first-name" 
                                name="first-name" 
                                // Binds first name input to the first name state var
                                value={firstName} onChange={(event) => setFirstName(event.target.value)} 
                                placeholder='Enter First Name' 
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="last-name">Last Name:</label>
                            <input 
                                type="text" 
                                id="last-name" 
                                name="last-name" 
                                // Binds last name input value to the last name state var
                                value={lastName} onChange={(event) => setLastName(event.target.value)} 
                                placeholder='Enter Last Name' 
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">User Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                // Binds the email input value to the email state var
                                value={email} onChange={(event) => setEmail(event.target.value)} 
                                placeholder='Enter Your Email' 
                                required
                            />
                        </div>
                        <button type="submit">Next</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

// Exports the componenet from current module
// to be used in other components or files.
export default NameInfoView;