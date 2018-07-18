const axios = require('axios');


const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cc782abf51470f5f2ac5444f76f50784`)
    if (resp.code === 200) {
        throw new Error(`No existen resultados`);
    }
    return resp.data.main.temp;
}

module.exports = {
    getClima
}