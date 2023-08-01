class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode res = new ListNode(0);
        ListNode temp = res;

        while(list1!=null && list2!=null){
            if(list1.val <= list2.val){
                res.next = new ListNode(list1.val);
                res = res.next;
                list1 = list1.next;
            }
            else{
                res.next = new ListNode(list2.val);
                res = res.next;
                list2 = list2.next;
            }
        }

        while(list1!=null){
            res.next = new ListNode(list1.val);
            res = res.next;
            list1=list1.next;
        }
        while(list2!=null){
            res.next = new ListNode(list2.val);
            list2 = list2.val;
        }
        return temp.next;
    }
}