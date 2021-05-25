import { Stack, Wrap, WrapItem } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { TagLabel } from '@chakra-ui/tag'
import { Tag } from '@chakra-ui/tag'
import Image from 'next/image'
import React from 'react'
import TextCard from './TextCard'

const TitleDetail = ({title, detail, languages}) => {
    return (
        <Stack mb="3">
            <Text className="paragraph" fontWeight="bold">{title}</Text>
            {
            languages ? (
                <HStack spacing={2}>
                    {
                        languages.map(
                            each => (
                                <Tag size="md" key={each} backgroundColor="#ffdae9">
                                    <TagLabel className="paragraph">{each}</TagLabel>
                                </Tag>
                            )
                        )
                    }
                </HStack>
            ) : (
                <Text className="paragraph" isTruncated>{detail}</Text>
            )
            }
            
        </Stack>
    )
}

function About() {
    return (
        <Box id="about" padding="4.5em" backgroundColor="#ffdae9" className="about">
            <Box padding="2.5em" className="about-1">
                <Text fontSize="5xl" className="about-title">About</Text>
                <Wrap justify={["center","center","center","center","space-between"]} align="center" >
                    <WrapItem>
                        <TextCard>
                            <Text fontSize="lg" className="paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio cumque temporibus quas, accusamus, molestias quos ipsam quidem mollitia voluptate optio fugiat voluptates impedit repellat, corrupti minus blanditiis ad expedita voluptatum laudantium exercitationem. Consequatur, assumenda! Optio nostrum eligendi odit velit.
                            </Text>
                        </TextCard>
                    </WrapItem>
                    <WrapItem alignContent="center">
                        <Image
                            // className="poster-image"
                            src="/images/second.png"
                            alt="Hello"
                            width={275}
                            height={450}
                        />
                    </WrapItem>
                </Wrap>
            </Box>
                <Wrap align="center" justify="center" spacing="2em">
                    <WrapItem>
                        <Box>
                            <Text fontSize="4xl">Hobbies</Text>
                            <TextCard backgroundColor="#ffdae9" padding="0" className="paragraph">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio cumque temporibus quas, accusamus, molestias quos ipsam quidem mollitia voluptate optio fugiat voluptates impedit repellat, corrupti minus blanditiis ad expedita voluptatum laudantium exercitationem. Consequatur, assumenda! Optio nostrum eligendi odit velit.
                            </TextCard>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Image
                            src="/images/sing.png"
                            alt="Hello"
                            width={275}
                            height={450}
                        />
                    </WrapItem>
                    <WrapItem>
                        <TextCard>
                            <Text fontSize="4xl">Key Details</Text>
                            <TitleDetail title="Email" detail="christinemarvell@gmail.com" />
                            <TitleDetail title="Address" detail="Navi Mumbai, Maharashtra, India" />
                            <TitleDetail title="Languages" languages={['English', 'Hindi', 'Marathi']} />
                        </TextCard>
                    </WrapItem>
                </Wrap>
            {/* </Box> */}
        </Box>
    )
}

export default About
