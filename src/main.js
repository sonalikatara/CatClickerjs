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

         cats.display = function(){
         var allCats = $('#AllCats');
         if (cats.cats.length !=0 ){
           for (cat in cats.cats)
           {
            // to create a unique ID , we assign a numet to the image as it's id and concat the same unique number to rest of the id's to make them unique
             var showClickCount ="<div class='lead text-center '><hr>Your Click Count Score is <strong><span id='clickCount" + cat + "'>1</span></strong>";
             var catImage = "<figure id='showCats' class='text-center'><img id='"+ cat +"' class='img-polaroid' src='" + cats.cats[cat].image +"' onClick='catClicked(this)' alt='cat' ><figcaption> Click " + cats.cats[cat].name + " ! </figcaption></figure></div>";
             console.log(catImage);
             allCats.append(showClickCount + catImage);
           }
         };
    };
    cats.display();
});

function catClicked(e){
        // the image has been clicked... increase the click count
        var thisCat = e.id;
        var count = $('#clickCount'+thisCat).text();
        var clicks = parseInt(count) + 1;
        $('#clickCount'+thisCat).text(clicks);

    };