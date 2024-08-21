export const RELEASE_GROUP = {
  'release4.3': {
    dev: '',
    sit: '',
    uat: 'UAT1',
    pt: '',
    ps: 'PS',
  },
  release5: {
    dev: 'DEV3',
    sit: 'SIT3',
    uat: 'UAT3',
    pt: 'PT',
    ps: '',
  },
  release6: {
    dev: 'DEV2',
    sit: 'SIT2',
    uat: 'UAT2',
    pt: '',
    ps: '',
  },
  'release7.2': {
    dev: 'DEV1',
    sit: 'SIT1',
    uat: '',
    pt: '',
    ps: '',
  },
}
export const envMapping = {
  SIT1: 'DEV1',
  SIT2: 'DEV2',
  UAT2: 'SIT2',
  SIT3: 'DEV3',
  UAT3: 'SIT3',
}

export const DEPLOYMENT_STATUS_SUCCESS = 'SUCCESS'
export const DEPLOYMENT_STATUS_FAILURE = 'FAILURE'
export const DEPLOYMENT_STATUS_ABORTED = 'ABORTED'

export const ENV_LIST = [
  'DEV1',
  'DEV2',
  'DEV3',
  'SIT1',
  'SIT2',
  'SIT3',
  'UAT1',
  'UAT2',
  'UAT3',
  'PS',
  'PT',
]

export const FORMAT_DATE = 'YYYY-MM-DD HH:mm:ss'

export interface API_ERROR_RESPONSE {
  status: API_ERROR_STATUS
}

interface API_ERROR_STATUS {
  code: string
  description: API_ERROR_DESCRIPTION
}

interface API_ERROR_DESCRIPTION {
  en: string
  th: string
}
