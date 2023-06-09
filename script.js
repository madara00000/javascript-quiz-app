
//adding the questions and answers 
const questions = [

    {

        question:"What does HTML stand for?",
        answers: [
            { Text: "Hypertext Markup Language", correct: true},
            { Text: "Hyperlink Text Markup Language", correct: false },
            { Text: " Hypermedia Text Markup Language", correct: false},
            { Text: "High Tech Markup Language", correct: false}, 
        ]
    },
     {

        question:"What is the purpose of a DOCTYPE declaration in HTML?",
        answers: [
            { Text: " It specifies the color scheme for the web page", correct: false},
            { Text: "It specifies the version of HTML that the web page is using", correct: true},
            { Text: "It specifies the font family for the web page", correct: false},
            { Text: "It specifies the layout and positioning of elements on the web page", correct: false}, 
        ]
    },
    {

        question:"What is the difference between HTML and CSS?",
        answers: [
            { Text: "HTML is used for styling and layout, while CSS is used for content structure", correct: false},
            { Text: "HTML is used for creating forms, while CSS is used for animation effects", correct:false },
            { Text: "HTML is used for structuring content, while CSS is used for styling and layout", correct:true },
            { Text: "HTML and CSS have the same purpose and are interchangeable", correct: false}, 
        ]
    },
    {

        question:"What is the box model in CSS?",
        answers: [
            { Text: " It is a way of representing elements in CSS as circular shapes", correct: false},
            { Text: "It is a way of representing elements in CSS as rectangular boxes that include content, padding, borders, and margins", correct: true},
            { Text: " It is a way of representing elements in CSS as triangles", correct: false},
            { Text: "It is a way of representing elements in CSS as hexagons", correct: false}, 
        ]
    },
    {

        question:"What is the difference between inline and block elements in HTML?",
        answers: [
            { Text: "Inline elements are displayed inline with the text, while block elements take up the full width of the page and create a new line", correct:true },
            { Text: "Inline elements take up the full width of the page and create a new line, while block elements are displayed inline with the text", correct: false},
            { Text: "Inline and block elements have the same display behavior", correct: false},
            { Text: "Inline and block elements are used interchangeably in HTML", correct: false}, 
        ]
    },
    {

        question:"What is the purpose of the (alt) attribute in an HTML image tag?",
        answers: [
            { Text: "It specifies the URL of the image", correct: false},
            { Text: " It provides alternative text for the image that can be read by screen readers and other assistive technologies", correct: true},
            { Text: " It specifies the width and height of the image", correct: false},
            { Text: " It specifies the alignment of the image", correct: false}, 
        ]
    },
    
    {

        question: "What is the difference between a class and an ID in CSS?",
        answers: [
            { Text: "A class can only be used on one element, while an ID can be used on multiple elements", correct: false},
            { Text: "A class can be used on multiple elements, while an ID can only be used on one element", correct: true},
            { Text: "A class and an ID have the same functionality in CSS", correct: false},
            { Text: "A class and an ID are not used in CSS", correct: false}, 
        ]
    },
    {

        question:"What is a CSS selector?",
        answers: [
            { Text: " It is used to target and apply styles to specific elements on a web page", correct:true },
            { Text: "It is used to add images to a web page", correct:false },
            { Text: " It is used to create animations on a web page", correct: false},
            { Text: " It is used to create interactive forms on a web page", correct: false}, 
        ]
    },
    {

        question:"Which of the following is NOT a valid color keyword in CSS?",
        answers: [
            { Text: "Red", correct: false},
            { Text: "Blue", correct: false},
            { Text: "Purple", correct: true },
            { Text: "Magenta", correct: false}, 
        ]
    },
    {

        question:"What is the purpose of the (head) element in an HTML document?",
        answers: [
            { Text: "It contains the visible content of the web page", correct: false},
            { Text: "It contains metadata about the web page, such as the title, author, and keywords", correct: true},
            { Text: "It defines the layout and positioning of elements on the web page", correct: false},
            { Text: "It defines the structure and organization of the web page", correct: false}, 
        ]
    },
    {

        question:"Which HTML tag is used to create a hyperlink?",
        answers: [
            { Text: "<link>", correct: false},
            { Text: "<a>", correct: true},
            { Text: "<img>", correct: false},
            { Text: "<h1>", correct: false}, 
        ]
    },
    {

        question:"What is the purpose of the (float) property in CSS?",
        answers: [
            { Text: "It specifies the font family for an element", correct: false},
            { Text: "It specifies the background color of an element", correct:false },
            { Text: "It specifies the position of an element in relation to the page", correct: false},
            { Text: " It specifies the horizontal alignment of an element", correct:true }, 
        ]
    },
    {

        question:"Which CSS property is used to change the text color of an element?",
        answers: [
            { Text: "font-size", correct: false},
            { Text: "background-color", correct:false },
            { Text: "text-color", correct: false},
            { Text: "color", correct:true }, 
        ]
    },
    {

        question:"What is the purpose of the (padding) property in CSS?",
        answers: [
            { Text: "It adds space between the border of an element and its content", correct:true },
            { Text: " It specifies the background color of an element", correct:false },
            { Text: "It defines the position of an element on the page", correct: false},
            { Text: "It specifies the size of an element", correct: false}, 
        ]
    },
    {

        question:"Which of the following HTML tags is used to create a table?",
        answers: [
            { Text: "<table>", correct:true },
            { Text: "<div>", correct: false},
            { Text: "<p>", correct: false},
            { Text: "<span>", correct: false}, 
        ]
    },
    {

        question:"What is the purpose of the (margin) property in CSS?",
        answers: [
            { Text: " It adds space between the border of an element and its content", correct: false},
            { Text: "It specifies the background color of an element", correct: false},
            { Text: "It defines the position of an element on the page", correct: false},
            { Text: " It adds space between the border of an element and the next element", correct:true }, 
        ]
    },
    {

        question:"Which CSS property is used to change the font size of an element?",
        answers: [
            { Text: "font-size", correct:true },
            { Text: "text-size", correct: false},
            { Text: "size", correct: false},
            { Text: " font-family", correct: false}, 
        ]
    },

    {

        question:"Which HTML tag is used to create a list with bullet points?",
        answers: [
            { Text: "<ul>", correct:true },
            { Text: "<li>", correct: false},
            { Text: "<ol>", correct: false},
            { Text: "<dl>", correct: false}, 
        ]
    },



    {

        question:"What is the purpose of the (position) property in CSS?",
        answers: [
            { Text: " It specifies the size of an element", correct: false},
            { Text: " It defines the color of an element", correct: false},
            { Text: "It defines the layout and positioning of elements on the web page", correct:true },
            { Text: "It specifies the font family for an element", correct: false}, 
        ]
    },



    {

        question:"Which of the following is the correct way to add a CSS file to an HTML document?",
        answers: [
            { Text: "ans1", correct: false},
            { Text: "ans2", correct: true},
            { Text: "ans3", correct: false},
            { Text: "ans4", correct: false}, 
        ]
    },

    {

        question:"What is the purpose of the (display) property in CSS?",
        answers: [
            { Text: "It specifies the color of an element", correct: false},
            { Text: " It defines the layout and positioning of elements on the web page", correct: true},
            { Text: "It specifies the font family for an element", correct: false},
            { Text: " It defines the size of an element", correct: false}, 
        ]
    },

    {

        question:"Which HTML tag is used to create a header for a section of a web page?",
        answers: [
            { Text: "<header>", correct: false},
            { Text: "<h1>", correct: true},
            { Text: "<nav>", correct: false},
            { Text: "<section>", correct: false}, 
        ]
    },

    {

        question:"Which CSS property is used to set the background color of an element?",
        answers: [
            { Text: "background-image", correct: false},
            { Text: " background-color", correct: true},
            { Text: "color", correct: false},
            { Text: "text-color", correct: false}, 
        ]
    },

    {

        question:"What is the purpose of the (border) property in CSS?",
        answers: [
            { Text: " It adds space between the border of an element and its content", correct: false},
            { Text: "It specifies the background color of an element", correct: false},
            { Text: " It defines the position of an element on the page", correct: false},
            { Text: "It adds a border around an element", correct:true }, 
        ]
    }

];

