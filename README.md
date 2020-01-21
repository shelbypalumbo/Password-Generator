# PasswordGenerator
## User Story
As a consumer of online subscription services, I want to be able to generate a unique password for each of my accounts, so that my information is secure.

## Usage
When the "Generate Secure Password" button is clicked, users are prompted to choose the length of their randomly generated password; betweem 8 and 128 total characters.

![interface](/images/interface.png)

After the user submits the length of the password, confirmation boxes will apear that will ask for the specific characterists of the password being generated. 
Users will have a choice of:
  * Special Characters
  * Numbers
  * Uppercase Letters
  * Lowercase Letters

![prompt](/images/prompt.png)

The chosen combinations will trigger the conditional statement with those parameters, which will then combine those parameters when calling the generateFun function.

![conditional](/images/if_state.png)

After the generateFun function runs, the generated password will be returned and printed to the text box on screen.

![result](/images/result.png)

The "Copy to Clipboard" button allows a user to copy the generated password and an alert will appear when the password has been saved!

![clip](/images/clipboard.png)
