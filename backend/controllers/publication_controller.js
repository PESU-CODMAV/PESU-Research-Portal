const Publication = require("../models/publications_model");

const getAllPublications = async (req, res) => {
  try {
    const publications = await Publication.find();
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPublicationsByYear = async (req, res) => {
  try {
    const publicationsByYear = await Publication.find({
      Year: { $eq: parseInt(req.params.year) },
    });
    if (!publicationsByYear) {
      return res
        .status(404)
        .json({ message: "No Publications found for that year" });
    }
    res.status(200).json(publicationsByYear);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPublications,
  getPublicationsByYear,
};
