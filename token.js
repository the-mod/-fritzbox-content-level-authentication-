// see: https://avm.de/fileadmin/user_upload/Global/Service/Schnittstellen/AVM_TR-064_first_steps.pdf

const crypto = require('crypto');

const nonce = 'token you got';
const realm = 'realm you got';
const user = 'user';
const password = 'password';

const secret = crypto.createHash('md5').update(`${user}:${realm}:${password}`).digest('hex');
console.log('secret', secret);

const hash = crypto.createHash('md5').update(`${tmp}:${nonce}`).digest('hex');
console.log(hash);
