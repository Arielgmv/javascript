//Crear una clase y crear el constructor
/*class Coche{
    constructor(ruedas, largo, ancho, motor, peso){
        this.ruedas=ruedas;
        this.largo=largo;
        this.ancho=ancho;
        this.motor=motor;
        this.peso=peso;
    };
};*/
function Coche(ruedas, largo, ancho, motor, peso){
    this.ruedas=ruedas;
    this.largo=largo;
    this.ancho=ancho;
    this.motor=motor;
    this.peso=peso;
}
//Crear un objeto - instanciar
var coche_uno=new Coche(4, 100, 50, 1600, 90);

//Recuperar datos
document.write(coche_uno.motor);