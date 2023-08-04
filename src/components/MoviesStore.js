import React from "react";
import MoviesItems from "./MoviesItems";

const MoviesStore = () => {
  const articles = [
    {
        "source": {
            "id": null,
            "name": "Gulte"
        },
        "author": "Satya B",
        "title": "Spark L.I.F.E Teaser: An Action Packed Thriller - Gulte",
        "description": "https://youtu.be/q6wqalb3IZE Spark the L.I.F.E starring the Mehreen Pirzada, Rukshar and new entrant Vikranth got solid buzz with the talented cast and crew. Recently makers unveiled the film's first look and it impressed everyone with intense poster. Now tod…",
        "url": "https://www.gulte.com/movienews/252864/spark-l-i-f-e-teaser-an-action-packed-thriller",
        "urlToImage": "https://cdn.gulte.com/wp-content/uploads/2023/08/Spark.jpeg",
        "publishedAt": "2023-08-03T03:35:03Z",
        "content": "Spark the L.I.F.E starring the Mehreen Pirzada, Rukshar and new entrant Vikranth got solid buzz with the talented cast and crew. Recently makers unveiled the film’s first look and it impressed everyo… [+1152 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Tuhin Das Mahapatra",
        "title": "Kanye West’s ‘wife’ Bianca Censori looks miserable in Italy - Hindustan Times",
        "description": "Bianca Censori, the architect married to Kanye West, looked tired and unhappy as she joined him in Florence, Italy.",
        "url": "https://www.hindustantimes.com/entertainment/music/kanye-west-s-wife-bianca-censori-looks-glum-in-a-bikini-top-and-barefoot-in-italy-101691029949535.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/03/1600x900/ezgif-1-9703724643_1691038810409_1691038820555.jpg",
        "publishedAt": "2023-08-03T02:59:53Z",
        "content": "Bianca Censori, the Australian architect who married Kanye West in a symbolic ceremony earlier this year, looked tired and unhappy as she joined the rapper in Florence, Italy, on Tuesday.\r\nKanye West… [+1999 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Arbaaz Khan says Helen never tried to ‘separate' the family - Hindustan Times",
        "description": "Arbaaz Khan has spoken about his bond with step-mother Helen and how her entry into dad's Salim Khan's life first affected the family. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/arbaaz-khan-says-helen-never-tried-to-separate-the-family-today-all-of-them-are-inseparable-101691029667565.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/03/1600x900/arbaaz_khan_1691030146716_1691030146909.png",
        "publishedAt": "2023-08-03T02:47:25Z",
        "content": "Actor Arbaaz Khan has opened up about the bond he shared with Helen, who is his father Salim Khan's second wife. The veteran writer was already married to Arbaaz's mother Salma when he decided to get… [+1720 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "PINKVILLA"
        },
        "author": "Apeksha Juneja",
        "title": "Nitin Desai passes away: Art director’s initial postmortem reveals ‘death due to hanging’ - PINKVILLA",
        "description": "Renowned Art Director Nitin Desai Passed Away On Wednesday, At The Age Of 57. He Was Reportedly Found Hanging In His Own Studio, And Now The Police Have Revealed The Postmortem Findings.",
        "url": "https://www.pinkvilla.com/entertainment/news/nitin-desai-passes-away-art-directors-initial-postmortem-reveals-death-due-to-hanging-1233632",
        "urlToImage": "https://www.pinkvilla.com/images/2023-08/387747771_nitin-desai-postmortem.jpg",
        "publishedAt": "2023-08-03T02:45:04Z",
        "content": "Content Warning: This article contains references to suicide.\r\nCelebrated art director and producer Nitin Chandrakant Desais death on Wednesday morning shocked the entire film industry. Desai had a n… [+2453 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "PINKVILLA"
        },
        "author": "Anushka Solanki",
        "title": "Lizzo Lawsuit: Dancers come public about working with the singer Lizzo would threaten us if .. - PINKVILLA",
        "description": "The Lizzo Lawsuit Drama Does Not Seem To Be Settling Anytime Soon. Arianna Davis And Crystal Williams Sat With TMZ To Spill The Beans On Working With Lizzo. Read On.",
        "url": "https://www.pinkvilla.com/entertainment/hollywood/lizzo-lawsuit-dancers-come-public-about-working-with-the-singer-lizzo-would-threaten-us-if-1233627",
        "urlToImage": "https://www.pinkvilla.com/images/2023-08/199765429_lizzo-lawsuit.jpg",
        "publishedAt": "2023-08-03T02:29:38Z",
        "content": "The Lizzo lawsuit story seems to be only developing further and does not seem to be resting anytime soon. Just as a big industry director came forward to expose the star, two of the former dancers wh… [+2020 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Janani K",
        "title": "'BRO' box office collection Day 6: Pawan Kalyan's film holds steady - India Today",
        "description": "Pawan Kalyan and Sai Dharam Tej's 'BRO' is holding strong at the box office. The film crossed Rs 70 crore nett in India and is still doing great business.",
        "url": "https://www.indiatoday.in/movies/regional-cinema/story/bro-box-office-collection-day-6-pawan-kalyans-film-holds-steady-2415493-2023-08-03",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/pawan-kalyan-and-sai-dharam-tejs-bro-teaser-out-295418-16x9.jpg?VersionId=cTTmmX0NNJOfu7sMkdxZDQ0iEkZbQvJB",
        "publishedAt": "2023-08-03T02:04:26Z",
        "content": "By Janani K: Power Star Pawan Kalyan and Sai Dharam Tej's 'BRO' is having a fantastic theatrical run after its release last week. The film grossed Rs 100 crore worldwide and has also surpassed the Rs… [+1550 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Ranveer Singh, Alia Bhatt surprise fans at Rocky Aur Rani screening. Watch - Hindustan Times",
        "description": "Alia Bhatt and Ranveer Singh crashed a screening of the film Rocky Aur Rani Kii Prem Kahaani to get a feeler on how the film is being received. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/ranveer-singh-alia-bhatt-surprise-fans-at-rocky-aur-rani-kii-prem-kahaani-screening-101691026038452.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/03/1600x900/rocky_aur_rani_kii_prem_kahaani_1691026260769_1691026260940.png",
        "publishedAt": "2023-08-03T01:48:12Z",
        "content": "On Tuesday, actors Ranveer Singh and Alia Bhatt paid a surprise visit to a theatre in Mumbai screening their new film Rocky Aur Rani Kii Prem Kahaani. They were joined by the film's director Karan Jo… [+1815 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "Dishya Sharma",
        "title": "BLACKPINK Member Jisoo Is Dating Korean Actor Ahn Bo Hyun, YG Entertainment Confirms - News18",
        "description": "Jisoo of BLACKPINK is dating South Korean actor Ahn Bo Hyun. The couple's agencies confirmed the news.",
        "url": "https://www.news18.com/movies/blackpink-member-jisoo-is-dating-korean-actor-ahn-bo-hyun-yg-entertainment-confirms-8491417.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/08/jisoo-dating-ahn-bo-hyun-169102705216x9.jpg",
        "publishedAt": "2023-08-03T01:45:06Z",
        "content": "BLACKPINK member Jisoo is dating Yumis Cells and Itaewon Class actor Ahn Bo Hyun. The news has been confirmed by Jisoos agency, YG Entertainment, and Ahn Bo Hyuns agency FN Entertainment. In a statem… [+1196 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Samir Jain",
        "title": "Horoscope Today, August 3, 2023: Read your daily astrological predictions - Times of India",
        "description": "Horoscope(Old) News: Read daily horoscope predictions for August 3, 2023: Know all about the astrological events and influences that will be affecting each of the 12 zodia",
        "url": "https://timesofindia.indiatimes.com/astrology/horoscope/horoscope-today-august-3-2023-read-your-daily-astrological-predictions/articleshow/102303695.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-102303596,width-1070,height-580,imgsize-11934,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-08-02T23:30:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Bollywood Hungama"
        },
        "author": "Bollywood Hungama",
        "title": "Abhishek Bachchan starrer Ghoomer trailer to be out tomorrow! Watch teaser featuring Saiyami Kher - Bollywood Hungama",
        "description": "Abhishek Bachchan starrer Ghoomer trailer to be out tomorrow! Watch teaser featuring Saiyami Kher . Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb News, Celebrities News, Bollywood News Hindi, Hindi…",
        "url": "https://www.bollywoodhungama.com/news/bollywood/abhishek-bachchan-starrer-ghoomer-trailer-tomorrow-watch-teaser-featuring-saiyami-kher/",
        "urlToImage": "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/08/Ghoomer_teaser.jpeg",
        "publishedAt": "2023-08-02T19:38:49Z",
        "content": null
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Rohit Roy reveals he recently called Karan Johar and asked, 'You say I am doing good work so why are you - IndiaTimes",
        "description": "In his new interview, Rohit Roy revealed that he recently called Karan Johar and asked him why he wasn't casting him in his movies when he was praisin",
        "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/rohit-roy-reveals-he-recently-called-karan-johar-and-asked-you-say-i-am-doing-good-work-so-why-are-you-not-giving-me-work/articleshow/102362853.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-102362815,width-1070,height-580,imgsize-68702,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-08-02T17:38:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "PINKVILLA"
        },
        "author": "Arpita Sarkar",
        "title": "Ranveer Singh is 'touched' with outpouring of love after playing Rocky in RRKPK: 'Beyond my imagination' - PINKVILLA",
        "description": "Ranveer Singh, Who Played The Role Of Rocky Randhawa In Karan Johar's Rocky Aur Rani Kii Prem Kahaani, Has Been Receiving Immense Praise From Fans. Here's What The Actor Said!",
        "url": "https://www.pinkvilla.com/entertainment/news/ranveer-singh-is-touched-with-outpouring-of-love-after-playing-rocky-in-rrkpk-beyond-my-imagination-1233595",
        "urlToImage": "https://www.pinkvilla.com/images/2023-08/598422038_dhindhora-baje-re-lead-1.jpg",
        "publishedAt": "2023-08-02T17:14:26Z",
        "content": "Ranveer Singh is currently enjoying the success of his recently released Rocky Aur Rani Kii Prem Kahaani co-starring Alia Bhatt. Karan Johar's directorial has been showered with immense love and prai… [+2017 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Entertainment Desk",
        "title": "Sara says she doesn't care about criticism on her religious beliefs, outfits - Hindustan Times",
        "description": "Sara Ali Khan recently asserted that although she appreciates criticism regarding work, she doesn't care about other's commenting on her personal matter. | Bollywood",
        "url": "https://www.hindustantimes.com/entertainment/bollywood/sara-ali-khan-doesnt-care-about-criticism-on-religious-beliefs-outfits-101690992461831.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/08/02/1600x900/Sara-Ali-Khan_1690994890720_1690994890922.jpg",
        "publishedAt": "2023-08-02T16:43:40Z",
        "content": "Actor Sara Ali Khan recently talked about criticism and said she appreciates feedback when it comes to work. However, she doesn't care if people have any opinion regarding her personal matter-- choic… [+2265 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "DNA India"
        },
        "author": "DNA Web Team",
        "title": "Dulquer Salmaan calls Sita Ramam his 'DDLJ', talks about romantic hero image: 'We have all been fans of Shah - DNA India",
        "description": "Dulquer Salmaan opened up about the audience reception to his last blockbuster Sita Ramam and called it his Dilwale Dulhania Le Jayenge.",
        "url": "https://www.dnaindia.com/entertainment/report-dulquer-salmaan-reveals-he-is-shah-rukh-khan-fan-calls-sita-ramam-his-dilwale-dulhania-le-jayenge-3054363",
        "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/08/02/2601875-ddlj.jpg",
        "publishedAt": "2023-08-02T16:21:54Z",
        "content": "Dulquer Salmaan opened up about the audience reception to his last blockbuster Sita Ramam and called it his Dilwale Dulhania Le Jayenge. Actor Dulquer Salmaan garnered a lot of praise for his perform… [+1971 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Keith Sequeira And Wife Rochelle Announce Pregnancy: \"We Can't Wait To Meet\" - NDTV Movies",
        "description": "Soni Razdan wrote, \"Omg congratulations my dear ones\"",
        "url": "https://www.ndtv.com/entertainment/keith-sequeira-rochelle-rao-sequeira-announce-pregnancy-through-beautiful-post-4263448",
        "urlToImage": "https://c.ndtvimg.com/2023-08/2bct8ss8_alia-_625x300_02_August_23.jpg",
        "publishedAt": "2023-08-02T16:08:02Z",
        "content": "Image was shared on Instagram. (Courtesy: keithsequeira)\r\nMumbai (Maharashtra): Actors Keith Sequeira and Rochelle Rao Sequeira have good news to share with their fans. Well, the couple is all set to… [+1430 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gulte"
        },
        "author": "Satya B",
        "title": "Harris Magic for Nithiin love on Danger Pilla - Gulte",
        "description": "https://youtu.be/pE7_Swt_iyk Young actor Nithiin is currently busy with the shoot of his next is with writer-director Vakkantam Vamsi tentatively titled ‘Nithiin 32.’ Happening beauty Sreeleela is playing the female lead. The makers announced film's title EXT…",
        "url": "https://www.gulte.com/movienews/252825/harris-magic-for-nithiin-love-on-danger-pilla",
        "urlToImage": "https://cdn.gulte.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-02-at-5.09.42-PM.jpeg",
        "publishedAt": "2023-08-02T15:48:44Z",
        "content": "Young actor Nithiin is currently busy with the shoot of his next is with writer-director Vakkantam Vamsi tentatively titled Nithiin 32. Happening beauty Sreeleela is playing the female lead.\r\nThe mak… [+1017 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Shraddha Kapoor Blushes As Fan Gets Down On His Knees, Offers Her Roses At Airport. Watch - NDTV Movies",
        "description": "Touched by the gesture, Shraddha Kapoor shook hands with her fan and also posed with him for pictures",
        "url": "https://www.ndtv.com/entertainment/shraddha-kapoor-blushes-as-fan-gets-down-on-his-knees-offers-her-roses-at-airport-watch-4263433",
        "urlToImage": "https://c.ndtvimg.com/2023-08/ctuib9l8_alia-_625x300_02_August_23.jpg",
        "publishedAt": "2023-08-02T15:45:58Z",
        "content": "Fan greets Shraddha Kapoor at airport with a bouquet of red roses.\r\nNew Delhi: Shraddha Kapoor was pleasantly surprised when a fan came, bearing a bouquet of roses to gift her at the airport and also… [+1839 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Filmcompanion.in"
        },
        "author": "Team FC",
        "title": "Jailer Trailer Talk: Rajinikanth Is The Deadly Tiger Muthuvel Pandian In Nelson's Action Film - FILM COMPANION",
        "description": "Jailer is one of the most anticipated films of the year starring Superstar Rajinikanth in the lead. The team released the film's trailer, labelled 'showcase' to",
        "url": "https://www.filmcompanion.in/trailer-talk/tamil-trailer/jailer-trailer-talk-rajinikanth-is-a-simple-man-with-a-deadly-past-in-nelsons-action-film-tamannaah-ramya-krishnan-mohanlal-shivarajkumar",
        "urlToImage": "https://gumlet.assettype.com/filmcompanion%2F2023-08%2F6e97dead-8e2d-4a22-bec4-20b9d908e529%2FRajini_1.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
        "publishedAt": "2023-08-02T15:24:39Z",
        "content": "Jailer is one of the most anticipated films of the year starring Superstar Rajinikanth in the lead. \r\nThe team released the film's trailer, labelled 'showcase' to satiate the anticipation of fans. Th… [+1286 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Javed Akhtar Goes To Court Over Summons In Case Filed By Kangana Ranaut - NDTV",
        "description": "Veteran lyricist Javed Akhtar has approached a sessions court here against a summons issued against him by a magistrate in a case filed by actor Kangana Ranaut.",
        "url": "https://www.ndtv.com/india-news/javed-akhtar-goes-to-court-over-summons-in-case-filed-by-kangana-ranaut-4263197",
        "urlToImage": "https://c.ndtvimg.com/2023-02/r5413m38_javed-akhtar_625x300_21_February_23.jpg",
        "publishedAt": "2023-08-02T14:38:37Z",
        "content": "Javed Akhtar's plea claimed the order (for issuance of summons) has been passed \"erroneously\"\r\nMumbai: Veteran lyricist Javed Akhtar has approached a sessions court here against a summons issued agai… [+2986 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Adah Sharma rushed to a hospital just before 'Commando 2' promotional event - Times of India",
        "description": "‘The Kerala Story’ actress Adah Sharma has been rushed to a hospital after she started vomiting just before a promotional event for her upcoming movie 'Commando 2'. The actress was taken to hospital's emergency and has been diagnosed with severe diar",
        "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/adah-sharma-rushed-to-a-hospital-just-before-commando-2-promotional-event/videoshow/102358980.cms",
        "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-102358980,imgsize-56858.cms",
        "publishedAt": "2023-08-02T14:29:30Z",
        "content": "Aug 02, 2023, 07:59PM ISTSource: etimes.inThe Kerala Story actress Adah Sharma has been rushed to a hospital after she started vomiting just before a promotional event for her upcoming movie 'Command… [+1082 chars]"
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
