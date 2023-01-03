const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

const getEdit = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 20,
    });

    res.status(200).json({ success: true, msg: response.data });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);

      res
        .status(400)
        .json({ success: false, error: "operation failed! try again" });
    }
  }
};

const getImage = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createImage({
      prompt: "a white siamese cat",
      n: 1,
      size: "512×512",
    });
    image_url = response.data.data[0].url;
    res.status(200).json({ success: true, imageURL: image_url });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);

      res
        .status(400)
        .json({ success: false, error: "operation failed! try again" });
    }
  }
};

module.exports = { getEdit, getImage };
