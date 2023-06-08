function test() {
  let temp = document.getElementsByTagName('template')[0];
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}
window.test = test;