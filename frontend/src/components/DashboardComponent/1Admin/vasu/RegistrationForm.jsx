import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Box,
    Input,
    Avatar,
    FormHelperText,
    MenuItem
} from "@mui/material";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        designation: "",
        image: null,
    });

    const [designations, setDesignations] = useState([
        "Full Stack Developer",
        "Python Developer",
        "Java Developer",
        "MERN Stack Developer",
        "Add Designation",
    ]);

    const [customDesignation, setCustomDesignation] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [errors, setErrors] = useState({});
    const [isAddingDesignation, setIsAddingDesignation] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle designation change
    const handleDesignationChange = (e) => {
        const value = e.target.value;

        if (value === "Add Designation") {
            setIsAddingDesignation(true);
        } else {
            setIsAddingDesignation(false);
            setFormData({ ...formData, designation: value });
        }
    };

    // Handle adding custom designation
    const handleCustomDesignationChange = (e) => {
        setCustomDesignation(e.target.value);
    };

    const handleAddCustomDesignation = () => {
        if (customDesignation.trim()) {
            setDesignations([...designations.slice(0, -1), customDesignation, "Add Designation"]);
            setFormData({ ...formData, designation: customDesignation });
            setCustomDesignation("");
            setIsAddingDesignation(false);
        }
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Form validation
    const validateForm = () => {
        let errors = {};
        if (!formData.email) errors.email = "Email is required";
        if (!formData.password) errors.password = "Password is required";
        if (!formData.firstName) errors.firstName = "First name is required";
        if (!formData.lastName) errors.lastName = "Last name is required";
        if (!formData.designation) errors.designation = "Designation is required";
        if (!formData.image) errors.image = "Image is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            console.log("Submitted Data:", formData);
        }
    };

    return (
        <Box
            sx={{
                maxWidth: 500,
                margin: "auto",
                mt: 4,
                p: 4,
                boxShadow: 3,
                borderRadius: 2,
                bgcolor: "#fff",
                border: "1px solid #ccc"
            }}
        >
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
                Employee Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {/* Email */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            variant="outlined"
                        />
                    </Grid>

                    {/* Password */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            variant="outlined"
                        />
                    </Grid>

                    {/* First Name */}
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                            variant="outlined"
                        />
                    </Grid>

                    {/* Last Name */}
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            variant="outlined"
                        />
                    </Grid>

                    {/* Designation Dropdown with box line */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            select
                            label="Designation"
                            name="designation"
                            value={formData.designation}
                            onChange={handleDesignationChange}
                            error={!!errors.designation}
                            helperText={errors.designation}
                            variant="outlined" // Box line added
                        >
                            <MenuItem disabled value="">
                                Select Designation
                            </MenuItem>
                            {designations
                                .filter((designation) => designation !== "Add Designation")
                                .map((designation, index) => (
                                    <MenuItem key={index} value={designation}>
                                        {designation}
                                    </MenuItem>
                                ))}
                            <MenuItem value="Add Designation">Add Designation</MenuItem>
                        </TextField>
                    </Grid>

                    {/* Show Input Only When "Add Designation" is Selected */}
                    {isAddingDesignation && (
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Enter Designation"
                                value={customDesignation}
                                onChange={handleCustomDesignationChange}
                                variant="outlined"
                            />
                            <Button sx={{ mt: 1 }} variant="contained" onClick={handleAddCustomDesignation}>
                                Add
                            </Button>
                        </Grid>
                    )}

                    {/* Image Upload */}
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">Upload Image</Typography>
                        <Input type="file" accept="image/*" onChange={handleImageUpload} />
                        {errors.image && <FormHelperText error>{errors.image}</FormHelperText>}
                    </Grid>

                    {/* Image Preview */}
                    {imagePreview && (
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <Avatar
                                src={imagePreview}
                                alt="Preview"
                                sx={{ width: 100, height: 100, margin: "auto", border: "2px solid #1976d2" }}
                            />
                        </Grid>
                    )}

                    {/* Submit Button */}
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default RegistrationForm;
