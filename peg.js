function Peg(x, y, r){
  var options = {
    restitution: 0.3,
    friction: 0.1,
    density: 1,
    isStatic: true
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);
}

Peg.prototype.show = function() {
  fill(0, 0, 100);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0, 0, this.r * 2)
  pop();
}
