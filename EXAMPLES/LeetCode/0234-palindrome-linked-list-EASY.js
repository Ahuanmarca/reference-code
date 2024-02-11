// 2022-04-30
// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    // const start = Date.now();
    ptr = head
    nxt = head.next
    let arr = []
    
    while (ptr != null) {
        arr.push(ptr.val)
        ptr = nxt
        nxt = (nxt == null ? null : nxt.next)
    }
    
    let foo = arr.join().replaceAll(',', '')
    arr.reverse()
    let bar = arr.join().replaceAll(',', '')
    
    // const duration = Date.now() - start;
    // console.log(duration)

    console.log(foo)
    console.log(bar)

    return foo == bar
};


class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(1)

// console.log(head)

console.log(isPalindrome(head))
