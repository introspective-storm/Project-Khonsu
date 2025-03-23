import mongoose from "mongoose"
import { disconnectDB } from "./db.js";
import { connectDB } from "./db.js";

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

await connectDB();

business.create({
    name: "OnlyGoesUp ltd.",
    category: "fintech",

})

//disconnectDB();