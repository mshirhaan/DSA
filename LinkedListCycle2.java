


public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(fast!=null && fast.next!=null) {
            
            slow = slow.next;
            fast = fast.next.next;
            if(slow==fast) {
                break;
            }
        }

        if(fast!=null && fast.next!=null) {
            slow = head;
            while(slow!=fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        } else {
            return null;
        }
    }
}
