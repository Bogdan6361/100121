let arr = [1, 'b', 5,5,9,4, 'c',4, 'f'];
let flag = false;
let z = 'c';
for (let i=o; i<arr.length; i++){
    if(arr[i] === z) {
        flag = true;
        break;
        // index = i
    }
} 
if (flag==true) {
    console.log('yes');
} else{
    console.log('no');
}
// create function 

function hasElem(arr, elem){
    for (let i=0; i<arr.length; i++){
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}
console.log(arr, 'c');
console.log(`${hasElem(arr,'c')
? 'yes' : 'no'}`);

let num = 31;
flag=false;
for(let i=2; i<num; i++){
    if (num%i===0){
        flag=true;
    }
}
if (flag==true) {
    console.log('yes');
} else{
    console.log('no');
}
flag=false;
/* for(let i=0; i<arr.length-1; i++){
    if (arr[i]===arr[i+1]){
        flag=true;
        break;
    }
}
*/
flag=false;
for(let i=1; i<arr.length; i++){
    if (arr[i]===arr[i-1]){
        flag=true;
        break;
    }
}
if (flag==true) {
    console.log('yes');
} else{
    console.log('no');
}

let n1 = prompt('Enter some number1');
let n2 = prompt('Enter some number2');
if (typeof n1 !== 'number' && typeof n2 !== 'number') {
    throw new TypeError('This is not a number');
}
let sum = null;
try{
    sum=n1+n2;
} catch{
    sum='Error';
}

const myPow = n=> {
    if(typeof n!=='number') {
        throw new TypeError('param n must be a number');
    } if (!Number.isSafeInteger(n)) {
        throw new RangeError('param n is not a safe integer');
    }
    return n*n;
};

const testFun = () => {
    let result=null;
    try{
        result = myPow(4);
    } catch {
result = 'Error for myPow'
    } finally{
        return result;
    }
};

console.log('Result of function = ', testFun());

// classes ---------------------------------------------
class User {
    constructor(name, surname, age){
this.name = name;
this.surname = surname;
this.age = age;
    }
    sayHello() {
        console.log(`Hello, ${this.name} ${this.surname}`);
    }
    getFullName(){
        // console.log(this.name, this.surname);
        return `${this.name} ${this.surname}`; 
    }
    isAdult(){
        return this.age >=18;
    }
}

const user1 = new User('Alex', 'Fox', 20);
const user2 = new User('Sasha', 'Grey', 16);
console.log('User1');
console.log(user1);

user1.sayHello();
user2.sayHello();

console.log(user1.isAdult());
console.log(user2.isAdult());

class Worker {
   constructor (name, surname, rate, days){
       this.name = name;
       this.surname = surname;
       this.rate = rate;
       this.days = days;
   } 
}

// 10.01.2021
// user = "Ivan Ivanov";
users = [user1,user2,user3];
users=["Name1 Surname1", "Name2 Surname2", "Name3 Surname3"];
let newArr = ["Ivan Ivanov", "Ivan Ivanov", "Ivan Ivanov"];
/* const user = {
    name: 'Ivan',
    secondname: 'Vitalievich',
    surname: 'Ivanov'
} */
// k objectu dobavit metod vyvoda fio
const user = {
    name: 'Ivan',
    secondname: 'Vitalievich',
    surname: 'Ivanov',
    fullname: function(){return `{this.name} {this.secondname} {this.surname}`}
}
/* class User {
    constructor (name='Ivan', secondname='Vitalievich', surname='Ivanov', age=18){
        this.name = name;
        this.secondname = secondname;
        this.surname = surname;
        this.age = age;
    }
}
constructor(options){
    this.name=options.name || 'Ivan';
    this.secondname=options.secondname || 'Vitalievich';
    this.surname=options.surname || 'Ivanov';
    this.age=options.age || 18;
} */
// class user s metodom vyvoda fio
class User{
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){return `{this.name} {this.secondname} {this.surname}`

    }
}

class Animal{
constructor(name){
    this.name=name;
}
sound(){
    console.log("I speak");
}
}
class Cat extends Animal{
    constructor(name, speed){
//        this.name = name; // mistake !!
super(name); // vyzov constructora roditelskogo classa
this.speed = speed; // novoe svoistvo dlya classa cota
    }
    run(){
        console.log(`Speed of ${this.name} is ${this.speed}`);
    }
    // pereopredelenie metoda roditelskogo classa
sound(){console.log(`${this.name} speak`);}}
const animal1 = new Animal('SomeAnimal');
const cat1 = new Cat('Barsik',8);
cat1.run();
cat1.sound();

class User{
    constructor(name, password, email){
        this.name=name;
        this.password=password;
        this.email=email;}
        getUserInfo(){
    return (`${this.name}:${this.email}`);
}
    }

class Stud extends User{
    constructor(name, password, email, marks){
super(name, password, email);
this.marks = marks;
    }
outMarks(){
    console.log(this.marks);
}
avMark(){
let sum=0;for(let i=0; i<this.marks.length; i++){
    sum+= this.marks[i];
}
return sum / this.marks.length;
    //    return this.marks.reduce((a,b) => a+b)/this.marks.length;
}
}
class Teacher extends User{
    constructor(name, password, email, hours=800, salary){
        super(name, password, email);
        this.hours=hours || 800;
        this.salary = salary;
    }
    funAddMoney(prize){
if(this.hours >= 800) {
        this.salary += prize;
    }
    }
    getSalaryTeacher(){
        console.log(this.salary);
    }
}
const Ivanov = new Stud("Ivan Ivanov, "qwerty", "iva@MediaList.com, [5,4,5,5,4,5]);
console.log(Ivanov.getUserInfo());
Ivanov.avMark();

const KarsonTeacher = new Teacher("Karsonchik", 'zxcv', 'karson@mail.com', 1000, 15000);
console.log(KarsonTeacher.getUserInfo());
KarsonTeacher.getSalaryTeacher();
KarsonTeacher.funAddMoney(5000);
KarsonTeacher.getSalaryTeacher();
console.log(Ivanov instanceof Stud);
console.log(Ivanov instanceof User);
console.log(KarsonTeacher instanceof User);
console.log(KarsonTeacher instanceof Stud);
console.log(KarsonTeacher instanceof Teacher);

