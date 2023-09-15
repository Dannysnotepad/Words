/*
*Words
*from
*Dannysnotepad
*/

const form = document.getElementById('form')
const button = document.getElementById('submit')
const userInput = document.getElementById('userInput')

const searchResult = document.getElementById('searchResult')




/*
let wordSearch = () => {
  
  let input = userInput.value
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
 
    fetch(url)
      .then(data => data.json())
      .then(item => {
        console.log(item[0].meanings[0].definitions[0].definition)
        searchResult.textContent = `${item[0].meanings[0].definitions[0].definition}`
      })
}*/

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  let input = userInput.value
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
  let response
  
  let wordSearch = new XMLHttpRequest()
  wordSearch.open('GET', url)
  wordSearch.send()
  
  wordSearch.onload = () => {
    if (wordSearch.status === 200) {
      response = JSON.parse(wordSearch.response)
      console.log(response[0].meanings[0].definitions[0].definition)
      searchResult.textContent = `${response[0].meanings[0].definitions[0].definition}`
    } else if(wordSearch.status === 404){
      response = JSON.parse(wordSearch.response)
      console.log(response.title)
      searchResult.textContent = `${response.title}`
    }
  }
  wordSearch.onload()
    
})