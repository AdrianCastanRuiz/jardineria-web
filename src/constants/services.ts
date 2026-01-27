import poda1 from "@assets/poda-tala/poda1.jpg";
import jardin3 from "@assets/mantenimiento/jardin3.png";
import limpieza1 from "@assets/limpieza/limpieza1.jpg";
import riego1 from "@assets/riego/riego1.jpg"
import piscina1 from "@assets/picinas/picina1.jpg"

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
    img: limpieza1,
    titleKey: "services3.title",
    descKey: "services3.desc",
    path: "/serveis/neteja",
  },
  {
    img: riego1,
    titleKey: "services4.title",
    descKey: "services4.desc",
    path: "/serveis/reg",
  },
  {
    img: piscina1,
    titleKey: "services5.title",
    descKey: "services5.desc",
    path: "/serveis/piscines",
  },
];

export default SERVICES;
