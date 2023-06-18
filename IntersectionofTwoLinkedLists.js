/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let c1 = 0;
    let c2 = 0;

    let curr = headA;

    while(curr) {
        c1++;
        curr = curr.next;
    }

    curr = headB;

    while(curr) {
        c2++;
        curr = curr.next;
    }

    let a = headA;
    let b = headB;

    if(c1 > c2) {
        while(c1!=c2) {
            a = a.next;
            c1--;
        }
    } else if(c2 > c1) {
        while(c1!=c2) {
            b = b.next;
            c2--;
        }
    }

    while(a!=b) {
        a = a.next;
        b = b.next;
    }

    if(a!= null) {
        return b;
    }

    return null;
};
