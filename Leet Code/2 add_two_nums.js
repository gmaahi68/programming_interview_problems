/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
      this.val = val;
      this.next = null;
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node1 = l1;
    let node2 = l2;
    let sum = "", carry = 0,head;
    while(node1 !== null || node2 !== null){
        console.log(node1);
        console.log(node2);
        if(node1 === null){
            let inter = node2.val + carry;
            if(inter>9){                
                carry = parseInt(inter.toString()[0]);
                inter = parseInt(inter.toString()[1]);
            }else{
                carry = 0
            }
            sum = sum + inter;
            node2 = node2.next;
        }else if(node2 === null){
            debugger;
            let inter = node1.val + carry;
            if(inter>9){                
                carry = parseInt(inter.toString()[0]);
                inter = parseInt(inter.toString()[1]);
            }else{
                carry = 0
            }
            sum = sum + inter;
            node1 = node1.next;
        }else {
            let inter = node1.val + node2.val + carry;
            if(inter>9){                
                carry = parseInt(inter.toString()[0]);
                inter = parseInt(inter.toString()[1]);
            }else{
                carry = 0
            }
            sum = sum + inter;
            node1 = node1.next;
            node2 = node2.next;
        }
    }
    if(carry === 1){
        sum = sum + carry;
    }
    let ans = new ListNode(sum[0]);
    let n= ans;
    for(let i =1;i<sum.length;i++){        
         let link = new ListNode(sum[i]);
         n.next = link;
        n = n.next;        
    }
    return ans;                              
};
let s1 = [1,8]
let s2 = [0]
let h1 = new ListNode(s1[0])
let n1 = h1;
for(let i =1;i<s1.length;i++){        
         let link1 = new ListNode(s1[i]);
         n1.next = link1;
        n1 = n1.next;        
    }

  let h2 = new ListNode(s2[0])
  let n2 = h2
for(let i =1;i<s2.length;i++){        
         let link2 = new ListNode(s2[i]);
         n2.next = link2;
        n2 = n2.next;        
    }  
console.log(printList(h1))
console.log(printList(h2))
console.log(printList(addTwoNumbers(h1, h2)))
function printList(h){
    let node = h, res=[];
    while(node != null){
        res.push(node.val);
        node = node.next;
    }
    return res;
}