const PeliculaUno = {
    nombre: 'Harry',
    id: 01,
    reproducir(){
        return `reproduciendo pelicula... ${this.nombre}`;
    }
}

class Pelicula {
    constructor(nombre, id){
        this.nombre= nombre;
        this.id=id;
    }
}
const peliculaUno=new Pelicula('Harry',1);
const peliculaDos=new Pelicula('Araña',2);

console.log(peliculaUno);
console.log(peliculaDos);