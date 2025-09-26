import { LinkedList } from "./list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("fish");
list.insertAt("rabbit", 3);
list.removeAt(6);

console.log(list.toString());
console.log(list.size());
console.log(list.find("hamster"));
