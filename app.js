function setUserName(username) {
  this.username = username;
  console.log("called");
}

function creatUser(username, email, password) {
  setUserName.call(this, username);
  /* call function is used to reffer the object created outside the function and this is used to target the instance of the the uername */
  this.email = email;
  this.password = password;
}

let newUser = new creatUser("Arjun", "arjun@amazon.com", "1234");
console.log(newUser);
