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

window.addEventListener("load", init);

function init()
{
	console.log("Init");
	fetchCSVData();
}

async function fetchCSVData() {
  // attempt to receive the csv file from the remote path
  const response = await fetch('csv/test.csv');
  // save the response of the request to a variable
  const data = await response.text();
  // trim any leading white space, 
  //then split the response into seperate lines (line break)  
  // remove row titles from data.
  const rows = data.trimEnd().split('\n').slice(1);

  /*rows.forEach ( row => {
    const columns = row.split(',');
    console.log(row);
  }); */

  for (let i = 0; i < rows.length; i++)
  {
    const columns = rows[i].split(',');
    addPersonElement(columns[1], columns[0], "center_block");
  }
} 

function addPersonElement(imgpath, title, dst)
{
  const newDiv = document.createElement("div");
  const imgofPerson = document.createElement("IMG");
  imgofPerson.src = imgpath;
  const titleofPerson = document.createTextNode(title);
  newDiv.appendChild(imgofPerson)
  newDiv.appendChild(titleofPerson)
  document.getElementById(dst).appendChild(newDiv);
}
