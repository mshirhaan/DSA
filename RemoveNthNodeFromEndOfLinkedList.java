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
