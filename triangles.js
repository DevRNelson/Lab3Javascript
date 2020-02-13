<script>
let triangles, side1, side2, side3, PreScalene, PreScalene2, Scalene,  PreEqui2, 
EquiAnswer, PreEqui, Isosceles, Equilateral

alert("This Program will find detect types of triangles through their sides");

side1: prompt("Please enter the value of the first side");
side2: prompt("Please enter the value of the second side");
side3: prompt("Please enter the value of the third side");
 
 
PreEqui: (side1 + side2);
PreEqui2: (side3 * 2);
 
if  (PreEqui == PreEqui2) {
	EquiAnswer: prompt("What Type of triangle do you think it was? (Equilateral, Scalene, Isosceles)");
    	if (EquiAnswer == "Equilateral", "equilateral") {       
       alert("You are correct your Triangle is an Equilateral Triangle!");
        }
	
}

</script>
