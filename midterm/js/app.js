var body = document.getElementsByTagName('body')[0];
var head = document.getElementsByTagName('head')[0];
var footer = document.getElementsByTagName('footer')[0];

var jsonContent = document.createElement('script');
jsonContent.setAttribute('src', 'data/content.json');
head.appendChild(jsonContent);

function content(myContent) {
  var h1 = document.getElementsByTagName('h1')[0];
  h1.innerHTML = myContent.h1;

  var p = document.getElementsByTagName('p')[0];
  p.innerHTML = myContent.p;

  var h2 = document.getElementsByTagName('h2')[0];
  h2.innerHTML = myContent.h2;

  var blockquote = document.getElementsByTagName('blockquote')[0];
  blockquote.innerHTML = myContent.blockquote;

  var h3 = document.getElementsByTagName('h3')[0];
  h3.innerHTML = myContent.h3;

  var link1 = document.getElementsByTagName('li')[0];
  link1.innerHTML = myContent.list[0].content;

  var link2 = document.getElementsByTagName('li')[1];
  link2.innerHTML = myContent.list[1].content;

  var link3 = document.getElementsByTagName('li')[2];
  link3.innerHTML = myContent.list[2].content;
}