function form_valid() {
  //   let fname = document.form1.fname.value;
  /*let fname = document.getElementById("fname").value;
  if (fname == "") {
    document.getElementById("fmsg").innerHTML = "Enter name";
    return false;
  } else if (!isNaN(fname)) {
    document.getElementById("fmsg").innerHTML = "Digits not allowed";
    return false;
  }

  //   let male = document.form1.gen[0].checked;
  //   let female = document.form1.gen[1].checked;

  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  if (male == false && female == false) {
    document.getElementById("gmsg").innerHTML = "Select Gender";
    return false;
  }

  //   let c1 = document.form1.c1.checked;

  let chk1 = document.getElementById("chk1").checked;
  let chk2 = document.getElementById("chk2").checked;
  let chk3 = document.getElementById("chk3").checked;
  if (chk1 == false && chk2 == false && chk3 == false) {
    document.getElementById("cmsg").innerHTML = "Select Qualification";
    return false;
  }
  let city = document.getElementById("city").value;
  if (city == -1) {
    document.getElementById("citymsg").innerHTML = "select city";
    return false;
  }

  let mail = document.getElementById("mail").value;
  if (mail == "") {
    document.getElementById("mailmsg").innerHTML = "Enter Mail";
    return false;
  } else if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return true;
  } else {
    document.getElementById("mailmsg").innerHTML = "Enter proper email id";
    return false;
  }*/

  var mno = document.getElementById("mno").value;
  if (mno == "") {
    document.getElementById("mmsg").innerHTML = "enter number";
    return false;
  } else if (isNaN(mno)) {
    document.getElementById("mmsg").innerHTML = "alphabet not allowed";
    return false;
  } else if (mno.length < 10) {
    document.getElementById("mmsg").innerHTML = "Enter proper number";
    return false;
  }

  const sec = document.getElementById("sec").value;
  if (sec == "") {
    document.getElementById("pmsg").innerHTML = "Enter Password";
    return false;
  } else if (
    sec.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,10}$/
    )
  ) {
    return true;
  } else {
    document.getElementById("pmsg").innerHTML =
      "Characher must be in upparcase, lowercase,spacial character and between 8 to 10 chatacter.";
    return false;
  }
}

function hide_show() {
  let sec = document.getElementById("sec");
  let sec1 = document.getElementById("sec1");

  if (sec.type == "password" && sec1.type == "password") {
    sec.type = "text";
    sec1.type = "text";
  } else {
    sec.type = "password";
    sec1.type = "password";
  }
}

// name = /^[A-Za-z]*$i/;
// no = /^[0-9]*$i/;
