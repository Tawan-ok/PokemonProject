import React, { ReactNode } from 'react'

import Container from '@mui/material/Container'
import PropTypes from 'prop-types'

const PageContainer = (props: { children: ReactNode }) => {
  return (
    <Container disableGutters>
      <div className="page-padding">{props.children}</div>
    </Container>
  )
}

PageContainer.propTypes = {
  maxWidth: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default PageContainer
