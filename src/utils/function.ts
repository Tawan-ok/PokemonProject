import { isAxiosError } from 'axios'
import dayjs from 'dayjs'

import { API_ERROR_RESPONSE } from '../constants/constants'

export const isIPad =
  navigator.userAgent.match(/(iPad)/) /* iOS pre 13 */ ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) /* iPad OS 13 */

export const convertDateFormat = (dateValue: Date) => {
  return dateValue ? dayjs(dateValue).format('YYYY-MM-DD HH:mm:ss') : ''
}

export const formatTimestamp = (timestamp: number) => {
  return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
}

export const resolveApiError = (error: unknown): API_ERROR_RESPONSE => {
  if (!isAxiosError(error) || !error.response || !error.response.data.status.description.en) {
    const data = {
      status: {
        code: 'xxxx',
        description: {
          en: 'Oops, something went wrong',
          th: '',
        },
      },
    }
    return data as API_ERROR_RESPONSE
  }
  return error.response?.data
}

export const queryString = () => {
  return new URLSearchParams(window.location.search)
}
