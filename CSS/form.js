var frm=document.getElementById("form");
frm.onsubmit=function()
{
var user_text=document.getElementById("text").value;
var user_num=document.getElementById("num").value;
var result=document.getElementById("result");
var i;
for(i=1;i<=user_num;i++)
{
document.write(user_text+"<br>");
}
}