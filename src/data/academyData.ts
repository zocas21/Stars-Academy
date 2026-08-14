import { CourseTrack, Instructor, ShowcaseVideo, SoftwareTool, StatItem, Testimonial } from "../types";

export const ACADEMY_CONFIG = {
  name: "Stars Academy",
  tagline: "Become the Video Editor Every Studio Wants to Hire",
  externalPlatformUrl: "https://courses.starsacademy.com",
  featuredYoutubeVideoId: "8n2O1hPe7aQ",
  telegramHandle: "@starsacadamey21",
  telegramUrl: "https://t.me/starsacadamey21",
  phoneNumber: "+251 96 787 6067",
  phoneTelLink: "tel:+251967876067",
  whatsappUrl: "https://wa.me/251967876067?text=Hi%20Stars%20Academy!%20I%20want%20to%20learn%20more%20about%20your%20video%20editing%20and%20motion%20design%20courses.",
  email: "admissions@starsacademy.com",
  location: "Addis Ababa & Global Online Campus",
};

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    id: "premiere",
    name: "Premiere Pro",
    category: "Narrative & Commercial Editing",
    iconBg: "bg-[#00005B]",
    color: "text-[#9999FF]",
    accentHex: "#9999FF",
    description: "Industry-standard timeline workflow, high-speed multi-cam cutting, pacing, and professional sound mixing.",
    keySkills: ["Dynamic Pacing", "J & L Cuts", "Sync & Multi-cam", "Audio Mastering"],
    shortcut: "Cmd + K / C"
  },
  {
    id: "after-effects",
    name: "After Effects",
    category: "Motion Design & VFX",
    iconBg: "bg-[#00005B]",
    color: "text-[#D291FF]",
    accentHex: "#D291FF",
    description: "2D/3D kinetic typography, logo reveals, custom shape animations, tracking, and visual compositing.",
    keySkills: ["Bezier Curves", "Kinetic Type", "Camera 3D", "Masking & Tracking"],
    shortcut: "F9 / Easy Ease"
  },
  {
    id: "stars-core",
    name: "Stars Method",
    category: "Storytelling & The Edit",
    iconBg: "bg-gradient-to-br from-cyan-400 to-blue-600",
    color: "text-cyan-300",
    accentHex: "#00f0ff",
    description: "The proprietary Stars Academy framework: story architecture, emotional rhythm, retention hooks, and client communication.",
    keySkills: ["Story Structure", "Emotional Arc", "Retention Science", "Client Briefs"],
    shortcut: "Spacebar / Play"
  },
  {
    id: "davinci",
    name: "DaVinci Resolve",
    category: "Hollywood Color Science",
    iconBg: "bg-[#1E1E24]",
    color: "text-[#FF8080]",
    accentHex: "#FF8080",
    description: "Node-based color grading, LUT engineering, HDR color management, skin tone balancing, and Fairlight audio.",
    keySkills: ["Node Trees", "Color Wheels & Curves", "Log & HDR Conforming", "Film Emulation"],
    shortcut: "Option + S / Add Node"
  },
  {
    id: "capcut",
    name: "CapCut Pro",
    category: "High-Retention Short-Form",
    iconBg: "bg-[#111827]",
    color: "text-[#38BDF8]",
    accentHex: "#38BDF8",
    description: "Viral TikTok, Reels & Shorts editing, animated captions, high-speed sound layering, and visual pacing.",
    keySkills: ["Sound FX Stacking", "Auto-Captions", "Fast B-roll", "Hook Dynamics"],
    shortcut: "B / Split Clip"
  }
];

export const VALUE_PILLS: string[] = [
  "UNLIMITED 1-ON-1 CRITIQUES",
  "HOLLYWOOD RAW 6K FOOTAGE",
  "WEEKLY LIVE MASTERCLASSES",
  "24/7 GLOBAL ALUMNI DISCORD",
  "VERIFIED INDUSTRY CREDENTIALS",
  "CLIENT-READY COMMERCIAL BRIEFS",
  "COLOR SCIENCE NODE BLUEPRINTS",
  "FREELANCE & STUDIO PLACEMENTS"
];

