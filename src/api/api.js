
// Construct3 JSON - Trigger AJAX
const api = 'https://jupitergame-2300e-default-rtdb.firebaseio.com/ranking.json';


 // Export API
export async function Api() {
    var arrayItem = []
    var NewArray = []
    arrayItem = await fetch(api)
        .then(res => res.json(0))


    // Jogador & Score - Key 
    for (var key in arrayItem) {
        NewArray.push({ JOGADOR: key.toUpperCase(), score: arrayItem[key] })
    }

    return NewArray;
}