// Declare function
function getTarget(e) {
// If there is no event object
  if (!e) {
// Use old IE event object  
    e = window.event;
  }
// Get the target of event
  return e.target || e.srcElement;
}



// Remove item from the list
// Declare function
function thisItemIsDone(e) {                           
// Get the item clicked link
  target = getTarget(e);                       
// If user clicked on an img element
  if ( target.nodeName.toLowerCase() == "img" ) {
	// Get its li element
    getLiElem = target.parentNode;
	// Get the ul element
    getUlElem = getLiElem.parentNode;
	// Remove list item from list
    getUlElem.removeChild(getLiElem);              
  }
  
  

// Prevent the link from taking you elsewhere
// If preventDefault() works
  if (e.preventDefault) {
// Use preventDefault()	  
    e.preventDefault();
// Otherwise	
  } else {
// Use old IE version	  
    e.returnValue = false;                       
  }
}


// Set up event listeners to call thisItemIsDone on click
// Get study-list
const getStudyList = document.getElementById('study-list');
// If event listeners work
if (getStudyList.addEventListener) {
// Add listener on click	
  getStudyList.addEventListener('click', function(e) {
// Call thisItemIsDone()	  
    thisItemIsDone(e);
// Use bubbling phase for flow	
  }, false);
// Otherwise  
} else {
// Use old IE model: onclick	
  getStudyList.attachEvent('onclick', function(e) {
// Call thisItemIsDone()	  
    itemDone(e);                                 
  });
}