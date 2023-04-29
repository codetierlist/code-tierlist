/**
 * converts text into a url friendly string
 * TODO actually use this lol
 * @param {*} param0
 * @returns
 */

export const Urlify = ({url}) => (url.replaceAll(" ", "-").toLowerCase());
