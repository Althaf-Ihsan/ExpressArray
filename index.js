const express = require ('express');
const app = express ();
const peoples = require ('./people');
app.use (express.json ());

app.post ('/api/people', (req, res) => {
  const {name} = req.body;
  if (name) {
    return res.json ({name: name, success: true});
  } else {
    return res.status (400).json ({success: false, msg: 'failed'});
  }
});
app.put ('/api/people/:id', (req, res) => {
  const {id} = req.params;
  const {name} = req.body;
  console.log (id, name);
  const person = peoples.find (people => people.id === Number (id));
  console.log (person);
  const newPerson=peoples.map((people)=>{
    if(people.id===Number(id))
    {
        people.name=name
    }
    return people
  })
  res.json(newPerson)
});
app.delete('/api/people/:id',(req,res)=>{
    const{id}=req.params
    const findPerson=peoples.find((people)=>{
      return people.id===Number(id)
    })
   const deletePerson=peoples.filter((person)=>{
    if(findPerson)
    {
      return person.id!==Number(id)
    }
    else{
      return res.json({success:false,msg:"failed"})
    }

   })
   res.json(deletePerson)
})

app.listen (3000, () => {
  console.log ('server run on port 3000');
});
