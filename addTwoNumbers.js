// You are given two non - empty linked lists representing two non - negative 
// integers.The digits are stored in reverse order and each of their nodes 
// contain a single digit.Add the two numbers and
// return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the 
// number 0 itself.

// Example:

// Input: (2 - > 4 - > 3) + (5 - > 6 - > 4)
// Output: 7 - > 0 - > 8
// Explanation: 342 + 465 = 807.

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //iterate through both linked list
 //Assign a carryover as a variable
 //Add the values and carryover
 //Take a new carryover for the next iteration

const addTwoNumbers = function(list1, list2) {
    let newList = new ListNode(0);
    let currNode = newList;
    let carryOver = 0;

    while (list1 || list2) {
        let x = list1 ? list1.val : 0;
        let y = list2 ? list2.val : 0;

        let sum = x + y + carryOver;

        carryOver = Math.floor(sum / 10);
        currNode.next = new ListNode(sum % 10);
        currNode = currNode.next;

        if (list1) list1 = list1.next;
        if (list2) list2 = list2.next;
    }

    if (carryOver) {
        currNode.next = new ListNode(carryOver);
    }
    return newList.next;
}