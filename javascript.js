let equation = "Syntax Error";

function calculate() {
    let text = document.getElementById("text1").value;
    equation = eval(text);
    return console.log(equation);
}
let calculate_text = document.getElementById("text1");
let answer = document.getElementById("answer1");
const buttons = document.querySelectorAll("button");
let plus = 0;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id == "c") {
            calculate_text.value = "";
            answer.value = ""
            plus = 0;
            equation = "Syntax Error"
        } else if (button.id == "equal_btn") {
            plus += 1;
            if (plus > 1){
                answer.value = equation
                equation = "Syntax Error";
            } else {
            calculate_text.value += "="
            answer.value = equation;
            equation = "Syntax Error";
            }   
        } else if (button.id == "step") {
            let remove = calculate_text.value.slice(0, -1);
            calculate_text.value = remove;
            answer.value = "";
            plus = 0;
            equation = "Syntax Error"
        } else {
            if (plus >= 1){
              answer.value = ""
              calculate_text.value = ""
              calculate_text.value += button.id;  
              plus = 0;
              equation = "Syntax Error";
            } else {
                answer.value = ""
                calculate_text.value += button.id;  
            }
                
                }


    })

});
