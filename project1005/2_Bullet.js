//총알 정의하기
class Bullet{
    constructor(src,x,y,width,height,velX,velY){
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.img = document.createElement("img");
        this.img.src=this.src; //폭탄,총알 등등의 웨폰의 여러가지가 있으므로 변수로.
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px"; //우주선의 너비의 절반을 우측으로 이동해야돼
        this.img.style.top=this.y+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
    
        wrapper.appendChild(this.img); //화면에 부착

    }

    tick(){
        //총알의 물리량 변화
        this.y+=this.velY;
    }
    render(){
        //변화된 물리량을 화면에 표시한다.(그래픽처리)
        this.img.style.top=this.y+"px";
    }
}