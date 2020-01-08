
function Particle(x, y, r){
  // this.blueShade = random(['196, 100, 94,', '196, 70, 94', '196, 40, 94', '196, 20, 94', '249, 100, 18']);
  this.blueShade = random(['#00AEEF','#6BD7FF', '#A4E6FF', '#07002D', '#D6F4FF']);

  var options = {
    restitution: 0.5,
    friction: 0,
    density: 1,
  };
  x += random(-1, 1);
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);
}

Particle.prototype.isOffScreen = function(){
  var x = this.body.position.x;
  var y = this.body.position.y;
  return (x< -50 || x > width + 50)
}



Particle.prototype.show = function() {
  fill(this.blueShade);
  strokeWeight(0);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2)
  pop();
}
