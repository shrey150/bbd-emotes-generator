const axios = require("axios");
const CONSTANTS = require("./constants");

module.exports = async channels => {

    console.log("Fetching emote data...");

    // fetch all global emote requests
    const twitchGlobalsReq = await axios.get(`${CONSTANTS.TWITCH.GLOBAL_EMOTES_API}`);
    const bttvGlobalsReq = await axios.get(`${CONSTANTS.BTTV.GLOBAL_EMOTES_API}`);
    const ffzGlobalsReq = await axios.get(`${CONSTANTS.FFZ.GLOBAL_EMOTES_API}`);

    // get all global emotes
    const twitchGlobals = twitchGlobalsReq.data.emotes;
    const bttvGlobals = bttvGlobalsReq.data;
    const ffzGlobalSet = Object.values(ffzGlobalsReq.data.sets)[0];
    const ffzGlobals = ffzGlobalSet.emoticons;

    // create a deep copy of the emote data JSON format
    const emoteData = JSON.parse(JSON.stringify(CONSTANTS.EMOTE_DATA));

    // loop through each channel
    for (const id of channels) {

        // fetch all emote requests
        const twitchReq = await axios.get(`${CONSTANTS.TWITCH.USER_EMOTES_API}/${id}`);
        const bttvReq = await axios.get(`${CONSTANTS.BTTV.USER_EMOTES_API}/${id}`);
        const ffzReq = await axios.get(`${CONSTANTS.FFZ.USER_EMOTES_API}/${id}`);

        // get all twitch emotes
        const twitchEmotes = [ ...twitchReq.data.emotes, ...twitchGlobals ];

        // get all BTTV emotes
        const bttvChannelEmotes = bttvReq.data.channelEmotes;
        const bttvSharedEmotes = bttvReq.data.sharedEmotes;
        const bttvEmotes = [ ...bttvChannelEmotes, ...bttvSharedEmotes, ...bttvGlobals ];

        // get all FFZ emotes
        const ffzSet = Object.values(ffzReq.data.sets)[0];
        const ffzEmotes = [ ...ffzSet.emoticons, ...ffzGlobals ];

        console.log(`Adding ${twitchEmotes.length + bttvEmotes.length + ffzEmotes.length} emotes from channel ${id}...`);

        // add all twitch emotes
        twitchEmotes.forEach(n => {
            emoteData["TwitchSubscriber"][n.code] = `${CONSTANTS.TWITCH.EMOTE_URL}/${n.id}/1.0`;
        });

        // add all BTTV emotes
        bttvEmotes.forEach(n => {
            // add .gif if emote is animated so it plays in Discord
            const gifExt = n.imageType === "gif" ? ".gif" : "";
            emoteData["BTTV"][n.code] = `${CONSTANTS.BTTV.EMOTE_URL}/${n.id}/1x${gifExt}`;
        });

        // add all FFZ emotes
        ffzEmotes.forEach(n => {
            emoteData["FrankerFaceZ"][n.name] = `${CONSTANTS.FFZ.EMOTE_URL}/${n.id}/1`;
        });

    }

    console.log("Done.")
    return emoteData;

}