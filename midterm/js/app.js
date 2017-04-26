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

var jsonNav = document.createElement('script');
jsonNav.setAttribute('src', 'data/nav.json');
head.appendChild(jsonNav);

function headerNav(myNav) {
  var nav = document.getElementsByTagName('nav')[0];
  var navsUL = '<ul>';

  for(var i = 0; i < myNav.items.length; i++){
    if (myNav.items[i].items.length > 0){
      navsUL += '<li><a href=" ' + myNav.items[i].url + ' ">';
      navsUL += myNav.items[i].label + '</a>';
    }
    else{
      navsUL += '<li><a href=" ' + myNav.items[i].url + ' ">';
      navsUL += myNav.items[i].label + '</a></li>';
    }
  }
  navsUL += '</ul>';
  nav.innerHTML = navsUL;
}



var icon1 = document.getElementsByTagName('span')[0];
icon1.innerHTML = '<span class="fa fa-facebook"></span>';

var icon2 = document.getElementsByTagName('span')[1];
icon2.innerHTML = '<span class="fa fa-instagram"></span>';

var icon3 = document.getElementsByTagName('span')[2];
icon3.innerHTML = '<span class="fa fa-twitter"></span>';

var icon4 = document.getElementsByTagName('span')[3];
icon4.innerHTML = '<span class="fa fa-youtube"></span>';
