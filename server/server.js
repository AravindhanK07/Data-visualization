const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/data-dashboard");

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const dataSchema = new mongoose.Schema({
  label: String,
  labels: [String],
  data: [Number],
});

const Data = mongoose.model("Data", dataSchema);

app.get("/api/data", async (req, res) => {
  try {
    const data = await Data.findOne({ label: "steps" });
    if (!data) {
      res.status(404).json({ error: "Data not found" });
      return;
    }

    res.json({ labels: data.labels, steps: data.data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/expenses", async (req, res) => {
  try {
    const data = await Data.findOne({ label: "expenses" });
    if (!data) {
      res.status(404).json({ error: "Data not found" });
      return;
    }

    res.json({ labels: data.labels, expenses: data.data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/time", async (req, res) => {
  try {
    const data = await Data.findOne({ label: "time" });
    if (!data) {
      res.status(404).json({ error: "Data not found" });
      return;
    }

    res.json({ labels: data.labels, time: data.data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}`);
});
