import express from 'express';


const router =express.Router();

router.get("/", (req, res) => {
    res.send("Product Route");
});

router.get("/one", (req, res) => {
    res.send("one product")});

router.post("/", (req, res) => {
    res.send("Product created successfully");
});

router.put("/:id", (req, res) => {
    res.send(`Product with id ${req.params.id} updated successfully`);
});

export default router;

