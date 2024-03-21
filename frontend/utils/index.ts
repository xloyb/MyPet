
export async function FetchAllPets() {
    const headers = {
        'X-RapidAPI-Key': 'de9054b2ffmsh9425b8118948d9bp177c4ajsn1423220eb99c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        { headers: headers, });

    const result = await response.json();

    return result;
}