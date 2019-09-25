module.exports = class Response {
    constructor(success, data, message) {
        this.Success = success;
        this.Data = data;
        this.Message = message;
    }
}