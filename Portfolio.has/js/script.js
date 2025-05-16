let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll=() =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

 let cursor1= document.querySelector('.cursor-1')
 let cursor2= document.querySelector('.cursor-2')

 window.onmousemove =(e)=>{
    cursor1.computedStyleMap.top =e.pageY + 'px';
    cursor1.computedStyleMap.left =e.pagex + 'px';
    cursor2.computedStyleMap.top =e.pageY + 'px';
    cursor2.computedStyleMap.left =e.pagex + 'px';

 }

 let links =documents.querySelectorAll('a').forEach(links=>{
                links.onmouseenter = () =>{
                    cursor1.classList.add('active');
                    cursor2.classList.add('active');
                 }

                 links.on = () =>{
                    cursor1.classList.remove('active');
                    cursor2.classList.remove('active');
                 }
 });