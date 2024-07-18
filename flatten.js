
var flatten = function(root) {
    if (!root) return;

    const flattenHelper = (node) => {
        if (!node) return null;

        let leftTail = flattenHelper(node.left);
        let rightTail = flattenHelper(node.right);

        let rightSubtree = node.right;

        if (node.left) {

            node.right = node.left;
            node.left = null; 
            leftTail.right = rightSubtree; 
        }

        return rightTail || leftTail || node;
    };

    flattenHelper(root);
};
