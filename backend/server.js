const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const MONGO_URI = mongodb+srv://abdelbassetnegro01:<opP2003123>@cluster0.9n1r5d3.mongodb.net/?appName=Cluster0;
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));


const motorcycleSchema = new mongoose.Schema({
  id: String,
  name: String,
  manufacturer: String,
  category: String,
  price: Number,
  engine: String,
  image_url: String,
  description: String,
  year: Number,
  created_at: { type: Date, default: Date.now }
});

const Motorcycle = mongoose.model('Motorcycle', motorcycleSchema);


app.get('/api/motorcycles', async (req, res) => {
  try {
    const motorcycles = await Motorcycle.find();
    res.json(motorcycles);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
});


app.post('/api/motorcycles', async (req, res) => {
  try {
    const newMoto = new Motorcycle(req.body);
    await newMoto.save();
    res.status(201).json(newMoto);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout' });
  }
});

app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});