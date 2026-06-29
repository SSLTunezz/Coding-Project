# My Slack Bot Borepheus
Introducing... BOREPHEUS!!!! Borepheus is Orpheus's brother and LOVES meme's. Unlike Orpheus his taste is a bit less mature than Haiku's. Does your message include a trigger word that's used in a famous meme? Well your in luck, becuase borepheus will make sure to reply to your message with the meme related to that word. Example, Try message Ninja in slack. If borepheus is in your chat, he will reply with "IMAGINE IF NINJA GOT A LOWWWW TAPPPER FADEEE" He makes sure meme's won't get forgotten. (DM @SSLTuenzz if you want a new meme to be recognized). 

Before we get into what Did and how etc Here is a guide on how to set up Borepheus to make your own bot like borepheus 
1. Follow the star dance guide link: https://stardance.hackclub.com/missions/slack-bot/guide until and including add more commands
2. Next go to your slack api that Im sure your fimilar with after reading the guide and go to event subscriptions, in the side bar there should be something called event subscriptions, click it
3. You will see a option to turn on even subscriptions with a green slider (maybe it changes in the future) but just turn it on.
4. Leave request url blank
5. Add these following events: message.channels
channels:history
message.groups
groups:history	
message.im
6. It may require you to enable some oaths enable what it wants you to enable.
7. Since the stardance guide uses java and has alr set up everything paste my code into your java file
8. Edit as you will, some usefull tips are in the code and are slashed out, you can select your own trigger words, responses, limits etc...
9. Test it out locally, by putting node.*filename*.js in your editor terminal and test and debug stuff (stardance guide teaches you how to run locally if this is confusing)
10. Now contintue following the star dance guide to push it to nest 24/7
11. Enjoy Borepheus (or whatever you name him)

NOWW... Going back to the process.












Don't worry, Borepheus can be usefull too!  Have you ever pinged someone with @ and not gotten a response and then regretted all your life choices and figure your just a lonley unsocial person? No? Only me? Well either way, Borepheus will make sure to tell you if the person you pinged is offline so you don't expect a respone and never get one.

Clearly Borepheus is *EXTREMMELY* usefull and you should definnetly add him. Now let me get to the EVEN MORE EXITING PART. MY JOURNEY!!!!!


1. As all great builder  I started of with following a guide. Star dance provided a great guide to setup a slack bot and make slash commands, I really liked learning about tokens and connection between slack api and slack and tokens. I never really made a project with an connection to an server so this was great.
2. I got lost. Really lost. I really wanted my bot respond to trigger words like NINJA, 67, etc... and I coudln't find any guides. Even Chat gpt failed me here. This is why I contacted orpheus's maker, @NORA, who I annoyed with question and NOra was really nice. I learend what event subscriptions I needed. Then I had to use chat gpt a bit to learn syntax and how to properly use the subscription. Slack provided a good guide but I'm terrible in java syntax. 
3. I added a bunch of trigger words that people would enjoy, I won't spoil all of it right now. EHH maybe i will on the bottom of the read me. Only for people who acc read everything :)
4. I tested everything and deleted or added new features
5. I pushed to Nest and github which was super hard, is it just me or do you guys always get confused where to run the terminal commands, like i have 2 terminals pycharm terminal and mac terminal and I never know where to run the commands, in general im super bad at git push and pushing projects in gerneal so chat gpt clutched up a bit because it turned out i was pasting all the push commands on the wrong terminal :(
6. At first I named by bot Orephus_Jr but I realized orpheus is young so a younger junior wouldn't make sense hence i named him borephus. I know this sounds dumb but I learned that App name and Bot name are different things but I get it now (Trust)
7. I added it to channels but then disaster struck! He was considered a spam bot because the trigger words were to common so he would respond too much. I lwk panicked here cause I couldn't remove him from the channel and everyone was like "umm your not supposed to add him" so then I disabled him for a while. To fix this spammyness i added a limit that it can only respond 20 times per 24 hours, and it can't respond to thread messages. These changes were made to try reduce the spammyness of the bot. I really liked the timer idea because it solved a big problem simply.
8. THe trigger words: 

Ninja
Vibecode/vibecoding
Vibecode
Lol
Bored
67

.

Btw you can use these words in a sentance and my bot will still respond.

I'm super proud of this bot (btw my first software project)(more hardware guy) so I am soooo proud that my bot runs and ppl can use it. Please dm for changes, addition, etc... and I hope you have a nice time using this bot
Thanks for reading!

PS Test him out and add him to channels!!

IMPORTANT: FOR REVIEWS TO TEST MY BOT JOIN THE CHANNEL CALLED test-channel-for-my-bot OR ADD IT TO YOUR OWN CHANNEL.
PS Test him out and add him to channels!!

