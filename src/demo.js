window.onload =function(){
    let box = document.getElementsByClassName('box')[0]
    box.addEventListener('click',()=>{
        alert('这是红色文字')
    },this)
}