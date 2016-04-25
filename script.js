$.getJSON(
    "http://www.reddit.com/r/pics.json?jsonp=?",
    function foo(data)
    {
        //for every entry in the data array, not you must look at the raw json from the api you are using. 
        //Every json stream is different with different elements.
        $.each(
            //get the first 10 children (ie first ten posts)
            data.data.children.slice(0, 10),
            function (i, post) {
                //create a new article for every item
                //for every item get the parts we want and append it to the new article
                var item = $(document.createElement('article'))
                    .append( '<h2>' + post.data.title + '</h2>')
                    .append( '<img src="' + post.data.url +'"/>')
                    .append( '<a href="' + post.data.permalink +'">post.data.permalink</a>')
                    .append( '<p><span class="up"> UPs:' + post.data.ups + '</span><span class="down">  DOWNs:' + post.data.downs +'</span></p>');

                $(item).addClass('item');//add the item class so the css picks it up
                $('#content').append(item);//append the item to the main content

            }
        )
    }
    )
    .success(function() { console.log("second success"); })
    .error(function() { alert("error"); })
    .complete(function() { console.log("complete"); });
