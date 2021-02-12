function toggleMenu() { 
 document.getElementById("list-items").classList.toggle("hide"); 
}


function pancakeBanner() {
    let d = new Date();
    let n = d.getDay(); 
    
    if (n == 5) {
        document.getElementById("pancakes-saturday").style.display = "block";
    } else {
        document.getElementById("pancakes-saturday").style.display = "none";
    } 
}

 pancakeBanner(); 