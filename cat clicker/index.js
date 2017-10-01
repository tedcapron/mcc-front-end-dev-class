alert("select a challenger with the drop down menu . click on the bell to get it to ring .  click on your favorite to make it the champion");

document.getElementById("bell").addEventListener("click", ringBell);

function ringBell() {
  dings = document.getElementById("ding");
  dings.play();
}

function meow() {
  meows = document.getElementById("meow");
  meows.play();

}

function punch() {
  punches = document.getElementById("punch");
  punches.play();

}
function cheer() {
  cheers = document.getElementById("cheer");
  cheers.play();

}
var c = 1

alert("unlike life you get to choose the winners here. click on your choice for best cat. pick more from the drop down menu ")

// Model
const model = {
  currentCat: null,
  currentCat2: null,
  cats: [{
      name: 'Impaler',
      imgSrc: 'img/cat1.jpg',
      clickCount: 0
    },
    {
      name: 'Killa',
      imgSrc: 'img/cat2.jpg',
      clickCount: 0
    },
    {
      name: 'Slasher',
      imgSrc: 'img/cat4.jpg',
      clickCount: 0
    },
    {
      name: 'Basher',
      imgSrc: 'img/cat5.jpg',
      clickCount: 0
    },
    {
      name: 'fury',
      imgSrc: 'img/cat6.jpg',
      clickCount: 0
    },
    {
      name: 'Warlock',
      imgSrc: 'img/cat7.jpg',
      clickCount: 0
    },
    {
      name: 'Slayer',
      imgSrc: 'img/cat8.jpg',
      clickCount: 0
    },
    {
      name: 'Crusher',
      imgSrc: 'img/cat9.jpg',
      clickCount: 0
    },
    {
      name: 'Bruiser',
      imgSrc: 'img/cat10.jpg',
      clickCount: 0
    },
    {
      name: 'spike',
      imgSrc: 'img/cat11.jpg',
      clickCount: 0
    },
    {
      name: 'Venom',
      imgSrc: 'img/cat12.jpg',
      clickCount: 0
    }



  ]
};

// Octopus
const octopus = {
  init() {
    // Set current cat to first one in the list
    model.currentCat = model.cats[0];
    model.currentCat2 = model.cats[1];

    champion = model.cats[0];
    catListView.init();
    catView.init();
    adminView.init();
  },

  // getter for model.cats
  get cats() {
    return model.cats;
  },

  // getter for model.currentCat
  get currentCat() {
    return model.currentCat;
  },
  get currentCat2() {
    return model.currentCat2;
  },
  // setter for currentCat
  set currentCat(cat) {
    model.currentCat = cat;
  },
  set currentCat2(cat) {
    model.currentCat = cat;
  },
  // increment counter then render
  incrementCounter() {
    model.currentCat.clickCount++;
    catView.render();
    meow();
    ringBell();
    document.getElementById('boxer2').src = 'img/gloves.jpg'



  },
  incrementCounter2() {
    model.currentCat2.clickCount++;
    model.currentCat2 = model.currentCat;
    catView.render();
    ringBell();
    meow();
    document.getElementById('boxer2').src = 'img/winner.jpg'


  }
};

// View(s)
const catView = {
  init() {
    // store pointers to DOM elements for later access
    this.catEl = document.querySelector('.cat');
    this.catNameEl = document.querySelector('.cat-name');
    this.catImgEl = document.querySelector('.cat-img');
    this.countEl = document.querySelector('.cat-count');
    this.cat2ImgEl = document.querySelector('.cat2-img');

    // on click, increment cat's counter
    this.catImgEl.addEventListener('click', e => octopus.incrementCounter2());
    this.cat2ImgEl.addEventListener('click', e => octopus.incrementCounter());

    // render this view (update DOM elements)
    this.render();
  },
  render() {
    // update DOM elements with values from current cat
    const currentCat = octopus.currentCat;
    const currentCat2 = octopus.currentCat2;
    this.countEl.innerText = currentCat.clickCount;
    this.catNameEl.innerText = currentCat.name;
    this.catNameEl.innerText = currentCat2.name;

    this.catImgEl.src = currentCat.imgSrc;
    this.cat2ImgEl.src = currentCat2.imgSrc;

  }
};

const catListView = {
  init() {
    // store DOM elements for later access
    this.catListEl = document.getElementById('cat-list');

    // get the cats from the octopus
    this.cats = octopus.cats;

    // add listener on select to change current cat and render
    this.catListEl.addEventListener('change', e => {
      const cat = this.cats.find(cat => cat.name === e.target.value);
      octopus.currentCat = cat;
      catView.render();
      punch();
      
    });

    // render this view (update DOM elements)
    this.render();
  },

  render() {
    // get the cats from the octopus
    this.cats = octopus.cats;

    // empty the cat list
    this.catListEl.innerHTML = octopus.currentCat.name;

    // loop over cats
    for (const cat of this.cats) {
      // make new option, set values
      const option = document.createElement('option');
      option.value = cat.name;
      option.innerText = cat.name;
      this.catListEl.appendChild(option);
    }
  }
};
cheer();
// premium pro version only!
const adminView = {
  init() {
    // store DOM elements for later access
    const adminBtn = document.querySelector('.admin-button');
  },
  render() {}
};

octopus.init();