export async function fetchData( method: string, body?: any) {
    const URL = 'http://localhost:3010/hunters_registered/register'
   console.log(URL)
    const response = await fetch(`${URL}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Erreur lors de la requète');
    }
}