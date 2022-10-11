// var formtag=document.querySelector("form");
// formtag.addEventListener("submit",myfunc)
// var loginUserData=JSON.parse(localStorage.getItem("userdetails"))||[];

// function myfunc(event)
// {
//     event.preventDefault();
//     var obj={
//         Email:document.querySelector("#email").value,
//         Password:document.querySelector("#password").value
//     }
//     console.log(obj)
//     // console.log(userdata);
//     if(verifyemail(obj.Email,obj.Password)==true)
//     {
//         loginUserData.push(obj);
//         localStorage.setItem("loggedUserData",JSON.stringify(loginUserData));
//         alert("Login Sucessfully");
//     }
//     else
//     {
//          alert("Invalid Email or Password");
//     }
// }
// function verifyemail(email,password)
// {
//     var filter= loginUserData.filter(function(elem){
//         return elem.Email==email && elem.Password==password;
//      });
//      if(filter.length>0)
//      {
//         return true;
//      }
//      else
//      {
//         return false;
//      }
// }













function chechUserData(){
    event.preventDefault();
    // let checkUser=JSON.parse(localStorage.getItem("Information")) || [] for array format
    let checkUser=JSON.parse(localStorage.getItem("Information")) 
    

    let checkEmail=document.getElementById("checkEmail_In").value;
    let checkPassword=document.getElementById("checkPassword_In").value;
    

    // newData=checkUser.filter(function(value){ same as line no 4

        if ((checkEmail=="") ) 
        {
            document.getElementById("emailError").innerText="Please enter a valid email address"
        }


        else if((checkPassword=="") || (checkUser.createPass!==checkPassword)){

            document.getElementById("passError").innerText="Please enter the same value again"
        }


        else if((document.getElementById("checkBox").checked!==true))
         {
             alert("Please click on check box")
                
         }
        
        else if ((checkUser.userEmail==checkEmail) && (checkUser.createPass==checkPassword)) 
        {
            alert("Sign In seccessfull")
            window.location.href="index.html"
            form.reset() 
        } 
        
    // });

    var obj={
        Email:document.querySelector("#email").value,
        Password:document.querySelector("#password").value
    }
    console.log(obj)
    // console.log(userdata);
    if(verifyemail(obj.Email,obj.Password)==true)
    {
        loginUserData.push(obj);
        localStorage.setItem("loggedUserData",JSON.stringify(loginUserData));
        alert("Login Sucessfully");
        window.location.href="index.html";
    }
    else
    {
         alert("Invalid Email or Password");
    }
}
function verifyemail(email,password)
{
    var filter= loginUserData.filter(function(elem){
        return elem.Email==email && elem.Password==password;
     });
     if(filter.length>0)
     {
        return true;
     }
     else
     {
        return false;
     }

}