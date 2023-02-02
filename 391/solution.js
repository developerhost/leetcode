// https://leetcode.com/problems/is-subsequence/solutions/1811508/python-javascript-easy-solution-with-very-clear-explanation/

var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while( j < t.length) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;        
    }
    return i === s.length ? true: false;
};
