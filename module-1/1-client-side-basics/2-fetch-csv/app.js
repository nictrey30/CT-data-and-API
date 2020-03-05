// Data from: https://data.giss.nasa.gov/gistemp/
async function getData() {
  const response = await fetch('ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  // get the rows, and remove the headers row from the resulting array
  let table = data.split('\n').slice(1);
  // rows.splice(0, 1);
  table.forEach(row => {
    const columns = row.split(',');
    const year = columns[0];
    const temp = columns[1];
    console.log(year, temp);
  });
}

getData();
