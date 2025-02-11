import Company from "../models/companies.model.js";

export const getCompanies=async(req,res)=>{
    try {
        const company=await Company.find();
        if(company.length===0){
            return res.status(400).json({message:"No Companies found"});
        }
        res.status(200).json(company);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

export const postCompanies = async (req, res) => {
    try {
        const company = new Company(req.body);
        const result = await company.save();
        res.status(201).json({ message: "Company created successfully", company: result });
    } catch (err) {
        console.error("Error here:", err);
        res.status(500).json({ error: "Failed to create company", details: err.message });
    }
};
export const deleteCompanies=async(req,res)=>{
    try {
        const company=await Company.findByIdAndDelete(req.params.id);
        if(!company){
            return res.status(400).json({message:"Company not found"});
        }
        res.send(company);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
};
export const getOneCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            return res.status(404).json({ message: "Company not found" }); 
        }

        res.status(200).json(company); 
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

export const updateCompany=async(req,res)=>{
    try{
        let company=await Company.updateOne({_id:req.params.id},{$set:req.body});
        if(!company){
            return res.status(400).json({message:"Company not found"});
            }
        res.send(company);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}