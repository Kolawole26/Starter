// composables/error.js
import { ref } from 'vue'

export function useErrorHandler() {
  const error = ref(null)
  const statusCode = ref(null)

  const statusMessages = {
    400: 'Please check your input and try again.',
    409: 'Conflict error. Please try again later.',
    498: 'Invalid token. Please log in again.',
    423: 'Resource is locked. Please try again later.',
    429: 'Too many requests. Please try again later.',
    422: 'Unprocessable entity. Please check your input.',
    default: 'An unexpected error occurred. Please try again.',
  }

  function handleError(err) {
    const errorResponse = err.response || err
    statusCode.value = errorResponse.status || 500
    error.value = statusMessages[statusCode.value] || errorResponse.message || statusMessages.default

    if (statusCode.value === 401) {
      localStorage.clear()
      window.location.href = '/login?message=session-expired'
    }

        // Handle 409 with original message
    if (statusCode.value === 409 && errorResponse.message) {
      error.value = errorResponse.message;
    } else {
        error.value = errorResponse.message ? statusMessages[statusCode.value] || statusMessages.default : statusMessages.default;
    }


    return { error: error.value, statusCode: statusCode.value }
  }

  function clearError() {
    error.value = null
    statusCode.value = null
  }

  return { error, statusCode, handleError, clearError }
}
