import React from "react";
import { motion } from "framer-motion";
import { SimpleGrid } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { Wrap } from "@chakra-ui/layout";
import WalkSVG from "./WalkSVG";

function Poster({details}) {
  return (
    <div className="poster">
      {/* <Box className="poster-main"> */}
      {/* <Text className="poster-title" textAlign="center">Christine</Text> */}
        <Wrap align="center" justify={["center","center","center","space-between"]} className="poster-flex">
            <SimpleGrid gap={['1em', null,null,, null, '2.5em']}>
                <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ease: 'linear', delay: 0.5}} className="poster-title">{details.firstName}</motion.h1>
                <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ease: 'linear', delay: 1}} className="poster-title poster-title-2">{details.lastName}</motion.h1>
            </SimpleGrid>
            <WalkSVG className="svg svg-about" width="45vw" height="45vh" />
            {/* <Image
                className="poster-image poster-image-gradient"
                src="/images/profile1.jpg"
                // layout="responsive"
                // sizes="(max-height: 500px)100px"
                alt="Hello"
                width={320}
                height={420}
            /> */}
        </Wrap>
        <Link href="#about">
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ease: 'linear', delay: 1.3}} className="poster-about-link">About Me</motion.p>
        </Link>
        {/* </Box> */}
    </div>
  );
}

export default Poster;
