import express from 'express';
const router = express.Router();
import productSchema from "../models/datamodel.js";
import SampleData from '../models/dummyData.js';

router.get("/", async (req, res) => {
    try {
        console.log("pr", productSchema);
        const data = await productSchema.find({});
        res.json(data);
    }
    catch {
        res.status(500).json({ error: error.message });
    }
})
// router.get("/data", async (req, res) => {
//     try {
//         res.json({SampleData});
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// })

router.get("/data", async (req, res) => {
    try {
        const { currentPage, productsPerPage } = req.query;
        console.log("jkfdsn",currentPage);
        console.log("jkfdsn",productsPerPage);
        const page = currentPage;
        const pageSize = productsPerPage;
        const totalProducts = await productSchema.countDocuments();
        const totalPages = Math.ceil(totalProducts / pageSize);

        const products = await productSchema.find()
            .skip((page - 1) * pageSize)
            .limit(pageSize);

        res.json({
            products,
            pagination: {
                totalProducts,
                totalPages,
                currentPage: page,
                pageSize,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})



export default router;

