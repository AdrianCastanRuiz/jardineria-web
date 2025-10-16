import poda1 from "@assets/poda-tala/poda1.jpg";
import jardin3 from "@assets/mantenimiento/jardin3.png";
import jardin4 from "@assets/mantenimiento/jardin4.jpg";

interface Service {
  img: string;
  titleKey: string;
  descKey: string;
  path: string;
}

const SERVICES: Service[] = [
  {
    img: poda1,
    titleKey: "services1.title",
    descKey: "services1.desc",
    path: "/serveis/poda-tala",
  },
  {
    img: jardin3,
    titleKey: "services2.title",
    descKey: "services2.desc",
    path: "/serveis/manteniment",
  },
  {
    img: jardin4,
    titleKey: "services3.title",
    descKey: "services3.desc",
    path: "/serveis/diseny",
  },
  {
    img: jardin4,
    titleKey: "services4.title",
    descKey: "services4.desc",
    path: "/serveis/diseny",
  },
  {
    img: jardin4,
    titleKey: "services5.title",
    descKey: "services5.desc",
    path: "/serveis/diseny",
  },
];

export default SERVICES;
