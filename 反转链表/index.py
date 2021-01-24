/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function isContaion(r1,r2){
    
}
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if (!pRoot1 | | !pRoot2) return False
    if (isContain(pRoot1, pROot2)) return true;
    return HasSubtree(pRoot1.left,pRoot2)||HasSubtree(pRoot2.right,pRoot2)
}

function isContain(r1, r2){
    if (r2 == null) return true
    if (r1 == null) return false;
    return r1.val == r2.val && isContain(r1.left,r2.left) && isContain(r1.right,r2.right)

}