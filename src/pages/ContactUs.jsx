import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../util/animation";

const ContactUs = () => {
  return (
    <motion.div
      variant={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
