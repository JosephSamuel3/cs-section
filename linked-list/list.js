class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value); 
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    size() {
        return this.length;
    }
    head(){
        return this.head;
    }
    tail(){
        return this.tail;
    }
    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        } 
        return currentNode;
    }
    pop(){
        if (!this.head) {
            return null;
        }
        if (this.length === 1) {
            const poppedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return poppedNode;
        }
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        this.tail.next = null;
        this.length--;
    }
    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return null;
    }
    toString() {
        let currentNode = this.head;
        let str = '';
        while (currentNode) {
            str += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;
        }
        str += 'null';
        return str;
    }
    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.length) {
            this.append(value);
            return;
        }
        const newNode = new Node(value);
        let previousNode = this.at(index - 1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;
    }
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
        } else {
            let previousNode = this.at(index - 1);
            previousNode.next = previousNode.next.next;
            if (index === this.length - 1) {
                this.tail = previousNode;
            }
            this.length--;
        }
    }

}