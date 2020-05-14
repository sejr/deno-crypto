/**
 * The AesKeyGenParams dictionary of the Web Crypto API represents the object that should be
 * passed as the algorithm parameter into SubtleCrypto.generateKey(), when generating an AES
 * key: that is, when the algorithm is identified as any of AES-CBC, AES-CTR, AES-GCM, or AES-KW.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/AesKeyGenParams
 */
export interface AesKeyGenParams {
    name: 'AEC-CBC' | 'AES-CTR' | 'AES-GCM' | 'AES-KW',
    length: 128 | 192 | 256
}