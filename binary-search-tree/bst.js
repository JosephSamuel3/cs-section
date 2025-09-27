class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class SearchTree {
    constructor(arr) {
        this.root = null;
        this.buildTree(arr);
    }

    buildTree(arr) {
        const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
        this.root = this._buildTreeHelper(sortedArr, 0, sortedArr.length - 1);
    }

    _buildTreeHelper(arr, start, end) {
        if (start > end) return null;
        const mid = Math.floor((start + end) / 2);
        const node = new Node(arr[mid]);
        node.left = this._buildTreeHelper(arr, start, mid - 1);
        node.right = this._buildTreeHelper(arr, mid + 1, end);
        return node;
    }
    
    insert(value) {
        this.root = this._insertHelper(this.root, value);
    }
    
    _insertHelper(node, value) {
        if (node === null) return new Node(value); 
        if (value < node.data) {
            node.left = this._insertHelper(node.left, value);
        } else if (value > node.data) {
            node.right = this._insertHelper(node.right, value);
        }
        return node;
    }

    delete(value){  
        this.root = this._deleteHelper(this.root, value)
    }

    _getSuccessor(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    }

    _deleteHelper(node,value){
        if(node === null) return null;

        if(node.data > value){
            node.left = this._deleteHelper(node.left, value)
        } else if (node.data < value){
            node.right = this._deleteHelper(node.right, value)
        }else {
            //case 1: No child (or leaf Node)
            if (node.left === null && node.right === null) {
                return null;
            }
            
            //case 2: node only has one child
            if(node.left === null){
                return node.right
            }else if(node.right === null){
                return node.left
            }

            //case 3: node has more than one child
            let succ = this._getSuccessor(node)
            node.data = succ.data
            node.right = this._deleteHelper(node.right, succ.data)
        }
        return node
    }

    find(value, node = this. root){
        if(!node) return null;

        if(node.data === value) return node;

        if (node.data > value){
            return this.find(value, node.left)
        }
        return this.find(value, node.right)
    }

    levelOrderForEach(callback, root = this.root){
        if (!root) return;
        
        if (typeof callback !== 'function' || callback === null) {
            throw new Error("Please provide a callback function")
        }
        const queue =[root]

        while (queue.length > 0){
            let curr = queue.shift()
            callback(curr.data)

            if (curr.left !== null) queue.push(curr.left);
            if (curr.right !== null) queue.push(curr.right);
        }
    }

    inOrderForEach(callback, node = this.root){
        if (!node) return;
        this.inOrderForEach(callback, node.left);
        callback(node.data);
        this.inOrderForEach(callback, node.right);
    }

    preOrderForEach(callback, node = this.root){
        if (!node) return;
        callback(node.data);
        this.preOrderForEach(callback, node.left);
        this.preOrderForEach(callback, node.right);
    }

    postOrderForEach(callback, node = this.root){
        if (!node) return;
        this.postOrderForEach(callback, node.left);
        this.postOrderForEach(callback, node.right);
        callback(node.data);
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) return;
        if (node.right) {
            this.prettyPrint(node.right, prefix + (isLeft ? "│   " : "    "), false);
        }
        console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);
        if (node.left) {
            this.prettyPrint(node.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }

    height(value, node = this.root){
        if(!node) return -1

         if (value !== undefined && node === this.root) {
            node = this.find(value);
            if (!node) return -1;
        }

        const leftHeight = this.height(undefined, node.left);
        const rightHeight = this.height(undefined, node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    
    }

    depth(value, node = this.root, currentDepth = 0){
        if (!node) return -1;

        if (node.data === value) return currentDepth;

        if (value < node.data) {
            return this.depth(value, node.left, currentDepth + 1);
        } else {
            return this.depth(value, node.right, currentDepth + 1);
        }
    }

    isBalanced(node = this.root){
        if (!node) return true;

        const leftHeight = this.height(undefined, node.left);
        const rightHeight = this.height(undefined, node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    rebalance(){
        const values = [];
        this.inOrderForEach((data) => values.push(data));
        this.buildTree(values);
    }
}

