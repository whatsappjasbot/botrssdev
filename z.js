/Import 
var fs = require('fs')
var imaginary = require('imaginary')
var serverUrl = 'https://kannxapi.herokuapp.com/api/randomimage/cosplay'

imaginary('myImage.jpg')
  .server(serverUrl)
  .watermark({ text: 'copyright' })
  .on('error', function (err) {
    console.error('Cannot resize the image:', err)
  })
  .pipe(fs.createWriteStream('markedImage.jpg'))