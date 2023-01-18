let split_list = "";
let first_Num = 0;
let second_num = 0;
let answer1 = [];
let rounded_division = 0;
let answer_text = document.querySelector("p");
let last_num_index = 0;
let text = document.getElementById("text1").value;

function calculate() {
    let text = document.getElementById("text1").value;
    if (operator == "*" && operator_counter == 1) {
        split_list = text.split("*");
        first_Num = Number(split_list[0]);
        second_num = Number(split_list[1]);
        answer1 = first_Num * second_num;
        answer_text.textContent = answer1;

    } else if (operator == "*" && operator_counter >= 2) {
        split_list = text.split("*")
        first_Num = Number(answer1);
        last_num_index = split_list.length - 1;
        second_num = Number(split_list[last_num_index]);
        answer1 = first_Num * second_num;
        answer_text.textContent = answer1;

    } else if (operator == "+" && operator_counter == 1) {
        split_list = text.split("+");
        first_Num = Number(split_list[0]);
        second_num = Number(split_list[1]);
        answer1 = first_Num + second_num;
        answer_text.textContent = answer1;

    } else if (operator == "+" && operator_counter >= 2) {
        split_list = text.split("+")
        first_Num = Number(answer1);
        last_num_index = split_list.length - 1;
        second_num = Number(split_list[last_num_index]);
        answer1 = first_Num + second_num;
        answer_text.textContent = answer1;

    } else if (operator == "/" && operator_counter == 1) {
        split_list = text.split("/");
        first_Num = Number(split_list[0]);
        second_num = Number(split_list[1]);
        answer1 = first_Num / second_num;
        rounded_division = answer1.toFixed(6)
        answer_text.textContent = rounded_division;

    } else if (operator == "/" && operator_counter >= 2) {
        split_list = text.split("/")
        first_Num = Number(answer1);
        last_num_index = split_list.length - 1;
        second_num = Number(split_list[last_num_index]);
        answer1 = first_Num / second_num;
        rounded_division = answer1.toFixed(6)
        answer_text.textContent = rounded_division;

    } else if (operator == "-" && operator_counter == 1) {
        split_list = text.split("-");
        first_Num = Number(split_list[0]);
        second_num = Number(split_list[1]);
        answer1 = first_Num - second_num;
        answer_text.textContent = answer1;

    } else if (operator == "-" && operator_counter >= 2) {
        split_list = text.split("-")
        first_Num = Number(answer1);
        last_num_index = split_list.length - 1;
        second_num = Number(split_list[last_num_index]);
        answer1 = first_Num - second_num;
        answer_text.textContent = answer1;


    }

}



let calculate_text = document.getElementById("text1");
const buttons = document.querySelectorAll("button");
let equal_sign_counter = 0;
let operator = "";
let operator_counter = 0;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id == "+") {
            operator = button.id;
            operator_counter += 1;
            calculate_text.value += button.id;
        } else if (button.id == "/") {
            operator_counter += 1;
            operator = button.id;
            calculate_text.value += button.id;
        } else if (button.id == "-") {
            operator_counter += 1;
            operator = button.id;
            calculate_text.value += button.id;
        } else if (button.id == "*") {
            operator_counter += 1;
            operator = button.id;
            calculate_text.value += button.id;
        } else if (button.id == "c") {
            calculate_text.value = "";
            answer_text.textContent = ""
            equal_sign_counter = 0;
            operator = "";
            answer1 = 0;
            operator_counter = 0;

        } else if (button.id == "equal_btn") {
            equal_sign_counter += 1;
            if (equal_sign_counter > 1) {
                operator = "";
                answer1 = 0;
                operator_counter = 0;
            } else {
                calculate_text.value += "="
                operator = "";
                answer1 = 0;
                operator_counter = 0;
            }
        } else {
            if (equal_sign_counter >= 1) {
                answer_text.textContent = ""
                calculate_text.value = ""
                calculate_text.value += button.id;
                equal_sign_counter = 0;
                answer1 = 0;

            } else {
                answer_text.textContent = ""
                calculate_text.value += button.id;
                calculate()
            }

        }


    })

});