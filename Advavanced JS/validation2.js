function showError(message, element) {
    document.getElementById("error").innerHTML = message;
    element.focus();
  }
  
  function validateInput(value, message, element, validationFunction) {
    if (!validationFunction(value)) {
      showError(`${message} is not valid!`, element);
      return false;
    }
    return true;
  }
  
  function validateRequired(value, message, element) {
    return validateInput(
      value,
      message,
      element,
      (value) => value.trim() !== ""
    );
  }
  
  function validateCharacterOnly(value, message, element) {
    return validateInput(
      value,
      message,
      element,
      (value) => /^[a-zA-Z]+$/.test(value)
    );
  }
  
  function validatePassword(value, element) {
    return validateInput(
      value,
      "Password",
      element,
      (value) => value.trim().length >= 8
    );
  }
  
  function validateMatch(value1, value2, message, element) {
    return validateInput(
      value1,
      message,
      element,
      (value1) => value1 === value2
    );
  }
  
  function validateEmail(value, element) {
    return validateInput(
      value,
      "Email",
      element,
      (value) =>
        /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9]{2,3}$/.test(value)
    );
  }
  
  function validateRadioGroup(radioGroup, message) {
    const checkedRadio = Array.from(radioGroup).find((radio) => radio.checked);
    return validateInput(
      checkedRadio,
      message,
      radioGroup[0],
      (radio) => radio !== undefined
    );
  }
  
  function validateCheckboxGroup(checkboxGroup, message) {
    const checkedCheckbox = Array.from(checkboxGroup).find(
      (checkbox) => checkbox.checked
    );
    return validateInput(
      checkedCheckbox,
      message,
      checkboxGroup[0],
      (checkbox) => checkbox !== undefined
    );
  }
  
  function validateFileSize(file, maxSizeMB, message, element) {
    return validateInput(
      file,
      message,
      element,
      (file) => file.size / (1024 * 1024) <= maxSizeMB
    );
  }
  
  function validation(form) {
    // Define the validation rules for each input
    const validationRules = [
      { value: form.fname.value, message: "First Name", element: form.fname, validator: validateCharacterOnly },
      { value: form.lname.value, message: "Last Name", element: form.lname, validator: validateCharacterOnly },
      { value: form.pwd.value, message: "Password", element: form.pwd, validator: validatePassword },
      { value: form.cpwd.value, message: "Password and Confirm Password", element: form.cpwd, validator: (value) => validateMatch(value, form.pwd.value) },
      { value: form.email.value, message: "Email", element: form.email, validator: validateEmail },
      { value: form.gender, message: "Gender", element: form.gender[0], validator: validateRadioGroup },
      { value: form.hobby, message: "Hobby", element: form.hobby[0], validator: validateCheckboxGroup },
      { value: form.country.value, message: "Country", element: form.country, validator: validateRequired },
      { value: form.edu.value, message: "Education", element: form.edu, validator: validateRequired },
      { value: form.address.value, message: "Address", element: form.address, validator: validateRequired },
      { value: form.dp.value, message: "Photo", element: form.dp, validator: (value) => validateRequired(value, "Photo", form.dp) && validateFileSize(form.dp.files[0], 2, "Photo", form.dp) },
      { value: form.resume.value, message: "Resume", element: form.resume, validator: (value) => validateRequired(value, "Resume", form.resume) && validateFileSize(form.resume.files[0], 2, "Resume", form.resume) },
      { value: form.rate.value, message: "Rate", element: form.rate, validator: validateRequired },
      { value: form.color.value, message: "Color", element: form.color, validator: validateRequired },
      { value: form.dob.value, message: "Date of Birth", element: form.dob, validator: validateRequired },
    ];
  
    // Run validation for each input and return false if any validation fails
    for (const rule of validationRules) {
      if (!rule.validator(rule.value, rule.message, rule.element)) {
        return false;
      }
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
