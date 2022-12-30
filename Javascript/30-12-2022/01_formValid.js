function form_valid() {
  // first name
  //   isNaN() -> is not a number
  let fname = document.getElementById("fname").value;
  //   let fname_match = "/A-Za-z/";
  if (fname == null || fname == "") {
    // alert("enter first name");
    document.getElementById("fmsg").innerHTML = "Enter Firstname";
    return false;
  } else if (!isNaN(fname)) {
    document.getElementById("fmsg").innerHTML = "Do not allowed numbers";
    return false;
  }
  //   else if ((fname = /^[0-9]/)) {
  //     document.getElementById("fmsg").innerHTML = "Only allows alphabets";
  //     return false;
  //   }

  let male = document.form1.gen[0].checked;
  let female = document.form1.gen[1].checked;
  if (male == false && female == false) {
    document.getElementById("gmsg").innerHTML = "select gender";
    return false;
  }

  let c1 = document.form1.c1.checked;
  let c2 = document.form1.c2.checked;
  //   let c3 = document.form1.c3.checked; && c3 == false
  if (c1 == false && c2 == false) {
    document.getElementById("cmsg").innerHTML = "select Subject";
    return false;
  }

  let exp = document.form1.exp.value;
  if (exp == -1) {
    document.getElementById("expmsg").innerHTML = "select exp";
    return false;
  }
}
