"use strict";

class Utils {
  /**
   * Given a string, a regular expression, file name length and extra string length, find regular expression in string passed, then with fileNameLen and extraStrLen, as set init and last position to get pathfile from string. The function return an array of path files that be in the server stored.
   * @param {String} strContent
   * @param {String} RegularExpr
   * @param {Number} fileNameLen
   * @param {Number} extraStrLen
   */
  static searchPathFileByRegularExpr(
    strContent,
    RegularExpr,
    fileNameLen = 0,
    extraStrLen = 0
  ) {
    let position = strContent.search(RegularExpr);
    let init = position + RegularExpr.length;
    let last = init + extraStrLen + fileNameLen;
    let setNamePathFile = [];

    while (position != -1 && last < strContent.length) {
      setNamePathFile.push(strContent.substring(init, last));
      strContent = strContent.substring(last, strContent.length);
      position = strContent.search(RegularExpr);

      init = position + RegularExpr.length;
      last = init + extraStrLen + fileNameLen;
    }

    return setNamePathFile;
  }

  /**
   * Given a string, return a string formated with non special caracters and space remplace with a middle dash.
   * @param {String} description
   */
  static createAlias(description) {
    return description
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[¿?¡!*%$#@()_+=<>~]/g, "")
      .replace(/á/g, "a")
      .replace(/é/g, "e")
      .replace(/í/g, "i")
      .replace(/ó/g, "o")
      .replace(/ú/g, "u");
  }
}

module.exports = Utils;
