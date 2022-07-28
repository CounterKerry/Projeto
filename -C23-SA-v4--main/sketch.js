const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

function preload() {
  createCanvas(400, 400);

  var ball_option = {
    isStatic: true,
  }

  Engine = Engine.create();
  world = engine.world;

  ball = Bodies.circle(100, 10, 20, ball_option);
  World.add(world, ball);

}

function draw() {
  background(51);

  Engine.update(Engine);

  ellipse(ball.position.x, ball.position.y, 20);
}