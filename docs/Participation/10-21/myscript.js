window.onload = function() {
    var label1 = document.getElementById("label1");
    var label2 = document.getElementById("label2");
    var label3 = document.getElementById("label3");
    var saveButton1 = document.getElementById("saveButton1");
    var saveButton2 = document.getElementById("saveButton2");
    var saveButton3 = document.getElementById("saveButton3");
}


function checkSubmission() {
    if (label1.value == "" || label2.value == "" || label3.value == "") 
    {
        window.alert("Please fill out AND save all entries before submitting!");
    }
}

function saveData() {
    sessionStorage.setItem("label1", label1.value);
    sessionStorage.setItem("label2", label2.value);
    sessionStorage.setItem("label3", label3.value);
    
    //changing button text to let user know data has been saved
    saveButton1.innerText = "Data Saved";
    saveButton2.innerText = "Data Saved";
    saveButton3.innerText = "Data Saved";
}

function checkSaveData() {
    if (label1.value == "" || label2.value == "" || label3.value == "") 
    {
        window.alert("2 Please fill out all entries before submitting!");
    }
}

function clearLabel1() {
    sessionStorage.removeItem("label1");
    label1.value = "";
}

function clearLabel2() {
    sessionStorage.removeItem("label2");
    label2.value = "";
}

function clearLabel3() {
    sessionStorage.removeItem("label3");
    label3.value = "";
}
