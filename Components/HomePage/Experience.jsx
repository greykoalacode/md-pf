import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/layout'
import { WrapItem } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/layout'
import { Wrap } from '@chakra-ui/layout'
import { HStack } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { TagLabel } from '@chakra-ui/tag'
import { Tag } from '@chakra-ui/tag'
import React from 'react'
import { demoCertificationData, demoExperienceData } from '../../Data/Homepage'
import { descending } from '../../utils/sort';

const CertificationCard= ({title, subtitle, link}) => {
    return (
        <Box padding={[1,2,3]} margin={[1,2,3]}>
            <Wrap align="center" justify="space-between">
                <Text my="1" fontSize="2xl">{title}</Text>
                <Link isExternal href={link}>
                    <ExternalLinkIcon />
                </Link>
            </Wrap>
            <Text my="1" className="paragraph">{subtitle}</Text>
        </Box>
    )
}

const ExperienceCard = ({project_title, fromYear, toYear, description, technologies, project_link}) => {
    return(
        <Box minW="280px" padding="1em" margin="1em" backgroundColor="#ffadce" borderRadius="0.5em">
            <Wrap align="center" justify="space-between">
                <WrapItem>
                    <Text fontSize="2xl">{project_title}</Text>
                </WrapItem>
                <WrapItem>
                    {toYear ? `${fromYear} to ${toYear}` : `${fromYear}`}
                </WrapItem>
            </Wrap>
            <Wrap align="center" justify="space-between">
                <WrapItem>
                    <Text className="paragraph" py="3">
                        {description}
                    </Text>
                </WrapItem>
                <WrapItem>
                    <Link href={project_link} isExternal className="paragraph">Check it here<ExternalLinkIcon mx="2" /></Link>
                </WrapItem>
            </Wrap>
            <Text fontWeight="bold" className="paragraph" pb="1">Technology / Domain</Text>
            <Wrap mb="2">
                {
                    technologies
                    .sort((a,b) => descending(a,b,'fromYear'))
                    .map(
                        each => (
                        <WrapItem>
                            <Tag key={each} backgroundColor="#ffdae9">
                                <TagLabel className="paragraph">{each}</TagLabel>
                            </Tag>
                        </WrapItem>
                        )
                    )
                }
            </Wrap>
            
        </Box>
    );
}

function Experience() {
    return (
        <Wrap justify="space-between" className="experience">
            <WrapItem>
                <VStack>
                <Text fontSize="4xl" className="experience-title">Learnings & Experiences</Text>
                <Wrap className="experience-box" spacing={[3,null,10]}>
                {
                    demoExperienceData.map(
                        each => {
                        const {id, project_link, project_title, description, fromYear, toYear, technologies} = each;
                        return(
                            <ExperienceCard key={id} project_link={project_link} project_title={project_title} description={description} fromYear={fromYear} toYear={toYear} technologies={technologies} />
                        )
                    }
                    )
                }
                </Wrap>
                </VStack>
            </WrapItem>
            <WrapItem>
                <Box>
                    <Text fontSize="4xl" className="experience-title">Certifications</Text>
                    <Box className="experience-box certification-box">
                    {
                        demoCertificationData.map(
                            each => {
                            const {id, title, subtitle, link} = each;
                            return(
                                // <WrapItem maxW="180px" key={id}>
                                    <CertificationCard key={id} title={title} subtitle={subtitle} link={link} />
                                // </WrapItem>
                            )
                        }
                        )
                    }
                    </Box>
                </Box>
            </WrapItem>
        </Wrap>
    )
}

export default Experience
