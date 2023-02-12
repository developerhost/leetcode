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
var middleNode = function(head) {
    let fast = head.next
    while(fast){
        head = head.next
        console.log({head})
        fast = fast.next?.next
        console.log({fast})
    }
    return head
};
