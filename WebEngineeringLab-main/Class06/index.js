
function validateForm(){
    var returnval=true;

    //perform validations
    var fname = document.forms['myForm']['fn'].value;
    var lname= document.forms['myForm']['ln'].value;


    if(fname.length<5){
        // setError("name","Length of name is too short");
       window.alert("First Name Length is too short");
        returnval = false;
    }
    if(lname.length<5){
        // setError("name","Length of name is too short");
       window.alert("Last Name Length is too short");
        returnval = false;
    }
    var password = document.forms['myForm']['password'].value;
    if(password.length<6){
        window.alert("Password length is less than six")
    }
    var cpass = document.forms['myForm']['cpass'].value;
    if(cpass!=password){
        window.alert("Password and Confirm password doesn't match")
    }
  
    return returnval;
}