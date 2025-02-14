
// src/views/SummaryView.jsx
/** @author: Brendan Dileo, 2025-02-11 **/

// State accesss and view styles
import { useLocation } from 'react-router-dom';
import '../styles/SummaryView.css'

/**
 * Functional component that displays all of the user data as a summary
 * based on the previous page states.
 * 
 * @returns JSX rendering the summary component.
 */
const SummaryView = () => {
    // Loads the state data from the state passed to current view
    const loc = useLocation();
    const { firstName, lastName, email, dob, healthCardNumber, gender, homeAddress } = loc.state || {};

    // Returns the JSX which will be rendered on the page
    return (
        <div className="container">
            {/* Main Element */}
            <main>
                <section className="summary-view">
                    <h2>Summary Information</h2>
                    <p>Below is the information you have provided.</p>
                    
                    <div className="summary-details">
                        <h3>Personal Information</h3>
                        <p><strong>First Name:</strong> {firstName}</p>
                        <p><strong>Last Name:</strong> {lastName}</p>
                        <p><strong>Email:</strong> {email}</p>

                        <h3>Health Information</h3>
                        <p><strong>Date of Birth:</strong> {dob}</p>
                        <p><strong>Health Card Number:</strong> {healthCardNumber}</p>
                        <p><strong>Gender:</strong> {gender}</p>
                        <p><strong>Home Address:</strong> {homeAddress}</p>
                    </div>
                    
                    <div className="button-container">
                        <button className="back-button" onClick={() => window.history.back()}>Back</button>
                        <button className="submit-button" onClick={() => alert("Information submitted!")}>Submit</button>
                    </div>

                </section>
            </main>
        </div>
    );
}

// Exports SummaryView component
export default SummaryView;
