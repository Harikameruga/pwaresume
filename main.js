// function Loadjson(file,callback){
// var xhr = new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange = function(){
//   if(xhr.readyState === 4 && xhr.status == "200"){
//     callback(xhr.responseText);
// }
// };
// xhr.send(null);
// }
// Loadjson("data.json",function(text)
// {
//   var data = JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   careerinfo(data.career);
//   education(data.education);
//   skills(data.skills);
//   achievements(data.achievements);
// })
//
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if (response.ok){
        resolve(response.json());
    }else{
        reject(new Error('error'));
      }

      })
  })
}
var newfile = loadjson("data.json");
newfile.then(data=>{
  console.log(data);
   basics(data.details);
   careerinfo(data.career);
   education(data.education);
   skills(data.skills);
   achievements(data.achievements);

})
var child1 = document.querySelector(".childone")
function basics(det){
  var image = document.createElement("img");
    image.src = det.image;
    child1.appendChild(image);

    var name = document.createElement("h4");
    name.textContent = det.name;
    child1.appendChild(name);

    var phone = document.createElement("h4");
    phone.textContent = det.phoneno;
    child1.appendChild(phone);

    var email = document.createElement("a");
  email.href = "mailto: harikameruga17@gmail.com"
  email.textContent = det.email;
    child1.appendChild(email);

    var add = document.createElement("h2");
    add.textContent = "address";
    child1.appendChild(add);

    var hr = document.createElement("hr");
    child1.appendChild(hr);

    var p = document.createElement("p");
    p.textContent = det.address;
    child1.appendChild(p);
}
var child2 = document.querySelector(".childtwo")

function careerinfo(info){
  var heading = document.createElement("h2");
  heading.textContent = "Career Objective";
  child2.appendChild(heading);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var c = document.createElement("p");
  c.textContent = info.info;
  child2.appendChild(c);
}

function education(edu){
  var hd = document.createElement("h2");
  hd.textContent = "Educational Qualification:";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border="1";
  child2.appendChild(table1);

  tabledata="";
  for(i=0;i<edu.length;i++){
    tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].Percentage+"</td></tr>";
}
    table1.innerHTML=tabledata;
  }
function  skills(skillsinfo) {

  var hd = document.createElement("h2");
  hd.textContent = "Technical skills:";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<skillsinfo.length;i++){

var title=document.createElement("h2");
title.textContent=skillsinfo[i].title;
child2.appendChild(title);

var eduul=document.createElement("ul");
var eduli=document.createElement("li");
eduli.textContent=skillsinfo[i].info;
eduul.appendChild(eduli);
child2.appendChild(eduul);
}
}
function  achievements(act) {

  var hd = document.createElement("h2");
  hd.textContent = "Achievements:";
  child2.appendChild(hd);

  var hr=document.createElement("h2");
  child2.appendChild(hr);


    for(i=0;i<act.length;i++){

  var title=document.createElement("h2");
  title.textContent=act[i].title;
  child2.appendChild(title);

  var eduul=document.createElement("ul");
  var eduli=document.createElement("li");
  eduli.textContent=act[i].info;
  eduul.appendChild(eduli);
  child2.appendChild(eduul);
  }
}

function openpage() {
  window.open("resume.html","_self",true)
}
