/*
====================================================
        EDIT YOUR WEBSITE CONTENT HERE
====================================================

You should only need to edit this file.

Change:
- Names and anniversary date
- Descriptions and section titles
- Memories and their photos
- Gallery photos and alt text
- All 20 emotions and their messages
- The final surprise and closing message

Put your photos inside public/images/ and refer to them as
"/images/your-photo.jpg". Missing photos show a graceful placeholder.

====================================================
*/

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type Memory = {
  date: string;
  title: string;
  description: string;
  image?: string;
};

export type Emotion = {
  name: string;
  emoji: string;
  message: string;
};

export const siteContent = {
  names: {
    girlfriend: 'HER NAME',
    boyfriend: 'YOUR NAME',
  },
  anniversary: {
    number: 2,
    date: 'YOUR ANNIVERSARY DATE',
  },
  navigation: {
    home: 'Home',
    story: 'Our story',
    memories: 'Memories',
    photos: 'Photos',
    feelings: 'Feelings',
    final: 'For you',
  },
  hero: {
    eyebrow: 'A little celebration of us',
    title: 'Two Years\nWith You',
    subtitle: 'A little corner of the internet that belongs to us.',
    scrollLabel: 'Scroll to begin our story',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=2200&q=85',
    imageAlt: 'A couple sharing a quiet, close moment together',
  },
  story: {
    eyebrow: 'A note for you',
    title: 'For you, always.',
    description:
      'Somehow, the ordinary days became my favourite ones. Two years of little moments, big laughs, quiet comfort, and choosing each other again and again. Thank you for making life feel softer, brighter, and more like home. This is just a small reminder of how much I love the life we are making together.',
    signature: 'All my love,',
  },
  gallery: {
    eyebrow: 'Little moments, kept close',
    title: 'A life in little frames.',
    description: 'The days I want to keep coming back to.',
    photos: [
      { src: '', alt: 'A favourite memory together', caption: 'A day I keep close' },
      { src: '', alt: 'One of our little adventures', caption: 'Somewhere, with you' },
      { src: '', alt: 'A moment that still makes me smile', caption: 'My favourite kind of ordinary' },
      { src: '', alt: 'A lovely moment from our story', caption: 'Just us' },
    ] satisfies GalleryPhoto[],
    placeholder: 'Your photo will live here',
  },
  memories: {
    eyebrow: 'The days that made us',
    title: 'Our memories.',
    description: 'A few little chapters I never want to forget.',
    entries: [
      {
        date: 'THE BEGINNING',
        title: 'When it became us',
        description: 'The first page of my favourite story. I had no idea how much I would come to love all the little things that make you, you.',
      },
      {
        date: 'A DAY TO REMEMBER',
        title: 'Our first little adventure',
        description: 'New places are lovely, but they are better when I get to discover them beside you.',
        image: '',
      },
      {
        date: 'SOMEWHERE ALONG THE WAY',
        title: 'The ordinary, extraordinary days',
        description: 'The cosy nights, the silly jokes, the comfortable silences. Somehow those became the moments I treasure most.',
      },
      {
        date: 'TWO YEARS IN',
        title: 'Still choosing you',
        description: 'Two years down, and I still get that little feeling when I think about all the tomorrows we have ahead.',
      },
    ] satisfies Memory[],
  },
  emotions: {
    eyebrow: 'A little note, whenever you need one',
    title: 'How are you feeling?',
    description: 'Pick whatever feels closest. I have something for you.',
    items: [
      { name: 'Happy', emoji: '☀️', message: 'Seeing you happy makes my whole world brighter. I hope this feeling stays with you all day.' },
      { name: 'Sad', emoji: '🌧️', message: 'I am sorry today feels heavy. You do not have to make it better right now. I am right here, and I love you through every kind of day.' },
      { name: 'Loved', emoji: '♡', message: 'You are loved in all the little moments, in every quiet thought, and in every version of tomorrow. Never forget that.' },
      { name: 'Lonely', emoji: '☾', message: 'Even when we are apart, you are never far from my heart. Imagine me right there beside you, holding your hand.' },
      { name: 'Excited', emoji: '✳', message: 'I love that bright spark in you. Tell me everything—I want to hear every detail and celebrate right alongside you.' },
      { name: 'Anxious', emoji: '〰', message: 'Take one slow breath, then another. You do not have to figure everything out at once. I believe in you, and I am here.' },
      { name: 'Tired', emoji: '☁', message: 'You have done enough for today, my love. Let the rest wait. I hope you can get cosy and give yourself the gentleness you deserve.' },
      { name: 'Angry', emoji: '⚡', message: 'It is okay to feel what you feel. You do not need to shrink it or explain it away. I am here when you want me.' },
      { name: 'Stressed', emoji: '∿', message: 'Pause for a moment, sweetheart. One thing at a time—you do not have to carry the whole world by yourself.' },
      { name: 'Proud', emoji: '✦', message: 'You should be proud. I see how much heart you put into everything, and I am so proud of the person you are.' },
      { name: 'Grateful', emoji: '❋', message: 'I am grateful for you too—for your laugh, your kindness, and all the little ways you make my life feel like mine.' },
      { name: 'Confused', emoji: '☼', message: 'You do not need every answer right now. We can take it one step at a time, together.' },
      { name: 'Playful', emoji: '✴', message: 'I like this side of you. Save a little of that playful energy for me—I owe you at least one ridiculous dance.' },
      { name: 'Romantic', emoji: '♡', message: 'Come a little closer. If I could be anywhere right now, it would be right next to you.' },
      { name: 'Nervous', emoji: '⟡', message: 'Whatever happens, you are capable of meeting it. And afterwards, I will be right here, ready to hear all about it.' },
      { name: 'Overwhelmed', emoji: '≈', message: 'You can set some things down. You are allowed to rest, ask for help, and take up space. I have got you.' },
      { name: 'Peaceful', emoji: '☾', message: 'Stay in this soft little moment as long as you like. I hope you know how much peace your presence brings to me, too.' },
      { name: 'Motivated', emoji: '↑', message: 'Go make it happen, love. I am cheering for you—always—but remember that you are enough even before you do.' },
      { name: 'Missing Me', emoji: '⌂', message: 'I miss you too. Keep this little note close until I can give you a proper hug in person.' },
      { name: 'Needing a Hug', emoji: '☁', message: 'Consider this the biggest, warmest, stay-here-as-long-as-you-need hug. I love you so much.' },
    ] satisfies Emotion[],
  },
  surprise: {
    button: 'One more thing…',
    eyebrow: 'Just between us',
    title: 'My favourite place\nwill always be beside you.',
    message: 'Thank you for these two beautiful years. I would find you in every lifetime, in every version of the story. I love you—more than this little page could ever say.',
    closeLabel: 'Keep this close',
  },
  closing: {
    eyebrow: 'To my favourite person',
    title: 'Two years down.',
    secondLine: 'Forever to go.',
    loveLine: 'I love you,',
    signOff: 'Here is to every chapter still to come.',
    dateLabel: 'Celebrating us',
  },
} as const;
