import globalAxios, { type AxiosRequestConfig, type AxiosInstance } from 'axios'

import { Configuration } from './configuration'

export const BASE_PATH = 'https://eth.blockscout.com/api/v2/'.replace(
  /\/+$/,
  '',
)

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
}

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
  url: string
  options: AxiosRequestConfig
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
  protected configuration: Configuration | undefined

  constructor(
    configuration?: Configuration,
    protected basePath: string = BASE_PATH,
    protected axios: AxiosInstance = globalAxios,
  ) {
    if (configuration) {
      this.configuration = configuration
      this.basePath = configuration.basePath || this.basePath
    }
  }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name: 'RequiredError'
  constructor(
    public field: string,
    msg?: string,
  ) {
    super(msg)
  }
}
