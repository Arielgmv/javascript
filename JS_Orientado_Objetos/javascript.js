//Crear una clase
class miClase{
    constructor(primero, segundo){
        this.uno=primero;
        this.dos=segundo;
        this.tres="Hola a todos";
    };
    /*miMetodoUno(){
        return this.uno;
    }
    miMetodoDos(parametroUno, parametroDos){
        document.write(
            "El parametro UNO es: "+parametroUno+
            "<br>El parametro DOS es: "+parametroDos
        );
    }*/
};

//Crear un objeto - instanciar
var objetoUno = new miClase("Ariel", 777777);

//Recuperar datos
document.write(objetoUno.uno);
//document.write("<br>"+objetoUno.dos+"<br>");
//objetoUno.miMetodoDos("Ana", 3445);
    