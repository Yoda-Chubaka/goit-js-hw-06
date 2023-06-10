const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitHandler);

function submitHandler(event){
  event.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert('All fields must be filled!');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    e.currentTarget.reset();
  }
}
