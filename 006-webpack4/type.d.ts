declare module '*.js'
declare module '*.png'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare const IS_PRODUCTION: boolean
declare const ENV_ID: number
declare const CONSTANTS: {}
