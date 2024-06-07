let accion = 'actualizar';

switch (accion) {
    case 'listar':
        console.log('Acción de listar');
        // break; //Siempre que se usa un Case en switch se utiliza el "break" para poder de detener la impresión
    case 'guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Se ejecuta siempre y cuando no encuentre la variable que pueda corresponder');
}

// Utilizar switch y if con else es lo mismo

