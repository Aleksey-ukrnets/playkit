document.addEventListener('DOMContentLoaded',function(event){
    const rent = document.querySelectorAll('.rent__period-item')
    if(rent) {
        rent.forEach(function(el,key){
            el.addEventListener('click',function(){
                el.classList.toggle('active_rent')
            
                rent.forEach(function(element,keys){
                    if(key!==keys){
                        element.classList.remove('active_rent')
                    }
                    // console.log(keys)
                })

            })
        })
    }
})


const faqItem = document.querySelectorAll('.faq__item') 

const Open = (event) => {
      const target = event.currentTarget
      target.classList.toggle('open')
      

}

faqItem.forEach(el => {
    el.addEventListener('click',Open)
})

const plus = document.querySelectorAll('.plus')

const changeDisplay = (event) =>{
    const parentNode = event.currentTarget
    parentNode.classList.toggle('rotate_active')
    
}
plus.forEach((block)=> {
    block.addEventListener('click',changeDisplay)
 })
   


// const crossChange = document.getElementById('plus');
// crossChange.addEventListener('click', () => {
//    const display = document.getElementById('answer').style.display;
//     if(display == 'none') {
//         document.getElementById('answer').style.display = 'block';
//     }
//     else {
//         document.getElementById('answer').style.display = 'none';
//     }

// }
// )
// /////////////////////////////////////////////////////////////////////////
// const crossTransform = (id,firstValue,secondValue) => {
//     const cross = document.getElementById(id).style.transform;
//     if(cross === `rotate(${firstValue}deg)`){
    
//         document.getElementById(id).style.transform = `rotate(${secondValue}deg)`;
        
//     }
//     else {
        
//         document.getElementById(id).style.transform = `rotate(${firstValue}deg)`;
//     }
// } 

//  crossChange.addEventListener('click', crossTransform('crossy',0,-45));
 

// Рабочий код сниз, не рабочий сверху


// crossChange.addEventListener('click', () => {
//     const cross = document.getElementById('crossx').style.transform;
//     if(cross == 'rotate(90deg)'){
//         document.getElementById('crossx').style.transform = 'rotate(45deg)';
        
//     }
//     else {
//         document.getElementById('crossx').style.transform = 'rotate(90deg)';
        
//     }
    
// } 
// )
//  ////////////////////////////////
// crossChange.addEventListener('click', () => {
//     const cross = document.getElementById('crossy').style.transform;
//     if(cross == 'rotate(0deg)'){
//         document.getElementById('crossy').style.transform = 'rotate(-45deg)';
        
//     }
//     else {
//         document.getElementById('crossy').style.transform = 'rotate(0deg)';
        
//     }
    
// } 
// )
 
//////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// function fun (){
//     const answer = document.querySelectorAll('.answer')
//     answer.forEach((block) => {
//         block.addEventListener('click', (event) => {
//             const target = event.target
//             target.classList.toggle('plus_active')
//         })
//     })
    
// }


// const hide = document.querySelector('.answer').classList.toggle('plus_active')
//     return hide
