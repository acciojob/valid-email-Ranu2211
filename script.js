function validEmail(str) {
  //your JS code here.
	if (!str || typeof str !== 'string') {
        return false;
    }
const emailPattern = /^[a-zA-Z0-9]([-._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/;
    
    return emailPattern.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");

alert(validEmail(str));
