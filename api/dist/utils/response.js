"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = successResponse;
exports.errorResponse = errorResponse;
function successResponse(message, data = []) {
    return {
        status: true,
        message,
        data,
    };
}
function errorResponse(message, data = []) {
    return {
        status: false,
        message,
        data,
    };
}
//# sourceMappingURL=response.js.map