const questionelement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const  nextButton = document.getElementById("next-btn");

let currentQuestionindex = 0 ;
let score = 0 ;
 
function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
//resetstate is to reset the previous and next button

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionelement.innerHTML = questionNo + "." + currentQuestion.question;


//next function is to display the Text from the answers in their buttons and to display that button inside the div

    currentQuestion.answers.forEach(
        answer => { 

          const button = document.createElement("button");
          button.innerHTML = answer.Text;
          button.classList.add("btn");
          answerButton.appendChild(button);

          if(answer.correct){
            button.dataset.correct = answer.correct;
          }
          button.addEventListener("click", selectAnswer);




    })
}

//defining the resetstate function
function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }

}


/*defining the select answer function :::

  it will check the selected btn dataset (the answer chosen)
 if its correct it will add the classname correct 
 if not it'll add the classname incorrect
 andit will increase the score
  */
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct ==="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if( button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    
    });
    nextButton.style.display = "block"; 

}


function showscore(){
    resetState();
    questionelement.innerHTML = ` You have scored ${ score } out of ${ questions.length } ! `;
    nextButton.innerHTML = "play again";
    nextButton.style.display ="block";
}


function handleNextBtn(){
    currentQuestionindex++;
    if (currentQuestionindex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}






/*now we're gonna add the next btn function
it will check the current index 
if its less than the question length it'll run the handelnextbtn function*/ 


nextButton.addEventListener("click", () => {
    if (currentQuestionindex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

startQuiz();