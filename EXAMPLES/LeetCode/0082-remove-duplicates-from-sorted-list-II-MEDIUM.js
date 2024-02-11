// 2022-05-30
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {

    // fake head, will not move
    const start = new ListNode(0, head);

    // last node before duplicates sub list
    let prev = start;
    
    while (head) {
        if (head.next && head.val === head.next.val) {
            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
            prev.next = head.next;
            head = head.next;
        } else {
            prev = prev.next;
            head = head.next;
        }
    }
    return start.next;
};