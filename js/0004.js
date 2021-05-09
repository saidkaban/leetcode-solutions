var findMedianSortedArrays = function(nums1, nums2) {
    let mergedList = nums1.concat(nums2)
    mergedList = mergedList.sort((a, b) => a - b)
    listLen = mergedList.length
    if (listLen % 2 === 1) {
        return mergedList[(listLen - 1) / 2]
    } else {
        return (mergedList[listLen / 2] + mergedList[(listLen / 2) - 1]) / 2
    }  
};