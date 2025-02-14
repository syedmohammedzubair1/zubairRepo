import { useContext } from "react";
import { PerformanceContext } from "../../../../context/PerformanceContext";
import { Link } from "react-router-dom";

const PerformanceList = () => {
    const { performances, loading } = useContext(PerformanceContext);

    if (loading) return <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>;

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Performance Metrics</h2>
            <div className="row">
                {performances.map((performance) => (
                    <div key={performance._id} className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">User ID: {performance.userId}</h5>
                                <p className="card-text">Score: <strong>{performance.feedbackScore}</strong></p>
                                <p className="card-text">Completion Rate: {performance.taskCompletionRate}%</p>
                                <Link to={`/performance/${performance._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformanceList;
