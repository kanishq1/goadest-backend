
const bpgc = {
    latitude: 15.391309782346525,
    longitude: 73.87819378397855
}

function getDistfromCoords(lat, long) {
    const R = 6371;
    const dLat = Math.abs(degtorad(Math.abs(bpgc.latitude - lat)));
    const dLong = Math.abs(degtorad(Math.abs(bpgc.longitude - long)));
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degtorad(bpgc.latitude)) * Math.cos(degtorad(lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dist = R * c;
    return dist;
}
function degtorad(deg) {
    return deg * (Math.PI / 180)
}

module.exports = getDistfromCoords;