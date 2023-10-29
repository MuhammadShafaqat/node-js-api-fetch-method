
const myForm = document.getElementById('signinForm');
myForm.addEventListener('submit', async (event) => {
event.preventDefault();

const payload1 = new FormData(myForm);
const formObjectData = {};
          
payload1.forEach((value, key) => {
     formObjectData[key] = value;
          });
await fetch('http://localhost:3000/auth/signIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(formObjectData)     
  }).then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
})
