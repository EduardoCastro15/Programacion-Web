//crear BD

var base = openDatabase('BaseDatosPila', '1.0', 'Base de datos pila', 2 * 1024 * 1024);

if (!base) { //si no se creo
    alert('No se ha creado la base de datos');
} else {
    var version = base.version;
}

//crear tabla
base.transaction(function(tran) {
    tran.executeSql('drop table IF EXISTS pilita');
    tran.executeSql('create table pilita(Elemento)'); // en esta tabala se guardaran las estructuras

    tran.executeSql('insert into pilita (Elemento) values ("A")');
    tran.executeSql('insert into pilita (Elemento) values ("B")');
    tran.executeSql('insert into pilita (Elemento) values ("C")');
    tran.executeSql('insert into pilita (Elemento) values ("D")');
    tran.executeSql('insert into pilita (Elemento) values ("E")');
    tran.executeSql('insert into pilita (Elemento) values ("F")');

});

function mostrar() {
    base.transaction(function(tran) {
        tran.executeSql('SELECT * FROM pilita', [], function(tran, data) {

            var html = '<div id="bd"><form action="Formulario.html" method ="get" name="forml"><table><thead><tr><th colspan="1"> Pila</th></tr><tr><th> Elemento </th></thead></tbody>';
            for (var i = 0; i < data.rows.length; i++) {
                html += '<tr><td>' + data.rows[i].Elemento + '</td>';
            }
            document.getElementById('bd').innerHTML = html;
        })
    })
}