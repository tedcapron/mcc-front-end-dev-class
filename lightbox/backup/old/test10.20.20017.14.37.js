// var xt;

console.log('js loaded');
var x = 0;
var xm;
var v = 0;
const count = model.length;
myview();

function mySearch(xm) {
  document.getElementById("search").addEventListener("keypress", function () {
    // const xm = document.body.getElementById("search");
    const xm = "water";
    console.log(xm);

    var search = document.getElementById("suggest").value;
    for (var c = 0; c < model.pictures.length; c++) {
      const cnt = model.pictures[c].keyword.length;
      for (var v = 0; v <= cnt; v++) {
        if (xm.includes(model.pictures[c].keyword[v])) {
          console.log(xm + " equals " + model.pictures[c].keyword[v]);
          document.getElementById("suggest").innerHTML = model.pictures[c].keyword[v];
          model.pictures[c].bool = "true";
          console.log(model.pictures[c].bool);
          myview();

          // console.log(model.pictures[c].keyword[v]);


        } else {
          model.pictures[c].bool = "false";
          // console.log(xm + " is not " + model.pictures[c].keyword[v]);

          console.log(model.pictures[c].bool);

        };
      };
    };

  });
};
//////////////////////
//////////view////////
//////////////////////view
function myview() {
  var ed = document.createElement("div");
  document.body.appendChild(ed);
  // document.body.appendChild(ed);
  model.pictures[0].bool = "false";
  ed.className = "wrapper";
  // el.setAttribubte("id","test");
  for (var x = 0; x < model.pictures.length; x++) {
    if (model.pictures[x].bool == "true") {
      const link = model.pictures[x].src;
      console.log(link);

      var txt = document.createElement("a");
      txt.className = "hidden";
      ed.appendChild(txt);
      txt.setAttribute("id", `alt${x}`);
      document.getElementById(`alt${x}`).innerText = model.pictures[x].story;

      const path = model.pictures[x].thumbsrc;
      txt.style.backgroundImage = `url(${path})`;
      txt.setAttribute("href", `${link}`);

    } else {
      console.log("no pic" + model.pictures[x].bool)
    };
  };
};
mySearch();




///////////////////
////large view/////
///////////////////
// document.getElementsByTagName("a").addEventListener("click", function (event) {
//   event.preventDefault()
// });

function modal() {
  const lg=document.body.addEventListener("click", function () {
    console.log(lg);
    const bg=document.getElementById("bkg-hidden");
    console.log(bg);

    bg.setAttribute("id", "bkg");
    const md=document.getElementById("modal");
    const path = model.pictures[x].src;
    md.style.backgroundImage = `url(${path})`;
    md.setAttribute("class", "modalView");
    // var xd = document.body.querySelector("href");


    document.getElementById("modal").src = model.pictures[0].src;
  })
};
modal();





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