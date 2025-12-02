class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        const newNode = new Node(value)

        // If the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the linked list is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++

        return this
    }

    prepend(value) {
        const newNode = new Node(value)

        // If the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the linked list is not empty
            newNode.next = this.head
            this.head = newNode;
        }

        this.length++

        return this
    }

    insert() { }

    remove() { }

    print() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value);

            currentNode = currentNode.next
        }

        console.log(arr.join(" -> "), "-> null ");
    }
}

const linkedList = new LinkedList();

linkedList.append(1) //* 3
linkedList.append(2) //* 4
linkedList.append(3) //* 5

linkedList.prepend(10) //* 2
linkedList.prepend(20) //* 1
linkedList.prepend(30) //* 0

linkedList.print();

