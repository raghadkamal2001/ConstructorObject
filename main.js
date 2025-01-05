

// //question 1
//   let persons = {
//      firstName: ['John', 'Alex', 'Alice', 'Thor' ]
//     };
//   function firstName(persons) {
//     let result = Object.values(persons)
//     return result; 
//   }
  
  
//   console.log(firstName(persons));


  

//question2


let info = {
  firstName:"Moh",
  age:24
};
  function objectToArray(obj) {
    let objK = Object.keys(obj)
    let objvalue= Object.values(obj)
    console.log([...objK , ...objvalue])
  }
  objectToArray(info)
  
  




   function Car(brand, model, year) {
    this.brand = brand; 
    this.model = model;  
    this.year = year;    
    
    this.getDetails = function() {
       return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    };
  }


 let car1 = new Car("Toyota", "Corolla", 2020);
 let car2 = new Car("Honda", "Civic", 2019);
  let car3 = new Car("Ford", "Mustang", 2021);


 let cars = [car1, car2, car3];
for (let i = 0; i < cars.length; i++) {
   console.log(cars[i].getDetails());
  }




