import {promises as fs, read} from 'fs'
import readline from 'readline'

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
})

const getCities  = async (state) =>{
     return JSON.parse( await fs.readFile(`./Estados/${state}.json`,"utf-8"))
}

const getQtdCities = (state) =>{
     return  getCities(state).then( a => a.length )
}

const ascByQtdCitiesPerState = () =>{
     rl.question("Quantas cidades tem o estado de: ", estado =>{
          getQtdCities(estado).then((qtd) =>{
               console.log(`${estado} tem ${qtd} cidades`)
          })
          rl.close()
     })
}

const fiveMostPopulateStates = async () =>{
     const states = JSON.parse(await fs.readFile("Estados.json", "utf-8"))
     const qttyStates = await states.map( data => { 
          return getQtdCities(data.Sigla)
     })
    // console.log(qttyStates)
    return qttyStates
     // const sorted = qttyStates.sort((a,b) => a - b)
     
    // sorted.forEach((v) => v.then(a => console.log('>>' + a)))

     //const topFive = estados.sort((data) =>  )

}

const app = async () =>{
     //ascByQtdCitiesPerState()
    const data = await fiveMostPopulateStates()
    console.log(data)
}



app()




/*
mergeByState()
async function mergeByState(){
     try{
          const estados = JSON.parse(await fs.readFile("Estados.json", "utf-8"))
          const cidades = JSON.parse(await fs.readFile("Cidades.json", "utf-8"))
          estados.forEach((data)=>{
                    let estado = cidades.filter((cidade) => cidade.Estado === data.ID)
                    fs.writeFile(`./Estados/${data.Sigla}.json`,JSON.stringify(estado))
          })
     }catch(err){
          console.error(err)
     }
}
*/