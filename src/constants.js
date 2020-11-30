module.exports = {
    
    TWITCH: {
        USER_EMOTES_API: "https://api.twitchemotes.com/api/v4/channels",
        GLOBAL_EMOTES_API: "https://api.twitchemotes.com/api/v4/channels/0",
        EMOTE_URL: "https://static-cdn.jtvnw.net/emoticons/v1",
    },
    FFZ: {
        USER_EMOTES_API: "https://api.frankerfacez.com/v1/room/id",
        GLOBAL_EMOTES_API: "https://api.frankerfacez.com/v1/set/global",
        EMOTE_URL: "https://cdn.frankerfacez.com/emote"
    },
    BTTV: {
        USER_EMOTES_API: "https://api.betterttv.net/3/cached/users/twitch",
        GLOBAL_EMOTES_API: "https://api.betterttv.net/3/cached/emotes/global",
        EMOTE_URL: "https://cdn.betterttv.net/emote"
    },
    EMOTE_DATA: {
        "TwitchGlobal": {},
        "TwitchSubscriber": {},
        "BTTV": {},
        "FrankerFaceZ": {},
        "BTTV2": {}
    },

    PORT: process.env.PORT || 3000

};
