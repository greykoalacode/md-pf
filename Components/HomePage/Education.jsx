import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { demoEducationData } from "../../Data/Homepage";
import { descending } from "../../utils/sort";

const EachEvent =({ title, subtitle, description, fromYear, toYear}) => {
    return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ffadce", color: "#fff", borderRadius: '1em' }}
          contentArrowStyle={{ borderRight: "7px solid  #ffadce" }}
          date={`${fromYear} - ${toYear}`}
          iconStyle={{ background: "#ffadce", color: "#fff", padding: '5px' }}
          icon={<Image layout="responsive" width={24} height={24} src="/images/school.png" />}
        >
          <Text fontSize="2xl" fontWeight="bold !important" className="vertical-timeline-element-title paragraph">{title}</Text>
          <Text fontSize="xl" className="vertical-timeline-element-subtitle paragraph">{subtitle}</Text>
          <Text className="paragraph">
            {description}
          </Text>
        </VerticalTimelineElement>
    )
}


function Education() {
  return (
    <Box className="education" padding="2.5">
        <Text fontSize="4xl" className="education-title">Education</Text>
        <VerticalTimeline animate={false}>
            {
                demoEducationData
                .sort((a,b) => descending(a,b,'fromYear'))
                .map(
                    each => {
                        const {id, institution, education, description, fromYear, toYear} = each;
                        return (
                            <EachEvent key={id} title={institution} subtitle={education} description={description} fromYear={fromYear} toYear={toYear} />

                        )
                    }
                )
            }
        </VerticalTimeline>
    </Box>
  );
}

export default Education;
