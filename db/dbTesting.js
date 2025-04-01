import mongoose from "mongoose";
import {addBusiness, findBusiness, modifyBusiness, deleteBusiness} from "./db.js";

// using lat-long given in test-email to try filtering by businesses nearby
const b1 = { type: 'Point', coordinates: [-122.4321, 37.7785] };
const b2 = { type: 'Point', coordinates: [-122.4094, 37.7849] };
const b3 = { type: 'Point', coordinates: [-122.4269, 37.7623] };
const b4 = { type: 'Point', coordinates: [-122.2779, 37.5197] }; // new b4 to test distance too far away

// try {
//     await connectDB();
//     const result = await addBusiness("test", "test");
//     console.log("Test added: ", result);
// } catch (error) {
//     console.log("something went wrong", error);
// } finally {
//     try {
//         await mongoose.disconnect();
//         console.log("db disconnected");
//     } catch (error) {
//         console.log("Something went wrong disconnected", error);
//     }
// }

//addBusiness("test", "too far away", b4);

//findBusiness({});

//modifyBusiness({name:"test"}, {name: "cringe"});

modifyBusiness({name: "Spike"}, {location: b1})
// modifyBusiness({name: "Jet"}, {location: b2})
// modifyBusiness({name: "Ein"}, {location: b3})
// modifyBusiness({name: "test"}, {location: b4})

//deleteBusiness("test", "bruh");

