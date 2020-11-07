class Player extends BaseClass{
    constructor(x,y){
        var options = {
            isStatic = true
        }
        super(x,y,50,50);
        this.image = loadImage("images/player.png");
    }

    display(){
        super.display();
    }
}