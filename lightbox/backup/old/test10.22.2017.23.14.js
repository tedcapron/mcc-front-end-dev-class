// var xt;

console.log('js loaded');
var x = 0;
var xm;
var v = 0;
var io = 0;
const count = model.length;
var txt;
var cx;
myview();
// function myFunction(e) {
//   var ev = document.body.event.keyCode;
//   document.getElementById("search").innerHTML = "The  " + ev;
// };

function mySearch() {

  // var xm=document.getElementById("search").addEventListener("keypress", function () {
  //   // const xm = document.getElementById("search").value;
  //   const suggest = document.getElementById("suggest").value;
  //   console.log(xm.target.value);


  let lkfor = document.getElementById('search').addEventListener('keyup',textlog);
  function textlog(e){
      if(e.enterKey|| ''){console.log('press')}
      var xm=e.target.value;
      for (var c = 0; c < model.pictures.length; c++) {
        const cnt = model.pictures[c].keyword.length;
        for (var v = 0; v <= cnt; v++) {
          if (xm.includes(model.pictures[c].keyword[v])) {
            // console.log(xm + " equals " + model.pictures[c].keyword[v]);
            document.getElementById("search").innerHTML = model.pictures[c].keyword[v];
            model.pictures[c].bool = "true";
            console.log(model.pictures[c].bool);
            myview();
            
            
            
          } else {
            model.pictures[c].bool = "false";
          
          };

        };
      };
    };

  };

//////////thumbnail view////////
function myview() {
  var ed = document.createElement("div");
  document.body.appendChild(ed);
  ed.className = "wrapper";

  for (var x = 0; x < model.pictures.length; x++) {
    if (model.pictures[x].bool == "true") {
      const link = model.pictures[x].src;
      // console.log(link);
////creates thumbs//////
      txt = document.createElement("a");
      txt.className = "hidden";
      ed.appendChild(txt);
      txt.setAttribute("id", `alt${x}`);
      document.getElementById(`alt${x}`).innerText = model.pictures[x].story;
      const path = model.pictures[x].thumbsrc;
      txt.style.backgroundImage = `url(${path})`;
      txt.setAttribute("href", `${link}`);

    } else { console.log('.....')
    // const zx = document.getElementsByClassName("wrapper").removeChild[0];
    };
  };
};
mySearch();


//////removes pictures from display///////
function todel(){
  const wrp= document.getElementById("bkg")
for (var x = 0; x < model.pictures.length; x++) {
  if (model.pictures[x].bool == "true") {
     document.querySelector("#lft").remove();
    // console.log(tdel);
// wrp.removeChild(tdel);
  };
}; 
};


///////

// function todel(){

//   var tdel = document.getElementById("lft");
//   console.log(tdel);
// // tdel.parentNode.removeChild(tdel);
// }


///////////////////modal on-off switch////////////
function modal() {
  const lg = document.body.addEventListener("click", function () {
    if (io == 1) {
      modclose();
      io = 0

    } else {
      modview(6);
      io = 1;
// keynav();
    }

  })
};
// modal();


/////modal viewer/////
function modview(j) {
  const bg = document.getElementById("bkg-hidden");
  bg.setAttribute("id", "bkg");
  const md = document.getElementById("modal");
  const path = model.pictures[j].src;
  md.style.backgroundImage = `url(${path})`;
  md.setAttribute("class", "modalView");
  document.getElementById("modal").src = model.pictures[0].src;
  // var ted = document.createElement("p");
  // document.body.appendChild(ted);
  // ted.setAttribute("id", "story");
  document.getElementById("story").innerText = model.pictures[0].story;
  // todel()
};

////////key navigation///////
// function keynav(){
//   document.getElementById("modal").addEventListener("click", function () {
//     modview();
    




// };





///////modal closer///////
function modclose() {
  const bg = document.getElementById("bkg");
  bg.setAttribute("id", "bkg-hidden");
  const mo = document.getElementById("modal");
  mo.style.backgroundImage = null;
  mo.setAttribute("class", "modal");

};


///////////////////////
//////recyc;e bin/////
/////////////////////
// var el = document.createElement("img");
// el.className="images";
// txt.appendChild(el);
// // el.style.marginTop="30px";
// el.setAttribute("id",`pic${x}`);
// document.getElementById(`pic${x}`).src = model.pictures[x].thumbsrc;

// document.addEventListener("click",function(){
//  pc = document.getElementsByTagName("img");
//  console.log(pc);
// // });
// document.getElementById("search").addEventListener("keypress", myFunction);

// function myFunction() {
//     document.getElementById("demo").style.backgroundColor = "red";
// }
// str.includes("world")
// function mypress() {
//   document.getElementById("search").innerHTML = "Paragraph changed!";
//   document.appendChild("")
// myFunction();