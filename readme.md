# LinkList.js

Implements a linklist, which is a simple data structure that supports sequential access (traversing) through a chained list of links.

## Create a linklist
You create a linklist by calling the LinkList constructor:

    var ll = new LinkList();

## LinkList, a constructor function for creating link lists, adds the following methods to its prototype:

### push
Pushes a link onto the tail of the link list.

    ll.push(new Link("Some data you want to store in the link. All JavaScript types are supported."));

### pop
Pops a link off of the tail of the link list.

    ll.pop(function(link){
        // do something here with the link.
    });

### insert
Inserts a link immediately after another link.

    ll.insert(prev, newLink);

### del
Removes a link from the link list.

    ll.del(link);

### traverse.
Sequentially visits each link in the link list, starting from the head, and calls a callback function for each visited link if one is provided.

    ll.traverse(function(link){
        // do something here with the link.
    })

## Link, a constructor function for creating Links.
You create a link by calling new Link. Don't forget to include the new operator or bad things will happen.

    var l = new Link('Some data you want to store in the link. All JavaScript types are supported.')