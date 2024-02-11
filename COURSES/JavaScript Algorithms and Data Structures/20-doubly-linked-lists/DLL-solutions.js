class Node{
    constructor(val){
        this.val = val;
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList {

    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        const toPop = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            toPop.prev.next = null;
            toPop.prev = null;
        }
        this.length--;
        return toPop;
    }
    
    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    
    shift() {
        if (this.length === 0) return undefined;
        const toRemove = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            toRemove.next = null;
            
        }
        this.length--;
        return toRemove;
    }
    
    get(index) {
        if (this.length === 0) return undefined;
        let counter = 0;
        let pointer = this.head;
        while (counter < index) {
            pointer = pointer.next;
            counter++;
        }
        return pointer;
    }
    
    set(index, value) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }
    
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();
        
        const toRemove = this.get(index);
        toRemove.next.prev = toRemove.prev;
        toRemove.prev.next = toRemove.next;
        toRemove.next = null;
        toRemove.prev = null;
        this.length--;
        return toRemove;
    }
    
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        const newNode = new Node(value);
        const ptr = this.get(index);

        newNode.prev = ptr.prev;
        newNode.next = ptr;
        ptr.prev.next = newNode;
        ptr.prev = newNode;
        this.length++;
        return true;
    }

    reverse() {
        if (this.length === 0) return undefined;
        
        let ptr1 = this.head;
        let ptr2 = this.head.next;

        for (let i = 0; i < this.length; i++) {
            // swap prev and next
            const tmp = ptr1.next;
            ptr1.next = ptr1.prev;
            ptr1.prev = tmp;
            // move pointers
            ptr1 = ptr2;
            if (ptr2) ptr2 = ptr2.next;
        }   
        
        // switch head and tail
        const tmp = this.head;
        this.head = this.tail;
        this.tail = tmp;
        
        return this;
    }

    print() {
        let ptr = this.head;
        while (ptr !== null) {
            console.log(ptr);
            ptr = ptr.next;
        }
    }
}

const myList = new DoublyLinkedList();
myList.push('Foo');
myList.push('Bar');
myList.push('Baz');
myList.push('Hola');
myList.push('Mundo');

myList.reverse();
myList.print();
