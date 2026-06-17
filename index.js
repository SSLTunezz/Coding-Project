require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
let responseCount = 0;
let lastReset = Date.now();
const MAX_RESPONSES = 20;
const Reset_Interval = 24 * 60 * 60 * 1000; // 24 hours

function canRespond() {
  if (Date.now() - lastReset >= lastReset) {
    responseCount = 0;
    lastReset = Date.now();
  }
  if (responseCount >= MAX_RESPONSES) {
    return false;
  }
  responseCount++;
  return true;
}

const SECRET_WORD = "ninja";
const SECRET_67 = "67"
const SECRET_SERIOUSLY = "vibecod"
const SECRET_LOL = "lol"
const SECRET_BORED = "bored"


app.message(async ({ message, say }) => {
if (message.thread_ts) return;
  if (
    message.text &&
    message.text.toLowerCase().includes(SECRET_WORD)
  ) {
    if (!canRespond()) return;

    await say({
      text: "Imagineee if NINJA GOT A LOWWWW TAPER FADEEEEE",
      thread_ts: message.thread_ts || message.ts
    });
  }
});



app.message(async ({ message, say }) => {
if (message.thread_ts) return;

  if (
    message.text &&
    message.text.toLowerCase().includes(SECRET_67)
  ) {
    if (!canRespond()) return;
    await say({
      text: "SIXXXXXX SEVVVVENNNNNNNN",
      thread_ts: message.thread_ts || message.ts
    });
  }
});


app.message(async ({ message, say }) => {
if (message.thread_ts) return;

  if (
    message.text &&
    message.text.toLowerCase().includes(SECRET_SERIOUSLY)
  ) {
    if (!canRespond()) return;
    await say({
      text: "UGHHH 😒 Vibecoding? I totally don't use vibecoding.",
      thread_ts: message.thread_ts || message.ts
    });
  }
});

app.message(async ({ message, say }) => {
if (message.thread_ts) return;
  if (
    message.text &&
    message.text.toLowerCase().includes(SECRET_LOL)
  ) {
    if (!canRespond()) return;
    await say({
      text: "Laughing out Loud",
      thread_ts: message.thread_ts || message.ts
    });
  }
});

app.message(async ({ message, say }) => {
if (message.thread_ts) return;

  if (
    message.text &&
    message.text.toLowerCase().includes(SECRET_BORED)
  ) {
    if (!canRespond()) return;
    await say({
      text: " This video is scientifically proven to cure boredom https://youtu.be/dQw4w9WgXcQ,\n"+
      "Source:Trust Me Bro",
      thread_ts: message.thread_ts || message.ts
    });
  }
});

app.message(async ({ message, client, say }) => {
  const match = message.text?.match(/<@([A-Z0-9]+)>/);
  if (message.thread_ts) return;

  if (!match) return;

  const userId = match[1];

  const userInfo = await client.users.info({
    user: userId,
  })

   const presence = await client.users.getPresence({
    user: userId,
  });
   if (userInfo.user.is_bot) {
     return;
   }
   if (presence.presence !=="active") {
     await say({
       text: `<@${userId}> is offline.`,
       thread_ts: message.thread_ts || message.ts,
     });

   }
});







app.command("/oj-meme", async ({ command, ack, respond }) => {
  await ack();

  await respond({ text: `Hello <@${command.user_id}>!` });
});
app.command("/oj-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/oj-meme - Get a hello!`
  });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
