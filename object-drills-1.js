'use strict';
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
  
