const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("../services/jwt");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const { RSA_NO_PADDING } = require("constants");
const Workplace = require("../models/workplace");


function signUpWorkplace(req, res){
    const workplace = new Workplace();

    const {name, ubicacion } = req.body;
    workplace.name = name;
    workplace.ubicacion = ubicacion;    
    workplace.active = false;  
        
            
                
                    
                    //guardamos en la base de datos todos los campos.
                    workplace.save((err, workplaceStore)=>{
                        if(err){
                          console.log("Qaui");
                            res.status(500).send({message: err});
                        }else{
                            if(!workplaceStore){
                                res.status(404).send({message: "Error al crear usuario."});
                            }else{
                                res.status(200).send({workplace: workplaceStore});
                            }

                        }
                    })
                
           
            //res.status(200).send({message: "Usuario Creado correctamente"});
        
    
}


function getWorkplacesActive(req, res){
    const query = req.query;
    
    Workplace.find({active: query.active}).then(workplaces=>{
      if(!workplaces){
        res.status(404).send({message: "No hay datos para mostrar"});
      }else{
        res.status(200).send({workplaces});
      }
    })  
  }

function getWorkplaces(req, res){
    Workplace.find().then(workplaces=>{
      if(!workplaces){
        res.status(404).send({message: "No hay datos para mostrar"});
      }else{
        res.status(200).send({users});
      }
    })  
  }



async function updateWorkplace(req, res){
    let workplaceData = req.body;
    workplaceData.nombre = req.body.nombre;
    const params = req.params;
   

    Workplace.findByIdAndUpdate({_id: params.id}, workplaceData, (err, workplaceUpdate)=>{
      if(err){
        res.status(500).send({message: "Error de servidor"});
      }else{
        if(!workplaceUpdate){
          res.status(404).send({message: "Usuario no encontrado"});
        }else{
          res.status(200).send({message: "Usuario Actualizado correctamente"});
        }
      }

    })
    
  }

function activateWorkplace(req, res) {
    const { id } = req.params;
    const { active } = req.body;
  
    Workplace.findByIdAndUpdate(id, { active }, (err, workplaceStored) => {
      if (err) {
        res.status(500).send({ message: 'Error del servidor' });
      } else {
        if (!workplaceStored) {
          res.status(404).send({ message: 'No se encontro usuario' });
        } else {
          if (active === true) {
            res.status(200).send({ message: 'Usuario Activado' });
            console.log(active);
            
          } else {
            res.status(200).send({ message: 'Usuario Desactivado' });
            console.log(active);
            
          }
        }
      }
    });
  }

function deleteWorkplace(req, res){
    const{id} = req.params;
    Workplace.findByIdAndRemove(id, (err, workplaceDeleted) =>{
      if(err){
        res.status(500).send({ message: 'Error del servidor' });
      }else{
        if(!workplaceDeleted){
          res.status(404).send({message:  "Usuario no encontrado"});
        }else{
          res.status(200).send({message: "Usuario Eliminado Correctamente."});
        }
      }
    })
  }

function signUpWorkplace(req, res){
    const workplace = new Workplace();

    const {name, ubicacion } = req.body;
      
    workplace.name = name;
    workplace.ubicacion = ubicacion;    
    workplace.active = true;   
 

    workplace.save((err, workplaceStored)=>{
            if(err){
              res.status(500).send({message: "El centro de trabajo ya existe."});
            }else{
              if(!workplaceStored){
                res.status(500).send({message: "Error al crear el nuevo centro de trabajo."});
              }else{
                //res.status(200).send({user:userStored});                
                res.status(200).send({message: "Centro de trabajo creado correctamente."});
                
              }
            }
          });
        
      
    
  }

module.exports = {
    signUpWorkplace,
    getWorkplaces,
    getWorkplacesActive,
    updateWorkplace,
    activateWorkplace,
    deleteWorkplace,
    signUpWorkplace
};