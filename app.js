const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async() => {
    let coors = await lugar.getLugar(argv.direccion);
    let temperatura = await clima.getClima(coors.lat, coors.lng);

    return `El clima en ${coors.direccion} es ${temperatura}`;
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))