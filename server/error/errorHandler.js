export default class ErrorHandlerCLass extends Error{
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message
    }

    static badRequest(message) {
        return new ErrorHandlerCLass(404, message)
    }

    static internal(message) {
        return new ErrorHandlerCLass(500, message)
    }

    static forbidden(message) {
        return new ErrorHandlerCLass(403, message)
    }
}