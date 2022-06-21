console.log('Hola')

function ingresar() {
    var usuario = document.getElementById('typeEmailX').value;
    var contrasenia = document.getElementById('typePasswordX').value;

    console.log(usuario, contrasenia)
    if ((usuario == 'u20181h213' && contrasenia == 'finanzas2022') || (usuario == 'u202014476' && contrasenia == 'finanzas2022'))
        window.location.replace('/Trabajo---Ing---Econ-mica/metodo_frances.html')

}