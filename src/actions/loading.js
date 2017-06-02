import * as actionTypes from './actionTypes'

export function setLoading(  currentlyLoading  ) {
  return {
    type: actionTypes.CURRENTLY_LOADING,
    currentlyLoading
  }
}