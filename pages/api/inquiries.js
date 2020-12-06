import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    let inquiry = req.body
    const { db } = await connectToDatabase();

    try {
        await db.collection("inquiries").insertOne({
                date: inquiry.inquiry.date,
                name: inquiry.inquiry.name,
                tel: inquiry.inquiry.tel,
                email: inquiry.inquiry.email,
                desc: inquiry.inquiry.desc
            } ,{ w: 'majority' })
        res.json({ success: true })
    }
    catch(e) {
        console.error(`Error occurred while adding note, ${e}`)
        res.json({ success: false, error: e })
    }
};