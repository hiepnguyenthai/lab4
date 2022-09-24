const http = require("http");
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>new code here</h1>");
    res.end("<h2>Heroku deployment tutorial</h2>");
    res.write("<h3>Node monitor: Tự động theo dõi cập nhật code</h3>");
  })
  .listen(process.env.PORT || 3000);
