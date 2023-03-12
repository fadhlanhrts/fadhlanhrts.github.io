function passcalc(password) {
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
        low_num: patterns.lower.test(passTxt) && !patterns.upper.test(passTxt) && patterns.num.test(passTxt) && /`~!@#$%^&*()-=_+[{]}\\|;':\",.<>?/.test(passTxt),

        

    }
}