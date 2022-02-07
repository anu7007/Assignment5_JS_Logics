function checkResult() {
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var name = document.getElementById("name").value;
    if (age && weight && name) {
        if (age >= 5 && age < 21) {
            display(age, weight, name);
        } else {
            document.getElementById("result").innerHTML =
                "Please enter age in the range 5-20";
        }
    } else {
        document.getElementById("result").innerHTML = "Please fill all the fields";
    }
}

// function to display result
function display(age, weight, name) {
    var res = validateForm(age, weight);
    if (res !== "perfect") {
        res += " at the age of " + age;
    }
    document.getElementById("result").innerHTML =
        "Hello " + name + " !!! Your weight is " + res;
}

// function to compare age
function validateForm(age, weight) {
    if (age <= 7) {
        return weightCheck(weight, 15, 20);
    } else if (age <= 10) {
        return weightCheck(weight, 21, 25);
    } else if (age <= 15) {
        return weightCheck(weight, 26, 30);
    } else {
        return weightCheck(weight, 31, 40);
    }

    // function to check weight
    function weightCheck(weight, minWeight, maxWeight) {
        if (weight < minWeight) {
            return `less than recommended value of ${minWeight}`;
        } else if (weight > maxWeight) {
            return `greater than recommended value of ${maxWeight}`;
        } else {
            return "perfect";
        }
    }
}