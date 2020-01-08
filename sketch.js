//module aliases
// Stopping Point: Part 3 10:53 - Editing Engine Refresh rate
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var pegs = [];
var bounds =[];
var cols = 11;
var rows = 15;

function setup(){
  // let density = displayDensity();
  // pixelDensity(density)
  createCanvas(displayWidth, displayHeight);
  colorMode(HSB);
  engine = Engine.create({
    enableSleeping: true
  }),
  world = engine.world;
  world.gravity.y = 1;

  // Creates spacing for pegs
  var spacing = width / cols;
  for ( var j=0; j < rows; j++) {
      for ( var i=0; i < cols + 1; i++) {
        var x = i * spacing;
        if (j % 2 == 0) {
          x += spacing / 2;
        }
        var y = spacing + j * spacing;
        var p = new Peg(x, y, width/90);
        pegs.push(p);
      }
  }
  // Creates bottom boundary
  var b = new Boundary(width/2, height + 50, width, 100);
  bounds.push(b);
  // Creates left side wall
  var b = new Boundary(-5, height/2, 10, height);
  bounds.push(b);
  //Creates right side wall
  var b = new Boundary(width+5, height/2, 10, height);
  bounds.push(b);
  // Creates Buckets
  // for ( var i=0; i < cols + 2; i++) {
  //   var x = i * spacing;
  //   var h = 100;
  //   var w = 10;
  //   var y = height - h / 2;
  //   var b = new Boundary(x, y, w, h)
  //   bounds.push(b);
  // }
}

function newParticle(){
  var radius = width/100;
  var p = new Particle(mouseX, mouseY, radius);
  particles.push(p);
}
function draw() {
  // Drop balls while mouse is pressed
  if (mouseIsPressed){
    newParticle();
  }

  background(0);

  Engine.update(engine, 16.666);

  for (var i = 0; i<particles.length; i++){
    particles[i].show();
    // Remove particles that fall off the sides of the viewport
    if (particles[i].isOffScreen()) {
      World.remove(world, particles[i].body);
      particles.splice(i, 1);
      i--;
    }
    // Start removing particles if there are more than 450
    // if (particles.length>450){
    //   World.remove(world, particles[i].body);
    //   particles.splice(i, 1);
    //   i--;
    // }
  }

  for (var i = 0; i< pegs.length; i++){
    pegs[i].show();
  }
  for (var i = 0; i< bounds.length; i++){
    bounds[i].show();
  }
}

function clear(){
  particles.length = 0;
}
