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
    MenuItem,
    Select,
    FormControl,
    InputLabel
} from "@mui/material";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        role: "Employee",
        designation: "",
        image: null,
    });

    const [roles] = useState(["Employee", "Admin"]);
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, role: value, designation: value === "Admin" ? "" : formData.designation });
    };

    const handleDesignationChange = (e) => {
        const value = e.target.value;
        if (value === "Add Designation") {
            setIsAddingDesignation(true);
            setFormData({ ...formData, designation: "" });
        } else {
            setIsAddingDesignation(false);
            setFormData({ ...formData, designation: value });
        }
    };

    const handleAddDesignation = () => {
        if (customDesignation.trim()) {
            setDesignations([...designations.slice(0, -1), customDesignation, "Add Designation"]);
            setFormData({ ...formData, designation: customDesignation });
            setCustomDesignation("");
            setIsAddingDesignation(false);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.email) errors.email = "Email is required";
        if (!formData.password) errors.password = "Password is required";
        if (!formData.firstName) errors.firstName = "First name is required";
        if (!formData.lastName) errors.lastName = "Last name is required";
        if (formData.role === "Employee" && !formData.designation) errors.designation = "Designation is required";
        if (!formData.image) errors.image = "Image is required";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            console.log("Submitted Data:", formData);
        }
    };

    return (
        <Box sx={{ maxWidth: 500, margin: "auto", mt: 4, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "#fff", border: "1px solid #ccc" }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
                Admin Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} error={!!errors.password} helperText={errors.password} variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={!!errors.firstName} helperText={errors.firstName} variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={!!errors.lastName} helperText={errors.lastName} variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth error={!!errors.role}>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                                labelId="role-label"
                                value={formData.role}
                                onChange={handleRoleChange}
                                name="role"
                            >
                                {roles.map((role) => (
                                    <MenuItem key={role} value={role}>{role}</MenuItem>
                                ))}
                            </Select>
                            {errors.role && <FormHelperText>{errors.role}</FormHelperText>}
                        </FormControl>
                    </Grid>
                    {formData.role === "Employee" && (
                        <Grid item xs={12}>
                            <FormControl fullWidth error={!!errors.designation}>
                                <InputLabel id="designation-label">Designation</InputLabel>
                                <Select
                                    labelId="designation-label"
                                    value={formData.designation}
                                    onChange={handleDesignationChange}
                                    name="designation"
                                >
                                    {designations.map((designation) => (
                                        <MenuItem key={designation} value={designation}>{designation}</MenuItem>
                                    ))}
                                </Select>
                                {errors.designation && <FormHelperText>{errors.designation}</FormHelperText>}
                            </FormControl>
                        </Grid>
                    )}
                    {isAddingDesignation && (
                        <Grid item xs={12}>
                            <TextField fullWidth label="Enter Designation" value={customDesignation} onChange={(e) => setCustomDesignation(e.target.value)} variant="outlined" />
                            <Button onClick={handleAddDesignation} variant="contained" color="secondary" sx={{ mt: 1 }}>
                                Add Designation
                            </Button>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Input type="file" onChange={handleImageUpload} />
                        {imagePreview && <Avatar src={imagePreview} sx={{ width: 100, height: 100, mt: 2 }} />}
                        {errors.image && <FormHelperText error>{errors.image}</FormHelperText>}
                    </Grid>
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
