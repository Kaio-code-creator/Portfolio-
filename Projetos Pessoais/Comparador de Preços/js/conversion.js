function convertToGrams(measure, unit) {
    switch (unit) {
        case 'gramas':
            return measure;
        case 'quilogramas':
            return measure * 1000;
        case 'mililitros':
            return measure;
        case 'litros':
            return measure * 1000;
        default:
            return measure;
    }
}

function convertToReais(price, unit) {
    return unit === 'centavos' ? price / 100 : price;
}