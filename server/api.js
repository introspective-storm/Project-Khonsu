import express from 'express';
import {addBusiness, findBusiness, modifyBusiness, deleteBusiness} from "../db/db.js";

const api = express.Router();
api.use(express.json());

// API endpoint for adding businesses
api.post("/businesses/add", async (req, res) => {
    try {
        const {name, category, location, deal, verified, rating, pendingDeal} = req.body;
        await addBusiness(name, category, location, deal, verified, rating, pendingDeal);
        res.status(201).json({message: "Business added succesfully"});
    } catch(error) {
        console.error("Error adding new Business", error);
        res.status(500).json({error: "Internal server error"});
    }
});

// API endpoint for finding businesses
api.post('/businesses/find', async (req, res) => {
    try {
        const query = req.query; // Assuming query parameters are used for filtering
        const foundBusinesses = await findBusiness(query);
        console.log(foundBusinesses);
        res.json(foundBusinesses);
    } catch (error) {
        console.error('Error finding businesses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// API endpoint for modifying a business
api.put('/businesses/modify', async (req, res) => {
    try {
        const {query, update} = req.body;
        await modifyBusiness(query, update);
        res.status(200).json({ message: 'Business modified successfully' });
    } catch (error) {
        console.error('Error modifying business:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// API endpoint for deleting a business
api.delete('/businesses/delete', async (req, res) => {
    try {
        const { name, category, location, deal, verified, rating, pendingDeal } = req.body;
        await deleteBusiness(name, category, location, deal, verified, rating, pendingDeal);
        res.status(200).json({ message: 'Business deleted successfully' });
    } catch (error) {
        console.error('Error deleting business:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default api;