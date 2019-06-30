// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'Validator')

app.appendChild(container)

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://serene-tundra-70252.herokuapp.com/organization.json', true)

request.onload = function(){
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(attribute => {
            // Create a div with a Validator class
            const card = document.createElement('a')
            card.setAttribute('class', 'Validator')
            card.setAttribute('href', 'enter.html')

            const h1 = document.createElement('h1')
            h1.textContent = attribute.title

            // Log each attribute
            console.log(attribute.title)

            // Append the cards to the container element
            container.appendChild(card)

            // Each card will contain an h1
            card.appendChild(h1)
        })
    } else {
        console.log('error')
    }
}

// Send request
request.send()
