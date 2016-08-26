$(document).ready(function() {
    cats.listAll = function(){
        // Display the list of cats for the user to select from
        if (cats.cats.length != 0){
            for (cat in cats.cats) {
              var c = document.createElement("INPUT");
              c.setAttribute("type", "checkbox");
              c.setAttribute("id","selectCats");
              c.setAttribute("value", cat);
              c.setAttribute("onclick", "catChoiceMade(this)");
              $('#CatsList').append(c);
              $('#CatsList').append(" " + cats.cats[cat].name + "<br>");
            };
        };
    }
    cats.listAll();
   /* cats.display = function() {
        var allCats = $('#AllCats');
        if (cats.cats.length != 0) {
            for (cat in cats.cats) {
                // to create a unique ID , we assign a numet to the image as it's id and concat the same unique number to rest of the id's to make them unique
                var showClickCount =
                    "<div class='lead text-center '>" +
                    "Your Click Count Score is " +
                    "<strong><span id='clickCount" + cat +
                    "'>1</span></strong>";
                var catImage =
                    "<figure id='showCats' class='text-center'>" +
                    "<img id='" + cat +
                    "' class='img-polaroid' src='" + cats.cats[cat]
                    .image +
                    "' onClick='catClicked(this)' alt='cat' >" +
                    "<figcaption> Click " + cats.cats[cat].name +
                    " ! </figcaption></figure></div><hr>";
                allCats.append(showClickCount + catImage);
            }
        };
    };
    cats.display();
    */

});

var cats = {
        "cats": [{
            name: "Pelope",
            image: "img/cat1.jpg",
            count: 0
        }, {
            name: "Chewie",
            image: "img/cat2.jpg",
            count: 0
        }, {
            name: "Sweet",
            image: "img/cat3.jpg",
            count: 0
        }, {
            name: "Chalie",
            image: "img/cat4.jpg",
            count: 0
        }, {
            name: "Brownie",
            image: "img/cat5.jpg",
            count: 0
        }]
    };
function catClicked(e) {
    // the image has been clicked... increase the click count
    var thisCat = e.id;
    var count = $('#clickCount' + thisCat).text();
    var clicks = parseInt(count) + 1;
    $('#clickCount' + thisCat).text(clicks);
};

// display the cat -- it takes the array position of the cat in the array cats
 function displayCat(cat)
 {
    var showClickCount =
        "<div class='lead text-center ' id = 'catNo" + cat + "'>" +
        "Your Click Count Score is " +
        "<strong><span id='clickCount" + cat +
        "'>0</span></strong>";
    var catImage =
        "<figure id='showCats' class='text-center'>" +
        "<img id='" + cat +
        "' class='img-polaroid' src='" + cats.cats[cat]
        .image +
        "' onClick='catClicked(this)' alt='cat' >" +
        "<figcaption> Click " + cats.cats[cat].name +
        " ! </figcaption></figure><hr></div>";
    $('#AllCats').append(showClickCount + catImage);
}

function removeCat(cat)
{
  $('#catNo'+ cat).remove();
}

// appends the cat if selected and removes it if un-selected
function catChoiceMade(e){
   if(e.checked){
    //display the cat
     displayCat(e.value);
   } else {
    // remove the cat
    removeCat(e.value);
   };
}

