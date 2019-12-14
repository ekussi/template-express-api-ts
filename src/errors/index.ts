import { helpers } from 'common-errors';

const JoiValidationError = helpers.generateClass('JoiValidationError');
const RandNumGeneratorError = helpers.generateClass('RandNumGeneratorError');

export {
  JoiValidationError,
  RandNumGeneratorError,
};
export default {
  JoiValidationError,
  RandNumGeneratorError,
};
