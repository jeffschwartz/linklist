//     LinkList.js 0.0.2

//     (c) 2013 Jeffrey Schwartz
//     LinkList may be freely distributed under the MIT license.

(function(){

    "use strict";

    // Create our module namespace.
    var LinkListModule = window.LinkListModule = {};

    /**
     * LinkList Implementation
     */

    /**
     * Constructor - creates a new Link. Don't forget to call with 'new' or bad things will happen.
     * @param data - data to store in the link. All JavaScript types are supported.
     */
    var Link = LinkListModule.Link = function Link(data){
        this.next = this.previous = null;
        this.data = data;
    };

    // A LinkList constructor function.
    /**
     * Constructor - creates a new link list. Don't forget to call with 'new' or bad things will happen.
     */
    var LinkList = LinkListModule.LinkList = function LinkList(){
        this.head = this.tail = null;
        this.count = 0;
    };
    // Assist garbage collection by removing previous and next links.
    LinkList.cleanLink = function cleanLink(link){
        link.previous = link.next = null;
    };

    /**
     * reset - removes all links from the list.
     */
    LinkList.prototype.reset = function reset(){
        var tail = this.tail,
            previous;
        while(tail){
            previous = tail.previous;
            LinkListModule.LinkList.cleanLink(tail);
            tail = previous;
        }
        this.head = this.tail = null;
    };

    /**
     * push - adds a link to the tail of the list.
     * @param link - required. A link to be added to the tail of a list.
     */
    LinkList.prototype.push = function push(link){
        if(arguments.length === 0 || !(link instanceof Link))
            throw new Error("LinkList::push missing 'link' param");
        if(!this.head) this.head = link;
        // Set link link.previous to tail.
        link.previous = this.tail;
        link.next = null;
        // Set tail.next to link.
        if(this.tail) this.tail.next = link;
        // Set tail to link.
        this.tail = link;
        return this;
    };

    /**
     * pop - removes a liknk from the tail of the list.
     * @param callback - optional. A function to be called passing the link that was popped as the parameter.
     */
    LinkList.prototype.pop = function pop(callback){
        var t = this.tail;
        this.tail = this.tail.previous;
        if(this.tail) this.tail.next = null;
        if(!t.previous) this.head = null;
        LinkListModule.LinkList.cleanLink(t);
        if(callback) callback(t);
    };

    /**
     * insert - if prev is supplied link is inserted after prev otherwise link is inserted as the new head.
     * @param prev - optional. If missing it is assumed that
     * newLink is to be inserted as head.
     * @param newLink - required. If missing throws error.
     */
    LinkList.prototype.insert = function insert(prev, newLink){
        var next;
        if(arguments.length === 0 || !(newLink instanceof Link))
            throw new Error("LinkList::inset missing 'newLink' param");
        if (prev) {
            next = prev.next;
            newLink.previous = prev;
            prev.next = newLink;
            if(next){
                newLink.next = next;
            }else{
                newLink.next = null;
                this.tail = newLink;
            }
        }else{
            next = this.head;
            if(next){
                this.head = newLink;
                newLink.next = next;
                next.previous = newLink;
            }else{
                this.head = this.tail = newLink;
            }
        }
    };

    /**
     * del - deletes a link from the list.
     * @param link - required. A link to be removed from the list.
     */
    LinkList.prototype.del = function del(link){
        if(arguments.length === 0 || !(link instanceof Link))
            throw new Error("Link::del missing 'link' param");
        var prev = link.previous,
            next = link.next;
        if(prev) prev.next = link.next;
        if(next) next.prev = link.previous;
        if(!prev) this.head = next;
        if(!next) this.tail = prev;
        LinkListModule.LinkList.cleanLink(link);
    };

    /**
     * traverse - traverses a list.
     * @param callback - called with link as a parameter.
     */
    LinkList.prototype.traverse = function traverse(callback){
        var nextLink = this.head;
        while(nextLink){
            // Breakout of the loop if the callback returns true.
            if(callback(nextLink)) break;
            nextLink = nextLink.next;
        }
    };

}());