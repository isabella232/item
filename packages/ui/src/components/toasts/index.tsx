import React from 'react'
import { Box, BoxProps } from 'rebass'
import { alignItems, AlignItemsProps, borders, BordersProps, variant } from 'styled-system'
import styled from '@emotion/styled'

type TProps = BoxProps & BordersProps & AlignItemsProps & {
  variant?: string
}

const toastStyle = variant({
  variants: {
    default: { backgroundColor: 'secondary' },
    info: { backgroundColor: 'info' },
    warn: { backgroundColor: 'warn' },
    danger: { backgroundColor: 'danger' },
    success: { backgroundColor: 'success' },
  },
})

const StyledToast = styled(Box)<TProps>`
  ${borders};
  ${alignItems};
  ${toastStyle};
`

export const Toast = (props: TProps) =>
  <StyledToast
    variant={'default'}
    px={4}
    py={3}
    borderRadius={'md'}
    alignItems={'center'}
    {...props}
  />
