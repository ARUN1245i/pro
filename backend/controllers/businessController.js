const db = require("../config/db");

exports.apply = (req, res) => {
  const { businessName, businessType, email } = req.body;
  
  const query = "INSERT INTO businesses (businessName, businessType, email) VALUES (?, ?, ?)";
  
  db.query(query, [businessName, businessType, email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Business application submitted", id: result.insertId });
  });
};

exports.trackStatus = (req, res) => {
  const { id } = req.params;

  const query = "SELECT * FROM businesses WHERE id = ?";
  
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Business not found" });
    }
    res.json(result[0]);
  });
};
