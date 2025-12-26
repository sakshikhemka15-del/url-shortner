const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("hello")   
})
app.get("/:xyz", function (req, res) {
    // console.log(req.params.xyz)
    // const fgdf = 
    // // if (xyz) {

    // const obj = {
    //     name:"dsfdsf",
    //     roll: "dfdsfds",
    //     class:"fdsfdsfs",
    //     school:"dsfdsfds",
    //     url:"fsdfsd",
    //     params:{
    //         xyz:"dfgdfgdfg"
    //     }

    // }

    // console.log()
        
    // }





if (req.params.xyz == "y") {
    
    res.redirect("https://www.youtube.com")
    // res.send("yotube")   
}else if (req.params.xyz == "g") {
    // res.send("google")   
    res.redirect("https://www.google.com")
    
}else{
    res.send("not defined")   

}


})
// /g = google, /y = youtube
// /:xyz



// function sum() {
//     return 1+2
// }

// sum(5, 56, 456456, "gsdfkjg")



app.listen(3000, function () {
    console.log("running")
})