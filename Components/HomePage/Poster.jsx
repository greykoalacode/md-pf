import React from "react";
import Image from "next/image";
import { Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { SimpleGrid } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";

function Poster() {
  return (
    <div className="poster">
      {/* <Text className="poster-title" textAlign="center">Christine</Text> */}
        <Flex alignItems="center" justifyContent="space-between" className="poster-flex">
            <SimpleGrid gap={['1em', null, '2.5em']}>
                <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ease: 'linear', delay: 0.5}} className="poster-title">Manasi</motion.h1>
                <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ease: 'linear', delay: 1}} className="poster-title poster-title-2">Deshpande</motion.h1>
            </SimpleGrid>
            <Image
                className="poster-image"
                src="/images/hello_trp.png"
                alt="Hello"
                width={350}
                height={500}
            />
        </Flex>
        <Link href="#about">
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ease: 'linear', delay: 1.3}} className="poster-about-link">About Me</motion.p>
        </Link>
    </div>
  );
}

export default Poster;
