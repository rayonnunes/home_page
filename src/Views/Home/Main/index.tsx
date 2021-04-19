import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  useLocation
} from "react-router-dom";
import Main from './styles'
import jsIcon from '../../../assets/images/icons/js.png'
import nodeIcon from '../../../assets/images/icons/node.png'
import reactIcon from '../../../assets/images/icons/react.png'
import vueIcon from '../../../assets/images/icons/vue.png'
import dockerIcon from '../../../assets/images/icons/docker.png'
import postgresIcon from '../../../assets/images/icons/postgres.png'
import Button from '../../components/Button'
import curriculumPDF from '../../../assets/curriculum.pdf'

const MainComponent = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery()
  const { t } = useTranslation()
  return (
      <Main.Content>
        <Main.Info>
          <h4><span>{t('Hello,')}</span> {t('I am')}</h4>
          <h1>Rayon Lindraz Nunes</h1>
          <h5>{t('My Work')}</h5>
          <div>
            <Main.Icon src={jsIcon} alt="Javascript"/>
            <Main.Icon src={nodeIcon} alt="Node js"/>
            <Main.Icon src={reactIcon} alt="React js"/>
            <Main.Icon src={vueIcon} alt="Vue js"/>
            <Main.Icon src={dockerIcon} alt="Docker"/>
            <Main.Icon src={postgresIcon} alt="PostgreSQL"/>
          </div>
          <div>
            <a href="mailto:rayonnunes@hotmail.com">
              <Button>{t('Contact Me')}</Button>
            </a>
            {
              query.get('tokencv') === process.env.REACT_APP_TOKEN_CV && (
                <a href={curriculumPDF} target = "_blank" rel="noreferrer">
                  <Button color="secondary">{t('Download CV')}</Button>
                </a>
              )
            }
          </div>
        </Main.Info>
        <Main.Picture src="https://avatars.githubusercontent.com/u/13816352?s=460&u=951f0beff58adc4c201448b514f5171b98323c10&v=4" alt="Foto de Rayon Lindraz Nunes"/>
      </Main.Content>
  )
}

export default MainComponent
