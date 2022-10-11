// var formtag=document.querySelector("form");
// formtag.addEventListener("submit",myfunc)
// var userdata=JSON.parse(localStorage.getItem("userdetails"))||[];

// function myfunc()
// {
//     event.preventDefault();
//     var obj={
//         FirstName:document.querySelector("#firstname").value,
//         LastName:document.querySelector("#lastname").value,
//         Email:document.querySelector("#email").value,
//         Password:document.querySelector("#password").value
//     }
//     console.log(obj)
//     // console.log(userdata);
//     if(checkemail(obj.Email)==true)
//     {
//         userdata.push(obj);
//         localStorage.setItem("userdetails",JSON.stringify(userdata));
//         alert("New Account Created");
//         window.location.href="Login.html"
//     }
//     else
//     {
//          alert("Account Already Exists");
//     }
// }
// function checkemail(email)
// {
//     var filter= userdata.filter(function(elem){
//         return elem.Email==email;
//      });
//      if(filter.length>0)
//      {
//         return false;
//      }
//      else
//      {
//         return true;
//      }
// }




// ****************************************************************************************new JSON.signup*****

 // userData=JSON.parse(localStorage.getItem("Information")) || [] same as line no 48
 userData=JSON.parse(localStorage.getItem("Information"))
 function formData(E,cp,rep,cod,b){
     this.userEmail=E;
     this.createPass=cp;
     this.rePass=rep;
     this.capCode=cod;
     this.checkBox=b;
 }
 
 let submitData=(e)=>{
     let inform=document.getElementById("form");
     event.preventDefault();
     
     let Email=inform.userEmail.value;
     let Password=inform.createPass.value;
     let rePassword=inform.rePass.value;
     let code=inform.capCode.value;
     let checkInput=inform.checkBox.value;
     
     var person=new formData (Email,Password,rePassword,code,checkInput)
     

 if(Email==""){
     document.getElementById("emailErr").innerText="Please enter a valid email address"
 }

 else if((Password=="") || (Password.length<5)){
     document.getElementById("passErr").innerText="Please create minimum 6 digit Password"
 }

 else if (Password!=rePassword) {
     document.getElementById("checkPass").innerText="Please enter the same value again"
 }
 else if((code=="") || (code.length<4)){
     document.getElementById("codeCheck").innerText="Please enter the valid code"
 }
 else if((document.getElementById("checkBox").checked!==true))
 {
     alert("Please click on check box")
        
 }
 else
     { 
         alert("Register successful")
         // userData.push(person) for data storing in array format
        console.log(person);
            localStorage.setItem("Information",JSON.stringify(person))
     window.location.href="Login.html"
     form.reset()
     }
}




