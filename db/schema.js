import mongoose from "mongoose"

const {Schema} = mongoose

const pointSchema = new mongoose.Schema({ //defining point schema for geoJSON
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });

const businessSchema = new Schema ({ //defining buisness schema
    name: String,
    category: String,
    location: pointSchema,
    deal: String,
    verified: Boolean,
    rating: Number,
    pendingDeal: String
});

const business = mongoose.model('buisness', businessSchema);

export default {business}