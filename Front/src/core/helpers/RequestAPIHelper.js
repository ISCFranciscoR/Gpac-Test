function doRequestTalentAPI(type = 'list', method = 'POST', parameters = {}) {
    return fetch(`https://gpac-test.herokuapp.com/api/v1/talent/${type}`, {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(parameters)
    }).then(res => res.json());
}



export { doRequestTalentAPI }