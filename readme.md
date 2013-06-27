# LinkList.js

Implements a linklist, which is a simple data structure that supports sequential access (traversing) through a chained list of links.

## LinkList adds the following methods to its prototype:

### Constructor
Creates a new link list
Don't forget to include the new operator or bad things will happen.

    var ll = new LinkList();

### push
Pushes a link onto the tail of the link list.

    ll.push(new Link("Some data you want to store in the link. All JavaScript types are supported."));

### pop
Pops a link off of the tail of the link list and calls a callback function if one is provided.

    ll.pop(function(link){
        // do something here with the link.
    });

### insert
Inserts a link immediately after another link.

    ll.insert(prev, newLink);

### del
Removes a link from the link list.

    ll.del(link);

### traverse
Sequentially visits each link in the link list, starting from the head, and calls a callback function for each visited link if one is provided.

    ll.traverse(function(link){
        // do something here with the link.
    });

### reset
Removes all the links from the link list.

    ll.reset();

## Link, a constructor function for creating Links.

### Constructor
Creates a new Link
Don't forget to include the new operator or bad things will happen.

    var l = new Link('Some data you want to store in the link. All JavaScript types are supported.');