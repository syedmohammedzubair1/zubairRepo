import Content from "../models/content.model.js";
import httpStatus from "http-status";

// Update the About section
export const updateAboutSection = async (req, res) => {
  try {
    const { contentId } = req.params;
    const { title, description, images } = req.body;

    const content = await Content.findById(contentId);
    if (!content) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "Content not found" });
    }

    content.about = { title, description, images };
    content.updatedAt = Date.now();

    await content.save();

    return res.status(httpStatus.OK).json({ message: "About section updated successfully", content: content.about });

  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Error: ${error.message}` });
  }
};


// Update the Projects section
export const updateProjectsSection = async (req, res) => {
    try {
      const { contentId } = req.params;
      const { projects } = req.body;
  
      const content = await Content.findById(contentId);
      if (!content) {
        return res.status(httpStatus.NOT_FOUND).json({ message: "Content not found" });
      }
  
      content.projects = projects;
      content.updatedAt = Date.now();
  
      await content.save();
      return res.status(httpStatus.OK).json({ message: "Projects section updated successfully", content: content.projects });
  
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Error: ${error.message}` });
    }
  };
  
// Update the Services section
export const updateServicesSection = async (req, res) => {
    try {
      const { contentId } = req.params;
      const { services } = req.body;
  
      const content = await Content.findById(contentId);
      if (!content) {
        return res.status(httpStatus.NOT_FOUND).json({ message: "Content not found" });
      }
  
      content.services = services; 
      content.updatedAt = Date.now();
  
      await content.save();
      return res.status(httpStatus.OK).json({ message: "Services section updated successfully", content: content.services });
  
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Error: ${error.message}` });
    }
  };
// adding services without replacing
  export const addService = async (req, res) => {
    try {
      const { contentId } = req.params;
      const { title, description } = req.body;
  
      const content = await Content.findById(contentId);
      if (!content) {
        return res.status(httpStatus.NOT_FOUND).json({ message: "Content not found" });
      }

      content.services.push({ title, description });
      content.updatedAt = Date.now();
  
      await content.save();
      return res.status(httpStatus.OK).json({ message: "Service added successfully", content: content.services });
  
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Error: ${error.message}` });
    }
  };
  

  export const addProject = async (req, res) => {
    try {
      const { contentId } = req.params;
      const { title, description, video, metadata } = req.body;
  
      const content = await Content.findById(contentId);
      if (!content) {
        return res.status(httpStatus.NOT_FOUND).json({ message: "Content not found" });
      }
  
      // Add new project to the projects array
      content.projects.push({ title, description, video, metadata });
      content.updatedAt = Date.now();
  
      await content.save();
      return res.status(httpStatus.OK).json({ message: "Project added successfully", content: content.projects });
  
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Error: ${error.message}` });
    }
  };


  // Update "Contact Us" section
export const updateContactUs = async (req, res) => {
    try {
        const { contentId } = req.params;
        const { contactInfo } = req.body;

        const content = await Content.findById(contentId);
        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }

        // Update Contact Us section
        content.contactInfo = contactInfo;
        content.updatedAt = Date.now();

        await content.save();
        return res.status(200).json({ message: "Contact Us section updated", content });
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error.message}` });
    }
};

// Update Locations section
export const updateLocation = async (req, res) => {
    try {
        const { contentId } = req.params;
        const { coordinates, address } = req.body;

        const content = await Content.findById(contentId);
        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }

        // Update location info
        content.locations.push({ coordinates, address });
        content.updatedAt = Date.now();

        await content.save();
        return res.status(200).json({ message: "Location updated", content });
    } catch (error) {
        return res.status(500).json({ message: `Error: ${error.message}` });
    }
};
  
  