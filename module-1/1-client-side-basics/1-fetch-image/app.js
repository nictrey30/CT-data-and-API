console.log('about to fetch a rainbow');
catchRainbow()
  .then(() => {
    console.log('yay');
  })
  .catch(err => {
    console.error(err);
  });

// a async function by definition returns a Promise
async function catchRainbow() {
  const response = await fetch('rainbow.jpg');
  const blob = await response.blob();
  document.getElementById('rainbow').src = URL.createObjectURL(blob);
}

// fetch('rainbow.jpg')
//   .then(response => {
//     // console.log(response);
//     return response.blob();
//   })
//   .then(blob => {
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
//   })
//   .catch(err => {
//     console.error(error);
//   });
