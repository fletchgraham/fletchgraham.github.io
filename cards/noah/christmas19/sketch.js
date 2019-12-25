let current;
let snowflake = [];
let bg = 'rgb(77, 93, 76)';

function setup() {
  var resp = '';
  while (calcMD5(resp) != KEY) {
    resp = prompt("Enter your key");
  }
  var body = select('body');
  body.style('display', 'block');
  var myCanvas = createCanvas(windowWidth, windowWidth);
  myCanvas.parent("card");
  current = new Particle(width / 2, 0);
  background(bg);

}

function draw_name() {
  textSize((2400/(NAME.length+8))*(width/800));
  fill(bg);
  stroke(255);
  strokeWeight(2);
  push();
  translate(20, 40);
  rotate(PI/6);
  textAlign(LEFT, TOP);
  text(NAME.toUpperCase(), 0, 0);
  pop();
}

function flakify(render) {
  for (let i = 0; i < 6; i++) {
    rotate(PI / 3);
    render();
    push();
    scale(1, -1);
    render();
    pop();
  }
}

function draw() {
  translate(width / 2, height / 2);
  scale(.8);

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  snowflake.push(current);
  current = new Particle(width / 2, 0);

  flakify(draw_name);
}

class Particle {
  constructor(radius, angle) {
    this.pos = p5.Vector.fromAngle(angle);
    this.pos.mult(radius);
    this.pos.y += random(width/PI);
    this.r = width/400;
    this.count = 0;
  }

  update() {
    this.pos.x -= 1;
    this.pos.y += random(-3, 3);

    let angle = this.pos.heading();
    angle = constrain(angle, 0, PI / 6);
    let magnitude = this.pos.mag();
    this.pos = p5.Vector.fromAngle(angle);
    this.pos.setMag(magnitude);
    this.count ++;
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  intersects(snowflake) {
    let result = false;
    for (let s of snowflake) {
      let d = dist(s.pos.x, s.pos.y, this.pos.x, this.pos.y);
      if (d < this.r * 2) {
        result = true;
        break;
      }
    }
    if (result && this.count > 2) {
      for (let i = 0; i < 6; i++) {
        rotate(PI / 3);
        this.show();
        push();
        scale(1, -1);
        this.show();
        pop();
      }
    }
    return result;
  }

  finished() {
    return this.pos.x < 1;
  }
}
