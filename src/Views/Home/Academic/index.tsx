import React from 'react'
import { useTranslation } from 'react-i18next'
import ProgressBar from 'react-animated-progress-bar';
import Card from '../../components/Card'
import Academy from './styles'
import ufcLogo from '../../../assets/images/icons/ufc.png'

const Experience = () => {
  const { t } = useTranslation()
  return (
    <Card>
      <div>
        <Academy.Header>
          <h4>{t('Academy')}</h4>
          <h2>{t('Formation')}</h2>
        </Academy.Header>
        <Academy.Wrapper>
          <h3>{t('Eng Comp')}</h3>
          <h5>{t('Start College')}</h5>
          <h4>{t('UFC')}</h4>
          <Academy.CollegeLogo src={ufcLogo} alt="Universidade Federal do Ceará"/>
          <ProgressBar
            rect
            width="100%"
            height="10px"
            fontColor="gray"
            percentage="99"
            rectPadding="1px"
            rectBorderRadius="8px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"
            defColor={{
              excellent: '#00BFFF',
            }}
          />
          <p>{t('Work in Progress')}</p>
        </Academy.Wrapper>
      </div>
  </Card>
  )
}

export default Experience
