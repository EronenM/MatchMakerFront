
// -- Export funktio haeFieldOfInterest palauttaa fetchin, jossa .then ottaa promisen kiinni
// -- Tämä promise palautetaan parsittuna APIOutput komponentille.
export function haeFieldOfInterest (){
    return fetch('/api/form/fieldofinterest')
    .then(function(response) {
        return response.json();
    })
}

export function haePosition (){
    return fetch('/api/form/position')
    .then(function(response) {
        return response.json();
    })
}

export function haeTechnology (){
    return fetch('/api/form/technologies')
    .then(function(response) {
        return response.json();
    })
}
// --------- Ylläolevat on GET käskyjä preference formin dropdown menuille

export function getAllUsers(){
    return fetch('/api/form/Getall')
    .then(function(response){
        return response.json();
    })
}
// --------- Ylläoleva hakee kaikki käyttäjät API:n Getall toiminnolla

export function logInUser(logInData){
    let options = {
        method: "GET",
        body : JSON.stringify(logInData),
        headers: {
            "Content-Type" : "application/json"
        }
    }
    return fetch('POIKIEN LOGIN API URL', options)
}
// ---------- Ylläoleva kirjaa sisään käyttäjän, en osaa sanoa 11.39 PM onko sen HTTP pyynnön metodi GET vai POST? LOL :D

export function createNewUser(newUserData){
    let options = {
        method: "POST",
        body : JSON.stringify(newUserData),
        headers: {
            "Content-Type" : "application/json"}
    }
    return fetch('/api/people/create',options)
    
}
// Ylläoleva luo uuden käyttäjän


export function createPreferences(newPreferenceData){
    console.log(newPreferenceData);
    let options = {
        method: "POST",
        body: JSON.stringify(newPreferenceData),
        headers: {
            "Content-Type" : "application/json"}
    }
    return fetch('/api/form/CreatePreferences',options)
}

export function fetchPost(uusi){
    let options={method:"POST", headers:{"Content-Type":"application/json", Accept:"application/json", body:JSON.stringify(uusi)}};
    return fetch("apiurl",options).then(response=>response.json());
}


// Miten tämä käyttäytyy JSONin kanssa? Pitääkö parsia tms?
// Miten eroaa jos tehdään POST / PUT / DELETE