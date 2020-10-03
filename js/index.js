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
	fetchCSVData();
}

function fetchCSVData() {
// ---- CSV file format ----
// row 1 (header):  Position, Name, Image Path (URL)
// row 2 (default): default, image, http://default-image.jpg
// row 3 - n:       Manager, Joe Bloggs, https://some-img.png

  Papa.parse("../csv/test.csv", {
    download: true,
    delimiter: ",",	
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
      processCSVData(results);   
    }
  });
}

function processCSVData(results) {
  results.data.forEach((element, index) => {
    // skip over the default image entry
    // index is 0 as the header is omitted
    if (index == 0) return;
    if (element["Image URL"] == "\n"
        || (element["Image URL"] == "\r")
        || (element["Image URL"].length == 0)  
        || (element["Image URL"] == "undefined"))
    {
      addPersonElement(results.data[0]["Image URL"], element["Position"], element["Name"]);
    }
    else 
    {
      addPersonElement(element["Image URL"], element["Position"], element["Name"]);
    }
  });
}

function addPersonElement(imgpath, personPos, personName)
{
  
 //   <div id="position" class="position">
 //     <div id="person_block" class="person_block">
 //     <img src="imagePath>
 //       <div id="person_block_caption" class="person_block_caption">
 //       Person's Name
 //       </div>
 //     </div>
 //   </div>

  // whitespace removed from the position.
  const wsrPersonPos = personPos.replace(/\s+/g, "");
  
  var parentElem = document.getElementById(wsrPersonPos);
  if (null == parentElem) {
    parentElem = document.createElement("div");
    parentElem.id = wsrPersonPos
    parentElem.className  = wsrPersonPos;
  }

  const aDiv = document.createElement("div");
  aDiv.id = "person_block";
  aDiv.className  = "person_block";
  const imgofPerson = document.createElement("IMG");
  imgofPerson.src = imgpath;
  aDiv.appendChild(imgofPerson)

  const bDiv = document.createElement("div");
  bDiv.id = "person_block_caption";
  bDiv.className  = "person_block_caption";
  const titleofPerson = document.createTextNode(personPos + " " + personName);

  bDiv.appendChild(titleofPerson);
  aDiv.appendChild(bDiv);
  parentElem.appendChild(aDiv);
  document.getElementById("center_block").insertBefore(parentElem, parentElem.nextSibling)
}
