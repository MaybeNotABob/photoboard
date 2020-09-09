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
  const response = await fetch('csv/test.csv');
  const data = await response.text();

  const table = data.split('\n');
  for (let i = 0; i < table.length; i++){
    const columns = data.split(',');
    console.log(columns);
  }
  
} 
