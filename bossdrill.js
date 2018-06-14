let charObject = [
  {
    boss: "Dany",
    name: "Tyrion",
    jobTitle: "Drinks and knows things"
  },
  
  {
    name: "Dany",
    jobTitle: "Conquerer"
  },

  {
    boss: "Dany",
    name: "Jon Snow",
    jobTitle: "Hero"
  },

  {
    boss: "Dany",
    name: "Aria",
    jobTitle: "Pro assassin"
  }
];

let bossFunction = function(arr) {
  
    for (i=0; i < arr.length; i++) {
    
       for(let property in arr[i]) { 
    

    if (arr[i].boss === undefined) {
      console.log(`${arr[i].jobTitle} ${arr[i].name} doesn't report to anybody.`);
    }

    else {
      console.log(`${arr[i].jobTitle} ${arr[i].name} reports to ${arr[i].boss}.`);
    }
    }
}
}
bossFunction(charObject);