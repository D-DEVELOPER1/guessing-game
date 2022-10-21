//declear variable range
//declear variable prompt


function userInput (){
    let username = prompt("kindly tell us your username: ");
    alert("hello" + " " + username);
    let userinput = prompt("predict the generated number between the given range: ");
      let number = Math.floor(Math.random() * 3);
    const score = 0;
  
      if(userinput === number){
       score + 1;
       alert("you are through to stage two")
      }else{
        score;
       alert("gave over")
      }
      console.log(username);
    }
    userInput();
  