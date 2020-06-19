// Merge two sorted linked lists and return it as a new sorted list. 
// The new list should be made by splicing together the nodes of the first 
// two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
//  @param {ListNode} l1
//  @param {ListNode} l2
//  @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let newRoot = new ListNode();
  let currHead = newRoot;

    while (l1 || l2) {
        let l1Val = l1 ? l1.val : Infinity;
        let l2Val = l2 ? l2.val : Infinity;
        
        if (l1Val < l2Val) {
            currHead.next = new ListNode(l1Val);
            l1 = l1.next;
        }else{
            currHead.next = new ListNode(l2Val);
            l2 = l2.next;
        }
        currHead = currHead.next;
    }
	return newRoot.next;
};