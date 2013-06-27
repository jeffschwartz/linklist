# LinkList.js

Implements a linklist, which is a simple data structure that supports sequential access (traversing) through a chained list of links.

LinkList is fast. How fast? Faster than using JavaScripts built in Array.

Here's the result of creating a link list of 1,000,000 links when running on the latest release Chrome:

1 Create 1,000,000 Links using LinkedList: 270.543ms

And here's the result of creating an array of 1,000,000 elements when running on the latest release of Chrome:

1 Create 1,000,000 links using Array: 253.301ms

Here's the result of traversing 1,000,000 links in a link list when running on the latest release of Chrome:

1 Iterate 1,000,000 Links using LinkedList: 7.215ms

The above includes calling a callback function for each traversed link.

And here's the result of traversing an array of 1,000,000 elements:

1 Iterate 1,000,000 links using Array: 12.492ms

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

## Please see javascripts/examples.js for examples using the api.

## Please see javascripts/test.js for testing the api.