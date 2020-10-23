// Allow user to access the website
// login from email
// login from Google account
// login from facebook account

let email = false;
let facebook =false;
let google =false;
let authenticated =false;
if (email || facebook || google )
{
    console.log ('LogIn Sussessfull');
    authenticated = true;
}
else
{
    console.log('LogIn Failed')
    authenticated = false;
}
