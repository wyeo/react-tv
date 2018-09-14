/**
 * Copyright (c) 2017-present, Raphael Amorim.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

function isLGWebOS() {
  return !!(window && window.PalmSystem);
}

function isSamsungTizen() {
  return !!(window && window.tizen)
}

// @todo
// Not sure if this list of userAgent is specifiq for laptop browser...
function isLaptopBrowser() {
  return navigator && navigator.userAgent && [
    'OPR',
    'Edge',
    'MSIE',
    'Opera',
    'Safari',
    'Chrome',
    'Trident',
    'Firefox',
  ].some(n => navigator.userAgent.includes(n))
}

function isSamsungOrsay() {
  return false;
}

function Plaform(checkPlatform: string) {
  switch (checkPlatform) {
    case 'laptop':
      return isLaptopBrowser()
    case 'webos':
      return isLGWebOS();
    case 'tizen':
      return isSamsungTizen();
    case 'orsay':
      return isSamsungOrsay();
    default:
      return false;
  }
}

export default Plaform;
