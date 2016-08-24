$(document).ready(function(){
    var cats = {
         "cats" :[ {
                name : "Pelope",
                image : "img/cat1.jpg",
                count : 0
         },
         {
                name : "Chewie",
                image : "img/cat2.jpg",
                count : 0
         }
         ]
    };

        $('#catImg').click(function(e){
        // the image has been clicked... increase the click count
        var count = $('#clickCount').text();
        count++;
        $('#clickCount').text(count);
        //alert('clickCount ' + count);
    });
});
