const axios = require("axios");
module.exports = {
  getIndex: async (req, res) => {
    const randomNum = Math.floor(Math.random() * 111);
    const response = await axios
      .get("https://zenquotes.io/api/random")
      .then(function (response) {
        quote = response.data[0].q;
        author = response.data[0].a;
      });

    res.render("index.ejs", {
      quote: quote,
      author: author,
    });
  },
};
