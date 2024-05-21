function showNumber(value){
   document.getElementById("sum").innerText += value
}
function deletelast(){
   let deletelasted=document.getElementById("sum").innerText
   document.getElementById("sum").innerHTML=deletelasted.slice(0,-1)
}
function remove(){
   document.getElementById("sum").innerText=""
}
function calculate(){
   let currentdisplay=document.getElementById("sum").innerText;
   try{
      let res =eval(currentdisplay);
      document.getElementById("sum").innerText=res;
   }
   catch{
      document.getElementById("sum").innerText="error";
   }
}

let a = math.ra
