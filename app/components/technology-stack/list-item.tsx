import BlurFade from "@/components/magicui/blur-fade";
import { TypographyP } from "@/components/ui/typography";

const ListItem: React.FunctionComponent<
  React.HTMLAttributes<HTMLLIElement>
> = ({ children, ...rest }) => {
  return (
    <li {...rest}>
      <BlurFade
        delay={0.25}
        inView
        className="flex items-center justify-center space-x-1 text-lg"
      >
        {children}
      </BlurFade>
    </li>
  );
};

export default ListItem;
