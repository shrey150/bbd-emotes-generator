bbd-emotes-generator
===

API generating emote data for BetterDiscord.

Usage
--

**Endpoint:** ```GET https://bbd-emotes-generator.herokuapp.com```

**Parameters:** `channel` - comma-separated list of Twitch channel IDs.

**Response:**

```json
{
    "TwitchGlobal": {
        "emote1": "https://example.com/emote1.png",
        "emote2": "https://example.com/emote2.png"
    },
    "TwitchSubscriber": {
        "emote3": "https://example.com/emote3.png",
        "emote4": "https://example.com/emote4.png"
    },
    "BTTV": {
        "emote5": "https://example.com/emote5.png",
        "emote6": "https://example.com/emote6.png"
    },
    "FrankerFaceZ": {
        "emote7": "https://example.com/emote7.png",
        "emote8": "https://example.com/emote8.png"
    },
    // not used, kept to match BetterDiscord
    "BTTV2": {}
}
```
