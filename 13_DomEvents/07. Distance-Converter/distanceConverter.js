function attachEventsListeners() {
    const [inputDistanceField, convertButton, outputDistanceField] =
        document.getElementsByTagName('input');

    const [inputUnitOption, outputUnitOption] =
        document.getElementsByTagName('select');

    const ratesToMeter = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.02554,
    }

    convertButton.addEventListener('click', convert);

    function convert(e) {
        const inputDistance = inputDistanceField.value;
        const inputUnits = inputUnitOption.value;
        const outputUnits = outputUnitOption.value;

        let result = inputDistance * ratesToMeter[inputUnits] / ratesToMeter[outputUnits];
        outputDistanceField.value = result;
    }
}