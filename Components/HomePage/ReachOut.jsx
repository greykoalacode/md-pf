import { Link, Text, VStack, Wrap, WrapItem } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'
import { platforms } from '../../Data/Homepage'

function ReachOut() {
    return (
        <Box className="reachout">
            <Text fontSize="5xl" textAlign="center">Reach Out</Text>
            <Wrap align="center" justify={["center","center","center","center","space-between"]}>
                <Wrap justify="space-evenly" spacing="5" py="5">
                    {
                        platforms.map(
                            each => {
                                const {id, platformName, link, logo} = each;
                                return(
                                    <WrapItem key={id}>
                                        <Link isExternal href={link} m={[2,3,10]}>
                                            <VStack backgroundColor="#ffadce" padding="1em" borderRadius="1em">
                                                <Image src={logo} width={32} height={32} />
                                                <Text fontSize="lg" className="paragraph">{platformName}</Text>
                                            </VStack>
                                        </Link>
                                    </WrapItem>
                                )
                            }
                        )
                    }
                </Wrap>
                <WrapItem>
                    <Image src="/images/third.png" width={275} height={450} />
                </WrapItem>

            </Wrap>
        </Box>
    )
}

export default ReachOut
