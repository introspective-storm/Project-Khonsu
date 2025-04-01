import mongoose from "mongoose"
import business from "./schema.js"
const connectionString = process.env.MONGODB_CONNECTION || "mongodb://localhost:27017/project-khonsu"

async function connectDB() {
    try{
        await mongoose.connect(connectionString);
        console.log("db connected");
    } catch(err) {
        console.log(err);
        throw err;
    }
};

async function addBusiness(name, category, location, deal, verified, rating, pendingDeal) {
    try {
        await connectDB();
        await business.create({
            name: name,
            category: category,
            location: location,
            deal: deal,
            verified: verified,
            rating: rating,
            pendingDeal: pendingDeal
        });
    } catch (error) {
        console.log("something went wrong", error);
    } finally {
        try {
            await mongoose.disconnect();
            console.log("db disconnected");
        } catch (error) {
            console.log("Something went wrong disconnected", error);
        }
    }
};

async function findBusiness(query) { //query is an object
    try {
        await connectDB();
        const foundBusiness = await business.find(query);
        //console.log(foundBusiness);
        return foundBusiness;
    } catch (error) {
        console.log("something went wrong", error);
    } finally {
        try {
            await mongoose.disconnect();
            console.log("db disconnected");
        } catch (error) {
            console.log("Something went wrong disconnected", error);
        }
    }
};

async function modifyBusiness(query, update) { // query and update are objects
    try {
        await connectDB();
        await business.findOneAndUpdate(query, update);
    } catch (error) {
        console.log("something went wrong", error);
    } finally {
        try {
            await mongoose.disconnect();
            console.log("db disconnected");
        } catch (error) {
            console.log("Something went wrong disconnected", error);
        }
    }
};

async function deleteBusiness(name, category, location, deal, verified, rating, pendingDeal) {
    try {
        await connectDB();
        await business.deleteOne({
            name: name,
            category: category,
            location: location,
            deal: deal,
            verified: verified,
            rating: rating,
            pendingDeal: pendingDeal
        });
    } catch (error) {
        console.log("something went wrong", error);
    } finally {
        try {
            await mongoose.disconnect();
            console.log("db disconnected");
        } catch (error) {
            console.log("Something went wrong disconnected", error);
        }
    }
};

export {addBusiness, findBusiness, modifyBusiness, deleteBusiness};
