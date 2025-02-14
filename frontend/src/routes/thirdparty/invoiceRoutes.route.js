import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import invoiceRoutes from "./routes/invoice.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("invoices")); // Serve static invoice files

// Routes
app.use("/api/v1/invoice", invoiceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
