/**
 * wedding-data.js — Customer-facing editable data layer for ghibli-portrait
 * Supports dynamic bilingual display: English and Telugu.
 */

(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var savedLang = (function () {
    try {
      return localStorage.getItem("supriya_sarath_lang");
    } catch (e) {
      return null;
    }
  })();

  var activeLang = urlParams.get("lang") || savedLang || "en";
  window.CURRENT_INVITATION_LANG = activeLang;

  // Shared assets
  var sharedHero = {
    childhoodBride: "./editable/assets/childhood-bride.png",
    childhoodGroom: "./editable/assets/childhood-groom.png",
    portraitBride: "./editable/assets/portrait-bride.png",
    portraitGroom: "./editable/assets/portrait-groom.png",
    bodyBride: "./editable/assets/body-bride.png",
    bodyGroom: "./editable/assets/body-groom.png",
  };

  var sharedGallery = [
    {
      src: "./editable/assets/gallery-1.png",
      alt: "Hand in hand along the forest trail",
    },
    {
      src: "./editable/assets/gallery-2.png",
      alt: "Embracing amidst the lush tea hills",
    },
    {
      src: "./editable/assets/gallery-3.png",
      alt: "Adventurous moments together on an elephant ride",
    },
    {
      src: "./editable/assets/gallery-4.png",
      alt: "Standing hand in hand before the grand church",
    },
    {
      src: "./editable/assets/gallery-5.png",
      alt: "A tender moment together with the promise of forever",
    },
    {
      src: "./editable/assets/gallery-6.png",
      alt: "Joy, laughter, and open arms celebrating our journey",
    },
  ];

  var sharedBgm = {
    src: "./editable/assets/bgm.mp3",
    title: "Mangalame Yesunaku (Instrumental)",
    volume: 0.7,
  };

  // English Configuration
  var DATA_EN = {
    verse: {
      reference: "MARK 10:9",
      text: "“Therefore what God has joined together, let no one separate.”",
    },
    saveTheDate: "Save the Date",

    couple: {
      bride: "Supriya",
      groom: "Sarath",
      brideShort: "Supriya",
      groomShort: "Sarath",
    },

    weddingDate: "2026-11-30T10:00:00+05:30",
    displayDate: "Monday, November 30th, 2026",
    tagline: "Two souls, one beautiful journey.\nForever begins now.",

    hero: sharedHero,

    storyEyebrow: "Wedding Events",
    storyTitle: "The Road to Forever",

    story: [
      {
        title: "PELLIKODUKU",
        date: "25th November 2026",
        text: "Location: At Our Residence",
      },
      {
        title: "HALDI",
        date: "27th November 2026",
        text: "Time: From Morning\nLocation: Horizontal Villas, Rjy",
      },
      {
        title: "SANGEETH",
        date: "27th November 2026",
        text: "Time: From Evening\nLocation: Horizontal Villas, Rjy",
      },
      {
        title: "WEDDING",
        date: "30th November 2026",
        text: "Time: Starts from 10:00 AM\nLocation: Surya Gardens, Rajamahendravaram",
      },
    ],

    countdownEyebrow: "Counting the moments",
    countdownTitle: "Until we say I do",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",

    detailsEyebrow: "Wedding Details",
    detailsTitle: "When & where",
    details: {
      ceremony: {
        title: "The Wedding Ceremony",
        venue: "Surya Gardens",
        time: "Starts from 10:00 AM",
        note: "We warmly invite you to join us and shower your blessings",
      },
      dressCode: "Traditional / Festive Formal",
    },

    venueEyebrow: "The Venue",
    venueTitle: "Find your way to us",
    venue: {
      name: "Surya Gardens",
      address: "85-37-8, Jawaharlal Nehru Rd, Gandhipuram, Rajamahendravaram, Andhra Pradesh 533103",
      mapQuery: "Surya Gardens, Gandhipuram, Rajamahendravaram",
    },
    openInMaps: "Open in Maps",

    galleryEyebrow: "Gallery",
    galleryTitle: "Moments we keep",
    gallery: sharedGallery,

    familyEyebrow: "With love, our families",
    familyTitle: "The ones who raised us",
    families: {
      bride: {
        label: "The Bride's Family",
        title: "Supriya's Family",
        photo: "./editable/assets/family-bride.png",
        members: [
          { name: "Family of Supriya", relation: "Bride's Family" },
          { name: "With Best Compliments", relation: "Near & Dear" },
        ],
      },
      groom: {
        label: "The Groom's Family",
        title: "Sarath's Family",
        photo: "./editable/assets/family-groom.png",
        members: [
          { name: "Family of Sarath", relation: "Groom's Family" },
          { name: "With Best Compliments", relation: "Near & Dear" },
        ],
      },
    },

    calendarEyebrow: "Save the moment",
    calendarHeading: "Add to calendar",
    googleCalLabel: "Google Calendar",
    appleCalLabel: "Apple Calendar",
    calendar: {
      title: "Supriya & Sarath — Wedding",
      description: "Wedding ceremony of Supriya & Sarath at Surya Gardens.",
      durationHours: 3,
    },

    footer: {
      thanks: "Thank you for celebrating with us",
      copyright: "© 2026 Supriya & Sarath · Handcrafted with love by InviteStory",
    },

    bgm: sharedBgm,
  };

  // Telugu Configuration
  var DATA_TE = {
    verse: {
      reference: "మార్కు 10:9",
      text: "“కాబట్టి దేవుడు జతపరచినవారిని మనుష్యుడు వేరుపరచకూడదు.”",
    },
    saveTheDate: "శుభ వివాహం",

    couple: {
      bride: "సుప్రియ",
      groom: "శరత్",
      brideShort: "సుప్రియ",
      groomShort: "శరత్",
    },

    weddingDate: "2026-11-30T10:00:00+05:30",
    displayDate: "సోమవారం, 30 నవంబర్ 2026",
    tagline: "రెండు మనసులు, ఒకే పవిత్ర బంధం.\nశాశ్వతమైన నూతన జీవన ప్రయాణం.",

    hero: sharedHero,

    storyEyebrow: "వివాహ వేడుకలు",
    storyTitle: "సంతోషకరమైన శుభకార్యాలు",

    story: [
      {
        title: "పెళ్లికొడుకు",
        date: "25 నవంబర్ 2026",
        text: "వేదిక: మా నివాసంలో",
      },
      {
        title: "హల్దీ వేడుక",
        date: "27 నవంబర్ 2026",
        text: "సమయం: ఉదయం నుండి\nవేదిక: హారిజాంటల్ విల్లాస్, రాజమహేంద్రవరం",
      },
      {
        title: "సంగీత్",
        date: "27 నవంబర్ 2026",
        text: "సమయం: సాయంత్రం నుండి\nవేదిక: హారిజాంటల్ విల్లాస్, రాజమహేంద్రవరం",
      },
      {
        title: "పరిశుద్ధ వివాహం",
        date: "30 నవంబర్ 2026",
        text: "సమయం: ఉదయం 10:00 గంటల నుండి\nవేదిక: సూర్య గార్డెన్స్, రాజమహేంద్రవరం",
      },
    ],

    countdownEyebrow: "ముహూర్త సమయం",
    countdownTitle: "శుభ ముహూర్తానికి ఇంకా...",
    countdownDays: "రోజులు",
    countdownHours: "గంటలు",
    countdownMinutes: "నిమిషాలు",
    countdownSeconds: "సెకన్లు",

    detailsEyebrow: "వివాహ వివరాలు",
    detailsTitle: "సమయం & వేదిక",
    details: {
      ceremony: {
        title: "పరిశుద్ధ వివాహ మహోత్సవం",
        venue: "సూర్య గార్డెన్స్",
        time: "ఉదయం 10:00 గంటల నుండి",
        note: "మా వివాహ వేడుకకు విచ్చేసి నూతన వధూవరులను ఆశీర్వదించగలరని మనస్ఫూర్తిగా కోరుచున్నాము",
      },
      dressCode: "సంప్రదాయ వస్త్రధారణ",
    },

    venueEyebrow: "కళ్యాణ వేదిక",
    venueTitle: "దారి వివరాలు",
    venue: {
      name: "సూర్య గార్డెన్స్",
      address: "85-37-8, జవహర్‌లాల్ నెహ్రూ రోడ్, గాంధీపురం, రాజమహేంద్రవరం, ఆంధ్రప్రదేశ్ 533103",
      mapQuery: "Surya Gardens, Gandhipuram, Rajamahendravaram",
    },
    openInMaps: "మ్యాప్స్‌లో చూడండి",

    galleryEyebrow: "ఫోటో గ్యాలరీ",
    galleryTitle: "మధురమైన జ్ఞాపకాలు",
    gallery: sharedGallery,

    familyEyebrow: "కుటుంబ సభ్యుల ప్రేమతో",
    familyTitle: "మా పెద్దల ఆశీస్సులు",
    families: {
      bride: {
        label: "వధువు కుటుంబం",
        title: "సుప్రియ కుటుంబం",
        photo: "./editable/assets/family-bride.png",
        members: [
          { name: "సుప్రియ కుటుంబ సభ్యులు", relation: "వధువు కుటుంబం" },
          { name: "ఆత్మీయులు & బంధుమిత్రులు", relation: "సదా మీ ఆశీస్సులతో" },
        ],
      },
      groom: {
        label: "వరుని కుటుంబం",
        title: "శరత్ కుటుంబం",
        photo: "./editable/assets/family-groom.png",
        members: [
          { name: "శరత్ కుటుంబ సభ్యులు", relation: "వరుని కుటుంబం" },
          { name: "ఆత్మీయులు & బంధుమిత్రులు", relation: "సదా మీ ఆశీస్సులతో" },
        ],
      },
    },

    calendarEyebrow: "తేదీని గుర్తుంచుకోండి",
    calendarHeading: "క్యాలెండర్‌లో జోడించండి",
    googleCalLabel: "గూగుల్ క్యాలెండర్",
    appleCalLabel: "యాపిల్ క్యాలెండర్",
    calendar: {
      title: "సుప్రియ & శరత్ — వివాహం",
      description: "సూర్య గార్డెన్స్ లో సుప్రియ & శరత్ వివాహ వేడుక.",
      durationHours: 3,
    },

    footer: {
      thanks: "మా ఆనందంలో పాలుపంచుకున్నందుకు ధన్యవాదాలు",
      copyright: "© 2026 సుప్రియ & శరత్ · హ్యాండ్‌క్రాఫ్టెడ్ విత్ లవ్ బై InviteStory",
    },

    bgm: sharedBgm,
  };

  window.WEDDING_DATA = activeLang === "te" ? DATA_TE : DATA_EN;
  window.WEDDING_DATA_ALL = { en: DATA_EN, te: DATA_TE };
})();
