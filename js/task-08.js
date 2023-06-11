const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitHandler);

function submitHandler(event){
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('All fields must be filled!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
