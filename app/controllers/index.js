
$.index.open();


function changeButton(_newTitle, _newColor){
	Ti.API.info(_newTitle + ',' + _newColor);
	$.envio.setTitle(_newTitle);
	$.envio.setBackgroundColor(_newColor);
}


$.envio.addEventListener('click', function(e){

	// changeTitle($.texto.value, 'red');


	var resultTexField = {
		'texto' : $.texto.getValue(),
		'objTextFiel' : $.texto,
		'all' : $,
		'changeButton' : changeButton
	};


	var uno = Alloy.createController('uno',  resultTexField).getView().open();

});

// ventana 1 texto;
// ventana 2 color;








