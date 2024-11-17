const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

router.post("/", async (req, res) => { // Changed () to =>
    try {
        const data = req.body;

        const newPerson = new Person(data); // Use capitalized "Person" for the model instance

        const response = await newPerson.save();
        console.log("Data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get("/", async (req, res) => {
    try {
        const data = await Person.find(); // Use capitalized "Person" for the model instance
        console.log("data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/:workType", async(req, res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType== 'manager' || workType == 'waiter'){
            const response = await  Person.find({work: workType});
            console.log("fetched data");
            res.status(200).json(response);
        }else{
            res.status(404).json({ error: "Invalid work type" });  

        }

    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal server error" });  
    }
})

router.put('/:id', async(req, res)=>{
    try{

        const personID = req.params.id;
        const updatePersonData =req.body;
        const response = await Person.findByIdAndUpdate(personId, updatePersonData,{
            new: true,
            runValidators: true,
        })
        if(!response){
            return res.status(404).json({error: 'person not found'})
        }
        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({ error: "Internal server error" });

    }
})


router.delete('/:id', async(req , res)=> {
    try{
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: "personnot found"});

        }
        console.log('data deleted');
        res.status(200).json({message: "person Deleted successfully"});
    }catch(err){

        console.log(err);
        res.status(500).json({ error: "Internal server error" });

    }
})
module.exports = router;
