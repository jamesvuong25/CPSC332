window.onload = function() {
    var label1 = document.getElementById("label1");
    var label2 = document.getElementById("label2");
    var label3 = document.getElementById("label3");
    var saveButton1 = document.getElementById("saveButton1");
    var saveButton2 = document.getElementById("saveButton2");
    var saveButton3 = document.getElementById("saveButton3");
}


function checkForm() {
    if (label1.value == "" || label2.value == "" || label3.value == "") 
    {
        window.alert("Please fill out AND save all entries before submitting!");
    }
}


