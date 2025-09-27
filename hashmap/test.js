import { HashMap, HashSet } from './hashmap.js';

const test = new HashMap(16, 0.75);

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('banana', 'green')
test.set('moon', 'silver')
test.remove('moon')

console.log(test.entries());;
console.log(test.length());
console.log("Capacity:", test.capacity);
console.log("Load Factor:", test.loadFactor);
console.log("Size:", test.size);
console.log("Current ratio:", test.size / test.capacity);

const testSet = new HashSet(16, 0.75);

testSet.set('apple');
testSet.set('banana');
testSet.set('carrot');
testSet.set('dog');
testSet.set('elephant');
testSet.set('frog');
testSet.set('grape');
testSet.set('hat');
testSet.set('ice cream');
testSet.set('jacket');
testSet.set('kite');
testSet.set('lion');


console.log(testSet.keys());
console.log(testSet.length());
console.log("Capacity:", testSet.capacity);
console.log("Load Factor:", testSet.loadFactor);
console.log("Size:", testSet.size);
console.log("Current ratio:", testSet.size / testSet.capacity);
