/**
 * The HmacKeyGenParams dictionary of the Web Crypto API represents the object that should be
 * passed as the algorithm parameter into SubtleCrypto.generateKey(), when generating a key for
 * the HMAC algorithm.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/HmacKeyGenParams
 */
export interface HmacKeyGenParams {
    name: 'HMAC',
    hash: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512',
    length?: number;
}