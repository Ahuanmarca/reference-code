class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * This function should take in a value and add a node to the end 
     * of the SinglyLinkedList. It should return the SinglyLinkedList.
     */
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }

    /**
     * This function should remove a node at the end of the SinglyLinkedList. 
     * It should return the node removed.
     */
    pop() {
        if (this.length === 0) return undefined;

        let newTail = this.head; // will become new tail
        let popper = this.head; // start together in case of length 1
        while (popper.next) {
            newTail = popper;
            popper = popper.next;
        }
        this.tail = newTail;
        newTail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return popper;
    }

    /**
     * 
     */
    shift() {

        if (this.length === 0) return undefined;
        const oldHead = this.head;
        this.head = this.head.next; // can be null
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        oldHead.next = null;
        return oldHead;
    }

    /**
     * 
     */
    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * This function should find a node at a specified index in a 
     * SinglyLinkedList. It should return the found node.
     */
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let wantedNode = this.head;
        while (counter !== index) {
            wantedNode = wantedNode.next;
            counter++;
        }
        return wantedNode;
    }

    /**
     * This function should accept an index and a value and update the 
     * value of the node in the SinglyLinkedList at the index with the 
     * new value. It should return true if the node is updated 
     * successfully, or false if an invalid index is passed in.
     */
    set(index, value) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    /**
     * This should insert a node at a specified index in a SinglyLinkedList. 
     * It should return true if the index is valid, and false if the index 
     * is invalid (less than 0 or greater than the length of the list).
     */
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        // if (index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        let previousNode = this.get(index-1);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
        if (index === this.length) this.tail = newNode;
        this.length++;
        return true;
    }

    /**
     * This function should remove a node at a specified index in
     * a SinglyLinkedList. It should return the removed node if the
     * index is valid, or undefined if the index is invalid.
     */
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();

        // We know the list has three or more nodes
        // pop() and shift() take care about head and tail cases
        const previousNode = this.get(index-1);
        const toRemove = previousNode.next;
        previousNode.next = toRemove.next;
        toRemove.next = null;
        this.length--;
        return toRemove;
    }

    /**
     * 
     */
    reverse() {
        let ptr0 = null;            // connect to this
        let ptr1 = this.head;       // connect from this
        let ptr2 = this.head.next;  // keep track of next node
        
        for (let i = 0; i < this.length; i++) {
            ptr1.next = ptr0;   // point current.next to previous node
            ptr0 = ptr1;        // move previous pointer to current node
            ptr1 = ptr2;        // move current pointer to next node
            ptr2 = ptr2?.next;  // move next node to next.next node
        }
        
        // switch head and tail
        const tmp = this.head;
        this.head = this.tail;
        this.tail = tmp;
        
        return this;
    }

    /**
     * This function should rotate all the nodes in the list by some
     * number passed in. For instance, if your list looks like 
     * 
     * 1 -> 2 -> 3 -> 4 -> 5 
     * 
     * and you rotate by 2, the list should be modified to 
     * 
     * 3 -> 4 -> 5 -> 1 -> 2. 
     * 
     * The number passed in to rotate can be any integer.
     * 
     * Time Complexity: O(N), where N is the length of the list.
     * Space Complexity: O(1)
     * 
     */

    rotate(val) {
        const rotation = val % this.length;
        if (rotation === 0) {
            return this;
        } else {
            const newHead = this.get(rotation);
            const newTail = this.get(rotation-1);
            this.tail.next = this.head;
            this.head = newHead;
            this.tail = newTail;
            newTail.next = null;
            return this;
        }
    }

    /**
     * 
     */
    print() {
        let ptr = this.head;
        while (ptr !== null) {
            console.log(ptr);
            ptr = ptr.next;
        }
    }
}

const myList = new SinglyLinkedList();
myList.push('foo');
myList.push('bar');
myList.push('baz');
myList.push('hello');
myList.push('world');
myList.print();