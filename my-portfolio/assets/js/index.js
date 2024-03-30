// document.addEventListener('DOMContentLoaded',()=>{
//     const menuItem = document.querySelector('menu li');
//     menuItem.forEach((item)=>{
//         item.addEventListener('click',()=>{
//             item.classList.remove('active')
//         });
//         this.classList.add('active')
//     })
// })
document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        document.querySelectorAll('.fade-in').forEach((element)=>{
            element.classList.add('active')
        })
    },100);
});