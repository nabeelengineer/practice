btn=document.getElementById("form");
btn.onsubmit=function()
{ 
  var user=[];
  user[0]=document.getElementById("username").value;
  user[1]=document.getElementById("username").value;
  if(user[0]=="Nabeel")
  {
     if(user[1]=="1234")
     {
      window.alert("login Success");
      }
 else
 {
  window.alert("wrong password");
 }

 }
  else
 {
     window.alert("user not found");
 }

}