function greeting() {
  var greeting = "Planning on a trip to Oldham County?";
  console.log(greeting);
  
}


 

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    
    document.body.appendChild(img);
}



function myFunction() {
  document.getElementById("myForm").submit();
}

