 var person = {
     name: 'Ivan',
     age: 26,
     car: {
         model: 'audi'
     },
     friend: ['Elena', 'Andrey']
 };
 
 var str = JSON.stringify(person)
//  console.log(str)

console.log(JSON.parse(str))      
