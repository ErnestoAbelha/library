const List1 = document.querySelector("#list1").addEventListener("click", () => {
  let url = './../html/testA.html'
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (xml.readyState == 4 && xml.status == 200) {
      let root = document.querySelector("#library");
      root.innerHTML = xml.responseText
    }
  }
  xml.open("GET", url, true);
  xml.send();
});
//
const List2 = document.querySelector("#list2").addEventListener("click", () => {
  let url = './../html/testB.html'
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (xml.readyState == 4 && xml.status == 200) {
      let root = document.querySelector("#library");
      root.innerHTML = xml.responseText
    }
  }
  xml.open("GET", url, true);
  xml.send();
});
