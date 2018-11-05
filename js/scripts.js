// Business Logic
function randomNumber(){
  return Math.floor(Math.random()*10 +1);
}

// User Interface Logic
$(document).ready(function(){
  console.log(randomNumber());
});
