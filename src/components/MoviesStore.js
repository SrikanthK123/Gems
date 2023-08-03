import React from "react";
import MoviesItems from "./MoviesItems";

const MoviesStore = () => {
  const articles = [
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "WHAT? Adil Hussain says a scene in 'Sholay' was copied from 'Once Upon A Time in the West'; netizens mock the actor - Times of India",
        "description": "What if someone told you that a part of the Amitabh Bachchan, Dharmendra, Sanjeev Kumar and Amjad Khan starrer cult film 'Sholay' was lifted from a Hollywood movie? That's correct! Actor Adil Hussain has posted a video sequence from Sergio Leone's 19",
        "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/what-adil-hussain-says-a-scene-in-sholay-was-copied-from-once-upon-a-time-in-the-west-netizens-mock-the-actor/videoshow/102335086.cms",
        "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-102335086,imgsize-113138.cms",
        "publishedAt": "2023-08-02T03:31:11Z",
        "content": "Aug 02, 2023, 09:01AM ISTSource: etimes.inWhat if someone told you that a part of the Amitabh Bachchan, Dharmendra, Sanjeev Kumar and Amjad Khan starrer cult film 'Sholay' was lifted from a Hollywood… [+1187 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Rocky Aur Rani Kii Prem Kahaani box office: Ranveer and Alia film earns ₹60 cr - Hindustan Times",
        "description": "Rocky Aur Rani Kii Prem Kahaani box office: The Karan Johar film now stands at ₹60 crore after five days of its release. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/rocky-aur-rani-kii-prem-kahaani-box-office-day-5-collection-alia-bhatt-ranveer-singh-101690943696491.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/02/1600x900/rocky_aur_rani_kii_prem_kahaani_box_office_1690944070159_1690944070403.jpg",
        "publishedAt": "2023-08-02T03:21:09Z",
        "content": "Rocky Aur Rani Kii Prem Kahaani box office: The Ranveer Singh and Alia Bhatt film continues to remain stable during the weekdays. According to a report on Sacnilk.com, the Karan Johar directorial had… [+2137 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Bigg Boss OTT 2: Janardhan Dhurve's Bhavishyavani: Elvish Yadav will get married at 30, Avinash Sachdev h - Times of India",
        "description": "Bebika Dhurve's father enters the house and all the contestants sat down with him to know about their future. His bhavishyavani for Elvish and Avinash",
        "url": "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-ott-2-janardhan-dhurves-bhavishyavani-elvish-yadav-will-get-married-at-30-avinash-sachdev-had-an-abortion-in-the-past/articleshow/102333880.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-102334489,width-1070,height-580,imgsize-1286039,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-08-02T03:19:00Z",
        "content": "#BiggBossOTT2: What Elvish said about Bebika was wrong but his intentions are not bad, says Aashika Bhatia#BiggBossOTT2: What Elvish said about Bebika was wrong but his intentions are not bad, says A… [+256 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "PINKVILLA"
        },
        "author": "Apeksha Juneja",
        "title": "PICS: Priyanka Chopra, daughter Malti Marie 'look for super moon' while taking stroll on London streets - PINKVILLA",
        "description": "Priyanka Chopra Has Shared New Pictures With Her Daughter Malti Marie. The Mother-daughter Duo Strolled The Streets Of London While Searching For The Super Moon On The Night Of August 1.",
        "url": "https://www.pinkvilla.com/entertainment/news/pics-priyanka-chopra-daughter-malti-marie-look-for-super-moon-while-taking-stroll-on-london-streets-1233434",
        "urlToImage": "https://www.pinkvilla.com/images/2023-08/760917829_priyanka-chopra-with-malti-marie.jpg",
        "publishedAt": "2023-08-02T02:43:10Z",
        "content": "Priyanka Chopra and Nick Jonas are one of the most loved couples in the industry. They welcomed their first child Malti Marie in January 2022, and are currently busy enjoying parenthood. Priyanka oft… [+2127 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "RIP Angus Cloud: Zendaya, Sydney Sweeney remember their Euphoria co-star - Hindustan Times",
        "description": "Both Zendaya and Sydney Sweeney have written heartbreaking notes, remembering their time with the late Euphoria actor Angus Cloud.  | Hollywood",
        "url": "https://www.hindustantimes.com/entertainment/hollywood/rip-angus-cloud-zendaya-sydney-sweeney-remember-how-their-euphoria-costar-101690941506268.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/02/1600x900/angus_cloud_zendaya_1690942816612_1690942816904.jpg",
        "publishedAt": "2023-08-02T02:29:51Z",
        "content": "Zendaya and Sydney Sweeney have paid heartbreaking tributes to late actor and their Euphoria co-star Angus Cloud who died of unknown reasons at just the age of 25. He was found dead at his family hom… [+2195 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India.com"
        },
        "author": "ANI",
        "title": "Vaani Kapoor Turns Showstopper In Blazing Red Hot Lehenga-Choli At India Couture Week 2023 - Zee News",
        "description": "The India Couture Week is near its closing but the energy and surprise of collections is not going to end any sooner. The designers and their ensembles again left the audience awestruck on Tuesday night. On day 8th of India Couture Week, designer Isha Jajodia…",
        "url": "https://zeenews.india.com/people/vaani-kapoor-turns-showstopper-in-blazing-red-hot-lehenga-choli-at-india-couture-week-2023-2643489.html",
        "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/08/02/1254045-vaani-kapoor.jpg",
        "publishedAt": "2023-08-02T02:17:38Z",
        "content": "New Delho: The India Couture Week is near its closing but the energy and surprise of collections is not going to end any sooner. The designers and their ensembles again left the audience awestruck on… [+1505 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Janani K",
        "title": "'BRO' box office collection Day 5: Pawan Kalyan's film earns Rs 70 crore in India - India Today",
        "description": "Pawan Kalyan and Sai Dharam Tej's 'BRO' surpasses Rs 70 crore in India. However, the box office collection on Day 5 has declined further.",
        "url": "https://www.indiatoday.in/movies/regional-cinema/story/bro-box-office-collection-day-5-pawan-kalyan-sai-dharam-tej-film-earns-rs-70-crore-in-india-2414994-2023-08-02",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/pawan-kalyan-and-sai-dharam-tejs--bro-023805-16x9.jpg?VersionId=0Lm3WZxQF04qu3I1BsDZuKAB87nkJ7uk",
        "publishedAt": "2023-08-02T01:52:24Z",
        "content": "By Janani K: Pawan Kalyan and Sai Dharam Tej-starrer 'BRO' is suffering at the box office during the weekdays. After a fantastic opening weekend, the box office collection of the film is seeing a con… [+1350 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "DNA India"
        },
        "author": "DNA Web Team",
        "title": "Ayushmann Khurrana opens up on box office failure of his last four films: 'It's like a jigsaw puzzle' - DNA India",
        "description": "Ahead of his upcoming release Dream Girl 2, Ayushmann Khurrana reflected on the box office failure of his last four films Chandigarh Kare Aashiqui, Anek, Doctor G, and An Action Hero.",
        "url": "https://www.dnaindia.com/bollywood/report-ayushmann-khurrana-on-box-office-failure-of-his-last-four-films-anek-doctor-g-an-action-hero-dream-girl-2-3054244",
        "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/08/02/2601740-ak-final.jpg",
        "publishedAt": "2023-08-02T00:41:23Z",
        "content": "Ahead of his upcoming release Dream Girl 2, Ayushmann Khurrana reflected on the box office failure of his last four films Chandigarh Kare Aashiqui, Anek, Doctor G, and An Action Hero. Ayushmann Khurr… [+2024 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Karan Johar reveals where Rocky, Rani would live after marriage; teases a sequel - Hindustan Times",
        "description": "Rocky Aur Rani Kii Prem Kahaani: Where do Ranveer Singh's Rocky and Alia Bhatt's Rani live after marriage? 'Definitely somewhere in Delhi', says Karan Johar. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/karan-johar-ranveer-singh-alia-bhatt-after-marriage-rocky-aur-rani-kii-prem-kahaani-2-101690883444799.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/01/1600x900/ranveer_singh_alia_bhatt_1690528725779_1690883839031.png",
        "publishedAt": "2023-08-02T00:37:17Z",
        "content": "Karan Johar was asked where Ranveer Singh's character Rocky and Alia Bhatt's Rani would live after they marry, and the filmmaker not only shared who could set up their home and where but also hinted … [+2651 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Samir Jain",
        "title": "Horoscope Today, August 2, 2023: Read your daily astrological predictions - Times of India - Times of India",
        "description": "Horoscope(Old) News: Read daily horoscope predictions for August 2, 2023: Know all about the astrological events and influences that will be affecting each of the 12 zodia",
        "url": "https://timesofindia.indiatimes.com/astrology/horoscope/horoscope-today-august-2-2023-read-your-daily-astrological-predictions/articleshow/102302968.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-102303322,width-1070,height-580,imgsize-8526,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-08-01T23:30:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "PINKVILLA"
        },
        "author": "Arpita Sarkar",
        "title": "Kalki Koechlin opens up about facing backlash after having a baby out of wedlock: 'I was already divorced' - PINKVILLA",
        "description": "Made In Heaven Actress Kalki Koechlin Opened Up About The Backlash That She And Her Partner Faced From Netizens After Welcoming Their Baby Out Of Wedlock.",
        "url": "https://www.pinkvilla.com/entertainment/news/kalki-koechlin-opens-up-about-facing-backlash-after-having-a-baby-out-of-wedlock-i-was-already-divorced-1233408",
        "urlToImage": "https://www.pinkvilla.com/images/2023-08/240764664_kalki-lead-1.jpg",
        "publishedAt": "2023-08-01T19:47:12Z",
        "content": "Kalki Koechlin is one of the most talented actresses in the film industry. Her acting skills prove she is one of a kind. The actress who is currently gearing up for the release of the upcoming Made I… [+2072 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Is Jee Le Zaraa being shelved after Priyanka Chopra's exit? This is what Zoya Akhtar has to say - IndiaTimes",
        "description": "Reports have been doing the rounds that another leading lady may replace Priyanka Chopra in the all-female buddy road movie Jee Le Zaraa which will al",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/is-jee-le-zaraa-being-shelved-after-priyanka-chopras-exit-this-is-what-zoya-akhtar-has-to-say/articleshow/102327753.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-102327740,width-1070,height-580,imgsize-57356,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-08-01T17:56:00Z",
        "content": "Katrina Kaif has NOT opted out of Jee Le Zaraa - ExclusiveKatrina Kaif was rumoured to have walked out of Farhan Akhtar's film Jee Le Zaraa, after Priyanka Chopra opted out citing date issues."
    },
    {
        "source": {
            "id": null,
            "name": "PINKVILLA"
        },
        "author": "Harshika Bhatia",
        "title": "Bigg Boss OTT 2 EXCLUSIVE: Aashika Bhatia opens up about being judged for her smoking addiction - PINKVILLA",
        "description": "Bigg Boss OTT 2 Fame Aashika Bhatia, Who Was Recently Evicted From The Show Shared Her Thoughts On Being Judged For Her Smoking Addiction, In An Exclusive Interview With Pinkvilla.",
        "url": "https://www.pinkvilla.com/tv/news/bigg-boss-ott-2-exclusive-aashika-bhatia-opens-up-about-being-judged-for-her-smoking-addiction-1233399",
        "urlToImage": "https://www.pinkvilla.com/images/2023-08/882628991_untitled-design-44.jpg",
        "publishedAt": "2023-08-01T17:52:29Z",
        "content": "Bigg Boss OTT 2 is one of the most popular and loved reality shows in the entertainment industry, with immense twists and turns, that are captivating fans' eyes. The show is hosted and presented by S… [+2435 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Imran Khan leaves his comeback to the internet, promises return after ‘1M likes’ - Hindustan Times",
        "description": "Imran Khan, best known for his acting debut Jaane Tu Kya Jaane Na, went on a sabbatical after the debacle of Katti Batti (2015). | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/imran-khan-leaves-comeback-to-internet-promises-return-to-acting-after-1m-likes-101690905524110.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/01/1600x900/imran_khan_1690905829111_1690905837926.jpg",
        "publishedAt": "2023-08-01T16:33:55Z",
        "content": "Imran Khan, who made his acting debut with Abbas Tyrewala's 2008 romantic comedy Jaane Tu Ya Jaane Na, went on a sabbatical after Nikkhil Advani's 2015 dud Katti Batti. However, he has now hinted at … [+2241 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "123telugu.com"
        },
        "author": null,
        "title": "Get ready Superstar cults; Jailer’s showcase to arrive tomorrow - 123telugu",
        "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
        "url": "https://www.123telugu.com/mnews/get-ready-superstar-cults-jailers-showcase-to-arrive-tomorrow.html",
        "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
        "publishedAt": "2023-08-01T16:30:00Z",
        "content": "Superstar Rajinikanth’s Jailer is all set to open big at the box office. Even without the trailer, the USA bookings are on fire. The action entertainer is directed by Nelson Dilipkumar of Kolamaavu K… [+675 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Odishatv.in"
        },
        "author": "Nitesh Kumar Sahoo",
        "title": "Finally! Aditya Roy Kapur breaks silence on relationship with Ananya Panday after leaked vacay pics - OTV News",
        "description": "When asked about their relationship, Aditya though not keen to open up about his personal life in front of the media, said that he is aware of the same.",
        "url": "https://odishatv.in/news/entertainment/finally-aditya-roy-kapur-breaks-silence-on-relationship-with-ananya-panday-after-leaked-vacay-pics-211087",
        "urlToImage": "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/recent_photo_1690906077.webp",
        "publishedAt": "2023-08-01T16:11:06Z",
        "content": "The hype around the rumoured relationship between Bollywood actors Aditya Roy Kapur and Ananya Panday is quite high these days. The rumoured couple have been spotted multiple times spending time toge… [+1569 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Thedirect.com"
        },
        "author": "Sam Hargrave",
        "title": "Loki Season 2: 14 Easter Eggs & Hidden Details In New Trailer - The Direct",
        "description": "Loki Season 2's new trailer teased Jonathan Majors' Kang, Ke Huy Quan's character, and much more.",
        "url": "https://thedirect.com/article/loki-season-2-easter-eggs-details",
        "urlToImage": "https://images.thedirect.com/media/article_full/loki-trailer.jpg",
        "publishedAt": "2023-08-01T15:49:52Z",
        "content": "LokiSeason 2 just dropped an Easter egg-packed trailer with teases toward Jonathan Majors'Kang, Ke Huy Quan's new MCU character, and possibly even set the path to Avengers: The Kang Dynasty.\r\nAs Secr… [+9902 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Indiaforums.com"
        },
        "author": "Team India Forums",
        "title": "Yeh Rishta Kya Kehlata Hai: Major twist ahead, Akshara is pregnant with Abhinav's child - India Forums",
        "description": "A source from the set informs us that the makers have planned a major twist in the upcoming episode.",
        "url": "https://www.indiaforums.com/article/yeh-rishta-kya-kehlata-hai-major-twist-ahead-akshara-is-pregnant-with-abhinavs-child_199024",
        "urlToImage": "https://img.indiaforums.com/article/1200x675/19/9024-yeh-rishta-kya-kehlata-hai-major-twist-ahead-akshara-is-pregnant-with-abhinavs-child.jpg",
        "publishedAt": "2023-08-01T15:35:00Z",
        "content": "Star PlusYeh Rishta Kya Kehlata Hai is one of the longest and most popular running shows on India Television. The fairy tale romance of Akshara-Abhimanyu and the adorable chemistry between Pranali an… [+1065 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Kiara Advani and Sidharth Malhotra's video dragging their luggage in Italy goes viral - Times of India",
        "description": "A video of Kiara Advani and Sidharth Malhotra dragging their luggage has gone viral on social media. The actress is currently enjoying vacations with her husband in Italy and had uploaded a video of their fun time together on her Instagram handle. Th",
        "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/kiara-advani-and-sidharth-malhotras-video-dragging-their-luggage-in-italy-goes-viral/videoshow/102324446.cms",
        "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-102324446,imgsize-60894.cms",
        "publishedAt": "2023-08-01T15:33:50Z",
        "content": "Aug 01, 2023, 09:03PM ISTSource: etimes.inA video of Kiara Advani and Sidharth Malhotra dragging their luggage has gone viral on social media. The actress is currently enjoying vacations with her hus… [+961 chars]"
    },
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
