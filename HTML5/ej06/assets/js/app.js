(function() {
    var tweet = {
        id: "4",
        text: "Woohooo!",
        author: "Periko de los palotes",
        createdAt: "Mon Sep 25 01:22:32 +0000 2012"
    };

    APP.DB.insert(tweet);
    APP.DB.get(tweet.id, function(datos) {
        console.log(datos);
    });
})();
