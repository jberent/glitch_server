const http = require('http');
const url = require('url');
const fs = require('fs');

const colors = require('./colors');

// http://localhost:8080/
const hostname = '127.0.0.1'; // http: 192.168.43.1:8080?page=connection.html&pop=true
const port = 8080;

const server = http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  console.log(req.url);
  var filename = q.pathname;
  if (filename == '/' && !q.search)
  {
    mainHandler(req,res);
  } else if (filename == '/css/colors.less') {
    colorsHandler(req,res)
  } else if (filename == '/js/rc_config.js') {
    rc_configHandler(req,res)
  } else if (filename != '/') {
    fileHandler(req,res);
  } else {
    pageHandler(req,res);
  }
});

function mainHandler(req, res)
{
  serveFile(res, '/frame.html');
  //res.writeHead(302, {'location': 'http://localhost:8080/?page=connection.html&pop=true'});
  //res.end();
}

function fileHandler(req, res)
{
  var q = url.parse(req.url, true);
  var filename = q.pathname;
  serveFile(res, filename);
}

function pageHandler(req, res)
{
  var q = url.parse(req.url, true);
    var qdata = q.query;
    var page = "/" + qdata.page;
    var pop = qdata.pop;
    serveFile(res, page);
}

function rc_configHandler(req, res)
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.write('console.log("TODO: rc_config"); function loadRcInfo(){}');
  res.end(); 

}

function colorsHandler(req, res)
{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/css');
    colors.themeToLess(res);
    res.end(); //'@textError:0xFF0000;@textWarning:0xFF9900;@textOkay:0x00FF00;');

}

function serveFile(res, filename) {
  console.log(filename);
  fs.readFile('.' + filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, getContentType(filename));
    res.write(data);
    return res.end();
  });
}

function getContentType(filename)
{
  var ext = filename.split('.').pop();
  if (ext == 'html' || ext == 'htm')
  {
    return {'Content-Type': 'text/html'};
  } else if (ext == 'css' || ext == 'less')  {
    return {'Content-Type': 'text/css'};
  } else if (ext == 'js') {
    return {'Content-Type': 'text/javascript'};
  } else {
    return {'Content-Type': 'text/'+ ext};
  }
}





// =========================================================

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});