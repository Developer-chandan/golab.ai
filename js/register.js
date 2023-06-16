const newUserFName = document.getElementById('inputNewFirstName');
  
const newUserLName = document.getElementById('inputNewLastName');
const newUserPhone = document.getElementById('newUserPhone');
const newUserEmail = document.getElementById('inputNewEmail');
const newUserPass = document.getElementById('newUserPassword');
const newUserPassConfirm = document.getElementById('newUserConfirmPass');
const newUserSignupBTn = document.getElementById('SignUpBtn');
  

   
   // new user signup 
   newUserSignupBTn.addEventListener('click', event => {
    event.preventDefault();
    const newUserFNameValue = newUserFName.value;
    const newUserLNameValue = newUserLName.value;
    const newUserPhoneValue = newUserPhone.value;
    const newUserEmailValue = newUserEmail.value;
    const newUserPassValue = newUserPass.value;
  
    fetch('http://54.163.135.181/login/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: newUserEmailValue,
        password: newUserPassValue,
        firstname: newUserFNameValue,
        lastname: newUserLNameValue,
        phone: newUserPhoneValue
      })
    })
      .then(response => {
        console.log('response:', response);
        // if(!response.ok){
        //     throw new Error('Response is not ok', response.statusText)
        // }
        return response.json();
      })
         
      .then(data => {
        console.log(data);
  
        if(data.detail == 'User already exists'){
          const alreadAccountAlert = document.getElementById('already_have_account');
          alreadAccountAlert.classList.remove('d-none');
        }else if (data.message == "User created successfully"){
          const newAccountAlert = document.getElementById('new_account_created');
          newAccountAlert.classList.remove('d-none');
        }
    
      })
      .catch(error => {
        console.error('Error:', error);
      });
   })