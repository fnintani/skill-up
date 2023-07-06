import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/lesson-1.jpg";
import courses2 from "./assets/lesson-2.jpg";
import courses3 from "./assets/lesson-3.jpg";
import courses4 from "./assets/lesson-4.jpg";

import logo1 from "./assets/itb.png";
import logo2 from "./assets/ui.png";
import logo3 from "./assets/its.png";
import logo4 from "./assets/unpad.png";
import logo5 from "./assets/ugm.png";
import logo6 from "./assets/uns.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "teacher",
    link: "Teacher",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Bahasa",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Komputer",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Akuntansi",
  },
  {
    id: 4,
    icon: <MdOutlineScience />,
    category: "IPA",
  },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Bahasa",
    title: "Belajar Bahasa Indonesia dan Inggris",
    rating: 4.9,
    participants: 500,
    price: 100,
  },
  {
    id: 2,
    image: courses4,
    category: "Komputer",
    title: "Belajar ilmu dasar komputer",
    rating: 4.8,
    participants: 700,
    price: 50,
  },
  {
    id: 3,
    image: courses3,
    category: "Akuntansi",
    title: "Belajar akuntansi untuk pemula dan menengah",
    rating: 4.9,
    participants: 300,
    price: 100,
  },
  {
    id: 4,
    image: courses2,
    category: "Sejarah",
    title: "Belajar sejarah dunia lebih jauh",
    rating: 4.7,
    participants: 600,
    price: 50,
  },
  {
    id: 5,
    image: courses1,
    category: "IPA",
    title: "Belajar fisika untuk pemula",
    rating: 4.9,
    participants: 500,
    price: 50,
  },
  {
    id: 6,
    image: courses1,
    category: "Bahasa",
    title: "Belajar bahasa Jepang untuk pemula",
    rating: 4.9,
    participants: 500,
    price: 75,
  },
  {
    id: 7,
    image: courses2,
    category: "IPA",
    title: "Belajar Kimia untuk pemula",
    rating: 4.9,
    participants: 500,
    price: 75,
  },
  {
    id: 8,
    image: courses4,
    category: "Komputer",
    title: "Belajar membuat aplikasi dengan JavaScript",
    rating: 4.9,
    participants: 500,
    price: 100,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "Apa itu Skill Up?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi architecto magni blanditiis excepturi molestiae soluta alias molestias repellendus numquam. Nisi id quaerat hic animi, sit dolorum. Asperiores, sint deleniti!"
  },
  {
    id: 2,
    title: "Apa yang bisa dipelajari di Skill Up?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi architecto magni blanditiis excepturi molestiae soluta alias molestias repellendus numquam. sint deleniti!"
  },
  {
    id: 3,
    title: "Bagaimana cara saya bergabung?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi architecto magni blanditiis excepturi molestiae soluta alias molestias repellendus numqua Asperiores, sint deleniti!"
  },
  {
    id: 4,
    title: "Apa keuntungan menjadi member Skill up?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi architecto magni blanditiis excepturi molestiae soluta alias molestias repellendus numquam. Nisi id quaerat hic animi, sit dolorum. Asperiores, sint deleniti!Nisi id quaerat hic animi, sit dolorum. Asperiores "
  },
];
