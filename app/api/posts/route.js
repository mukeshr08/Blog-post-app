import connectmango from "../../../utils/connectMongo";
import PostModel from "../../../models/postModel";
export async function GET() {
    try{
        await connectmango()
        const postData=await PostModel.find({})
        return Response.json(postData)
    }
    catch(err){
        return Response.json({"message":err.message})
    }

}