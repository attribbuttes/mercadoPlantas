const fs = require ('fs');
const path = require ('path');

// Ubicación de los archivos JSON
const plantasFilePath = path.join(__dirname, '../data/plantas.json');
const plagasFilePath = path.join(__dirname, '../data/plagas.json');

// Lectura de los archivos JSON y parseado a array
const plantasArray = JSON.parse(fs.readFileSync(plantasFilePath, 'utf8'));
const plagasArray = JSON.parse(fs.readFileSync(plagasFilePath, 'utf8'));


//lista de productos
const controllers = { 
  plantasmenu: (req,res) => {
      res.render('index', {plantasArray})
  },

  detail: (req, res) => {
      const idToFind = req.params.id
      const planta = plantasArray.find (p => p.id == idToFind)
      return res.render ('plantasDetail', {planta})
  },

  plagas: (req,res) => {
        res.render('plagas', {plagasArray})
  },

  plagasDetail: (req, res) => {
    const idToFind = req.params.id
    const plaga = plagasArray.find (p => p.id == idToFind)
   

    return res.render ('plagasDetail', {plaga})
    //return res.render ('detail', {product})
  },
};

module.exports = controllers;