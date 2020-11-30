const express = require("express");
const app = express();

const generateEmotes = require("./generateEmotes");
const constants = require("./constants");

app.get("/", async (req, res) => {
    
    // convert comma-separated list into array
    const channels = req.query.channels.split(",");

    try {
        const emoteData = await generateEmotes(channels);
        res.json(emoteData);
    }
    catch (e) {
        res.send(e);
    }

});

app.listen(constants.PORT, () => console.log(`Server started on port ${constants.PORT}`));