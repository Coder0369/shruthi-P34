const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var flowerBunch,rope,ground;
var flowerBunch_con;
var flowerBunch_2;
var flowerBunch_con_3;
var rope;
var rope2;

var bgImg;
var Bunch;
var basket;

var button,button2,button3;
var girl;
var happy,sad;
var muteBtn;

function preload(){
  bgImg = loadImage('bgImg.png');
  flowerBunch = loadImage('flower_bunch.png');
  sofia = loadImage('Sofia.png');
}

function setup() {
  createCanvas(600,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  Engine = Engine.create();
  World = engine.world;

   //btn 1
   button = createImg('cut_btn.png');
   button.position(120,90);
   button.size(50,50);
   button.mouseClicked(drop);
 
    //btn 2
    button2 = createImg('cut_btn.png');
    button2.position(420,90);
    button2.size(50,50);
    button2.mouseClicked(drop2);

    rope = new Rope(7,{x:130,y:90});
   rope2 = new Rope(7,{x:455,y:90});

   mute_btn = createImg('mute.png');
  mute_btn.position(width-70,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);

  ground = new Ground(300,height,width,20);

  basket = createSprite(180,height-70,100,100);
  basket.scale = 0.2;

  flowerBunch = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  fruit_con_2 = new Link(rope2,fruit);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

