// Create an application with following rolesad using funtion
// admin : gets full access to the website
// suadmin : get access to create / delete condents
// Manager - Create a condents
// User - get access to the condents

// Input :getUserRoll(name ,role)
// Out  : role
function getUserRoll(name, role) {

    switch(role){
        case "admin":
            return(name +" " + "You gets full access");
            break; //in return barak not requade
        case "suadmin":
            return(name +" "+ "You get access to create / delete condents");
            break;//in return barak not requade
        case "manager":
            return(name +" "+ "You get access to create a condents");
            break;//in return barak not requade
        case "Normal-user":
            return(name +" "+ "You et access to the condents");
            break;//in return barak not requade
        default:
            return(name +" "+ "Upgrade the user role");
            break;//in return barak not requade
    
        }
}



let result ;

result = getUserRoll("Abin","gest")
console.log(result)


