(function(LinkListModule){

    "use strict";

    var llm = LinkListModule;

    /**
     * Link List Usage Examples
     */

     // Traverse a list and print data to the console
     function traverseList(linkList, bannerText){
        var bLine = "********************************************************";
        if(bannerText){
            console.log(bLine);
            console.log(bannerText);
            console.log(bLine);
        }
        linkList.traverse(function(link){
            console.log(link.data);
        });
     }

    // Create a link list.
    var linkList = new llm.LinkList();
    // Create some links.
    for(var i = 0; i < 20; i++){
        linkList.push(new llm.Link(i));
    }
    // Traverse the links in the link list.
    traverseList(linkList, "Created List With 20 Links");
    // Pop the tail link off the link list.
    linkList.pop(function(link){
        console.log("*** link with data = " + link.data + " has been removed. ***");
    });
    // Traverse the links in the link list. Link with data = 19 has been removed.
    traverseList(linkList, "Poped Last Link (It's Data = 19) Off The List");
    // Insert a link with data = 5.1.
    var link5;
    linkList.traverse(function(link){
        if(link.data === 5){
            link5 = link;
            return true;
        }
    });
    if(link5){
        linkList.insert(link5, new llm.Link(5.1));
        traverseList(linkList, "Inserted Link With Data = 5.1 Into The List");
    }
    // Delete the link we just inserted
    var linkToDelete;
    linkList.traverse(function(link){
        if(link.data === 5.1){
            linkToDelete = link;
            return true;
        }
    });
    if(linkToDelete){
        linkList.del(linkToDelete);
        // Traverse the links in the list. Link with data = 5.1 has been removed.
        traverseList(linkList, "Deleted Link With Data = 5.1 From The List");
    }
    // Reset the list.
    linkList.reset();

}(window.LinkListModule));