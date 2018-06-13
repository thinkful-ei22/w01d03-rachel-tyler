'use strict';
/*
//Object creator
function createMyObject(){
    return {
    foo:'bar',
    answerToUniverse: 42,
    'olly olly':'oxen free',
    sayHello: function(){
        return 'hello';
},
};
}

// Object updater

function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';

    return obj;
}

//Self-reference
function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function() {
          return (`${this.firstName} ${this.lastName}`);
      },
    };
    return person;
  }

  //Deleting keys

  const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;

    return obj;
  }

//Make student reports
function makeStudentsReport(data) {
  
    let resultSet = [];
    for(var i =0; i<data.length; i++)
    {
      var item = data[i];
      let result =  `${item.name}: ${item.grade}`;
      resultSet.push(result);    
    }
    
  return resultSet;
  }

//Enroll in Summer School

const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
    function enrollInSummerSchool(students) {
      let studentStatus = []
  
      for (let i = 0; i < students.length; i++) {
        studentStatus.push({
        name: students[i].name,
        status: 'in summer school',
        course: students[i].course,
        }); 
      }
      return studentStatus;
    }
  
//Find by id
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  return items.find(items => items.id === idNum);
}

// Validate Object Keys

// START DRILLS 2

const loaf = {
  flour:300,
  water:210,
  hydration: function(){
    return (this.water / this.flour) * 100;
  }
};
console.log(`${loaf.flour} ${loaf.water}`);
console.log(loaf.hydration());


// Iterating over an object's properties

const newObject = {
  foo: 1,
  bar: "2",
  fum: [1,2,3],
  quux: 4,
  spam: true,

};

for (let key in newObject) {
  console.log(newObject[key]);
}

//Arrays in objects

const foodObject = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner','supper'],
};

console.log(foodObject.meals[3]);

//Arrays of objects

let charObject = [
      {
        name: "Tyrion",
        jobTitle: "Drinks and knows things"
      },
      
      {
        name: "Dany",
        jobTitle: "Conquerer"
      },

      {
        name: "Jon Snow",
        jobTitle: "Hero"
      },

      {
        name: "Aria",
        jobTitle: "Pro assassin"
      }
    ];
       
console.log(charObject);

*/
//

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



