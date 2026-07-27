export interface Ability {
  name: string;
  kanji: string;
  description: string;
  type: "Ultimate" | "Passive" | "Signature" | "Domain";
}

export interface Relationship {
  name: string;
  relation: string;
  anime: string;
  avatar: string;
}

export interface Character {
  id: string;
  name: string;
  japaneseName: string;
  anime: string;
  category: "Jujutsu Kaisen" | "Demon Slayer" | "Attack on Titan" | "Bleach" | "One Piece" | "Naruto" | "Chainsaw Man";
  role: string;
  tier: "S+" | "S" | "A";
  powerLevel: number;
  featured: boolean;
  primaryColor: string;
  secondaryColor: string;
  themeGlow: string;
  image: string;
  portrait: string;
  wallpaper: string;
  kanji: string;
  weapon: string;
  voiceActor: string;
  japaneseVoiceActor: string;
  quote: string;
  japaneseQuote: string;
  age: string;
  height: string;
  affiliation: string;
  story: string;
  stats: {
    attack: number;
    speed: number;
    defense: number;
    technique: number;
    energy: number;
    stamina: number;
  };
  abilities: Ability[];
  relationships: Relationship[];
  gallery: string[];
  timelineArcs: {
    arc: string;
    title: string;
    description: string;
    year: string;
  }[];
}

