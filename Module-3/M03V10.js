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

    //* O(1)
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

    //* O(1)
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

        this.lenght++

        return this
    }

    //* Best Case = O(1)
    //* Worst Case = O(n)
    insert(index, value) {
        if (index < 0 || index > this.lenght) {
            console.error("Index out of bound");
            return undefined
        }

        // If the insert is in the start of the linked list
        if (index === 0) {
            return this.prepend(value)
        }

        // If the insert is in the end of the linked list 
        if (index === this.lenght) {
            return this.append(value)
        }

        // If the insert is in the middle
        // Find the leading node


        const leadingNode = this._traversedToIndex(index - 1);
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);

        leadingNode.next = newNode
        newNode.next = holdingNode

        this.lenght++
    }

    //* Best Case = O(1)
    //* Worst Case = O(n)
    remove(index) {
        if (index === 0) {
            const removeItem = this.head.value;

            this.head = this.head.next

            if (index.lenght === 1) {
                this.tail = null;
            }

            this.lenght--
            return removeItem
        }

        const leadingNode = this._traversedToIndex(index - 1);
        const nodeToRemove = leadingNode.next;

        leadingNode.next = nodeToRemove.next;

        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }

        return nodeToRemove.value
    }

    //* Privet helper method
    _traversedToIndex(index) {
        let count = 0
        let currentNode = this.head;

        //* O(n)
        while (count !== index) {
            currentNode = currentNode.next;
            count++
        }

        return currentNode;
    }

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

// linkedList.remove(2);
linkedList.remove(0);

linkedList.print();


