const Ninja = require("./ninja");

class Sensei extends Ninja {
    constructor(nombre, salud, velocidad, fuerza, sabiduria) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = 10;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }

    
}

const supersensei = new Sensei("ferney");
supersensei.speakWisdom();
supersensei.drinkSake();



// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// // -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
// superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"


// Extiende la clase Ninja y crea la clase Sensei.
// Un Sensei debe tener 200 de salud, 10 de velocidad y 10 de fuerza por defecto.
// Además, un Sensei debe tener un nuevo atributo llamado sabiduría , y el valor predeterminado debe ser 10.
// Finalmente, agrega el métodospeakWisdom(). speakWisdom()debe llamar al métododrinkSake() desde la clase Ninja,
//  antes de hacer console.logging un mensaje de sabiduría.


// crear una clase Sensei que hereda de la clase Ninja
// agregar un atributo: sabiduría - predeterminado a 10
// crear un método: speakWisdom ()
// crear un método: drinkSake ()
