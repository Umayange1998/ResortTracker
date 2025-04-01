const express = require ("express");
const router = express.Router();
const {Users} = require("../models");

router.get('/', async (req,res)=>{

    const listofUsers = await Users.findAll();
    res.json(listofUsers)
});

router.post('/',async (req,res)=>{
    
    const user =req.body;

    try {
        // Get the current number of users
        const userCount = await Users.count();
    
        // Generate empID
        const newEmpID = `EMP${String(userCount + 1).padStart(3, "0")}`;
    
        // Assign empID
        user.empID = newEmpID;
    
        await Users.create(user);
        res.json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create user" });
      }
});

module.exports = router;