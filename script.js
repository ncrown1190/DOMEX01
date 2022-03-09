//console.log("hi");
// create a function named "main"
 const main = () => {
     document.querySelector("#grow-me").classList.add("big");
     //>>>>>>> 2.Remove the "big" class from the "shrink-me" paragraph.
     document.querySelector("#shrink-me").classList.remove("big");

     //>>>>>> 3.Find all the <li>s and log their text content to the console
    //  const lis = document.querySelector("ol").querySelectorAll("li");
    
    //  // Loop through the NodeList object. 
    //  for (let i = 0; i <= lis.length; i++) {
    //      console.log (lis[i].innerText);
    //  }
     //3.
     document.querySelectorAll("li").forEach(function(list){
         console.log(list.innerText);
     })
     // >>>>>> 4. Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
     const link = document.querySelector(".link");
     link.setAttribute("href", "https://www.example.com");
     link.textContent= "somewhere";

     //>>>>>>>>> 5. Set the "display" CSS property of the "hide-me" paragraph to "none"
     const p = document.querySelector("#hide-me");
     p.style.display = "none";

     //>>>>>>>>  6. Set the "display" CSS property of the "show-me" paragraph to "block".

     const showMe = document.querySelector("#show-me");
     showMe.style.display = "block";
    //>>>>>>>> 7. Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!"
     let inp = document.querySelector("#name").value;
     //document.querySelector("h1").innerHTML = inp;
     let h =document.querySelector("h1");

    //  textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements. textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements

     h.textContent += inp;
     //h.innerText += `${inp}!`;
     //Input.reset();
 }
/*
 //console.log(Math.round(-21.72)); //-22
 "use strict";
function logThis() {
  this.desc="logger";
  console.log(this);
}

new logThis();
for (var i=1; i<=4; i++) { (function(j) { setTimeout(function(){ console.log(j); }, j*1000); })(i) }   // returns
 

for (var i=1; i<=4; i++){
    setTimeout(function(){
        console.log(i);
    }, i*10000);
   }     //return only 5
   */
 
 
 
 

 
 

 
 

 





	