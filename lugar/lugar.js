const axios = require('axios');

const getLugar = async(direccion) => {
    let encondedUrl = encodeURI(direccion)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl}+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCH4ZYiPhPWzjEG8v608UISgwD1A8HhjhE`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No existen resultados para ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}


module.exports = {
    getLugar
}