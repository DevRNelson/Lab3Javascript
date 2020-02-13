<script>
let side1, side2, side3

alert("This Program will find detect types of triangles through their sides");

side1: parseInt(prompt("Please enter the value of the first side"));
side2: parseInt(prompt("Please enter the value of the second side"));
side3: parseInt(prompt("Please enter the value of the third side"));
 
if(side1 == side2 && side2 == side3 && side2 == side1) 
    alert ("The Triangle is Equilateral");

else if  ((side1==side2 && side2!=side3 ) || (side1!=side2 && side3==side1) || (side1==side2 && side3!=side1)){
	alert ("The Triangle is and Isosceles triangle");
   }
   
else {
	alert ("The Triangle is a Scalene Triangle")
}
</script>
