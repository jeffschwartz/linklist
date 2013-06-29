 (function(LinkListModule){

    "use strict";

    var llm = LinkListModule;

    /**
     * Unit Tests
     */

    // helper
    function showTest(description){
        var bLine = "***************************************************************************";
        var len = bLine.length - 2; // doesn't include leading and trailing '*' characters.
        var str1 = Array(Math.floor((len - description.length) / 2)).join(" ") + description;
        var str2 = Array(len - str1.length + 1).join(" ");
        console.log("");
        console.log(bLine);
        console.log("*"+str1+str2+"*");
        console.log(bLine);
    }

    // some vars
    var ll = new llm.LinkList();
    var ld1 = "This is a test 1";
    var ld2 = "This is a test 2";
    var l1 = new llm.Link(ld1);
    var l2 = new llm.Link(ld2);

    showTest("P u s h  2  I n v a l i d  L i n k s  T e s t");
    var catches = 0;
    try{
        ll.push();
    }catch(e){
        catches++;
    }
    try{
       ll.push("This is a test");
    }catch(e){
        catches++;
   }
   console.log("Exceptions caught = 2 = " + (catches === 2));

    showTest("P u s h  1  L i n k  T e s t");
    ll.push(l1);
    console.log("ll.head = ll.tail =", ll.head === ll.tail);
    console.log("l1.previous = null = ", l1.previous === null);
    console.log("l1.next = null = ", l1.next === null);

    showTest("P o p  T e s t");
    ll.pop();
    console.log("ll.head = null =", ll.head === null);
    console.log("ll.tail = null =", ll.tail === null);

    showTest("P u s h  2  L i n k s  T e s t");
    ll.push(l1);
    ll.push(l2);
    console.log("ll.head = l1 = ", ll.head === l1);
    console.log("ll.tail = l2 = ", ll.tail === l2);
    console.log("l1.previous = null = ", l1.previous === null);
    console.log("li.next = l2 = ", l1.next === l2);
    console.log("l2.previous = l1 = ", l2.previous === l1);
    console.log("l2.next = null = ", l2.next === null);

    showTest("P o p  T e s t");
    ll.pop();
    console.log("ll.head = l1 = ", ll.head === l1);
    console.log("ll.tail = l1 = ", ll.tail === l1);
    console.log("l1.previous = null = ", l1.previous === null);
    console.log("li.next = null = ", l1.next === null);

    showTest("P o p  T e s t");
    ll.pop();
    console.log("ll.head = null =", ll.head === null);
    console.log("ll.tail = null =", ll.tail === null);

    showTest("P u s h  2  L i n k s  &  T r a v e r s e  T e s t");
    ll.push(l1);
    ll.push(l2);
    var traversed = [];
    ll.traverse(function(link){
        traversed.push(link);
    });
    console.log("Traversed 2 links = " + (traversed.length === 2));
    console.log("Traversed l1 first = " + (traversed[0] === l1));
    console.log("Traversed l2 next = " + (traversed[1] === l2));

    ll.reset();

    showTest("P u s h  1  L i n k  &  I n s e r t  1  L i n k  T e s t");
    ll.push(l1);
    ll.insert(l1, l2);
    console.log("ll.head = l1 = ", ll.head === l1);
    console.log("ll.tail = l2 = ", ll.tail === l2);
    console.log("l1.previous = null = ", l1.previous === null);
    console.log("li.next = l2 = ", l1.next === l2);
    console.log("l2.previous = l1 = ", l2.previous === l1);
    console.log("l2.next = null = ", l2.next === null);
    traversed = [];
    ll.traverse(function(link){
        traversed.push(link);
    });
    console.log("Traversed 2 links = " + (traversed.length === 2));
    console.log("Traversed l1 first = " + (traversed[0] === l1));
    console.log("Traversed l2 next = " + (traversed[1] === l2));

    showTest("D e l e t e  L i n k  T e s t");
    ll.del(l2);
    console.log("ll.head = l1 = ", ll.head === l1);
    console.log("ll.tail = l1 = ", ll.tail === l1);
    console.log("l1.previous = null = ", l1.previous === null);
    console.log("li.next = null = ", l1.next === null);

    showTest("D e l e t e  L i n k  T e s t");
    ll.del(l1);
    console.log("ll.head = null = ", ll.head === null);
    console.log("ll.tail = null = ", ll.tail === null);

    showTest("A p p e n d  F r o m  A r r a y  T e s t");
    var a = [];
    var i;
    for(i = 0; i < 10; i++){
        a.push(i);
    }
    ll.appendFrom(a);
    i = 0;
    ll.traverse(function(link){
        i++;
    });
    console.log("ll.appendFrom appended 10 links from array = " + (i === 10));

    showTest("A p p e n d  F r o m  H a s h  T e s t");
    ll.reset();
    var hash = {prop1: 1, prop2: 2, prop3: 3, prop4: 4, prop5: 5};
    ll.appendFrom(hash);
    i = 0;
    ll.traverse(function(link){
        i++;
    });
    console.log("ll.appendFrom appended 5 links from hash = " + (i === 5));

    showTest("A r r a y  F r o m  T e s t");
    a = ll.arrayFrom();
    console.log("ll.arrayFrom returned an array with 5 elements = " + (a.length === 5));

    showTest("T i m e  1 , 0 0 0 , 0 0 0  W i t h  A r r a y  T e s t");
    var timerName = "Create 1,000,000 links using Array";
    console.time(timerName);
    a.length = 0;
    var el;
    for(i = 0; i < 1000000; i++){
        a.push(new llm.Link(ld1));
    }
    console.timeEnd(timerName);
    timerName = "Iterate 1,000,000 links using Array";
    function simulateTraverse(callback){
        for(i = 0; i < 1000000; i++){
            callback(a[i]);
        }
    }
    console.time(timerName);
    simulateTraverse(function(link){
        el = link;
    });
    console.timeEnd(timerName);
    a.length = 0;

    showTest("T i m e  1 , 0 0 0 , 0 0 0  W i t h  L i n k e d  L i s t  T e s t");
    timerName = "Create 1,000,000 Links using LinkedList";
    console.time(timerName);
    ll = new llm.LinkList();
    for(i = 0; i < 1000000; i++){
        ll.push(new llm.Link(ld1));
    }
    console.timeEnd(timerName);
    timerName = "Iterate 1,000,000 Links using LinkedList";
    console.time(timerName);
    ll.traverse(function(link){
        el = link;
    });
    console.timeEnd(timerName);
    ll.reset();

}(window.LinkListModule));