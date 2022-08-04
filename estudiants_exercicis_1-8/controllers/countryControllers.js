const { CountryModel } = require('../models/country');

const Country = require('../models/country').CountryModel;

exports.getHomePage = (req, res) => {
    res.render('index');
}

exports.postSendData = async (req, res) => {

    const {country, population, urlFlag } = req.body;

    const country2 = new Country ({
        name: country,
        flagURL: urlFlag,
        population: population
        
    });

    /* console.log('El valor de country ', country); */

    await country2.save();
    

    res.send("Dades rebudes:" + JSON.stringify(country2));

    /* await mongoose.disconnect(); */
}

