import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);

  const [isHovered2, setIsHovered2] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const [isHovered3, setIsHovered3] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const handleClick1 = () => {
    setIsClicked1(!isClicked1);
  };
  const handleClick2 = () => {
    setIsClicked2(!isClicked2);
  };
  const handleClick3 = () => {
    setIsClicked3(!isClicked3);
  };

  return (
    <div className=" bg-black h-screen flex flex-col justify-center opacity-100">
      <Link to="/home">
        <svg
          fill="#ffffff"
          viewBox="-1.27 0 30.066 30.066"
          id="_01_-_Home_Button"
          data-name="01 - Home Button"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          width="52"
          height="25"
          className="mt-[-11rem]"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="_01_-_Home_Button-2"
              data-name="01 - Home Button"
              d="M29.759,9.912a3,3,0,0,0-1.543-2.623L17.457,1.312a3,3,0,0,0-2.914,0L3.784,7.289A3,3,0,0,0,2.241,9.912V28a3,3,0,0,0,3,3h6.5a1,1,0,0,0,1-1V24.912a1,1,0,0,1,1-1h4.51a1,1,0,0,1,1,1V30a1,1,0,0,0,1,1h6.5a3,3,0,0,0,3-3V9.912Zm-2,0V28a1,1,0,0,1-1,1h-5.5V24.912a3,3,0,0,0-3-3h-4.51a3,3,0,0,0-3,3V29h-5.5a1,1,0,0,1-1-1V9.912a1,1,0,0,1,.514-.875L15.514,3.06a1,1,0,0,1,.972,0L27.245,9.037a1,1,0,0,1,.514.875Z"
              transform="translate(-2.241 -0.934)"
              fill-rule="evenodd"
            ></path>
          </g>
        </svg>
      </Link>
      <div className="pl-[1rem] pr-[1rem] text-center text-white">
        <div className="py-[1rem]">
          <Link to="/report">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              onClick={handleClick1}
              style={{
                transform: isClicked1
                  ? "scale(1.3)"
                  : isHovered1
                  ? "scale(1.15)"
                  : "scale(1)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <path
                d="M13.191 0.5C16.28 0.5 18 2.28 18 5.33V15.66C18 18.76 16.28 20.5 13.191 20.5H4.81C1.77 20.5 0 18.76 0 15.66V5.33C0 2.28 1.77 0.5 4.81 0.5H13.191ZM5.08 14.24C4.78 14.21 4.49 14.35 4.33 14.61C4.17 14.86 4.17 15.19 4.33 15.45C4.49 15.7 4.78 15.85 5.08 15.81H12.92C13.319 15.77 13.62 15.429 13.62 15.03C13.62 14.62 13.319 14.28 12.92 14.24H5.08ZM12.92 9.679H5.08C4.649 9.679 4.3 10.03 4.3 10.46C4.3 10.89 4.649 11.24 5.08 11.24H12.92C13.35 11.24 13.7 10.89 13.7 10.46C13.7 10.03 13.35 9.679 12.92 9.679ZM8.069 5.15H5.08V5.16C4.649 5.16 4.3 5.51 4.3 5.94C4.3 6.37 4.649 6.72 5.08 6.72H8.069C8.5 6.72 8.85 6.37 8.85 5.929C8.85 5.5 8.5 5.15 8.069 5.15Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <div className="py-[1rem]">
          <Link to="/community">
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              onClick={handleClick2}
              style={{
                transform: isClicked2
                  ? "scale(1.3)"
                  : isHovered2
                  ? "scale(1.15)"
                  : "scale(1)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <path
                d="M10.949 11.0396C14.3802 11.0396 17.31 11.5836 17.31 13.7604C17.31 15.9362 14.399 16.5 10.949 16.5C7.51785 16.5 4.58809 15.956 4.58809 13.7802C4.58809 11.6034 7.49904 11.0396 10.949 11.0396ZM16.4351 9.72888C17.7468 9.70456 19.1571 9.88468 19.6782 10.0126C20.7823 10.2296 21.5084 10.6727 21.8093 11.3166C22.0636 11.8453 22.0636 12.4586 21.8093 12.9864C21.349 13.9851 19.8654 14.3058 19.2887 14.3886C19.1696 14.4066 19.0738 14.3031 19.0864 14.1833C19.3809 11.4157 17.0377 10.1035 16.4315 9.80183C16.4055 9.78832 16.4002 9.7676 16.4028 9.755C16.4046 9.74599 16.4154 9.73158 16.4351 9.72888ZM5.5656 9.72924C5.5853 9.73194 5.59515 9.74635 5.59694 9.75446C5.59962 9.76796 5.59425 9.78778 5.56918 9.80219C4.9621 10.1039 2.61883 11.4161 2.91342 14.1827C2.92595 14.3034 2.83104 14.4061 2.71195 14.389C2.13531 14.3061 0.651629 13.9855 0.191392 12.9867C-0.0637974 12.4581 -0.0637974 11.8457 0.191392 11.317C0.492248 10.6731 1.21752 10.23 2.32156 10.012C2.84358 9.88504 4.25294 9.70492 5.5656 9.72924ZM10.949 0.5C13.2851 0.5 15.1583 2.38227 15.1583 4.73285C15.1583 7.08253 13.2851 8.9666 10.949 8.9666C8.61292 8.9666 6.73974 7.08253 6.73974 4.73285C6.73974 2.38227 8.61292 0.5 10.949 0.5ZM16.6634 1.2059C18.9198 1.2059 20.6918 3.34123 20.0883 5.71974C19.6809 7.32102 18.2062 8.38463 16.5631 8.3414C16.3984 8.3369 16.2363 8.32159 16.0796 8.29457C15.9659 8.27476 15.9086 8.14597 15.973 8.05051C16.5998 7.12288 16.9571 6.00703 16.9571 4.80922C16.9571 3.55918 16.5667 2.3938 15.8889 1.43825C15.8674 1.40853 15.8513 1.3626 15.8728 1.32838C15.8907 1.30046 15.9238 1.28605 15.9551 1.27884C16.1835 1.23201 16.4181 1.2059 16.6634 1.2059ZM5.33593 1.20581C5.58127 1.20581 5.81586 1.23192 6.04509 1.27875C6.07553 1.28596 6.10956 1.30127 6.12746 1.32829C6.14806 1.36251 6.13284 1.40844 6.11135 1.43816C5.43353 2.39371 5.04313 3.55909 5.04313 4.80913C5.04313 6.00694 5.4004 7.12279 6.02718 8.05042C6.09165 8.14588 6.03434 8.27467 5.92063 8.29448C5.76304 8.3224 5.60186 8.33681 5.43711 8.34131C3.79404 8.38454 2.31932 7.32093 1.91191 5.71965C1.30751 3.34114 3.07951 1.20581 5.33593 1.20581Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <div className="py-[1rem]">
          <a>
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              onClick={handleClick3}
              style={{
                transform: isClicked3
                  ? "scale(1.3)"
                  : isHovered3
                  ? "scale(1.15)"
                  : "scale(1)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <path
                d="M8 13.6739C12.3386 13.6739 16 14.3789 16 17.099C16 19.82 12.3146 20.5 8 20.5C3.66237 20.5 0 19.795 0 17.075C0 14.3539 3.68538 13.6739 8 13.6739ZM8 0.5C10.9391 0.5 13.294 2.85402 13.294 5.79105C13.294 8.72808 10.9391 11.0831 8 11.0831C5.0619 11.0831 2.70601 8.72808 2.70601 5.79105C2.70601 2.85402 5.0619 0.5 8 0.5Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
