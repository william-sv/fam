import EncUtf8 from 'crypto-js/enc-utf8';
import AES from 'crypto-js';

// 加密
export const encrypt = (word,salt) => {
  let srcs = EncUtf8.parse(word);
  let encrypted = AES.encrypt(srcs, salt);
  return encrypted.toString();
};

// 解密

export const decrypt = (cryptWord,salt) => {
  let decrypt = AES.decrypt(cryptWord, salt);
  return EncUtf8.stringify(decrypt).toString();
};

