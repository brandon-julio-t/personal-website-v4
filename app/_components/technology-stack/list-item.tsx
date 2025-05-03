import BlurFade from "@/components/magicui/blur-fade";
import { motion } from "motion/react";

const ListItem: React.FunctionComponent<
  React.HTMLAttributes<HTMLLIElement>
> = ({ children }) => {
  return (
    <motion.li whileHover={{ scale: 1.05 }}>
      <BlurFade
        inView
        className="flex items-center justify-start space-x-1.5 text-base"
      >
        {children}
      </BlurFade>
    </motion.li>
  );
};

export default ListItem;
