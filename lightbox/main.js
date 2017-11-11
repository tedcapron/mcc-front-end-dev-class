console.log('js loaded');
var io = 1;
let a;
var pictureIndexNumber = 0;///current picture index number////
var pic;
var count = model.pictures.length;
var view = [];
var octopus = [];
octopus.push(...model.pictures);
view.push(...octopus);

thumbMaker();
picSelect();
modalControls();
mySearch();

function test(t) {
  console.log('testing...' + t);
};

//////////creates wrapper div and thumbs////////
function thumbMaker() {
  myDiv = document.createElement("div");
  document.body.appendChild(myDiv);
  myDiv.className = "wrapper";
  for (var x = 0; x < view.length; x++) {
    const link = view[x].src;
    pic = document.createElement("a");
    pic.className = "thumbs";
    myDiv.appendChild(pic);
    pic.setAttribute("id", `alt${x}`);
    document.getElementById(`alt${x}`).innerText = octopus[x].story;
    const path = view[x].thumbsrc;
    pic.style.backgroundImage = `url(${path})`;
    pic.setAttribute("href", `${link}`);

  };
};



////////thumb selector//////
function picSelect(e) {
  for (let z = 0; z < count; z = z + 1) {
    // test(z);
    clk = document.getElementById(`alt${z}`).addEventListener('click', function (e) {
      e.preventDefault();
      var x = e.target.href;
      pictureIndexNumber = urlToNumber(x)-1;
      modview(x);
    });
  };
};

/////extracts picture number//////
function urlToNumber(q) {
  let x = String(q);
  let y = x.slice(-6);
  let z = y.slice(1, 2);
  let p = z.trim;
  let d = Number(z);
  return d;
  ///end//
};
////////////////////////////////my search//////////////////////
function mySearch() {
  document.addEventListener('keyup', function () {
    searchResult = document.getElementById('search').value;
    var x = 0;
    onOff = 1
    for (x in octopus) {
      var plural=searchResult.concat('s');
      plural=plural.toLowerCase();
      var story = octopus[x].story;
      story=story.toLowerCase();
      var altText = octopus[x].alt;
      altText=altText.toLowerCase();
      var storyArray = story.split(' ');
      var altTextArray = altText.split(' ');
      var firstLetter = searchResult.charCodeAt(0);

      var image = document.getElementById(`alt${x}`);
      var c = 0;
      for (c in storyArray) {
        if (storyArray.includes(searchResult) || searchResult == '') {
          image.setAttribute("class", "thumbs");
        } else if (altTextArray.includes(searchResult)) {
          image.setAttribute("class", "thumbs");
      } else if (altTextArray.includes(plural)) {
        image.setAttribute("class", "thumbs");
      }
      else if (storyArray.includes(plural)) {
        image.setAttribute("class", "thumbs");
      }
          
        else {
          image.setAttribute("class", "invis");
          onOff = 0

        };
      };
    };
  })

};


/////modal viewer/////
function modview(path) {
  console.log('modview');
  const md = document.getElementById("modal");
  md.style.backgroundImage = `url(${path})`;
  md.setAttribute("class", "modalView");
  document.getElementById("modal").src = octopus[pictureIndexNumber].src;
  document.getElementById("story").innerText = octopus[pictureIndexNumber].story;
  unhide()
};

///////modal unhider//////
function unhide() {
  if (io = 1) {
    console.log('unhide');
    var bg = document.getElementById('bkg-hidden');
    if (bg != null) {
      bg.setAttribute("id", "bkg");
    };
  };
  io = 0;

};

///////////////////  modal key contols  ////////////

document.onkeydown = checkKey;

function checkKey(ke) {
  ke = window.event;
  if (ke.keyCode == '37') {
    goback();
  } else if (ke.keyCode == '39') {
    goforward();
  };
};
//////////// modal onscreen controls ////////
function modalControls(a) {
  console.log('modalControls');
  io = 0;
  setTimeout(function () {
    document.addEventListener('ontouchstart', modclose());
    document.addEventListener('click', function () {
      e = event.target.id;
      if (e == 'rt') {
        goforward()
      } else if (e == 'lt') {
        goback()
      } else if (e == 'modal') {
        modclose()
      } else if (e == 'bkg') {
        modclose()
      }
    });
  }, 3000);
};


function goback() {
  if (pictureIndexNumber < 1) {
    pictureIndexNumber = count;
    test('b' + pictureIndexNumber);
  };
  pictureIndexNumber = pictureIndexNumber - 1;
  a = octopus[pictureIndexNumber].src;
  modview(a);
};


function goforward() {
  // test(j);
  if (pictureIndexNumber >= count - 1) {
    pictureIndexNumber = -1
  };
  pictureIndexNumber = pictureIndexNumber + 1;
  var a = octopus[pictureIndexNumber].src;
  modview(a);

};


///////modal closer///////
function modclose() {
  console.log('modal closer');
  const bg = document.getElementById("bkg");
  if (bg != null) {
    bg.setAttribute("id", "bkg-hidden");
    const mo = document.getElementById("modal");
    mo.style.backgroundImage = null;
    mo.setAttribute("class", "modal");
    io = 1;

  };
  
};