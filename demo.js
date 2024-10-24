var http = require('http'); 

const hostname = '127.0.0.1';
const port = 80;

const fs = require('fs');

const filecontentabout=fs.readFileSync('About.html');
const filecontentcontact=fs.readFileSync('ContactUS.html');
const filecontenthome=fs.readFileSync('GymWeb.html');

var server = http.createServer(function(req, res){  
    if (req.url == '/About') {
                
        // res.writeHead(200, { 'Content-Type': 'text/html' }); 
             
        // res.write('<html><body><p>This is Login Page</p>');
        // res.write('USername: <input type="text">');
        // res.write('Password: <input type="text">');
        // res.write('<input type="button" value="Sign In"></body></html>');
        res.end(filecontentabout);
    
    }
    else if (req.url == "/"){
        
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        
        // res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end(filecontenthome);

    }
    else if (req.url == "/Contact") {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write('<html><body><p>This is Register Page</p></body></html>');
        res.end(filecontentcontact);
    
    }
    
    else{
        res.end('Invalid Request!');
    }

});




server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
