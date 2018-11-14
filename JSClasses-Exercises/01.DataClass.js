class Request {

    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        if (this.message) {
            this.fulfilled = false;
        } else {
            this.fulfilled = true;
        }
    }
}




let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')


console.log(myData);