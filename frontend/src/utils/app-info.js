import kids1 from "../assets/kids-1.jpg";
import kids2 from "../assets/kids-2.jpg";
import kids3 from "../assets/kids-3.jpg";

export const ngoName = "छाया";

export const links = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Volunteer", path: "/volunteer" },
  { id: 3, title: "About Us", path: "/about" },
];

export const hero = {
  headline: "Your support can rewrite their story",
  subHeadline:
    "We're a youth-led movement committed to making quality education a reality for every child in undeserved communities.",
  ctaButtons: {
    primary: "Give the Gift of Education",
    secondary: "Join Our Movement",
  },
};

export const aboutUs = [
  {
    id: 1,
    headline: "Rewriting the Narrative of Education",
    body: "We are passionately dedicated to a new narrative for education in India, one that champions the inherent potential within every child. Our work is not merely about imparting knowledge; it's about fundamentally transforming the life stories of children in underserved communities. We believe that education is the most powerful tool for leveling the playing field, creating pathways to opportunities that were previously unattainable. Our commitment is to build a foundation where every child is empowered to dream big and forge a future defined by success and fulfillment. This is a story of collective hope, unwavering resilience, and the life-changing power of a single chance.",
    img: kids3,
  },
  {
    id: 2,
    headline: "A Comprehensive Approach to Empowerment",
    body: "Our dedication extends well beyond academics. We champion a holistic approach to empowerment, one that nurtures the complete child—mind, body, and spirit. Our programs are carefully designed to bridge educational gaps while also addressing the social and emotional well-being of the children we support. We provide crucial mentorship, practical life skills training, and creative outlets to help them build confidence, uncover their talents, and develop a strong sense of self-worth. We've seen firsthand the incredible transformation that happens when a child feels seen, heard, and valued. These children are not just students; they are future leaders, innovators, and changemakers. By investing in their holistic development, we are preparing them not just for exams, but for life itself.",
    img: kids1,
  },
  {
    id: 3,
    headline: "Our Promise of a Brighter Tomorrow",
    body: "Our work is driven by the promise of a brighter future for India's children. We are fully aware of the significant challenges ahead, yet we are filled with unshakeable optimism. We find our inspiration in the glimmer of hope in a child’s eyes as they grasp a new concept, and in the infectious energy of a community coming together for its children. These moments are our motivation and our constant reminder of why this work is so vital. We are committed to building a legacy of hope and opportunity—a world where a child's potential is never limited by their background. We firmly believe that by investing in education today, we are investing in a more just, equitable, and prosperous India for all of us tomorrow.",
    img: kids2,
  },
];

export const introduction = {
  heading: "More than an NGO, we're a movement.",
  body: ` At ${ngoName}, we believe every child deserves a chance to learn, dream and succeed. Led by a passionate team of young changemakers, we're building a new narrative for education in India's underserved communities\u2013one child, one class, one community at a time.`,
};

export const impact = {
  heading: "The Numbers Tell a Story of Hope.",
  body: "Every number here represents a child who now has a chance at a brighter future. Your support makes this possible.",
  metric: [
    { id: 1, count: 20000, impact: "Children's Lives Transformed" },
    { id: 2, count: 48, impact: "Communities Empowered" },
    { id: 3, count: 14800, impact: "Dreamer's in Our Classrooms" },
  ],
};

export const initiative = {
  heading: "How We're Making a Difference",
  body: " We create an ecosystem of support designed to empower children both inside and outside the classroom",
  initiatives: [
    {
      id: 1,
      title: "The Classroom Without Walls: Community Learning Centres.",
      description:
        "We create safe, vibrant learning hubs right in the heart of underserved communities. Here, children find a dedicated space for free tutoring, educational resources, and a supportive family of mentors.",
    },
    {
      id: 2,
      title: "Beyond The Books: Equipping them for Tomorrow",
      description:
        "Our Skill development workshops go beyond traditional academics, teaching essential skills like digital literacy and vocational training to give children the tools they need to thrive in the modern world.",
    },
    {
      id: 3,
      title: "Guided By Passion: Our Mentorship Program",
      description:
        "We connect our students with passionate, young mentors who act as role models, cheerleaders and guides. This is more than a program\u2013it's a bond  that builds confidence, inspires ambitions and lasts a lifetime.",
    },
  ],
};

export const callToAction = {
  heading: "Your Contribution is a Beacon of Hope.",
  body: "Every action; big or small, helps us light te path for a child's education. Choose how you want to make an impact.",
  items: [
    {
      id: 1,
      title: "Donate: Give the Gift of Education",
      title_sm: "Give the Gift of Education",
      buttonText: "Sponsor a Child's Future",
      buttonText_sm: "Donate",
    },
    {
      id: 2,
      title: "Volunteer: Become a Mentor, Be a Hero",
      title_sm: "Become a Mentor, Be a Hero",
      buttonText: "Join Our Youth-Led Team",
      buttonText_sm: "Volunteer",
    },
    {
      id: 3,
      title: "Partner: Collaborate for Greater Impact",
      title_sm: "Collaborate for Greater Impact",
      buttonText: "Explore Partnerships",
      buttonText_sm: "Partner",
    },
  ],
};
