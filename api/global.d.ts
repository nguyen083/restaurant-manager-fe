export {}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Request {
    /**
     * doNotShowLoading
     * @description If true, the loading indicator will not be shown
     */
    doNotShowLoading?: boolean
    /**
     * sessionToken
     * @description If true, the session token will be set
     */
    sessionToken?: string
  }
}
