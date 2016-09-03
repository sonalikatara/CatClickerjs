/* ====== Model ===== */
var model = {
        currentCat: null,
        cats: [{
            name: "Pelope",
            image: "img/cat1.jpg",
            clickCount: 0
        }, {
            name: "Chewie",
            image: "img/cat2.jpg",
            clickCount: 0
        }, {
            name: "Sweet",
            image: "img/cat3.jpg",
            clickCount: 0
        }, {
            name: "Chalie",
            image: "img/cat4.jpg",
            clickCount: 0
        }, {
            name: "Brownie",
            image: "img/cat5.jpg",
            clickCount: 0
        }]
    };

/* ====== Controler ======= */
 var Controler = {
    init: function() {
        // set the first cat as the current cat
        model.currentCat = model.cats[0];

        // initialze the view
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    incrementClickCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
 };

/* ======= View ======= */

var catView = {
    init : function() {
      // store pointers to DOM elements for access later
      this.catElem = document.getElementById('cat');
      this.catNamElem = document.getElementById('cat-name');
      this.catImageElem = document.getElementById('cat-img');
      this.countElem = document.getElementById('cat-count');

      // Add the event functions. On click, increment the current cat's counter
      this.catImageElem.addEventListener('click', function(){
            Controler.incrementClickCounter();
      });

      // render this view (update the DOM elements with the right values)
      this.render();
    },

    render: function() {
       // update the DOM elements with the values of the current cat
       var currentCat  = Controler.getCurrentCat();
       this.countElem.textContent  = currentCat.clickCount;
       this.catNamElem.textContent = currentCat.name;
       this.catImageElem.src = currentCat.image;
    }
};

var catListView = {
    // store the DOM element for easy access later
    init : function() {
    // store the DOM element for easy access later
    this.catListElem = document.getElementById('cat-list');

    // render this view (update the DOM elements with the right values)
    this.render();
    },

    render: function() {
        var cat, elem, i;
        // get the cats to render from the Controller
        var cats = Controler.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for(i=0;i<cats.length;i++){
            cat = cats[i];

            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
           //  of the cat variable to the click event function)

            elem.addEventListener('click',(function(catCopy){
              return function() {
                  Controler.setCurrentCat(catCopy);
                  catView.render();
                };
            })(cat));

             this.catListElem.appendChild(elem);
        }
    }
};

Controler.init();

