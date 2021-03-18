class Solution:
    def findMedianSortedArrays(self, nums1, nums2) -> float:
        merged_list = sorted(nums1 + nums2)
        list_len = len(merged_list)
        if list_len % 2 == 1:
            return merged_list[int((list_len - 1) / 2)]
        else:
            return (merged_list[int(list_len / 2)] + merged_list[int(list_len / 2) - 1]) / 2