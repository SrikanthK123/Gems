import React from "react";
import MoviesItems from "./MoviesItems";

const MoviesStore = () => {
  const articles = [
    {
      "source": {
          "id": null,
          "name": "123telugu.com"
      },
      "author": null,
      "title": "Photo Moment: Team VD13/SVC54 celebrates Mrunal Thakur’s birthday - 123telugu",
      "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
      "url": "https://www.123telugu.com/mnews/photo-moment-team-vd13-svc54-celebrates-mrunal-thakurs-birthday.html",
      "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      "publishedAt": "2023-08-01T15:30:00Z",
      "content": "Vijay Deverakonda and Parasuram are working on a family entertainer currently. The duo joined hands after the blockbuster like Geetha Govindam, and hence there are solid expectations. Tentatively tit… [+740 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "Dream Girl 2 Trailer: Ayushmann Khurrana As Pooja Makes The Heart Skip A Beat - NDTV Movies",
      "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      "url": "https://www.ndtv.com/news",
      "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
      "publishedAt": "2023-08-01T14:39:31Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "123telugu.com"
      },
      "author": null,
      "title": "AP minister Ambati Rambabu gets furious over Bro; Makes sensational comments - 123telugu",
      "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
      "url": "https://www.123telugu.com/mnews/ap-minister-ambati-rambabu-gets-furious-over-bro-makes-sensational-comments.html",
      "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      "publishedAt": "2023-08-01T14:20:00Z",
      "content": "Bro starring Powerstar Pawan Kalyan and Sai Dharam Tej, has hit the screens recently. But the film landed in controversy as a few believed that the character played by Prithvi made a mockery of Ambat… [+780 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "India Today"
      },
      "author": "Medha Chawla",
      "title": "ICW 2023: Why Disha Patani, Kiara Advani, Sobhita Dhulipala's showstopping looks were similar - India Today",
      "description": "The Hyundai India Couture Week 2023, an FDCI initiative, kickstarted in New Delhi on July 25.",
      "url": "https://www.indiatoday.in/lifestyle/fashion/story/disha-patani-kiara-advani-sobhita-dhulipala-showstopping-looks-similar-side-slits-india-couture-week-2023-2414860-2023-08-01",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/disha-patani--kiara-advani--bhumi-pednekar-and-sobhita-dhulipala-014726-16x9.jpg?VersionId=nJ2iKGiJgbm24kAI_OcHvx2rB6pstQUN",
      "publishedAt": "2023-08-01T14:05:12Z",
      "content": "By Medha Chawla: As the fashion extravaganza India Couture Week 2023 is going on in its full glory, social media platforms are abuzz with photos of Bollywood celebrities sashaying on the ramp in dazz… [+2348 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "Md Nobhar",
      "title": "Jujutsu Kaisen Season 2 Episode 5: Exact Release Date, Time and where to watch - Hindustan Times",
      "description": "Jujutsu Kaisen delivers another spectacular episode setting up for a big emotional moment in the next installment. Check the schedule for when &where to watch.",
      "url": "https://www.hindustantimes.com/entertainment/anime/jujutsu-kaisen-season-2-episode-5-exact-release-date-time-and-where-to-watch-101690895305811.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/01/1600x900/gojo-geto-and-shoko-jujutsu-kaisen-season-2-1_1690897007682_1690897040103.webp",
      "publishedAt": "2023-08-01T13:41:56Z",
      "content": "Jujutsu Kaisen (JJK) Season 2 Episode 4 finished the exciting Hidden Inventory sub-arc and said goodbye to Toji Fushiguro. Gojo couldn't hate him in the battle. Next, fans are excited for Jujutsu Kai… [+2354 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "DNA India"
      },
      "author": "DNA Web Team",
      "title": "Vijay Varma has hilarious reaction to reports of Tamannaah Bhatia owning 'Rs 2 crore diamond ring': 'Mera naam - DNA India",
      "description": "Tamannaah Bhatia has already cleared the reports of Ram Charan's wife Upasana Kamineni Konidela gifting her a Rs 2 crore diamond ring with the world's fifth-largest diamond, which eventually turned out to be a bottle-opener.",
      "url": "https://www.dnaindia.com/bollywood/report-vijay-varma-has-hilarious-reaction-to-reports-of-tamannaah-bhatia-owning-rs-2-crore-diamond-ring-3054224",
      "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/08/01/2601718-ring-final.jpg",
      "publishedAt": "2023-08-01T13:26:50Z",
      "content": "Tamannaah Bhatia has already cleared the reports of Ram Charan's wife Upasana Kamineni Konidela gifting her a Rs 2 crore diamond ring with the world's fifth-largest diamond, which eventually turned o… [+2064 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "YouTube"
      },
      "author": null,
      "title": "Oppenheimer's Grandson Wishes This Scene Was Cut From The Film - Looper",
      "description": "One scene in \"Oppenheimer\" had the physicist's grandson wishing for some additional editing, and it may not be the one you think.#Oppenheimer #Grandson #Scen...",
      "url": "https://www.youtube.com/watch?v=SwU__RqPOY0",
      "urlToImage": "https://i.ytimg.com/vi/SwU__RqPOY0/maxresdefault.jpg",
      "publishedAt": "2023-08-01T13:00:20Z",
      "content": null
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "etimes.in",
      "title": "'Gadar 2': Advance bookings of the Sunny Deol starrer look very strong - deets inside - IndiaTimes",
      "description": "'Gadar 2' is the sequel to the 2001 release cult classic 'Gadar' starring Sunny Deol, Ameesha Patel, Utkarsh Sharma, Simratt Kaur. The film is helmed",
      "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/box-office/gadar-2-advance-bookings-of-the-sunny-deol-starrer-look-very-strong-deets-inside/articleshow/102316166.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-102316128,width-1070,height-580,imgsize-39868,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-08-01T12:03:00Z",
      "content": "'OMG 2': CBFC feels content of the Akshay Kumar starrer is 'slightly controversial'; film yet to clearance for releaseThe makers of 'OMG 2' await clearance by the Central Board Of Film Certification,… [+201 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "Ice Cream, Arcade Games And Moon Gazing: Kriti Sanon's Birthday Week With Sister Nupur Summed Up - NDTV Movies",
      "description": "In one of the photos, Kriti and Nupur are showing off their white henna designs",
      "url": "https://www.ndtv.com/entertainment/kriti-sanon-s-birthday-week-involved-ice-cream-arcade-games-and-moon-gazing-4259121",
      "urlToImage": "https://c.ndtvimg.com/2023-08/4malt6c8_kriti-sanon-_625x300_01_August_23.jpg",
      "publishedAt": "2023-08-01T11:49:32Z",
      "content": "Kriti Sanon shared this image. (courtesy: kritisanon)\r\nKriti Sanon celebrated her 33rd birthday last week in the company of her sister Nupur Sanon and her close friends. Now, the actress has offered … [+2371 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "Kiara Advani And Husband Sidharth Malhotra Are On Tourist Duty. See Cute Video - NDTV Movies",
      "description": "One user wrote, \"So cute they just look like a normal simple couple\"",
      "url": "https://www.ndtv.com/entertainment/kiara-advani-and-husband-sidharth-malhotra-are-on-tourist-duty-see-cute-video-4259161",
      "urlToImage": "https://c.ndtvimg.com/2023-08/q3h9ccl8_alia-_625x300_01_August_23.jpg",
      "publishedAt": "2023-08-01T11:32:34Z",
      "content": "Still of Kiara-Sidharth from a fan video. (courtesy: kiaraaalia)\r\nNew Delhi: Kiara Advani, who turned 31 on Monday, is currently on a vacation with her husband Sidharth Malhotra. A day before, the co… [+1750 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "123telugu.com"
      },
      "author": null,
      "title": "Tiger Nageswara Rao: Team refutes the rumors about the postponement - 123telugu",
      "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
      "url": "https://www.123telugu.com/mnews/tiger-nageswara-rao-team-refutes-the-rumors-about-the-postponement.html",
      "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
      "publishedAt": "2023-08-01T11:30:00Z",
      "content": "Mass Maharaja Ravi Teja entertained the audiences with his role in Waltair Veerayya at the beginning of the year. His last release Ravanasura didn’t get the desired result. Up next, he will be seen i… [+947 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "India Today"
      },
      "author": "Prachi Arya",
      "title": "Gadar 2: Sunny Deol, Ameesha Patel's film gets U/A certificate by CBFC - India Today",
      "description": "Sunny Deol and Ameesha Patel's love saga, 'Gadar 2' is scheduled to release in theaters on August 11. Ahead of the release, the film was given a U/A certificate.",
      "url": "https://www.indiatoday.in/movies/bollywood/story/gadar-2-sunny-deol-ameesha-patels-film-gets-ua-certificate-by-cbfc-2414773-2023-08-01",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/sunny-deol-013314-16x9.jpg?VersionId=RQHAuaIWPmEfPLoJ2u0WUAVno.d1k7kh",
      "publishedAt": "2023-08-01T11:29:56Z",
      "content": "By Prachi Arya: Sunny Deol and Ameesha Patel are all set to charm audiences with their on-screen chemistry in ‘Gadar 2.’ Adding to the anticipation, the Central Board of Film Certification (CBFC) has… [+1419 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Hindustan Times"
      },
      "author": "HT Entertainment Desk",
      "title": "August upcoming movies: OMG 2, Gadar 2, Heart of Stone, to Dream Girl 2 - Hindustan Times",
      "description": "Fans can also watch Ghoomer, Jailer, Bholaa Shankar and Akelli among other movies. Check full list of when and how you can watch them. | Bollywood",
      "url": "https://www.hindustantimes.com/entertainment/bollywood/august-upcoming-movies-omg-2-gadar-2-heart-of-stone-dream-girl-2-jailer-101690886159859.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/01/1600x900/omg_2_gadar_2_1690887514551_1690887515027.jpg",
      "publishedAt": "2023-08-01T11:23:15Z",
      "content": "OMG 2, Gadar 2, Jailer, Heart of Stone, and Dream Girl 2 among several other films will release in theatres and on OTT platforms in August. Fans and viewers can look forward to an interesting lineup … [+4469 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "News18"
      },
      "author": "Dishya Sharma",
      "title": "Akshay Kumar's OMG 2 REMOVES 'Frontal Nudity,' Condom Poster, Makes 25 Other Changes Given By CBFC - News18",
      "description": "Akshay Kumar's OMG 2 has incorporated all the changes directed to the film by the Censor Board. News18 has gained access to the modifications list.",
      "url": "https://www.news18.com/movies/omg-2-cbfc-27-changes-akshay-kumar-shivling-frontal-nudity-condom-poster-8478193.html",
      "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/07/omg-2-akshay-kumar-lord-shiva-168904612816x9.jpg",
      "publishedAt": "2023-08-01T11:16:28Z",
      "content": "OMG 2 has been passed by the Censor Board but with 27 changes. The film, which stars Akshay Kumar in the lead, has been asked to make numerous modifications to scenes, delete scenes and add disclaime… [+1829 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "Aditya Roy Kapur On Those Viral Portugal Holiday Pics With Ananya Panday - NDTV Movies",
      "description": "Pictures of Aditya Roy Kapur and Ananya Panday from Portugal went crazy viral",
      "url": "https://www.ndtv.com/entertainment/aditya-roy-kapur-on-those-viral-portugal-holiday-pics-with-ananya-panday-4258998",
      "urlToImage": "https://c.ndtvimg.com/2023-08/e1n2s8oo_ananya-_625x300_01_August_23.jpg",
      "publishedAt": "2023-08-01T10:59:18Z",
      "content": "Aditya Roy Kapur with Ananya Panday. (courtesy: bollywood_untoldstories)\r\nNew Delhi: Aditya Roy Kapur, who was holidaying in Portugal last month along with rumoured girlfriend Ananya Panday, opened u… [+1519 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "India Today"
      },
      "author": "Anindita Mukherjee",
      "title": "Zinda Banda from SRK's Jawan garners 46 million views in 24 hours! Details - India Today",
      "description": "'Zinda Banda' from 'Jawan' achieved an incredible milestone, with a staggering 46 million views on YouTube in just 24 hours. It featured Shah Rukh Khan with 1000 female performers.",
      "url": "https://www.indiatoday.in/movies/bollywood/story/zinda-banda-from-shah-rukh-khan-jawan-atlee-garners-46-million-views-in-24-hours-details-2414749-2023-08-01",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/zinda-banda-from-jawan-to-be-out-soon-263443-16x9.jpg?VersionId=FOW_QN3IyAdTqWl2YLJ7qNCyM8VwMEK3",
      "publishedAt": "2023-08-01T10:55:37Z",
      "content": "By Anindita Mukherjee: 'Zinda Banda' from Shah Rukh Khan's 'Jawan' released on July 31 and became an instant hit! The film achieved a remarkable milestone within just 24 hours of its release. The fir… [+1497 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Koimoi"
      },
      "author": "Koimoi",
      "title": "Rocky Aur Rani Kii Prem Kahaani Box Office (Worldwide): Ranveer Singh & Alia Bhatt Starrer Scores 100 Crores In 4 Days, It’s Bollywood’s 9th Century In 2023! - Koimoi",
      "description": null,
      "url": "https://www.koimoi.com/box-office/rocky-aur-rani-kii-prem-kahaani-box-office-worldwide-ranveer-singh-alia-bhatt-starrer-scores-100-crores-in-4-days-its-bollywoods-9th-century-in-2023/",
      "urlToImage": null,
      "publishedAt": "2023-08-01T10:47:11Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "NDTV News"
      },
      "author": null,
      "title": "Viral: Madhavan's Son Vedaant Learns To Drive A Porsche In Dubai - NDTV Movies",
      "description": "Vedaant represented Team Maharashtra in the Khelo India 2023 tournament in February",
      "url": "https://www.ndtv.com/entertainment/actor-madhavans-son-vedaant-learns-to-drive-in-porsche-here-is-how-the-internet-reacts-4257976",
      "urlToImage": "https://c.ndtvimg.com/2023-08/44tbn0dg_vedaant-_625x300_01_August_23.jpg",
      "publishedAt": "2023-08-01T10:40:52Z",
      "content": "Vedaant on the wheels. (Courtesy: Galadari Motor Driving Centre)\r\nMumbai (Maharashtra): Actor R Madhavan's son, Vedaant Madhavan has enrolled for driving lessons. A video of Vedaant learning to drive… [+1342 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Indiaforums.com"
      },
      "author": "Aanchal Chowdhary",
      "title": "TMD: Inderpal to take Simran and leave the Brar mansion, asks for Sahiba’s help - India Forums",
      "description": "In the upcoming episodes of Star Plus’ show Teri Meri Doriyaann, Inderpal will decide to take Simran away and leave for Ludhiana.",
      "url": "https://www.indiaforums.com/article/tmd-inderpal-to-take-simran-and-leave-the-brar-mansion-asks-for-sahibas-help_199015",
      "urlToImage": "https://img.indiaforums.com/article/1200x675/19/9015-tmd-inderpal-to-take-simran-and-leave-the-brar-mansion-asks-for-sahibas-help.jpg",
      "publishedAt": "2023-08-01T10:21:00Z",
      "content": "Star Plus show Teri Meri Doriyaanns dramatic buildup has kept the audience hooked. With each new twist and turns the makers of the show have introduced, the show has managed to garner the interest of… [+1243 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "PINKVILLA"
      },
      "author": "Jatinder Singh",
      "title": "Bro box office collections: Pawan Kalyan, Sai Dharam Tej film is a FLOP, Drops big on Monday - PINKVILLA",
      "description": "Bro Collected Rs. 6 Crores Approx On Its Day Four, Taking Its Box Office Collections In India To Rs. 70 Crores. The Film is A DISASTER for Its Distributor Who Stands To Lose Half Of Their Investment.",
      "url": "https://www.pinkvilla.com/entertainment/box-office/bro-box-office-collections-pawan-kalyan-sai-dharam-tej-film-is-a-flop-drops-big-on-monday-1233319",
      "urlToImage": "https://www.pinkvilla.com/images/2023-08/1091002820_bro-pawan-kalyan.jpg",
      "publishedAt": "2023-08-01T10:10:11Z",
      "content": "Telugu film Bro crashed on Monday which was pretty much expected as the film failed to get audience reception on its side. The film collected Rs. 6 crores approx on its day four, taking its total box… [+2470 chars]"
  }
  ]

  return (
    <>
      <div className="MovieTitle">
        <h3 className="MTitle">Movie Zone</h3>
        <div className="container my-3">
          <div className="row">
          {articles.map((article) => (
            <div className="col-md-4" key={article.id}>
              <MoviesItems
                title= {article.title?article.title.slice(0,45):''}
                description={article.description?article.description.slice(0,90):'....'}
                urlToImage={article.urlToImage}
                urlWeb={article.url}
                publishedAt={article.publishedAt}
                
              />
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesStore;
