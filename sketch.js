
let man;
let watch;
let coffee;
let button1;
let button2;
let toggle1=false;
let toggle2=false;
function preload() {
  man = loadImage('man .png');
  watch=createImg('man checks watch.gif');
  watch.position(0,0);
  watch.hide();
  coffee = createImg('man drinks coffee.gif');
  watch.position(0,0);
  coffee.hide();
  button1 = createButton('Drink Coffee');
  button1.mousePressed(toggleCoffee);
  button1.position(0, 200);
button2 = createButton('Check Watch');
  button2.position(100, 200);
  button2.mousePressed(toggleWatch);
  


}

function setup() {
  createCanvas(200, 400);


}

function draw() {
  background(220,220,50);
  if(toggle1){
    
    watch.pause();
    coffee.play();
    
  }else if(toggle2){
    
    watch.play();
    coffee.pause();
    
  }else{
    image(man,0,0);}
  let s = second();  
text('Current second: \n' + s, 5, 50);
 
}

const toggleCoffee=()=>{
  togggle1=true;
  toggle2=false;
}
const toggleWatch=()=>{
  toggle1=false;
  toggle2=true;

}