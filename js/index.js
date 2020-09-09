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
  // then split the response into seperate lines (line break)  
  // remove row headers from data.
  // ---- CSV file format ----
  // #1 row headers   :: Position, Name, Image Path (URL)
  // #2 default image :: default, image, http://default-image.jpg
  const indexPos      = 0;
  const indexName     = 1;
  const indexImgPath  = 2;

  // set the second entry of the csv file to the default image.
  const defaultImg = data.trimEnd().split('\n')[1].split(',')[indexImgPath];

  // split the data by new line and remove lines 1 and 2.
  const rows = data.trimEnd().split('\n').slice(2);

  for (var i = 0; i < rows.length; i++)
  {
    const columns = rows[i].split(',');   

    // check if the image path has been left blank
    // if so use the default image
    if ((columns[indexImgPath] == "\n")
        || (columns[indexImgPath] == "\r")
        || (columns[indexImgPath].length = 0)  
        || (columns[indexImgPath] == "undefined") 
      ){
      addPersonElement(defaultImg, columns[indexName], "center_block");
    }
    else {
      addPersonElement(columns[indexImgPath].trimStart().trimEnd(), columns[indexName], "center_block");
    }
  }
} 


/*TODO:
  add rank/positon to the parameters
  create a rank/position div and assign all akin nodes to this div
*/
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
