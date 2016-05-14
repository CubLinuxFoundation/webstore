document.getElementById('search').addEventListener('keypress', function(e){
	if(e.keyCode==13){
		var val = document.getElementById('search').value;
		window.open('https://chrome.google.com/webstore/search/'+val, '_blank');
	}
});

document.getElementById('wpsOfficeBtn').addEventListener('click', function(e){
	window.open('https://www.wps.com/linux', '_blank');
});

document.getElementById('libreOfficeBtn').addEventListener('click', function(e){
	window.open('https://www.libreoffice.org/discover/libreoffice/', '_blank');
});