let content = document.getElementById("content");
let dev = document.getElementById("developer");
function home() {
  const replace_content = new XMLHttpRequest();
  replace_content.open("get", "google_search.html", true);
  replace_content.onload = () => {
    if (replace_content.status === 200) {
      let newcontent = replace_content.response;
      content.innerHTML = `${newcontent}`;
    } else {
      alert("some error occured to load Google Search!");
    }
  };
  replace_content.send();
}
home();
function image_search() {
  const replace_content = new XMLHttpRequest();
  replace_content.open("get", "image_search.html", true);
  replace_content.onload = () => {
    if (replace_content.status === 200) {
      let newcontent = replace_content.response;
      content.innerHTML = `${newcontent}`;
    } else {
      alert("some erroe occured to load image Search!");
    }
  };
  replace_content.send();
}
function advance_search() {
  const replace_content = new XMLHttpRequest();
  replace_content.open("get", "advance_search.html", true);
  replace_content.onload = () => {
    if (replace_content.status === 200) {
      let newcontent = replace_content.response;
      content.innerHTML = `${newcontent}`;
    } else {
      alert("some erroe occured to load advance Search!");
    }
  };
  replace_content.send();
}
const image_search2=()=>{
  let query=document.getElementById('img_q').value;
  if(query==""){
    alert('Empty query!')
    return;
  }
  window.location.href=`https://www.google.com/search?q=${query}&tbm=isch`;
}