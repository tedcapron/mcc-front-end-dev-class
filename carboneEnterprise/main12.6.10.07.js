////hello///
console.log('loaded main.js');
function test(a){ console.log('....'+a)}
picSelect();

///////////event-listener///////////
function picSelect(e) {
    test('picselect');
    for (let z = 1; z < 8; z = z + 1) {        
         ps=document.getElementById(`pic${z}`).addEventListener('mouseenter',change())
        
         }};

         ///////////photo changer///////////////
         function change(z){
             test(this.attributes);
jumbotron= document.getElementById('photo').style.backgroundImage='images/image3.JPG';

         }
