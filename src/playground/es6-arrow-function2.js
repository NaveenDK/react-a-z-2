const add = function (a,b) {
    console.log(arguments);
   return a + b;
};

console.log( add(55,1));

const user = {
    name: 'Naveen',
    cities:['a','b','c'],
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.cities);

        
    }
}
user.printPlacesLived();

const multiplier = {
    //
    numbers:['1','2','3','4','5','6'],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number)=>this.multiplyBy * number);

    }
};
console.log(multiplier.multiply());
