var formtag=document.querySelector("form");
formtag.addEventListener("submit",myfunc);
var userdata=JSON.parse(localStorage.getItem("userdetails"))||[];
function myfunc(event)
{
    event.preventDefault();
    var detail=document.querySelector("#email").value;
    if(verifyemail(detail)==true)
    {
        alert("An e-mail has been sent to your address with instructions to recover your password.");
        window.location.href="Login.html"
    }
    else
    {
         alert("Account not found");
    }
    
}    
function verifyemail(email)
{
    var filter= userdata.filter(function(elem){
        return elem.Email==email
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