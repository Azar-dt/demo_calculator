let check = false; 
function setScreen(value){ 
    if ( value=='+'|| value=='-'|| value=='*'||value=='/')
        check = false; 
    if (!check) { 
        document.getElementById('screen').value +=value; 
    }
    else { 
        document.getElementById('screen').value = value;
        check = false;  
    }
}

function doMath() { 
    let pheptinh = document.getElementById('screen').value; 
    //console.log(pheptinh); 
    let result = eval(pheptinh); 
    //if (result==false) alert(sai); 
    document.getElementById('screen').value = result; 
    check = true; 
}

function DEL() { 
    let temp = document.getElementById('screen').value; 
    temp = temp.substring(0,temp.length -1); 
    document.getElementById('screen').value = temp; 
}

function AC() { 
    document.getElementById('screen').value=''; 
    
}