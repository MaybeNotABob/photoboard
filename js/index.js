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
  const rows = data.trimEnd().split('\n').slice(2);

  /*rows.forEach ( row => {
    const columns = row.split(',');
    console.log(row);
  }); */
  const defaultImg = data.trimEnd().split('\n')[1].split(',')[1];

  for (var i = 0; i < rows.length; i++)
  {
    const columns = rows[i].split(',');   
    if (columns[1].length == 1) {
      addPersonElement(defaultImg, columns[0], "center_block");
    }
    else {
      addPersonElement(columns[1], columns[0], "center_block");
    }
  }
} 

function addPersonElement(imgpath, title, dst)
{
  /*
  <div id="person_block" class="person_block"> 
    <img src="/img/n.....">
      <div id="person_block_caption" class="person_block_caption"> 
        title of person
      </div> 
  </div> 
  */
  const aDiv = document.createElement("div");
  aDiv.id = "person_block";
  aDiv.className  = "person_block";
  const imgofPerson = document.createElement("IMG");
  imgofPerson.src = imgpath;
  aDiv.appendChild(imgofPerson)

  const bDiv = document.createElement("div");
  bDiv.id = "person_block_caption";
  bDiv.className  = "person_block_caption";
  const titleofPerson = document.createTextNode(title);
  bDiv.appendChild(titleofPerson);
  aDiv.appendChild(bDiv);
  document.getElementById(dst).appendChild(aDiv);   
}
