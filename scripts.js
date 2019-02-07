/**
 *  1. start by linking submit and clear buttons to submit and clear variables
 *  2. declare array to store names in
 *  3. start an onclick function for submit
 *  4. inside that grab the data from the html text boxes id'd "firstname" and "lastname"
 *  5. combine firstname and lastname into new variable "fullName"
 *  6. "push" fullName into nameArray
 *  7. log nameArray into console
 *  8. clear textboxes
 */

let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
let nameArray = [];

submit.onclick = function () {
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let fullName = firstName + " " + lastName;
    nameArray.push(fullName);
    console.log(nameArray);
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
};

clear.onclick = function () {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
};
