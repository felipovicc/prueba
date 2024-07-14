import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'

interface FlexContainerProps extends BoxProps {
  direction?: 'row' | 'column'
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
  children: React.ReactNode
}

const Flex: React.FC<FlexContainerProps> = ({
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children,
  ...rest
}) => {
  return (
    <Box display='flex' flexDirection={direction} justifyContent={justifyContent} alignItems={alignItems} {...rest}>
      {children}
    </Box>
  )
}

export default Flex
