import React  from 'react'
import EducationItem from './EducationItem'


const articles = [
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Abhik Sengupta",
        "title": "Oppo quietly launches 4G version of Oppo A78 with fast charging, India price set at Rs 17,499 - India Today",
        "description": "The highlight of the Oppo A78 4G is the battery and the supported charging speed. The device houses a 5000mAh battery with 67W SuperVOOC fast charging.",
        "url": "https://www.indiatoday.in/technology/news/story/oppo-a78-4g-50mp-camera-67w-charging-launch-india-price-set-at-rs-17499-2415040-2023-08-02",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/oppo-a78-4g-024906-16x9.jpg?VersionId=gHiIu_5tIyoreMCPZ_o8vvK6gtVz96OY",
        "publishedAt": "2023-08-02T03:52:23Z",
        "content": "By Abhik Sengupta: Oppo has launched a 4G version of the Oppo A78 in India, nearly eight months after launching the Oppo A78 5G. The new variant looks similar to its sibling, though there are some mi… [+2204 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "After Twitter, Elon Musk renames TweetDeck as XPro; New logo begins appearing on the site - HT Tech",
        "description": "After rebranding Twitter, Elon Musk is now slowly changing other parts of the social media platform. As part of the effort, TweetDeck will now be known as XPro. The new logo can be seen on the landing page.",
        "url": "https://tech.hindustantimes.com/tech/news/after-twitter-elon-musk-renames-tweetdeck-as-xpro-new-logo-begins-appearing-on-the-site-71690946370843.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/08/02/1600x900/TweetDeck_1690946612016_1690946621247.png",
        "publishedAt": "2023-08-02T03:26:31Z",
        "content": "Twitter's rebranding exercise is complete and the platform is now known as X. But owner Elon Musk is not done yet. After renaming the social media platform, he is now renaming all the associated asse… [+1843 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "BGMI redeem codes for August 2: How to unlock exclusive in-game items for free | Mint - Mint",
        "description": "BGMI (Battlegrounds Mobile India) redeem codes provide players with free in-game items without spending money. Players can follow steps on the official website to redeem codes and collect prizes.",
        "url": "https://www.livemint.com/technology/tech-news/bgmi-redeem-codes-for-august-2-how-to-unlock-exclusive-in-game-items-for-free-11690945966228.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/08/02/600x338/bgmi_1686885810032_1690946516662.webp",
        "publishedAt": "2023-08-02T03:22:13Z",
        "content": "BGMI (Battlegrounds Mobile India) quickly rose to prominence in India after the ban on PUBG Mobile. Despite facing its own ban, the Indian government decided to allow BGMI back into the country with … [+1979 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "Garena Free Fire Max redeem codes for Aug 02, 2023: Get weapons, diamonds, more | Mint - Mint",
        "description": "Garena Free Fire Max redeem codes offer in-game items like weapons, diamonds, and skins. Codes are updated daily and have limited availability.",
        "url": "https://www.livemint.com/technology/tech-news/garena-free-fire-max-redeem-codes-for-aug-02-2023-get-weapons-diamonds-more-11690945511651.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2023/08/02/600x338/Garena_Free_Fire_Max_1686545079791_1690945725675.webp",
        "publishedAt": "2023-08-02T03:09:01Z",
        "content": "Garena Free Fire Max redeem codes can be used to win in-game items like weapons, diamonds, skins and more. These 12 digit alphanumeric codes consist of capital letters and numbers. For those unaware,… [+1824 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "Redmi 12 series launch highlights: Xiaomi announces Redmi 12 5G, Watch 3 Active, and TV X series - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/technology/tech-news-technology/xiaomi-redmi-12-5g-launch-live-updates-8870379/",
        "urlToImage": null,
        "publishedAt": "2023-08-02T02:56:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "PTI",
        "title": "AI tool GPT-3 found to reason as well as undergraduate students - HT Tech",
        "description": "The artificial intelligence large language model (LLM) was asked to solve reasoning problems that were typical of intelligence tests and standardised tests such as the SAT",
        "url": "https://tech.hindustantimes.com/tech/news/ai-tool-gpt-3-found-to-reason-as-well-as-undergraduate-students-71690914309110.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/08/02/1600x900/ChatGPT-Detecting-Cheats-0_1679293031187_1679293031187_1690942617654.jpg",
        "publishedAt": "2023-08-02T02:21:13Z",
        "content": "GPT-3, the popular AI-powered tool, was found to reason as well as college undergraduate students, scientists have found.\r\nThe artificial intelligence large language model (LLM) was asked to solve re… [+2593 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Tribune India"
        },
        "author": "The Tribune India",
        "title": "MIS rate for apple up by 50 paise per kg - The Tribune India",
        "description": null,
        "url": "https://www.tribuneindia.com/news/himachal/mis-rate-for-apple-up-by-50-paise-per-kg-531276",
        "urlToImage": null,
        "publishedAt": "2023-08-02T01:31:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Garena Free Fire MAX Redeem Codes for August 2: Clash Squad Season 20 commences! - HT Tech",
        "description": "Garena Free Fire MAX Redeem Codes for August 2: Check out Garena Free Fire MAX redeem codes for August 2 and know how to claim them.",
        "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-max-redeem-codes-for-august-2-clash-squad-season-20-commences-71690938466384.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/08/02/1600x900/056_1651885411062_1690938596501.jpg",
        "publishedAt": "2023-08-02T01:15:17Z",
        "content": "Garena Free Fire MAX Redeem Codes for August 2: The Ranked Season 19 of Free Fire MAX Clash Squad has come to an end, and it has been replaced by the Free Fire MAX Clash Squad Season 20. As a result,… [+2017 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Theregister.com"
        },
        "author": "Katyanna Quach",
        "title": "Google wants to 'supercharge Assistant' with AI as Meta gives bots a personality - The Register",
        "description": "Does that include Zuck or?",
        "url": "https://www.theregister.com/2023/08/01/google_meta_ai_chatbots/",
        "urlToImage": "https://regmedia.co.uk/2023/08/01/assistant_shutterstock.jpg",
        "publishedAt": "2023-08-01T23:05:00Z",
        "content": "The chatbot craze isn't slowing any time soon. Google is understood to be injecting generative AI features into its digital assistant. Meanwhile Meta is said to be planning to launch virtual agents w… [+2509 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "FIRST LOOK: Porsche 911 ST – Ultimate 911 with GT3 RS Power | Top Gear - Top Gear",
        "description": "Welcome to the Porsche 911 S/T. Designed by Porsche as a present to itself on the 60th anniversary of the 911 (there’s 1,963 planned in honour of the birth y...",
        "url": "https://www.youtube.com/watch?v=cSTw33llAKE",
        "urlToImage": "https://i.ytimg.com/vi/cSTw33llAKE/maxresdefault.jpg",
        "publishedAt": "2023-08-01T22:00:29Z",
        "content": null
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "The Feed",
        "title": "Madden 24: MCS to commence in August. See the prize pool - The Economic Times",
        "description": "MCS will launch in August after Madden 24's global release on August 18. The series includes the Ultimate Kickoff finals on September 5-6, featuring a total prize pool of $1.7 million. Players aged 16+ can compete on PlayStation 5, PC and Xbox Series X|S via …",
        "url": "https://economictimes.indiatimes.com/news/international/us/madden-24-mcs-to-commence-in-august-see-the-prize-pool/articleshow/102328644.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-102328654,width-1070,height-580,imgsize-114606,overlay-economictimes/photo.jpg",
        "publishedAt": "2023-08-01T20:50:00Z",
        "content": "The Madden Championship Series (MCS) will launch in August, featuring a substantial $1.7 million prize pool. As Madden 24 releases worldwide on August 18, players can gear up for exciting competition… [+2026 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Themessenger.com"
        },
        "author": "Sherin Shibu",
        "title": "Google's RT-2 Robot Gives ChatGPT-Style AI a Body - The Messenger",
        "description": "Robots equipped with Google's RT-2 model can perform actions by making inferences rather than directly referencing specific training data",
        "url": "https://themessenger.com/tech/googles-rt-2-robot-gives-chatgpt-style-ai-a-body",
        "urlToImage": "https://cms.themessenger.com/wp-content/uploads/2023/08/Google-RT-2-robot-promo-image.png",
        "publishedAt": "2023-08-01T20:31:00Z",
        "content": "Googles latest robot can learn, infer and act beyond the scope of its training, according to a July 28 post to the Google DeepMind website. Using the Robotic Transformer 2 (RT-2) AI model, it can det… [+4145 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Claytoncountyregister.com"
        },
        "author": "Lira Mercer",
        "title": "NVIDIA, Sony, Unity Technologies, and Vast to Address New Developments, Artistry, and Pushing Boundaries - Clayton County Register",
        "description": "NVIDIA, Sony, Unity Technologies, and Vast to Address New Developments, Artistry, and Pushing Boundaries - Clayton County Register",
        "url": "https://www.claytoncountyregister.com/news2/siggraph-2023-announces-its-lineup-of-sponsored-keynote-speakers/55047/",
        "urlToImage": "https://www.claytoncountyregister.com/wp-content/uploads/2023/07/mfrack_realistic_photo_of_woman_stockbroker_job_c2ee97a2-7052-4ad3-8b9d-0c7d8b1c2d14.jpeg",
        "publishedAt": "2023-08-01T20:02:16Z",
        "content": "SIGGRAPH 2023, the premier conference and exhibition on computer graphics and interactive techniques, is celebrating its 50th year of breakthroughs and innovation. The conference has announced its li… [+1641 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deccan Herald"
        },
        "author": "Nandana Prajish",
        "title": "New gaming event in Bengaluru - Deccan Herald",
        "description": "S8UL Gaming Festival was held in the city for the first time over the weekend. More than 13,000 gaming enthusiasts from across the country attended the event which had panel discussions, cosplay events and competitions over two days.",
        "url": "https://www.deccanherald.com/metrolife/metrolife-your-bond-with-bengaluru/new-gaming-event-in-bengaluru-1242983.html",
        "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2023/08/02/file7ra83smd3md5816weyn-1242983-1690918728.jpg",
        "publishedAt": "2023-08-01T19:38:48Z",
        "content": "S8UL Gaming Festival was held in the city for the first time over the weekend. More than 13,000 gaming enthusiasts from across the country attended the event which had panel discussions, cosplay even… [+894 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "9to5Mac"
        },
        "author": "Michael Potuck",
        "title": "Control Center concept imagines list UI overhaul like iOS 17 Messages app - 9to5Mac",
        "description": "Concept by Parker Ortolani Taking a look at an aspect of iOS that’s remained mostly unchanged for years, Parker Ortolani...",
        "url": "https://9to5mac.com/2023/08/01/control-center-concept-minimal-list-ui-overhaul-ios/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/08/control-center-concept-ios-17.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-08-01T19:22:00Z",
        "content": "Concept by Parker Ortolani\r\nTaking a look at an aspect of iOS thats remained mostly unchanged for years, Parker Ortolani has shared an interesting Control Center concept. What if it adopted a list-st… [+2374 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Fortnite x Jujutsu Kaisen - Official Collaboration Teaser Trailer - IGN",
        "description": "Watch the Fortnite x Jujutsu Kaisen collaboration teaser trailer, revealing the sorcerers from Jujutsu Kaisen are coming to the battle royale game.#IGN #Fort...",
        "url": "https://www.youtube.com/watch?v=hhNZbd5SYkI",
        "urlToImage": "https://i.ytimg.com/vi/hhNZbd5SYkI/maxresdefault.jpg",
        "publishedAt": "2023-08-01T19:00:29Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Jagran Josh"
        },
        "author": "Nikhil Batra",
        "title": "What Is NASA’s New Streaming Service? - Jagran Josh",
        "description": "NASA is soon going to launch NASA+ which is a new streaming service that offers exclusive content about space exploration.",
        "url": "https://www.jagranjosh.com/general-knowledge/nasa-new-streaming-service-1690913933-1",
        "urlToImage": "https://img.jagranjosh.com/images/2023/August/182023/nasa-new-service.jpg",
        "publishedAt": "2023-08-01T18:11:00Z",
        "content": "In its recent move to encourage more and more space enthusiasts, NASA is rolling out a streaming service free of charge. \r\nThis platform will offer live coverage of NASAs missions, on-demand services… [+2520 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "XDA Developers"
        },
        "author": "Timi Cantisano",
        "title": "Samsung's Galaxy Z Flip 5 cover display gains support for the powerful CoverScreen OS - XDA Developers",
        "description": "You can now expand the capabilities of the Samsung Z Flip 5 cover display thanks to a new update.",
        "url": "https://www.xda-developers.com/samsung-galaxy-z-flip-5-coverscreen-os/",
        "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/07/samsung_galaxy_z_flip5_hands-on_lavender_meal.jpg",
        "publishedAt": "2023-08-01T18:03:00Z",
        "content": "Key Takeaways\r\n<ul><li> CoverScreen OS is an app that expands the capabilities of the outer display on foldable phones, allowing all apps to run on the cover display, which is especially beneficial f… [+2449 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "XDA Developers"
        },
        "author": "Rahul Naskar",
        "title": "Google tests AI-generated summaries for YouTube videos - XDA Developers",
        "description": "YouTube's new AI feature will help get a clear and accurate summary of videos you're planning to watch before actually watching them.",
        "url": "https://www.xda-developers.com/ai-generated-summaries-youtube-videos/",
        "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/06/youtube-logo-on-iphone-12.jpg",
        "publishedAt": "2023-08-01T17:41:00Z",
        "content": "Key Takeaways\r\n<ul><li> Google is testing an AI feature on YouTube that generates summaries of videos, providing users with an idea of the video's content before actually watching it. </li><li> The A… [+2439 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "gizmochina"
        },
        "author": "gizmochina",
        "title": "Redmi Sonicbass 2 neckband earbuds with ENC & 16 hours battery backup launched in India - gizmochina",
        "description": null,
        "url": "https://www.gizmochina.com/2023/08/01/redmi-sonicbass-2-neckband-earbuds-launched-india/",
        "urlToImage": null,
        "publishedAt": "2023-08-01T17:35:57Z",
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
