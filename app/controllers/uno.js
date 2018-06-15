
var args = $.args;

Ti.API.info(args);

// Ti.API.info(args.texto);
// Ti.API.info(args.objTextFiel.value);
// Ti.API.info(args.all.texto.value);


// $.campo1.setValue(args.texto);


$.boton1.addEventListener('click', function(e){

    var objUno = {
        'argsIndex' : args,
        'textUno' : $.campo1.value,
        'textFieldUno' : $.campo1,
        'allUno' : $,
        'changeButton' : args.changeButton
    }

    Alloy.createController('dos', objUno).getView().open();
});



$.botonCerrar.addEventListener('click', function(e){
    $.uno.close();
});



// text => Obj

// JSON.parse();


// Obj =>  text

// JSON.stringify()



// var resultTexField = {
//     'texto' : $.texto.getValue(),
//     'objTextFiel' : $.texto,
//     'all' : $
// };

