import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPerformanceById } from "../../../../api/performanceApi";

const PerformanceDetail = () => {
    const { id } = useParams();
    const [performance, setPerformance] = useState(null);

    useEffect(() => {
        const fetchPerformance = async () => {
            try {
                const data = await getPerformanceById(id);
                setPerformance(data);
            } catch (error) {
                console.error("Error fetching performance:", error);
            }
        };
        fetchPerformance();
    }, [id]);

    if (!performance) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Performance Details</h2>
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">User ID: {performance.userId}</h5>
                    <p className="card-text">Completion Rate: {performance.taskCompletionRate}%</p>
                    <p className="card-text">Average Time Per Task: {performance.averageTimePerTask} mins</p>
                    <p className="card-text">Feedback Score: {performance.feedbackScore}/5</p>
                </div>
            </div>
        </div>
    );
};

export default PerformanceDetail;


