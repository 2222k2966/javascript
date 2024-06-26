let addvalue = () =>
{
    let a=parseInt(document.getElementById('input1').value) ;
    let b=parseInt(document.getElementById('input2').value);
    let c=a+b;
   
    document.getElementById('tta').innerHTML="<tr><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td></tr>";
}


