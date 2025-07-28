export {}

declare global {
  interface Request {
    /**
     * doNotShowLoading
     * @description If true, the loading indicator will not be shown
     */
    doNotShowLoading?: boolean
  }
}
