// Model
const model = {
  currentCat: null,
  cats: [
    { name: 'cat1', imgSrc: 'img/cat1.jpg', clickCount: 0 },
    { name: 'cat2', imgSrc: 'img/cat2.jpg', clickCount: 0 },
    { name: 'cat3', imgSrc: 'img/cat3.jpg', clickCount: 0 }
  ]
};

// Octopus
const octopus = {
  init() {
    // Set current cat to first one in the list
    model.currentCat = model.cats[0];
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

  // setter for currentCat
  set currentCat(cat) {
    model.currentCat = cat;
  },

  // increment counter then render
  incrementCounter() {
    model.currentCat.clickCount++;
    catView.render();
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

    // on click, increment cat's counter
    this.catImgEl.addEventListener('click', e => octopus.incrementCounter());

    // render this view (update DOM elements)
    this.render();
  },
  render() {
    // update DOM elements with values from current cat
    const currentCat = octopus.currentCat;
    this.countEl.innerText = currentCat.clickCount;
    this.catNameEl.innerText = currentCat.name;
    this.catImgEl.src = currentCat.imgSrc;
  }
};

const catListView = {
  init() {
    // store DOM elements for later access
    this.catListEl = document.getElementById('cat-list');

    // add listener on select to change current cat and render
    this.catListEl.addEventListener('change', e => {
      const cat = cats.find(cat => cat.name === e.target.value);
      octopus.currentCat = cat;
      catView.render();
    });

    // render this view (update DOM elements)
    this.render();
  },

  render() {
    // get the cats from the octopus
    const cats = octopus.cats;

    // empty the cat list
    this.catListEl.innerHTML = octopus.currentCat.name;

    // loop over cats
    for (const cat of cats) {
      // make new option, set values
      const option = document.createElement('option');
      option.value = cat.name;
      option.innerText = cat.name;
      this.catListEl.appendChild(option);
    }
  }
};


  const adminView = {
    init() {
      // store DOM elements for later access
      this.adminBtn = document.querySelector('.admin-button');
      this.adminArea = document.querySelector('.admin');
      this.saveBtn = document.querySelector('.save');
      this.adminName = document.querySelector('#name');
      this.cancelBtn = document.querySelector('.cancel');
      this.adminImg = document.querySelector('.#imgUrl');
      this.adminCount = document.querySelector('.ad-button');
      // admin click listener
      this.adminBtn.addEventListener('click'( => {this.adminArea.classList.toggle('hidden'))}
      { name: this.adminName.value, imgSrc: 'img/cat1.jpg', clickCount: 0 },
      this.saveBtn.addEventListener('click'( => {this.adminArea.classList.toggle('hidden'))}
      const newCat = {
    this.adminBtn.addEventListener('click'( => {this.adminArea.classList.toggle('hidden'))}
    this.adminBtn.addEventListener('click'( => {this.adminArea.classList.toggle('hidden'))}
    


};
  };
  render() {
    const currentCat = octopus.currentCat;
    this.adminName.value = currentCat.name;
    this.adminImg.value = currentCat.imgSrc;
    this.adminName.value = currentCat.clickCount;
    
  }
};

octopus.init();
