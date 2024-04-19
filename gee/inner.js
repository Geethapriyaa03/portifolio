document.addEventListener("DOMContentLoaded",function())
{
    let a=document.querySelectorAll("h1.dom");
a.innerHTML="my new heading";
a.style.backgroundColor = "red";
a.style.color= "#0080ff"
a.style.cssText ="font-size:24px ; text-align: center";

//for (let i=0,len=a.length; i<len; ++i)
a.forEach(function(a)
{
    a.style.cssText="color:blue;"
})
{
    //a[i].style.cssText += "color: blue";
}
}