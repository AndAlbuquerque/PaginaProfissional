const nav = document.getElementsByTagName('header')[0]
const topoNav = nav.offsetTop + 10

window.onscroll = function() {
    fixarMenuNoTopo()
}
function fixarMenuNoTopo(){
    if(window.pageYOffset >= topoNav){
    nav.classList.add('Logo')
    }else{
        nav.classList.remove('Logo')
    }
}