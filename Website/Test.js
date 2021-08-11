console.log("Hello Friend");
var mainArray = [
  {
    questionSet: 1,
    display: true,
    questions: [
      {
        question: "What Age Group do you fall under ?",
        options: ["Under 18", "18 - 30", "30 - 40", "40+"],
        value: [0, 1, 3, 5],
      },
      {
        question:
          "Have you been diagnosed Covid positive recently( In 3 months or So)?",
        options: ["Yes", "No"],
        value: [5, 0],
      },
      {
        question:
          "Are you experiencing fever, cough, chest pain, shortness of breath ?",
        options: ["Yes", "No"],
        value: [5, 0],
      },
      {
        question: "Do you have any allergies?",
        options: ["Yes", "No"],
        value: [1, 0],
      },
    ],
  },
  {
    questionSet: 2,
    display: false,
    questions: [
      {
        question: "Do you frequently feel Nausea and vomiting ?",
        options: ["Yes", "No"],
        value: [2, 0],
      },
      {
        question: "Are you suffering from diabetes ?",
        options: ["Yes", "No"],
        value: [5, 0],
      },
      {
        question:
          "Are you taking any kind of steroids, immunosuppressants or receiving anticancer treatment due to some of your other medical conditions for an extended period of time ?",
        options: ["Yes", "No"],
        value: [5, 0],
      },
      {
        question:
          "Are you suffering from any other serious medical condition ?(Like Cancer,HIV etc)",
        options: ["Yes", "No"],
        value: [1, 0],
      },
    ],
  },
  {
    questionSet: 3,
    display: false,
    questions: [
      {
        question:
          "Are you experiencing any of the symptoms like acute headaches, memory loss, inflammation around the forehead and redness ?        ",
        options: ["Yes", "No"],
        value: [3, 0],
      },
      {
        question:
          "Have you been experiencing nosebleeds, nasal blockage, numbness or loss of sensation across parts of your face ?",
        options: ["Frequently", "Rarely", "Never"],
        value: [5, 3, 0],
      },
      {
        question:
          " Are you experiencing any kind of Swelling and Inflammation anywhere on body,on cheeks and eyes?",
        options: ["Yes", "No"],
        value: [2, 0],
      },
      {
        question:
          "Are you having some problem with your vision like blurry or double vision, redness, irritation or pain in the eye recently?",
        options: ["Yes", "No"],
        value: [2, 0],
      },
      {
        question:
          "Do you observe any Black lesions on the top of the nose or the inside of the mouth ?",
        options: ["Yes", "No"],
        value: [5, 0],
      },
    ],
  },
];
var score = 0;
var total = 0;
var formElem = document.getElementById("survey-form");
var submitbutton = document.getElementById("submitBtn");


function createForm(inputquestions, questionNum) {
  var questionDiv = document.createElement("div");
  questionDiv.className = "questions-class";
  var questionTitle = document.createElement("h3");
  questionTitle.innerHTML = questionNum + "]" + inputquestions.question;
  questionDiv.appendChild(questionTitle);

  var optionList = document.createElement("div");
  optionList.className = "options";
  for (let k = 0; k < inputquestions.options.length; k++) {
    var option = document.createElement("input");
    option.type = "radio";
    option.name = questionNum;
    option.id = inputquestions.options[k];
    option.value = inputquestions.value[k];
    optionList.appendChild(option);
    var optionLabel = document.createElement("label");
    // optionLabel.htmlFor = option.id;
    optionLabel.innerHTML = option.id;
    optionList.appendChild(optionLabel);
    var brk = document.createElement("br");
    optionList.appendChild(brk);
    questionDiv.appendChild(optionList);
  }
  var borderBottom = document.createElement("div");
  borderBottom.className = "border";
  optionList.appendChild(borderBottom);
  questionDiv.appendChild(optionList);
  formElem.appendChild(questionDiv);
  return questionDiv;
}

