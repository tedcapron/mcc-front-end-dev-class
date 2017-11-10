// var xt;

console.log('js loaded');
var io = 1;
let a;
var btn;
var j=0;
var xm;
var t = 123;
var pic;
var condition = 0;
var count = model.pictures.length;
var ed = "";
var searcher = "";
var view=[];
const octopus=[];
octopus.push(...model.pictures);





myview();
thumbMaker();
picSelect();
modalControls();
// closerControls();
mySearch();
//////function for testing build//////
function test(t) {
  console.log('testing...' + t);
};



////////thumb selector//////
function picSelect(e) {
  for (let z = 0; z < count; z = z + 1) {
    // test(z);
     clk = document.getElementById(`alt${z}`).addEventListener('click', function (e) {
      test(clk);
      e.preventDefault();
      var x = e.target.href;
      j=urlToNumber(x);
      test(j);
      modview(x);
    });
  };
};

/////extracts picture number//////
function urlToNumber(q){
let x=String(q);
let y=x.slice(-6);
let z=y.slice(1,2);
let p=z.trim;
let d=Number(z);
return d;
///end//
};





/////////search box function///////
function mySearch(){
const search = document.querySelector('#search');
const suggestions = document.querySelector('#suggest');
search.addEventListener('keyup',findMatches(search));;
search.addEventListener('change',findMatches(search));
function findMatches(search, octopus) {
  return octopus.filter(pictures => {
    const regex = new RegExp(search, 'gi');
    test(search);
    return octopus.match(regex);
  });
}
};
  function textlog(e) {
    // if (e.enterKey || '') {
    //   console.log('press')
    // }
    xm = e.target.value;

    searcher = xm;
    test(searcher);
    for (var c = 0; c < count; c++) {
      const cnt = octopus[c].keyword.length;
      for (var v = 0; v <= cnt; v++) {
        if (searcher.includes(model.pictures[c].keyword[v])) {
          // console.log(xm + " equals " + model.pictures[c].keyword[v]);
          document.getElementById("search").innerHTML = octopus[c].keyword[v];
          octopus[c].bool = "true";
          // console.log(model.pictures[c].bool);
          thumbMaker();
        } 
        else {
          model.pictures[c].bool = "false";

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
    const link = octopus[x].src;
    pic = document.createElement("a");
    pic.className = "thumbs";
    ed.appendChild(pic);
    pic.setAttribute("id", `alt${x}`);
    document.getElementById(`alt${x}`).innerText = model.pictures[x].story;
    const path = octopus[x].thumbsrc;
    pic.style.backgroundImage = `url(${path})`;
    pic.setAttribute("href", `${link}`);
    

  };
};



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
setTimeout( function(){
  document.addEventListener('click',function(){
    e=event.target.id;
if( e == 'rt'){
  goforward() }
  else if( e == 'lt'){
    goback() }
    else if(e=='modal' ){ test('shit'); modclose()}
    else if(e=='bkg' ){ test('shit'); modclose()}
});
} ,3000);
  };
    
  


function goback() {
  j = j - 1;
  // console.log(j)
  // test('j..'+ j);
  if (j <1) {
    j = count;
    test('b'+j);
  };
  a = octopus[j].src;
  modview(a);
  // event.preventDefault;
};


function goforward() {
  j = j + 1;
  // test(j);
  if (j >= count) {
    j=0
  };  
  var a = octopus[j].src;
  modview(a);

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