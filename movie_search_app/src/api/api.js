export const apiUrl = 'https://www.omdbapi.com/?apikey=fc3dde87&s=';
export const apiImdbUrl = 'https://www.omdbapi.com/?apikey=fc3dde87&i=';

export const movieSearch = async (value) => {

    try {
        const response = await fetch(`${apiUrl}${value}`)
        if (!response.ok) {
            console.log('something went wrong');
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("No good", error);
    }
}

export const moreInfo = async (id) => {
    try {
        const response = await fetch(`${apiImdbUrl}${id}`);
        if(!response.ok) {
            console.log('Something went wrong');
            return null;
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.log('No good', err);
        return null
    }
}