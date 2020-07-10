const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
const ipmongo = "mongodb+srv://user_10:AsimaticaSL@obrastroya.nlhdz.mongodb.net/test?retryWrites=true&w=majority";
const ipmongolocal ="mongodb://${IP_SERVER}:${PORT_DB}/webpersonal";

//mongoose.set("useFindAndModify", false);

mongoose.connect(
    `${ipmongo}`, 
{useNewUrlParser: true, useUnifiedTopology: true},
(err, res) =>{
    if(err){
        throw err;
    }else{
        console.log("La conexión a la base de datos es correcta");
        app.listen(port, ()=>{
            console.log("#########################");
            console.log("####### API REST ##########");
            console.log("#########################");
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        });
    }
}
);
