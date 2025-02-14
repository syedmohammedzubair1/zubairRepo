import PerformanceList from "../components/DashboardComponent/3ThirdParty/Performance/PerformanceList";
import PerformanceForm from "../components/DashboardComponent/3ThirdParty/Performance/PerformanceForm";
import { useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";

const PerformancePage = () => {
    const { fetchPerformances } = useContext(PerformanceContext);

    return (
        <div>
            <h1>Performance Dashboard</h1>
            <PerformanceForm onSuccess={fetchPerformances} />
            <PerformanceList />
        </div>
    );
};

export default PerformancePage;
