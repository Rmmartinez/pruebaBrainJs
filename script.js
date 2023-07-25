//vamos a determinar si un color es claro u oscuro, haciendo uso de
//machine learning 

window.onload = iniciar; 


//Los valores del RGB deben estar entre 0 y 1, por lo tanto, 
//divido por 255 para obtener los que serán utilizados
function iniciar(){
    const redNeuronal = new brain.NeuralNetwork();

    const datos = [
        {
            "input": { "R":0.78, "G":0.9, "B":1 }, //celeste claro
            "output": { "Claro": 1 }
        }, 
        {
            "input": { "R":0.2, "G":0.11, "B":0.2 }, //azul oscuro
            "output": { "Oscuro": 1 }
        }, 
        {
            "input": { "R":0.1, "G":0.2, "B":0.3 }, 
            "output": { "Oscuro": 1 }
        }, 
        {
            "input": { "R":0.74, "G":0.78, "B":0.86 }, 
            "output": { "Claro": 1 }
        }
    ];

    redNeuronal.train(datos);


    //rojo oscuro casi negro, debería devolver "Oscuro"
    let resultado = brain.likely({"R":0.19, "G":0.07, "B":0.09}, redNeuronal);
    
    //verde claro, debería devolver "Claro"
    //let resultado = brain.likely({"R":0.54, "G":0.98, "B":0.61}, redNeuronal);
    alert(resultado);
}