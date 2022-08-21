//    ***********    Palindrome  **********

// const letters = [];
// const word = "racecarkdjafkfj"

// let revword = "";

// for (var i = 0; i < word.length; i++){
//     letters.push(word[i]);
// }

// for (var i = 0; i < word.length; i++){
//     revword += letters.pop()


// }
 
// (revword === word) ?
//     console.log(word + " is a palindrome") :console.log(word + " is not a palindrome")


// var Stack=function(){
//     this.count = 0
//     this.storage = {}

//      this.push=function(value){
//        this.storage[this.count] = value
//         this.count++
//     }

//    const pop = () => {
//         if (count === 0) {
//             return undefined;
//         }

//         count--

//         const result = storage[count];
//         delete storage[count];
//         return result;
//     }

//     const size = () => {
//         return count
//     }

//     this.peek = value => {
//         return storage[count -1]
//     }
// }

// const myStack = new Stack()

// myStack.push("hi")



// creating arrays and its methods
// class MyArray {
//     constructor() {
//         this.length = 0
//         this.data = {}
//     }

//     get(index) {
//         return this.data[index]
//     }

//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.length;
//     }
    
//     pop() {
//         const lastItem = this.data[this.length - 1];
//         delete this.data[this.length - 1]
//         this.length--
//         return lastItem
//     }
    
//     delete(index) {
//         const item = this.data[index];
//         this.shiftItems(index)
//     }
//     shiftItems(index) {
//         for (let i = index; i < this.length - 1; i++)
//         {
//           this.data[i]=this.data[i+1]  
//         }
//         delete this.data[this.length - 1]
//         this.length--
//     }
// }

// const newArray = new MyArray()
// newArray.push("hi")
// newArray.push("you")
// newArray.push("!")

// newArray.delete(1)

// console.log(newArray)



// Creating a function to reverse a string

// function reverseStr(str) {
//     // str validation
//     if (!str || str.length < 2 || typeof str !== 'string') {
//         console.log("Something's wrong!!!")
//     }

//     const reverseArray = [];
//     const totalItems = str.length - 1;
//     for (let i = totalItems; i >= 0; i--){
//         reverseArray.push(str[i])
//     }
//     console.log(reverseArray)

//     return reverseArray.join("")
// }

// function reverse2(str) {
//     return str.split("").reverse().join("")
// }

// const reverse3 = str => {
//    [...str].reverse().join("")
// }

// console.log(reverseStr("Bijay Nagarkoti")) 
// console.log(reverse2("Hello"))
// console.log(reverse3("Hello"))




// function mergeSortedArrays(array1, array2) {
//     const mergedArray = [];
//     let array1Item = array1[0]
//     let array2Item = array2[0]
//     let i = 1
//     let j = 1
//     // check input
//     if (array1.length === 0) {
//         return array2
//     }
//     if (array2.length === 0) {
//         return array1
//     }

//     while (array1Item || array2Item) {
//         console.log(array1Item, array2Item)
//         if (!array2Item || array1Item < array2Item) {
//             mergedArray.push(array1Item)
//             array1Item = array1[i]
//             i++
//         } else {
//             mergedArray.push(array2Item);
//             array2Item = array2[j];
//             j++
//         }
//     }
//     return mergedArray
// }

// console.log(mergeSortedArrays([0,3,5,7],[9,11,13, 88])) 

// Hash table => Objects in Javascript
// Hash function => md5, sha, sha256 => one way => idempotent => same input gives same output no matter how many times it's run through the function. => does it make the process slow? => depends on the generator function.
// insert, lookup, delete, search all (O(n))

// let user = {
//     age: 43,
//     name: "Bijay", 
//     magic: true,
//     power: function () {
//         console.log("You are invisible!")
//     }
// }

// console.log(user.age)
// user.spell= "abrakadabra"
// console.log(user.power())

// Cons of hashtables=> collisions => slows down ability to access or insert => collisions slow down r&w by O(n/k)=> O(n)
// Map, set 

// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);

//     }

//     _hash(key) {  //_sth is a private key, can't be accessed outside the class
//         let hash = 0
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) %
//                 this.data.length
//         }
//         return hash
//     }
    
//     set(key, value) {
//         let address = this._hash(key)
//         if (!this.data[address]) {
//             this.data[address] = []
          
//         }
//         this.data[address].push([key, value])
//         console.log(this.data)
      
//     }

//     get(key) {
//         let address = this._hash(key)
//         const currentBucket = this.data[address];
//         if (currentBucket) {
//             for (let i = 0; i < currentBucket.length; i++) {
//                 if (currentBucket[i][0] === key) {
//                     console.log(currentBucket[i][1])
//                 }
//             }
//         }
//         return undefined
//     }

//     keys() {
//         const keysArray = [];
//         for (let i = 0; i < this.data.length; i++) {
//             if (this.data[i]) {
//                 keysArray.push(this.data[i][0][0])
//             }
            
//         } console.log(keysArray)
//     }
    
//     values() {
//         const valuesArray = [];
//         for (let i = 0; i < this.data.length; i++) {
//             if(this.data[i]){
//                 valuesArray.push(this.data[i][0][1])
//             }
//         }
//         console.log(valuesArray)
//     }
// }

// const myHashTable = new HashTable(30);
// myHashTable.set("grapes", 1000);
// myHashTable.set("apples", 3000);
// myHashTable.set("oranges", 2);
// myHashTable.keys()
// myHashTable.values()

// Google question for finding the first recurring item in an array

// function firstRecurringChar(input) {
//     for (let i = 0; i < input.length; i++){
//         for (let j = i + 1; j < input.length; j++) {
//             if (input[i] === input[j]) {

//                 console.log(input[i])
//             }
//         }
//     }
//     return undefined
// } // (O(n^2))
// O(1) space complexity

// firstRecurringChar([2,4,1,2,4,5,7])

function firstRecurringChar(input) {
    let map = {}; // O(n)
    for (let i = 0; i < input.length; i++){
        
        if (map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]]=i
        }
        console.log(map)
    }
    return undefined
}
firstRecurringChar([2,3,4,7,2,4])