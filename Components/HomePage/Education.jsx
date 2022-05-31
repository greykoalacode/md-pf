import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { descending } from "../../utils/sort";

const EachEvent =({ title, subtitle, description, fromYear, toYear}) => {
    // const fromMonth = new Date(fromYear).getMonth()
    // const ToMonth = new Date(toYear).getMonth()
    // const fromYearStr = new Date(toYear).getYear()
    // const ToYearStr = new Date(toYear).getYear()
    return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#43B0F1", color: "#1E3D58", borderRadius: '0.35em' }}
          contentArrowStyle={{ borderRight: "7px solid  #43B0F1" }}
          date={toYear ? `${fromYear} - ${toYear}` : `${fromYear} -`}
          iconStyle={{ background: "#43B0F1", color: "#057DCD", padding: '5px' }}
          icon={<Image layout="responsive" width={24} height={24} src="/images/school.png" />}
        >
          <Text fontSize="2xl" fontWeight="bold !important" className="vertical-timeline-element-title paragraph-trunc">{title}</Text>
          <Text fontSize="xl" className="vertical-timeline-element-subtitle paragraph-trunc">{subtitle}</Text>
          <Text className="paragraph">
            {description}
          </Text>
        </VerticalTimelineElement>
    )
}


function Education({education}) {
  return (
    <Box className="education" padding={["2.5em 1em","4.5em"]}>
        <Text fontSize="5xl" mb="1.5" textAlign="center" fontWeight={500} className="education-title">Education</Text>
        <VerticalTimeline animate={false}>
            {
                education
                .sort((a,b) => descending(a,b,'fromYear'))
                .map(
                    each => {
                        const {id, institution, education, description, fromYear, toYear} = each;
                        return (
                            <EachEvent key={id} subtitle={institution} title={education} description={description} fromYear={fromYear} toYear={toYear} />

                        )
                    }
                )
            }
        </VerticalTimeline>
    </Box>
  );
}

export default Education;
