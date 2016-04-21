(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nota = function () {
    function Nota(data) {
        _classCallCheck(this, Nota);

        this.guid = data.guid;
        this.txt1 = data.txt1;

    }

    _createClass(Nota, [{
        key: "getNota",
        value: function getPersona() {
            return [this.guid, this.txt1];
        }
    }]);

    return Nota;
}();

module.exports = { Nota: Nota };

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _persistencia = require("./persistencia");

var _persistencia2 = _interopRequireDefault(_persistencia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notas = function () {
    function Notas() {
        _classCallCheck(this, Notas);

        this.listado = [];
    }

    _createClass(Notas, [{
        key: "setListado",
        value: function setListado(nota) {
            this.listado.push(nota);
        }
        //Lleva los datos de las notas...

    }, {
        key: "getListado",
        value: function getListado() {
            return this.listado;
        }



        //Para saber si ya existe una persona...
        /*
            idedita -> Identificacion usuario que se esté editando, 0 si no existe...
            identificacion -> Identificación nuevo usuario...
            Email -> email nuevo usuario...
        */

    }]);

    return Notas;
}();

module.exports = { Notas: Notas };

},{"./persistencia":5}],3:[function(require,module,exports){
"use strict";

/*
Tipo de persistencia local:

localStorage

    Tan sólo es necesario enviar el nombre de la persistencia y el tipo...
    let config = {nombre : "nombrePersistencia", tipo   : "localStorage"};

WebSQL.

    Se deberá enviar la estructura que se manejará, para este caso sólo se maneja un sólo esquema (tabla)...
    let config = {
                    nombre : "nombrePersistencia",
                    tipo   : "WebSQL",
                    schema : {
                                nombre    : "nombreTabla",
                                registros : ["nombreRegistro1", "nombreRegistro2", "nombreRegistroN"]
                            }
                };
    Nota: Este tipo de persistencia no está presente en todos los navegadores: http://caniuse.com/#feat=sql-storage
*/
//Configuración ejemplo persistencia usuarios con localStorage...
var config = { nombre: "listadoUsuario", tipo: "localStorage" };
/*
    //Configuración ejemplo persistencia usuarios con WebSQL...
    let config = {
                    nombre : "listadoUsuario",
                    tipo   : "WebSQL",
                    schema : {
                                nombre    : "usuarios",
                                registros : [
                                                "guid",
                                                "identificacion",
                                                "primernombre",
                                                "primerapellido",
                                                "email",
                                                "fechanacimiento"
                                            ]
                            }
                };
*/
module.exports = { config: config };

},{}],4:[function(require,module,exports){
"use strict";

var _persistencia = require("./persistencia");

var _Nota = require("./Nota");

var _Nota2 = _interopRequireDefault(_Nota);

var _Notas = require("./Notas");

var _Notas2 = _interopRequireDefault(_Notas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Se invoca la clase de tipo Personas...
var notas = new _Notas2.default.Notas(),
    guidEdita = "";

//Los elementos del formulario...
var elementos = ["txt1"];
//Para las acciones a realizar....
var accionesEventos = function accionesEventos(div) {
    //Editar..
    _utils2.default.nom_div("e_" + div).addEventListener('click', function (event) {
        var guid = _utils2.default.nom_div("p_" + event.target.id.split("_")[1]).getAttribute("data");

//Para guardar los datos de un nuevo usuario...
//Acciones sobre el botón guardar...
_utils2.default.nom_div("guarda").addEventListener('click', function (event) {
    var correcto = true,
        nuevaNota = {};
    for (var i = 0; i < elementos.length; i++) {
        if (_utils2.default.nom_div(elementos[i]).value === "") {
            alert("Por favor digite " + elementos[i]);
            _utils2.default.nom_div(elementos[i]).focus();
            correcto = false;
            break;
        } else {
            nuevaNota[elementos[i]] = _utils2.default.nom_div(elementos[i]).value;
        }
    }
    /
//Para traer la información que está en la persistencia...
(0, _persistencia.getData)(function (data) {
    for (var i = 0; i < data.length; i++) {
        notas.setListado(new _Nota2.default.Nota(data[i]));
    }
    imprimeUsuarios();
});

//Limpiar los campos del formulario...
var limpiarCampos = function limpiarCampos() {
    guidEdita = "";
    for (var i = 0; i < elementos.length; i++) {
        _utils2.default.nom_div(elementos[i]).value = "";
    }
};

},{"./Nota":1,"./Notas":2,"./persistencia":5,"./utils":6}],5:[function(require,module,exports){
"use strict";

var _configPersistencia = require("./configPersistencia");

var dataPersistencia = ""; /*
                               Persistencia Local.
                               CRUD Local por WebSQL o localStorage
                               Desarroolado por: Jorge Rubiano - @ostjh
                               http://jorger.github.io/page/es/
                           */

var getData = function getData(callback) {
    //Primero saber el tipo de persistencia establecido...
    if (_configPersistencia.config.tipo.toLowerCase() === "localstorage") {
        var data = [];
        dataPersistencia = localStorage.getItem(_configPersistencia.config.nombre);
        if (dataPersistencia) {
            data = JSON.parse(dataPersistencia);
        }
        callback(data);
    } else {
        if (_configPersistencia.config.tipo.toLowerCase() === "websql") {
            if (window.openDatabase) {
                dataPersistencia = openDatabase(_configPersistencia.config.nombre, "0.1", "Base de datos de usuarios", 1024 * 1024);
                dataPersistencia.transaction(function (table) {
                    var sql = "";
                    for (var i = 0; i < _configPersistencia.config.schema.registros.length; i++) {
                        if (sql !== "") {
                            sql += ", ";
                        }
                        sql += _configPersistencia.config.schema.registros[i] + " TEXT";
                    }
                    table.executeSql("CREATE TABLE IF NOT EXISTS " + _configPersistencia.config.schema.nombre + "\n                                     (id INTEGER PRIMARY KEY ASC, " + sql + ")");
                });
                if (dataPersistencia) {
                    dataPersistencia.transaction(function (transaction) {
                        transaction.executeSql("SELECT * FROM " + _configPersistencia.config.schema.nombre, [], function (transaction, results) {
                            if (results.rows.length !== 0) {
                                var _data = [];
                                for (var i = 0; i < results.rows.length; i++) {
                                    _data.push(results.rows.item(i));
                                }
                                callback(_data);
                            } else {
                                callback([]);
                            }
                        }, function () {
                            alert("Error conectado a WebSQL");
                        });
                    });
                } else {
                    alert("La base de datos no existe!");
                    callback([]);
                }
            } else {
                alert("WebSQL no está soportado en el navegador");
                callback([]);
            }
        }
    }
};

//Para buscar un ítem en LocalStorage...
var buscaLocalStorage = function buscaLocalStorage(local, registro) {
    var indice = -1;
    for (var i = 0; i < local.length; i++) {
        if (local[i][registro.campo] === registro.guid) {
            indice = i;
            break;
        }
    }
    return indice;
};

//Guarda las datos en localStorage
var crudData = function crudData(_ref, callback) {
    var registro = _ref.registro;
    var data = _ref.data;
    var _ref$type = _ref.type;
    var type = _ref$type === undefined ? "create" : _ref$type;

    if (_configPersistencia.config.tipo.toLowerCase() === "localstorage") {
        var local = localStorage.getItem(_configPersistencia.config.nombre) ? JSON.parse(localStorage.getItem(_configPersistencia.config.nombre)) : [],
            error = false;
        if (type === "update" || type === "delete") {
            var indice = buscaLocalStorage(local, registro);
            if (indice >= 0) {
                if (type === "delete") {
                    local.splice(indice, 1);
                } else {
                    local[indice] = data;
                }
            } else {
                error = true;
            }
        } else if (type === "create") {
            local.push(data);
        } else {
            error = true;
        }
        if (!error) {
            localStorage.setItem(_configPersistencia.config.nombre, JSON.stringify(local));
        }
        callback(error);
    } else {
        //Para traer sólo la la data del último usuario...
        if (dataPersistencia) {
            dataPersistencia.transaction(function (t) {
                if (type === "delete") {
                    t.executeSql("DELETE FROM " + _configPersistencia.config.schema.nombre + " WHERE " + registro.campo + "=?", [registro.guid], callback(false));
                } else {
                    var sql = "",
                        campos = "",
                        dataGuarda = [],
                        ejecutaSQL = "";
                    for (var i = 0; i < _configPersistencia.config.schema.registros.length; i++) {
                        if (sql !== "") {
                            sql += ", ";
                            campos += ", ";
                        }
                        sql += "" + _configPersistencia.config.schema.registros[i] + (type === "update" ? "=?" : "");
                        campos += "?";
                        dataGuarda.push(data[_configPersistencia.config.schema.registros[i]]);
                    }
                    if (type === "create") {
                        ejecutaSQL = "INSERT INTO " + _configPersistencia.config.schema.nombre + " (" + sql + ") VALUES (" + campos + ")";
                    } else {
                        dataGuarda.push(registro.guid);
                        ejecutaSQL = "UPDATE " + _configPersistencia.config.schema.nombre + " SET " + sql + " where " + registro.campo + "=?";
                    }
                    t.executeSql(ejecutaSQL, dataGuarda, callback(false));
                }
            });
        }
    }
};

module.exports = { getData: getData, crudData: crudData };

},{"./configPersistencia":3}],6:[function(require,module,exports){
"use strict";

//Para el acceso al DOM...
var nom_div = function nom_div(param) {
    return document.getElementById(param);
};

//http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
var guid = function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
};

module.exports = {
    nom_div: nom_div,
    guid: guid
};

},{}]},{},[4]);
