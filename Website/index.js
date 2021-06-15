var btn = document.getElementById("Example");
console.log("hi");
btn.onclick = function () {
  //e.preventDefault();
  
   if(btn.style.color == "blue"){
    btn.style.color = "red";
   }
  else {btn.style.color = "red";
  }}
