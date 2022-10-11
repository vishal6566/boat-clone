var img=document.querySelector("#maha");
   
   var buttons=document.querySelectorAll("button");
   var imgNum=0;
   var imgArry=[
       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_2000x.png?v=1655534702",
       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web34_0dc3ef24-e76e-4587-b21d-948137c138e3_2000x.jpg?v=1654670966",
       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/135-WEB_2000x.jpg?v=1655189587",
       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/desktop-banner-1_2000x.png?v=1655447552",
   ];
   buttons[0].addEventListener("click",function(){
       
       if (imgNum==0)
       {
           imgNum=imgArry.length-1;
       }
       else
       {
           imgNum--;
       }
       img.src=imgArry[imgNum];
   })
  
   buttons[1].addEventListener("click",function(){
      
      
      if (imgNum===imgArry.length-1)
      {
          imgNum=0;
         
      }
      else
      {
          imgNum++;
      }
     
      img.src=imgArry[imgNum];

   
  });


//   **********************NEW LAUNCHES******************************************************************

    document.getElementById("btn3")
    .addEventListener("click",function(){
    var imgx=document.querySelector(".Mg")
    imgx.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/3_3_94fccbae-856f-48cb-97a1-2e7533308694.png?v=1655449534";
    })

    document.getElementById("btn4")
    .addEventListener("click",function(){
    var imgx=document.querySelector(".Mg")
    imgx.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_2_2f34cdff-cbad-4ad8-b3d2-696c8f6f7447.png?v=1655449534";
    })

    document.getElementById("btn5")
    .addEventListener("click",function(){
    var imgx=document.querySelector(".Mg")
    imgx.src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1_4_f1b2cb15-4a1a-487c-9465-4aed6b4f2530.png?v=1655449535";
    })
    