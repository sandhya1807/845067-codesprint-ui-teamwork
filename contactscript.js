// JavaScript source code
function check() {
    var a = document.myForm.name.value;
    if (a == "") {
        alert("Please Enter Your Name");
        document.myForm.name.focus();
        return false;
    }
    if (!isNaN(a)) {
        alert("Please Enter Only Characters for name");
        document.myForm.name.select();
        return false;
    }
    var b = document.myForm.email.value;
    if (b == "") {
        alert("Please Enter Your email");
        document.myForm.email.focus();
        return false;
    }
    if (!isNaN(b)) {
        alert("Please Enter Only Characters in mail");
        document.myForm.email.select();
        return false;
    }
    var c = document.myForm.subject.value;
    if (c == "") {
        alert("Please Enter Your message");
        document.myForm.suject.focus();
        return false;
    }
    if (!isNaN(c)) {
        alert("Please Enter Only Characters for message");
        document.myForm.subject.select();
        return false;
    }
    alert("Your Form is submited sucessfully");
}


