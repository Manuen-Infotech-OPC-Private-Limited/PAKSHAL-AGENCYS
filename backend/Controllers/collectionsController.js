import Collection from '../Modal/Collection.js';
import mongoose from 'mongoose';

export const DEFAULT_COLLECTIONS = [
  { id: "col1", title: "PLYWOOD", subtitle: "Strong. Durable. Reliable.", image: "" },
  { id: "col2", title: "VENEERS", subtitle: "Natural Beauty. Perfect Finish", image: "" },
  { id: "col3", title: "LAMINATES", subtitle: "Style That Stands Out", image: "" },
  { id: "col4", title: "HARDWARE FITTINGS", subtitle: "Precision in Every Detail", image: "" },
  { id: "col5", title: "DOORS & ACCESSORIES", subtitle: "Complete Your Interior", image: "" }
];

// In-memory cache when database is unavailable
let inMemoryCollections = [...DEFAULT_COLLECTIONS];

// GET /api/collections
export const getCollections = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json(inMemoryCollections);
    }
    const collections = await Collection.find();
    if (!collections || collections.length === 0) {
      return res.json(inMemoryCollections);
    }
    res.json(collections);
  } catch (error) {
    console.warn('[Collections Controller] Database unavailable, returning fallback collections:', error.message);
    res.json(inMemoryCollections);
  }
};

// PUT /api/collections/:id
export const updateCollection = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, subtitle, image } = req.body;

    if (mongoose.connection.readyState !== 1) {
      const idx = inMemoryCollections.findIndex(c => c.id === id);
      if (idx !== -1) {
        inMemoryCollections[idx] = {
          ...inMemoryCollections[idx],
          ...(title !== undefined && { title }),
          ...(subtitle !== undefined && { subtitle }),
          ...(image !== undefined && { image })
        };
        return res.json(inMemoryCollections[idx]);
      }
      return res.status(404).json({ error: 'Collection item not found' });
    }
    
    const updatedCollection = await Collection.findOneAndUpdate(
      { id: id },
      {
        $set: {
          ...(title !== undefined && { title }),
          ...(subtitle !== undefined && { subtitle }),
          ...(image !== undefined && { image })
        }
      },
      { new: true }
    );
    
    if (!updatedCollection) {
      return res.status(404).json({ error: 'Collection item not found' });
    }
    
    res.json(updatedCollection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
