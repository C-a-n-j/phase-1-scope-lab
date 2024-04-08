// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}
//bestcustomer

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer
}

//overriden bestcustomer
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}


const favCustomer = 'Kev'

function changeLeastFavoriteCustomer(){
    favCustomer = 'bob'
    if(favCustomer === bob){
        console.log(`Your favorite customer is ${favCustomer}`)
    }else{
        console.log('Assignment to constant variable.')
    }
}
