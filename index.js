const heading=document.getElementById("heading");
const btn=document.getElementById("btn");
const box1=document.getElementById("box1");
const input=document.querySelector("input");

// we can give event listener to anyone

btn.addEventListener("click",() => {
  console.log("clicked");
  box1.style.backgroundColor='red';
  box1.classList.add("classForDiv");
});

function f1 (){
    btn.style.transform="scale(1.2)";
  }
box1.addEventListener("mouseover",f1);

box1.addEventListener("mouseout",()=>{
    btn.style.transform="";
  });

  // preventDefault() is used to prevent the defaults things like opening of contextmenu on right click

  box1.addEventListener("contextmenu",(e)=>{
     e.preventDefault();
     btn.style.filter="blur(10px)";
  });

  input.addEventListener("change",(e)=>{
    console.log(e.target.value);
  });

  addEventListener("click",()=>{
     box1.removeEventListener('mouseover',f1);
  });

