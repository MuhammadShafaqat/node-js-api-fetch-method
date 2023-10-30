const formData = document.getElementById('signinForm');
formData.addEventListener('submit', async (event) => {
  event.preventDefault();

  const payload = new FormData(formData);

  const formDataObject = {};

  payload.forEach((value, key) => {
    formDataObject[key] = value;
  });

  fetch('http://localhost:3000/auth/signIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formDataObject)
  })
    .then(response => {
      if (response.ok) {
        alert('Authentication successful');
        return response.json();
      } else {
        return response.json().then(data => {
          console.log(data);
          throw new Error('Authentication failed');
        });
      }
    })
    .then(data => {
      // Handle successful response data (if needed)
      console.log(data);
      // Redirect to the login page
      window.location.href = '/frontend/table.html'; // Replace with your login page URL
    })
    .catch(err => {
      console.error(err);
      alert('An error occurred while signig. Please try again.');
    });
});





// const myForm = document.getElementById('signinForm');
// myForm.addEventListener('submit', async (event) => {
// event.preventDefault();

// const payload1 = new FormData(myForm);
// const formObjectData = {};
          
// payload1.forEach((value, key) => {
//      formObjectData[key] = value;
//           });
// await fetch('http://localhost:3000/auth/signIn', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(formObjectData)     
//   }).then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
// })
