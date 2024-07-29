const express = require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const taskRoutes=require('./routes/task');
const path=require('path');
app.use(cors());
app.use(express.json());

app.use('/api',taskRoutes);
app.use(express.static(path.join(__dirname, 'client/build')));

//other routes redirected to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

const port=process.env.PORT||3000;
let MONGO_URL='mongodb://localhost:27017/task';

mongoose.connect(MONGO_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(`Error connecting to MongoDB: ${err}`);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

