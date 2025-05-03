import BlurFade from "@/components/magicui/blur-fade";
import { TypographyMuted, TypographyP } from "@/components/ui/typography";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListItem from "./list-item";

export default function Cloud() {
  return (
    <section className="text-left">
      <BlurFade inView>
        <TypographyMuted>Cloud</TypographyMuted>
      </BlurFade>

      <ul className="my-1">
        <ListItem>
          <div className="text-foreground size-5">▲</div>
          <TypographyP>Vercel</TypographyP>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon
            icon={faAws}
            className="h-4 fill-current text-red-600"
          />
          <TypographyP>Amazon Web Services</TypographyP>
        </ListItem>
        <ListItem>
          <svg className="size-5" viewBox="0 0 128 128">
            <g fill="#6762A6">
              <path d="M114 13.9c0-6.6-5.3-11.9-11.9-11.9h-76.2c-6.6 0-11.9 5.3-11.9 11.9v100.3c0 6.6 5.3 11.9 11.9 11.9h76.3c6.6 0 11.9-5.3 11.9-11.9v-100.3zm-4 .1v99.3c0 4.7-3.5 8.7-8.2 8.7h-75.3c-4.7 0-8.5-4-8.5-8.7v-99.3c0-4.7 3.9-8 8.5-8h75.2c4.7 0 8.4 3.6 8.4 8.3l-.1-.3zM37 108.7l14.1-14.1-14.1-14.1zM51 47.8v-29.4l-13.9.1s.1 45.9.2 45.7c42.8-16.7 39.7-4.8 39.7-4.8v49.4l-.1.2h13.1v-49.5c0-27.1-39-11.7-39-11.7zM70 36h14.8c8-10 10.7-17 10.7-17h-15.3s-4.9 11-10.2 17z" />
            </g>
          </svg>
          <TypographyP>Heroku</TypographyP>
        </ListItem>
        <ListItem>
          <svg
            className="size-5"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M153.094 165.679l-62.785-13.12a14.631 14.631 0 0 1-.876 1.475l57.157 83.378 3.448-3.444 9.724-60.47a11.458 11.458 0 0 1-6.668-7.82zM130.19 83.605c-2.352 3.608-6.412 5.996-11.036 5.996-.712 0-1.404-.072-2.084-.18l-28.633 44.801 76.498-32.92c-.024-.308-.092-.596-.092-.912 0-.644.088-1.268.192-1.884l-34.845-14.9zm2.08-8.164l37.065 15.848a11.447 11.447 0 0 1 3.976-2.008l6.092-37.88-23.209-23.209L130.07 69.07a13.013 13.013 0 0 1 2.2 6.372zm77.665 6.492l-23.26-23.264-5.056 31.408a11.628 11.628 0 0 1 3.396 2.584l24.92-10.728zm-55.729 75.473a11.355 11.355 0 0 1 9.089-5.844l6.68-41.548c-.524-.348-.992-.764-1.452-1.192l-76.938 33.112c.196.804.332 1.624.396 2.476l62.225 12.996zm62.065-69.133l-26.912 11.58 66.401 28.389.24-.24-39.729-39.729zm-48.092 85.35l-8.088 50.284 46.964-46.964-33.828-7.064a11.366 11.366 0 0 1-5.048 3.744zm-91.286-12.928c-1.7 0-3.328-.292-4.852-.809l-15.6 24.413-6.028-6.024 14.776-23.12a16.066 16.066 0 0 1-1.02-1.417l-26.768 11.525-6.345-6.345 29.3-12.612L7.385 135.25.14 128.002l2.292-2.292 61.085 12.752a14.981 14.981 0 0 1 2.668-3.616L36.537 91.601l5.988-5.988L73.5 130.798a15.283 15.283 0 0 1 3.392-.396c1.308 0 2.576.184 3.788.496l28.985-45.353a13.126 13.126 0 0 1-3.676-9.116c0-1.04.132-2.048.36-3.016l-36.16-15.46 6.343-6.344 34.26 14.652a13.12 13.12 0 0 1 12.653-2.268l26.724-41.825L128.002 0 0 128.002l128.002 128.002 12.596-12.596-57.585-84.01a15.117 15.117 0 0 1-6.12 1.297zm101.23-48.89l-6.796 42.237a11.359 11.359 0 0 1 4.196 7.813l38.572 8.052 35.32-35.32-63.752-27.257a11.508 11.508 0 0 1-7.54 4.476z"
              fill="#25C7B7"
            />
          </svg>
          <TypographyP>Netlify</TypographyP>
        </ListItem>
        <ListItem>
          <svg viewBox="0 0 128 128" className="size-5">
            <path
              fill="#f58220"
              d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
            ></path>
          </svg>
          <TypographyP>Firebase</TypographyP>
        </ListItem>
      </ul>
    </section>
  );
}
