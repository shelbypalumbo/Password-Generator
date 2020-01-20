# PasswordGenerator
## Description
This repository contains the files for a random password generator.  
A Bootstrap layout, along with additional external styling was used to style the password generator.
Javascript was used for creating interactive buttons to perform the random password function.

## Usage
When the "Generate Secure Password" button is clicked, users will be prompted to choose the length of their randomly generated password; betweem 8 and 128 total characters.

![interface](/images/interface.png)

After the user submits the length of the password, confirmation boxes will apear that will ask for the specific characterists of the password being generated. <br>
Users will have a choice of:
  * Special Characters
  * Numbers
  * Uppercase Letters
  * Lowercase Letters

![prompt](/images/prompt.png)

The chosen combinations will trigger the if statement with those parameters, which will then use those parameters when calling the generateFun function.

![conditional](/images/if_state.png)

After the generateFun function runs, the generated password  will be returned and printed to the text box on screen.

![result](/images/result.png)

The "Copy to Clipboard" button allows you to copy the generated password and and alert will appear showing users that the password has been saved!

![clip](/images/clipboard.png)
