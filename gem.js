function greeting() {
  var greeting = "Planning on a trip to Oldham County?";
  console.log(greeting);
  
}


<form name="myform" action="submit-form.ph">;
Search: <input type='text' name='query'/>;
<input type="image" src="go.gif"/>;
</form>


function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    
    document.body.appendChild(img);
}

<button onclick=
    "show_image("savormex.jpeg",
                 150,
                 330,
                 'Pic of restaurant');">Picture</button>
                 
      


function myFunction() {
  document.getElementById("myForm").submit();
}

