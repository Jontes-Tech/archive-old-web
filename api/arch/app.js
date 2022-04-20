fetch('https://api.jontehosted.tk/api/arch-rackspace-latest')
.then(response => response.text())
.then(data => replaceLink(data));

function replaceLink(data) {
  var a = document.querySelector('a[href="https://go.jontes.page/arch-api"]');
  if (a) {
    a.setAttribute('href', data);
}
}