export const COURSE_TRACKS: CourseTrack[] = [
  {
    id: "track-premiere",
    title: "Premiere Pro: The Cinematic Cut",
    software: "Adobe Premiere Pro 2025",
    level: "All Levels",
    duration: "8 Weeks • Hands-on Project Based",
    tagline: "Master the art of pacing, commercial narrative, and timeline speed.",
    description: "Move beyond just splicing clips. Learn how top editors craft emotional tension, weave complex multi-track audio soundscapes, and deliver commercial-grade edits under tight deadlines.",
    color: "border-purple-500/30 hover:border-purple-500",
    accentHex: "#a855f7",
    highlights: [
      "Master high-speed keyboard-driven rough cutting & trimming",
      "Weave multi-layered sound design (Ambience, Whooshes, Risers, Dialogue)",
      "Edit real multi-camera commercial campaigns with proxy workflows",
      "Deliver broadcast-compliant stems and ProRes/H.265 master exports"
    ],
    weeklyBreakdown: [
      { week: "Week 01-02", title: "Timeline Velocity & Story Anatomy", description: "Keyboard setups, asset ingestion, building narrative tension with rough cuts." },
      { week: "Week 03-04", title: "The Soundscape Engine", description: "Dialogue cleanup, dynamic range compression, SFX placement, musical timing." },
      { week: "Week 05-06", title: "Commercial & Documentary Workflows", description: "Cutting to the beat without being slave to it, pacing shifts, visual b-roll rhythm." },
      { week: "Week 07-08", title: "Final Polish & Client Review Delivery", description: "Color conforms, dynamic link handoff, mastering and client revision management." }
    ],
    projectDeliverable: "1x 60-Second Luxury Commercial + 1x 3-Minute Mini-Documentary",
    rawAssetsIncluded: "120GB of RAW 4K RED & ARRI footage, sound effect library (5,000+ wavs)"
  },
  {
    id: "track-after-effects",
    title: "After Effects & Kinetic Motion Design",
    software: "Adobe After Effects 2025",
    level: "Intermediate",
    duration: "10 Weeks • Studio Level",
    tagline: "Turn static ideas into mind-bending visual motion and 3D kinetic typography.",
    description: "Designed for editors ready to build their own broadcast titles, 3D camera sweeps, sleek UI mockups, and eye-popping visual effects without relying on generic pre-made templates.",
    color: "border-indigo-500/30 hover:border-indigo-500",
    accentHex: "#6366f1",
    highlights: [
      "Master the Value & Speed Graph Editors for buttery smooth easing",
      "Craft bespoke 3D kinetic typography and fluid title sequences",
      "Complex planar tracking, rotoscoping, and 3D camera projection",
      "Build modular motion graphics templates (MOGRTs) for rapid commercial use"
    ],
    weeklyBreakdown: [
      { week: "Week 01-02", title: "Graph Editor & Spatial Easing Mastery", description: "The physics of motion, anticipation, overshoot, and organic velocity curves." },
      { week: "Week 03-04", title: "Kinetic Typography & Title Design", description: "Custom character animators, text tracking, 3D text extrusions, lighting setups." },
      { week: "Week 05-06", title: "VFX Compositing & Tracking", description: "Mocha tracking, screen replacements, green screen keying, particle systems." },
      { week: "Week 07-10", title: "Studio Title Sequence & Showreel Project", description: "Full 30-second broadcast package design with custom audio integration." }
    ],
    projectDeliverable: "30s 3D Brand Title Sequence + 5x Custom Commercial MOGRTs",
    rawAssetsIncluded: "Vector design kits, 3D models, custom expression presets, alpha matte packs"
  },
  {
    id: "track-davinci",
    title: "DaVinci Resolve: Hollywood Color Grading",
    software: "DaVinci Resolve Studio",
    level: "All Levels",
    duration: "6 Weeks • Color Science",
    tagline: "Unlock cinematic film looks, accurate skin tones, and HDR color mastery.",
    description: "Transform flat, lifeless camera log into rich, filmic imagery. Understand color spaces (ACES, DWG), node trees, color contrast, matching varied camera sensors, and building distinct creative film looks.",
    color: "border-amber-500/30 hover:border-amber-500",
    accentHex: "#f59e0b",
    highlights: [
      "Demystify Color Management (DaVinci Wide Gamut, ACES, Rec.709)",
      "Build robust, repeatable node trees for commercial and narrative work",
      "Perfect skin tone separation using qualifiers and curve isolation",
      "Recreate Kodak & Fujifilm analog aesthetics with grain and halation"
    ],
    weeklyBreakdown: [
      { week: "Week 01-02", title: "Exposure, Waveforms & Color Science", description: "Reading parade and vectorscopes, primary balance, base contrast curves." },
      { week: "Week 03-04", title: "Secondary Corrections & Skin Science", description: "Hue vs Hue, Hue vs Sat, 3D qualifying masks, tracking power windows." },
      { week: "Week 05-06", title: "Look Design, Film Emulation & Delivery", description: "Split-toning, highlight roll-off, film grain, look LUT creation and final conform." }
    ],
    projectDeliverable: "Color Master Portfolio (3 scenes: Sci-Fi, Luxury Beauty, Cinematic Drama)",
    rawAssetsIncluded: "Arri Alexa ProRes 4444 LogC, RED RAW .R3D, Sony S-Log3 test plates"
  },
  {
    id: "track-capcut",
    title: "Viral Short-Form & CapCut Dominance",
    software: "CapCut Pro & Mobile Workflows",
    level: "Beginner to Pro",
    duration: "4 Weeks • High-Velocity",
    tagline: "Engineered for million-view TikToks, YouTube Shorts, and viral Instagram Reels.",
    description: "Master the psychology of short-form retention. Learn the 3-second hook rule, kinetic subtitles, micro-sound design, fast-paced match cuts, and how to scale content output 10x.",
    color: "border-cyan-500/30 hover:border-cyan-500",
    accentHex: "#00f0ff",
    highlights: [
      "The 3-second visual hook formula that stops infinite scrolling",
      "Dynamic animated captions, emojis, and kinetic pop-up graphics",
      "Rhythmic sound effect stacking that spikes subconscious viewer engagement",
      "High-speed batch editing templates for creator agencies and personal brands"
    ],
    weeklyBreakdown: [
      { week: "Week 01", title: "The Psychology of the First 3 Seconds", description: "Hook mechanics, visual disruption, sound design triggers, framing." },
      { week: "Week 02", title: "Dynamic Captions & Visual Pop-ups", description: "Word-by-word highlight styles, keyframed stickers, zoom transitions." },
      { week: "Week 03", title: "Audio Layering & High-Speed Pacing", description: "Impact SFX, whooshes, background ducking, rhythmic match-cutting." },
      { week: "Week 04", title: "Agency Batch Workflow & Monetization", description: "Creating repeatable templates, client delivery formats, scaling to $5k+/mo." }
    ],
    projectDeliverable: "5x Viral Short-Form Edits with retention graph diagnostics",
    rawAssetsIncluded: "Viral SFX soundboard (1,000+ files), trending fonts & animated overlay pack"
  }
];

