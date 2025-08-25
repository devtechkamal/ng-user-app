export function successResponse(message: string, data: any = []) {
  return {
    status: true,
    message,
    data,
  };
}

export function errorResponse(message: string, data: any = []) {
  return {
    status: false,
    message,
    data,
  };
}
