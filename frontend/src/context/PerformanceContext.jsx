import { createContext, useState, useEffect } from "react";
import { getPerformances } from "../api/performanceApi";

export const PerformanceContext = createContext();

export const PerformanceProvider = ({ children }) => {
    const [performances, setPerformances] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPerformances();
    }, []);

    const fetchPerformances = async () => {
        try {
            const data = await getPerformances();
            setPerformances(data);
        } catch (error) {
            console.error("Error fetching performances:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PerformanceContext.Provider value={{ performances, fetchPerformances, loading }}>
            {children}
        </PerformanceContext.Provider>
    );
};
