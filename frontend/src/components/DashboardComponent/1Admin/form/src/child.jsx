import React, { useState } from "react";
import { Card, CardContent, TextField, Button, Box, Typography, InputAdornment } from "@mui/material";
import { blue, lightBlue, grey } from "@mui/material/colors"; // Importing the colors
import "/src/assets/child.css";

const Child = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [data, setData] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("Choose File");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data && date && description) {
      setDataList([...dataList, { data, date, description, fileName }]);
      setData("");
      setDate("");
      setDescription("");
      setFileName("Choose File");
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="Main-container">
      <div className="button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setActiveTab("home")}
          sx={{ margin: 1 }}
        >
          Home
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setActiveTab("content")}
          sx={{ margin: 1 }}
        >
          Content
        </Button>
      </div>

      <div className="container">
        <div className="content-box-container">
          {activeTab === "home" && (
            <Card sx={{ padding: 2, backgroundColor: lightBlue[100] }}>
              <CardContent>
                <Typography variant="h5" color="primary">
                  Home Content
                </Typography>
              </CardContent>
            </Card>
          )}

          {activeTab === "content" && (
            <Card
              sx={{
                padding: 3,
                backgroundColor: "rgba(255, 255, 255, 0.7)", // Glass effect
                backdropFilter: "blur(10px)", // Blur effect
                width: "100%", // Full width
                marginTop: 2,
                boxShadow: 4,
              }}
            >
              <CardContent>
                <form onSubmit={handleSubmit} className="input-form">
                  <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                      label="Enter Data"
                      variant="outlined"
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                      required
                      fullWidth
                      sx={{ backgroundColor: grey[100] }}
                    />
                    <TextField
                      label="Date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      fullWidth
                      sx={{ backgroundColor: grey[100] }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      label="Enter Description"
                      multiline
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      fullWidth
                      sx={{ backgroundColor: grey[100] }}
                    />
                    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                      <TextField
                        label="File"
                        value={fileName}
                        readOnly
                        fullWidth
                        sx={{ backgroundColor: grey[100] }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Button
                                variant="contained"
                                onClick={() => document.getElementById("file-upload").click()}
                                sx={{
                                  backgroundColor: blue[500],
                                  "&:hover": { backgroundColor: blue[600] },
                                }}
                              >
                                +
                              </Button>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <input
                        type="file"
                        id="file-upload"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </Box>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ padding: 1, backgroundColor: blue[500], "&:hover": { backgroundColor: blue[600] } }}
                    >
                      Submit
                    </Button>
                  </Box>
                </form>

                <Box mt={3}>
                  {dataList.map((item, index) => (
                    <Card sx={{ marginBottom: 2, backgroundColor: grey[50] }} key={index}>
                      <CardContent>
                        <Typography variant="h6" color="primary">
                          {item.data}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          <strong>Date:</strong> {item.date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          <strong>File:</strong> {item.fileName}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Child;
