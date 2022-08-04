{
    async function getCountryDetails() {

        const response = await fetch(`https://restcountries.com/v3.1/name/`);


        const data = await response.json();
        

        return data;

    }

    /**
     * Exercici 5b. Haz que las opciones del array de objetos 'optionsValues' se carguen dinàmicamente cuando la pàgina se renderice en el navegador
     */
    function setDynamicOptions() {
        const optionsValues = [{
            value: 'spain',
            label: 'España'
        }, {
            value: 'venezuela',
            label: 'Venezuela',
        }, {
            value: 'peru',
            label: 'Perú'
        }
        ]
    }

    setDynamicOptions();

    /** 
     * 
     * EJERCICIO 6
     */

    async function setCountryFlag(event) {
        let countryName = event.target.value;

        let countryData = await getCountryDetails(countryName);
        // Descomenta la següent línia si no has aconseguit implementar la primera part de l'exercici. Comenta la línia anterior també.   
        //let countryData = await getCountryDetailsFake(countryName);

    }

    function getCountryDetailsFake(countryName) {
        const data = {
            spain: "https://flagcdn.com/es.svg",
            france: "https://flagcdn.com/fr.svg",
            italy: "https://flagcdn.com/it.svg"
        }

        return data.countryName;
    }



    // Descomentar para probar el Ejercicio 6
    // console.log("Información sobre España:", getCountryDetails('spain'));

    document.querySelector('.w3-select').onchange = setCountryFlag;

}
