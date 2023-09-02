Public int [][] floywarshell() {
Int shotestPath[][] = new int [n] [n];
For (int candidate=0; candidate<n ; candidate++) {
 
For (int row = 0; row<n; row++) {

If(row == candidate) 
Continue;

For(int column =0; column<n; column++){



shotestPath [row][column] =  Math.min (shotestPath [row][column],  shotestPath[row][candidate] + shotestPath[column][candidate]);

}

}

} 
Return shotestPath;
}
