
var args = $.args;

Ti.API.info(args);


// Ti.API.info('ventana Index');
// Ti.API.info(args.argsIndex.texto);
// Ti.API.info(args.argsIndex.objTextFiel.value);
// Ti.API.info(args.argsIndex.all.texto.value)  

// Ti.API.info('ventana 1');
// Ti.API.info(args.textUno); 
// Ti.API.info(args.textFieldUno.value); 
// Ti.API.info(args.allUno.campo1.value);



$.boton2.addEventListener('click', function(e){
    args.changeButton(args.textUno, $.campo2.value);

    $.dos.close();
    args.parent.close();

});






$.botonCerrar.addEventListener('click', function(e){
    $.dos.close();
});