const Circle = require("./lib/Circle")
const Triangle = require("./lib/Triangle")
const Square = require("./lib/Square")
const inquirer = require("inquirer")
const fs = require("fs")

inquirer
    .prompt([{
        type: "input",
        message: "Enter SVG Text:",
        name: "text"
    },
    {
        type: "rawlist",
        message: "Choose Text Color",
        name: "textColor",
        choices: ["blue", "green", "red", "white"]
    },
    {
        type: "rawlist",
        message: "Choose Shape",
        name: "shape",
        choices: ["circle", "square", "triangle"]

    },
    {
        type: "rawlist",
        message: "Choose a Shape Color",
        name: "shapeColor",
        choices: ["blue", "green", "red", "white"]
    }])
    .then(response => {

        if (response.shape === "circle") {
            const circle = new Circle()
            circle.setColor(response.textColor)
            circle.setText(response.text)
            circle.setShapeColor(response.shapeColor)
            fs.writeFile("./examples/logo.svg", circle.render(), (err) =>{
                console.log("Generated logo.svg")
            })
        } else if (response.shape === "square") {
            const square = new Square()
            square.setColor(response.textColor)
            square.setText(response.text)
            square.setShapeColor(response.shapeColor)
            fs.writeFile("./examples/logo.svg", square.render(), (err) => {
                console.log("Generated logo.svg")
            })
        } else if (response.shape === "triangle") {
            const triangle = new Triangle()
            triangle.setColor(response.textColor)
            triangle.setText(response.text)
            triangle.setShapeColor(response.shapeColor)
            fs.writeFile("./examples/logo.svg", triangle.render(), (err)=> {
                console.log("Generated logo.svg")
            })
        }


    })