const inputRef = document.getElementById('validation-input');
inputRef.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputRef.dataset.length);
  const inputValueLength = Number(inputRef.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  }
  if (inputValueLength === 0) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
  }
  if (inputValueLength !== inputDataLength && inputValueLength !== 0) {
    inputRef.classList.add('invalid');
  }
}
