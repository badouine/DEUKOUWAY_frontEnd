import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hotel = () => {
  const photos = [
    {
      scr: "https://t-cf.bstatic.com/xdata/images/hotel/square600/49404416.webp?k=8db78f49ede24106b1749bcd17d9f27e6ac83972d4ad8e6ce756b345e6fd6903&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/266406936.webp?k=f1e1c16d147bad196f283284c1c27144d0827afc8dc9b1a2d94a0c992e0843c6&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/184901749.webp?k=51e159640d40f8a90018a8b180a187cf691479727bcd48f8f835a0c26098bcbd&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/26357138.webp?k=f3958337922942720adb1899542d2e456287ffd19aae6c3ee51e217d2d21af0a&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/148916506.webp?k=6e8be975858603509b614553b704c48d4ea79aa2abfc8bdab142c8c059b2406a&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/5465222.webp?k=950669f27fb32f2e3b897b57e8cffc2ad6c5d236b2e760b63e67a9583afe10da&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/265102710.webp?k=0dbd7460e3018107ecaa3530aec285193b317862228220f21b0060938727ec33&o=&s=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="hotelTitle">
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Elton St 125 New York</span>
            </div>
            <span className="hotelDistance">
              Excellent location ~ 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {photos.map((photo) => (
                <div className="hotelImgWrapper">
                  <img src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
