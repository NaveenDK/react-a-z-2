class Person {
    constructor(name = 'Anonymous',age='anonymous'){
        this.name=name;
        this.age= age;
    }
    getGreeting() {
        return `Hi , I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old. `
    }
}


class Student extends Person {
    //add support for major    
    constructor(name,age,major){
        super(name,age)
        this.major =major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        
        let description = super.getDescription();

        if (this.hasMajor()){
            description+= `The major is ${this.major} `;
        }
        return description;
    }
    
}
class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age)

        this.homeLocation=homeLocation;
    }
    hasHome(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasHome()){
            greeting += ` Im visiting from ${this.homeLocation}` ;
        }
        return greeting;
    }
}
const me = new Traveller('Andrew Mead',4,'America');
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me);

const other = new Person();
console.log(other.getGreeting());
