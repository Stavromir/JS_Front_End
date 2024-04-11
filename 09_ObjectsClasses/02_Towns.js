function townList(array) {

    for (const entry of array) {
        const [town, latitude, longitude] = entry.split(" | ");

        let currentTown = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };
        console.log(currentTown);
    }
}

townList(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);