class Shape{
    constructor(){
        this.text=""
        this.textColor=""
        this.shapeColor=""
    }
    setColor(textColor){
        this.textColor=textColor
    }
    setText(text){
        this.text=text
    }
    setShapeColor(){
        this.shapeColor=shapeColor
    }

    render(){
        return Error('child must create its render function')
    }
}

module.exports=Shape