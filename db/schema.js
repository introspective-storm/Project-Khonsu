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

const buisnessSchema = new Schema ({ //defining buisness schema
    name: String,
    category: String,
    location: pointSchema,
    deal: String,
    verified: Boolean,
    rating: Number,
    pendingDeal: String
})
