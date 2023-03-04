function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


function randomString() {
    
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-=_+[{]}\\|",.<>/?';
    var charactersLength = characters.length;
    for ( var i = 0; i < 11; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}


function generatePass() {
    document.getElementById("generate-text").innerHTML = "<p>Here you go</p>"
    document.getElementById("generate-calc").innerHTML = randomString()
} 


let patterns = {
    lower: /[a-z]/,
    upper: /[A-Z]/,
    num: /[0-9]/
};

function passCalc() {
    var txt
    var pool = 0
    var passTxt = document.getElementById("pass-input").value
    var l = passTxt.length
    console.log(isNaN(l));

    console.log(isNaN(pool));
    var checkComb = {
        moderate: patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && patterns.num.test(passTxt),
        medium: patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && !patterns.num.test(passTxt),
        weak1: patterns.lower.test(passTxt) && !patterns.upper.test(passTxt) && !patterns.num.test(passTxt),
        weak2: !patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && !patterns.num.test(passTxt),
        weak3: !patterns.lower.test(passTxt) && !patterns.upper.test(passTxt) && patterns.num.test(passTxt),
        
    }

    // Check if password contains special characters
    if (/`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt)) {
		pool = pool + 32.00
        
	} 
    // Check if password contains numbers
	if (patterns.num.test(passTxt)) {
		pool = pool + 10.00
	} 
    // Check if password contains uppercase letters
	if (patterns.upper.test(passTxt)) {
		pool = pool + 26.00
	} 

    // Check if password contains lowercase letters
	if (patterns.lower.test(passTxt)) {
		pool += 26.00
        
	} 

    // check for lower and upper
    if (checkComb.medium) {
		pool -= 4.00
		txt = "Use special characters and numbers in your password for a stronger password"
	} 
    // check for upper, lower, and number
    else if (checkComb.moderate) {
		pool -= 2.00
		txt = "Your password contains fairly good variatons, use special characters for a stronger password"
	} 
    // check if 
    else if (checkComb.weak1 || checkComb.weak2 || checkComb.weak3) {
		pool -= 10.00
		txt = "Use more variatons for your password (uppercase, lowercase, numbers, special characters)"
	} else {
		txt = "Your password has good character combinations"
	}

	
	var res = l * Math.log2(pool) + Math.round(l)
	
	if (res < 50) {
		document.getElementById("password-text").innerHTML = passTxt
		document.getElementById("password-calc").innerHTML = "Your password is weak"
		document.getElementById("password-calc-text").innerHTML = txt

	} else {
		document.getElementById("password-text").innerHTML = passTxt
		document.getElementById("password-calc").innerHTML = "Your password is strong"
		document.getElementById("password-calc-text").innerHTML = txt
	}

}