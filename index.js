var rect = require('./rectangle');

function solverectangle(l,b)
{
    if(l<=0||b<=0)
    {
        console.log("Rectangle dimensions should be greater than 0");
    }
    else{
        console.log("Area of rectangle is:"+ rect.area(l,b));
        console.log("Reactangle perimeter is:"+ rect.perimeter(l,b));
    }
}
solverectangle(2,4);
solverectangle(0,0);