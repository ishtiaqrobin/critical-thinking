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
        this.lenght = 0
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

        this.lenght++

        return this
    }

    prepend() { }

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

linkedList.append("A") //* 0
linkedList.append("B") //* 1
linkedList.append("D") //* 2

linkedList.print();



