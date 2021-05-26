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
};

const HobbyCard = ({hobby}) => {
    return (
        <Box backgroundColor="#ffadce" padding="0.5em" margin="1em" borderRadius="1em">
            <Text className="paragraph" fontWeight="bold">{hobby}</Text>
        </Box>
    )
}

function About({about}) {
    return (
        <Box id="about" padding="4.5em" backgroundColor="#ffdae9" className="about">
            <Box padding="0" className="about-1">
                <Text fontSize="5xl" className="about-title">About</Text>
                <Wrap justify={["center","center","center","center","space-between"]} align="center" >
                    <WrapItem>
                        <TextCard>
                            {
                                about.about_me.split('.').filter( each => each !== '').map(
                                    eachV => 
                                    <Text key={eachV} fontSize="lg" className="paragraph">
                                        {`${eachV}.`}
                                    </Text>
                                )
                            }
                        </TextCard>
                    </WrapItem>
                    <WrapItem alignContent="center">
                        <Image
                            src="/images/second.png"
                            alt="Hello"
                            width={275}
                            height={450}
                        />
                    </WrapItem>
                    <WrapItem maxW={[null,null,"250px"]} alignSelf="stretch">
                        <Box pt="8">
                            <Text fontSize="4xl">Skills</Text>
                            <Wrap my="5" spacing="5">
                            {
                                about.skills.split(',').map(
                                    each => <HobbyCard key={each} hobby={each} />
                                )
                            }
                            </Wrap>
                            {/* <TextCard backgroundColor="#ffdae9" padding="0" className="paragraph">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio cumque temporibus quas, accusamus, molestias quos ipsam quidem mollitia voluptate optio fugiat voluptates impedit repellat, corrupti minus blanditiis ad expedita voluptatum laudantium exercitationem. Consequatur, assumenda! Optio nostrum eligendi odit velit.
                            </TextCard> */}
                        </Box>
                        
                    </WrapItem>
                </Wrap>
            </Box>

                <Wrap align="center" justify={["center","center","center","center","space-between"]} spacing="2em">
                    <WrapItem>
                        <Image
                            src="/images/sing.png"
                            alt="Hello"
                            width={275}
                            height={450}
                        />
                    </WrapItem>
                    <WrapItem maxW="250px" alignSelf="stretch">
                        <Box pt="8">
                            <Text fontSize="4xl">Hobbies</Text>
                            <Wrap my="5" spacing="5">
                            {
                                about.hobbies.split(',').map(
                                    each => <HobbyCard key={each} hobby={each} />
                                )
                            }
                            </Wrap>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <TextCard>
                            <Text fontSize="4xl">Key Details</Text>
                            <TitleDetail title="Email" detail={about.email} />
                            <TitleDetail title="Address" detail={about.address} />
                            <TitleDetail title="Date of Birth" detail={about.dob} />
                            <TitleDetail title="Languages" languages={about.languages.split(',')} />
                        </TextCard>
                    </WrapItem>
                </Wrap>
            {/* </Box> */}
        </Box>
    )
}

export default About
