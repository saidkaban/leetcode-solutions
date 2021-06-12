function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    
    let root = new ListNode();
    const result = root;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            root.next = l1;
            l1 = l1.next;
        } else {
            root.next = l2;
            l2 = l2.next;
        }
        root = root.next;
    }
    if (l1) {
        root.next = l1;
    }
    if (l2) {
        root.next = l2;
    }
    return result.next;
};
