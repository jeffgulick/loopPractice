
let persons = [
{firstName: "Jane", lastName: 'Doe', birthDate: 'Feb 1 1925', gender: 'female'},
{firstName: "Joe", lastName: 'Doe', birthDate: 'Jan 1 1989', gender: 'male'},
{firstName: "Jack", lastName: 'Doe', birthDate: 'March 1 1989', gender: 'female'},
{firstName: "Dan", lastName: 'Doe', birthDate:  'April 1 1975', gender: 'male'},
]

const person = { 
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
    
}

//supposed to print add birth year

for (let x in person) {
    if (x == 'birthDate'){
      let temp = person[x].slice(person[x].length - 4);
      let date = parseInt(temp); 
      if(date % 2 !== 0){
          console.log(person[x]);
      }
    } 
  }



let stuff = [
    {name: 'Jeff', age: 39, occupation: 'loser'},
    {name: 'Jo', age: 25, occupation: 'author'},
    {name: 'Mike', age: 55, occupation: 'engineer'},
    {name: 'Jane', age: 20, occupation: 'teacher'},
    {name: 'Michelle', age: 40, occupation: 'musician'},
    {name: 'Eric', age: 25, occupation: 'carpenter'},
    {name: 'Erika', age: 38, occupation: 'teacher'}
  ]

//printing out my object of arrays using map function
 const myStuff = stuff.map(x => {
      console.log(x);
  })

//checking for males only
  const personFilter = persons.filter(word => word.gender === 'male');
  console.log(personFilter)
  
//checking for birth before 1990
//Func that converts birth dates into integers
const convert = (obj) => {
    for (let x of persons) {
        let date = x.birthDate.slice(x.birthDate.length - 4);
        let temp = parseInt(date)
        x.birthDate = temp;     
}
}
//calling function to convert dates to integers
convert(persons);
//using filter() to get entries born before 1990
const yearFilter = persons.filter(date => date.birthDate < 1990);
console.log(yearFilter);
