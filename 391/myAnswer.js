/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // sを１文字づつ取り出す
    let index = [];
    let sArray = s.split("");

    // tに含まれているか判定
    for(let i = 0; i < sArray.length; i++) {
        index.push(t.indexOf(sArray[i]));
    }

    // インデックスが順番通りか判定
    for(let i = 0; i < index.length; i++) {
        if(index[i+1]) {
            if(index[i] >= index[i+1]) {
                return false
            }
            
        }
    }
    console.log(index)
    if(index[0] == -1) {
        return false
    }
    return true
};
