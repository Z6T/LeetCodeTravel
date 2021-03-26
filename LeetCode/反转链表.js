var reverseList = function(head) {
    if(!head) return null
    let prev = null;
    let cur = head;
    let nxt = head.next;
    while (nxt) {
        cur.next = prev;
        prev = cur;
        cur = nxt;
        nxt = nxt.next;
    }
    cur.next = prev;
    return cur;
};