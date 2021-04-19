import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../../components/Card'
import About from './styles'
import cloudWordsBr from '../../../assets/images/cloud.png'
import cloudWordsEn from '../../../assets/images/clouden.png'

const Experience = () => {
  const [imageSource, setImageSource] = useState(cloudWordsBr)
  const { i18n, t } = useTranslation()

  useEffect(() => {
    if (i18n.language === 'en') {
      setImageSource(cloudWordsEn)
    } else {
      setImageSource(cloudWordsBr)
    }
  })
  return (
    <Card>
      <div>
        <About.Header>
          <h4>{t('About')}</h4>
          <h2>{t('Skills')}</h2>
        </About.Header>
        <About.Wrapper>
          <About.WordsCloud src={imageSource} alt="Words Cloud"/>
        </About.Wrapper>
      </div>
  </Card>
  )
}

export default Experience
