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


//======================

class Node {
    int index;
    int value;
    Node(int index, int value) {
        this.index = index;
        this.value = value;
    }
}

class Solution {
    public static int[] dailyTemperatures(int[] temps) {
        int n = temps.length;

        Stack<Node> stack = new Stack<>();

        int[] result = new int[temps.length];

        result[n-1] = 0;
        stack.push(new Node(n-1, temps[n-1]));
        
        for(int i = n-2; i>=0; i--) {
            while(stack.size() > 0 && stack.peek().value <= temps[i]) {
                stack.pop();
            }
            if(stack.size() > 0) {
                result[i] = stack.peek().index - i; 
            } else {
                result[i] = 0;
            }
            stack.push(new Node(i, temps[i]));
        }
        return result;
    }
}
