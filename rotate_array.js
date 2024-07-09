var rotate = function(nums, k) {
    let length = nums.length
    k = k % length
    let result = nums.splice(length - k, k)
    nums.splice(0, 0, ...result);
    
};



//With O(1) space complexity

// var rotate = function(nums, k) {
//     let length = nums.length
//     k = k % length

//     reverse(nums,0, length - 1)
//     reverse(nums, 0, k - 1)
//     reverse(nums, k , length - 1)
    
// };
// const reverse = (arr, start, end)=>{
//     while(start < end){
//         let temp = arr[end]
//         arr[end] = arr[start]
//         arr[start] = temp
//         start ++
//         end --
//     }

// }