//first call
let questionNum = 1;
for (let i = 0; i < mainArray.length; i++) {
  var display = mainArray[i].display;

  for (let j = 0; j < mainArray[i].questions.length; j++) {
    var mainDiv = createForm(mainArray[i].questions[j], questionNum);
    if (display) {
      mainDiv.style.display = "block";
    } else {
      mainDiv.style.display = "none";
    }
    questionNum++;
    console.log(mainDiv);
  }
}

var counter = 1;
function quesdisplay(quesSet, position) {
  if (counter == quesSet) {
    mainArray[position].display = true;
  } else {
    mainArray[position].display = false;
  }
}

questionNum = 1;
let currentQuestion = 0;
//Condition For Questions

function checkscore(counter, score) {
  var submit = false;
  if (counter == 1 && score < 7) {
    submit = true;
  } else if (counter == 2 && score < 20) {
    submit = true;
  } else if (counter == 3) {
    submit = true;
  }
  return submit;
}

//submitBtn onclick
submitBtn.onclick = function () {
  var resultDiv = document.createElement("div");
resultDiv.className = "result-div"
  var resultPara = document.createElement("p");
  if (counter == 1 && score < 7) {
    var totalscore = document.createElement("h3");
    totalscore.innerHTML = score + "/50";
    resultDiv.appendChild(totalscore);
    resultPara.innerHTML = "You are Safe From black fungus";
    resultDiv.appendChild(resultPara);
    submitbutton.style.display = "none";
  }

  if (counter == 2 && score < 20) {
    var totalscore = document.createElement("h3");
    totalscore.innerHTML = score + "/50";
    resultDiv.appendChild(totalscore);
    resultPara.innerHTML = "You are in Risk of Black Fungus";
    resultDiv.appendChild(resultPara);
    submitbutton.style.display = "none";
  }
else if (counter==3){
  var totalscore = document.createElement("h3");
    totalscore.innerHTML = score + "/50";
    resultDiv.appendChild(totalscore);
    resultPara.innerHTML = "You probably have Black Fungus";
    resultDiv.appendChild(resultPara);
    submitbutton.style.display = "none";
}


  formElem.innerHTML = "";
  formElem.appendChild(resultDiv);
};

//nextBtn onclick
nextBtn.onclick = function () {
  let flag = false;

//Checking options
  for (var k = 0; k < mainArray[counter - 1].questions.length; k++) {
    if (
      document.querySelector(`input[name = "${currentQuestion + 1}"]:checked`)
    ) {
      let q = document.querySelector(
        `input[name = "${currentQuestion + 1}"]:checked`
      ).value;
      score += Number(q);
      console.log("question" + Number(currentQuestion + 1) + "=" + q);
      currentQuestion++;
    } else {
      alert("Please select all options");
      flag = true;
      break;
    }
  }
  // if (counter == 3) {
  //   return;
  // }

  if (!flag) {
    // currentQuestion += mainArray[counter - 1].questions.length;

    //check condition
    var checkscored = checkscore(counter, score);
    if (checkscored) {
      formElem.innerHTML = "";
      var nextbutton = document.getElementById("nextBtn");
      nextbutton.style.display = "none";
      
      submitbutton.style.display = "block";
      return;
    }
    counter++;
    for (let q = 0; q < mainArray.length; q++) {
      quesdisplay(mainArray[q].questionSet, q);
    }

    formElem.innerHTML = "";

    //second call
    for (let i = 0; i < mainArray.length; i++) {
      var display = mainArray[i].display;

      for (let j = 0; j < mainArray[i].questions.length; j++) {
        var mainDiv = createForm(mainArray[i].questions[j], questionNum);
        if (display) {
          mainDiv.style.display = "block";
        } else {
          mainDiv.style.display = "none";
        }
        questionNum++;
      }
    }
    questionNum = 1;
  }
  console.log("counter" + counter);
  console.log(score);
};
