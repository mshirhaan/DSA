

public class Test {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();

        list.addLast("A");
        list.addLast("B");
        list.addLast("C");
        list.addLast("D");
        list.addLast("E");
        list.addLast("F");
        list.addLast("G");
        list.addLast("H");

        Stack<Node> nodes = new Stack<>();
        
        Node curr = list.head;

        while(curr != null) {
            nodes.push(curr);
            curr = curr.next;
        }
        
        System.out.println(nodes);

        int i = 0;
        int j = nodes.size()-1;

        boolean button = true;

        Node temp = null;

        while(i<j) {
            if(button == true) {
                nodes.get(i).next = nodes.get(j);
                i++;
                temp = nodes.get(i);
            } else {
                nodes.get(j).next = nodes.get(i);
                j--;
                temp = nodes.get(j);
            }

            button = !button;
        }
        temp.next = null;

    }

}




=====================

