function ValidateEmail(input) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (text.value.match(mailformat)) {
    alert("Valid email address!");
    document.form.text.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form.text.focus();
    return false;
  }
}
