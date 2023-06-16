

  const existingUserlogBTn = document.getElementById('existing_user_login_btn');

existingUserlogBTn.addEventListener('click', event => {
  event.preventDefault();

  fetch('http://54.163.135.181/login/token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=&username=chandan&password=123456789&scope=&client_id=&client_secret='
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok', response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
