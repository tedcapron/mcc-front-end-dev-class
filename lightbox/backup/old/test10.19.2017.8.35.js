// var xt;

console.log('js loaded');
var x=0;
var xm;
var v=0;
const count=model.length;
// function mypress() {
//   document.getElementById("search").innerHTML = "Paragraph changed!";
//   document.appendChild("")
function mySearch(xm) {
  // document.addEventListener("click",function(){
  //  pc = document.getElementsByTagName("img");
  //  console.log(pc);
  // // });
  // document.getElementById("search").addEventListener("keypress", myFunction);
  
  // function myFunction() {
  //     document.getElementById("demo").style.backgroundColor = "red";
  // }
  // str.includes("world")
  document.getElementById("search").addEventListener("keypress", function(){
   var xm = document.getElementById("search").value;
    var search = document.getElementById("search").value;
    for( var c=0 ; c<model.pictures.length; c++){
      for (var v=0;v<=2;v++){
        if ( xm.str.includes(model.pictures[c].keyword[v])){
          console.log(xm+" equals "+ model.pictures[c].keyword[v]);
          document.getElementById("testy").innerHTML = model.pictures[c].keyword[v];
          model.pictures[c].bool = "true";
          console.log(model.pictures[c].bool);
          
          // console.log(model.pictures[c].keyword[v]);

          
        }
      else{model.pictures[c].bool="false";
      console.log(xm+" is not "+ model.pictures[c].keyword[v]);
      
      console.log(model.pictures[c].bool);
      
      };
      };
    };
    
  });
};
//////////////////////
//////////view////////
//////////////////////view
function myview(){
var ed = document.createElement("div");
document.body.appendChild(ed);
// document.body.appendChild(ed);

ed.className="wrapper";
// el.setAttribubte("id","test");
    for( var x=0 ; x<model.pictures.length; x++){
      if( model.pictures[x].bool ==="true"){
        console.log(x);
        var txt = document.createElement("div");
        txt.className="hidden";
        ed.appendChild(txt);
        txt.setAttribute("id",`alt${x}`);
        document.getElementById(`alt${x}`).innerText=model.pictures[x].story;
        
        const path = model.pictures[x].thumbsrc;
        txt.style.backgroundImage = `url(${path})`;

// var el = document.createElement("img");
// el.className="images";
// txt.appendChild(el);
// // el.style.marginTop="30px";
// el.setAttribute("id",`pic${x}`);
// document.getElementById(`pic${x}`).src = model.pictures[x].thumbsrc;
}

else{console.log("no pic"+ model.pictures[x].bool)};
    };
  };
  myview();    
  mySearch();
///////////////////
////large view/////
///////////////////

