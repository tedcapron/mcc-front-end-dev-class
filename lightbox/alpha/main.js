console.log('js loaded');
var io = 1;
var vi;
let a;
var btn;
var j = 0;
var xm;
var t = 123;
var pic;
var condition = 0;
var count = model.pictures.length;
var ed = "";
var searcher = "";
var view = [];
var octopus = [];
octopus.push(...model.pictures);
view.push(...octopus);


thumbMaker();
picSelect();
modalControls();
function test(t) {
  console.log('testing...' + t);
};

//////////creates wrapper div////////
function thumbMaker() {
  ed = document.createElement("div");
  document.body.appendChild(ed);
  ed.className = "wrapper"; 
  for (var x = 0; x < view.length; x++) {
    const link = view[x].src;
    pic = document.createElement("a");
    pic.className = "thumbs";
    ed.appendChild(pic);
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
      test(clk);
      e.preventDefault();
      var x = e.target.href;
      j = urlToNumber(x);
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
  document.addEventListener('keypress', function () {
    xm = document.getElementById('search').value;
    var x = 0;
    for (x in octopus) {
      var res = octopus[x].story;
      var result = octopus[x].alt;
      var res = res.split(' ');
      var ret = xm.charCodeAt(0);
      test('ret---' + ret);
      var ng = 0;
      var image = document.getElementById(`alt${x}`);
      let c = 0;
      for (c in octopus) {
        var re = res[c]
        if (re != xm && ng == 0) {
          //  test(ng);
          image.setAttribute("class", "invis");
        };
        if (re == xm || ret == 32) {
          image.setAttribute("class", "thumbs");
          ng = 1
          test('xxx...' + x);


        }
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
  document.getElementById("modal").src = octopus[j].src;
  document.getElementById("story").innerText = octopus[j].story;
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
  condition = 1;

};

///////////////////  modal key contols  ////////////
document.onkeydown = checkKey;
function checkKey(ke) {
  ke = window.event;
  // test('key');
  if (ke.keyCode == '37') {
    goback();
  } else if (ke.keyCode == '39') {
    goforward();
  } else {
    var btn = 0;
  };
};
//////////// modal onscreen controls ////////
function modalControls(a) {
  console.log('modalControls');
  io = 0;
  setTimeout(function () {
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
  j = j - 1;
  if (j < 1) {
    j = count;
    test('b' + j);
  };
  a = octopus[j].src;
  modview(a);
};


function goforward() {
  j = j + 1;
  // test(j);
  if (j >= count) {
    j = 0
  };
  var a = octopus[j].src;
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
  var condition = 0
};

