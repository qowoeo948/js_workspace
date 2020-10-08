//상속: Person의 클래스의 코드까지 사용하여 확장하겠다
class BlackPerson extends Person{
    constructor(){
        //this: 나를 가리키는 변수: 명칭이 이미 정해져있는 예약어
        //super: 부모를 가리키는 변수: 명칭이 이미 정해져있는 예약어

        //this.name="djd"  에러발생! 이유) 부모보다 시급한 초기화는 없기 떄문에
        //부모의 탄생이 최우선시 된다..

        super(5,10); //부모의 constructor()
        //부모의 생성자 호출 이유? 자식의 초기화보다 최우선시 해야 하는 작업은
        //부모의 존재 즉 초기화이므로,,,,
        this.color="black";
        
    }
   
}