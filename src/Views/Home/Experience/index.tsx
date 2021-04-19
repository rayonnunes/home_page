import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../../components/Card'
import Exp from './styles'
import inovaLogo from '../../../assets/images/icons/inova.png'
import jaLogo from '../../../assets/images/icons/ja.png'
import brunoLogo from '../../../assets/images/icons/bruno.png'
import sindsemsLogo from '../../../assets/images/icons/sindsems.png'
import gitHubIcon from '../../../assets/images/icons/github.png'
import reactIcon from '../../../assets/images/icons/react.png'
import tsIcon from '../../../assets/images/icons/ts.png'
import dockerIcon from '../../../assets/images/icons/docker.png'
import dokkuIcon from '../../../assets/images/icons/dokku.png'
import gitlabIcon from '../../../assets/images/icons/gitlab.png'
import postgresIcon from '../../../assets/images/icons/postgres.png'
import watermelonIcon from '../../../assets/images/icons/watermelon.png'
import vueIcon from '../../../assets/images/icons/vue.png'
import nodeIcon from '../../../assets/images/icons/node.png'
import adonisIcon from '../../../assets/images/icons/adonis.png'
import pythonIcon from '../../../assets/images/icons/python.png'
import traefikIcon from '../../../assets/images/icons/traefik.png'
import awsIcon from '../../../assets/images/icons/aws.png'
import mongoIcon from '../../../assets/images/icons/mongo.png'
import htmlIcon from '../../../assets/images/icons/html.png'
import cssIcon from '../../../assets/images/icons/css.png'
import jsIcon from '../../../assets/images/icons/js.png'
import adsIcon from '../../../assets/images/icons/ads.png'
import wordpressIcon from '../../../assets/images/icons/wordpress.png'

const Experience = () => {
  const { t } = useTranslation()
  return (
      <Card>
          <Exp.Header>
            <h4>{t('Professional')}</h4>
            <h2>{t('Works')}</h2>
          </Exp.Header>
          <Exp.Wrapper>
            <Exp.Job>
              <Exp.JobBody>
                <Exp.BusinessLogo src={inovaLogo} alt="Logo Redeinova"/>
                <Exp.JobDescription>
                  <h4>{t('Redeinova')}</h4>
                  <p>Front-End Dev</p>
                  <p>{t('May')} - {t('Current')}</p>
                </Exp.JobDescription>
              </Exp.JobBody>
              <Exp.JobTechs>
                <Exp.Icon src={reactIcon} alt="React/React-Native" title="React/React-Native" />
                <Exp.Icon src={tsIcon} alt="Typescript" title="Typescript" />
                <Exp.Icon src={dockerIcon} alt="Docker" title="Docker" />
                <Exp.Icon src={dokkuIcon} alt="Dokku" title="Dokku" />
                <Exp.Icon src={gitlabIcon} alt="Gitlab" title="Gitlab" />
                <Exp.Icon src={postgresIcon} alt="PostgreSQL" title="PostgreSQL" />
                <Exp.Icon src={watermelonIcon} alt="WatermelonDB" title="WatermelonDB" />
              </Exp.JobTechs>
            </Exp.Job>
              <Exp.Job>
              <Exp.JobBody>
                <Exp.BusinessLogo src={jaLogo} alt="Logo Junior Aguiar"/>
                <Exp.JobDescription>
                  <h4>{t('Junio')}</h4>
                  <p>FullStack Dev</p>
                  <p>{t('Aug')} - {t('Jul')}</p>
                </Exp.JobDescription>
              </Exp.JobBody>
              <Exp.JobTechs>
                <Exp.Icon src={vueIcon} alt="Vue" title="Vue" />
                <Exp.Icon src={nodeIcon} alt="Node" title="Node" />
                <Exp.Icon src={adonisIcon} alt="Adonis JS" title="Adonis JS" />
                <Exp.Icon src={pythonIcon} alt="Python" title="Python" />
                <Exp.Icon src={dockerIcon} alt="Docker" title="Docker" />
                <Exp.Icon src={traefikIcon} alt="Traefik" title="Traefik" />
                <Exp.Icon src={awsIcon} alt="AWS" title="AWS" />
                <Exp.Icon src={postgresIcon} alt="PostgreSQL" title="PostgreSQL" />
                <Exp.Icon src={mongoIcon} alt="MongoDB" title="MongoDB" />
              </Exp.JobTechs>
              </Exp.Job>
          </Exp.Wrapper>
          <Exp.Header>
            <h4>{t('Freela')}</h4>
          </Exp.Header>
          <Exp.Wrapper>
            <a href="https://drbrunomapurunga.com.br/" target="_blank" rel="noreferrer">
              <Exp.Job>
              <Exp.JobBody>
                <Exp.BusinessLogo src={brunoLogo} alt="Logo Bruno Mapurunga"/>
                <Exp.JobDescription>
                  <h4>Dr. Bruno Mapurunga - {t('Urologist')}</h4>
                  <p>2018</p>
                </Exp.JobDescription>
              </Exp.JobBody>
              <Exp.JobTechs>
                <Exp.Icon src={htmlIcon} alt="HTML" title="HTML" />
                <Exp.Icon src={cssIcon} alt="CSS" title="CSS" />
                <Exp.Icon src={jsIcon} alt="Javascript" title="Javascript" />
                <Exp.Icon src={adsIcon} alt="Google Ads" title="Google Ads" />
              </Exp.JobTechs>
              </Exp.Job>
            </a>
            <div>
              <a href="http://sindsems.org.br/" target="_blank" rel="noreferrer">
                <Exp.Job>
                  <Exp.JobBody>
                    <Exp.BusinessLogo src={sindsemsLogo} alt="Logo Sindsems"/>
                    <Exp.JobDescription>
                      <h4>{t('Sindsems')}</h4>
                      <p>2016</p>
                    </Exp.JobDescription>
                  </Exp.JobBody>
                  <Exp.JobTechs>
                    <Exp.Icon src={wordpressIcon} alt="Wordpress" title="Wordpress" />
                  </Exp.JobTechs>
                </Exp.Job>
              </a>
            </div>
          </Exp.Wrapper>
          <Exp.Header>
            <h4>{t('Checkout Github')}</h4>
          </Exp.Header>
          <Exp.Footer>
            <a href="https://github.com/rayonnunes" target="_blank" rel="noreferrer">
              <Exp.GithubLogo src={gitHubIcon} alt=""/>
            </a>
          </Exp.Footer>
      </Card>
  )
}

export default Experience
