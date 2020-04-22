const DEFAULT_STATUS = 500;
const DEFAULT_CODE = 'error_code';
const DEFAULT_ERROR = 'Error';
const DEFAULT_ERROR_CODE = 500;
const DEFAULT_ERROR_MESSAGE = 'Sorry an internal error has occurred';

/**
 * handleError
 *
 * @param {Object} error
 * @param {Number} error.status - response status
 * @param {String} error.code - response status code
 * @param {String} error.message - text to export
 * @param {Object[]} error.responseErrors
 */
function handleError(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  const {
    status = DEFAULT_STATUS,
    code = DEFAULT_CODE,
    name = DEFAULT_ERROR,
    message = DEFAULT_ERROR_MESSAGE,
    responseErrors,
  } = error;

  const response = {
    error: error.inner ? error.inner.name || name : name,
    message,
    status: status || DEFAULT_STATUS,
    code: code || DEFAULT_ERROR_CODE,
  };

  if (responseErrors) {
    response.errors = responseErrors;
  }

  return res.status(status).json(response);
}

function initHandleError(app) {
  app.use(handleError);

  console.log('INITIALIZE: handleError middleware');
}

module.exports = initHandleError;
