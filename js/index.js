/*
  Description:
    Javascript file: 
    Dynamically interacting with HTML elements to load images.

	Version:
		0.1a

  Creation date:
		31AUG2020

  Contributors
		MaybeNotABob

*/

async function fetchCSVData() {
  // attempt to receive the csv file from the remote path
  const response = await fetch('csv/test.csv');
  // save the response of the request to a variable
  const data = await response.text();
  // trim any leading white space, 
  //then split the response into seperate lines (line break)  
  const rows = data.trimEnd().split('\n');

  /*rows.forEach ( row => {
    const columns = row.split(',');
    console.log(row);
  }); */

  for (let i = 0; i < rows.length; i++)
  {
    const columns = rows[i].split(',');
    console.log(columns[1]);

  }
} 
