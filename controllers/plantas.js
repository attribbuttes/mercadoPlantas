const fs = require ('fs');
const path = require ('path');

//Ubicación del archivo JSON
const filePath = path.join(__dirname,'../data/plantas.json');
//Lectura del archivo JSON y parseado a array
const plantasArray = JSON.parse(fs.readFileSync(filePath, 'utf8'));

//lista de productos
const controllers = {
  plantasmenu: (req,res) => {
      res.render('plantas', {plantasArray})
  },

  detail: (req, res) => {
      const idToFind = req.params.id
      const planta = plantasArray.find (p => p.id == idToFind)
     

      return res.render ('plantasDetail', {planta})
      //return res.render ('detail', {product})
  },
};

module.exports = controllers;