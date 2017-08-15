public class Solution {
    public boolean judgeCircle(String moves) {
        // left right
        int x = 0;
        // up down
        int y = 0;

        for (int i=0 ; i<moves.length() ; i++){
            if(moves.charAt(i)=='U'){
                y++;
            } else if(moves.charAt(i)=='D'){
                y--;
            } else if (moves.charAt(i)=='L'){
                x--;
            } else if (moves.charAt(i)=='R'){
                x++;
            }
        }; 
        return (x == 0 && y == 0);

        }
    }