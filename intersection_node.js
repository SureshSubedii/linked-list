var getIntersectionNode = function(headA, headB) {
    let result = {}
    let firstHead = headA
    let secondHead = headB
    while(firstHead){
        if(!result[firstHead.val])
         result[firstHead.val]= firstHead

        firstHead = firstHead.next
    }
        while(secondHead){
            if(result[secondHead.val] && result[secondHead.val] == secondHead ){
                return  secondHead

            }
        secondHead = secondHead.next
    }

    
};