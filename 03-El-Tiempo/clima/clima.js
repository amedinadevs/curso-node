const axios = require("axios");

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=54333cd5665f3d4644e349fb8709776f&units=metric`);

    return resp.main.temp;
}

module.exports = {
    getClima
}