/*var gridContainerEl = document.getElementById("gridContainer");*/
var StartQuizBtnEl = document.getElementById("start-quiz");
var Button1El = document.getElementById("answer1");
var Button2El = document.getElementById("answer2");
var Button3El = document.getElementById("answer3");
var Button4El = document.getElementById("answer4");
var QuizTimer = 60; /*Quiz Time Left */
var mquestionsEl = document.getElementById("questions");
var mdivEl = document.getElementById("mainDiv");
var seeQuestionEl = document.createElement("questionDisplay"); // Question
var timeEl = document.getElementById("timeLeft");
var answerIndex = 0;
var questionIndex = 0;
var answerCorrectWrong = document.getElementById("answersWrongOrRight")
var answerCorrectWrongGrid = document.getElementById("answersWrongOrRightGrid")
var questEl = document.getElementById("questions");


/*********************************************************************************/
////////////// CUSTOM OBJECT AND OBJECT DISPLAY FOR QUIZ QUESTIONS ////////////////
/*********************************************************************************/



Button1El.style.display = "none";
Button2El.style.display = "none";
Button3El.style.display = "none";
Button4El.style.display = "none";
answerCorrectWrong.style.display = "none";

var questObj = {
  correct: {
    0: "What is 'Primitive Data'?",
    1: "What is an 'array'?",
    2: "What is a 'conditional statement'?",
    3: "What are 'loops' used for'?",
  
  }
};

var AnswerObj = {
  answers: {
    0 : {
      0: "Ancient data uncovered by Archaeologists",
      1: "Data that is not an object and has no value", // correct answer//
      2: "Object data that has no value",
      3: "Object data that has value"},
    
    1 : {
        0: "Designed to store data", // correct answer //
        1: "refers to our data at a specific point in time",
        2: "A type of web browser",
        3: "A type of loop"},
    
    2 : {
        0: "A placeholder; has no value",
        1: "primitive data",
        2: "evaluates data as not false",
        3: "Used to check on the state of your code"}, // correct answer //
    
    3 : {
        0: "A function expression",
        1: "Run the same code over again, each time with a different value", //Correct//
        2: "To generate random numbers",
        3: "Rollercoasters"},
  }
};

timeEl.textContent = QuizTimer;



/*********************************************************************************/
////////////////////// BUTTON EVENT LISTENERS /////////////////////////////////////
/*********************************************************************************/

Button1El.addEventListener("mouseover", function() {

  
  answerCorrectWrong.style.display='none';
 
  

 });

 Button2El.addEventListener("mouseover", function() {

  answerCorrectWrong.style.display='none';
  
  

 });

 Button3El.addEventListener("mouseover", function() {

  answerCorrectWrong.style.display='none';
  
 

 });

 Button4El.addEventListener("mouseover", function() {

  answerCorrectWrong.style.display='none';
  
  

 });

/********************************************************************************/
/////// START COUNTDOWN AND DISPLAY Q&A OBJECT INDEX /////////////////////////////
/********************************************************************************/


