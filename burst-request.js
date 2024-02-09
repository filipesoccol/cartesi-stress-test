const numberOfRequests = Number(process.argv[2])
const url = process.argv[3]

for (let i = 0; i < numberOfRequests; i++) {
    fetch(url, {
        method: 'GET'
    }).then((res) => {
        const json = res.status + ' - ' + res.statusText
        console.log(json)
    }).catch((error) => {
        console.log('ERROR:', error)
    });
}
