export const parseCookies = (
  cookies: string | { [key: string]: string },
  target?: string,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let allCookies: { [key: string]: any } = {};

  if (typeof cookies !== 'string') {
    if (!target) {
      throw new Error('Non string cookies require the "target" param.');
    }

    allCookies = JSON.parse(cookies[target]);

    return allCookies;
  }

  allCookies = cookies.split(';').reduce((previous, current) => {
    const [key, val] = current.trim().split('=').map(decodeURIComponent);

    try {
      return Object.assign(previous, { [key]: JSON.parse(val) });
    } catch (e) {
      return Object.assign(previous, { [key]: val });
    }
  }, {});

  return target ? allCookies[target] : allCookies;
};