export const SHOWCASE_VIDEOS: ShowcaseVideo[] = [
  {
    id: "featured-reel",
    title: "Stars Academy Official Master Showcase Reel",
    creator: "Stars Academy Mentors & Alumni",
    role: "Official Class of 2025 Featured Reel",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    youtubeId: "8n2O1hPe7aQ",
    category: "Motion Design",
    duration: "02:15",
    views: "150K+",
    description: "A showcase of high-octane editing, color grading, 3D motion graphics, and cinematic storytelling produced by Stars Academy students and mentors."
  },
  {
    id: "showcase-1",
    title: "Nike 'Beyond Limits' Spec Commercial",
    creator: "Dawit Kassa (Stars Graduate)",
    role: "Lead Editor & Colorist",
    thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
    category: "Commercial",
    duration: "00:45",
    views: "82K",
    description: "High-speed athlete pacing, speed-ramping, bespoke sound design, and custom metallic title reveals built in Premiere and After Effects."
  },
  {
    id: "showcase-2",
    title: "Cyberpunk 2099 3D Kinetic Title Sequence",
    creator: "Selamawit Tadesse",
    role: "Motion Designer",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    category: "Motion Design",
    duration: "00:30",
    views: "44K",
    description: "Complex 3D camera projection, glowing neon typography, chromatic aberration, and modular grid animations in After Effects."
  },
  {
    id: "showcase-3",
    title: "Desert Odyssey 6K Film Grade",
    creator: "Abenezer Bekele",
    role: "Colorist",
    thumbnail: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    category: "Color Grade",
    duration: "01:10",
    views: "67K",
    description: "Arri LogC footage conformed and graded in DaVinci Resolve using custom split-toning and 35mm film grain emulation."
  },
  {
    id: "showcase-4",
    title: "Viral Creator Growth Pack (1.2M Views)",
    creator: "Yonas Mengistu",
    role: "Short-Form Editor",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    category: "Short-Form Viral",
    duration: "00:58",
    views: "1.2M",
    description: "Hyper-engaging CapCut & Premiere workflow with dynamic kinetic captions, custom sound effects, and fast zooms."
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "yordanos-ayalew",
    name: "Yordanos Ayalew",
    title: "Founder & Lead Creative Director",
    specialty: "Cinematic Storytelling, Commercial Editing & After Effects",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    credits: ["Lead Commercial Editor", "10+ Years Industry Experience", "50M+ Organic Views Directed"],
    bio: "Passionate filmmaker and master editor dedicated to elevating the next generation of creative storytellers with real-world studio standards.",
    socials: {
      telegram: "https://t.me/starsacadamey21",
      youtube: "https://youtube.com/@starsacademy",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    title: "Senior Motion Graphics Director",
    specialty: "3D Animation, Cinema 4D & After Effects",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    credits: ["Broadcast Brand Identity", "Ex-Studio Lead Designer", "Keyframe Physics Specialist"],
    bio: "Obsessed with buttery-smooth easing, typography hierarchy, and turning abstract concepts into magnetic visual animations.",
    socials: {
      youtube: "https://youtube.com",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    title: "Master Colorist & Color Scientist",
    specialty: "DaVinci Resolve Studio, ACES & Film Emulation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    credits: ["Feature Film Colorist", "Certified Blackmagic Design Trainer", "Look LUT Architect"],
    bio: "Teaches the mathematical science and emotional art of color grading, transforming raw sensors into timeless cinematic beauty.",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "kenan-brooks",
    name: "Kenan Brooks",
    title: "Viral Short-Form & Sound Design Architect",
    specialty: "CapCut Pro, Retention Editing & Audio Mixing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    credits: ["Editor for Top 1% YouTubers", "Retention Curve Consultant", "Audio SFX Master"],
    bio: "Breaks down the hidden psychological triggers that keep viewers glued to screens and teaches how to monetize short-form editing.",
    socials: {
      youtube: "https://youtube.com",
      telegram: "https://t.me/starsacadamey21"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Elias Worku",
    role: "Full-Time Commercial Editor",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
    course: "Premiere Pro & After Effects Masterclass",
    rating: 5,
    quote: "Before Stars Academy, I was just putting clips together on random tracks. Learning the Stars pacing methodology and getting 1-on-1 video feedback on every cut doubled my client rates in 3 months.",
    outcome: "Landed $4,500/month freelance contract with an international creative agency"
  },
  {
    id: "test-2",
    name: "Blen Haile",
    role: "Lead Motion Designer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    course: "Kinetic Motion Design Track",
    rating: 5,
    quote: "The graph editor used to terrify me. Marcus broke down keyframe physics in a way that clicked instantly. My motion graphics look like high-end broadcast commercials now.",
    outcome: "Hired as Motion Lead at a premier digital media studio"
  },
  {
    id: "test-3",
    name: "Natnael Tessema",
    role: "Freelance Colorist & Filmmaker",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    course: "DaVinci Resolve Color Science Track",
    rating: 5,
    quote: "I thought color grading was just slapping on a LUT. Elena's node workflow completely transformed how I handle skin tones and contrast. Clients immediately noticed the difference.",
    outcome: "Graded 12 national TV commercials and 2 music videos this year"
  }
];

export const STATS: StatItem[] = [
  {
    id: "students",
    value: 4850,
    suffix: "+",
    label: "Editors & Designers Trained",
    subtext: "From complete beginners to high-earning studio professionals"
  },
  {
    id: "critiques",
    value: 15400,
    suffix: "+",
    label: "1-on-1 Video Critiques Delivered",
    subtext: "Every frame analyzed by active industry directors"
  },
  {
    id: "countries",
    value: 38,
    suffix: "",
    label: "Countries Reached",
    subtext: "A truly global community of passionate visual storytellers"
  },
  {
    id: "views",
    value: 120,
    suffix: "M+",
    label: "Views Generated on Student Edits",
    subtext: "Real commercial and creator content performing worldwide"
  }
];

export const ACADEMY_LIFE_MOMENTS = [
  {
    title: "Weekly Live Project Breakdown",
    category: "Masterclass",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    description: "Live screen shares analyzing student timelines frame-by-frame."
  },
  {
    title: "Studio Color Grading Suite",
    category: "Hands-on Lab",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    description: "Calibrated OLED monitoring and DaVinci Resolve color panels."
  },
  {
    title: "Collaborative Editing Lounge",
    category: "Community",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    description: "Peer feedback, asset sharing, and late-night render marathons."
  },
  {
    title: "On-Set Raw Footage Ingest",
    category: "Production",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    description: "Filming real commercial plates exclusively for student training."
  }
];

export const FAQS = [
  {
    q: "Do I need previous video editing experience to join?",
    a: "No! We have dedicated tracks ranging from complete beginners (starting from software basics and storytelling fundamentals) all the way to advanced masterclasses for experienced editors looking to master complex motion design and DaVinci color grading."
  },
  {
    q: "What makes Stars Academy different from YouTube tutorials?",
    a: "YouTube gives you scattered tips without structure. At Stars Academy, you get a structured curriculum, real RAW 6K studio footage to practice on, client-style briefs, and most importantly: personalized 1-on-1 video critiques from working industry mentors on every single cut you export."
  },
  {
    q: "How does the 1-on-1 critique system work?",
    a: "When you complete a project assignment, an instructor records a dedicated screen-capture video walking through your timeline, highlighting your pacing, audio balance, color adjustments, and keyframes with actionable timestamps."
  },
  {
    q: "How do I enroll or speak to an admissions advisor?",
    a: "You can start learning immediately via our online course platform, or talk directly with our admissions team on Telegram at @starsacadamey21 or via phone/WhatsApp at +251 96 787 6067."
  }
];
