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
    education(data.education);
    technicalSkil(data.skills);
    acheivements(data.acheivements);

  });
var main=document.getElementById('divBody');
var leftDiv=document.getElementById('leftDiv');
var rightDiv=document.getElementById("rightDiv");

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

    var detailsDiv=document.createElement("div");
    detailsDiv.classList.add("pdetails");

      var l1=document.createElement("div");
      l1.classList.add("lchaild");
      var p=document.createElement("p");
      p.textContent= basics.sonof;
      l1.appendChild(p);

      var l2=document.createElement("div");
      l2.classList.add("lchaild");
      var p1=document.createElement("p");
      p1.textContent=basics.phone;
      l2.appendChild(p1);

      var l3=document.createElement("div");
      l3.classList.add("lchaild");
      var p2=document.createElement("p");
      p2.textContent=basics.email;
      l3.appendChild(p2);

      var l4=document.createElement("div");
      l4.classList.add("lchaild");
      var p3=document.createElement("p");
      p3.textContent=basics.address;
      l4.appendChild(p3);

      var l5=document.createElement("div");
      l5.classList.add("lchaild");
      var p4=document.createElement("p");
      p4.textContent=basics.languages
      l5.appendChild(p4);

    detailsDiv.appendChild(l1);
    detailsDiv.appendChild(l2);
    detailsDiv.appendChild(l3);
    detailsDiv.appendChild(l4);
    detailsDiv.appendChild(l5);
    leftDiv.appendChild(detailsDiv);

    var head=document.createElement("h2");
    head.textContent="BACKGROUND";
    head.appendChild(document.createElement("hr"));
    rightDiv.appendChild(head);

    var r1=document.createElement("div");
    r1.classList.add("rchaild");
    var head1=document.createElement("h2");
    head1.textContent="CAREER OBJECTIVE";
    head1.appendChild(document.createElement("hr"));
    var para1=document.createElement("p");
    para1.textContent=basics.co;
    r1.appendChild(head1);
    r1.appendChild(para1);
    rightDiv.appendChild(r1);

    var r2=document.createElement("div");
    r2.classList.add("rchaild");
    var head2=document.createElement("h2");
    head2.textContent="EXPERIENCE";
    head2.appendChild(document.createElement("hr"));
    var para2=document.createElement("p");
    para2.textContent=basics.co;
    r1.appendChild(head2);
    r1.appendChild(para2);
    rightDiv.appendChild(r2);

console.log(rightDiv);
  }

function education(education) {
  var r3=document.createElement("div");
  r3.classList.add("rchaild");
  var head3=document.createElement("h2");
  head3.textContent="ACADEMIC PROFILE";
  head3.appendChild(document.createElement("hr"));
  r3.appendChild(head3);


  for(i in education){
    var eduType=document.createElement("h3");
    eduType.textContent=education[i].type;
    r3.appendChild(eduType);

    for(k in education[i].des){
      var eduDes=document.createElement("p");
      eduDes.textContent=education[i].des[k];

      r3.appendChild(eduDes);
    }
rightDiv.appendChild(r3);
  }
}

function technicalSkil(skills) {
  var r4=document.createElement("div");
  r4.classList.add("rchaild");
  var head4=document.createElement("h2");
  head4.textContent="TECHNICAL SKILLS SET";
  head4.appendChild(document.createElement("hr"));
  r4.appendChild(head4);


  for(i in skills){
      var skillType=document.createElement("h3");
      skillType.textContent=skills[i].name;
      r4.appendChild(skillType);

    for(k in skills[i].keywords){
        var skillContent=document.createElement("p");
        skillContent.textContent=skills[i].keywords[k];
        r4.appendChild(skillContent);
      }

      rightDiv.appendChild(r4);
  }

}

function acheivements(acheivements) {
  var r5=document.createElement("div");
  r5.classList.add("rchaild");
  var head5=document.createElement("h2");
  head5.textContent="ACHEIVEMENTS";
  head5.appendChild(document.createElement("hr"));
  r5.appendChild(head5);

  var ul=document.createElement("ul");
  for(i in acheivements){
    var li=document.createElement("li");
    li.textContent=acheivements[i];
    ul.appendChild(li);
    r5.appendChild(ul);
  }
  rightDiv.appendChild(r5);
}

  })();
