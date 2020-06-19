function ListNode(val, next) { 
    this.val = (val === undefined ? 0 : val) 
    this.next = (next === undefined ? null : next) 
}

var removeNthFromEnd = function(head, n) {
  let size = 0;
  let currNode = head;
  while (currNode.next) {
    size += 1;
    currNode = currNode.next;
  }
  size += 1;

  let beforeIdx = size - n;

  if (beforeIdx === 0) {
    if (head.next) {
      return head.next
    } else {
    return null;
    } 
  }

  let start = head;
  for (let i = 0; i < beforeIdx - 1; i++) {
    start = start.next;
  }

  let nextNode = start.next;
  start.next = nextNode.next;

  return head;
}

//1->2->3->4->5 and n = 2;

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(removeNthFromEnd(node1, 2))
console.log(removeNthFromEnd(node4, 2))
console.log(removeNthFromEnd(node5, 1))
