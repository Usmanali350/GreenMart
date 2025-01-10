const express = require('express')
const { connectToDatabase, getDb } = require('./database');
const { ObjectId } = require('mongodb');
const app = express();
app.use(express.json());
// Test Connection Route
app.get('/', async (req, res) => {
  try {
    const db = getDb();
    const collections = await db.listCollections().toArray();
    res.status(200).json({ message: "Connected to MongoDB!", collections });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve collections." });
  }
});
//Feuit section
app.get('/api/Fruit', async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection('Fruit');
    const fruits = await collection.find().toArray();
    res.json(fruits);
  } catch (error) {
    console.log('Failed to fetch Fruit', error);
    res.status(500).json( error, 'Nerwork error 500 Fruit item' );
  }
});
app.post('/api/Fruit', async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection('Fruit');
    const result = await collection.insertOne(req.body);
    res.status(200).json({
      message: 'Data added Successfully',
      data: { ...req.body, _id: result.insertedId }
    });
  } catch (error) {
    console.log('Error Adding Fruit item', error);
    res.status(500).json({ error: 'Nerwork error 500 Fruit item' });
  }
});
app.delete('/api/Fruit/:id', async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection('Fruit');
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const objectId = new ObjectId(id);
    const result = await collection.deleteOne({ _id: objectId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Fruit not found' });
    }

    res.status(200).json({ message: 'Fruit item deleted successfully' });
  } catch (error) {
    console.log('Error Deleting Fruit item', error);
    res.status(500).json({ error: 'Nerwork error 500 Fruit item' });
  }
});
app.put('/api/Fruit/:id', async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection('Fruit');
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Fruit not found' });
    }

    res.status(200).json({ message: 'Fruit item updated successfully' });
  } catch (error) {
    console.error('Error updating Fruit item', error);
    res.status(500).json({ error: 'Failed to update fruit' });
  }
});
//Vegitable section 
app.get('/api/Vegitables',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Vegitables');
    const Vegitables=await collection.find().toArray();
    res.json(Vegitables);
  }catch (error){
  console.log('failed to fetct vegitables',error)
  res.status(500).json(error,'error during getting an item form Vegitables')
  }

})
app.post('/api/vegitables',async(req,res)=>{
  try{
   const db=getDb();
   const collection=db.collection('Vegitables');
   const result=await collection.insertOne(req.body);
   res.status(200).json({
   message:'Data added successfully in vegitable data',
   data:{
    ...req.body,
    _id:result.insertedId
   }
   })
  }catch (error) {
  console.log('error adding vegitable item',error)
  res.status(500).json({error:'error osur during added vegitable item'})
  }
})
app.delete('/api/vegitables/:id', async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection('vegitables');
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const objectId = new ObjectId(id);
    const result = await collection.deleteOne({ _id: objectId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Object not found' })
    };
    res.status(200).json({ message: 'Deleted vegetable item successfully' });
  } catch (error) {
    console.error('Console error:', error);
    res.status(500).json({ error: 'Network error 500' });
  }
});
app.put('/api/Vegitables/:id', async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection('Vegitables');
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }
    const result = await collection.updateOne({ _id: new ObjectId(id) },{ $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Vegetable not found' });
    }
    res.status(200).json({ message: 'Vegetable item updated successfully' });
  } catch (error) {
    console.error('Error updating vegetable item', error);
    res.status(500).json({ error: 'Failed to update vegetable' });
  }
});
//Dairy Section
app.get('/api/Dairy',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Dairy');
    const Dairy=await collection.find().toArray();
    res.json(Dairy);
  }catch(error) {
  console.log('error occur during getting Dairy item',error);
  res.status(500).json({error:'network error 500'})
  }
})
app.post('/api/Dairy',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Dairy');
    const result=await collection.insertOne(req.body);
    res.status(200).json({
     message:'Data added successfully in Dairies items ',
     data:{
      ...req.body,
      _id:result.insertedId
     }
  });
  }catch(error){
console.log('error occur during adding object in dairy section',error)
res.status(500).json({error:'network error in adding item in dairy section'})
  }
})
app.delete('/api/Dairy/:id',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Dairy');
    const {id}=req.params;
    if(!ObjectId.isValid(id)){
      return res.status(400).json({message:'invalid id format'})
    };
    const objectId=new ObjectId(id)
    const result=await collection.deleteOne({_id:objectId})
    if (result.deletedCount===0){
      return res.status(404).json({message:'item not found in delete section'})
    }
    res.status(200).json({message:'item deleted successfully from Dairt items'})
  }catch(error){
console.log('eoor ocuur during deleting item form Dairies items',error);
res.status(500).json({error:'network error in deleting item from dairies items'})
  }
})
app.put('/api/Dairy/:id',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Dairy');
    const {id}=req.params;
    if(!ObjectId.isValid(id)){
      return res.status(400).json({message:'invalid id format'})
    }
    const result=await collection.updateOne(
      { _id: new ObjectId(id) },{ $set: req.body }
    )
      if(result.matchedCount===0){
        return res.status(404).json({message:'item not found'})
      };
      res.status(200).json({message:'item updated successfully'})
    
  }catch(error) {
    console.log('error occur during updating item in Dairies section',error);
    res.status(500).json({error:'network error in updating item in Dairies section'})
  }
})
//Bakery section
app.get('/api/Bakery',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Bakery');
    const Bakery=await collection.find().toArray();
    res.json(Bakery)
  }catch(error){
    console.log('error cssur during getting Bakery items')
  }
})
app.post('/api/Bakery',async(req,res)=>{
 try{
  const db=getDb();
  const collection=db.collection('Bakery');
  const result=await collection.insertOne(req.body)
  res.status(200).json(
    {message:'Items added successfuly in Backey section',
      data:{ ...req.body, _id:result.insertedId}
    }
  )
 }catch(error){
  console.log('error occur during adding data in Bakery section',error);
  res.status(500).json({error:'Network error in adding data in Bakery section'})
 }
})
app.delete('/api/Bakery/:id',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Bakery');
    const {id}=req.params;
    if(!ObjectId.isValid(id)){
      return res.status(400).json({message:'invalid id '})
    }
    const objectId=new ObjectId(id)
    const result=await collection.deleteOne({_id:objectId})
    if(result.deletedCount===0){
      return res.status(404).json({message:'item not found'})
    }
    res.status(200).json({message:'items deleted successfully'})
  }catch(error){
    console.log('error occur during deleting bakery item',error);
    res.status(500).json({error:'network error in deleting item for baskery section'})
  }
})
app.put('/api/Bakery/:id',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Bakery');
    const {id}=req.params;
    if(!ObjectId.isValid(id)){
      return res.status(400).json({message:'invalid id '})
    }
    const result=await collection.updateOne(
      {_id:new ObjectId(id)},
      {$set:req.body}
    )
    if(result.matchedCount===0){
      return res.status(404).json({message:'item not found'})
    }
    res.status(200).json({message:'bakery item updated successfully'})
  }catch(error){
    console.log('error ocuur during updating backery item',error);
    res.status(500).json({error:'network error in updating backery tiem'})
  }
})
//Tcofee section
app.get('/api/Tcofee',async(req,res)=>{
  try{
const db=getDb();
const collection=db.collection('Tcofee');
const Tcofee=await collection.find().toArray();
res.json(Tcofee)
  }catch(error){
    console.log('error coour during getting Tcofee data')
  }
})
app.post('/api/Tcofee',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Tcofee')
    const result=await collection.insertOne(req.body);
    res.status(200).json({
      message:'item added succesfully in Tcofee section',
      data:{
      ...req.body,
      _id:result.insertedId
      }
    })
  }catch(error){
    console.log('error occur during adding data in Tcofee secition',error);
    res.status(500).json({error:'network error in adding data in Tcofee section'})
  }
})
app.delete('/api/Tcofee/:id', async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection('Tcofee');
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'invalid id' });
    }
    const objectId = new ObjectId(id);
    const result = await collection.deleteOne(
      { _id: objectId }  
    );
    if (result.deletedCount === 0) { 
      return res.status(404).json({ message: 'item not found' });
    }
    res.status(200).json({ message: 'item deleted successfully' });
  } catch (error) {
    console.log('Error occurred in deleting item from Tcofee section', error);
    res.status(500).json({ error: 'network error in deleting data from Tcofee section' });
  }
});
app.put('/api/Tcofee/:id',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Tcofee');
    const {id}=req.params;
    if(!ObjectId.isValid(id)){
      return res.status(400).json({message:'invalid id'})
    };
    const result=await collection.updateOne(
      {
      objectId:new ObjectId(id),
      $set:req.body
    })
    if(result.matchedCount===0){
      return res.status(404).json({message:'item not found'})
    }
    res.status(200).json({message:'Tcofee item updated successfully'})
  }catch(error){
    console.log('error ocu during updating Tcofee item',error);
    res.status(500).json({error:'network error in updating Tcofee item'})
  }
})
//DryFruit section
app.get('/api/DryFruit',async(req,res)=>{
  try{
    const db=getDb();
    const  collection=db.collection('DryFruit')
    const DryFruit=await collection.find().toArray();
    res.json(DryFruit)
  }catch(error){
    console.log('error occur during getting Dryfruit data',error)
  }
})
app.post('/api/DryFruit',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('DryFruit')
    const result=await collection.insertOne(req.body)
      res.status(200).json({
          message:'Item successfully added in DryFruit section',
          data:{
            _id:result.insertedId
          }
        }
      )
    
  }catch(error){
    console.log('error occur during adding data in DryFruit section',error);
    res.status(500).json({error:'network error in adding data in DryFruit section'})
  }
})
app.delete('/api/DryFruit/:id',async(req,res)=>{
  try{
  const db=getDb();
  const collection=db.collection('DryFruit');
  const {id}=req.params;
  if(!ObjectId.isValid(id)){
    return res.status(400).json({message:'invalid id'})
  };
  const objectId=new ObjectId (id);
  const result=await collection.deleteOne(
    {_id:objectId});
    if(ObjectId.deletedCount===0){
      return res.status(404).json({message:'item not found'});
    }
    res.status(200).json({message:'DryFruit item deleted successfully'})
  }catch(error){
    console.log('error occur during deleting DryFruit item',error);
    res.status(500).json({error:'networlk error in DryFruit item'})
  }
})
app.put('/api/DryFruit/:id', async (req, res) => {
  try {
    const db = getDb();
    const collection = db.collection('DryFruit');
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'invalid id' });
    }
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },  
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'item not found' });
    }
    res.status(200).json({ message: 'DryFruit item updated successfully' }); // Corrected the status response
  } catch (error) {
    console.log('Error occurred during updating DryFruit item', error);
    res.status(500).json({ error: 'network error in updating DryFruit item' });
  }
});
//meat section
app.get('/api/Meat',async(req,res)=>{
  try{
const db=getDb();
const collection=db.collection('Meat');
const Meat=await collection.find().toArray();
res.json(Meat)
  }catch(error){
    console.log('error occut in getting Meat items',error);
    res.status(500).json({error:'network error in getting Meat items'})
  }
})
app.post('/api/Meat',async(req,res)=>{
  try{
   const db=getDb();
   const  collection=db.collection('Meat');
   const result=await collection.insertOne(req.body);
   res.status(200).json({
    message:'Meat item added successfuly',
    data:{
      ...req.body,
      _id:result.insertedId
    }
   })
  }catch(error){
    console.log('error occur in adding data in mesat item',error);
    res.status(500).json({error:'network error in adding datq in meat ection'})
  }
})
app.delete('/api/Meat/:id',async(req,res)=>{
  try{
   const db=getDb();
   const collection=db.collection('Meat');
   const {id}=req.params;
   if(!ObjectId.isValid(id)){
    return res.status(400).json({message:'invaloid id'})
   };
   const objectId=new ObjectId(id)
   const result=await collection.deleteOne({
    _id:objectId
   });
   if(result.deletedCount===0){
    res.status(404).json({message:'item not fund'})
   };
   res.status(200).json({message:'tiem deleted successfully'})
  }catch(error){
    console.log('error occur in deleting meat item',error);
    res.status(500).json({error:'network error in deleting meat item'})
  }
})
app.put('/api/Meat/:id',async(req,res)=>{
  try{
     const db=getDb();
     const collection=db.collection('Meat');
     const {id}=req.params;
     if(!ObjectId.isValid(id)){
      return res.status(400).json({message:'invalid id'})
     }
    const result=await collection.updateOne(
      {  _id:new ObjectId(id)},
     { $set:req.body  })
    if(result.matchedCount===0){
      return res.status(404).json({message:'item nort found'})
    }
    res.status(200).json({message:'item updated successfuly'})
  }catch(error){
    console.log('errro occur in updating item Meat',error);
    res.status(500).json({error:'network erro in updating Meat item'})
  }
})
//Bundle section
app.get('/api/Bundle',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Bundle');
    const Bundle=await collection.find().toArray();
    res.json(Bundle)
  }catch(error){
    console.log('eror occur in etting Bundle items',error);
    res.status(500).json({error:'network error occur in getting Bundle items'})
  }
})
app.post('/api/Bundle',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Bundle');
    const result=await collection.insertOne(req.body);
    res.status(200).json(
      {message:'items added successfully in Bundle section',
        data:{
          ...req.body,
          _id:result.insertedId
        }
       })
  }catch(error){
    console.log('error occur in adding data in Bundle section',error);
    res.status(500).json({error:'network error in adding Bundle items'})
  }
})
app.delete('/api/Bundle/:id',async(req,res)=>{
  try{
    const db=getDb();
    const collection=db.collection('Bundle');
    const {id}=req.params;
    if(!ObjectId.isValid(id)){
      return res.status(400).json({message:'invalid id'})
    };
    const objectId=new ObjectId(id);
    const result=await collection.deleteOne({
      _id:objectId
    })
    if(result.deleteOne===0){
      return res.status(404).json({message:'Bundle itme not found'})
    }
    res.status(200).json({message:'Bundle item deleted successfully'})
  }catch(error){
    console.log('error occur in deleting item form Bundle section',error);
    res.status(500).json({error:'network error in deleting item form Bundle section'})
  }
})
app.put('/api/Bundle/:id',async(req,res)=>{
  try{
   const db=getDb();
   const collection=db.collection('Bundle');
   const {id}=req.params;
   if(!ObjectId.isValid(id)){
    return res.status(400).json({message:'invalid id'})
   }
   const result=await collection.updateOne(
     {_id:new ObjectId(id)},
     {$set:req.body}
   )
   if(result.matchedCount===0){
    return res.status(404).json({message:'Bundle item not found'})
   }
   res.status(200).json({message:'Bundle item updated successsfully'})
  }catch(error){
    console.log('error occur in updateding Bundle item',error);
    res.status(500).json({error:'network error in updating Bundle item'})
  }
})

//order Selection
app.post('')
//port
const PORT = 4091;
const startServer = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
startServer();
      