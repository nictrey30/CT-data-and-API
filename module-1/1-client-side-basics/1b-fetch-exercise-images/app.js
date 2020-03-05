let images = document.querySelectorAll('.rainbow');

async function catchRainbows() {
  const responses = await Promise.all([
    await fetch('images/rainbow1.jpg'),
    await fetch('images/rainbow2.jpg'),
    await fetch('images/rainbow3.jpg')
  ]);
  responses.forEach(async (response, index) => {
    let blob = await response.blob();
    images[index].src = URL.createObjectURL(blob);
  });
}

catchRainbows()
  .then(data => console.log('All Promises resolved'))
  .catch(err => console.error('err'));

// images.forEach(image => {
//   console.log(image.getAttribute('alt'));
// });
