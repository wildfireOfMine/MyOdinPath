import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import i18n from '../i18n'

const LanguageSelection = () => {
  return (
    <>
        <ButtonGroup>
            <Button onClick={()=>i18n.changeLanguage("es")}>Castellano</Button>
            <Button onClick={()=>i18n.changeLanguage("en")}>English</Button>
            <Button onClick={()=>i18n.changeLanguage("cat")}>Català</Button>
            <Button onClick={()=>i18n.changeLanguage("pr")}>Português</Button>
        </ButtonGroup>

    </>
  )
}

export default LanguageSelection
