import React  from 'react'
import EducationItem from './EducationItem'


const articles = [
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "Meta releases AudioCraft AI tool to create music from text - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/technology/artificial-intelligence/meta-releases-audiocraft-ai-tool-to-create-music-from-text-8874111/",
        "urlToImage": null,
        "publishedAt": "2023-08-03T03:37:37Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "How to draw and write on screenshots via Photos app on Mac; 9 tips | How-to - HT Tech",
        "description": "Know how to draw and write on screenshots effortlessly using Markup in the Photos app on your Mac. Draw, write, and highlight with ease.",
        "url": "https://tech.hindustantimes.com/how-to/how-to-draw-and-write-on-screenshots-via-photos-app-on-mac-9-tips-71691031595601.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/08/03/1600x900/How_to_annotate_images_on_Mac_1691031903593_1691031903847.jpg",
        "publishedAt": "2023-08-03T03:07:37Z",
        "content": "The ability to annotate images and screenshots is a powerful feature that comes in handy for various purposes, such as adding notes, highlighting important sections, or simply unleashing your creativ… [+2494 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "BGMI redeem codes for Aug 3, 2023: Unlock exciting rewards and free gifts! | Mint - Mint",
        "description": "BGMI redeem codes allow players to obtain in-game items for free, providing an alternative to purchasing in-game currency.",
        "url": "https://www.livemint.com/technology/tech-news/bgmi-redeem-codes-for-aug-3-2023-unlock-exciting-rewards-and-free-gifts-11691031097944.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/08/03/600x338/BGMI_1685081078491_1691031314985.jpg",
        "publishedAt": "2023-08-03T02:55:26Z",
        "content": "BGMI (Battlegrounds Mobile India) quickly rose to prominence in India after the ban on PUBG Mobile. Despite facing its own ban, the Indian government decided to allow BGMI back into the country with … [+1969 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Garena Free Fire Max redeem codes for Aug 03, 2023: Get weapons, diamonds, more | Mint - Mint",
        "description": "Garena Free Fire Max redeem codes can be used to win in-game items like weapons, diamonds, skins, and more.",
        "url": "https://www.livemint.com/technology/tech-news/garena-free-fire-max-redeem-codes-for-aug-03-2023-get-weapons-diamonds-more-11691030529561.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/08/03/600x338/ff_garena_1675312885509_1691030845682.jpg",
        "publishedAt": "2023-08-03T02:47:38Z",
        "content": "Garena Free Fire Max redeem codes can be used to win in-game items like weapons, diamonds, skins and more. These 12 digit alphanumeric codes consist of capital letters and numbers. For those unaware,… [+1865 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "GSMArena.com"
        },
        "author": "Vlad",
        "title": "Samsung Galaxy S23 FE confirmed to land in India - GSMArena.com",
        "description": "A new certification reveals it's on its way. Samsung's Galaxy S23 FE has been in the rumor mill for what feels like decades now. Last week a Samsung exec...",
        "url": "https://www.gsmarena.com/samsung_galaxy_s23_fe_confirmed_to_land_in_india-news-59412.php",
        "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/08/samsung-galaxy-s23-fe-bis-certified/-952x498w6/gsmarena_000.jpg",
        "publishedAt": "2023-08-03T01:46:01Z",
        "content": "Samsung's Galaxy S23 FE has been in the rumor mill for what feels like decades now. Last week a Samsung exec said it would arrive imminently, and today we have confirmation that it will be offered in… [+888 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Quordle 556 answer for August 3: Need tips? Check Quordle hints, clues, solutions - HT Tech",
        "description": "Quordle 556 answer for August 3: Today’s puzzle is not going to be as easy as a walk in the park. You are going to work hard for it and we recommend you take the help of Quordle hints, clues and solutions to ensure victory.",
        "url": "https://tech.hindustantimes.com/how-to/quordle-556-answer-for-august-3-need-tips-check-quordle-hints-clues-solutions-71691026804718.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/08/03/1600x900/HT_Tech_23_1691026848959_1691026849089.jpg",
        "publishedAt": "2023-08-03T01:43:10Z",
        "content": "Quordle 556 answer for August 3: Nobody likes to wake up on a Thursday morning and be greeted with a confusing puzzle, especially when it is just two days before Christmas. But sadly, that's what you… [+1772 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "NASA Plus trailer launched, offering live streams and new series - KCRA 3",
        "description": "NASA is getting ready to take the streaming wars to the moon with its own service. NASA Plus will offer live streams and original series and is set to launch...",
        "url": "https://www.youtube.com/watch?v=AxRuujI3gN4",
        "urlToImage": "https://i.ytimg.com/vi/AxRuujI3gN4/maxresdefault.jpg",
        "publishedAt": "2023-08-03T00:11:17Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "GSMArena.com"
        },
        "author": "Vlad",
        "title": "iPhone 15 demand expected to be lower than for iPhone 14 - GSMArena.com",
        "description": "Analysts predict dire times for Apple. The iPhone 15 family is expected to arrive this fall with a price hike and slimmer bezels. Interestingly, demand for...",
        "url": "https://www.gsmarena.com/iphone_15_demand_expected_to_be_lower_than_for_iphone_14-news-59411.php",
        "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/08/iphone-15-demand-lower-than-iphone-14/-952x498w6/gsmarena_000.jpg",
        "publishedAt": "2023-08-02T22:59:02Z",
        "content": "The iPhone 15 family is expected to arrive this fall with a price hike and slimmer bezels. Interestingly, demand for the upcoming series is right now judged to be lower than it was for the iPhone 14 … [+872 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sportskeeda"
        },
        "author": "Alan Sahbegovic",
        "title": "GTA Online's pre-release version apparently runs via Xenia, the Xbox 360 emulator for PC - Sportskeeda",
        "description": "Some gamers have figured out a way to play GTA Online's pre-release version on Xenia, which is an emulator for playing Xbox 360 games for the PC.",
        "url": "https://www.sportskeeda.com/gta/gta-online-s-pre-release-version-apparently-runs-via-xenia-xbox-360-emulator-pc",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2023/08/af82f-16910079841242-1920.jpg",
        "publishedAt": "2023-08-02T20:55:00Z",
        "content": "Some gamers have figured out a way to play GTA Online's pre-release version on Xenia, which is an emulator for playing Xbox 360 games for the PC. Astute players should know that Grand Theft Auto 5 wa… [+3161 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Inverse"
        },
        "author": "Raymond Wong",
        "title": "Keychron Lemokey L3 Mechanical Keyboard Goes After Gamers - Inverse",
        "description": "After conquering the customizable mechanical keyboard world, Keychron is now going after gamers with the L3 under its new gaming sub-brand Lemokey. Its first gaming keyboard, the L3, looks modeled after the Q3 Pro.",
        "url": "https://www.inverse.com/tech/keychron-lemokey-l3-customizable-mechanical-gaming-keyboard-wireless",
        "urlToImage": "https://imgix.bustle.com/uploads/image/2023/8/2/4af4f406-2d91-451b-bceb-f8c43776f58d-lemokey-l3-05.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
        "publishedAt": "2023-08-02T20:30:25Z",
        "content": "Having essentially brute-forced its way into becoming one of the most popular custom mechanical keyboard makers, Keychron is now setting its sights on gaming. \r\nThe company today announced a Kickstar… [+2715 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gizmodo.com"
        },
        "author": "Florence Ion",
        "title": "Nokia Unveils Nokia 150 and 130 to Keep '90s Dreams Alive - Gizmodo",
        "description": "The Nokia 130 and 150 are throwback feature phones devoid of anything that could be distracting—except Snake.",
        "url": "https://gizmodo.com/nokia-150-nokia-130-unveiled-1850700997",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c6a7c97a4607a4af09a07b03e9e75121.png",
        "publishedAt": "2023-08-02T20:15:43Z",
        "content": "Does your smartphone feel like its too smart for you? Try Nokia. The company unveiled two new phones Wednesday, and they arent less worthy for their lack of apps. The fact that theyre so light on dis… [+2142 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Search Engine Land"
        },
        "author": "Nicola Agius",
        "title": "8 new Google Analytics 4 features to enhance app measurement and performance - Search Engine Land",
        "description": "The new AI-powered features were launched to help marketers better understand their audience and optimize campaigns more effectively.",
        "url": "https://searchengineland.com/google-analytics-4-new-features-app-measurement-performance-430201",
        "urlToImage": "https://searchengineland.com/wp-content/seloads/2023/06/From-UA-to-GA4-Managing-your-reporting-expectations-800x450.png",
        "publishedAt": "2023-08-02T20:08:00Z",
        "content": "Google Analytics 4 has unveiled eight new features to improve app campaign measurement and performance.\r\nThe additional AI-powered insights have been set up to give marketers a better understanding o… [+3597 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gadgets360.com"
        },
        "author": "Richa Sharma",
        "title": "Amazon Great Freedom Festival Sale Begins Today for Prime Members: Biggest Offers and Discounts - Gadgets 360",
        "description": "Amazon Great Freedom Festival Sale will start today at 12 pm IST for the Prime members, while non-Prime members will be able to avail the great deals and discounts on the upcoming sale from August 4. The e-commerce giant is offering an additional 10 instant d…",
        "url": "https://www.gadgets360.com/mobiles/features/amazon-great-freedom-festival-sale-2023-begins-august-3-biggest-deals-discounts-offers-4264151",
        "urlToImage": "https://i.gadgets360cdn.com/large/samsung_galaxy_fold_5_1690359332225.jpg",
        "publishedAt": "2023-08-02T20:05:32Z",
        "content": "Amazon Great Freedom Festival Sale will start today at 12 pm IST for the Prime members, while non-Prime members will be able to avail the great deals and discounts on the upcoming sale from August 4.… [+3960 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Umar Shakir",
        "title": "DJI’s Osmo Action 4 launches at $399 - The Verge",
        "description": "The DJI Osmo Action 4 camera has a bigger image sensor compared to the older Osmo Action 3 and a higher price, starting at $399 for the standard combo.",
        "url": "https://www.theverge.com/2023/8/2/23817334/dji-osmo-action-4-video-camera-399",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/zgDjNwENlIeR5IR7CwH4jIqcDXQ=/0x0:2724x1816/1200x628/filters:focal(1362x908:1363x909)/cdn.vox-cdn.com/uploads/chorus_asset/file/24826119/ff163f4d33ffe820edc6376aa7e4bf8a.jpg",
        "publishedAt": "2023-08-02T20:04:23Z",
        "content": "DJIs new Osmo Action 4 camera delivers brighter footage for more money\r\nDJIs new Osmo Action 4 camera delivers brighter footage for more money\r\n / The DJI Osmo Action 4 camera has a slightly larger i… [+2970 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ZDNet"
        },
        "author": "June Wan",
        "title": "How to use StandBy Mode on iOS 17 (and which iPhones support it) - ZDNet",
        "description": "The upcoming iOS 17 feature turns your iPhone into an ambient smart display. Here's what you'll need to get started.",
        "url": "https://www.zdnet.com/article/how-to-use-standby-mode-on-ios-17-and-which-iphones-support-it/",
        "urlToImage": "https://www.zdnet.com/a/img/resize/b111867a967ef3a9b90c2452c281e1fd5e0fb873/2023/07/13/0c9bf846-7bbf-4e5e-aef2-461d0d3eaa79/iphone-ios-17-standby-mode.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2023-08-02T19:51:49Z",
        "content": "June Wan/ZDNET\r\nIf you're the type of person who leaves your phone on your bedside or docked on the office desk, iOS 17's StandBy mode has your name on it.\r\nWith the upcoming version of iOS, setting … [+1475 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sportskeeda"
        },
        "author": "Mansab Sayyad",
        "title": "Minecraft 1.20.2 snapshot 23w31a: Villager trade nerf, diamond ore generation changes, and more - Sportskeeda",
        "description": "Minecraft is a game that is constantly evolving and getting new features added to it. The latest snapshot for this title's Java Edition version 1.20.2 is no exception.",
        "url": "https://www.sportskeeda.com/minecraft/news-minecraft-1-20-2-snapshot-23w31a-villager-trade-nerf-diamond-ore-generation-changes",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2023/08/534e0-16909976841942-1920.jpg",
        "publishedAt": "2023-08-02T18:55:00Z",
        "content": "Minecraft is a game that is constantly evolving and getting new features added to it. The latest snapshot for this title's Java Edition version 1.20.2 is no exception. Released on August 2, 2023, 23w… [+7461 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "XDA Developers"
        },
        "author": "Timi Cantisano",
        "title": "Galaxy S22 Ultra deal slashes 42% off the price, dropping it to a new low - XDA Developers",
        "description": "A fantastic deal on a powerful and sleek top-tier smartphone.",
        "url": "https://www.xda-developers.com/galaxy-s22-ultra-42-off-deal/",
        "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/02/Samsung-Galaxy-S22-Ultra-XDA-Hands-On-001101.jpg",
        "publishedAt": "2023-08-02T18:38:00Z",
        "content": "The Samsung Galaxy S22 Ultra was one of the most complete Android smartphones on the market in 2022, offering the best screen, the most versatile camera system, the best SoC in Android, and a stylus.… [+1757 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Sportskeeda"
        },
        "author": "Kushal Bhattacharyya",
        "title": "Modern Warfare 2 introduces new virtual assistant \"Battle Buddy\" with Season 5 update - Sportskeeda",
        "description": "Modern Warfare 2 and Warzone 2 Season 5 update introduced a Battle Buddy called Gwen.",
        "url": "https://www.sportskeeda.com/call-of-duty-game/news-modern-warfare-2-introduces-new-virtual-assistant-battle-buddy-season-5-update",
        "urlToImage": "https://staticg.sportskeeda.com/editor/2023/08/1fb88-16909935073102-1920.jpg",
        "publishedAt": "2023-08-02T16:35:01Z",
        "content": "Modern Warfare 2 and Warzone 2 Season 5 update introduced a Battle Buddy called Gwen. This virtual assistant feature is one of the unique additions to the game, as it offers various exciting attribut… [+2204 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Search Engine Land"
        },
        "author": "Nicola Agius",
        "title": "YouTube Shorts launches new features to improve content creation - Search Engine Land",
        "description": "Marketers now have access to six new features, including the ability to go live with Shorts videos, as well as enhanced editing capabilities.",
        "url": "https://searchengineland.com/youtube-shorts-new-features-content-creation-430175",
        "urlToImage": "https://searchengineland.com/wp-content/seloads/2023/05/Shutterstock_293731811.jpg",
        "publishedAt": "2023-08-02T16:08:00Z",
        "content": "YouTube Shorts has rolled out a range of new tools to encourage and inspire content creation.\r\nThe six new features give creators a range of new capabilities on the platform, such as the ability to g… [+3383 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Stephen Curry Answers The Web's Most Searched Questions | WIRED - WIRED",
        "description": "Basketball superstar Stephen Curry joins WIRED to answer his most searched questions from the internet. What NBA records has he broken? Where did his 'night ...",
        "url": "https://www.youtube.com/watch?v=qU3GuO-2rk0",
        "urlToImage": "https://i.ytimg.com/vi/qU3GuO-2rk0/maxresdefault.jpg",
        "publishedAt": "2023-08-02T16:01:10Z",
        "content": null
    }
]

const EducationsStore = () => {
  
  return (
    <div>
       <div className='eduScreen'>
          <h3 className='Edutitle'>Education makes Growth</h3>
      <div className="container my-3" id='edu'>
      <div className="row">
      {articles.map((article, index) => (
              <div className="col-md-4" key={index}>
                <EducationItem
                  title={article.title ? article.title.slice(0, 45) : ''}
                  description={article.description ? article.description.slice(0, 90) : '....'}
                  urlToImage={article.urlToImage} // Corrected prop name
                  url={article.url}
                  publishedAt={article.publishedAt}
                />
              </div>
            ))}
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default EducationsStore
