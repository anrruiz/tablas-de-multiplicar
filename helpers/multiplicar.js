const colors = require('colors');


const fs = require('fs');


const Crefi= async(base = 5, listar= true, hasta= 10)=>{

    try {
        
        let salida,consola = '';

        
        for(let i=1; i <=hasta; i++){
            salida +=`${base} x ${i} = ${base * i}\n`;
            consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar){
            console.clear();
            console.log("============".green);
            console.log('Tabla del:'.green, colors.blue(base) );
            console.log("============".green);
            console.log(consola);

        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado`;
        
    } catch (err) {
        throw err;
    }

}

module.exports= {
    Crefi
}