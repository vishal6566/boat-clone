

document.getElementById("btn").addEventListener("click",function(){
 if(document.getElementById("input").checked==true){
   //  alert("yes")
    location.href="bank2.html"

    // document.getElementById("input").addEventListener("click",function(){
    //     let img=document.getElementById("img1")
    //     localStorage.setItem("obj",JSON.stringify(img))
    // })

   
 }
 else if(document.getElementById("input1").checked==true){
   location.href="banks.html"

 }
 else if(document.getElementById("input2").checked==true){
   location.href="bank3.html"

   
 }
 else if(document.getElementById("input3").checked==true){
   //  alert("yes")
 }
 else if(document.getElementById("input4").checked==true){
   //  alert("yes")
 }
 else if(document.getElementById("input5").checked==true){
   //  alert("yes")
 }
 else if(document.getElementById("input6").checked==true){
   //  alert("yes")
 }
 else if(document.getElementById("input7").checked==true){
   //  alert("yes")
 }
 else{
    alert("Please Click Click On Icon")
    
 }

// console.log("yes")
})
document.getElementsById("input1").addEventListener("click",function(){
    console.log("hello")
    let x=document.getElementById("img1")
    console.log(x)
    
})