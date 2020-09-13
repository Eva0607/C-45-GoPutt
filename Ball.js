class Ball {
  constructor(x,y){
    this.body = Bodies.circle(x,y,5);
    this.image = loadImage("ball.png");
    this.r = 10;

    
    
  }

  display() {
    
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(RADIUS);
    ellipse( 0, 0, this.r, this.r);
    pop();

  }
}
