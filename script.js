var age = 0;
var gender = ""; 
var weight = 0;
var feet = 0;
var inches = 0;
var activityLevel = "";

// *** TESTING FUNCTIONS ***

// Inputs test values for testing form functions
function _fillForm() {
    age = 16;
    gender = "Male"; 
    weight = 145;
    feet = 5;
    inches = 6;
    activityLevel = document.getElementById("activity-level").value.toLowerCase();

    return;
}

// *** VALIDATE FORM FUNCTION ***
// Validates form input; ensures that user inputs all necessary information correctly before calculating results. Deploys error messages instructing user to make corrections where necessary.
// Fires when user clicks submit form. 

function validateForm() {
    return true;
};

// * validateForm() SUB FUNCTIONS * 

// *** CALCULATE RESULTS FUNCTION ***
// Calculates results; takes user information from form input, and calculates the user's BMR and TDEE. Uses the appropriate formulas/modifiers based on gender and activity level. 
// Fires when user clicks submit form, and inputs are determined valid based on validateForm(). 

function calculateResults() {
    return;
}

// * validateForm() SUB FUNCTIONS * 

// *** DISPLAY RESULTS FUNCTION ***
// Displays results; sends the BMR and TDEE output from calculateResults() back to the user. 
// Fires when user clicks submit form, and inputs are determined valid based on validateForm()

// Main Function

function displayResults () {
    // Grab form input
    // age = document.getElementById("age").value;
    // gender = document.querySelector("input[name='gender']:checked").value.toLowerCase(); 
    // weight = document.getElementById("weight").value;
    // feet = document.getElementById("feet").value;
    // inches = document.getElementById("inches").value;
    // activityLevel = document.getElementById("activity-level").value.toLowerCase();

    if(validateForm()) {
        // TDEE Results
        document.getElementById("tdee-results").innerHTML = "Your TDEE: results";

        // BMR Results
        document.getElementById("bmr-results").innerHTML = "Your BMR: results";

        // Input Results
        var inputResults = "";
        inputResults += "Showing results for a "; 
        inputResults += activityLevel + " " + age + " year old " + gender + " who is " + feet + " feet " + inches + " inch(es) tall and weighs " + weight + " pounds."; 
        document.getElementById("input-results").innerHTML = inputResults;
    } else {
        document.getElementById("error-message").innerHTML = "Error";
    }

    return;
}