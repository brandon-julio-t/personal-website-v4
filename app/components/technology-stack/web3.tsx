import ListItem from "./list-item";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEthereum, faPiedPiperHat } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Web3() {
  return (
    <section className="text-center">
      <TypographyH3>Web3 / Blockchain</TypographyH3>
      <ul className="my-1">
        <ListItem>
          <FontAwesomeIcon icon={faEthereum as IconProp} className="h-5" />
          <TypographyP>Solidity (Ethereum)</TypographyP>
        </ListItem>
        <ListItem>
          <svg viewBox="0 0 128 128" className="h-5">
            <defs>
              <linearGradient
                id="a"
                x1="10.561"
                x2="10.561"
                y1="30.514"
                y2="6.186"
                gradientTransform="translate(-2.326 11.158) scale(2.56617)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EDCF00"></stop>
                <stop offset=".33" stop-color="#F0D500"></stop>
                <stop offset=".77" stop-color="#F9E500"></stop>
                <stop offset="1" stop-color="#FFF100"></stop>
              </linearGradient>
              <linearGradient
                id="b"
                x1="46.089"
                x2="46.089"
                y1="30.692"
                y2="13.092"
                gradientTransform="translate(-2.326 11.158) scale(2.56617)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#EDCF00"></stop>
                <stop offset=".59" stop-color="#F7E100"></stop>
                <stop offset="1" stop-color="#FFF100"></stop>
              </linearGradient>
              <radialGradient
                id="c"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(47.57621 0 0 47.25236 7.172 132.114)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFF100"></stop>
                <stop offset=".23" stop-color="#F9E500"></stop>
                <stop offset=".67" stop-color="#F0D500"></stop>
                <stop offset="1" stop-color="#EDCF00"></stop>
              </radialGradient>
            </defs>
            <path
              fill="#fff100"
              d="M127.99 98.893V92.68c0-1.155-1.943-2.256-5.43-3.249l.084-7.732a57.71 57.71 0 0 0-10.588-33.296A58.573 58.573 0 0 0 84.121 27.13l-.25-1.55a4.419 4.419 0 0 0-1.046-2.238 4.483 4.483 0 0 0-2.092-1.337 59.402 59.402 0 0 0-33.167 0c-.814.239-1.54.7-2.1 1.335a4.398 4.398 0 0 0-1.051 2.237l-.24 1.445a58.588 58.588 0 0 0-28.13 21.256A57.734 57.734 0 0 0 5.374 81.697v7.765c-3.439.99-5.356 2.079-5.356 3.226V98.9a1.514 1.514 0 0 0 .224 1.047 15.017 15.017 0 0 1 5.766-2.604 113.37 113.37 0 0 1 16.174-2.684 10.906 10.906 0 0 1 8.487 2.712 22.967 22.967 0 0 0 15.42 5.933h35.834a22.95 22.95 0 0 0 15.417-5.938 10.914 10.914 0 0 1 8.489-2.743A114.1 114.1 0 0 1 122 97.297a13.498 13.498 0 0 1 5.466 2.373c.09.09.2.17.277.254a1.54 1.54 0 0 0 .246-1.031z"
            ></path>
            <path
              fill="url(#a)"
              d="M30.752 85.818a136.171 136.171 0 0 1-.077-4.293c.018-21.597 5.112-40.966 13.503-54.493a58.588 58.588 0 0 0-28.13 21.253A57.734 57.734 0 0 0 5.373 81.697v7.765a143.449 143.449 0 0 1 25.38-3.644Z"
            ></path>
            <path
              fill="url(#b)"
              d="M122.639 81.697a57.546 57.546 0 0 0-13.383-36.943 119.455 119.455 0 0 1 5.548 36.76c0 2.105-.056 4.183-.153 6.25a73.11 73.11 0 0 1 7.888 1.662l.097-7.73z"
            ></path>
            <path
              fill="url(#c)"
              d="M122 97.32a113.49 113.49 0 0 0-16.175-2.685 10.911 10.911 0 0 0-8.488 2.726 22.95 22.95 0 0 1-15.42 5.935h-35.82a22.962 22.962 0 0 1-15.411-5.933 10.904 10.904 0 0 0-8.49-2.748 113.787 113.787 0 0 0-16.174 2.682A15.215 15.215 0 0 0 .26 99.9c2.72 4.127 30.234 8.456 63.758 8.456 33.527 0 61.029-4.345 63.754-8.453-.095-.082-.2-.162-.28-.252A14.019 14.019 0 0 0 122 97.32Z"
            ></path>
            <path
              fill="#0a0a0a"
              d="M64 37.882 50.28 61.034 64 69.477V37.88Z"
            ></path>
            <path
              fill="#4b4d4d"
              d="M64.005 37.89v31.579l13.716-8.427zm0 36.165v11.011c.256-.364 13.716-19.451 13.716-19.46l-13.716 8.451z"
            ></path>
            <path
              fill="#0a0a0a"
              d="m64.005 74.06-13.72-8.438 13.72 19.452v-11.02Z"
            ></path>
          </svg>
          <TypographyP>Hardhat</TypographyP>
        </ListItem>
        <ListItem>
          <svg
            className="h-5"
            viewBox="0 0 1008 861"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M838.577 551.198L519.602 8.87627C518.058 6.19837 515.821 3.96769 513.118 2.40933C510.415 0.850961 507.34 0.0200199 504.206 0.000357256C501.071 -0.0193054 497.987 0.772998 495.264 2.29733C492.54 3.82165 490.276 6.0241 488.697 8.68241L393.167 171.185C390.038 176.504 388.392 182.538 388.392 188.681C388.392 194.823 390.038 200.857 393.167 206.177L601.159 559.97C604.291 565.294 608.797 569.715 614.222 572.786C619.648 575.858 625.801 577.472 632.064 577.466H823.124C826.252 577.456 829.323 576.642 832.029 575.103C834.736 573.564 836.983 571.354 838.548 568.695C840.112 566.036 840.937 563.021 840.942 559.95C840.948 556.88 840.132 553.862 838.577 551.198Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M2.45963 834.635L321.434 292.314C323 289.657 325.25 287.451 327.958 285.918C330.665 284.384 333.736 283.577 336.862 283.577C339.988 283.577 343.06 284.384 345.768 285.918C348.476 287.451 350.725 289.657 352.29 292.314L447.87 454.671C450.998 459.999 452.644 466.041 452.644 472.191C452.644 478.341 450.998 484.383 447.87 489.711L239.876 843.504C236.757 848.828 232.261 853.25 226.843 856.322C221.425 859.394 215.277 861.007 209.02 861H17.9122C14.764 861.015 11.668 860.212 8.93874 858.672C6.20948 857.131 3.94471 854.908 2.37465 852.23C0.804592 849.551 -0.0147809 846.512 0.000201848 843.421C0.0151846 840.331 0.863664 837.299 2.45963 834.635Z"
              fill="url(#paint1_linear)"
            />
            <path
              d="M352.245 860.884H990.194C993.323 860.881 996.398 860.069 999.106 858.53C1001.81 856.991 1004.06 854.779 1005.62 852.117C1007.18 849.454 1008 846.435 1008 843.363C1008 840.291 1007.17 837.274 1005.6 834.616L910.167 672.162C907.035 666.837 902.53 662.417 897.105 659.345C891.679 656.274 885.525 654.66 879.262 654.666H463.276C457.013 654.66 450.859 656.274 445.434 659.345C440.008 662.417 435.502 666.837 432.371 672.162L336.842 834.616C335.273 837.274 334.444 840.291 334.44 843.363C334.435 846.435 335.254 849.454 336.815 852.117C338.377 854.779 340.625 856.991 343.334 858.53C346.042 860.069 349.115 860.881 352.245 860.884Z"
              fill="url(#paint2_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="504"
                y1="64"
                x2="415.044"
                y2="861.061"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#05D5FF" />
                <stop offset="0.723958" stop-color="#363FF9" />
                <stop offset="1" stop-color="#5533FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="504"
                y1="64"
                x2="415.044"
                y2="861.061"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#05D5FF" />
                <stop offset="0.723958" stop-color="#363FF9" />
                <stop offset="1" stop-color="#5533FF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="504"
                y1="64"
                x2="415.044"
                y2="861.061"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#05D5FF" />
                <stop offset="0.723958" stop-color="#363FF9" />
                <stop offset="1" stop-color="#5533FF" />
              </linearGradient>
            </defs>
          </svg>

          <TypographyP>Alchemy</TypographyP>
        </ListItem>
      </ul>
    </section>
  );
}
