import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/layout'
import { WrapItem } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/layout'
import { Wrap } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { VStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { TagLabel } from '@chakra-ui/tag'
import { Tag } from '@chakra-ui/tag'
import React from 'react'
import { descending } from '../../utils/sort';

const CheckLink = ({link, children}) => {
    return(
        <>
        {
            link ? (
                <Link isExternal href={link}>
                    {children}
                </Link>
            ) : (
                <>
                {children}
                </>
            )
        }
        </>
    )
}

const CertificationCard= ({title, subtitle, link}) => {
    return (
        <Box padding={[1,2,3]} margin={[1,2,3]}>
            <CheckLink link={link}>
                <Wrap align="center">
                    <Text fontWeight="bold" className="paragraph-trunc" color="#057DCD !important" my="1" fontSize="2xl">{title}</Text>
                    <ExternalLinkIcon ml="3" />
                </Wrap>
            </CheckLink>
            <Text my="1" className="paragraph" color="#057DCD !important">{subtitle}</Text>
        </Box>
    )
}

const ExperienceCard = ({project_title, fromYear, toYear, description, technologies, project_link}) => {
    return(
        <Box minW="280px" padding="1em"  margin="1em" backgroundColor="#43B0F1" borderRadius="0.35em">
            <Wrap align="center" justify="space-between">
                <WrapItem>
                    <Text color="#E8EEF1 !important" fontSize="2xl" fontWeight={500}>{project_title}</Text>
                </WrapItem>
                <WrapItem color="#E8EEF1 !important">
                    {toYear ? `${fromYear} to ${toYear}` : `${fromYear}`}
                </WrapItem>
            </Wrap>
            <Wrap align="center" justify="space-between">
                <WrapItem>
                    <Text className="paragraph" py="3">
                        {description}
                    </Text>
                </WrapItem>
                {
                    project_link !== '' && (
                        <WrapItem>
                            <Link href={project_link} isExternal className="paragraph">Check it here<ExternalLinkIcon mx="2" /></Link>
                        </WrapItem>
                    )
                }
            </Wrap>
            <Text fontWeight="bold"  className="paragraph" py="1">Technology / Domain</Text>
            <Wrap mb="2">
                {
                    technologies
                    .split(',')                    
                    .sort((a,b) => descending(a,b,'fromYear'))
                    .map(
                        each => (
                        <WrapItem key={each}>
                            <Tag key={each} backgroundColor="#E8EEF1">
                                <TagLabel>{each}</TagLabel>
                            </Tag>
                        </WrapItem>
                        )
                    )
                }
            </Wrap>
            
        </Box>
    );
}

function Experience({experience, certification}) {
    return (
        <Grid  templateColumns="repeat(auto-fit, minmax(500px,1fr)" justifyContent="space-between" className="experience">
            <VStack>
                <Text fontSize="5xl" className="experience-title" fontWeight={500}>Learnings & Experiences</Text>
                <Wrap className="experience-box" spacing={[3,null,10]}>
                {
                    experience.map(
                        each => {
                            // console.log(each.fields)
                        const {id, project_link, project_title, description, fromYear, toYear, technologies} = each;
                        return(
                            <ExperienceCard key={id} project_link={project_link} project_title={project_title} description={description} fromYear={fromYear} toYear={toYear} technologies={technologies} />
                        )
                    }
                    )
                }
                </Wrap>
            </VStack>
            <VStack align="stretch" mt="20">
                <Text fontSize="4xl" fontWeight="500" className="experience-title">Certifications</Text>
                <Wrap spacing={[2,3,5]} justify="flex-start" className="experience-box">
                {
                    certification.map(
                        each => {
                        const {id, title, subtitle, link} = each;
                        return(
                            <CertificationCard key={id} title={title} subtitle={subtitle} link={link} />
                        )
                    }
                    )
                }
                </Wrap>
            </VStack>
        </Grid>
    )
}

export default Experience
