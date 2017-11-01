// var xt;

console.log('js loaded');
var io = 1;
let a;
var btn;
var j=0 ;
var xm;
var t = 123;
var pic;
var condition = 0;
var count = model.pictures.length;
var ed = "";
var searcher = "";


myview();
thumbMaker();
picSelect();
mySearch();
//////function for testing build//////
function test(t) {
  console.log('testing...' + t);
};



////////thumb selector//////
function picSelect(e) {
  for (var z = 0; z < count; z = z + 1) {
    // test(z);
    clk = document.getElementById(`alt${z}`).addEventListener('click', function (e) {
      e.preventDefault();
      var x = e.target.href;
      let j = z;
      modview(x);
    });
  };
};


/////////search box function///////
// function myFunction() {
//   setTimeout(function(){ alert("Hello"); }, 3000);
// }
function mySearch() { setTimeout(function() {
  let lkfor = document.getElementById('search').addEventListener('keyup', textlog)  }, 500);

  function textlog(e) {
    // if (e.enterKey || '') {
    //   console.log('press')
    // }
    xm = e.target.value;

    searcher = searcher + xm;
    test(searcher);
    for (var c = 0; c < count; c++) {
      const cnt = model.pictures[c].keyword.length;
      for (var v = 0; v <= cnt; v++) {
        if (searcher.includes(model.pictures[c].keyword[v])) {
          // console.log(xm + " equals " + model.pictures[c].keyword[v]);
          document.getElementById("search").innerHTML = model.pictures[c].keyword[v];
          model.pictures[c].bool = "true";
          console.log(model.pictures[c].bool);
          thumbMaker();
        } 
        else {
          model.pictures[c].bool = "false";

        };

      };
    };
  };

};

//////////creates wrapper div////////
function myview() {
  console.log('myview');
  ed = document.createElement("div");
  document.body.appendChild(ed);
  ed.className = "wrapper";
};
////creates thumbs//////
function thumbMaker(k) {
  for (var x = 0; x < count; x++) {
    const link = model.pictures[x].src;
    pic = document.createElement("a");
    pic.className = "thumbs";
    ed.appendChild(pic);
    pic.setAttribute("id", `alt${x}`);
    document.getElementById(`alt${x}`).innerText = model.pictures[x].story;
    const path = model.pictures[x].thumbsrc;
    pic.style.backgroundImage = `url(${path})`;
    pic.setAttribute("href", `${link}`);

  };
};




// eraser();


///////////////////  modal key contols  ////////////
document.onkeydown = checkKey;

function checkKey(ke) {

  ke = window.event;
test('key');
  if (ke.keyCode == '37') {
    goback();
  }
  else if (ke.keyCode == '39') {
    goforward();
  }
  else{ 
  var btn=0;
  test();
  };
};
//////////// modal onscreen controls ////////
function modalControls(a) {
  console.log('modalControls');
  io = 0;

  document.getElementById("lft").addEventListener("dbclick", function () {
    condition = 1;
    var btn=1;
    goback();
  });
  document.getElementById("rght").addEventListener("dbclick", function () {
    condition = 1;
    var btn=1;
    goforward();
  });
};


function goback() {
   j = j - 1;
   test('j..'+ j);
  if (j < 0) {
    j = count;
  };
  var a = model.pictures[j].src;
  test('forward'+a);
  modview(a);
  // event.preventDefault;
};


function goforward() {
   j = j + 1;
   test('j..'+j);
  if (j > count) {
    j=0
  };
  
  var a = model.pictures[j].src;
  modview(a);
  // event.preventDefault;
};




function closerControls() {
  document.getElementById('modal').addEventListener("click", function () {
    
  });
  if (condition == 0 && btn==0) {
    document.getElementById('bkg-hidden').addEventListener("click", function () {
      modclose()
    });
  };

  if (condition == 1 && btn==0) {
    document.getElementById('bkg').addEventListener("click", function () {
      modclose()
    });
  };
};



// };

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


/////modal viewer/////
function modview(path) {
  console.log('modview');
  const md = document.getElementById("modal");
  md.style.backgroundImage = `url(${path})`;
  md.setAttribute("class", "modalView");
  document.getElementById("modal").src = model.pictures[j].src;
  document.getElementById("story").innerText = model.pictures[j].story;
  modalControls();
  closerControls();
  unhide()
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

function eraser() {
  del = document.getElementById("wrapper");
  for (var x = 0; x < count; x++) {
    del.firstElementChild.remove
  };
};