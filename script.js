window.onload = function (){
    var generateButton = document.querySelector("#generate");
    generateButton.addEventListener("click", function(){				
    document.querySelector("#password").value = randomPass();
    });
    var copyToClip = document.querySelector("#clipboard");
    copyToClip.addEventListener("click", function(){				
        var copyText = document.getElementById("password");
        // Select the text field 
        copyText.select();      
        // Copy the text inside the text field
        document.execCommand("copy");   

        alert("Copied password to clipboard!");
    });
}


function randomPass(){
       
        var length = prompt("How long would you like your password to be? Choose a length between 8 and 128:");
        var useupper = confirm("Would you like to use uppercase letters in your password?");
        var uselower = confirm("Would you like to use lowercase letters in your password?");
        var usespecial = confirm("Would you like to use special characters in your password?");
        var usenum = confirm("Would you like to use numbers in your password?");

        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        var numbers = "1234567890";
        var specialchar = "!#$%&*+=?@~";
        var password= " ";
       
//TTTT 
            if (useupper === true && uselower === true && usespecial === true && usenum === true){
                var all = uppercase + lowercase + specialchar + numbers;
                generateFun();
                return password;
            };

//FTTT
            if (useupper === false && uselower === true && usespecial === true && usenum === true) {
                var all = lowercase + specialchar + numbers;
                generateFun();
                return password;
            };

//FFTT            
            if (useupper === false && uselower === false && usespecial === true && usenum === true) {
                var all = specialchar + numbers;
                generateFun();
                return password;
            };

//FFFT            
            if (useupper === false && uselower === false && usespecial === false && usenum === true) {
                var all = numbers;
                generateFun();
                return password;
            };

//TFFF
            if (useupper === true && uselower === false && usespecial === false && usenum === false) {
                var all = uppercase;
                generateFun();
                return password;
            };

//FTTF
            if  (useupper === false && uselower === true && usespecial === true && usenum === false) {
                var all = lowercase + specialchar;
                generateFun();
                return password;
            };

//FTFT
            if (useupper === false && uselower === true && usespecial === false && usenum === true) {
                var all = lowercase + numbers;
                generateFun();
                return password;
            };


//TFFT
            if  (useupper === true && uselower === false && usespecial === false && usenum === true) {
                var all = uppercase + numbers;
                generateFun();
                return password;
            };

//TTFF
            if (useupper === true && uselower === true && usespecial === false && usenum === false) {
                var all = uppercase + lowercase;
                generateFun();
                return password;
            };            

//TTTF

        if (useupper === true && uselower === true && usespecial === true && usenum === false) {
                var all = uppercase + lowercase + specialchar;
                generateFun();
                return password;
            };    
            
//FFTF
         if (useupper === false && uselower === false && usespecial === true && usenum === false) {
                var all = specialchar;
                generateFun();
                return password;
            };       
   
//FTTF
        if (useupper === false && uselower === true && usespecial === true && usenum === false) {
            var all = specialchar + lowercase;
            generateFun();
            return password;
        }; 
        
        if (useupper === false && uselower === false && usespecial === false && usenum === false) {
           alert("You must choose at least one password characteristic!");
            return randomPass();
        }; 
     
    
    
        function generateFun(){   
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            };
        }
    
    }
            
