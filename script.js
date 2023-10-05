function getFormvalue() {
    //Write your code here
	 var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Check if both fields are filled
    if (firstName !== "" && lastName !== "") {
        // Show an alert with the first and last name
        alert("First Name: " + firstName + "\nLast Name: " + lastName);
    } else {
        alert("Please fill out both first and last name fields.");
    }

}
