
function timedate(){
    var month_name = function(dt){
        month_list = [ "JANUARY", "FEBRUARY", "MARCH", "APRAIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ];
          return month_list[dt.getMonth()];
        };



        var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY',`SUNDAY`];
        var d = new Date();
        var dayName = days[d.getDay()];

var today = new Date();

 var date =dayName+"  "+(today.getDate())+","+" "+month_name(new Date);
 document.getElementById("time").innerHTML=`${date}    -`
 document.getElementById("tim").innerHTML=`${date}    -`
    

}
timedate()


function time(){
    var month_name = function(dt){
        month_list = [ "JANUARY", "FEBRUARY", "MARCH", "APRAIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ];
          return month_list[dt.getMonth()];
        };



        var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY',`SUNDAY`];
        var d = new Date();
        var dayName = days[d.getDay()+3];

var today = new Date();

 var date =(dayName)+"  "+(today.getDate())+","+" "+month_name(new Date);
 document.getElementById("nextime").innerHTML=date
 document.getElementById("next").innerHTML=date
    

}
time()
document.getElementById("check1st").addEventListener("click",function(){
    document.getElementById("sandy").innerText="SOME STORES MAY BE TEMPORARILY UNAVAILABLE."
    document.getElementById("sandy2").innerText="PLEASE BE AWARE THAT, ACCORDING TO THE LOCAL AUTHORITIES, YOU NEED TO BE FULLY VACCINATED (SECOND DOSE RECEIVED AT LEAST 14 DAYS AGO) TO ACCESS SOME OF OUR STORES."
    document.getElementById("sandy3").innerText="SEE STORES"
    document.getElementById("free").style.height="80px"
    document.getElementById("time").style.marginTop="-30px"
    
    document.getElementById("fr").style.marginTop="37px"
    // document.getElementById("home").style.marginTop="-120px"
      
    // document.getElementById("circle").style.backgroundColor="black"
})

document.getElementById("check").addEventListener("click",function(){
  document.getElementById("home1").innerText="FREE SHIPPING FOR ORDERS OVER ₹ 2,990"
  document.getElementById("home2").innerText="DELIVERY TIME FRAMES"
  document.getElementById("tr").style.marginTop="-58px"
  document.getElementById("hemobox").style.height="110px"
  
  document.getElementById("f").style.marginTop="-60px"
  document.getElementById("ph").style.position="fixed"
  
})

document.getElementById("cnt").addEventListener("click",function(){
  
  if((document.getElementById("check").checked==true ) && (document.getElementById("check1st").checked==true)
  ){
    alert("Click any one method for delivery")
    location.reload()
  }
   
  else if(document.getElementById("check").checked==true) {
    window.location.href="account.html"
  }
  else if(document.getElementById("check1st").checked==true) {
    window.location.href="account.html"
  }
  else{
    alert("Click on the Checkbox")
  }
 
})