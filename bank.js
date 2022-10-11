document.getElementById("btn").addEventListener("click",function(){
    let card=document.getElementById("card").value
    let month=document.getElementById("mselect").value
    let year=document.getElementById("yselect").value
    let holder=document.getElementById("holder").value
    let digit=document.getElementById("digit").value

    if(card=="" || card.length<16 ){
         document.getElementById("p1").style.display="flex"
         
        
    }
    else if(month==""){
      document.getElementById("p2").style.display="flex"
        
    }
    else if(year==""){
        document.getElementById("p3").style.display="flex"
    }
    else if(holder==""){
        document.getElementById("p4").style.display="flex"
    }
    else if(digit==""  || digit.length>3){
        document.getElementById("p5").style.display="flex"
    }
    else{
        alert("Your Item Purchase Succsesfully !!")
        window.location.href="index.html"
    }
   

})
document.getElementById("what").addEventListener("click",function(){
    document.getElementById("w").innerText="CVV2 is a unique 3 or 4-digit number for each card"
})