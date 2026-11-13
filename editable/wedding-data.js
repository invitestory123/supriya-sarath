/**
 * wedding-data.js — Customer-facing editable data layer for ghibli-portrait
 * Edit this file to update couple names, wedding date, story chapters, venue, family, and images.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Supriya",
    groom: "Sarath",
    brideShort: "Supriya",
    groomShort: "Sarath",
  },

  // Drives countdown timer, calendar export, and date displays
  weddingDate: "2026-11-30T10:00:00+05:30",
  displayDate: "Monday, November 30th, 2026",
  tagline: "Two souls, one beautiful journey.\nForever begins now.",

  hero: {
    childhoodBride: "./editable/assets/childhood-bride.png",
    childhoodGroom: "./editable/assets/childhood-groom.png",
    portraitBride: "./editable/assets/portrait-bride.png",
    portraitGroom: "./editable/assets/portrait-groom.png",
    bodyBride: "./editable/assets/body-bride.png",
    bodyGroom: "./editable/assets/body-groom.png",
  },

  story: [
    {
      title: "First Meeting",
      date: "The Beginning",
      text: "Two souls crossed paths, and what began as a simple conversation quietly turned into something truly special. Neither of us knew then that we had just found our forever.",
    },
    {
      title: "Growing Together",
      date: "The Journey",
      text: "Years of shared laughter, quiet understandings, endless conversations, and cheering for each other through every high and low. A bond that easily became home.",
    },
    {
      title: "The Proposal",
      date: "A Promise Made",
      text: "With hearts full of love and faith in tomorrow, Sarath asked the question that would change everything — and Supriya said yes with all her heart.",
    },
    {
      title: "The Wedding",
      date: "November 2026",
      text: "And now, the most beautiful chapter of our lives begins. We would be honoured to have you with us to celebrate our wedding day and bless our union.",
    },
  ],

  details: {
    ceremony: {
      title: "The Wedding Ceremony",
      venue: "Surya Gardens",
      time: "Starts from 10:00 AM",
      note: "We warmly invite you to join us and shower your blessings",
    },
    dressCode: "Traditional / Festive Formal",
  },

  venue: {
    name: "Surya Gardens",
    address: "85-37-8, Jawaharlal Nehru Rd, Gandhipuram, Rajamahendravaram, Andhra Pradesh 533103",
    mapQuery: "Surya Gardens, Gandhipuram, Rajamahendravaram",
  },

  gallery: [
    {
      src: "./editable/assets/gallery-1.png",
      alt: "Golden hour walk through the garden",
    },
    {
      src: "./editable/assets/gallery-2.png",
      alt: "Dancing under the string lights",
    },
    {
      src: "./editable/assets/gallery-3.png",
      alt: "The ring — a promise for forever",
    },
    {
      src: "./editable/assets/gallery-4.png",
      alt: "Quiet moments together",
    },
    {
      src: "./editable/assets/gallery-5.png",
      alt: "Celebrating love and togetherness",
    },
    {
      src: "./editable/assets/gallery-6.png",
      alt: "Sparkler dreams and smiles",
    },
  ],

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

  calendar: {
    title: "Supriya & Sarath — Wedding",
    description: "Wedding celebration of Supriya & Sarath at Surya Gardens.",
    durationHours: 3,
  },

  footer: {
    thanks: "Thank you for celebrating with us",
    copyright: "© 2026 Supriya & Sarath · Handcrafted with love by InviteStory",
  },

  bgm: {
    src: "./editable/assets/bgm.mp3",
    title: "Mangalame Yesunaku (Instrumental)",
    volume: 0.7,
  },
};
