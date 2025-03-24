import mongoose from "mongoose"
import business from "./schema.js"
const connectionString = process.env.MONGODB_CONNECTION || "mongodb://localhost:27017/project-khonsu"

async function connectDB() {
    await mongoose.connect(connectionString)
}

async function disconnectDB() {
    await mongoose.disconnect()
}

async function addBusiness(name, category, location, deal, verified, rating, pendingDeal) {
    try {
        await connectDB();
    } catch(error) {
        console.log(`Something went wrong: ${error}`);
    }
    business.create({
        name: name,
        category: category,
        location: location,
        deal: deal,
        verified: verified,
        rating: rating,
        pendingDeal: pendingDeal
    });
    await disconnectDB();
};

async function findBusiness(name, category, location, deal, verified, rating, pendingDeal) {
    try {
        await connectDB();
    } catch(error) {
        console.log(`Something went wrong: ${error}`);
    }
    business.find({
        name: name,
        category: category,
        location: location,
        deal: deal,
        verified: verified,
        rating: rating,
        pendingDeal: pendingDeal
    });
    await disconnectDB();
};

async function modifyBusiness(name, category, location, deal, verified, rating, pendingDeal,
                              nameUpdate, categoryUpdate, locationUpdate, dealUpdate, verifiedUpdate, 
                              ratingUpdate, pendingDealUpdate) {
    try {
        await connectDB();
    } catch(error) {
        console.log(`Something went wrong: ${error}`);
    }
    business.findOneAndUpdate({
        name: name,
        category: category,
        location: location,
        deal: deal,
        verified: verified,
        rating: rating,
        pendingDeal: pendingDeal
    },
    {
        name:nameUpdate,
        category: categoryUpdate,
        location: locationUpdate,
        deal: dealUpdate,
        verified: verifiedUpdate,
        rating: ratingUpdate,
        pendingDeal: pendingDealUpdate
    });
    await disconnectDB();
};

async function deleteBusiness(name, category, location, deal, verified, rating, pendingDeal) {
    try {
        await connectDB();
    } catch(error) {
        console.log(`Something went wrong: ${error}`);
    }
    business.deleteOne({
        name: name,
        category: category,
        location: location,
        deal: deal,
        verified: verified,
        rating: rating,
        pendingDeal: pendingDeal
    });
    await disconnectDB();
};

export default {addBusiness, findBusiness, modifyBusiness, deleteBusiness};
