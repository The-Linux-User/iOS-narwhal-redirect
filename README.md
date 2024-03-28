# iOS Narwhal Redirect

Userscript to redirect Reddit links to open in the third-party Narwhal for Reddit app

## What it does

Currently, the third-party Reddit client Narwhal ([AppStore](https://apps.apple.com/us/app/narwhal-2-for-reddit/id845422455)) does not support automatic redirect from Reddit links opened in Safari to the app. This is where this userscript comes in. It looks at your currently opened website, and if the URL contains "reddit," it will open that link in Narwhal. Do not worry, this script does not share or collect any data; it just runs locally on your device.

## Limitations

Safari pops up a confirmation dialog asking if you want to open the app Narwhal every time. Unfortunately, this is a limitation imposed by Apple, and to my knowledge, there is nothing I can do about that. It does not work on MacOS since Narwhal is currently not available on Macs. You need to have Narwhal installed for this script to work.

## How to use

- You need to have a userscript extension installed. I recommend Userscripts ([AppStore](https://apps.apple.com/de/app/userscripts/id1463298887)) ([GitHub](https://github.com/quoid/userscripts)); it is free and open-source. Make sure that you have the extension installed and that it can access URLs containing Reddit.
- Open my code by either clicking [here](https://raw.githubusercontent.com/The-Linux-User/iOS-narwhal-redirect/main/Narwhal-Redirect.js) or by clicking on the file called Narwhal-Redirect.js in this repo and then clicking on the button called raw.
- Head to your userscripts addon by clicking the little puzzle icon in your address bar, then search for the Extension. It should automatically install the script when you open it.
- It should now work; have fun!

## Contributing

If you have any improvements or new features, feel free to post a pull request!

