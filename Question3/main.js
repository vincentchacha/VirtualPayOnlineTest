/**
 * Question3
 * @author   Vincent Koech <vinukoech@gmail.com>;
 */

/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
 var strWithout3a3b = function(A, B) {
    let rt = "";
        while (0 < A || 0 < B)
        {
   
            // More 'b', append "bba"
            if (A < B)
            {
                if (0 < B--)
                {
                    rt += ('b');
                }
                if (0 < B--)
                {
                    rt += ('b');
                }
                if (0 < A--)
                {
                    rt += ('a');
                }
            }
               
            // More 'a', append "aab"
            else if (B < A)
            {
                if (0 < A--)
                {
                    rt += ('a');
                }
                if (0 < A--)
                {
                    rt += ('a');
                }
                if (0 < B--)
                {
                    rt += ('b');
                }
            }
               
            // Equal number of 'a' and 'b'
            // append "ab"
            else
            {
                if (0 < A--)
                {
                    rt += ('a');
                }
                if (0 < B--)
                {
                    rt += ('b');
                }
            }
        }
        return rt;

};
// Get passed parameters
var arg1 = process.argv.slice(2);
// Split comma separated to get function parameters
var params = arg1[0].split(',');
console.log(strWithout3a3b(params[0],params[1]));