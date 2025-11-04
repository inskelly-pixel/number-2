import { Project } from "@/types/project";
import frame33 from "./frame33.svg";
import frame34 from "./frame34.svg";
import Frame30 from "./Frame 30.svg";
import frame35 from "./frame35.svg";
import frame36 from "./frame36.svg";
import frame37 from "./frame37.svg";
import frame38 from "./frame38.svg";
import frame39 from "./frame39.svg";
import frame40 from "./frame40.svg";
import frame41 from "./frame41.svg";
import frame42 from "./frame42.svg";
import frame43 from "./frame43.svg";
import frame82 from "./Frame 82.svg";
import frame85 from "./Frame 85.svg";
import image143 from "./image 143.svg";
import Rectangle from "./Rectangle.svg";
import image144 from "./image144.svg";
import Group569 from "./Group569.svg";
import frame29 from "./Frame29.svg";
import frame92 from "./Frame 92.svg";
import frame101 from "./Frame101.svg";
import frame102 from "./Frame 102.svg";
import frame105 from "./Frame105.svg";
import frame106 from "./Frame 106.svg";
import frame107 from "./essay1.svg";
import frame108 from "./essay2.svg";
import frame109 from "./essay 4.svg";
import frame110 from "./essay 5.svg";
import frame111 from "./essay 3.svg";
import frame112 from "./essay6.svg";
import video from "./video3481600811.mp4";
import goldicon1 from "./goldicon1.svg";
import goldicon2 from "./goldicon2.svg";

export interface Projectsko {
  id: string | number;
  title: string;
  year: number;
  script: string;
  script2: string;
  number?: string;
  category?: string;
  description?: string;
  description2?: string;
  description3: string;
  description4: string;
  description5: string;
   // 각 이미지별 텍스트 세트를 배열로
  textSets?: {
    title?: string;         // 텍스트 상단 제목
    texts?: string[];       // 본문 텍스트 여러 줄 가능
    position?: { bottom: string; left: string }; // 위치
    color: string
  }[];
  images: string[];
  icons: string[];
  position?: { top: number; left: number };
}

