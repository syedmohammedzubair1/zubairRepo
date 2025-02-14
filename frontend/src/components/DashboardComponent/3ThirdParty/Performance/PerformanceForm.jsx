import { useState } from "react";

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
        <div className="container mt-4">
            <h2 className="text-center mb-4">Add Performance</h2>
            <form onSubmit={handleSubmit} className="form-group">
                <div className="mb-3">
                    <input
                        type="text"
                        name="userId"
                        placeholder="User ID"
                        value={formData.userId}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        name="taskCompletionRate"
                        placeholder="Task Completion Rate"
                        value={formData.taskCompletionRate}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        name="averageTimePerTask"
                        placeholder="Average Time Per Task"
                        value={formData.averageTimePerTask}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="number"
                        name="feedbackScore"
                        placeholder="Feedback Score (1-5)"
                        value={formData.feedbackScore}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <button
                    type="submit" className="btn btn-primary w-100 text-center ">
                    Add Performance
                </button>
            </form>
        </div>
    );
};

export default PerformanceForm;
