// var xt;

console.log('js loaded');
var io=1
var xm;


// const count = model.length;
var pic;
var count = model.pictures.length;
myview();
picSelect();
//////function for testing build//////
function test() {
  console.log('testing...123');
};

////////thumb selector//////

////////thumb selector//////
function picSelect(e){
  var clk=document.getElementById('alt1').addEventListener('click', function(e){
    e.preventDefault();
    var x=e.target.href;
    modview(x);

}
);
};


/////////search box function///////
function mySearch() {
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

//////////creates wrapper div////////
function myview() {
  console.log('myview');
  var ed = document.createElement("div");
  document.body.appendChild(ed);
  ed.className = "wrapper";

  ////creates thumbs//////
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
test();
    //////// removes pictures ////////
    const del=document.getElementById("wrapper");
    if (model.pictures[x].bool != "true") {
      console.log('.....');
      for (var x = 0; x < count; x++) {
      del.firstElementChild.remove;
       
    };
  };
};
};
mySearch();




///////////////////  modal contols  ////////////
function modal() {
  console.log('modal controls');
  // document.getElementById("lft").addEventListener("click", function () {});
  document.getElementById("rght").addEventListener("click", function () {
    var io=0
    var j = j + 1;
    if (j < count) {
      var a = model.pictures[j].src;
      modview(j);
    } else {
      j = 1;
      var j = model.pictures[j].src;
      console.log(j);
      return modview(j);
    }
  });
  const lg = document.getElementById('modal').addEventListener("click", function () {
    if (io == 1) {
      modclose();
       var io = 0

    } else {
      var io = 1;
    }
  })
};

///////modal unhider//////
function unhide(){
  console.log('unhide');
  var bg=document.getElementById('bkg-hidden');
  bg.setAttribute("id", "bkg");
  var io=0;
};


/////modal viewer/////
function modview(path) {
  console.log('modview');
    const md = document.getElementById("modal");
    // const path = j;
    md.style.backgroundImage = `url(${path})`;
    md.setAttribute("class", "modalView");
    document.getElementById("modal").src = model.pictures[0].src;
    document.getElementById("story").innerText = model.pictures[0].story;
    if (io==0){ 
               unhide()};
  modal();
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
    // picSelect();
  };
};
