// var age = 0;
// var gender = ""; 
// var weight = 0;
// var feet = 0;
// var inches = 0;
// var activityLevel = "";

// *** TESTING FUNCTIONS ***

// Inputs test values for testing form functions
// function _fillForm() {
//     age = 16;
//     gender = "Male"; 
//     weight = 145;
//     feet = 5;
//     inches = 6;
//     activityLevel = document.getElementById("activity-level").value.toLowerCase();

//     return;
// }

// *** Testing inline form validation with javascript events ***

// Age Input Validation
document.getElementById("age").addEventListener("blur", validateAge);
document.getElementById("weight").addEventListener("blur", validateWeight);
document.getElementById("feet").addEventListener("blur", validateFeet);
document.getElementById("inches").addEventListener("blur", validateInches);

function validateAge() {
    var ageInput = document.getElementById("age").value;

    if (_isValidNumber(ageInput) == "") {
        document.getElementById("age-error-message").innerHTML = "Valid";
    } else {
        document.getElementById("age-error-message").innerHTML = _isValidNumber(ageInput);
    }; 

}

function validateWeight() {
    var weightInput = document.getElementById("weight").value;

    if (_isValidNumber(weightInput) == "") {
        document.getElementById("weight-error-message").innerHTML = "Valid";
    } else {
        document.getElementById("weight-error-message").innerHTML = _isValidNumber(weightInput);
    }; 
}

function validateFeet() {
    var feetInput = document.getElementById("feet").value;

    if (_isValidNumber(feetInput) == "") {
        document.getElementById("feet-error-message").innerHTML = "Valid";
    } else {
        document.getElementById("feet-error-message").innerHTML = _isValidNumber(feetInput);
    }; 
}

function validateInches() {
    var inchesInput = document.getElementById("inches").value;

    if (_isValidNumber(inchesInput) == "" && _inchesMoreThan12(inchesInput) == "") {
        document.getElementById("inches-error-message").innerHTML = "Valid";
    } else if (_isValidNumber(inchesInput) == "" && _inchesMoreThan12(inchesInput) != "") {
        document.getElementById("inches-error-message").innerHTML = _inchesMoreThan12(inchesInput);
    } else {
        document.getElementById("inches-error-message").innerHTML = _isValidNumber(inchesInput);

    }

}

// ** Helper Functions **

// Checks if input is a valid number.
function _isValidNumber(number) {
    var errorMessage = ""; 

    if (number.length == 0) {
        errorMessage = "Must enter a valid number";
    } else if (Math.sign(number) == -1) {
        errorMessage = "Cannot be negative";
    } else if (number == 0) {
        errorMessage = "Cannot be zero";
    } else if (number.toString()[0] == "0") {
        errorMessage = "Cannot have leading 0";
    }  else if (number.indexOf('.') !== -1) {
        errorMessage = "has decimal";
    }

    return errorMessage;

}

// Checks if inches value is more than 11
function _inchesMoreThan12(number) {
    var errorMessage = ""

    if (number > 11) {
        return errorMessage = "Cannot be more than 11 in";
    } 

    return errorMessage;

}


// *** CREATE USER PROFILE FUNCTION ***
// Compiles user input into a map to create a "profile", returns a map called User
function createUserProfile() {
    const user = new Map();

    user.set("age", document.getElementById("age").value);
    user.set("gender", document.querySelector("input[name='gender']:checked").value.toLowerCase());
    user.set("weight", document.getElementById("weight").value);
    user.set("feet", document.getElementById("feet").value);
    user.set("inches", document.getElementById("inches").value);
    user.set("activity", document.getElementById("activity-level").value.toLowerCase());
    
    return user;
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
    if(validateForm()) {
        // If all inputs are valid, create a user profile to calculate results
        const user = createUserProfile();

        // TDEE Results
        document.getElementById("tdee-results").innerHTML = "Your TDEE: results";

        // BMR Results
        document.getElementById("bmr-results").innerHTML = "Your BMR: results";

        // Input Results
        var inputResults = "";
        inputResults += "Showing results for a "; 
        inputResults += user.get("activity") + " " + user.get("age") + " year old " + user.get("gender") + " who is " + user.get("feet") + " feet " + user.get("inches") + " inch(es) tall and weighs " + user.get("weight") + " pounds."; 
        document.getElementById("input-results").innerHTML = inputResults;
    } else {
        document.getElementById("error-message").innerHTML = "Error";
    }

    return;
}