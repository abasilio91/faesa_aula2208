const path = require('path') //nativo do nodeJS - corrige o caminho de acordo com o SO

//path.resolve(__dirname,'pasta','arquivo')

module.exports = {
    entry: path.resolve(__dirname,'src','index.js'), //ponto de entrada das informações
    output: {                                       
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },                                               //ponto de saída
    
    devServer: {
        contentBase: path.resolve(__dirname,'public')
    },                                               //comando para indicar a pasta base do servidor local
    
    module:{
        rules: [
            {
                test: /\.js$/,                       //expressão regular que vai buscar todos os JS para transpilar
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}