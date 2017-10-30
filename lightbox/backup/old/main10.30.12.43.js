// var xt;

console.log('js loaded');
var io = 1;
let a;
var j = 5;
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
function mySearch() { setInterval(function() {
  let lkfor = document.getElementById('search').addEventListener('keyup', textlog);
  document.
}, 3000);

  function textlog(e) {
    // if (e.enterKey || '') {
    //   console.log('press')
    // }
    var xm = e.target.value;

    searcher = searcher + xm;
    test(searcher,xm);
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


///////////////////  modal contols  ////////////
document.onkeydown = checkKey;

function checkKey(ke) {

  ke = window.event;

  if (ke.keyCode == '37') {
    goback();
  } else if (ke.keyCode == '39') {
    goforward();
  }

}

function modalControls(a) {
  console.log('modalControls');
  io = 0;

  document.getElementById("lft").addEventListener("click", function () {
    condition = 1
    goback();
  });
  document.getElementById("rght").addEventListener("click", function () {
    condition = 1
    goforward();
  });
};


function goback() {
  var j = j - 1;
  if (j < 1) {
    j = count
  };

  var a = model.pictures[j].src;
  test(a);
  modview(a);
  event.preventDefault;
};


function goforward() {
  var j = j + 1;
  if (j > count) {
    j = 1
  };
  test(a);
  
  var a = model.pictures[j].src;
  modview(a);
  event.preventDefault;
};




function closerControls() {
  document.getElementById('modal').addEventListener("click", function () {
    modclose()
  });
  if (condition == 0) {
    document.getElementById('bkg-hidden').addEventListener("click", function () {
      modclose()
    });
  };

  if (condition == 1) {
    document.getElementById('bkg').addEventListener("click", function () {
      modclose()
    });
  };
};



// };

///////modal unhider//////
function unhide() {
  test("unhider log" + io);
  if (io = 1) {
    console.log('unhide');
    var bg = document.getElementById('bkg-hidden');
    if (bg != null) {
      bg.setAttribute("id", "bkg");
      test('unhidden rn');
    };
  };
  var io = 0;
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
    condition = 0
    const mo = document.getElementById("modal");
    mo.style.backgroundImage = null;
    mo.setAttribute("class", "modal");
    io = 1;

  };
};

function eraser() {
  del = document.getElementById("wrapper");
  for (var x = 0; x < count; x++) {
    del.firstElementChild.remove
  };
};