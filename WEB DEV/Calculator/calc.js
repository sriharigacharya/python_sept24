var num1="",num2="",op="",temp="";

function calc(ch){

    if(ch>='0' && ch<='9'){
        let box=document.getElementById("box").value;
        box+=ch;
        document.getElementById("box").value=box;
    }
    else if(ch=='='){
        temp=document.getElementById("box").value;
        num2=(temp.split(op))[1];
        let expr=num1+op+num2;
        let res=eval(expr);
        num1="res";
        num2="";
        op="";
        document.getElementById("box").value=res;
    }else if(ch=='C'){
        num1="";
        num2="";
        op="";
        document.getElementById("box").value="";        
    }
    else{
        num1=document.getElementById("box").value;
        op=ch;
        document.getElementById("box").value=num1+op+num2;
        ;
    }
    
}