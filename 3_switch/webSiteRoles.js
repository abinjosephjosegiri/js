// Create an application with following rolesad
// admin : gets full access to the website
// suadmin : get access to create / delete condents
// Manager - Create a condents
// User - get access to the condents


let user = "ad";

switch(user){
    case "admin":
        console.log("You gets full access");
        break;
    case "suadmin":
        console.log("You get access to create / delete condents");
        break;
    case "manager":
        console.log("You get access to create a condents");
        break;
    case "Normal-user":
        console.log("You et access to the condents");
        break;
    default:
        console.log("Upgrade the  user role");
        break;

    }