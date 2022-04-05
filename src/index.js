const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

function distance(lat1, lon1, lat2, lon2) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 'a';
	}

    dist = (lat1 - lat2) * (lat1 - lat2) + (lon1 - lon2) * (lon1 - lon2)

    dist = Math.sqrt(dist)
    console.log(dist)
    return dist;
}

app.post('/', (req, res) => {
    const body = req.body;

    let calculos = []
    let menorResultado 
    let maiorResultado 

    if(!body[1]) {
        return res.status(400).end();
    }

    body.map(primeira_coordenada => {
        body.map(segunda_coordenada => {
            if((primeira_coordenada.latitude !== segunda_coordenada.latitude) && (primeira_coordenada.longitude !== segunda_coordenada.longitude)){
                distancia_euclidiana = distance(primeira_coordenada.latitude, primeira_coordenada.longitude, segunda_coordenada.latitude, segunda_coordenada.longitude)

                const resultado = {
                    primeira_coordenada: primeira_coordenada,
                    segunda_coordenada: segunda_coordenada,
                    calculo: distancia_euclidiana
                }

                if(!menorResultado) {
                    menorResultado = resultado;
                }

                if(!maiorResultado) {
                    maiorResultado = resultado;
                }

                if(resultado.calculo < menorResultado.calculo) {
                    menorResultado = resultado;
                }

                if(resultado.calculo > menorResultado.calculo) {
                    maiorResultado = resultado;
                }
            }
        }) 
    })

    const response = {
        menorResultado: menorResultado,
        maiorResultado: maiorResultado,
        distancias: calculos,
    }

    return res.json(response)
})

app.listen(3030, () => {
    console.log('Express started at http://localhost:3030')
})