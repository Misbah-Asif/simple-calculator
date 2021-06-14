function myCalculator() {
    var n1 = parseFloat(document.getElementById('no1').value);
    var n2 = parseFloat(document.getElementById('no2').value);
    var oper = document.getElementById('operators').value;


    if ((isNaN(n1))||(isNaN(n2))) {
        console.log("enter no")
        document.getElementById('demo').innerHTML = "Not a number";
    }
    if (oper === 'Add') {
        document.getElementById('demo').innerHTML = n1 + n2;
    }
    if (oper === 'Subtract') {
        document.getElementById('demo').innerHTML = n1 - n2;
    }
    if (oper === "Multiply") {
        document.getElementById('demo').innerHTML = n1 * n2;
    }
    if (oper === "divide") {
        document.getElementById('demo').innerHTML = n1 / n2;
    }

}