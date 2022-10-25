const nextButton=document.querySelector('.btn-next');
const prevButton=document.querySelector('.btn-prev');
const step=document.querySelectorAll('.step');
const formstep=document.querySelectorAll('.form-step');
let active=1;

nextButton.addEventListener('click',()=>{
    active++;
    if(active>step.length)
   { active=step.length;
   }
    updateProgress();
    console.log(step);
    console.log(nextButton);
    console.log(formstep);
})

prevButton.addEventListener('click',()=>{
    active--;
    if(active<1)
   { active=1;
   }
    updateProgress();
})

const updateProgress=()=>{
    console.log('steps.length '+step.length);
    console.log(active);
    step.forEach((step,i)=>{
        if(i==active-1){
            step.classList.add('active');
            formstep[i].classList.add('active');
            console.log('i'+i);
        }
        else{
            step.classList.remove('active');
            formstep[i].classList.remove('active');

        }
    });
    if(active===1)
    {
        prevButton.disabled=true;
    }else if(active===step.length)
    {
        nextButton.disabled=true;
    }else{
        prevButton.disabled=false;
        nextButton.disabled=false;
    }
}