export const projects = [
  { id: 1,
    number: "1",
    title: "About Beauty", 
    year: 2024, position: { top: 20, left: 70 }, 
    script: "/",
    script2: "297x420mm, 120g One color painting Slik screen",
    images: [frame33], 
    icons: [goldicon1, goldicon2], // 상단 아이콘
    category: "Graphic design", 
    description: "Based on the quote by Dutch product designer Bertjan Pot, I created two versions to visualize the raw and timeworn beauty of things — a printed version and one using printmaking techniques.", 
    description2: "Using monotype, a printmaking method that captures objects as they are, I designed posters by pressing discarded items and natural materials directly onto the surface."},

  { id: 2, 
    number: "2", 
    title: "700-08", 
    year: 2024, position: { top: 25, left: 60 },
    script: "/",
    script2: "290x290mm, 200g One color printing",
    images: [frame36],
    icons: [goldicon1, goldicon2], // 상단 아이콘
    category: "Editorial design",
    description: "『700-08』 is a book that analyzes the art book collection of Ewha Womans University’s Central Library from a bibliographic classification perspective.", 
    description2: "The title refers to the shelf number assigned to art books, focusing particularly on those classified between 700 and 708, where noticeable changes in paper quality and materiality appear."},

  { id: 3, 
    number: "3", 
    title: "To My Ideal", 
    year: 2022, position: { top: 35, left: 45 }, 
    script: "/",
    script2: "1:18 / Processing",
    images: [image143],
    icons: [goldicon1, goldicon2], // 상단 아이콘
    category: "Video design",
    description: "The interactive video tells a story about ideals and small wishes. The narrative was designed in the format of a digital letter using Processing, and was developed by ", 
    description2: "an interactive design that allows the audience to engage with the letter's content. The goal of the project was to convey a dynamic story by reflecting the message of 'never forgetting our ideals' through diverse movements and forms."},
  
  { id: 4, number: "4", 
    title: "Seoul Distortion", 
    year: 2022, position: { top: 15, left: 30 },
    script: "/",
    script2: "MapBox, p5.js, 297x420mm, 150g",
    images: [frame29],
    icons: [goldicon1, goldicon2], // 상단 아이콘
    category: "Web + Editorial design",
    description: "Among the many streets of Seoul, I selected five areas where specific industries or social phenomena are concentrated, and planned a project to uniquely capture the city’s landscape in 2022. ", 
    description2: "To portray the vivid scenes of each street, I created web-based graphics and designed booklets that showcase the distinctive industrial stories of each district."},

    

  { id: 5, 
    number: "5", 
    title: "A Choir of Monologues", 
    year: 2024, position: { top: 10, left: 32 }, 
    script2: "4:23 / Adobe Ae",
    images: [Rectangle],
    icons: [goldicon1, goldicon2], // 상단 아이콘
    category: "Video design",
    description: "When countless voices overlap and gather, they grow large enough to form a single space. Sound, in this way, carries the qualities of resonance and movement. ", 
    description2: "To express this movement of sound, I layered whispering noises to create an audio composition and visualized it through motion graphics.",
    description3: "dkdk"
  },


  { id: 6, 
    number: "6", 
    title: "Typemoji", 
    year: 2025, position: { top: 10, left: 32 }, 
    images: [frame85],
    script2: "",
    category: "Video design",
    icons: [goldicon1, goldicon2], // 상단 아이콘
    description: "Emojis, often called the 'hieroglyphs of the 21st century,' convey emotions and symbols in an intuitive and rich way that plain text often cannot. This project involved designing emojis that reflect the form and characteristics of their corresponding", 
    description2: "typeface, ensuring they can be used widely and consistently alongside text. We subsequently designed a poster, a guidebook, and an application for these Type Emojis.",
   // 이미지 1장에 대한 텍스트 세트 배열
  textSets: [
    {
      title: "Typemoji Website",
      texts: [
        "This is a guidebook that introduces the concept, design process, and usage of type emojis — emojis that are always connected to text. The guide consists of five volumes, each dedicated to a different font, all following the same structure. It aims to help users effectively utilize type emojis in their work.",
        ""
      ],
      position: { bottom: "75%", left: "8%" }, // 반응형 가능하게 % 사용
      color: "#CCCCCC" // ✅ 여기에 색상 지정

    },
    {
      title: "Typemoji NFC Tag",
      texts: ["An NFC tag is attached to the top left corner of the guidebook, allowing users to access a website where they can test different types of emojis and download them by simply tapping their mobile device. Along with the guidebook, an interactive environment was created where users can try out the emojis with text in a chat interface.", ""],
      position: { bottom: "45%", left: "8%" },
      color: "#CCCCCC" // ✅ 여기에 색상 지정

    },
    {
      title: "Typemoji Website",
      texts: ["I designed a website UI that allows users to test type emojis alongside fonts on PC and download five different type emoji packages. The website was created to provide updates and information about type emojis not only in mobile environments but also on PC.", ""],
      position: { bottom: "21%", left: "8%" },
      color: "#CCCCCC" // ✅ 여기에 색상 지정

    },
    {
      title: "Typemoji Welcomekit",
      texts: ["When purchasing type emojis for the first time, users receive a gift kit that includes an emoji guidebook, stickers, and a notepad. The kit is designed as an application-like structure, allowing users to explore and experience the emojis in offline environments as well.", ""],
      position: { bottom: "7.5%", left: "8%" },
      color: "#CCCCCC" // ✅ 여기에 색상 지정
    },
  ],
    },

  { id: 7, 
    number: "7", 
    title: "Prova", 
    year: 2025, position: { top: 10, left: 32 }, 
    images: [frame102],
    icons: [goldicon1, goldicon2], // 상단 아이콘
    category: "Production Brand BI/BX",
    description: "Prova is a brand that combines production (film and video production) with nova (meaning “new”), providing a comprehensive solution for film and video creation. Through firsthand experience working on film sets, I identified", 
    description2: "customers’ pain points and developed an integrated system that manages all on-site assets — from production crews and equipment to props and locations — within a single platform rather than a fragmented one.",
    textSets: [
    {
      title: "",
      texts: [
        "It is logo variations and key graphics that embody the brand’s role in supporting on-set production, with potential applications in an app interface. Inspired by the focus mark used to center a camera’s frame, the design conveys the brand’s five core values: efficiency, curation, collaboration, consistency, and accessibility.", 
        ""
      ],
      position: { bottom: "85%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정
    },
    {
      title: "Prova Website",
      texts: ["It is a website that allows users to rent filming equipment and props, as well as book transportation services needed for production. The site provides real-time information on rental availability and inventory, along with detailed descriptions of each type of equipment and its features, making it easy for first-time users to navigate and rent without difficulty.", ""],
      position: { bottom: "54%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "Prova Application",
      texts: ["It is an application tailored for dynamic filming environments. Using key graphics, I developed promotional content for crews and equipment that conveys the brand’s identity, creating a concept that allows users to experience the brand’s extended ecosystem.", ""],
      position: { bottom: "43%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["Specifically, the brand’s products—including filming equipment, cards, transport trucks, and SNS content—were used as the basis for designing the brand’s application system. By applying the brand’s key graphics at various scales, the design aims to communicate a flexible and scalable brand concept.", ""],
      position: { bottom: "26%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
},

  { id: 8, 
    number: "8", 
    title: "Overlock", 
    year: 2024, position: { top: 10, left: 32 }, 
    images: [frame82],
    icons: [goldicon1, goldicon2], // 상단 아이콘
    category: "Sewing & Cultural Complex Brand BI/BX",
    description: "“Overlock” refers to a seam, symbolizing a repair-focused cultural complex brand that connects the beauty of the past. The brand’s philosophy centers on layering stories to preserve", 
    description2: "bygone beauty while creating something new. I developed the brand identity and design system for the Overlock cultural complex, reflecting this philosophy.",
    textSets: [
    {
      title: "",
      texts: [
        "", 
        ""
      ],
      position: { bottom: "85%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정
    },
    {
      title: "Creative Workshop",
      texts: ["The creative workshop is a space that offers repair technique workshops in collaboration with local repair experts. I designed promotional content and merchandise that incorporate various workshop concepts centered on the theme of repair, along with the brand’s key graphic element — the stitch pattern.", ""],
      position: { bottom: "54.5%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "43%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "Merch Shop & Cafe ",
      texts: ["The Overlock merch shop, located alongside the Overlock café, offers a space where visitors can explore a variety of repair materials. Using the brand’s key graphics, I designed repair-themed merchandise and café packaging, and created an application to promote the space and its offerings.", ""],
      position: { bottom: "26%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },

  { id: 9, 
    number: "9", 
    title: "Long-Talk Film Festival", 
    year: 2024, position: { top: 10, left: 32 }, 
    images: [frame101],
    icons: [goldicon1, goldicon2],
    category: "Flim Festival BI/BX",
    description: "The Long Talk Film Festival begins with the idea of uncovering the unseen side of modern society — a world where even long messages are reduced to three lines and two-hour stories are edited down to thirteen minutes.", 
    description2: "Going beyond disconnection, the festival aims to gather the unspoken words of reality and share them through the language of film. Inspired by the concept of a relay novel, it presents creative works that explore various social issues from multiple perspectives.",
    textSets: [
    {
      title: "Logo Design",
      texts: [
        "Although each program in the film festival tells a different story, they all come together to form one collective narrative that connects society. Based on this idea, I developed the festival’s branding concept using the motif of a puzzle. Four puzzle-shaped symbols with soft, rounded forms were designed to represent the four sections — beginning, conflict, climax, and resolution.", 
        ""
      ],
      position: { bottom: "85%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정
    },
    {
      title: "Motion Graphic",
      texts: ["I designed motion graphics for four programs using a puzzle symbol as the key motif. Created for the program’s opening screens, each motion graphic incorporates puzzle elements that represent the unique identity of each section.", ""],
      position: { bottom: "72%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "43%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "Program Book",
      texts: ["It is the program book to be distributed at the screening venues. It includes the festival’s curatorial intent and introductions to each program, detailing the screening plans and film descriptions by section. To help readers easily understand the festival’s structure and program concepts, each section was designed with a distinct color scheme corresponding to its theme.", ""],
      position: { bottom: "23%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
  { id: 10, 
    number: "10", 
    title: "Unsocialized Residue", 
    year: 2023, position: { top: 10, left: 32 }, 
    images: [frame92],
    icons: [goldicon1, goldicon2],
    category: "Graphic Design",
    description: "“Unsocialized Residue” is an installation project that documents the “residue” or “afterimages” left with me each day. These traces serve no practical purpose, yet through recording them, I aim to express the passage of my time.", 
    description2: "Using silkscreen and printmaking techniques, I captured objects and typography as they are, preserving these afterimages as visual records.",
    textSets: [
    {
      title: "",
      texts: [
        "This project combines typography with analog painterly techniques, centering on the repetitive process of printing letters. I captured and recorded the letters and textures I encountered each day, expressing accumulated time through linear patterns. The work was exhibited at the group show “The Sharpness Rolls” held at Chachati Club in Changsin-dong, where I showcased prints created directly on fabric. In addition to being an exhibiting artist, I also participated as a designer, creating the official poster for the exhibition.", 
        ""
      ],
      position: { bottom: "81%", left: "2%" },
      color: "#606060" // ✅ 여기에 색상 지정
    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "72%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "40%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["The Residue project began with the process of capturing typography found in daily life and directly printing it using the textures of real objects, prior to developing the linear patterns. Through these sketches, I explored ways to materialize typography through texture, and these studies were also presented in the exhibition. ", ""],
      position: { bottom: "21%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
  { id: 11, 
    number: "11", 
    title: "We are Aliens", 
    year: 2022, position: { top: 10, left: 32 }, 
    icons: [goldicon1, goldicon2], 
    images: [frame105],
    category: "Graphic Design",
    description: "To express the idea that we, with all our diverse shapes and forms, might be the universe's true strange life forms—perhaps even the real aliens—we created a series of wearable slogans.", 
    description2: "I experimentally conveyed this uncanny experience to people by wearing the slogans and wandering around Olympic Park in Seoul.",
     textSets: [
    {
      title: "",
      texts: [
        "This slogan was inspired by crop circles, which were once believed to be markings created by extraterrestrials. Although later revealed to be uniquely human-made patterns, crop circles remain one of the most ironic examples of misinterpreted phenomena. Based on this case, the project explores how human perception assigns meaning to the unfamiliar and becomes an experiment in self-reflection through the experience of strangeness.", 
        ""
      ],
      position: { bottom: "66%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정
    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "72%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "40%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["The Residue project began with the process of capturing typography found in daily life and directly printing it using the textures of real objects, prior to developing the linear patterns. Through these sketches, I explored ways to materialize typography through texture, and these studies were also presented in the exhibition. ", ""],
      position: { bottom: "38%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
  { id: 12, 
    number: "12", 
    title: "Lumi", 
    year: 2024, position: { top: 10, left: 32 },
    icons: [goldicon1, goldicon2],  
    images: [frame106],
    category: "UXUI Design",
    description: "Lumi is a media application designed to help users record and recognize sensory distance in their daily lives. Unlike social media platforms that emphasize physical proximity or fast-paced connections, Lumi aims to foster more sustainable relationships. By recording emotional and sensory interactions beyond physical distance,", 
    description2: "users can better perceive the depth of their connections. Lumi provides an environment that encourages users to focus on the relationships that truly matter — whether in love, work, or everyday life. The project focused on designing essential features through service planning, PDI user research, and concept implementation.",
     textSets: [
    {
      title: "",
      texts: [
        "The concept of Lumi originated from anthropologist Edward T. Hall’s idea that space is not merely a physical realm, but a landscape that embodies human relationships and emotions. Inspired by Hall’s observation that people perceive one another differently depending on interpersonal distance, the project began with the question: What if we could create an application that helps users recognize not just physical distance, but also the subjective and sensory distances between individuals?", 
        ""
      ],
      position: { bottom: "88%", left: "55%" },
      color: "#CCCCCC" // ✅ 여기에 색상 지정
    },
    {
      title: "",
      texts: ["The name “Lumi” was chosen to evoke the feeling of a familiar friend who is always by your side. The main symbol of the service combines the concept of “light,” which spatially defines and connects people, with a balloon icon to create a sense of warmth and approachability. Using primary colors and geometric forms, the design intuitively represents the element of light.", ""],
      position: { bottom: "43%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "40%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "38%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
  { id: 13, 
    number: "+", 
    title: "Art History Documents", 
    year: 2025, position: { top: 10, left: 32 },
    icons: [goldicon1, goldicon2],  
    images: [frame107, frame108, frame109, frame111, frame110, frame112],
    category: "Art History Essay",
    description: "Lumi is a media application designed to help users record and recognize sensory distance in their daily lives. Unlike social media platforms that emphasize physical proximity or fast-paced connections, Lumi aims to foster more sustainable relationships. By recording emotional and sensory interactions beyond physical distance,", 
    description2: "users can better perceive the depth of their connections. Lumi provides an environment that encourages users to focus on the relationships that truly matter — whether in love, work, or everyday life. The project focused on designing essential features through service planning, PDI user research, and concept implementation.",
     textSets: [
    {
      title: "",
      texts: [
        "", 
        ""
      ],
      position: { bottom: "88%", left: "55%" },
      color: "#CCCCCC" // ✅ 여기에 색상 지정
    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "43%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "40%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "38%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
];

export const projectsKo: Projectsko[] = [
  {
    id: "1",
    title: "아름다움에 대하여",
    year: 2024,
    script: "",
    script2: "297x420mm, 120g 1도 인쇄와 실크스크린",
    category: "그래픽 디자인",
    description3: "네덜란드 제품 디자이너, 베르트얀 핏의 아름다움에 대한 명언을 바탕으로 오래된 것들과 날 것의 아름다움을 시각화하기 위해 출력물 버전과 판화 기법을 활용한 버전, 2가지를 제작하였습니다.",
    description4: "사물을 있는 그대로 찍어내는 판화 기법인 ‘모노타입(Monotype)’을 활용하여 버려진 물건과 자연물을 찍어서 포스터를 디자인했습니다.",
    description5: "한글",
    icons: [goldicon1, goldicon2], // 상단 아이콘
    images: [frame33],
  
  },
    {
    id: "2",
    title: "700-08",
    year: 2024,
    script: "",
    script2: "290x290mm, 200g 1도 인쇄",
    category: "편집 디자인",
    description3: "『700-08』은 이화여자대학교의 중앙도서관 예술 서적을 층서학적인 관점에서 분석하는 책입니다. 해당 제목은 예술 서적의 서고 번호를 가리키며 비교적 책 종이의 변화가 뚜렷하게 나타난 700번부터 08번까지의 책들을 중점적으로 다루었습니다.",
    description4: "책에 대한 물성적 변화에 대한 인포그래픽을 제작하고, 이를 형태가 변화해온 지질과 같이 시각화하여 부드럽고, 단단한 책의 면모를 표현합니다.",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [frame36],
  },
    {
    id: "3",
    title: "나의 이상에게",
    year: 2022,
    script: "",
    script2: "1:17, Processing",
    category: "영상+인터랙션 디자인",
    description3: "이 인터랙티브 영상은 작은 이상과 소망에 대한 열망을 담아낸 디지털 편지입니다. 프로세싱을 활용하여 인터랙션을 통해 관객들이 편지의 내용에 간접적으로 참여하며 이야기를 따라갈 수 있도록 구조를 설계하였습니다.",
    description4: "이러한 디지털 편지는 '이상을 영원히 잊지 말자' 라는 메시지를 반영하여 종이 편지와는 다른 가변적인 방식으로 전달하는 것이 목표였습니다. 다양한 형태와 움직임을 표현하고, 이를 시간과 공간적 변화에 따른 개입없이 오랫동안 보관할 수 있는 영상의 이야기 형태로 만들어냈습니다.",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [image143]
  },
    {
    id: "4",
    title: "서울왜곡",
    year: 2022,
    script: "",
    script2: "MapBox, p5.js, 297x420mm, 150g",
    category: "웹 + 편집 디자인",
    description3: "서울의 수많은 거리 중, 특정 산업이나 사회적 현상이 밀집된 5곳을 선정하여 2022년 서울의 특유한 모습을 담아내는 프로젝트를 기획했습니다. 거리마다 독특한 풍경을 생생하게 담아내기 위해 맵박스를 활용하여 실제 지도 데이터를 활용하여 웹 그래픽을 제작하였습니다.",
    description4: "그리고 이에 대해 정확한 정보를 제공하기 위해 각 지역에서 발생된 특정 사회 문화적 현상에 대한 설명과 현상이 포화된 이유, 그로 인해 만들어진 특색있는 모습을 담은 책자를 디자인하였습니다.",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [frame29]
  },
    {
    id: "5",
    title: "혼잣말의 합창",
    year: 2025,
    script: "",
    script2: "4:23, Adobe Ae",
    category: "영상 디자인",
    description3: "수많은 목소리들이 겹치고 모이면, 하나의 공간을 형성할 만큼 커집니다. 이렇듯 소리에게는 울림과 움직임이라는 특성을 가지고 있습니다. 이러한 소리의 움직임을 표현하기 위해 다양한 공간에서 속삭이는 소리를 직접 녹음하고 중첩시켜 영상 소리를 제작하였습니다.",
    description4: "그리고 이렇게 서로 쌓인 소리들을 글자의 움직임으로 표현했습니다. 여기서 글자는 소리의 의미보다는 소리가 가진 움직임과 울림을 표현하는 매개체로 사용하였습니다. ",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [Rectangle]
  },
   {
    id: "6",
    title: "타입 이모지",
    year: 2025,
    script: "",
    script2: "",
    category: "그래픽 디자인",
    description3: "21세기 상형문자인 ‘이모지(Emoji)’는 텍스트가 전달하기 어려운 감정이나 기호를 직관적이고 풍부한 방식으로 전달합니다. 해당 프로젝트는 이모지와 글자가 폭넓고 일관성 있게 활용될 수 있도록 글꼴의 형태와 특징을 반영하여 이모지를 디자인했습니다.",
    description4: "타입 이모지 종류에 따른 소개하는 포스터 20종과 이모지를 어플을 통해 테스트를 해볼 수 있는 가이드북과 어플리케이션을 제작하였습니다.",
    description5: "한글",
    textSets: [
    {
      title: "Typemoji Guidebook",
      texts: [
        "글자와 늘 붙어있는 이모지. 타입이모지의 기획 배경부터 디자인 프로세스 및 사용 방법에 대한 정보를 담은 가이드 북입니다. 각각의 서체별 타입이모지에 대해 5권으로 이루어져 있으며 모두 동일한 목차로 구성됩니다. 사용자가 이모지를 활용하는 데에 도움을 줄 수 있도록 합니다. ", 
        ""
      ],
      position: { bottom: "75%", left: "8%" },
      color: "#CCCCCC" // ✅ 여기에 색상 지정
 // 반응형 가능하게 % 사용
    },
    {
      title: "Typemoji App",
      texts: ["가이드 북 좌측 상단에 NFC 태그를 달아 모바일 기기를 가까이 댔을 때 이모지를 종류별로 테스트해볼 수 있고, 다운로드를 받을 수 있는 사이트를 제공합니다. 가이드 북과 함께 이모지를 대화 창에서 텍스트와 함께 테스트해볼 수 있는 환경을 만들었습니다.", ""],
      position: { bottom: "45%", left: "8%" },
      color: "#CCCCCC" // ✅ 여기에 색상 지정

    },
    {
      title: "Typemoji Website",
      texts: ["PC에서 서체와 함께 타입이모지를 테스트해보며 5종의 타입이모지 패키지를 다운받을 수 있는 웹사이트의 UI를 제작했습니다. 모바일 환경 뿐만 아니라 PC 환경에서 타입 이모지에 대한 업데이트를 확인할 수 있도록 관련 웹사이트를 디자인했습니다.", ""],
      position: { bottom: "21%", left: "8%" },
      color: "#CCCCCC" // ✅ 여기에 색상 지정

    },
    {
      title: "Typemoji Welcomekit",
      texts: ["타입 이모지 첫 구매시 선물 키트로 이모지 가이드북과 스티커, 메모장이 제공됩니다. 오프라인 환경에서도 이모지를 접해보며 경험을 확장시킬 수 있는 키트형 어플리케이션을 구성하였습니다.", ""],
      position: { bottom: "7.8%", left: "8%" },
      color: "#CCCCCC" // ✅ 여기에 색상 지정

    },
  ],
    icons: [goldicon1, goldicon2], 
    images: [frame85]
  },
  {
    id: "7",
    title: "프로바",
    year: 2025,
    script: "",
    script2: "",
    category: "프로덕션 브랜드 BX/BI",
    description3: "Prova는 production(영화 및 영상 제작)과 nova(새로움)을 결합한 이름으로, 영화 및 영상 제작에서 필요한 하나의 솔루션을 제공하는 브랜드입니다. 직접 영화 촬영장에서 일을 해보며 고객들의 페인 포인트를 파악하고",
    description4: "분산된 시스템이 아닌 통합형 솔루션으로 촬영 크루와 장비, 소품, 로이케이션까지 현장의 모든 에셋을 제공합니다. 브랜드 기획부터 아이덴티티의 시각 시스템을 개발하였습니다. ",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [frame102],
        textSets: [
    {
      title: "",
      texts: [
        "촬영 현장을 도와주는 브랜드의 기능을 담아 어플리케이션에 응용될 수 있는 로고 바리에이션과 키 그래픽을 디자인하였습니다. 카메라의 화면 중심을 잡는 초점 기호에서 모티프를 얻어 브랜드의 '효율 / 큐레이션 / 협력 / 지속성 / 접근성' 이라는 5가지 핵심 가치를 전달합니다.", 
        ""
      ],
      position: { bottom: "85%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정
 // 반응형 가능하게 % 사용
    },
    {
      title: "Prova Website",
      texts: ["촬영 장비 및 소품 등 촬영에 필요한 물품을 대여하고 운송 서비스를 예약할 수 있는 웹사이트를 디자인하였습니다. 촬영 장비 대여 현황이나 재고를 살펴볼 수 있도록 정보를 제공하고, 장비 종류 및 기능에 대한 상세한 설명을 제공하여 처음 접하는 사람들에게도 어려움 없이 대여할 수 있도록 합니다.", ""],
      position: { bottom: "54%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "Prova Application",
      texts: ["유동적인 촬영 현장에 필요한 어플리케이션을 디자인하였습니다. 키그래픽을 활용하여 브랜드의 아이덴티티를 전달할 수 있는 촬영 크루나 장비 홍보 콘텐츠를 제작하여 브랜드의 확장된 시스템을 경험할 수 있도록 컨셉을 설계하였습니다.", ""],
      position: { bottom: "43%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["구체적인 브랜드 제품으로는 촬영 장비와 카드, 운송 트럭, SNS 콘텐츠를 기반하여 브랜드의 어플리케이션 시스템을 디자인하였습니다. 브랜드의 키 그래픽을 다양한 스케일에 적용하여 유연하고 확장된 브랜드 컨셉을 전달하고자 했습니다.", ""],
      position: { bottom: "26%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
    {
    id: "8",
    title: "오버로크",
    year: 2024,
    script: "",
    script2: "",
    category: "수선복합문화공간 브랜드 BX/BI",
    description3: "Overlock는 이음새를 뜻하는 단어로, 옛것의 아름다움을 잇는 수선 복합문화공간 브랜드입니다. 상권 위축으로 인해 사라진 이화여대길의 수선골목을 회복하고, 수선의 가치를 전달할 수 있는 복합문화공간을 기획하였습니다. 지나간 아름다움을 보존하며 새로움을 창조하는 브랜드의 철학을",
    description4: "설계하였고, 복합문화공간의 브랜드 아이덴티티 및 디자인 시스템을 개발하였습니다. 이 프로젝트는 실제 이화여대길의 유휴공간을 기반으로 기획되어 공간 디자인을 함께 설계하였고, 이화여대에서 우수 작품으로 선정되어 전시를 하게 되었습니다. ",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [frame82],
        textSets: [
    {
      title: "",
      texts: [
        "", 
        ""
      ],
      position: { bottom: "85%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정
 // 반응형 가능하게 % 사용
    },
    {
      title: "Creative Workshop",
      texts: ["크레이티브 워크샵은 지역 수선 전문가들과 함께 수선 기법에 대한 워크샵을 제공하는 공간입니다. 수선을 주제로 한 워크샵의 다양한 컨셉과 브랜드의 키 그래픽인 스티치 패턴을 담아 홍보 콘텐츠와 굿즈를 디자인하였습니다.", ""],
      position: { bottom: "55%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "43%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "Merch Shop & Cafe",
      texts: ["오버로크 머치샵에서는 오버로크 카페와 함께 다양한 수선 자재들을 살펴볼 수 있는 공간입니다. 브랜드의 키 그래픽을 활용하여 수선 자재와 관련된 굿즈와 카페 패키지를 디자인하여 공간을 홍보할 수 있는 어플리케이션을 제작하였습니다.", ""],
      position: { bottom: "26%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
   {
    id: "9",
    title: "제 1회 롱톡 영화제",
    year: 2024,
    script: "",
    script2: "",
    category: "소통영화제 BX/BI",
    description3: "홍대 상상마당에서 개최된 소통영화제 롱톡은 긴 글은 세줄로 줄이고, 또 2시간을 편집해 13분으로 재생하는 것이 미학이 된 현대 사회의 이면을 발견하는 것에서부터 출발하였습니다. 단절을 넘어서 현실에서 꺼내지 못한 말들을 모아 영화의 방식으로 함께 이야기하고자 개최되었습니다.",
    description4: "소통영화제에서 디자인팀장을 맡아 영화제 아이덴티티 디자인을 담당하였고, 영화제의 릴레이소설을 모티브로 하여 모션, GV 화면에 적용할 작업을 진행하였습니다. 디자인은 다양한 팀원들과의 협업 가운데 일관된 작업 방식이 중요하다는 것을 알게 되었던 프로젝트였습니다.",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [frame101],
        textSets: [
    {
      title: "Logo Design",
      texts: [
        "각 영화제 프로그램은 서로 다른 내용을 가지고 있지만 결국 사회를 연결하는 하나의 이야기를 하고 있다는 점에서 퍼즐을 모티브로 영화제 브랜딩 컨셉을 기획하였습니다. 유연하며 둥근 형태를 가진 퍼즐으로 발단, 위기, 절정, 결말 총 4가지 섹션에 맞는 4가지 종류의 심볼을 디자인하였습니다.", 
        ""
      ],
      position: { bottom: "85%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정
 // 반응형 가능하게 % 사용
    },
    {
      title: "Motion Graphic",
      texts: ["퍼즐 심볼을 활용하여 4가지 프로그램에 맞는 모션 그래픽을 디자인하였습니다. 프로그램 오픈닝 스크린에 사용될 그래픽으로 각 섹션의 아이덴티티를 상징하는 퍼즐을 사용하여 모션 그래픽 패턴을 디자인하였습니다.", ""],
      position: { bottom: "72%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "43%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "Program Book",
      texts: ["상영관 현장에서 배포할 프로그램북을 디자인하였습니다. 영화제 기획 의도와 각각의 프로그램에 대한 소개를 담은 프로그램북이며 영화제 상영 기획과 각 섹션별 영화 소개에 대한 내용을 담고 있습니다. 영화제 기획 및 프로그램 컨셉에 대해서 이해하기 쉽도록 각 섹션별 순서에 맞는 색감을 적용하여 책을 제작하였습니다.", ""],
      position: { bottom: "23%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
  {
    id: "10",
    title: "순수한 잔여물",
    year: 2023,
    script: "",
    script2: "",
    category: "그래픽 디자인",
    description3: "<순수한 잔여물: Unsocialized Residue>라는 작업은 매일 저에게 남는 '잔재' 또는 '잔상'을 기록하는 설치형 프로젝트입니다. 이 잔상은 어떤 실용적인 목적을 갖고 있지는 않지만, 그것들을 기록함으로써 저의 시간을",
    description4: "표현하고자 합니다. 실크스크린 기법과 판화를 통해 사물과 타이포그래피를 있는 그대로를 담아내어 잔상을 기록했습니다.",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [frame92],
        textSets: [
    {
      title: "",
      texts: [
        "이 프로젝트는 타이포그래피와 아날로그 회화적 기법을 융합하여 글자를 반복적으로 찍어내는 작업에 기반합니다. 하루하루 마주한 글자와 질감을 포착하여 기록하였고, 선형의 패턴으로 축적된 시간을 표현합니다. 이 프로젝트를 통해 창신동 차차티 클럽 전시관에서 열린 <뾰족함이 굴러가네> 단체전에 참여하였고, 천에 직접 프린팅한 작업을 전시했습니다. 또한 전시 참여자이자 디자이너로 참여하여 해당 전시 포스터를 디자인하였습니다.", 
        ""
      ],
      position: { bottom: "81%", left: "2%" },
      color: "#606060" // ✅ 여기에 색상 지정
 // 반응형 가능하게 % 사용
    },
    {
      title: "<뾰족함이 굴러가네> 2024",
      texts: ["", ""],
      position: { bottom: "54%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "43%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["잔여물은 선형의 패턴 이전에 일상에서 포착한 타이포그래피를 실제 사물의 질감으로 직접 찍어내는 작업을 통해 시작되었습니다. 이러한 에스키스를 통해 타이포그래피를 질감과 함께 구체화시키는 방법을 모색하였고, 이를 함께 전시하였습니다.", ""],
      position: { bottom: "21.5%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
  {
    id: "11",
    title: "낯선 존재",
    year: 2022,
    script: "",
    script2: "",
    category: "그래픽 디자인",
    description3: "서로 다른 모양을 지닌 사람들. 인간이야말로 우주의 진정한 낯선 생명체이면서도 외계인이 아닐까라는 관점에서 시작된 실험적인 커뮤니케이션 프로젝트입니다. 사람들 사이에서 거리 두기가 익숙해진 코로나 시절,",
    description4: "타자의 관점에서 바라본 우리의 낯선 모습을 표현하기 위해서 입을 수 있는 슬로건을 제작하였습니다. 슬로건을 입고 서울 시내의 올림픽 공원에 돌아다니며 사람들에게 낯선 소통 방식을 통한 경험을 실험적으로 전달하고자 하였습니다.",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [frame105],
        textSets: [
    {
      title: "",
      texts: [
        "이 슬로건은 한때 외계인의 문양이라고 알려진 '크롭 서클'에서 모티브로 얻어 제작되었습니다. '크롭 서클'은 한동안 외계인이 그린 문양이라고 알려졌지만, 인간이 만들어낸 독특한 문양으로 밝혀진 아이러니한 사례 중 하나입니다. 이러한 사례를 기반하여 인간의 인식이 얼마나 낯선 것에 의미를 부여하는지 보여주며 낯섦을 통해 인간 스스로를 돌아보게 만드는 인식의 실험이기도 합니다. ", 
        ""
      ],
      position: { bottom: "66%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정
 // 반응형 가능하게 % 사용
    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "54%", left: "8%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "43%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["실제로 슬로건을 착용하여 공공장소에서 실험을 진행하였으며 직접 걸어다니면서 촬영을 진행하였습니다. 가만히 앉아 사람들과 간접적으로 어울리거나 돌아다니면서 낯선 대상과 인간과의 소통을 드러내고자 하였습니다.", ""],
      position: { bottom: "40%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },  
  {
    id: "12",
    title: "루미",
    year: 2024,
    script: "",
    script2: "",
    category: "서비스 디자인",
    description3: "루미라는 서비스는 일상 속 감각적 거리를 기록하며 인식할 수 있도록 돕는 미디어 어플입니다. SNS처럼 물리적 거리나 빠른 관계 형성을 강조하는 대신, 루미는 지속 가능한 관계의 형성을 목표로 설계되었습니다. 사용자는 물리적 거리를 넘어 서로 간의 감정적·감각적 상호작용을 기록함으로써",
    description4: "관계의 깊이를 체감할 수 있습니다. 루미는 사랑, 동료, 비즈니스 등 다양한 인간관계 속에서 진정으로 소중한 관계에 집중할 수 있는 환경을 제공합니다. 서비스 기획부터 PDI 사용자 리서치, 컨셉 구현을 중심으로 필요한 기능을 설계하는 것에 집중하여 진행하였습니다.",
    description5: "한글",
    icons: [goldicon1, goldicon2], 
    images: [frame106],
        textSets: [
    {
      title: "",
      texts: [
        "루미라는 서비스는 공간은 물리적 영역만이 아닌 인간관계와 감정을 담아내는 풍경이다라고 에드워드 홀이라는 인류학자의 말에서 출발하게 되었습니다. 에드워드 홀이 인간관계의 거리에 따라 서로를 감각적으로 다르게 인식한다는 점을 주목하고 물리적 거리 위주가 아닌 개인간의 주관적, 감각적 거리를 인식할 수 있는 어플을 만들면 어떨까라는 생각에서 서비스를 기획하게 되었습니다.", 
        ""
      ],
      position: { bottom: "87.5%", left: "55%" },
      color: "#FFFFFF" // ✅ 여기에 색상 지정
 // 반응형 가능하게 % 사용
    },
    {
      title: "",
      texts: ["늘 곁에 있는 친근한 친구와 같은 이름으로 ‘루미(Lumi)’ 라는 네이밍을 설정하고, 대상을 공간적으로 인지시켜주는 ‘빛’ 과 ‘블룬 아이콘’을 결합하여 서비스의 메인 심볼을 디자인하였습니다. 원색의 컬러와 기하학적 형태를 활용하여 빛의 요소를 직관적으로 나타냅니다.", ""],
      position: { bottom: "43%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "43%", left: "8%" },
      color: "#D5D5D5" // ✅ 여기에 색상 지정

    },
    {
      title: "",
      texts: ["", ""],
      position: { bottom: "40%", left: "55%" },
      color: "#606060" // ✅ 여기에 색상 지정

    },
  ],
  },
  // 다른 프로젝트도 동일하게
];
