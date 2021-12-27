class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.fumaca = loadImage("sprites/smoke.png");
    this.caminhofu =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x > 6 && this.body.position.x > 199){
      var posicionamento = [this.body.position.x,this.body.position.y];
      this.caminhofu.push(posicionamento);
    }
    for(var I =0; I < this.caminhofu.length; I=I+2){
      image(this.fumaca,this.caminhofu[I][0],this.caminhofu[I][1]);
    }
  }
}
