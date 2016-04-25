$.getJSON(
    "http://www.reddit.com/r/pics.json?jsonp=?",
    function foo(data)
    {
        $.each(
            data.data.children.slice(0, 10),
            function (i, post) {

                var item = $(document.createElement('article'))
                    .append( '<h2>' + post.data.title + '</h2>')
                    .append( '<img src="' + post.data.url +'"/>')
                    .append( '<a href="' + post.data.permalink +'">post.data.permalink</a>')
                    .append( '<p><span class="up"> UPs:' + post.data.ups + '</span><span class="down">  DOWNs:' + post.data.downs +'</span></p>');

                $(item).addClass('item');
                $('#content').append(item);

            }
        )
    }
    )
    .success(function() { console.log("second success"); })
    .error(function() { alert("error"); })
    .complete(function() { console.log("complete"); });