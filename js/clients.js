'use strict'

const url = "https://backendleonid.herokuapp.com/clientes"

const readClients = () => {
    const options = {
        
    }
    const response = await fetch(url)
    console.log(await response.json())
}

export{
    readClients
}