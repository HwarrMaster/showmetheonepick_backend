const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res, next) => {
  const NOTION_ID = "fe39b1a16a6743689b166fc835fe0034";
  const URL = `https://api.notion.com/v1/databases/${NOTION_ID}/query`;
  const result = await axios.post(
    URL,
    {},
    {
      headers: {
        Authorization:
          "Bearer secret_B7VxSnKEc3fVFNryVxpKMcLcMLAcmUogVzcPGewFoP9",
        "Content-Type": "application/x-www-form-urlencoded",
        "Notion-Version": "2022-06-28",
      },
    }
  );
  res.status(200);
  res.json(result.data);
});

router.post("/", async (req, res, next) => {
  const NOTION_ID = "fe39b1a16a6743689b166fc835fe0034";
  const URL = `https://api.notion.com/v1/databases/${NOTION_ID}`;
  const body = {
    properties: {
      uuid: 1,
    },
  };
  const result = await axios.patch(URL, body, {
    headers: {
      Authorization:
        "Bearer secret_B7VxSnKEc3fVFNryVxpKMcLcMLAcmUogVzcPGewFoP9",
      "Content-Type": "application/x-www-form-urlencoded",
      "Notion-Version": "2022-06-28",
    },
  });
  res.status(200);
  //   res.json(result.data);
  console.log("result", result);
});

module.exports = router;
