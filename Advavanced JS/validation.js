function validation(form) {
  // FIRST NAME
  if (form.fname.value == "") {
    document.getElementById("error").innerHTML = "First Name is Required !";
    form.fname.focus();
    return false;
  }
  if (!form.fname.value.match(/^[a-zA-Z]{1,}$/)) {
    document.getElementById("error").innerHTML = "Character Only !";
    form.fname.focus();
    return false;
  }
  // LAST NAME
  if (form.lname.value == "") {
    document.getElementById("error").innerHTML = "Last Name is Required !";
    form.lname.focus();
    return false;
  }
  if (!form.lname.value.match(/^[a-zA-Z]{1,}$/)) {
    document.getElementById("error").innerHTML = "Character Only !";
    form.lname.focus();
    return false;
  }
  // PASSWORD
  if (form.pwd.value == "") {
    document.getElementById("error").innerHTML = "Password Required !";
    form.pwd.focus();
    return false;
  }
  if (form.pwd.value.length < 8) {
    document.getElementById("error").innerHTML =
      "Password required min 8 character !";
    form.pwd.focus();
    return false;
  }
  //   CONFIRM PASSWORD
  if (form.cpwd.value == "") {
    document.getElementById("error").innerHTML = "Confirm Password Required !";
    form.cpwd.focus();
    return false;
  }
  if (!(form.cpwd.value == form.pwd.value)) {
    document.getElementById("error").innerHTML =
      "Password and Confirm password Not match !";
    form.cpwd.focus();
    return false;
  }
  //   EMAIL
  if (form.email.value == "") {
    document.getElementById("error").innerHTML = "Email Required !";
    form.email.focus();
    return false;
  }
  if (
    !form.email.value.match(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/
    )
  ) {
    document.getElementById("error").innerHTML = "Email Pattern Not Match !";
    form.email.focus();
    return false;
  }
  // GENDER
  if (form.gender[0].checked == true) {
  } else if (form.gender[1].checked == true) {
  } else {
    document.getElementById("error").innerHTML = "Gender Required !";
    return false;
  }
  //   HOBBY
  if (form.hobby[0].checked == true) {
  } else if (form.hobby[1].checked == true) {
  } else if (form.hobby[2].checked == true) {
  } else {
    document.getElementById("error").innerHTML = "Hobby Required !";
    return false;
  }
  //   COUNTRY
  if (form.country.value == "") {
    document.getElementById("error").innerHTML = "Please select any country !";
    form.country.focus();
    return false;
  }
  //   EDUCATION
  if (form.edu.value == "") {
    document.getElementById("error").innerHTML = "Please select Education !";
    form.edu.focus();
    return false;
  }
  //   ADDRESS

  if (form.address.value == "") {
    document.getElementById("error").innerHTML = "Address is Required !";
    form.address.focus();
    return false;
  }

  //DP
  if (form.dp.value == "") {
    document.getElementById("error").innerHTML = "Please Upload Photo !";
    form.dp.focus();
    return false;
  }

  var img_size_mb = parseFloat(form.dp.files[0].size / (1024 * 1024)).toFixed(
    2
  );
  if (img_size_mb > 2) {
    document.getElementById("error").innerHTML =
      "! Please select image size less than 2 MB ";
    form.dp.focus();
    return false;
  }

  //   resume
  if (form.resume.value == "") {
    document.getElementById("error").innerHTML = "Please Upload Photo !";
    form.dp.focus();
    return false;
  }

  var pdf_size_mb = parseFloat(
    form.resume.files[0].size / (1024 * 1024)
  ).toFixed(2);
  if (pdf_size_mb > 2) {
    document.getElementById("error").innerHTML =
      "! Please select image size less than 2 MB ";
    form.resume.focus();
    return false;
  }
  //   Rate
  if (form.rate.value == "") {
    document.getElementById("error").innerHTML = "Rate is Required !";
    form.rate.focus();
    return false;
  }
  // color
  if (form.color.value == "") {
    document.getElementById("error").innerHTML = "Color is Required !";
    form.color.focus();
    return false;
  }
  //   Date of Birth
  if (form.dob.value == "") {
    document.getElementById("error").innerHTML = "Date of Birth is Required !";
    form.dob.focus();
    return false;
  }

  return true;
}

function check(image) {
  const allowedExtensions = ["jpg", "png", "jpeg", "gif"];
  const dp = image.value;
  const ext = dp.substring(dp.lastIndexOf(".") + 1).toLowerCase();
  const errorMessage = !allowedExtensions.includes(ext)
    ? "! Please upload only JPG, GIF, JPEG files"
    : "";
  document.getElementById("error").innerHTML = errorMessage;
  document.getElementById("submit").disabled = !!errorMessage;
}


function check1(file) {
  const allowedExtensions = ["pdf"];
  const filename = file.value;
  const ext = filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
  const errorMessage = !allowedExtensions.includes(ext)
    ? "! Please upload only PDF files"
    : "";
  document.getElementById("error").innerHTML = errorMessage;
  document.getElementById("submit").disabled = !!errorMessage;
}

