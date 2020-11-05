class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png");
    this.trajectory=[]
    }

  display() {
    super.display();
    if(this.body.position.x>220 && this.body.speed>10){
var pos=[this.body.position.x,this.body.position.y]
this.trajectory.push(pos)
console.log(this.trajectory)
  }
    for(var i=0;i<this.trajectory.length;i++){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
    }
  
}
}