export const CHARACTERS: Character[] = [
  {
    id: "satoru-gojo",
    name: "Satoru Gojo",
    japaneseName: "五条 悟",
    anime: "Jujutsu Kaisen",
    category: "Jujutsu Kaisen",
    role: "Special Grade Sorcerer",
    tier: "S+",
    powerLevel: 99,
    featured: true,
    primaryColor: "#00d2ff",
    secondaryColor: "#7000ff",
    themeGlow: "rgba(0, 210, 255, 0.4)",
    image: "https://i.pinimg.com/control1/1200x/ab/7d/f2/ab7df22cc08e88638deda998b7799c72.jpg",
    portrait: "https://i.pinimg.com/736x/0d/30/bf/0d30bf04e8a12ea60593f71ff6118355.jpg",
    wallpaper: "https://i.pinimg.com/736x/0d/30/bf/0d30bf04e8a12ea60593f71ff6118355.jpg",
    kanji: "無下限呪術",
    weapon: "Six Eyes & Limitless Cursed Energy",
    voiceActor: "Yuichi Nakamura",
    japaneseVoiceActor: "中村 悠一",
    quote: "Throughout Heaven and Earth, I alone am the honored one.",
    japaneseQuote: "天上天下唯我独尊",
    age: "28",
    height: "190 cm",
    affiliation: "Tokyo Jujutsu High",
    story: "The strongest Jujutsu Sorcerer in history. Born into the Gojo Clan as the first sorcerer in 400 years to inherit both the Six Eyes and the Limitless Cursed Technique. His existence alone altered the power balance of the entire world.",
    stats: {
      attack: 99,
      speed: 98,
      defense: 100,
      technique: 100,
      energy: 99,
      stamina: 95,
    },
    abilities: [
      {
        name: "Domain Expansion: Unlimited Void",
        kanji: "無量空処",
        description: "Traps the target inside an infinite stream of information, rendering them unable to act or perceive properly.",
        type: "Domain",
      },
      {
        name: "Hollow Purple",
        kanji: "虛式「紫」",
        description: "Combines Blue (Attraction) and Red (Repulsion) to create an imaginary mass that erodes everything in its path.",
        type: "Ultimate",
      },
      {
        name: "Infinity",
        kanji: "無下限",
        description: "Implements Zeno's paradox into reality; objects coming close to Gojo slow down continuously and never reach him.",
        type: "Passive",
      },
    ],
    relationships: [
      { name: "Suguru Geto", relation: "Former Best Friend / Rival", anime: "Jujutsu Kaisen", avatar: "https://i.pinimg.com/control1/1200x/b9/97/ac/b997ac8c5a4cd7e83c2d9d63ed991a24.jpg" },
      { name: "Yuji Itadori", relation: "Student / Vessel of Sukuna", anime: "Jujutsu Kaisen", avatar: "https://i.pinimg.com/control1/736x/3f/7e/cd/3f7ecde4039f2a43826e8cefe42fa888.jpg" },
      { name: "Megumi Fushiguro", relation: "Warded Student", anime: "Jujutsu Kaisen", avatar: "https://i.pinimg.com/736x/1d/03/67/1d036787105ca65cee1cd0bd0b513919.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/736x/91/a3/b5/91a3b588565a7350ba2214e7476b5dff.jpg",
      "https://i.pinimg.com/736x/fe/f4/19/fef4193709235baf590d49c8e188cf58.jpg",
      "https://i.pinimg.com/736x/6f/6e/63/6f6e63cff849f0e2dae677bad0d98856.jpg",
    ],
    timelineArcs: [
      { arc: "Hidden Inventory Arc", title: "The Awakening of Six Eyes", description: "Near-death experience against Toji Fushiguro unlocked reverse cursed technique and true enlightenment.", year: "2006" },
      { arc: "Shibuya Incident", title: "The Sealing in Prison Realm", description: "Confronted pseudo-Geto and was trapped inside the Prison Realm by Kenjaku.", year: "2018" },
      { arc: "Shinjuku Showdown", title: "Battle against Ryomen Sukuna", description: "The clash of the strongest sorcerers in history.", year: "2018" },
    ],
  },
  {
    id: "tanjiro-kamado",
    name: "Tanjiro Kamado",
    japaneseName: "竈門 炭治郎",
    anime: "Demon Slayer: Kimetsu no Yaiba",
    category: "Demon Slayer",
    role: "Demon Slayer Corps Swordsman",
    tier: "S+",
    powerLevel: 94,
    featured: true,
    primaryColor: "#ff6b00",
    secondaryColor: "#10b981",
    themeGlow: "rgba(255, 107, 0, 0.4)",
    image: "https://i.pinimg.com/736x/71/c2/d7/71c2d7503d70e32f8f118e877da68167.jpg",
    portrait: "https://i.pinimg.com/736x/71/c2/d7/71c2d7503d70e32f8f118e877da68167.jpg",
    wallpaper: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600",
    kanji: "日の呼吸",
    weapon: "Nichirin Katana & Sun Breathing",
    voiceActor: "Natsuki Hanae",
    japaneseVoiceActor: "花江 夏樹",
    quote: "No matter how many people you may lose, you have no choice but to go on living.",
    japaneseQuote: "失っても失っても 生きていくしかない",
    age: "16",
    height: "165 cm",
    affiliation: "Demon Slayer Corps",
    story: "A kind-hearted coal seller whose family was slaughtered by Muzan Kibutsuji. Determined to cure his demon-turned sister Nezuko, he mastered Water Breathing and resurrected the mythical Sun Breathing technique.",
    stats: {
      attack: 94,
      speed: 92,
      defense: 89,
      technique: 96,
      energy: 95,
      stamina: 98,
    },
    abilities: [
      {
        name: "Sun Breathing (Hinokami Kagura)",
        kanji: "日の呼吸",
        description: "The original and most powerful breathing style, consisting of 12 fluid solar sword forms.",
        type: "Ultimate",
      },
      {
        name: "Transparent World & Mark",
        kanji: "透き通る世界",
        description: "Perceives enemies' muscles, blood flow, and movement in slow motion while boosting speed exponentially.",
        type: "Passive",
      },
      {
        name: "Water Breathing: Tenth Form",
        kanji: "水の呼吸 拾ノ型 生生流転",
        description: "Continuous dragon sword strike that gains momentum and power with every rotation.",
        type: "Signature",
      },
    ],
    relationships: [
      { name: "Nezuko Kamado", relation: "Younger Sister", anime: "Demon Slayer", avatar: "https://i.pinimg.com/736x/c1/b5/96/c1b596d866e678ee7c5d1b18457b0cb7.jpg" },
      { name: "Kyojuro Rengoku", relation: "Mentor / Flame Hashira", anime: "Demon Slayer", avatar: "https://i.pinimg.com/736x/7e/a8/6a/7ea86ac4b11b6ad49c68e471eb551d27.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/1200x/10/ef/f1/10eff137b55c9622771cf39c7b5ca4ce.jpg",
      "https://i.pinimg.com/736x/4a/79/ae/4a79ae7f7adafbaf814595b1bcc970ce.jpg",
    ],
    timelineArcs: [
      { arc: "Final Selection", title: "Hand Demon Defeat", description: "Passed the Demon Slayer selection test on Mt. Fujikasane.", year: "Taisho Era" },
      { arc: "Mugen Train", title: "Flame Hashira Legacy", description: "Unlocked Hinokami Kagura depth alongside Rengoku.", year: "Taisho Era" },
      { arc: "Sunrise Countdown", title: "Muzan Final Battle", description: "Mastered the 13th form to end the 1000-year demon reign.", year: "Taisho Era" },
    ],
  },
  {
    id: "levi-ackerman",
    name: "Levi Ackerman",
    japaneseName: "リヴァイ・アッカーマン",
    anime: "Attack on Titan",
    category: "Attack on Titan",
    role: "Humanity's Strongest Soldier",
    tier: "S+",
    powerLevel: 96,
    featured: true,
    primaryColor: "#4f46e5",
    secondaryColor: "#64748b",
    themeGlow: "rgba(79, 70, 229, 0.4)",
    image: "https://i.pinimg.com/736x/4a/7a/56/4a7a5662e179c8b14d7952d73dade11b.jpg",
    portrait: "https://i.pinimg.com/736x/4a/7a/56/4a7a5662e179c8b14d7952d73dade11b.jpg",
    wallpaper: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600",
    kanji: "人類最強の兵士",
    weapon: "Omni-Directional Mobility Gear & Blades",
    voiceActor: "Hiroshi Kamiya",
    japaneseVoiceActor: "神谷 浩史",
    quote: "Give up on your dream and die for us. Lead the recruits straight into hell.",
    japaneseQuote: "夢を諦めて死んでくれ。新兵達を地獄に導け",
    age: "30s",
    height: "160 cm",
    affiliation: "Survey Corps - Special Operations Squad",
    story: "Captain of the Special Operations Squad inside the Survey Corps. Recognized as humanity's strongest soldier, possessing superhuman Ackerman reflexes, precise mobility blade mastery, and unwavering tactical intellect.",
    stats: {
      attack: 97,
      speed: 100,
      defense: 88,
      technique: 99,
      energy: 85,
      stamina: 96,
    },
    abilities: [
      {
        name: "Ackerman Awakening",
        kanji: "アッカーマン覚醒",
        description: "Draws upon battle experience of previous Ackerman ancestors, unlocking immense physical power.",
        type: "Passive",
      },
      {
        name: "Spinning Slice Blitz",
        kanji: "回転乱舞",
        description: "Rotates at ultra-high speeds like a saw blade to shred Titan napes in milliseconds.",
        type: "Ultimate",
      },
    ],
    relationships: [
      { name: "Erwin Smith", relation: "Commander & Confidant", anime: "Attack on Titan", avatar: "https://i.pinimg.com/1200x/56/89/15/568915b024bbcc418950187e3bfdbae4.jpg" },
      { name: "Eren Yeager", relation: "Subordinate & Titan Weapon", anime: "Attack on Titan", avatar: "https://i.pinimg.com/736x/2c/89/50/2c89505c3787dd4935fac8074ee4f1f8.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/1200x/db/23/f9/db23f901627f19d73a3e17893340df56.jpg",
    ],
    timelineArcs: [
      { arc: "No Regrets", title: "Underground Awakening", description: "Recruited from Underground District by Erwin Smith.", year: "844" },
      { arc: "Return to Shiganshina", title: "Beast Titan Decimation", description: "Single-handedly obliterated the Beast Titan Zeke.", year: "850" },
    ],
  },
  {
    id: "eren-yeager",
    name: "Eren Yeager",
    japaneseName: "エレン・イェーガー",
    anime: "Attack on Titan",
    category: "Attack on Titan",
    role: "Founding Titan & Attack Titan",
    tier: "S+",
    powerLevel: 98,
    featured: false,
    primaryColor: "#ef4444",
    secondaryColor: "#15803d",
    themeGlow: "rgba(239, 68, 68, 0.4)",
    image: "https://i.pinimg.com/1200x/57/d7/23/57d723b95eebe3e779e00ba050cf5316.jpg",
    portrait: "https://i.pinimg.com/736x/36/c5/53/36c55390974344a553c0a945efa623ac.jpg",
    wallpaper: "https://i.pinimg.com/control1/736x/d9/c4/ca/d9c4cae3b2c47568aadce193a039ea2f.jpg",
    kanji: "進撃の巨人",
    weapon: "Founding, Attack & War Hammer Titans",
    voiceActor: "Yuki Kaji",
    japaneseVoiceActor: "梶 裕貴",
    quote: "If someone tries to take my freedom away... I won't hesitate to take theirs.",
    japaneseQuote: "オレから自由を奪う奴からは...奪い返してやる",
    age: "19",
    height: "183 cm",
    affiliation: "Yeagerists / Scout Regiment",
    story: "Witnessed his mother devoured by Titans during Wall Maria's breach. Driven by extreme desire for freedom, he eventually inherited the Attack Titan, War Hammer Titan, and Founding Titan to unleash the Rumbling.",
    stats: {
      attack: 100,
      speed: 88,
      defense: 96,
      technique: 92,
      energy: 100,
      stamina: 97,
    },
    abilities: [
      {
        name: "The Rumbling",
        kanji: "地鳴らし",
        description: "Commands millions of Wall Titans to trample all land and life outside Paradis Island.",
        type: "Ultimate",
      },
      {
        name: "Future Memory Clairvoyance",
        kanji: "未来の記憶",
        description: "The Attack Titan ability allowing its user to peer into memories of future inheritors.",
        type: "Passive",
      },
    ],
    relationships: [
      { name: "Mikasa Ackerman", relation: "Adoptive Sister & Guardian", anime: "Attack on Titan", avatar: "https://i.pinimg.com/736x/59/bc/81/59bc817212513af03dae607cfd59e4f7.jpg" },
      { name: "Armin Arlert", relation: "Childhood Best Friend", anime: "Attack on Titan", avatar: "https://i.pinimg.com/control1/736x/11/7d/6f/117d6fa9423ea9abb716a4f80f00e88e.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/736x/c7/ee/1d/c7ee1d37ee7d9c0751b8cf8497d2d18d.jpg",
    ],
    timelineArcs: [
      { arc: "Trost District", title: "First Transformation", description: "Discovered Titan powers inside the Bearded Titan.", year: "850" },
      { arc: "Marley Arc", title: "Declaration of War", description: "Devoured the War Hammer Titan in Liberio.", year: "854" },
    ],
  },
  {
    id: "rengoku-kyojuro",
    name: "Kyojuro Rengoku",
    japaneseName: "煉獄 杏寿郎",
    anime: "Demon Slayer: Kimetsu no Yaiba",
    category: "Demon Slayer",
    role: "Flame Hashira",
    tier: "S",
    powerLevel: 93,
    featured: false,
    primaryColor: "#f97316",
    secondaryColor: "#dc2626",
    themeGlow: "rgba(249, 115, 22, 0.4)",
    image: "https://i.pinimg.com/736x/7e/a8/6a/7ea86ac4b11b6ad49c68e471eb551d27.jpg",
    portrait: "https://i.pinimg.com/736x/7e/a8/6a/7ea86ac4b11b6ad49c68e471eb551d27.jpg",
    wallpaper: "https://i.pinimg.com/736x/4a/79/ae/4a79ae7f7adafbaf814595b1bcc970ce.jpg",
    kanji: "炎の呼吸",
    weapon: "Flame Nichirin Blade",
    voiceActor: "Satoshi Hino",
    japaneseVoiceActor: "日野 聡",
    quote: "Set your heart ablaze! Go beyond your limits!",
    japaneseQuote: "心を燃やせ！限界を超えろ！",
    age: "20",
    height: "177 cm",
    affiliation: "Demon Slayer Corps Hashira",
    story: "The passion-driven Flame Hashira of the Demon Slayer Corps. Guided by a noble code inherited from his mother to protect the weak, his burning spirit protected 200 train passengers without losing a single life.",
    stats: {
      attack: 95,
      speed: 92,
      defense: 90,
      technique: 93,
      energy: 94,
      stamina: 96,
    },
    abilities: [
      {
        name: "Ninth Form: Rengoku",
        kanji: "玖ノ型 煉獄",
        description: "A devastating fire dash strike that carves through terrain leaving a fiery blaze.",
        type: "Ultimate",
      },
    ],
    relationships: [
      { name: "Tanjiro Kamado", relation: "Tsuguko Disciple", anime: "Demon Slayer", avatar: "https://i.pinimg.com/736x/a9/19/c4/a919c4483588cf8d30b28267d2e92623.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/736x/ee/7d/02/ee7d022acb72bbb681b31c3c712b5189.jpg",
    ],
    timelineArcs: [
      { arc: "Mugen Train Arc", title: "Battle Against Akaza", description: "Fought Upper Rank Three to protect 200 human lives.", year: "Taisho Era" },
    ],
  },
  {
    id: "makima",
    name: "Makima",
    japaneseName: "マキマ",
    anime: "Chainsaw Man",
    category: "Chainsaw Man",
    role: "Control Devil",
    tier: "S+",
    powerLevel: 97,
    featured: false,
    primaryColor: "#e11d48",
    secondaryColor: "#f59e0b",
    themeGlow: "rgba(225, 29, 72, 0.4)",
    image: "https://i.pinimg.com/control1/736x/25/f2/a8/25f2a831cd156e04325105430f01d9ec.jpg",
    portrait: "https://i.pinimg.com/control1/736x/48/8c/7f/488c7f67bde98fab3568b01390e08f14.jpg",
    wallpaper: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600",
    kanji: "支配の悪魔",
    weapon: "Control Devil Contracts & Telekinesis",
    voiceActor: "Tomori Kusunoki",
    japaneseVoiceActor: "楠木 ともり",
    quote: "All humans are equal to me... like dogs.",
    japaneseQuote: "私にとって全ての人間は...犬のようなものです",
    age: "Unknown",
    height: "171 cm",
    affiliation: "Public Safety Special Division 4",
    story: "High-ranking Public Safety Devil Hunter who is secretly the incarnation of the Control Devil. Capable of forcing any being she considers inferior to submit to her absolute commands.",
    stats: {
      attack: 96,
      speed: 90,
      defense: 98,
      technique: 99,
      energy: 98,
      stamina: 100,
    },
    abilities: [
      {
        name: "Prime Minister Contract",
        kanji: "内閣総理大臣契約",
        description: "Any fatal damage inflicted on Makima is transferred to a random Japanese citizen as illness or accident.",
        type: "Passive",
      },
      {
        name: "Bang Crushing Telekinesis",
        kanji: "圧殺・「バン」",
        description: "Crushes targets remotely from distance or blasts holes through bodies with finger gestures.",
        type: "Signature",
      },
    ],
    relationships: [
      { name: "Denji", relation: "Pet / Chainsaw Heart Vessel", anime: "Chainsaw Man", avatar: "https://i.pinimg.com/736x/fd/00/69/fd0069e0d11caf2a423efbcddd214ce0.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/1200x/6c/5f/5c/6c5f5c955d8d575ab7200e32c87dc062.jpg",
    ],
    timelineArcs: [
      { arc: "Control Devil Arc", title: "Control Revealed", description: "Confronted Chainsaw Man for true world control.", year: "1997" },
    ],
  },
  {
    id: "ichigo-kurosaki",
    name: "Ichigo Kurosaki",
    japaneseName: "黒崎 一護",
    anime: "Bleach",
    category: "Bleach",
    role: "Substitute Soul Reaper",
    tier: "S+",
    powerLevel: 97,
    featured: false,
    primaryColor: "#f97316",
    secondaryColor: "#1e293b",
    themeGlow: "rgba(249, 115, 22, 0.4)",
    image: "https://i.pinimg.com/736x/d3/ac/30/d3ac30158df795e0c4588224dac6c68d.jpg",
    portrait: "https://i.pinimg.com/736x/d3/ac/30/d3ac30158df795e0c4588224dac6c68d.jpg",
    wallpaper: "https://i.pinimg.com/736x/d3/ac/30/d3ac30158df795e0c4588224dac6c68d.jpg",
    kanji: "卍解 天鎖斬月",
    weapon: "Zangetsu (Dual Blades) & Getsuga Tensho",
    voiceActor: "Masakazu Morita",
    japaneseVoiceActor: "森田 成一",
    quote: "I'm not fighting because I think I can win. I'm fighting because I have to win!",
    japaneseQuote: "勝てるから戦うんじゃない、勝たなきゃいけないから戦うんだ！",
    age: "27",
    height: "181 cm",
    affiliation: "Karakura Town / Soul Society",
    story: "A high school teenager with the ability to see ghosts who inherited Soul Reaper powers from Rukia Kuchiki. Uniquely possesses Soul Reaper, Quincy, Hollow, and Fullbring genetics.",
    stats: {
      attack: 98,
      speed: 99,
      defense: 93,
      technique: 92,
      energy: 99,
      stamina: 96,
    },
    abilities: [
      {
        name: "True Bankai: Tensa Zangetsu",
        kanji: "真の卍解 天鎖斬月",
        description: "Fuses Quincy and Hollow power into dual Zangetsu blades unleashing devastating spirit speed.",
        type: "Ultimate",
      },
      {
        name: "Getsuga Jujisho",
        kanji: "月牙十字衝",
        description: "Cross-shaped spiritual pressure wave fired by slashing both Zanpakuto simultaneously.",
        type: "Signature",
      },
    ],
    relationships: [
      { name: "Rukia Kuchiki", relation: "Soul Reaper Companion", anime: "Bleach", avatar: "https://i.pinimg.com/736x/90/91/06/90910651af85166c92445529bc94d0ad.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/736x/ac/bc/2e/acbc2e0fb73884fbf91c1351ff87e51a.jpg",
    ],
    timelineArcs: [
      { arc: "Soul Society Arc", title: "Bankai Unlocked", description: "Achieved Bankai in 3 days to rescue Rukia.", year: "2001" },
      { arc: "Thousand-Year Blood War", title: "True Zanpakuto Reforged", description: "Discovered Quincy heritage and forged twin Zangetsu.", year: "2003" },
    ],
  },
  {
    id: "roronoa-zoro",
    name: "Roronoa Zoro",
    japaneseName: "ロロノア・ゾロ",
    anime: "One Piece",
    category: "One Piece",
    role: "Combatant of Straw Hat Pirates",
    tier: "S+",
    powerLevel: 96,
    featured: false,
    primaryColor: "#22c55e",
    secondaryColor: "#15803d",
    themeGlow: "rgba(34, 197, 94, 0.4)",
    image: "https://i.pinimg.com/736x/44/97/d7/4497d717a90b7ae028fa5758d1bfc433.jpg",
    portrait: "https://i.pinimg.com/736x/a3/2d/86/a32d866802786841284ee9e7aa6b0500.jpg",
    wallpaper: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600",
    kanji: "三刀流 奥義",
    weapon: "Three Swords (Enma, Wado Ichimonji, Sandai Kitetsu)",
    voiceActor: "Kazuya Nakai",
    japaneseVoiceActor: "中井 和哉",
    quote: "When I decided to follow my dream, I had already discarded my life.",
    japaneseQuote: "背中の傷は剣士の恥だ",
    age: "21",
    height: "181 cm",
    affiliation: "Straw Hat Pirates / King of Hell",
    story: "Former pirate hunter who aims to become the Greatest Swordsman in the World. Master of the unique Three-Sword Style (Santoryu) and wielder of Advanced Conqueror's Haki.",
    stats: {
      attack: 98,
      speed: 93,
      defense: 96,
      technique: 95,
      energy: 94,
      stamina: 99,
    },
    abilities: [
      {
        name: "King of Hell Three-Sword Style",
        kanji: "閻王三刀流",
        description: "Infuses Enma and all three swords with Conqueror's Haki to slice dragon scales effortlessly.",
        type: "Ultimate",
      },
      {
        name: "Nine-Sword Style: Asura",
        kanji: "鬼気 九刀流 阿修羅",
        description: "Manifests a spiritual avatar with 3 heads and 6 arms to deliver 9 instantaneous strikes.",
        type: "Signature",
      },
    ],
    relationships: [
      { name: "Monkey D. Luffy", relation: "Captain", anime: "One Piece", avatar: "https://i.pinimg.com/736x/f7/24/55/f72455db7a64255666831031e4357e39.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/736x/cb/38/1e/cb381ebdeb67e10f3026f705865b0525.jpg",
    ],
    timelineArcs: [
      { arc: "Wano Country", title: "Defeating King the Wildfire", description: "Unlocked King of Hell Haki state to defeat Kaido's right hand.", year: "Wano Arc" },
    ],
  },
  {
    id: "kakashi-hatake",
    name: "Kakashi Hatake",
    japaneseName: "はたけ カカシ",
    anime: "Naruto",
    category: "Naruto",
    role: "The Copy Ninja / 6th Hokage",
    tier: "S",
    powerLevel: 92,
    featured: false,
    primaryColor: "#3b82f6",
    secondaryColor: "#64748b",
    themeGlow: "rgba(59, 130, 246, 0.4)",
    image: "https://i.pinimg.com/736x/1a/21/fa/1a21fa02ab5c460643495b8e5753138d.jpg",
    portrait: "https://i.pinimg.com/736x/7e/5d/69/7e5d699df4d239d16cd40173a47977dd.jpg",
    wallpaper: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600",
    kanji: "写輪眼の力シ",
    weapon: "Sharingan, Chidori & Kunai",
    voiceActor: "Kazuhiko Inoue",
    japaneseVoiceActor: "井上 和彦",
    quote: "Those who break the rules are scum, but those who abandon their friends are worse than scum.",
    japaneseQuote: "仲間を大切にしない奴はそれ以上のクズだ",
    age: "31",
    height: "181 cm",
    affiliation: "Hidden Leaf Village Hokage",
    story: "Famed across shinobi nations as the Copy Ninja who copied over 1,000 jutsu with his gifted Sharingan. Leader of Team 7 and later the 6th Hokage of Konohagakure.",
    stats: {
      attack: 91,
      speed: 94,
      defense: 90,
      technique: 98,
      energy: 88,
      stamina: 89,
    },
    abilities: [
      {
        name: "Kamui Lightning Cutter",
        kanji: "神威雷切",
        description: "Intangible Chidori thrust powered by Mangekyo Sharingan spatial distortion.",
        type: "Ultimate",
      },
    ],
    relationships: [
      { name: "Naruto Uzumaki", relation: "Student", anime: "Naruto", avatar: "https://i.pinimg.com/control1/1200x/02/1b/97/021b970e3a3e67fe6f64f7990bdaae54.jpg" },
      { name: "Sasuke Uchiha", relation: "Student", anime: "Naruto", avatar: "https://i.pinimg.com/736x/27/e4/ef/27e4ef222a715d566ee1f13224537ec9.jpg" },
      { name: "Sakura Haruno", relation: "Student", anime: "Naruto", avatar: "https://i.pinimg.com/control1/1200x/c2/d9/49/c2d949ef2bf435fd475d64a9835bae5c.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/736x/5e/3d/2c/5e3d2cb0d28856fdb362767e50ca99bc.jpg",
    ],
    timelineArcs: [
      { arc: "Fourth Shinobi World War", title: "Double Sharingan Susanoo", description: "Manifested Perfect Susanoo alongside Obito Uchiha.", year: "War Arc" },
    ],
  },
  {
    id: "megumi-fushiguro",
    name: "Megumi Fushiguro",
    japaneseName: "伏黒 恵",
    anime: "Jujutsu Kaisen",
    category: "Jujutsu Kaisen",
    role: "Ten Shadows Sorcerer",
    tier: "A",
    powerLevel: 90,
    featured: false,
    primaryColor: "#8b5cf6",
    secondaryColor: "#1e1b4b",
    themeGlow: "rgba(139, 92, 246, 0.4)",
    image: "https://i.pinimg.com/736x/69/b6/31/69b6315019ac8032b97832463670bfd8.jpg",
    portrait: "https://i.pinimg.com/736x/69/b6/31/69b6315019ac8032b97832463670bfd8.jpg",
    wallpaper: "https://i.pinimg.com/736x/69/b6/31/69b6315019ac8032b97832463670bfd8.jpg",
    kanji: "十種影法術",
    weapon: "Ten Shadows Technique & Sword",
    voiceActor: "Yuma Uchida",
    japaneseVoiceActor: "内田 雄馬",
    quote: "I want more good people to enjoy fairness, even if only a little.",
    japaneseQuote: "少しでも多くの善人が平等に生きていけるように",
    age: "15",
    height: "175 cm",
    affiliation: "Tokyo Jujutsu High",
    story: "Inheritor of the Zenin Clan's prized Ten Shadows Technique. Uses shadows as a medium to summon 10 divine shikigami including the untamed Mahoraga.",
    stats: {
      attack: 89,
      speed: 91,
      defense: 88,
      technique: 94,
      energy: 90,
      stamina: 88,
    },
    abilities: [
      {
        name: "Domain Expansion: Chimera Shadow Garden",
        kanji: "嵌合暗翳庭",
        description: "Floods the domain with dense shadows allowing infinite shikigami clones and shadow manipulation.",
        type: "Domain",
      },
    ],
    relationships: [
      { name: "Satoru Gojo", relation: "Guardian", anime: "Jujutsu Kaisen", avatar: "https://i.pinimg.com/736x/8d/43/6d/8d436d235fff6c1ba82effee1cb5726c.jpg" },
    ],
    gallery: [
      "https://i.pinimg.com/control1/1200x/4c/6a/47/4c6a4784d7425de3e1d574d7dd2efc5b.jpg",
    ],
    timelineArcs: [
      { arc: "Shibuya Incident", title: "Mahoraga Ritual", description: "Summoned Divine General Mahoraga against Shigemo.", year: "2018" },
    ],
  },
];
