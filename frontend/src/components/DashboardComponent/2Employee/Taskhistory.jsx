import React, { useState } from 'react';
import { 
    Button, Box, Dialog, DialogActions, DialogContent, DialogTitle, 
    TextField, Select, MenuItem, FormControl, InputLabel, 
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper 
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

function Taskhistory() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        title: '',
        description: '',
        images: [] // Stores multiple images
    });
    const [tasks, setTasks] = useState([]); // Stores submitted tasks

    // Open and close popup
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle multiple image selection (Max 5)
    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (formData.images.length + selectedFiles.length > 5) {
            alert("You can select up to 5 images only!");
            return;
        }
        setFormData({ ...formData, images: [...formData.images, ...selectedFiles] });
    };

    // Remove selected image
    const removeImage = (index) => {
        const updatedImages = formData.images.filter((_, i) => i !== index);
        setFormData({ ...formData, images: updatedImages });
    };

    // Handle form submission
    const handleSubmit = () => {
        setTasks([...tasks, formData]); // Add new task to the list
        setFormData({ category: '', title: '', description: '', images: [] }); // Reset form
        handleClose();
    };

    return (
        <section>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
                    <Button variant="contained" onClick={handleOpen}>Updated Task</Button>
                </Box>

                {/* Table for displaying submitted tasks */}
                {tasks.length > 0 && (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Category</strong></TableCell>
                                    <TableCell><strong>Title</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>Images</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tasks.map((task, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{task.category}</TableCell>
                                        <TableCell>{task.title}</TableCell>
                                        <TableCell>{task.description}</TableCell>
                                        <TableCell>
                                            {task.images.length > 0 ? (
                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                    {task.images.map((image, imgIndex) => (
                                                        <img 
                                                            key={imgIndex}
                                                            src={URL.createObjectURL(image)}
                                                            alt="task"
                                                            width="50"
                                                            height="50"
                                                            style={{ borderRadius: "5px" }}
                                                        />
                                                    ))}
                                                </Box>
                                            ) : "No Image"}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>

            {/* Popup Form */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>Task Form</DialogTitle>
                <DialogContent>
                    {/* Dropdown */}
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Category</InputLabel>
                        <Select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            label="Category"
                        >
                            <MenuItem value="Development">Development</MenuItem>
                            <MenuItem value="Design">Design</MenuItem>
                            <MenuItem value="Testing">Testing</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Title Input */}
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        variant="outlined"
                    />

                    {/* Description Input */}
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Description"
                        name="description"
                        multiline
                        rows={3}
                        value={formData.description}
                        onChange={handleChange}
                        variant="outlined"
                    />

                    {/* Image Upload */}
                    <Box sx={{ marginTop: 2 }}>
                        <input 
                            type="file" 
                            accept="image/*" 
                            multiple
                            onChange={handleFileChange} 
                        />
                        <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
                            {formData.images.map((image, index) => (
                                <Box key={index} sx={{ position: 'relative', display: 'inline-block' }}>
                                    <img 
                                        src={URL.createObjectURL(image)} 
                                        alt="preview" 
                                        width="60" 
                                        height="60"
                                        style={{ borderRadius: "5px", border: "1px solid #ccc" }}
                                    />
                                    <CancelIcon 
                                        sx={{ 
                                            position: 'absolute', 
                                            top: -8, right: -8, 
                                            cursor: 'pointer', 
                                            backgroundColor: 'white', 
                                            borderRadius: '50%' 
                                        }}
                                        onClick={() => removeImage(index)}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </DialogContent>

                {/* Submit & Close Buttons */}
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}

export default Taskhistory;
