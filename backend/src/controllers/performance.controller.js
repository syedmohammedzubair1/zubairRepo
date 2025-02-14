import Performance from "../models/performance.model.js";

export const getPerformances = async (req, res) => {
  try {
    const performances = await Performance.find().populate("userId", "email firstName lastName");
    if (performances.length === 0) {
      return res.status(400).json({ message: "No Performances found" });
    }
    res.status(200).json(performances);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const postPerformance = async (req, res) => {
  try {
    const { userId, taskCompletionRate, averageTimePerTask, feedbackScore } = req.body;

    if (!userId || taskCompletionRate === undefined || averageTimePerTask === undefined || feedbackScore === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const performance = new Performance({ userId, taskCompletionRate, averageTimePerTask, feedbackScore });
    const result = await performance.save();
    res.status(201).json({ message: "Performance created successfully", performance: result });
  } catch (err) {
    res.status(500).json({ error: "Failed to create performance", details: err.message });
  }
};

export const deletePerformance = async (req, res) => {
  try {
    const performance = await Performance.findByIdAndDelete(req.params.id);
    if (!performance) {
      return res.status(400).json({ message: "Performance not found" });
    }
    res.status(200).json({ message: "Performance deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOnePerformance = async (req, res) => {
  try {
    const performance = await Performance.findById(req.params.id).populate("userId", "email firstName lastName");
    if (!performance) {
      return res.status(404).json({ message: "Performance not found" });
    }
    res.status(200).json(performance);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

export const updatePerformance = async (req, res) => {
  try {
    const performance = await Performance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!performance) {
      return res.status(400).json({ message: "Performance not found" });
    }
    res.status(200).json({ message: "Performance updated successfully", performance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
