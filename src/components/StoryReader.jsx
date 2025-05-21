import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';

const ReaderContainer = styled.div`
  max-width: 1000px;
  margin: 120px auto 40px;
  padding: 2rem;
  background: rgba(26, 26, 46, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 215, 0, 0.1);
  min-height: 70vh;
`;

const StoryHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const StoryTitle = styled.h1`
  color: #ffd700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
`;

const StoryMeta = styled.div`
  color: #e2e2e2;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ChapterTitle = styled.h2`
  color: #ffd700;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const StoryContent = styled(motion.div)`
  color: #e2e2e2;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-align: justify;
  white-space: pre-line;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 215, 0, 0.2);
`;

const NavButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.disabled ? 'rgba(255, 255, 255, 0.1)' : 'linear-gradient(45deg, #ffd700, #ffa500)'};
  border: none;
  border-radius: 8px;
  color: ${props => props.disabled ? '#666' : '#1a1a2e'};
  font-size: 1.1rem;
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;

  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 5px 15px rgba(255, 215, 0, 0.3)'};
  }
`;

const ChapterProgress = styled.div`
  text-align: center;
  color: #e2e2e2;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const LanguageToggle = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(45deg, #ffd700, #ffa500);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
  }
`;

const StoryReader = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isHindi, setIsHindi] = useState(false);

  const story = {
    id: storyId,
    title: isHindi ? "विजयनगर का खोया हुआ राज्य" : "The Lost Kingdom of Vijayanagara",
    genre: isHindi ? "ऐतिहासिक कथा" : "Historical Fiction",
    readingTime: isHindi ? "~15 मिनट" : "~15 minutes",
    chapters: [
      {
        title: isHindi ? "प्रस्तावना: पत्थरों की फुसफुसाहट" : "Prologue: The Whisper of Stones",
        content: isHindi ? `हम्पी के खंडहरों पर सूरज की लंबी छाया पड़ रही थी, जहां विशाल चट्टानें सोए हुए दैत्यों की तरह पड़ी थीं, एक लंबे समय से खोए हुए रहस्यों की रक्षा कर रही थीं। पर्यटक एक बार शक्तिशाली हॉलों के अवशेषों के बीच से गुजर रहे थे, तस्वीरें खींच रहे थे और जिज्ञासा से फुसफुसा रहे थे। लेकिन कोई नहीं जानता था कि जब विजयनगर के स्वर्णिम शिखर आकाश को छू रहे थे, और इसके बाजारों में माणिक, रेशम और सपने चमक रहे थे, तब वास्तव में क्या हुआ था।

        शायद, एक बूढ़े आदमी — साधु अप्पन्ना को छोड़कर, जिसे अभी भी पत्थरों के गलियारों में गूंजती हवा का गीत याद था।` : `The sun cast long shadows over the ruins of Hampi, where colossal boulders lay like sleeping giants, guarding secrets of a time long gone. Tourists meandered through the remnants of once-mighty halls, clicking photographs and murmuring curiosity. But none knew what truly happened when the golden spires of Vijayanagara touched the heavens, and its markets gleamed with rubies, silks, and dreams.

        Except, perhaps, for one old man — Sage Appanna, who still remembered the song of the wind as it echoed through the stone corridors.`
      },
      {
        title: isHindi ? "अध्याय 1: प्रकाश का शहर" : "Chapter 1: The City of Light",
        content: isHindi ? `सन 1510 में, विजयनगर दक्षिण में एक मशाल की तरह खड़ा था। यह राज्य, जो वर्तमान कर्नाटक और आंध्र प्रदेश में फैला हुआ था, सम्राट कृष्णदेवराय के शासन में फल-फूल रहा था — एक विद्वान, योद्धा और कलाओं का संरक्षक।

        यह शहर कोई साधारण राजधानी नहीं थी। इसकी सात संकेंद्रित किलेबंदी विशाल महलों, हलचल भरे बाजारों और सुबह की धूप में चमकते मंदिरों के शिखरों की रक्षा करती थी। पानी जटिल नहरों से बहता था, आम के पेड़ों के नीचे कवियों द्वारा कविताएं सुनाई जाने वाले हरे-भरे बगीचों को सींचता था।

        यहां, राज्य के हृदय में, एक जिज्ञासु लड़का वीर रहता था, जो एक शाही पुस्तकालयाध्यक्ष का बेटा था। वीर, पंद्रह वर्ष का, कोई राजकुमार नहीं था, लेकिन उसके सपने राजसी थे। वह अपने दिन ग्रैंड सरस्वती पुस्तकालय में, पांडुलिपियों और ताड़पत्रों के बीच छिपा हुआ बिताता था।

        वह युद्धों के बारे में नहीं, बल्कि सत्य के बारे में सपना देखता था — स्याही और पत्थर में दफन भूली हुई ज्ञान की। उसके पिता अक्सर उसे चेतावनी देते थे:
        "कुछ सत्य किसी कारण से खो जाते हैं। अतीत उतना ही शाप दे सकता है जितना सिखा सकता है।"` : `In the year 1510, Vijayanagara stood as a beacon in the South. The kingdom, stretching across present-day Karnataka and Andhra Pradesh, thrived under the rule of Emperor Krishnadevaraya — a scholar, a warrior, and a patron of the arts.

        The city was no ordinary capital. Its seven concentric fortifications protected vast palaces, bustling bazaars, and temple spires that glittered in the morning sun. Water flowed through intricate canals, feeding lush gardens where poets recited verses under mango trees.

        Here, in the heart of the kingdom, lived a curious boy named Vira, the son of a royal librarian. Vira, aged fifteen, was no prince, but his dreams were royal. He spent his days in the Grand Sarasvati Library, hidden between scrolls and palm-leaf manuscripts.

        He dreamed not of battles but of truth — of forgotten knowledge buried in ink and stone. His father often warned him:
        "Some truths are lost for a reason. The past can curse as much as it can teach."`
      },
      {
        title: isHindi ? "अध्याय 2: छायाओं का नक्शा" : "Chapter 2: The Map of Shadows",
        content: isHindi ? `एक शाम, जब मानसून के बादल इकट्ठा हो रहे थे और बिजली ग्रेनाइट पहाड़ियों में गूंज रही थी, वीर को एक ऐसी पांडुलिपि मिली जैसी उसने पहले कभी नहीं देखी थी — एक सर्प चिह्न से सील की हुई। उसने कांपते हाथों से इसे खोला।

        पांडुलिपि ने एक प्राचीन नक्शा प्रकट किया — वर्तमान विजयनगर का नहीं, बल्कि जैसा यह पहले था। वर्तमान शहर के नीचे, यह एक पुराने राज्य को दर्शाता था, जो और भी भव्य था। पाठ में "सुंदर नगरी" का उल्लेख था, विजयनगर का छिपा हुआ केंद्र, जिसे संस्थापकों द्वारा गुप्त रखा गया था।

        इसमें यह भी चेतावनी थी:
        "अग्नि और छाया द्वारा संरक्षित, शहर सोया हुआ है। केवल शुद्ध हृदय वाले ही इसकी रोशनी को जगा सकते हैं — या दुनिया को फिर से विनाश की ओर धकेल सकते हैं।"

        वीर विरोध नहीं कर सका। उसने यह नक्शा मीरा के साथ साझा किया, उसकी बचपन की दोस्त और एक महल वास्तुकार की बेटी। साथ में, उन्होंने भूमिगत शहर की खोज करने का फैसला किया — यह नहीं जानते कि दूसरे देख रहे थे।` : `One evening, as monsoon clouds gathered and thunder echoed through the granite hills, Vira stumbled upon a scroll unlike any he had seen — sealed with a serpent sigil. He pried it open with trembling hands.

        The scroll revealed an ancient map — not of Vijayanagara as it was now, but as it once had been. Beneath the current city, it depicted an older kingdom, even more magnificent. The text mentioned "Sundara Nagari", the hidden core of Vijayanagara, buried in secrecy by the founders.

        It also warned:
        "Guarded by fire and shadow, the city sleeps. Only the pure of heart may awaken its light — or doom the world again."

        Vira could not resist. He shared the map with Meera, his childhood friend and daughter of a palace architect. Together, they decided to explore the underground city — not knowing that others were watching.`
      },
      {
        title: isHindi ? "अध्याय 3: पत्थर के नीचे का रहस्य" : "Chapter 3: The Secret Beneath the Stone",
        content: isHindi ? `नक्शे के निर्देशन में, वीर और मीरा ने उन सुरागों का पालन किया जो उन्हें भूली हुई जल सुरंगों, मंदिरों के पवित्र स्थानों के पीछे, और शहर की नींव में ले गए। उन्होंने संस्कृत से भी पुरानी लिपि में प्राचीन लीवर और शिलालेखों को उजागर किया।

        दिनों की खोज के बाद, उन्हें वह मिला — विट्ठल मंदिर के नीचे छिपी एक सर्पिल सीढ़ी, जिसकी रक्षा ऐसी मूर्तियों द्वारा की जा रही थी जो बहुत जीवंत लगती थीं।

        जैसे ही वे नीचे उतरे, मशालें अपने आप जल उठीं। सीढ़ी एक विशाल भूमिगत शहर में खुल गई, जो समय से अछूता था। क्रिस्टल और सोने के टावर अंधकार से उठे, और हवा में एक अजीब ऊर्जा गूंज रही थी।

        केंद्र में एक चबूतरे पर एक क्रिस्टल गोला खड़ा था, ज्ञान की ज्योतिर्लिंगा, जिसमें लंबे समय से भूली हुई साधुओं की बुद्धि समाई हुई थी।

        लेकिन वे अकेले नहीं थे।` : `Led by the map, Vira and Meera followed clues that took them through forgotten water tunnels, behind temple sanctums, and into the foundation of the city. They uncovered ancient levers and inscriptions in a script older than Sanskrit.

        After days of searching, they found it — a spiral staircase hidden beneath the Vitthala Temple, guarded by statues that seemed too lifelike.

        As they descended, torches flickered to life on their own. The staircase opened into a vast underground city, untouched by time. Towers of crystal and gold rose from the darkness, and a strange energy hummed in the air.

        In the center stood a crystal orb on a pedestal, pulsing with light — the Jyotirlinga of Knowledge, said to contain the wisdom of sages long forgotten.

        But they were not alone.`
      },
      {
        title: isHindi ? "अध्याय 4: विश्वासघात और पतन" : "Chapter 4: Betrayal and the Fall",
        content: isHindi ? `वीर को पता नहीं था, जिस पांडुलिपि को उसने पढ़ा था वह शापित थी — इसके खुलने ने तुर्की गद्दार जनरल सलाबत खान को सचेत कर दिया, जो लंबे समय से एक संकेत का इंतजार कर रहा था। सलाबत ने भाड़े के सैनिकों की सेना के साथ बच्चों का पीछा किया।

        जैसे ही वीर और मीरा ज्योतिर्लिंगा के पास पहुंचे, सलाबत ने हमला किया। मीरा को पकड़ लिया गया, और वीर को देखने के लिए मजबूर किया गया क्योंकि जनरल गोले को चुराने की कोशिश कर रहा था।

        लेकिन गोला कोई खजाना नहीं था — यह एक परीक्षा थी।

        जैसे ही सलाबत ने इसे छुआ, शहर कांपने लगा। क्रिस्टल टावरों में दरारें पड़ गईं। एक गूंजती हुई आवाज ने कहा:
        "अयोग्य नष्ट हो जाएंगे। ज्ञान लोभ की सेवा नहीं कर सकता।"

        पत्थर से आग की लपटें निकलीं, और छायाएं जीवित प्राणियों की तरह उठीं। वीर, आवाज के मार्गदर्शन में, मीरा को पकड़ा और पांडुलिपि से एक प्राचीन श्लोक का पाठ किया। गोले ने एक बार धड़कन की, और पूरा छिपा हुआ शहर ढहने लगा।

        बच्चे बस समय पर बच गए, जैसे ही भूमिगत शहर हमेशा के लिए बंद हो गया।` : `Unbeknownst to Vira, the scroll he had read was cursed — its revelation alerted the Turkic traitor general Salabat Khan, a spy in the court who had long awaited a sign. Salabat followed the children into the depths with an army of mercenaries.

        As Vira and Meera approached the Jyotirlinga, Salabat struck. Meera was captured, and Vira was forced to watch as the general tried to steal the orb.

        But the orb was no treasure — it was a test.

        The moment Salabat touched it, the city began to tremble. Cracks formed in the crystal towers. A booming voice echoed:
        "The unworthy shall perish. Knowledge must not serve greed."

        Flames erupted from the stone, and shadows rose like living creatures. Vira, guided by the voice, grabbed Meera and recited an ancient verse from the scroll. The orb pulsed once, and the entire hidden city began to collapse.

        The children escaped just in time, as the underground city sealed itself forever.`
      },
      {
        title: isHindi ? "अध्याय 5: राख में एक राज्य" : "Chapter 5: A Kingdom in Ashes",
        content: isHindi ? `दो दशक बाद, 1565 में, तालिकोटा की लड़ाई ने विजयनगर के क्रूर पतन को चिह्नित किया। शक्तिशाली साम्राज्य को अपने ही सहयोगियों ने धोखा दिया और दक्कन सल्तनतों ने इसे नष्ट कर दिया। प्रकाश का शहर पत्थर और मौन में बदल गया।

        लेकिन वीर जीवित रहा। उसने कभी भी भूमिगत शहर में जो देखा था उसे प्रकट नहीं किया। इसके बजाय, वह एक भ्रमणशील साधु बन गया, भारत की खोई हुई कहानियों का इतिहास लिखता रहा, हमेशा सुंदर नगरी के वापस आने के संकेतों की तलाश में।

        श्रृंगेरी के जंगलों में गायब होने से पहले, उसके अंतिम शब्द ये थे:

        "शहर सोया हुआ है, लेकिन हमेशा के लिए नहीं। एक दिन, जब अंधकार फिर से उठेगा, प्रकाश उन्हें बुलाएगा जो अपने दिल से सुनते हैं।"` : `Two decades later, in 1565, the Battle of Talikota marked the brutal fall of Vijayanagara. The mighty empire was betrayed by its own allies and razed by the Deccan Sultanates. The city of light was reduced to stone and silence.

        But Vira had lived on. He never revealed what he saw underground. Instead, he became a wandering sage, chronicling the lost stories of India, always searching for signs of Sundara Nagari's return.

        His final words, before disappearing into the forests of Shringeri, were these:

        "The city sleeps, but not forever. One day, when darkness rises again, the light will call to those who listen with their hearts."`
      },
      {
        title: isHindi ? "उपसंहार: लड़का और पत्थर" : "Epilogue: The Boy and the Stone",
        content: isHindi ? `सदियों बाद, हम्पी के खंडहरों में, एक युवा पुरातत्वविद् अर्जुन ने एक ग्रेनाइट स्तंभ में एक पांडुलिपि को उजागर किया। यह एक सर्प से सील की हुई थी।

        जैसे ही उसने इसे खोला, हवा में हलचल हुई। दूर में, हम्पी के पत्थर फुसफुसाने लगे।

        और विजयनगर का लंबे समय से खोया हुआ गीत फिर से शुरू हो गया।` : `Centuries later, in the ruins of Hampi, a young archaeologist named Arjun uncovered a scroll embedded in a granite pillar. It was sealed with a serpent.

        As he opened it, the wind stirred. In the distance, the stones of Hampi seemed to whisper.

        And the long-lost song of Vijayanagara began again.`
      }
    ]
  };

  const handlePreviousChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const handleNextChapter = () => {
    if (currentChapter < story.chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const toggleLanguage = () => {
    setIsHindi(!isHindi);
  };

  return (
    <ReaderContainer>
      <LanguageToggle
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isHindi ? "English" : "हिंदी"}
      </LanguageToggle>

      <StoryHeader>
        <StoryTitle>{story.title}</StoryTitle>
        <StoryMeta>
          {story.genre} • {story.readingTime}
        </StoryMeta>
        <ChapterProgress>
          {currentChapter === 0 ? (isHindi ? 'प्रस्तावना' : 'Prologue') : 
           currentChapter === story.chapters.length - 1 ? (isHindi ? 'उपसंहार' : 'Epilogue') : 
           isHindi ? `अध्याय ${currentChapter} / ${story.chapters.length - 2}` :
           `Chapter ${currentChapter} of ${story.chapters.length - 2}`}
        </ChapterProgress>
      </StoryHeader>

      <ChapterTitle>{story.chapters[currentChapter].title}</ChapterTitle>
      
      <StoryContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {story.chapters[currentChapter].content}
      </StoryContent>

      <NavigationButtons>
        <NavButton
          onClick={handlePreviousChapter}
          disabled={currentChapter === 0}
          whileHover={{ scale: currentChapter === 0 ? 1 : 1.05 }}
          whileTap={{ scale: currentChapter === 0 ? 1 : 0.95 }}
        >
          {isHindi ? 'पिछला अध्याय' : 'Previous Chapter'}
        </NavButton>
        
        <NavButton
          onClick={handleNextChapter}
          disabled={currentChapter === story.chapters.length - 1}
          whileHover={{ scale: currentChapter === story.chapters.length - 1 ? 1 : 1.05 }}
          whileTap={{ scale: currentChapter === story.chapters.length - 1 ? 1 : 0.95 }}
        >
          {isHindi ? 'अगला अध्याय' : 'Next Chapter'}
        </NavButton>
      </NavigationButtons>
    </ReaderContainer>
  );
};

export default StoryReader; 