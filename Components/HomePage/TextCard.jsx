import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

function TextCard({children, ...rest}) {
    return (
        <Box backgroundColor="#43B0F1 !important" padding={["1em","1.75em"]} borderRadius="0.35em" maxWidth="600px"{...rest}>
            {children}
        </Box>
    )
}

export default TextCard
