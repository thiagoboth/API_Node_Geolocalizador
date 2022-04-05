# API_Node_Geolocalizador
Desafio Back-End da Calindra: recebe latitude e longitude e aplica o algorítmo de cálculo de distância Euclidiana em todas as localizações inseridas.
Não consome API do google por estar disponível somente versão paga até onde achei.

# Clone este repositório
$ git clone <https://github.com/thiagoboth/API_Node_Geolocalizador.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd API_Node_Geolocalizador

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Exemplo de body
[
    {
        "latitude": -20.838485987795494,
        "longitude": -49.41434030072999
    },
    {
        "latitude": -20.834136341754874,
        "longitude": -49.40587227536232
    },
    {
        "latitude": -20.83395363294459,
        "longitude": -49.40592356664784
    }
]
