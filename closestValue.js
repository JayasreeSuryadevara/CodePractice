// LeetCode # 270

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var closestValue = function(root, target) {
    console.log(root.val)
    if (!root.left && !root.right) return root.val;
    
    let newTarget = Math.round(target);
    
    if (root.val === newTarget) return root.val;
    
    if (root.left || root.right) {

        if (root.val < newTarget ) {
            if (root.right){
                root = root.right;
                closestValue(root, target);
            } else return root.val;
        } 
        
        if (root.val > newTarget ){
            if (root.left) {
                root = root.left;
                closestValue(root, target);
            } else return root.val;
        } 
    }
    
};

//  [1,null,2]
//  3.428571
