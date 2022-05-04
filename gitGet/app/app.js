fetch('http://localhost:8080/get/ssh_key')
.then(response => response.text())
.then(data => afterlinkfetch(data));
function afterlinkfetch(data) {
    console.log
	var el = document.querySelector('code');
	
	// <a href="/javascript/manipulation/creating-a-dom-element-51/">create a new element</a> that will take the place of "el"
	var newEl = document.createElement('code');
	newEl.innerHTML = '<code>' + data + '</code>';
	
	// replace el with newEL
	el.parentNode.replaceChild(newEl, el);
}