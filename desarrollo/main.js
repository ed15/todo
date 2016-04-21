import {getData} from "./persistencia"
import clasePersona from "./Nota";
import clasePersonas from "./Notas";
import utils from "./utils";

//Se invoca la clase de tipo Personas...
let notas    = new claseNotas.Notas(),
    guidEdita   = "";

//Los elementos del formulario...
const elementos = ["txt1"];
//Para las acciones a realizar....
let accionesEventos = div =>
{



//Para guardar los datos de un nuevo usuario...
//Acciones sobre el botón guardar...
utils.nom_div("guarda").addEventListener('click', function(event)
{
    let correcto     = true,
        nuevaNota = {};
    for(let i = 0; i < elementos.length; i++)
    {
        if(utils.nom_div(elementos[i]).value === "")
        {
            alert(`Por favor digite ${elementos[i]}`);
            utils.nom_div(elementos[i]).focus();
            correcto = false;
            break;
        }
        else
        {
            nuevaNota[elementos[i]] = utils.nom_div(elementos[i]).value;
        }
    }

  });

//Para traer la información que está en la persistencia...
getData((data) =>
{
    for(let i = 0; i < data.length; i++)
    {
        notas.setListado(new claseNota.Nota(data[i]));
    }
    imprimeUsuarios();
});

//Limpiar los campos del formulario...
let limpiarCampos = () =>
{
    guidEdita = "";
    for(let i = 0; i < elementos.length; i++)
    {
        utils.nom_div(elementos[i]).value = "";
    }
};
