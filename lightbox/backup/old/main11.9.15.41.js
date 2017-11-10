// var xt;

console.log('js loaded');
var io = 1;
var vi;
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
var octopus=[];
octopus.push(...model.pictures);
view.push(...octopus);





// myview();
thumbMaker();
picSelect();
modalControls();
// closerControls();
// mySearch();
//////function for testing build//////
function test(t) {
  console.log('testing...' + t);
};
function thumbMaker() {
  
  //////////creates wrapper div////////
  // location.reload();
  ed = document.createElement("div");
  document.body.appendChild(ed);
  ed.className = "wrapper";  
  
  // console.log(ed);
  ////creates thumbs//////
  
      // const parent = document.getElementById("wrapper");
      // while (ed.firstChild) {
      //   ed.removeChild(ed.firstChild);
      // }
  
  // document.querySelector('.wrapper').innerHTML=''; 
  // document.querySelectorAll('.thumbs').innerHTML='';   
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
      j=urlToNumber(x);
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
////////////////////////////////my search//////////////////////
function mySearch(){
document.addEventListener('change',function(){
 xm=document.getElementById('search').value;
var x=0;
var y=1;
for (x in octopus) {
  // console.log(octopus[x].story);
  
  var res = octopus[x].story;
  var result = octopus[x].alt;
  var res = res.split(' ');

  // test(y);
   var image = document.getElementById(`alt${y}`);
   let c=1
   for (c in octopus){
     var re = res[c]
     if(res[c]==xm){
      image.setAttribute("class", "vis");
      
       test('matching'+res[c]);
      } 
      else {
        wrap=document.getElementsByClassName('wrapper');
        image.setAttribute("class", "invis");
           
                    };            
          };
        };
})  

};

// function mySearch() {
//   var input, filter;
//   search = document.getElementById("search").value;
//   // search='mountain';
//   for (i = 0; i < octopus[i].story.length; i++) {
//     let a = octopus[i].story
//       an= a.Filter(search);
//       console.log(an+'....');
//   }
//       if (a > -1) {
//           vi.style.display = "";
//       } else {
//           vi.style.display = "none";

//       };
//   };

/////////search box function///////

// function mySearch() {
  
//     document.getElementById("search").addEventListener("keypress", function () {
//       const xm = document.getElementById("search").value;
//       const suggest = document.getElementById("suggest").value;
  
  
  
//       for (var c = 0; c < model.pictures.length; c++) {
//         const cnt = model.pictures[c].keyword.length;
//         for (var v = 0; v <= cnt; v++) {
//           if (xm.includes(model.pictures[c].keyword[v])) {
//             console.log(xm + " equals " + model.pictures[c].keyword[v]);
//             document.getElementById("search").innerHTML = model.pictures[c].keyword[v];
//             model.pictures[c].bool = "true";
//             console.log(model.pictures[c].bool);
//             // myview();
  
//             console.log(model.pictures[c].keyword[v]);
  
  
//           } else {
//             model.pictures[c].bool = "false";
//             // console.log(xm + " is not " + model.pictures[c].keyword[v]);
  
//             console.log(model.pictures[c].bool);
  
//           };
//         };
//       };
  
//     });
//   };

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
  }
  else if (ke.keyCode == '39') {
    goforward();
  }
  else{ 
  var btn=0;
  // test();
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
    else if(e=='modal' ){ modclose()}
    else if(e=='bkg' ){ modclose()}
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