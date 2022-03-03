module.exports = {
  presets: [
    '@babel/preset-env', // entende o ambiente - js moderno e converte o js de acordo com o ambiente
    '@babel/preset-react' // adiciona as funções do react na conversão
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}