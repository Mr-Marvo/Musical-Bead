import { motion } from "framer-motion";

const FanSignUp = () => {
  return (
    <div className="flex flex-col w-full lg:p-16 sm:p-8 p-4 mt-16 items-center justify-center text-center">
      <div className="flex w-full text-center justify-center cursor-pointer md:text-[32px] lg:text-[26px] text-[18px] font-medium text-white mt-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="/signup" className="relative w-fit after:items-end after:justify-end after:content-[''] after:bg-teal after:absolute after:h-[3px] after:w-[0%] after:left-0 after:-bottom-2 after:rounded-xl after:duration-300 hover:after:w-full">Sign Me Up Now</a>
        </motion.div>
      </div>
    </div>
  );
};
export default FanSignUp;
