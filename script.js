function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  const correctUsername = usernameInput.value === 'haris@sigmaschool.co';
  const correctPassword = passwordInput.value === 'password';

  if(correctUsername && correctPassword) {
      result.innerHTML = `Welcome Haris!`;  
  }
  else if (correctUsername) {
    result.innerHTML = `Wrong password`;
  }
  else {
    result.innerHTML = `Wrong password/username`;  
    return result;
  }
}
