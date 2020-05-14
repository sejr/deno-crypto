/**
 * The EcKeyGenParams dictionary of the Web Crypto API represents the object that should be
 * passed as the algorithm parameter into SubtleCrypto.generateKey(), when generating any
 * elliptic-curve-based key pair: that is, when the algorithm is identified as either of
 * ECDSA or ECDH.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/EcKeyGenParams
 */
export interface EcKeyGenParams {
    name: 'ECDSA' | 'ECDH',
    namedCurve: 'P-256' | 'P-384' | 'P-521'
}