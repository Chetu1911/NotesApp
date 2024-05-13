import express from 'express';
import cors from 'cors';
import mongoose, {model, Schema} from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
   await mongoose.connect("mongodb+srv://chetanabahale:DRUOVvzCGmI5T4K8@icp6.vkgvqrx.mongodb.net/notes")
   console.log("Database Connected")
}
connectDB();

const PORT = 5000;

const noteSchema = new Schema({
    title: String,
    content : String,
    category : String

})

const Note = model ("Note", noteSchema);
//reading 
app.get("/health", (req , res) => {
    res.json({
        Success: true,
        message : "running",
        data: null
    })
});

//adding notes
app.post("/notes", async(req , res) => {
    const { title ,content,category }= req.body;

if(!title){
    return res.json({
        success: false,
        message:"title is required",
        data:null
    })
}
if(!content){
    return res.json({
        success: false,
        message:"content is required",
        data:null
    })
}
if(!category){
    return res.json({
        success: false,
        message:"category is required",
        data:null
    })
}

  const newNote = await Note.create({
    "title" : title,
    "content" : content,
    "category" : category

   })
  

    res.json({
        Success: true,
        message : "data added successfully",
        data: newNote
    })

})
// reading notes
app.get("/notes", async(req,res) => {
const notes = await Note.find();

   res.json({
    Success: true,
    message : "data fetched successfully",
    data: notes
   })
})

app.get("/notes/:id", async(req,res) => {
   const {id} = req.params;

   const note = await Note.findOne({
    _id: id
   })
   res.json({
    Success: true,
    message : "note fetched successfully",
    data: note
   })
})
//upadte
app.put("/notes/:id", async(req, res) => {
   const {id} = req.params;
   
   const {title,content,category} = req.body;

   await Note.updateOne({_id: id},{$set: {
    title: title,
    content : content,
    category: category
   }})

   res.json({
    Success: true,
    message : "note updated successfully",
    data: null
   })
})

//delete notes 

app.delete("notes/:id", async(req,res)=>{
    const {id} = req.params;

    await Note.deleteOne({_id: id})
    res.json({
        Success: true,
        message : "note deleted successfully",
        data: null
       })

})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});