export const weatherApi = async (city) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=51190f9769464b56aaa124346253103&q=${city}`)
        if (!response.ok) {
            throw new Error(`Response status ${response.status}`)
        }

        const json = await response.json()
        console.log(json);
        return json;

    } catch (error) {
        console.log(error.message);
        return null;
    }
}