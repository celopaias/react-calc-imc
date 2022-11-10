export const levels = [
{title:'Magreza', color: '#96a3ab', icon:'down', imc:[0,18.5], yourImc:null},
{title:'Normal', color: '#0ead69', icon:'up', imc:[18.6,24.9], yourImc:null},
{title:'Sobrepeso', color: '#e2b039', icon:'down', imc:[25,30], yourImc:null},
{title:'Obesidade', color: '#c3423f', icon:'down', imc:[30.1,99], yourImc:null}

]

export const calculateIMC = (height, weight) => {
    const imc = weight / ( height * height);
    
    for(let i in levels){
        if(imc >= levels[i].imc[0] &&
            imc < levels[i].imc[1]){
                let levelsCopy = {...levels[i]}
                levelsCopy.yourImc = parseFloat(imc.toFixed(2));
                return levelsCopy
            }


    }
    return null
}