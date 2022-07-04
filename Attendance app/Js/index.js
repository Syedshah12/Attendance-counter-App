// button accessed
// const btn1=document.getElementById('btn1');
// const incr=document.getElementById('incr');
// const btn4=document.getElementById('btn4');



//clear function to clear all saved entries==>clear function
btn4.onclick=
function clear() {
    const save=document.getElementById('save');
    count =0;
    incr.textContent=`${count}`
    save.textContent="";
}



//to increase ==>increment function
let count=0;
function increment(){
    
    const incr=document.getElementById('incr');
    count+=1;
    incr.textContent=`${count}`
}

//to decrease ==>decrement function
function decrement(){
    const incr=document.getElementById('incr');
    if(count==0){
        alert('already 0')
    }
    else{
        count-=1;
        incr.textContent=`${count}`
    }
}



//to save entries ==>save function
const save1=document.getElementById('save');
function save(){
 
    if(count==0){
        alert('Error!!Can not save zero(0)');
    }
    else{
        const incr=document.getElementById('incr');
        const save=document.getElementById('save');
        save.textContent+=`${count+'-'}`;
       }
}












