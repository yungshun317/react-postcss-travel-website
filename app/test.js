var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Congrats");
    }
});

var photoLocation = 'https://avatars.githubusercontent.com/u/12487902?s=400&u=3ac84d63cb476e30f5ddee748c4fd98726a6dd4b&v=4';

https.get(photoLocation, function(response) {
   response.pipe(fs.createWriteStream(__dirname + "/assets/images/handsome.jpg"));
});