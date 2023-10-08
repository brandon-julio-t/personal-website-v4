import { motion } from "framer-motion";

const ListItem: React.FunctionComponent<
  React.HTMLAttributes<HTMLLIElement>
> = ({ children, ...rest }) => {
  return (
    <li {...rest}>
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        whileHover={{ scale: 1.25 }}
        className="flex items-center justify-center space-x-1 text-lg"
      >
        {children}
      </motion.div>
    </li>
  );
};

export default ListItem;
