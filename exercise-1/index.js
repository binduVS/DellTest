/* I have written the basic code of the web page first and then made it responsive based on the viewport
    asked in the question. It can be done by using @media queries also but i preferred to manipulate the
    styling from js file.
*/ 
function setStyle( objId, propertyObject )
{
    if(objId === 'icon-card') {
    var elem = document.getElementsByClassName(objId);
     for (let property in propertyObject) {
         for(let i=0; i<elem.length; i++) {
         elem[i].style[property] = propertyObject[property];
         }
     }
    } else {
    var ele = document.getElementsByClassName(objId)[0];
     for (let property in propertyObject) {
     ele.style[property] = propertyObject[property];
         }
    }
}

function displayWindowSize(){
// MOBILE VIEW
if(document.documentElement.clientWidth <= 600) {
    setStyle('upper-container', {'display':'flex', 'flex-direction':'column'});
    setStyle('search-container', {'position':'absolute', 'top':'0', 'height':'40%', 'width':'100%'});
    setStyle('icons-container', { 'display':'flex', 'flex-direction':'column','position':'absolute', 'top':'41%', 'width':'100%', 'height':'70%'});
    setStyle('icon-card', {'height':'50%'});
    setStyle('lower-container', {'position':'absolute', 'top':'120%', 'height':'30%',  'width':'100%'});
 } 
// TABLET VIEW
else if(document.documentElement.clientWidth > 600 && document.documentElement.clientWidth <= 768){
    setStyle('upper-container', {'display':'flex', 'flex-direction':'column'});
    setStyle('search-container', {'position':'absolute', 'top':'0', 'height':'40%', 'width':'100%'});
    setStyle('icons-container',  {'display': 'grid','grid-gap': '20px', 'grid-template-columns': '47% 47%', 'grid-template-rows': '47% 47%','position':'absolute', 'top':'41%', 'height':'30%',  'width':'100%'});
    setStyle('icon-card', {'height':'100%'});
    setStyle('lower-container', {'position':'absolute', 'top':'72%', 'height':'30%',  'width':'100%'});
 } 
 else {
    setStyle('upper-container', {'display':'flex', 'flex-direction':'row'});
    setStyle('search-container', {'position':'relative', 'height':'70%', 'width':'43%'});
    setStyle('icons-container',{'display': 'grid','grid-gap': '20px','grid-template-columns': '47% 47%','grid-template-rows': '47% 47%','position':'relative','top':'0%', 'height':'100%',  'width':'55%' });
    setStyle('icon-card', {'height':'100%'});
    setStyle('lower-container', {'position':'relative','top':'0%', 'height':'30%',  'width':'100%'});
 }
}
displayWindowSize();
window.addEventListener("resize", displayWindowSize);
