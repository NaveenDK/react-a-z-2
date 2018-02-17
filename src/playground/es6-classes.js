class Person {
    constructor(name = 'Anonymous',age='anonymous'){
        this.name=name;
        this.age= age;
    }
    getGreeting() {
        return `Hi , I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

const me = new Person('Andrew Mead',4);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
