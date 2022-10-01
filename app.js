const getTextFile = ()=>{
    fetch('textfile.txt').then((res)=>{
        return res.text()
    }).then((data)=>{
        document.querySelector('#output').innerHTML += data + '<br>'
    })
}

const getJsonFile = ()=>{
    fetch('article.json').then((res)=>{
        return res.json()
    }).then((res)=>{
        let output = "<ul>"

        res.forEach(article => {
            output += `<li> Başlık ${article.title} - İçerik ${article.body} </li>`
        });
        document.querySelector('#output').innerHTML += output
    })
}

const getWebsite = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        return res.json()
    }).then((res)=>{
        let output = "<ul>"
        res.forEach((data)=>{
            output += `<li>${data.title} - <br>${data.body} </li>`
        })
        output += "</ul>"

        document.querySelector('#output').innerHTML += output + '<br>'
    })
}
document.querySelector('#button1').addEventListener('click',getTextFile)

document.querySelector('#button2').addEventListener('click',getJsonFile)


document.querySelector('#button3').addEventListener('click',getWebsite)