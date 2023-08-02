import React  from 'react'
import EducationItem from './EducationItem'


const articles = [
  {
    "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
    },
    "author": "TIMESOFINDIA.COM",
    "title": "HP announces Back to College sale: Discounts on laptops, printers available for students - Times of India",
    "description": "HP has launched its Back to College initiative offering discounts and special deals on its latest laptops and printers. Students can avail offers on l",
    "url": "https://timesofindia.indiatimes.com/gadgets-news/hp-announces-back-to-college-sale-discounts-on-laptops-printers-available-for-students/articleshow/102326453.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-102326471,width-1070,height-580,imgsize-14378,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2023-08-01T15:52:00Z",
    "content": null
},
{
    "source": {
        "id": null,
        "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "Apple Watch Series 9 Rumored to Have New Pink Color Option - MacRumors",
    "description": "The upcoming Apple Watch Series 9 will feature the same design as the Series 8, with 41mm and 45mm case sizes, but a new pink color will be available...",
    "url": "https://www.macrumors.com/2023/08/01/apple-watch-series-9-pink-color/",
    "urlToImage": "https://images.macrumors.com/t/5qniIh0ci_t8vWfp7RjUzVXQI2I=/2500x/article-new/2023/08/Apple-Watch-Series-9-Pink-Aluminum-Feature.jpg",
    "publishedAt": "2023-08-01T14:59:11Z",
    "content": "The upcoming Apple Watch Series 9 will feature the same design as the Series 8, with 41mm and 45mm case sizes, but a new pink color will be available for the aluminum model, according to info shared … [+1074 chars]"
},
{
    "source": {
        "id": null,
        "name": "Deccan Herald"
    },
    "author": "PTI",
    "title": "AI tool GPT-3 found to reason as well as undergraduate students - Deccan Herald",
    "description": "GPT-3, the popular AI-powered tool, was found to reason as well as college undergraduate students, scientists have found. The artificial intelligence large language model (LLM) was asked to solve reasoning problems that were typical of intelligence tests and …",
    "url": "https://www.deccanherald.com/business/technology/ai-tool-gpt-3-found-to-reason-as-well-as-undergraduate-students-1242883.html",
    "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2023/08/01/chatbot-istock-1173043-1671427282-1242883-1690898793.jpg",
    "publishedAt": "2023-08-01T14:06:33Z",
    "content": "GPT-3, the popular AI-powered tool, was found to reason as well as college undergraduate students, scientists have found.\r\nThe artificial intelligence large language model (LLM) was asked to solve re… [+2593 chars]"
},
{
    "source": {
        "id": null,
        "name": "MarkTechPost"
    },
    "author": "Niharika Singh, Niharika Singh",
    "title": "DeepMind AI Supercharges YouTube Shorts Exposure by Auto-Generating Descriptions for Millions of Videos - MarkTechPost",
    "description": "DeepMind, in collaboration with YouTube, has unveiled a cutting-edge AI model, Flamingo, designed to enhance the searchability of YouTube Shorts videos. These short video clips, similar to the popular platform TikTok, often need more descriptive text and mean…",
    "url": "https://www.marktechpost.com/2023/08/01/deepmind-ai-supercharges-youtube-shorts-exposure-by-auto-generating-descriptions-for-millions-of-videos/",
    "urlToImage": "https://www.marktechpost.com/wp-content/uploads/2023/05/play-button-hand-panoramic-scaled.jpg",
    "publishedAt": "2023-08-01T14:00:19Z",
    "content": "DeepMind, in collaboration with YouTube, has unveiled a cutting-edge AI model, Flamingo, designed to enhance the searchability of YouTube Shorts videos. These short video clips, similar to the popula… [+3853 chars]"
},
{
    "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
    },
    "author": "TIMESOFINDIA.COM",
    "title": "Nothing releases Swedish House Mafia Sound Pack for Phone (2) and Phone (1) - Times of India",
    "description": "Nothing, in collaboration with Swedish House Mafia, has launched new ringtones and sound packs with its Phone 1 and Phone 2 models. Glyph Composer app",
    "url": "https://timesofindia.indiatimes.com/gadgets-news/nothing-releases-swedish-house-mafia-sound-pack-for-phone-2-and-phone-1/articleshow/102319982.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-102319947,width-1070,height-580,imgsize-35175,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2023-08-01T13:56:00Z",
    "content": null
},
{
    "source": {
        "id": null,
        "name": "Gadgets360.com"
    },
    "author": "Himani Jha, David Delima",
    "title": "Boult Z60 TWS Earphones With 13mm Drivers, Up to 8 Hours of Battery Life Launched in India: Details - Gadgets 360",
    "description": "Boult Z60 truly wireless stereo (TWS) earphones have been launched in India, priced under Rs. 1,000. The new affordable TWS headset from the Indian brand come with Bluetooth 5.3 connectivity and are claimed to offer up to 8 hours of playtime on a single charg…",
    "url": "https://www.gadgets360.com/audio/news/boult-z60-tws-earbuds-price-in-india-rs-999-launch-specifications-features-4259718",
    "urlToImage": "https://i.gadgets360cdn.com/large/Boult_Z60_main_1690897247483.jpg",
    "publishedAt": "2023-08-01T13:42:06Z",
    "content": "Boult Z60 truly wireless stereo (TWS) earphones have been launched in India. The latest affordable TWS headset from the Indian brand are priced under Rs. 1,000 in India. Each earphone is equipped wit… [+1552 chars]"
},
{
    "source": {
        "id": null,
        "name": "Livemint"
    },
    "author": "Neha Saini",
    "title": "Redmi 12 4G and Redmi 12 5G debut with 50MP dual camera: Price, offers and other details to know | Mint - Mint",
    "description": "Xiaomi India launches Redmi 12 5G and Redmi 12 4G with similar features, different processors; prices start at  ₹8,999.",
    "url": "https://www.livemint.com/technology/gadgets/redmi-12-4g-and-redmi-12-5g-debut-with-50mp-dual-camera-price-offers-and-other-details-to-know-11690896302951.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2023/08/01/600x338/redmi_12_5g_1690896437178_1690896443790.jpg",
    "publishedAt": "2023-08-01T13:29:03Z",
    "content": "Xiaomi India has unveiled two new Redmi phones in the country today. The smartphone maker has launched Redmi 12 5G and Redmi 12 4G in the entry-level phone category. Both the handsets share similar f… [+1597 chars]"
},
{
    "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
    },
    "author": "AP",
    "title": "Get ready to deal with AI's hallucination problem as chatbots become part of your daily lives - The Economic Times",
    "description": "Described as hallucination, confabulation or just plain making things up, it's now a problem for every business, organisation and high school student trying to get a generative AI system to compose documents and get work done.",
    "url": "https://economictimes.indiatimes.com/tech/technology/get-ready-to-deal-with-ais-hallucination-problem-as-chatbots-become-part-of-your-daily-lives/articleshow/102319084.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-102319170,width-1070,height-580,imgsize-29284,overlay-ettech/photo.jpg",
    "publishedAt": "2023-08-01T13:19:00Z",
    "content": "Spend enough time with ChatGPT and other artificial intelligence (AI) chatbots and it doesn't take long for them to spout falsehoods.Described as hallucination, confabulation or just plain making thi… [+6485 chars]"
},
{
    "source": {
        "id": null,
        "name": "India Today"
    },
    "author": "Abhik Sengupta",
    "title": "Samsung Galaxy F34 5G with triple rear cameras to launch in India on Aug 7, price teased - India Today",
    "description": "Samsung has announced the launch of the Samsung Galaxy F34 5G in India. The phone boasts a 6.4-inch Full-HD sAMOLED display and a 50-megapixel primary camera.",
    "url": "https://www.indiatoday.in/technology/news/story/samsung-galaxy-f34-5g-triple-rear-cameras-launch-india-august-7-price-2414837-2023-08-01",
    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/samsung-galaxy-f34-5g-010311-16x9.jpg?VersionId=SlUQ6Fg1bcuwT8GvBdSoWgdvoD5B9hIn",
    "publishedAt": "2023-08-01T13:03:49Z",
    "content": "By Abhik Sengupta: Samsung has announced the launch of the Samsung Galaxy F34 5G in India on August 7. This follows the launch of the Galaxy F54 in early June 2023. Design-wise, both Galaxy F smartph… [+2109 chars]"
},
{
    "source": {
        "id": null,
        "name": "GSMArena.com"
    },
    "author": "Peter",
    "title": "Ice Universe: the Samsung Galaxy S24 and S24+ will have LTPO displays - GSMArena.com",
    "description": "Samsung has been using LTPO panels on the Ultra models since the S21 generation, but the two smaller models stuck with old school panels.",
    "url": "https://www.gsmarena.com/ice_universe_the_samsung_galaxy_s24_and_s24_will_have_ltpo_displays-news-59390.php",
    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/08/samsung-galaxy-s24-s24plus-to-use-ltpo-displays/-952x498w6/gsmarena_000.jpg",
    "publishedAt": "2023-08-01T13:01:01Z",
    "content": "The S21 Ultra was the first of the Galaxy S series to use an LTPO display, this tech offers fine-grained control over the refresh rate and helps save battery. The the S21 and S21+ stuck with old scho… [+1091 chars]"
},
{
    "source": {
        "id": null,
        "name": "Jagran.com"
    },
    "author": "Tarin Hussain",
    "title": "Best Smart TV To Watch Cricket Matches: Top Choices Amongst 55 inch and 65 inch TVs - Jagran English",
    "description": "Best Smart TV To Watch Cricket Matches: In the current era, Smart TVs have become a household essential due to their internet-based applications and OTT platform support. However, selecting the perfect one to enjoy live cricket matches can be challenging. We'…",
    "url": "https://english.jagran.com/top-deals/electronics/television/best-smart-tv-to-watch-cricket-matches-top-choices-amongst-55-inch-and-65-inch-tvs-10091149",
    "urlToImage": "https://imgeng.jagran.com/images/2023/aug/smart tv1690891826788.jpg",
    "publishedAt": "2023-08-01T12:45:17Z",
    "content": "Best Smart TV To Watch Cricket Matches: In the realm of entertainment, cricket matches stand as a unifying force, capturing the hearts of enthusiasts worldwide. To relish every thrilling moment with … [+5275 chars]"
},
{
    "source": {
        "id": null,
        "name": "Gadgets360.com"
    },
    "author": "David Delima, Siddharth Suvarna",
    "title": "Apple Patent Application Hints at AirPods Sensors That Allow Measurement of Brain Electrical Activity - Gadgets 360",
    "description": "AirPods could soon double as a device that can monitor brain activity. Apple has filed a patent application for an AirPods sensor mechanism that would allow the wearable device to monitor electrical impulses from the wearer's brain, just like the medical devi…",
    "url": "https://www.gadgets360.com/audio/news/airpods-sensor-patent-measure-eeg-emg-eog-biosignals-brain-electrical-activity-4258986",
    "urlToImage": "https://i.gadgets360cdn.com/large/apple_airpods_pro_2_review_open_1664951853556.jpg",
    "publishedAt": "2023-08-01T12:41:12Z",
    "content": "AirPods Apple's truly wireless stereo (TWS) earphones could double as a health monitoring tool in the future, according to a patent application recently published by the US Patent Office (USPTO). The… [+3500 chars]"
},
{
    "source": {
        "id": null,
        "name": "India Today"
    },
    "author": "Ankita Garg",
    "title": "Flipkart Big Saving Days sale announced ahead of Independence Day: Discount on iPhone 14, Samsung Galaxy S22+ and more - India Today",
    "description": "Flipkart has confirmed that the platform will be running a Big Saving Days sale, just a few days ahead of Independence Day. The company has revealed a list of 5G phones that will be on sale.",
    "url": "https://www.indiatoday.in/technology/news/story/flipkart-big-saving-days-sale-announced-ahead-of-independence-day-deals-on-iphone-14-samsung-galaxy-s22-plus-and-more-2414818-2023-08-01",
    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/galaxy-s22jpg-203326-16x9.jpg?VersionId=Km_QjNfVJNjeu.V.APMyIefMBh7NbbmK",
    "publishedAt": "2023-08-01T12:38:38Z",
    "content": "By Ankita Garg: Amazon recently announced its upcoming Great Freedom Festival sale event will take place on August 5 and now, Flipkart has confirmed that the platform will be running a Big Saving Day… [+1947 chars]"
},
{
    "source": {
        "id": null,
        "name": "Zoom"
    },
    "author": "GT Correspondent",
    "title": "Redmi SonicBass Wireless Earphones 2 featuring 9.2mm dynamic drivers launched in India: Price, specifications - Times Now",
    "description": "The earphones with a neckband were revealed alongside the Redmi 12 4G and Redmi 12 5G smartphones.",
    "url": "https://www.timesnownews.com/technology-science/redmi-sonicbass-wireless-earphones-2-featuring-9-2mm-dynamic-drivers-launched-in-india-price-specifications-article-102317084",
    "urlToImage": "https://static.tnn.in/thumb/msid-102317084,updatedat-1690892593403,width-1280,height-720,resizemode-75/102317084.jpg",
    "publishedAt": "2023-08-01T12:23:13Z",
    "content": "Haryana Violence: Gurugram, Nuh Remain Tense, Companies Ask Employees To WFH, Schools In Sohna To Remain Closed On Wednesday | 10 Points"
},
{
    "source": {
        "id": null,
        "name": "India TV News"
    },
    "author": "Edited by Saumya Nigam",
    "title": "Motorola's upcoming Moto G14 to feature 6.5-inch Full HD+ display, 5000 mAh battery and more - India TV News",
    "description": "Motorola has launched its new budget-friendly smartphone, the 'moto g14,' in India. This device comes with a 6.5-inch Full HD+ display and a robust 5000mAh battery, providing users with an exceptional viewing experience and extended battery life.",
    "url": "https://www.indiatvnews.com/technology/news/motorola-s-upcoming-moto-g14-to-feature-6-5-inch-full-hd-display-5000-mah-battery-and-more-2023-08-01-884243",
    "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/08/moto-g14-1-1690890571.jpg",
    "publishedAt": "2023-08-01T12:10:09Z",
    "content": "Motorola has introduced its latest budget-friendly smartphone, the 'moto g14,' in India. The device boasts a 6.5-inch Full HD+ display and a powerful 5000mAh battery, among other impressive features.… [+2286 chars]"
},
{
    "source": {
        "id": null,
        "name": "GSMArena.com"
    },
    "author": "Yordan",
    "title": "Redmi Watch 3 Active debuts, Redmi 12 4G lands in India - GSMArena.com",
    "description": "The brand also introduces the Smart TV X series in four sizes and new neckband earphones. The Xiaomi had a big event in India today, where we saw the...",
    "url": "https://www.gsmarena.com/redmi_watch_3_active_debutes_globally_redmi_12_4g_lands_in_india-news-59391.php",
    "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/08/xiaomi-redmi-watch-3-active-more-in-stuff/-952x498w6/gsmarena_001.jpg",
    "publishedAt": "2023-08-01T12:05:01Z",
    "content": "The Xiaomi had a big event in India today, where we saw the global unveiling of the Redmi 12 5G smartphone. It wasnt the only international launch, as Xiaomi execs also introduced the Redmi Watch 3 A… [+1847 chars]"
},
{
    "source": {
        "id": null,
        "name": "XDA Developers"
    },
    "author": "Kishalaya Kundu",
    "title": "Lenovo could be working on a Steam Deck and Asus ROG Ally rival - XDA Developers",
    "description": "Details are scarce for now, but it's said to be based on Windows 11.",
    "url": "https://www.xda-developers.com/lenovo-legion-go-rumor/",
    "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/08/lenovo-legion-play.jpg",
    "publishedAt": "2023-08-01T11:50:00Z",
    "content": "Lenovo is reportedly developing a Windows-powered handheld gaming console similar to the Asus ROG Ally. The handheld market is getting increasingly competitive with the introduction of new devices on… [+1614 chars]"
},
{
    "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
    },
    "author": "Arghanshu Bose",
    "title": "Hackers using fake Android chat app to steal WhatsApp user data - Times of India",
    "description": "A new Android malware is reportedly targeting users in South Asia using a fake chat app named SafeChat. The attackers are circulating links to install",
    "url": "https://timesofindia.indiatimes.com/gadgets-news/hackers-using-fake-android-chat-app-to-steal-whatsapp-user-data/articleshow/102315102.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-102315021,width-1070,height-580,imgsize-29992,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2023-08-01T11:42:00Z",
    "content": null
},
{
    "source": {
        "id": null,
        "name": "Telangana Today"
    },
    "author": "IANS",
    "title": "Report: Nintendo set to unveil next-gen console in 2024 - Telangana Today",
    "description": "According to other two sources, the new Nintendo console could launch with an LCD screen, instead of the more premium OLED, to reduce costs.",
    "url": "https://telanganatoday.com/report-nintendo-set-to-unveil-next-gen-console-in-2024",
    "urlToImage": "https://cdn.telanganatoday.com/wp-content/uploads/2023/08/Nintendo.jpg",
    "publishedAt": "2023-08-01T11:33:54Z",
    "content": null
},
{
    "source": {
        "id": null,
        "name": "Forbes"
    },
    "author": "Gordon Kelly",
    "title": "Apple Leaks Detail All-New iPhone 15, iPhone 15 Pro Design Changes - Forbes",
    "description": "The biggest iPhone 15, iPhone 15 Pro design changes have leaked and Apple has accidentally revealed the most controversial one...",
    "url": "https://www.forbes.com/sites/gordonkelly/2023/08/01/apple-iphone-15-pro-max-design-action-buttion-ios17-code-leak/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6415bea1b950736eb076a1f0/0x0.jpg?format=jpg&crop=2667,1499,x627,y157,safe&width=1200",
    "publishedAt": "2023-08-01T11:31:29Z",
    "content": "iPhone 15 Pro Max scale render showing its ultra-thin bezels\r\n@Hanstsaiz\r\n08/01 Update below. This post was originally published on July 29\r\nApples biggest iPhone 15 and iPhone 15 Pro changes have le… [+6042 chars]"
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
                  urlWeb={article.url}
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
