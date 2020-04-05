
class TreeNode{
    constructor (val){
        this.val = val;
        this.left = this.right = null;
    }
}

function convertArrayToTree(arr){
    let treeNode = new TreeNode(null);    
    treeNode = insertNode(arr, treeNode, 0);
    return treeNode;
}
function createBST(arr){
    let parent = null;
    for(let i = 0;i<arr.length;i++){
        parent = insertNodeToBST(parent, arr[i]);
    }
    return parent;
}
function insertNodeToBST(root, newVal){
    if(root){
        if(root.val){
            if(root.val > newVal){                
                root.left = insertNodeToBST(root.left, newVal);
            }else{
                root.right = insertNodeToBST(root.right, newVal);
            }
        }else{
            root.val = newVal
        }
    }else{
        root = new TreeNode(newVal);
    }
    return root;
    // if(root && root.val){
    //     if(root.val > newVal){
    //         if(root.left){
    //             insertNodeToBST(root.left, newVal);
    //         }else{
    //             root.left = new TreeNode(newVal);
    //         }
    //     }else{
    //         if(root.right){
    //             insertNodeToBST(root.right, newVal);
    //         }else{
    //             root.right = new TreeNode(newVal);
    //         }
    //     }
    // }else{
    //     root.val = newVal;
    // }
}

function insertNode(arr,parent, i){
    let treeNode = new TreeNode(null);
    if(i<arr.length){
        treeNode.val = arr[i];
        treeNode.left = insertNode(arr,treeNode, 2*i+1);
        treeNode.right = insertNode(arr,treeNode, 2*i+2);
        return treeNode;
    }else{
        return null;
    }
}
    

function printPreOrder(treeNode){
    if(treeNode){
        console.log(treeNode.val);
        printPreOrder(treeNode.left);
        printPreOrder(treeNode.right);
    }        
}
function printInOrder(treeNode){
    if(treeNode){
        printInOrder(treeNode.left);
        console.log(treeNode.val);
        printInOrder(treeNode.right);
    }        
}
function printPostOrder(treeNode){
    if(treeNode){
        printPostOrder(treeNode.left);
        printPostOrder(treeNode.right);
        console.log(treeNode.val);
    }        
}

// let tree = convertArrayToTree([1,2,3,4,5,6]);
// printPreOrder(tree);
let tree = createBST([8,9,1,2,13,4,5,6]);
printInOrder(tree);
