var temp=""
function dosq(){
    let number=parseInt(document.getElementById('number').value);
    temp=number*number;
    document.getElementById("operation1").innerText = "Square";
    document.getElementById('operation').value=temp;
}

function docu(){
    let number=parseInt(document.getElementById('number').value);
    temp=number*number*number;
    document.getElementById("operation1").innerText = "Cube";
    document.getElementById('operation').value=temp;
}

