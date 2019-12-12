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
                
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };


//FTTT
            if (useupper === false && uselower === true && usespecial === true && usenum === true) {
                var all = lowercase + specialchar + numbers;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };


//FFTT            
            if (useupper === false && uselower === false && usespecial === true && usenum === true) {
                var all = specialchar + numbers;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };


//FFFT            
            if (useupper === false && uselower === false && usespecial === false && usenum === true) {
                var all = numbers;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };


//TFFF
            if (useupper === true && uselower === false && usespecial === false && usenum === false) {
                var all = uppercase;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };


//FTTF
            if  (useupper === false && uselower === true && usespecial === true && usenum === false) {
                var all = lowercase + specialchar;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };


//FTFT
            if (useupper === false && uselower === true && usespecial === false && usenum === true) {
                var all = lowercase + numbers;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };



//TFFT
            if  (useupper === true && uselower === false && usespecial === false && usenum === true) {
                var all = uppercase + numbers;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };


//TTFF
            if (useupper === true && uselower === true && usespecial === false && usenum === false) {
                var all = uppercase + lowercase;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };            


//TTTF

        if (useupper === true && uselower === true && usespecial === true && usenum === false) {
                var all = uppercase + lowercase + specialchar;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };    
            
//FFTF
         if (useupper === false && uselower === false && usespecial === true && usenum === false) {
                var all = specialchar;
    
            for (var i = 0; i < length; i++) {
                var character = Math.floor(Math.random() * all.length);
                password += all.substring(character, character + 1);
            }
            return password;
            };       
   

 //FTTF
        if (useupper === false && uselower === true && usespecial === true && usenum === false) {
             var all = specialchar + lowercase;

        for (var i = 0; i < length; i++) {
            var character = Math.floor(Math.random() * all.length);
            password += all.substring(character, character + 1);
        }
        return password;
        };            
     }
            


        window.onload = function (){
        var generateButton = document.querySelector("#generate");

        generateButton.addEventListener("click", function(){				
        document.querySelector("#password").value = randomPass();
        });
    }
