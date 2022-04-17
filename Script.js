let realdata = ""

const quotes = document.getElementById("Textbox");
const quotes1 = document.getElementById("demo");

const getNewQuotes = () => {
    let num = Math.floor(Math.random() * 10)
    // console.log(realdata[num].author)
    quotes.innerText = `${realdata[num].text}`
    quotes1.innerText = ` Author : ${realdata[num].author}`
}

const getQuotes = async () => {
    const Api = "https://type.fit/api/quotes"
    try {
        let data = await fetch(Api)
        realdata = await data.json()
        getNewQuotes()
    }
    catch (error) {
        console.log(error)
    }
}

getQuotes()