/* @fwrlines/generator-react-component 2.1.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import {
  Page,
  Heading ,
  SupportEmailLink
} from '@fwrlines/ds'

import { FormattedMessage } from 'react-intl'
import messages from './Unauthorized.messages'

import { Link } from 'react-router-dom'
//Config
//import C from 'ui/cssClasses'

//const baseClassName = 'page_unauthorized'
const baseId = 'page_unauthorized'

import URLS from '../urls'

const helmet = {
  robots   :'noindex, nofollow',
  title    :'test of the title',
  title_tag:'this should appear in the title tag'

  /*
  canonical          :'https://home.com/description',
  meta_description   :'This is the meta description. 170 chars.',
  twitter_title      :'For twitter, a title',
  twitter_description:'',
  twitter_image      :'',
  og_title           :'This is the open graph title',
  og_description     :'',
  og_image           :'',
  og_type            :'',
  og_url             :''
  */
}

const mainHeadingProps = {
  //id,
  //className:'uc',
  //style,
  //children, //appended at bottom

  subtitle:<FormattedMessage {...messages.unauthorizedSubtitle} />,
  //subtitleClassName,
  //subtitleProps:{},

  heading  :<FormattedMessage {...messages.unauthorizedTitle} />,
  //headingClassName:'ts-green',
  headingAs:'h1',
  //headingProps :{}

  label         :<FormattedMessage {...messages.error} />,
  labelClassName:'x-red basic'
  //labelAs:'p',
  //labelProps :{}
}

/**
 * Page `Unauthorized`
 * Description :
 */
const Unauthorized = ({
  //someprop
}) => (
  <Page
    id={baseId}
    HELMET={helmet}
    style={{
      height        :'100%',
      display       :'flex',
      flexDirection :'column',
      justifyContent:'center',
      alignItems    :'center'
    }}
  >
    <Page.Section
      head
      className="p-u u2 uc"
      id="head"
    >
    
      <Heading {...mainHeadingProps} />
    </Page.Section>
    <Page.Section
      id="a1"
      className="p-u u2 uc"
    >
      <p>
        <FormattedMessage
          {...messages.unauthorizedExplanation}
          values={{
            link:<Link to={URLS.LOGIN}>
              <FormattedMessage {...messages.here} />
            </Link>

          }}
        />
        {' '}
        <SupportEmailLink label={
          <FormattedMessage {...messages.unauthorizedContact} />
        }
        />
      </p>
    
    </Page.Section>
  </Page>

)

Unauthorized.propTypes = {

  /**
   *
   */
  someprop:PropTypes.node

  /*
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  : PropTypes.func,
  styles: PropTypes.object,
  : PropTypes.oneOf(['', ''])
  */
}

/*
Unauthorized.defaultProps = {
  status: 'neutral',
}
*/


export default Unauthorized
