import JSEncrypt from 'jsencrypt'

export function jsEncrypt(str) {
    let encrypt = new JSEncrypt();
    let key = `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgZbK33WxyTm+mQlnrpDhrlRlSMi54zSVKUICvh234DfN5/UOuRd5xcIQ17zSGX/pttcZM95pTJv1MHDj4FvjEtWAyX3rTL/6tGixyVZmv5T93ok6ZXe6ZDyJIQ5mbrQFBh2/im92gOI+iGIebb0FihEYCqr1C08ik/ppxitr6+Do7bHL1LZeYdYAQ/hgoY9IIzt2N5QBlFOmaMK99omSIQ3Wu6ojfNla6ENWdmW3yxw7F0sDWQON0dsYQOiUw8DQ8UV5HWBf/wbhpTWHKrfWAk3kzZhD1AFBhtnwkQKvl0HQLl3kP/bjBDq0ocFsCtokvQxyrB1c0JOqly9e8hzU/QIDAQAB`
    encrypt.setPublicKey(key);
    let data = encrypt.encrypt(str);
    let code = encodeURI(data).replace(/\+/g, '%2B')
    return code
}