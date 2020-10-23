
//LogOut

let authenticated =false;
if (authenticated){
    console.log('show signout button');
    authenticated = false;
}
else{
    console.log('show signIN button');
    authenticated = true;
}