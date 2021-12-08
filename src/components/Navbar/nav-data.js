import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Contact from '../pages/Contact';

export const NavItems = [
  {
    title: "Home",
    url: "/",
    cName: "uk-parent",
    component: <Home />,
  },
  {
    title: "Gallery",
    url: "gallery",
    cName: "uk-parent",
    component: <Gallery />,
  },
  {
    title: "Shop",
    url: "shop",
    cName: "uk-parent",
    component: <Shop />,
  },
  {
    title: "About",
    url: "about",
    cName: "uk-parent",
    component: <About />,
  },
  {
    title: "Contact",
    url: "contact",
    cName: "uk-parent",
    component: <Contact />,
  },
];
