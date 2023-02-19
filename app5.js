var form = document.querySelector('#form');
var input=document.querySelector('input[name="username"]');
var ul =document.querySelector('.ul');
var li=document.createElement('li');









function myfunction(){
    var li=document.createElement('li');
    ul.appendChild(li);
    li.textContent=  "from -tomas: "+ input.value ;
    li.style.color="red"
    li.style.fontSize='22px'
    li.setAttribute('id', "zoro")
    myfunction5();
    
    
}


var form2 = document.querySelector('#form2');
var input2=document.querySelector('input[name="username2"]');




function myfunction2(){
    var li=document.createElement('li');
    ul.appendChild(li);
    li.textContent=  "from -Muler :"+ input2.value  ;
    li.style.color="green"
    li.style.fontSize='22px'
    li.style.marginLeft="20px"
    li.setAttribute('id', "zoro");
    myfunction6();
    
}


//წაშლის ღილაკი _delete all
function myfunction1(){                       
    
    var zoro=document.querySelectorAll('#zoro');
    
    for (var x of zoro){
    x.remove();
    }
    
}
// delete one
function myfunction3(){                       
    
    var zoro=document.querySelector('#zoro');
    
   
    zoro.remove(); 
}
function myfunction5(){
    document.getElementById('input1').value = '';
}
function myfunction6(){
    document.getElementById('input2').value = '';
}
