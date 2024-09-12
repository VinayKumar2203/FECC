// Basic Switch Case======================
function getDayOfWeek1(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday")
            break;
        case 2:
            console.log("Monday")
            break;
        case 3:
            console.log("Tuesday")
            break;
        case 4:
            console.log("Wednesday")
            break;
        case 5:
            console.log("Thrusday")
            break;
        case 6:
            console.log("Friday")
            break;
        case 7:
            console.log("Saturday")
            break;
    
        default:
            console.log("please put a right number")
            break;
    }
}
getDayOfWeek1(2)

// switch with fall-through------------------------------------
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
           return "Sunday"
            break;
        case 2:
           return "Monday"
            break;
        case 3:
           return "Tuesday"
            break;
        case 4:
           return "Wednesday"
            break;
        case 5:
           return "Thrusday"
            break;
        case 6:
            return "Weekend"
            break;
        case 7:
            return "Weekend"
            break;
    
        default:
             return "please put a right number"
            break;
    }
} 

console.log (getDayOfWeek(6))

// Switch Case with Multiple Conditions------------------------

function classifyAnimal(animal) {
   switch (animal) {
    case 1:
        return "Mammal";
        break;
    case 2:
        return "bird";
        break;
    case 3:
        return "reptile";
        break;
   
    default:
        return "this is not a valid group";
        break;
   } 
}

console.log(classifyAnimal(3))