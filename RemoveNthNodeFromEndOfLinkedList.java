class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode prev = null, first = null, second = null;

        first = head;
        second = head;
        
        int i = 0;

        while(i<n) {
            second = second.next;
            i++;
        }

        while(second!= null) {
            prev = first;
            first = first.next;
            second = second.next;
        }
        if(prev == null) {
            ListNode temp = head.next;
            head.next = null;
            return temp;
        }
        prev.next = first.next;

        first.next = null;

        return head;
    }
}




=============================
//The follwoing approach is taken from linked list remove from begenning and the trick is to convertt n to size - n

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {

        //size = 5;

        int size = 0;
        ListNode curr = head;
        while(curr!=null) {
            size++;
            curr = curr.next;
        }

        ListNode newHead = remove(head, size-n, size);
        return newHead;
    }

    public ListNode removeFirst(ListNode head) {

        if(head == null) {
            return null;
        }
        ListNode curr = head;
        head = head.next;
        curr.next = null;
        return head;
    }

    public ListNode remove(ListNode head, int index,  int size) {
        if(index+1 > size) {
            return null;
        }

        if(index == 0 || size == 1) {
            ListNode temp = this.removeFirst(head);
            return temp;
        }

        int count = 0;
        ListNode curr = head;
        ListNode prev = null;

        while(count!=index) {
            prev = curr;
            curr = curr.next;
            count++;
        }

        prev.next = curr.next;
        curr.next = null;
        return head;
    }

}
