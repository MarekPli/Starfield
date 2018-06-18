var Star = function(width, height) {
  this.width = width;
  this.height = height;
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  var pz = this.z;
  this.update = function () {
    this.z -= speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      pz = this.z;
    }
  }
  this.show = function () {
    
    fill(255);
    noStroke();
    var sx = map(this.x / this.z, 0, 1, 0, this.width);
    var sy = map(this.y / this.z, 0, 1, 0, this.height);
    var r = map(this.z, 0, this.width, 16, 0);
    if (mouseY < this.height ) {
      ellipse(sx, sy, r, r);
    }
    
    stroke(255);
    var px = map(this.x / pz, 0, 1, 0, width);
    var py = map(this.y / pz, 0, 1, 0, height);
    pz = this.z;
    line(px, py, sx, sy);
  }
};
