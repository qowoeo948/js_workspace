class Bullet extends GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        super(container,src,width,height,x,y,velX,velY);
    }

    tick(){
        this.x+=this.velX;  
    }
    render(){
    this.img.style.left=this.x+"px";   
   
    }

}