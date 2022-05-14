const mongoose = require("mongoose");

const password = require("./secrets");
const connectionString = `mongodb+srv://temi:${password}@nodeexpressprojects.3uktq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect();
