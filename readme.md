# LinkList.js
A small JavaScript library for implementing link lists, which are simple data structures that support sequential access (traversal) through a chained list of links.

So why use link lists at all? I mean, JavaScript already has arrays, right? Well, because sometimes working with link lists are easier and more expressive than when working with arrays. Take iteration, for example. That's something we do a lot, right? Well, here's how it's done using LinkList.js:

    linklist.traverse(function(link){ do something with link.data });

Simple and expressive, yes? Well, I think so, and that's why I wrote this small but very useful library. I was working on some code, lots of code, actually, and I was using lots of arrays, which, when I realized it, weren't semantically expressing what my intention was. So, I set about correcting that by writing LinkList.js. And that's the story, the whole kit, kat and kaboodle, as they say.

If you think you will have to sacrifice speed to gain better semantics using LinkList.js, you won't. In fact, LinkList.js is fast. How fast? Faster than using JavaScript's built in Array for sequential access!

Here's the result of creating a link list of 1,000,000 links when running on the latest release of Chrome:

> Create 1,000,000 Links using LinkedList: 270.543ms

And here's the result of creating an array of 1,000,000 elements when running on the latest release of Chrome:

> Create 1,000,000 links using Array: 253.301ms

Here's the result of traversing 1,000,000 links in a link list when running on the latest release of Chrome:

> Iterate 1,000,000 Links using LinkedList: 7.215ms

The above includes calling a callback function for each traversed link.

And here's the result of traversing an array of 1,000,000 elements on the latest release of Chrome:

> Iterate 1,000,000 links using Array: 12.492ms

## LinkList API

### Constructor
Creates a new link list. Don't forget to include the new operator or bad things will happen.

    var ll = new LinkList();

### push
Pushes a link onto the tail of the link list.

    ll.push(new Link("Some data you want to store in the link. All JavaScript types are supported."));

### pop
Pops a link off of the tail of the link list and calls a callback function if one is provided.

    ll.pop(function(link){
        // do something here with the link.
    });

### appendFrom
Creates links from array elements or hash properties and appends them to the link list.

    ll.appendFrom([1,2,3,4,5]);

    ll.appendFrom({prop1: 1, prop2: 2, prop3: 3, prop4: 4, prop5: 5})

### arrayFrom
Creates an array from the link list, pushing the data from each link onto the array.

    var a = ll.arrayFrom();

### insert
Inserts a link immediately after another link.

    ll.insert(prev, newLink);

### del
Removes a link from the link list.

    ll.del(link);

### traverse
Sequentially visits each link in the link list, starting from the head, and calls a callback function for each visited link.

    ll.traverse(function(link){
        // do something here with the link.
    });

### reset
Removes all the links from the link list.

    ll.reset();

## Link API

### Constructor
Creates a new Link. Don't forget to include the new operator or bad things will happen.

    var l = new Link('Some data you want to store in the link. All JavaScript types are supported.');

## Examples And Tests
Please see javascripts/examples.js for examples using the api.

Please see javascripts/test.js for testing the api as well as for benchmarking the api against JavaScript's built in Array.

## What's New
v0.0.2, released on 2012/06/28 - Added instance methods appendFrom and arrayFrom to LinkList. See above for details.

## Copyright And License
Copyright 2013 Jeffrey Schwartz

LinkList.js is available for use under the [MIT software license.](https://github.com/jeffschwartz/linklist/blob/master/LICENSE)