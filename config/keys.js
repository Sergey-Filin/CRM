if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys.prod");
} else {
  module.exports = require("./keys.dev");
}

// module.exports = {
//   mongoURI: "mongodb://localhost:27017/mydatabasedb",
// 	// mongoURI: "mongodb+srv://sergeyfilin9999:<06712574271gf!>@cluster0-al5vd.mongodb.net/test?retryWrites=true",
// 	jwt: "dev-jwt"
// };
