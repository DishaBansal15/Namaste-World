const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const cors = require('cors');
const connectDB = require('./config/db');
connectDB();

app.use(cors());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
