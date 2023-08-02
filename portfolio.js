
// Navbar links active color change
var header = document.getElementById("navbar");

var btns = header.getElementsByClassName("link");

// Read more button
var readmore = document.getElementsByClassName("read-more");

var articlebodies = document.getElementsByClassName("article-body");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {

  try{
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
  }catch(err){

  }
  this.className += " active";
  });
}

for (var i = 0; i < readmore.length ; i++) {

  readmore[i].addEventListener("click",function(){
    try{
      var current = document.getElementsByClassName("full-article-body");
      current[0].className = current[0].className.replace(" full-article-body","");
    }catch(err){
  
    }
    this.parentElement.className += " full-article-body";
  })
    
}

function changeHeader(x){
  if(x.matches){
    document.getElementById("professions").innerHTML = "Software & Cloud Engineer";
  }else{
    document.getElementById("professions").innerHTML = "I Am A Software Engineer & Cloud Engineer";
  }
}

var x = window.matchMedia("(max-width: 1024px)");
changeHeader(x)
x.addListener(changeHeader)
