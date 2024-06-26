// Write your solution in this file!

// Declare to uppercase the customerName variable
var customerName = 'bob';

// Function to uppercase the CustomerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set the bestCustomer variable
function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

//Function to overwrite the bestCustomer variable
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer; 
}

// Declare a constant variable leastFavoriteCustomer
const leastFavoriteCustomer = 'initial value';

// Function to attempt changing the leastFavoriteCustomer variable
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; //This should throw an error
}


