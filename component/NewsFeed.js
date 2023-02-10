import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import news from "../api/getNews";
import Card from "./Card";

const articles = [
  {
    source: {
      id: null,
      name: "Florida Today",
    },
    author: ", Florida Today",
    title:
      "Live updates: SpaceX set to launch Falcon 9 rocket from Cape Canaveral - Florida Today",
    description:
      "Follow live updates as SpaceX targets 8:32 p.m. ET on Mon., Feb. 6, for the launch of a Falcon 9 rocket from Cape Canaveral Space Force Station.",
    url: "https://www.floridatoday.com/story/tech/science/space/2023/02/06/spacex-hispasat-amazonas-nexus-satellite-launch-falcon-9-rocket-cape-canaveral-space-force-florida/69868058007/",
    urlToImage:
      "https://www.gannett-cdn.com/presto/2023/02/06/PBRE/021c356e-f13a-4307-abf9-373c387caac1-Amazonas_Vertical_3_Desktop_Homepage_056f8bf73e.jpg?auto=webp&crop=2124,1195,x260,y0&format=pjpg&width=1200",
    publishedAt: "2023-02-07T00:43:13Z",
    content:
      "Space is important to us and that's why we're working to bring you top coverage of the industry and Florida launches. Journalism like this takes time and resources. Please support it with a subscript… [+2954 chars]",
  },
  {
    source: {
      id: null,
      name: "CBS Sports",
    },
    author: "",
    title:
      "NBA trade rumors: Nets, Mavericks make Kyrie Irving trade official; Heat open to moving Kyle Lowry - CBS Sports",
    description:
      "The first NBA blockbuster went down Sunday; what other moves will we see this week?",
    url: "https://www.cbssports.com/nba/news/nba-trade-rumors-nets-mavericks-make-kyrie-irving-trade-official-heat-open-to-moving-kyle-lowry/",
    urlToImage:
      "https://sportshub.cbsistatic.com/i/r/2023/02/04/bec5d3cc-501a-47cc-a378-75ceb4a64c27/thumbnail/1200x675/8b74c850f0beaf39495119c831f780dc/untitled-design-2023-02-04t104207-968.png",
    publishedAt: "2023-02-07T00:18:00Z",
    content:
      "The 2023 NBA trade deadline is rapidly approaching. Teams now have three days to finalize their remaining business before the trade market is closed for the season at 3 p.m. ET on Thursday, Feb. 9. S… [+7637 chars]",
  },
  {
    source: {
      id: "associated-press",
      name: "Associated Press",
    },
    author: "Mehmet Guzel, Ghaith Alsayed",
    title:
      "Turkey earthquake: Live updates on 7.8 quake - The Associated Press - en Español",
    description:
      "ADANA, Turkey (AP) — Rescuers in Turkey and war-ravaged Syria searched through the frigid night into Tuesday, hoping to pull more survivors from the rubble after a 7.8 magnitude earthquake killed more than 3,400 people  and toppled thousands of buildings acro…",
    url: "https://apnews.com/article/earthquake-shakes-turkey-b927808f6a5c54bdb669120faa40b7bc",
    urlToImage:
      "https://storage.googleapis.com/afs-prod/media/0bae9c5fb1c14b669d38cf20c52103ad/3000.jpeg",
    publishedAt: "2023-02-07T00:16:08Z",
    content:
      "ADANA, Turkey (AP) Rescuers in Turkey and war-ravaged Syria searched through the frigid night into Tuesday, hoping to pull more survivors from the rubble after a 7.8 magnitude earthquake killed more … [+7067 chars]",
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "CBS New York Team",
    title:
      "Buffalo area hit with strongest earthquake in decades - CBS New York",
    description:
      "The U.S. Geological Survey preliminarily reported a 3.8 earthquake centered in the suburb of West Seneca.",
    url: "https://www.cbsnews.com/newyork/news/small-earthquake-shakes-buffalo-western-new-york/",
    urlToImage:
      "https://assets1.cbsnewsstatic.com/hub/i/r/2023/02/06/5d5fd0fd-9742-486c-af49-bafc6d40dbee/thumbnail/1200x630/8182f2805fc9b06ce6483245ca5b2b06/buffalo-earthquake-1.jpg",
    publishedAt: "2023-02-06T23:41:00Z",
    content:
      "BUFFALO, N.Y. -- A small earthquake rumbled through western New York early Monday, alarming people in a region unaccustomed to such shaking but apparently causing no significant damage.\r\nThe U.S. Geo… [+2084 chars]",
  },
  {
    source: {
      id: null,
      name: "Vikings.com",
    },
    author: "Craig Peters",
    title: "Vikings Hire Brian Flores as Defensive Coordinator - Vikings.com",
    description: "",
    url: "https://www.vikings.com/news/brian-flores-defensive-coordinator-hired-2023",
    urlToImage:
      "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/vikings/bsbwjdyqrcuhho5bpvfj",
    publishedAt: "2023-02-06T23:26:59Z",
    content:
      "New England won four Super Bowls during Flores' time with the Patriots (XXXIX, XLIX, LI and LIII).\r\nHe was hired as head coach of the Miami Dolphins in 2019.\r\nFlores held that role for three seasons,… [+1400 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Jason Owens",
    title:
      "Sean Payton won't allow Russell Wilson's personal coach at Broncos facility: 'Not gonna take place here' - Yahoo Sports",
    description:
      "Wilson brought Jake Heaps and a staff of personal trainers and coaches to Denver when he was traded from the Seahawks last offseason.",
    url: "https://sports.yahoo.com/sean-payton-wont-allow-russell-wilsons-personal-coach-at-broncos-facility-not-gonna-take-place-here-232130749.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/HjseGjO8gcCfL0vJWzP6vw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/5acd3b10-a674-11ed-b797-b9ce02bdda01",
    publishedAt: "2023-02-06T23:21:30Z",
    content:
      "Russell Wilson's personal coach Jake Heaps joined the Denver Broncos quarterback in his move from Seattle to Denver last season.\r\nHe attended last offseason's training camp but won't have access to B… [+4210 chars]",
  },
  {
    source: {
      id: null,
      name: "Recording Academy | Grammys",
    },
    author: null,
    title:
      "20 Artists Who Made History At The 2023 GRAMMYs Other Than Beyoncé: Taylor Swift, Kim Petras, Viola Davis & More - The GRAMMYs",
    description:
      "As Queen Bey takes her throne as the artist with the most GRAMMYs of all time, take a look at some of the other 2023 GRAMMY winners who joined her in celebrating momentous achievements.",
    url: "https://www.grammy.com/news/historic-grammy-wins-2023-grammys-winners-firsts-beyonce-taylor-swift-kim-petras-viola-davis-egot-history",
    urlToImage:
      "https://i8.amplience.net/i/naras/Kim-Petras-Sam-Smith-2023-grammys-acceptance-speech-GettyImages-1463277329.jpg?w=821&sm=c",
    publishedAt: "2023-02-06T23:09:00Z",
    content:
      "Ann and Nancy WilsonofHeartare verging on the half-century mark since they formed their groundbreaking group in 1974. Through five decades of changing musical eras, their impact has not waned. From t… [+3135 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Ashley Strickland",
    title:
      "Jupiter now has the most moons in the solar system after new discovery - CNN",
    description:
      "Astronomers have observed 12 additional moons orbiting Jupiter, bringing its total number of confirmed moons to 92.",
    url: "https://www.cnn.com/2023/02/06/world/jupiter-new-moons-scn/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/210511132559-01-jupiter-gemini-hubble.jpg?q=x_0,y_0,h_1304,w_2317,c_fill/w_800",
    publishedAt: "2023-02-06T22:56:00Z",
    content:
      "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nJupiter already reigns as king of the planets its the … [+4863 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Rebecca Rosenberg",
    title:
      "Murdaugh trial: Alex Murdaugh brought tarp to mother's home night of double murders, witness says - Fox News",
    description:
      "Alex Murdaugh, a former lawyer, assistant prosecutor and scion of a powerful South Carolina legal dynasty, is charged with the double murder of his wife, Maggie, and their 22-year-old son, Paul, on June 7, 2021.",
    url: "https://www.foxnews.com/live-news/alex-murdaugh-murder-trial-february-6-2023",
    urlToImage:
      "https://livenews.foxnews.com/images/2023/02/5bd23d38db747678cb3d8bf579e0b462.jpg",
    publishedAt: "2023-02-06T22:14:29Z",
    content:
      "While Alex Murdaughs net worth may have at one point been in the millions, the disgraced South Carolina lawyers current ledger is unknown.\r\nAlex is charged with 99 financial crimes alleging he stole … [+1552 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "GRAMMYs 2023: Harry Styles, Taylor Swift and What You DIDN'T See on TV - Entertainment Tonight",
    description:
      "Taylor Swift and Harry Styles reunited at the GRAMMYs on Sunday night, a decade after their brief romance. Taylor was spotted walking to Harry’s table to con...",
    url: "https://www.youtube.com/watch?v=WVk6CGZzkB4",
    urlToImage: "https://i.ytimg.com/vi/WVk6CGZzkB4/maxresdefault.jpg",
    publishedAt: "2023-02-06T22:00:11Z",
    content: null,
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Holly Yan, Michelle Watson, Nouran Salahieh, Hannah Sarisohn",
    title:
      "Officials begin controlled release of toxic chemical from train that derailed in Ohio - CNN",
    description:
      "The controlled release of hazardous materials at a train derailment site in East Palestine, Ohio, began Monday afternoon when a boom was followed by a new, large plume of black smoke.",
    url: "https://www.cnn.com/2023/02/06/us/east-palestine-ohio-train-derailment-fire-monday/index.html",
    urlToImage:
      "https://media.cnn.com/api/v1/images/stellar/prod/230206165016-05-train-derailment-ohio-0206.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2023-02-06T22:00:00Z",
    content:
      "The controlled release of hazardous materials at a train derailment site in East Palestine, Ohio, began Monday afternoon when a boom was followed by a new, large plume of black smoke. \r\nAccording to … [+6932 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "NY Funeral Home Finds 'DEAD' 82-Year-Old Woman Still Breathing | NBC New York - NBC New York",
    description:
      "The woman, whose name has not been released, was pronounced dead at Waters Edge Rehab and Nursing Center in Port Jefferson around 11:15 a.m. Saturday. Hours ...",
    url: "https://www.youtube.com/watch?v=tqGaF1B5Dtc",
    urlToImage: "https://i.ytimg.com/vi/tqGaF1B5Dtc/maxresdefault.jpg",
    publishedAt: "2023-02-06T21:57:51Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Ines Ferré",
    title:
      "Bed Bath & Beyond shares gain 92% as meme stocks soar - Yahoo Finance",
    description:
      "Bed Bath & Beyond's (BBBY) stock sank 24% after the embattled retailer announced it will raise as much as $1.025 billion through an equity offering.",
    url: "https://finance.yahoo.com/news/bed-bath--beyond-announces-plan-to-raise-1-billion-stock-falls-24-212006024.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/EJZkGFSSt7DVr4rct4LCTA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/d6842820-1e22-11ed-b3ee-729a2ad01c5e",
    publishedAt: "2023-02-06T21:20:06Z",
    content:
      "Bed Bath &amp; Beyond's (BBBY) stock sank 24% after the embattled retailer announced it will raise as much as $1.025 billion through an equity offering.\r\nBBBY had gained 92% on Monday ahead of the an… [+1872 chars]",
  },
  {
    source: {
      id: null,
      name: "Daily Mail",
    },
    author: "Mansur Shaheen",
    title:
      "Taking vitamin D supplements could drag 17million Americans and Brits back from brink of diabetes - Daily Mail",
    description:
      "In a meta-analysis of 17 studies, Tufts University researchers found that pre-diabetics could reduce their likelihood of developing the potentially-crippling condition by 15 percent.",
    url: "https://www.dailymail.co.uk/health/article-11719037/Taking-vitamin-D-supplements-drag-17million-Americans-Brits-brink-diabetes.html",
    urlToImage:
      "https://i.dailymail.co.uk/1s/2023/02/06/21/67390067-0-image-a-3_1675717228250.jpg",
    publishedAt: "2023-02-06T20:56:53Z",
    content:
      "A vitamin D supplement every day can help keep diabetes away, a study suggests.\r\nIn a meta-analysis of 17 studies, Tufts University researchers found that pre-diabetics could reduce their likelihood … [+4859 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "Dina Bass",
    title:
      "Microsoft Schedules Mystery Event for Tuesday as Company Accelerates AI Investments - Yahoo Finance",
    description:
      "(Bloomberg) -- Microsoft Corp. unveiled plans for an event on Tuesday at its headquarters, leaving the subject open to speculation as the company steps up...",
    url: "https://finance.yahoo.com/news/microsoft-schedules-mystery-event-tuesday-203529849.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/FWPBGBlK8dQEf.EwGH3O.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/e99b4c78f507709ccf28f21df93e2142",
    publishedAt: "2023-02-06T20:35:29Z",
    content:
      "(Bloomberg) -- Microsoft Corp. unveiled plans for an event on Tuesday at its headquarters, leaving the subject open to speculation as the company steps up its bets on artificial intelligence includin… [+2297 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Hogwarts Legacy: 14 Minutes of PC Gameplay at Max Settings (4K 60FPS) - IGN",
    description:
      "Hogwarts Legacy is nearly here, and if you want to see the game at it's absolute best, then this video is for you! For this gameplay, we installed the game o...",
    url: "https://www.youtube.com/watch?v=VPItVDtUBvo",
    urlToImage: "https://i.ytimg.com/vi/VPItVDtUBvo/maxresdefault.jpg",
    publishedAt: "2023-02-06T20:34:21Z",
    content: null,
  },
  {
    source: {
      id: "bloomberg",
      name: "Bloomberg",
    },
    author: null,
    title:
      "Fed's Bostic Says Higher Peak Rate on Table After Jobs Blowout - Bloomberg",
    description: null,
    url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=0365d00b-a672-11ed-9adf-6b564b484a4c&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMi0wNi9mZWQtcy1ib3N0aWMtc2F5cy1oaWdoZXItcGVhay1yYXRlLW9uLXRhYmxlLWFmdGVyLWpvYnMtYmxvd291dA==",
    urlToImage: null,
    publishedAt: "2023-02-06T20:30:00Z",
    content:
      "To continue, please click the box below to let us know you're not a robot.",
  },
  {
    source: {
      id: null,
      name: "Deadline",
    },
    author: "Peter White",
    title:
      "‘Yellowstone’ Shocker: Kevin Costner Cowboy Drama Series Plots End As Taylor Sheridan Eyes Franchise Extension With Matthew McConaughey - Deadline",
    description:
      "EXCLUSIVE: Yellowstone, TV’s top-rated drama, may end in spectacular fashion.  Deadline understands that Taylor Sheridan, co-creator and showrunner, Paramount Global and Paramount Network are …",
    url: "https://deadline.com/2023/02/yellowstone-show-end-franchise-continues-matthew-mcconaughey-1235251400/",
    urlToImage:
      "https://deadline.com/wp-content/uploads/2023/02/costner.jpg?w=1024",
    publishedAt: "2023-02-06T20:17:00Z",
    content:
      "EXCLUSIVE: Yellowstone, TV’s top-rated drama, may end in spectacular fashion. \r\nDeadline understands that Taylor Sheridan, co-creator and showrunner, Paramount Global and Paramount Network are moving… [+5152 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "https://www.engadget.com/about/editors/kris-holt",
    title:
      "Sony’s expansive PlayStation VR2 FAQ answers (almost) all of your burning questions - Engadget",
    description: "After you set up PS VR2, you won't need a TV to use it.",
    url: "https://www.engadget.com/sony-ps-vr2-faq-details-headset-virtual-reality-194415674.html",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2022-05/ac4a3410-ddc6-11ec-95fd-f39a72224c2f",
    publishedAt: "2023-02-06T19:46:58Z",
    content:
      "Sony\r\n is preparing to release its next-gen virtual reality headset for PlayStation 5\r\n on February 22nd. While there have been suggestions that demand for $550 PlayStation VR2 isn't quite what the c… [+2926 chars]",
  },
  {
    source: {
      id: null,
      name: "ESPN",
    },
    author: null,
    title: "Rose wins at Pebble Beach to end 4-year drought - ESPN",
    description:
      "Justin Rose took all the drama out of a long week with three quick birdies that sent him to a 3-shot victory Monday in the wind-delayed AT&T Pebble Beach Pro-Am, ending four years without winning and making him eligible for the Masters.",
    url: "https://www.espn.com/golf/story/_/id/35602410/justin-rose-wins-pebble-beach-end-4-year-drought",
    urlToImage:
      "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0206%2Fr1127591_1296x729_16%2D9.jpg",
    publishedAt: "2023-02-06T19:01:12Z",
    content:
      "PEBBLE BEACH, Calif. -- Justin Rose had a different set of goals at the start of the year.\r\nHis back was starting to become bothersome. His world ranking sank to its lowest point in 13 years. And he … [+4382 chars]",
  },
];
const NewsFeed = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [refresh, onRefresh] = useState(false);
  const getResult = async () => {
    const res = await news.getNews();
    setData(res.data.articles);
  };
  useEffect(() => {
    setData(articles);
    //getResult();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top Headlines - India </Text>
      <FlatList
        onRefresh={() => setData(articles)}
        refreshing={refresh}
        data={data}
        keyExtractor={(news) => news.publishedAt}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.description}
            image={item.urlToImage}
            onPress={() => navigation.navigate("Info", item)}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#e6e6e6",
    padding: 10,
  },
  text: {
    fontSize: 23,
    textAlign: "center",
    color: "#FF595A",
    marginBottom: 15,
    fontStyle: "italic",
  },
});
export default NewsFeed;
