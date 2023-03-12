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
    var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
    var nums = '0123456789'
    var symbols = '`~!@#$%^&*()-=_+[{]}\\|",.<>/?';

    var upperLength = upperChar.length
    var numLength = nums.length;

    var lowerLength = lowerChar.length
    var symLength = symbols.length;


    for ( var i = 0; i < 3; i++ ) {
        result += upperChar.charAt(Math.floor(Math.random() * 
        upperLength));

        result += nums.charAt(Math.floor(Math.random() * 
        numLength));

        result += lowerChar.charAt(Math.floor(Math.random() * 
        lowerLength));

        result += symbols.charAt(Math.floor(Math.random() * 
        symLength));
    }
    return result;
}


function generatePass() {
    document.getElementById("generate-text").innerHTML = "<p>Here you go</p>"
    document.getElementById("generate-calc").innerHTML = randomString()
} 


let patterns = {
    // check for lowercase letters
    lower: /[a-z]/,

    //check for uppercase letters
    upper: /[A-Z]/,

    //check for numbers
    num: /[0-9]/
};

function passCalc() {
    document.getElementById("password-calc-text").innerHTML = ''
    document.getElementById("password-text").innerHTML = ''
    var txt
    var pool = 0
    var passTxt = document.getElementById("pass-input").value
    //password length
    var passLen = passTxt.length
    console.log(isNaN(passLen));

    console.log(isNaN(pool));
    var checkComb = {
        //check if password has good combinations - lowercase, uppercase, numbers, symbols
        all: patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && patterns.num.test(passTxt) && /`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),
        
        //password with lower, upper, and symbols
        low_up_sym: patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && !patterns.num.test(passTxt) && /`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),
        
        //password with lower, upper, and numbers
        low_up_num: patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && patterns.num.test(passTxt) && !/`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),

        //password with lower, numbers, and symbols
        low_num_sym: patterns.lower.test(passTxt) && !patterns.upper.test(passTxt) && patterns.num.test(passTxt) && /`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),

        //password with upper, numbers, and symbols
        up_num_sym: !patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && patterns.num.test(passTxt) && /`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),

        //only lowercase
        low: patterns.lower.test(passTxt) && !patterns.upper.test(passTxt) && !patterns.num.test(passTxt) && !/`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),
        
        //only uppercase
        up: !patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && !patterns.num.test(passTxt) && !/`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),
        
        //only numbers
        num: !patterns.lower.test(passTxt) && !patterns.upper.test(passTxt) && patterns.num.test(passTxt) && !/`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),
        
        //only symbols
        sym: !patterns.lower.test(passTxt) && !patterns.upper.test(passTxt) && !patterns.num.test(passTxt) && /`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),


        //lowercase and uppercase
        low_up: patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && !patterns.num.test(passTxt) && !/`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),

        //lowercase and numbers
        low_num: patterns.lower.test(passTxt) && !patterns.upper.test(passTxt) && patterns.num.test(passTxt) && !/`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),
        
        //lowercase and symbols
        low_sym: patterns.lower.test(passTxt) && !patterns.upper.test(passTxt) && !patterns.num.test(passTxt) && /`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),

        //uppercase and numbers
        low_sym: !patterns.lower.test(passTxt) && patterns.upper.test(passTxt) && patterns.num.test(passTxt) && !/`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),

    }


    // determine the result based on character combinations and password length
    var results = {
        //weak password
        weak: checkComb.low || checkComb.up || checkComb.num || checkComb.sym,

        //medium password
        medium1: checkComb.low_up_sym || checkComb.low_up_num || checkComb.medium3 || checkComb.medium4 && passLen < 6,

        //medium password 
        medium2: checkComb.medium1 || checkComb.medium2 || checkComb.medium3 || checkComb.medium4 && passLen >= 6,

        

    }

    /*

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
    if (checkComb.medium && passLen < 6) {
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

    
	
	var res = passLen * Math.log2(pool) + Math.round(passLen)

    console.log(res);
	*/

	if (passTxt == '') {
        document.getElementById("password-calc").innerHTML = "Please enter a password"
    } else if (results.weak) {
		document.getElementById("password-text").innerHTML = passTxt
		document.getElementById("password-calc").innerHTML = "Your password is weak"
		document.getElementById("password-calc-text").innerHTML = "Use special characters and numbers in your password for a stronger password"
        res = 0
        pool = 0
	} else if (results.medium1) {
		document.getElementById("password-text").innerHTML = passTxt
		document.getElementById("password-calc").innerHTML = "Your password is weak"
		document.getElementById("password-calc-text").innerHTML = "Use more characters, special characters, and numbers in your password for a stronger password"
        res = 0
        pool = 0
        //Your password contains fairly good variatons, use special characters for a stronger password"
	} else if (results.medium2) {
		document.getElementById("password-text").innerHTML = passTxt
		document.getElementById("password-calc").innerHTML = "Your password is moderate"
		document.getElementById("password-calc-text").innerHTML = "Your password contains fairly good variatons, use special characters for a stronger password"
        res = 0
        pool = 0
	} 
    else if (checkComb.moderate){
		document.getElementById("password-text").innerHTML = passTxt
		document.getElementById("password-calc").innerHTML = "Your password is strong"
		document.getElementById("password-calc-text").innerHTML = txt
        res = 0
        pool = 0
	}

    // tambahkan pengecekan untuk kombinasi 2 karakter: huruf besar-huruf kecil, huruf kecil-angka, dll

}

module.exports = main;