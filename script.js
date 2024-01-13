var button = document.getElementById('button')
var frame = document.getElementById('frame')
var text = document.getElementById('msg')
var list = document.getElementById('list')
var iframe = document.getElementById('frame');
var player = document.getElementById('vid');
var link = document.getElementById('src');

var lst1 = document.getElementById('lst1')
var lst2 = document.getElementById('lst2')
var lst3 = document.getElementById('lst3')

button.addEventListener('click',function() {
    frame.classList.toggle('move');
    button.classList.toggle('move');
    text.classList.toggle('move')
    list.classList.toggle('visible')
})

lst1.addEventListener('click',() =>{
    link.src = 'pookal.mp4';
    player.classList.toggle('visible2');
    frame.classList.toggle('disable');
})
lst2.addEventListener('click',() =>{
    link.src = 'vp.mp4';
    player.classList.toggle('visible2');
    frame.classList.toggle('disable');
})
lst3.addEventListener('click',() =>{
    player.classList.toggle('disable')
    frame.classList.toggle('visible2')
    frame.src= "https://www.youtube.com/embed/xvfDN_Ga2_M?si=2t1_4l9YwxWE_Nf5"
})
lst4.addEventListener('click',() =>{
    player.classList.toggle('disable')
    frame.classList.toggle('visible2')
    frame.src= "https://www.youtube.com/embed/zsaff26T4Wg"
})