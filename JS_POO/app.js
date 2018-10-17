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
    reproducir(){
        return `Reproduciendo una película ${this.nombre}`;
    }
}

class Serie extends Pelicula{
    reproducirCapitulo(){
        return `Reproduciendo capítulo...${this.nombre}`;
    }
}

const peliculaUno=new Pelicula('Harry',1);
const peliculaDos=new Pelicula('Araña',2);
const serieUno=new Serie('Dexter', 3);

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducirCapitulo());