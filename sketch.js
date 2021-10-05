
let man;
let coffee;
let watch;
let getcof;
let bee;
let phone;
let sport;
let smoke;
let wave;
let music;
let stranger;

let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let button10;

let toggle1=false;
let toggle2=false;
let toggle3=false;
let toggle4=false;
let toggle5=false;
let toggle6=false;
let toggle7=false;
let toggle8=false;
let toggle9=false;
let toggle10=false;

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
  
  sport=createImg('man sport.gif');
  sport.position(0,0);
  sport.hide();
  button6=createButton('Pass the Ball');
  button6.position(140,260)
  button6.mousePressed(toggleSport);
  
  smoke=createImg('man gets high.gif');
  smoke.position(0,0);
  smoke.hide();
  button7=createButton('Smoke');
  button7.position(0,290)
  button7.mousePressed(toggleSmoke);
  
  wave=createImg('man waves.gif');
  wave.position(0,0);
  wave.hide();
  button8=createButton('Wave');
  button8.position(130,290)
  button8.mousePressed(toggleWave);
  
  music=createImg('man listenst to music.gif');
  music.position(0,0);
  music.hide();
  button9=createButton('listen to music');
  button9.position(0,320)
  button9.mousePressed(toggleMusic);
  
  stranger=createImg('man learns.gif');
  stranger.position(0,0);
  stranger.hide();
  button10=createButton('Stranger Danger');
  button10.position(130,320)
  button10.mousePressed(toggleStranger);
}
  

function setup() {
  createCanvas(400, 400);
background(220,220,50);

}

function draw() {
  background(220,220,50)
  if(toggle1){
    watch.hide()
    getcof.hide()
    bee.hide()
    phone.hide()
    sport.hide()
    smoke.hide()
    wave.hide()
    music.hide()
    stranger.hide()
    
    coffee.show()
  } 
    else if(toggle2){
    coffee.hide()
    getcof.hide()
    bee.hide()
    phone.hide()
    sport.hide()
    smoke.hide()
    wave.hide()
    music.hide() 
    stranger.hide()
      
    watch.show()
      
  }
    else if(toggle3){
    watch.hide()
    coffee.hide()
    bee.hide()
    phone.hide()
    sport.hide() 
    smoke.hide()
    wave.hide() 
    music.hide()
    stranger.hide()
      
    getcof.show()
  }
      else if(toggle4){
    watch.hide()
    coffee.hide()
    getcof.hide()
    phone.hide()
    sport.hide()
    smoke.hide()
    wave.hide()
    music.hide()
    stranger.hide()
        
    bee.show()
    
  }
    else if(toggle5){
    watch.hide()
    coffee.hide()
    getcof.hide()
    bee.hide()
    sport.hide()
    smoke.hide()
    wave.hide()
    music.hide()
    stranger.hide()
      
    phone.show()
  }
      else if(toggle6){
    watch.hide()
    coffee.hide()
    getcof.hide()
    bee.hide()
    phone.hide()
    smoke.hide()    
    wave.hide()
    music.hide()
    stranger.hide()
        
    sport.show()  
    
    
  }
       else if(toggle7){
    watch.hide()
    coffee.hide()
    getcof.hide()
    bee.hide()
    phone.hide()
    sport.hide()    
    wave.hide()
    music.hide()
    stranger.hide()
         
    smoke.show()  
    
    
  }
  else if(toggle8){
    watch.hide()
    coffee.hide()
    getcof.hide()
    bee.hide()
    phone.hide()
    sport.hide()    
    smoke.hide()  
    music.hide()
    stranger.hide()
    
    wave.show()
  }
    else if(toggle9){
    watch.hide()
    coffee.hide()
    getcof.hide()
    bee.hide()
    phone.hide()
    sport.hide()    
    smoke.hide()
    wave.hide()
    stranger.hide()
      
    music.show()
    
  }
     else if(toggle10){
    watch.hide()
    coffee.hide()
    getcof.hide()
    bee.hide()
    phone.hide()
    sport.hide()    
    smoke.hide()
    wave.hide()
    music.hide()
       
    stranger.show()
    
  }
    else{
    image(man,0,0);
  }
}

const toggleCoffee = () => {
  console.log(toggle1, toggle2, toggle3, toggle4,toggle5,toggle6,toggle7,toggle8,toggle9,toggle10)
  toggle1 = true
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = false
  toggle6 = false
  toggle7 = false
  toggle8 = false
  toggle9 = false
  toggle10 = false
  
}

const toggleWatch = () => {
  toggle1 = false
  toggle2 = true
  toggle3 = false
  toggle4 = false
  toggle5 = false
  toggle6 = false
  toggle7 = false
  toggle8 = false
  toggle9 = false
  toggle10 = false
}

const toggleGetcof =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = true
  toggle4 = false
  toggle5 = false
  toggle6 = false
  toggle7 = false
  toggle8 = false
  toggle9 = false
  toggle10 = false
}
const toggleBee =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = true
  toggle5 = false
  toggle6 = false
  toggle7 = false
  toggle8 = false
  toggle9 = false
  toggle10 = false
}
const togglePhone =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = true
  toggle6 = false
  toggle7 = false
  toggle8 = false
  toggle9 = false
  toggle10 = false
}
const toggleSport =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = false
  toggle6 = true
  toggle7 = false
  toggle8 = false
  toggle9 = false
  toggle10 = false
}
const toggleSmoke =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = false
  toggle6 = false
  toggle7 = true
  toggle8 = false
  toggle9 = false
  toggle10 = false
}
const toggleWave =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = false
  toggle6 = false
  toggle7 = false
  toggle8 = true
  toggle9 = false
  toggle10 = false
}
const toggleMusic =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = false
  toggle6 = false
  toggle7 = false
  toggle8 = false
  toggle9 = true
  toggle10 = false
}
const toggleStranger =()=>{
  toggle1 = false
  toggle2 = false
  toggle3 = false
  toggle4 = false
  toggle5 = false
  toggle6 = false
  toggle7 = false
  toggle8 = false
  toggle9 = false
  toggle10 = true
}
