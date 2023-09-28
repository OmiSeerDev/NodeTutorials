const http = require('http');
const port = 1333;
http.createServer(router).listen(port);

function router(request, response){
    console.log(`Listening on port: ${port}`);
    console.info(request.url);

switch (request.url){
    case '/home': 
        response.write('Pagina principal');
        response.end();
        break;
    default: 
        response.write('404: Nothing found here');
        response.end();
}
}