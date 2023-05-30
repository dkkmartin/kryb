const form = document.querySelector('.kontakt__form');
const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

form.addEventListener('submit', (e) => {
  const emailCheck = emailRegex.test(email.value) 
 
  for (c of fullname.value) {
    if (!isNaN(c)) {
      e.preventDefault();
      fullname.value = '';
      fullname.setAttribute('placeholder', 'Indtast gyldigt navn');
      fullname.focus();
      return false;
    }
  }

  if(fullname.value === '') {
    e.preventDefault();
      fullname.value = '';
      fullname.setAttribute('placeholder', 'Indtast gyldigt navn');
      fullname.focus();
      return false;
  }

  if(email.value === '') {
    e.preventDefault();
      email.value = '';
      email.setAttribute('placeholder', 'Indtast gyldigt email');
      email.focus();
      return false;
  }
  
  if(!emailCheck) {
    e.preventDefault();
    email.value = '';
    email.setAttribute('placeholder', 'Indtast gyldig email')
    email.focus()
    return false
  }
});

// form.addEventListener('submit', (e) => {
//   for (c of fullname.value) {
//     if(!isNaN(c)) {
//       e.preventDefault()
//       fullname.value = ''
//       fullname.setAttribute('placeholder', 'Indtast gyldigt navn')
//       fullname.focus()
//       return false
//     }
//   }

//   if (email.value !== email.value) {
//     e.preventDefault()
//     email.value = ''
//     email.setAttribute('placeholder', 'Indtast ens e-mail')
//     return false
//   }
// })
