// https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/

var reverseList = function(head, prev = null) {
  if (!head) return prev;
  
  let next = head.next;
  head.next = prev;
  
  return reverseList(next, head);
};


// like this
// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10                                             
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null	
//                     }
//                 }
//             }
//         }
//     }
// };
