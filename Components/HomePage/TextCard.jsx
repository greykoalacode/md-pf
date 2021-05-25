import { Box, Text } from '@chakra-ui/layout'
import React from 'react'

function TextCard({children, ...rest}) {
    return (
        <Box backgroundColor="#FFADCE" padding="1.75em" borderRadius="1em" maxWidth="600px"{...rest}>
            {children}
        </Box>
    )
}

export default TextCard