StartQuizBtnEl.addEventListener("click", function() {

    var countdownInt = setInterval(function() {
       
      
           seeQuestionEl.textContent = questObj.correct[questionIndex];

           seeQuestionEl.style.display = "";
           Button1El.style.display = "";
           Button2El.style.display = "";
           Button3El.style.display = "";
           Button4El.style.display = "";

           Button1El.textContent = AnswerObj.answers[answerIndex] [0];
           Button2El.textContent = AnswerObj.answers[answerIndex] [1];
           Button3El.textContent = AnswerObj.answers[answerIndex] [2];
           Button4El.textContent = AnswerObj.answers[answerIndex] [3];

           gridContainer.appendChild(seeQuestionEl);
           gridContainer.appendChild(Button1El);
           QuizTimer -= 1;
           timeEl.textContent = QuizTimer;

           
    

    Button1El.addEventListener("click", function() {
       
      
         if (questionDisplay.textContent === "What is 'Primitive Data'?" && Button1El.textContent === "Data that is not an object and has no value") {
         
          
          /*questionIndex = 3; incorrect assignment/ has no function *///
          answerIndex = 1;   ////Next questions pops up **/// 
          questionIndex = 1;
          answerCorrectWrong.style.display="";
          answerCorrectWrong.textContent="BAM! RIGHT";
          answerCorrectWrongGrid.appendChild(answerCorrectWrong);

          
              } else {
               
                  switch(Button1El.textContent) {
                    case "Ancient data uncovered by Archaeologists":
                    answerCorrectWrong.style.display="";
                    answerCorrectWrong.textContent = "NOPE!";

                    answerIndex = 0;
                    questionIndex = 0;
                    break;

                    case "Designed to store data":
                    answerCorrectWrong.style.display="";
                    answerCorrectWrong.textContent = "BAM! RIGHT!";
                    answerCorrectWrongGrid.appendChild(answerCorrectWrong);

                    answerIndex = 2; /** Switch to question 3 **/
                    questionIndex = 2;

                    Btn1El.style.display = 'none';
                    Btn2El.style.display = 'none';
                    Btn3El.style.display = 'none';
                    Btn4El.style.display = 'none';
                    answerCorrectWrong.style.display='none'; 
                    StartQuizBtnEl.style.display = 'none'; // Remove Start Quiz button.
                    questionDisplay.textContent = "You have finished the quiz!";
                    
                    clearInterval(countdownInt);
  
                   
                    break;

                    case "A placeholder; has no value":
                    answerCorrectWrong.style.display="";
                    answerCorrectWrong.textContent = "NOPE!";
    
                    answerIndex = 2;
                    questionIndex = 2;
                    break;

                    case "A function expression":
                    answerCorrectWrong.style.display="";
                    answerCorrectWrong.textContent = "NOPE!";
      
                    answerIndex = 3;
                    questionIndex = 3;
                     break;
                  }
                }
    });
        
             Button2El.addEventListener("click", function() {

               if (questionDisplay.textContent === "What is an 'array'?" && Button2El.textContent === "Designed to store data") {
    
  
                   answerIndex = 2;
                   questionIndex = 2;

                  answerCorrectWrong.style.display="";
                  answerCorrectWrong.textContent="BAM! RIGHT";
                  answerCorrectWrongGrid.appendChild(answerCorrectWrong);

                  Btn1El.style.display = 'none';
                  Btn2El.style.display = 'none';
                  Btn3El.style.display = 'none';
                  Btn4El.style.display = 'none';
                  answerCorrectWrong.style.display='none'; 
                  StartQuizBtnEl.style.display = 'none'; // Remove Start Quiz button.
                    //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                    questionDisplay.textContent = "You have finished the quiz!";
                    clearInterval(countdownInt);
              } else {
              
                 switch(Button2El.textContent) {

                 case "Data that is not an object and has no value": /*b2 q1*/
                 answerCorrectWrong.style.display="";
                 answerCorrectWrong.textContent = "BAM! RIGHT!";
                 answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                 answerIndex = 1; /** Switch to question 2 **/
                 questionIndex = 1;
                 break;

                 case "refers to our data at a specific point in time": /* b2 q2*/
                  answerCorrectWrong.style.display="";
                  answerCorrectWrong.textContent = "NOPE!";
                  answerIndex = 1;
                  questionIndex = 1;
                  break;

                  case "primitive data": /* b2 q3 */
                  answerCorrectWrong.style.display="";
                  answerCorrectWrong.textContent = "NOPE!";
                  answerIndex = 2;
                  questionIndex = 2;
                  break;

                  case "Used to check on the state of your code": /* b2 q4 */
                  answerCorrectWrong.style.display="";
                  answerCorrectWrong.textContent = "BAM! RIGHT!";
                  answerCorrectWrongGrid.appendChild(answerCorrectWrong);
                  answerIndex = 3;

                  Btn1El.style.display = 'none';
                  Btn2El.style.display = 'none';
                  Btn3El.style.display = 'none';
                  Btn4El.style.display = 'none';
                  answerCorrectWrong.style.display='none'; 
                  StartQuizBtnEl.style.display = 'none'; // Remove Start Quiz button.
                    //answerCorrectWrong.style.display=""; // Enables text content on correct and wrong answers
                    questionDisplay.textContent = "You have finished the quiz!";
                    clearInterval(countdownInt);
                  questionIndex = 3;
                  break;
                 }
               }
            });
    
       
          Button3El.addEventListener("click", function() {

          if (questionDisplay.textContent === "What is a 'conditional statement'?" && Button3El.textContent === "Used to check on the state of your code") {
          answerIndex = 3;
           questionIndex = 3;
          answerCorrectWrong.style.display="";
          answerCorrectWrong.textContent="BAM! RIGHT";
         answerCorrectWrongGrid.appendChild(answerCorrectWrong);

        } else {
              
          switch(Button3El.textContent) {
            case "Object data that has no value":
            answerCorrectWrong.style.display="";
            answerCorrectWrong.textContent = "NOPE!";
            answerIndex = 0;
            questionIndex = 0;
            break;

            case "A type of web browser":
            answerCorrectWrong.style.display="";
            answerCorrectWrong.textContent = "NOPE!";
            answerIndex = 1;
            questionIndex = 1;
            break;

            case "evaluates data as not false":
            answerCorrectWrong.style.display="";
            answerCorrectWrong.textContent = "NOPE!";
            answerIndex = 2;
            questionIndex = 2;
            break;

            case "To generate random numbers":
            answerCorrectWrong.style.display="";
            answerCorrectWrong.textContent = "NOPE!";
            answerIndex = 3;
            questionIndex = 3;
            break;
     
        }
        }
    });
    
      
    
    
    
     Button4El.addEventListener("click", function() {
    
      
    
           if (questionDisplay.textContent === "What are 'loops' used for?" && Button4El.textContent === "Run the same code over again, each time with a different value") {
              answerIndex = 3;
              questionIndex = 3;

              answerCorrectWrong.style.display="";
              answerCorrectWrong.textContent="BAM! RIGHT";
              answerCorrectWrongGrid.appendChild(answerCorrectWrong);

            } else {
        
                switch(Button4El.textContent) {
                case "Object data that has value":
                answerCorrectWrong.style.display="";
                answerCorrectWrong.textContent = "NOPE!";
                answerIndex = 0;
                questionIndex = 0;
                break;

                case "A type of loop":
                answerCorrectWrong.style.display="";
                answerCorrectWrong.textContent = "NOPE!";
                answerIndex = 1;
                questionIndex = 1;
                break;

                case "Used to check on the state of your code":
                answerCorrectWrong.style.display="";
                answerCorrectWrong.textContent = "BAM! RIGHT!";
                answerIndex = 3;
                questionIndex = 3;
                break;

                case "Rollercoasters":
                 answerCorrectWrong.style.display="";
                 answerCorrectWrong.textContent = "NOPE!";
                 answerIndex = 3;
                 questionIndex = 3;
                 break;
              
                
              }
          }
       });
      
      
      
       /*else if(timeLeft === 0){

       
        questionNumber = 0; 
        answerNumber = 0;  
        Btn1El.style.display = 'none';
        Btn2El.style.display = 'none';
        Btn3El.style.display = 'none';
        Btn4El.style.display = 'none';
        answerCorrectWrong.style.display='none'; 
        answerCorrectWrong.style.display=""; 
        questionDisplay.textContent = "Game Over!. Try again by clicking on \"Click Start Quiz\"";
        startQuizBtnEl.style.display = "";
        clearInterval(countdownInt);*/

      }
    , 1000)

});
      
     




   ////MY FIRST LOOP! /////////*
   /*var QuizStart = StartQuizBtnEl;
       QuizStart = true;
   
   for ([QuizStart]; ["click"]; [prompt("OK")]){

   }*/
   
       

   

/*research event listeners and the .addEventListener, 

research event

  why does the.add EventListener require two arguments to pass through it?/
  does something qualify as an argument ONLY if it passes through parenthesis, or can
  a local variable also be considered an argument? (Maybe not, it is a variable, not
  an argument)*/


       




  




