import React from 'react'
import { useSiteMetadata } from '../../hooks'
import { Header } from './Header'

import styled from 'styled-components'

const AppStyles = styled.main`
   width:800px;
   margin: 0 auto
`

export function Layout({children}) {
   const {title, description} = useSiteMetadata()

   return (
      <AppStyles>
         <Header siteDescription={description} siteTitle={title} />
         {children}
      </AppStyles>
   )
}