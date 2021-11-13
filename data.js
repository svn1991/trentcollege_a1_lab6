const baseURL = "http://api.foursquare.com/";
const clientID = "V4DJND13CAH3C3US4NIE3BO2VRDIXTPGMMO3Y2COVBHY2CRW";
const clientSecret = "03N3XGJIC5I0UM1ZPR1DB2DSVP4CSVVTRIBMGOM3ISQPH0VL";
const version = "v1";

async function search(lat, lng, query) {
    // setup search parameters
    let ll = lat + "," + lng;
    let response = await axios.get(baseURL+'venues/search', {
        params: {
            'll': ll,
            'client_id': clientID,
            'client_secret': clientSecret,
            'v': version,
            'query': query
        }
    })
    return response.data;
}