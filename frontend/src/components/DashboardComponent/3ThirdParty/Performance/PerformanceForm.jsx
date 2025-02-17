import { useState } from "react";
import { createPerformance } from "../../../../api/performanceApi";

const PerformanceForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        userId: "",
        taskCompletionRate: "",
        averageTimePerTask: "",
        feedbackScore: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPerformance(formData);
            onSuccess();
        } catch (error) {
            console.error("Error adding performance:", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {/* Increase the width by changing col-md-6 to col-lg-8 */}
                <div className="col-lg-8 col-md-10">
                    <div className="card shadow-lg p-4">
                        <h3 className="text-center mb-4">Add Performance</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="userId" className="form-label">User ID</label>
                                <input
                                    type="text"
                                    name="userId"
                                    id="userId"
                                    className="form-control"
                                    placeholder="Enter User ID"
                                    value={formData.userId}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="taskCompletionRate" className="form-label">Task Completion Rate (%)</label>
                                <input
                                    type="number"
                                    name="taskCompletionRate"
                                    id="taskCompletionRate"
                                    className="form-control"
                                    placeholder="Enter Task Completion Rate"
                                    value={formData.taskCompletionRate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="averageTimePerTask" className="form-label">Average Time Per Task (mins)</label>
                                <input
                                    type="number"
                                    name="averageTimePerTask"
                                    id="averageTimePerTask"
                                    className="form-control"
                                    placeholder="Enter Average Time Per Task"
                                    value={formData.averageTimePerTask}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="feedbackScore" className="form-label">Feedback Score (1-5)</label>
                                <input
                                    type="number"
                                    name="feedbackScore"
                                    id="feedbackScore"
                                    className="form-control"
                                    placeholder="Enter Feedback Score"
                                    value={formData.feedbackScore}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Add Performance</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceForm;
