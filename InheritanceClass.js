//lets write an insurance program that helps us find the cost
/*
function insuranceType
return type

function insuranceCost

return cost

*/

class Insurance {
    constructor(type,cost){ //first method that's going to run when you instensiate the class
        this.type = type; // attributes
        this.cost = cost;
    }
    //get the information from my Insurance class
    getType(){
            return this.type; //use this.type, because it belongs to the constructor class
    }
    getCost(){
            return this.cost;
    }
    //can't create instance here
}


//life, is going to inherant everything from it's parent class (Insurance), but also has new additional classes, like setCost
class Life extends Insurance { //subclass, through the extends keyword, Life is connected to everything that Insurance has
    constructor(){ //first method that's going to run when you instensiate the class
        super('life',100); // Insurance is the parent or SUPER class, life is the subclass or child, without super we're invoking structure but not the conststructor of the parent class. which would defeat the purpose. 
        this.setCost();
    }                // baseline is life, which costs 100 dollars.
    setCost(){ //how do I sent the cost if it's different than the original insurance plan
        this.cost = super.getCost() + 30; // want to now add 30 to 100
    } 
    display(){
        console.log(`${this.type}insurance will cost me ${this.cost} per month`); //
    }
}
//REMEMBER THESE LINES FOR REACT!! 29-34, SUPER IS THE KEY TO THE HOUSE

//main function, 
function main(){
    let life = new Life()
    life.display();

    let health = new health();
    health.display();
}







// let ins = new Insurance('Life', 100) //when you execute this instance, whatever is in constructor runs
// console.log(ins.getType);

// let health = new Insurance('Health', 50) 
// console.log(ins.getType) //great to access, but if we want to do anything other than get type and get cost, we need to create another class within the parent

