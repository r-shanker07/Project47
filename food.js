class Food extends BaseClass{
    constructor(x,y){
        var options = {
            isStatic = true
        }
        super(x,y,50,50);
        this.image = loadImage("images/food.png");
    }

    display(){
        super.display();
    }
}