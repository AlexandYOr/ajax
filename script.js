const getData = (url) => {
    fetch(url)
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            sendData({
                url: 'https://jsonplaceholder.typicode.com/posts',
                obj: data
            })
        })
        .catch(() => console.log("Ошибка получения данных!"))
}

const sendData = ({ url, data }) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
        .then(() => console.log("Данные отправлены!"))
        .catch(() => console.log("Ошибка отправки данных!"))
}

getData('db.json')