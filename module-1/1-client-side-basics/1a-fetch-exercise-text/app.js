// The text() method in the Blob interface returns a Promise that resolves with a string containing the contents of the blob
const getPoem = async () => {
  let response = await fetch('poem.txt');
  // let blob = await response.blob();
  // document.getElementById('poem').textContent = await blob.text();
  // return blob;
  let data = await response.text();
  document.getElementById('poem').textContent = data;
  return data;
};

getPoem()
  .then(data => console.log('poem fetched!'))
  .catch(err => console.error(err));
