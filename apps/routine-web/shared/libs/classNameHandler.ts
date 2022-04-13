/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * CLASSNAME HANDLER. This creates a className string from an array of variables.
 *
 * @remarks
 ** If the array item received exists and IS STRING TYPE, the VALUE is returned;
 *
 ** If the array item received exists (true), and is NOT string type, the VAR NAME
 * is returned (not the value);
 *
 ** If the array item received is another ARRAY with TWO itens, and the first item
 * exists (true), the VALUE OF THE SECOND is returned.
 *
 * @example
 * Generate the string: "lorem ipsum varThree"
 * ```ts
 * const varOne = 'lorem';
 * const varTwo = true;
 * const varThree = true;
 * const varFour = false;
 * classNames([varOne, [varTwo, 'ipsum'], varThree, varFour]);
 * ```
 *
 * @param classNameArray Array with variables: (1.) of className string value;
 * (2.) with var names that will be converted to string; (3.) of array with
 * two values [varToBeChecked, "class-name"].
 * @returns Returns a formatted className string.
 */
export const classNameHandler = (classNameArray: any[]): string =>
  classNameArray.reduce((acc: string, className: any | [any, string]) => {
    if (className) {
      if (typeof className === 'string') {
        return `${acc || ''} ${className}`;
      }

      if (Array.isArray(className)) {
        if (className.length === 2 && className[0]) {
          return `${acc || ''} ${className[1]}`;
        }

        return `${acc || ''}`;
      }

      return `${acc || ''} ${Object.keys(className)[0]}`;
    }

    return `${acc || ''}`;
  });
