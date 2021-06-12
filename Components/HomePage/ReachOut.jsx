import { Stack } from '@chakra-ui/layout'
import { Link, Text, VStack, Wrap, WrapItem } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import Image from 'next/image'
import React from 'react'
import ReachSVG from './ReachSVG'
// import { platforms } from '../../Data/Homepage'

function ReachOut({platforms}) {
    return (
        <Box className="reachout">
            <Text fontSize="5xl" fontWeight="500" textAlign="center">Reach Out</Text>
            <Wrap align="center" justify={["center","center","center","center","space-between"]}>
                <WrapItem alignSelf="center">
                    <Wrap justify="space-between" align="center" spacing="5" my="5">
                        {
                            platforms.map(
                                each => {
                                    const {id, platformName, link, logo} = each;
                                    // console.log(logo)
                                    return(
                                        <WrapItem key={id} maxW="120px" maxH="120px">
                                            <Link className="reachout-link" isExternal href={link} height="120px !important" m={[2,3,10]} download={platformName === 'Resume' ? true : false}>
                                                <Flex direction="column" justifyContent="center" alignItems="center" backgroundColor="#43B0F1" padding="1em" borderRadius="1em">
                                                    <Image src={logo[0].url} width={48} height={48} />
                                                    <Text fontWeight="bold" fontSize="md" className="paragraph">{platformName}</Text>
                                                </Flex>
                                            </Link>
                                        </WrapItem>
                                    )
                                }
                            )
                        }
                    </Wrap>
                </WrapItem>
                <WrapItem>
                    <ReachSVG className="svg" width="40vw" height="40vh" />
                    {/* <Image src="/images/third.png" width={275} height={450} /> */}
                </WrapItem>

            </Wrap>
        </Box>
    )
}

export default ReachOut
