import { SearchTree } from "./bst.js";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new SearchTree(arr)

const callback = (value) => {
    console.log(value)
}

console.log("Is balanced:", tree.isBalanced());

console.log("Tree structure:");
tree.prettyPrint();

console.log("Level order");
tree.levelOrderForEach(callback);
console.log("Pre order");
tree.preOrderForEach(callback);
console.log("Post order");
tree.postOrderForEach(callback);
console.log("In order");
tree.inOrderForEach(callback);

tree.insert(1001);
tree.insert(10);
tree.insert(20);
tree.insert(2);
console.log("Is balanced:", tree.isBalanced());

console.log("Tree structure:");
tree.prettyPrint();

console.log("Level order");
tree.levelOrderForEach(callback);
console.log("Pre order");
tree.preOrderForEach(callback);
console.log("Post order");
tree.postOrderForEach(callback);
console.log("In order");
tree.inOrderForEach(callback);

tree.rebalance();
console.log("Is balanced:",tree.isBalanced());

console.log("Tree structure:");
tree.prettyPrint();

console.log("Level order");
tree.levelOrderForEach(callback);
console.log("Pre order");
tree.preOrderForEach(callback);
console.log("Post order");
tree.postOrderForEach(callback);
console.log("In order");
tree.inOrderForEach(callback);