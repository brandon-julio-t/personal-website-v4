import BlurFade from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";

const ListItem: React.FunctionComponent<
  React.HTMLAttributes<HTMLLIElement>
> = ({ children }) => {
  return (
    <motion.li whileHover={{ scale: 1.25 }}>
      <BlurFade
        delay={0.25}
        inView
        className="flex items-center justify-center space-x-1 text-lg"
      >
        {children}
      </BlurFade>
    </motion.li>
  );
};

export default ListItem;
