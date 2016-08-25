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
             var showClickCount ="<div id = 'showClickCount' class='lead text-center'>Your Click Count Score is <span id='clickCount'>1</span>";

             var catImage = "<figure id='showCats' class='text-center'><img id='catImg' class='img-polaroid' src='" + cats.cats[cat].image +"' onClick='catClicked(this)' alt='cat' ><figcaption> Click " + cats.cats[cat].name + " ! </figcaption></figure></div>";
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


        var count = $(thisCat).prevUntil("spam").text();
        var clicks = parseInt(count) + 1;
        $(thisCat).parent().parent().children('clickCount').text(clicks);

    };