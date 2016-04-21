import persistencia from "./persistencia";
import {guid} from "./utils";

class Notas
{
    constructor()
    {
        this.listado = [];
    }
    setListado(nota)
    {
        this.listado.push(nota);
    }
    //Lleva los datos de las notas...
    getListado()
    {
        return this.listado;
    }

    //Para guardar una nueva nota...
    adicionaNota(nota, callback)
    {
        nota.guid = guid();
        persistencia.crudData({data : nota}, error =>
        {
            if(!error)
            {
                this.listado.push(nota);
            }
            callback(error);
        });
    }
}
module.exports = {Notas};
