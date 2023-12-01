

module.exports = (app) => {
	var router = require("express").Router();
    app.get("/imagem1", (req, res) => {
        const imagePath = path.join(
            __dirname,
            "../images/LogoFarmaciaEscrita.png"
        );
        res.sendFile(imagePath);
    });
    
    app.get("/imagem2", (req, res) => {
        const imagePath = path.join(
            __dirname,
            "C:UsersVitor Drager1Desktopapi-webservice-masterappimagesLogoFarmaciaIntegrado.png"
        );
        res.sendFile(imagePath);
    });
    
	app.use("/api/images", router);
};