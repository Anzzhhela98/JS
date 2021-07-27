function solve(obj) {
    // Invalid request header: Invalid {Method/URI/Version/Message}
    const currentMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const currentVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (obj.method === undefined || !currentMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (obj.version === undefined || !currentVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (obj.uri === undefined || !(/^([a-zA-Z0-9\.]+|\*)$/gm.test(obj.uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (obj.message === undefined || !/^[^<>\\&'"]*$/gm.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj
}

console.log(
    solve(
        {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        }))