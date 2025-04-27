import BlurFade from "@/components/magicui/blur-fade";
import { motion } from "motion/react";

const ListItem: React.FunctionComponent<
  React.HTMLAttributes<HTMLLIElement>
> = ({ children }) => {
  return (
    <motion.li whileHover={{ scale: 1.15 }}>
      <BlurFade
        inView
        className="flex items-center justify-center space-x-1 text-lg"
      >
        {children}
      </BlurFade>
    </motion.li>
  );
};

export default ListItem;
