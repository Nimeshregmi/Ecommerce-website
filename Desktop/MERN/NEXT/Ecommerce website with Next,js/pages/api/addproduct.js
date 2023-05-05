import Product from "@/models/Product"
import connectDb from "@/middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++) {
            console.log(req.body)
            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                disc: req.body[i].disc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableqty: req.body[i].availableqty,
            })
            await p.save();
        }
        res.status(200).json({ success: "success." })
    }
    else {

        res.status(400).json({ error: "This method is not allowed." })
    }
    
}
export default connectDb(handler);