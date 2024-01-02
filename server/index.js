const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  request(
    "https://api.sampleapis.com/coffee/hot",
    function (err, response, body) {
      if (!err && response.statusCode == 200) {
        var products = JSON.parse(body);
        const min = 5;
        const max = 10;
        const diff = max - min;
        products.map((element) => {
          const randomDecimal = Math.random() * diff + min;
          element["price"] = randomDecimal.toFixed(2);

          delete element["id"];
        });
        res.json(products);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
