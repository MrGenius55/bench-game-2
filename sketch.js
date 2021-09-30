
let man;
let coffee;
let watch;
let getcof;
let bee;
let phone;

let button1;
let button2;
let button3;
let button4;
let button5;

let toggle1=false;
let toggle2=false;
let toggle3=false;
let toggle4=false;
let toggle5=false;

function preload() {
  man = loadImage('man .png');
  coffee = createImg('man drinks coffee.gif');
  coffee.position(0,0);
  coffee.hide();
  button1 = createButton('Drink Coffee');
  button1.mousePressed(toggleCoffee);
  button1.position(0, 200);
  
  watch=createImg('man checks watch.gif');
  watch.position(0,0);
  watch.hide();
  button2 = createButton('Check Watch');
  button2.position(100, 200);
  button2.mousePressed(toggleWatch);
  
  getcof=createImg('man gets coffee.gif');
  getcof.position(0,0);
  getcof.hide();
  button3= createButton('Get More Coffee');
  button3.position(0,230);
  button3.mousePressed(toggleGetcof);
  
  bee=createImg('man is visited.gif');
  bee.position(0,0);
  bee.hide();
  button4= createButton('Watch a Bee');
  button4.position(140,230);
  button4.mousePressed(toggleBee);
  
  phone=createImg('man checks phone.gif');
  phone.position(0,0);
  phone.hide();
  button5= createButton('Check Phone');
  button5.position(0,260);
  button5.mousePressed(togglePhone); 
}
  

function setup() {
  createCanvas(400, 400);
background(220,220,50);

}

function draw() {
  background(220,220,50)
  if(toggle1){
    watch.hide()
    coffee.show()
    getcof.hide()
    bee.hide()
    phone.hide()
  } 
    else if(toggle2){
    coffee.hide()
    watch.show()
    getcof.hide()
    bee.hide()
    phone.hide();
  }
    else if(toggle3){
    watch.hide()
    coffee.hide()
    getcof.show()
    bee.hide()
    phone.hide();
  }
      else if(toggle4){
    watch.hide()
    coffee.hide()
    getcof.hide()
    bee.show()
    phone.hide();
  }
    else if(toggle5){
    watch.hide()
    coffee.hide()
    getcof.hide()
    bee.hide()
    phone.show();
  }
    else{
    image(man,0,0);
  }
}

const toggleCoffee = () => {
  console.log(toggle1, toggle2, toggle3, toggle4)
  toggle1 = true
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = false
  
}

const toggleWatch = () => {
  toggle1 = false
  toggle2 = true
  toggle3 = false
  toggle4 = false
  toggle5 = false
}

const toggleGetcof =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = true
  toggle4 = false
  toggle5 = false
}
const toggleBee =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = true
  toggle5 = false
}
const togglePhone =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = true
}