(function() {

  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }

  //usage:
  loadJSON("resources/resume.json", function(text){
      let data = JSON.parse(text);
    console.log(data);
    basic(data.basics);

  });
var main=document.getElementById('divBody');
var leftDiv=document.getElementById('leftDiv');
  function basic(basics) {

    var profileDiv=document.createElement("div");
    profileDiv.classList.add("profile");
    var img=document.createElement("img");
    img.src=basics.picture;
    img.classList.add("image1");
    var h1=document.createElement("h1");
    h1.textContent=basics.name;
    var p=document.createElement("p");
    p.textContent=basics.label;
    profileDiv.appendChild(img);
    profileDiv.appendChild(h1);
    profileDiv.appendChild(p);
    profileDiv.appendChild(document.createElement("hr"));
    leftDiv.appendChild(profileDiv);

console.log(profileDiv);
  }



  })();
