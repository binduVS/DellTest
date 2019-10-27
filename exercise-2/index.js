/* I have written the basic code required to implement the tasks you have given. Used the same images
    in child grid as i was concentrating on the functionalities. */
function highlightMonitor() {
    document.getElementById('nav-item1').style['border-bottom'] = '3px solid #007db8';
    document.getElementById('nav-item2').style['border-bottom'] = '1px solid #eaeae1';
    let parent = document.getElementsByClassName('parent-item');
    for(let child of parent) {
        console.log(child.getElementsByTagName('img'));
        child.style['background-color'] = 'purple';
    }
    document.getElementById('carouselExampleSlidesOnly').carousel('next');
}
function highlightBattery() {
    document.getElementById('nav-item2').style['border-bottom'] = '3px solid #007db8';
    document.getElementById('nav-item1').style['border-bottom'] = '1px solid #eaeae1';
    let parent = document.getElementsByClassName('parent-item');
    for(let child of parent) {
        console.log(child.getElementsByTagName('img'));
        child.style['background-color'] = 'green';
    }
}

(function calculateSum() {
    let nodes = document.getElementById('productlist2').getElementsByClassName('price');
    let sum =0;
    for(let node of nodes) {
     sum = sum + (+node.innerHTML); 
    }
    alert('Price of all Products in Section Power, Batteries and Adapters:'+sum)
}())