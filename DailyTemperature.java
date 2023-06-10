class Node {
    int index;
    int value;
    Node(int index, int value) {
        this.index = index;
        this.value = value;
    }
}

class Solution {

    public int[] dailyTemperatures(int[] temperatures) {
        int[] result = new int[temperatures.length];
    
        Stack<Node> stack = new Stack<>();
    
        for(int i = 0; i< temperatures.length; i++){
            while(stack.size() > 0 && stack.peek().value < temperatures[i]) {
                Node el = stack.pop();
                result[el.index] = i - el.index;
            }
            stack.push(new Node(i, temperatures[i]));
        }
        return result;
        }
}
