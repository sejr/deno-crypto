/**
 * The RsaHashedKeyGenParams dictionary of the Web Crypto API represents the object that should
 * be passed as the algorithm parameter into SubtleCrypto.generateKey(), when generating any
 * RSA-based key pair: that is, when the algorithm is identified as any of RSASSA-PKCS1-v1_5,
 * RSA-PSS, or RSA-OAEP.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/RsaHashedKeyGenParams
 */
export interface RsaHashedKeyGenParams {
  name: "RSASSA-PKCS1-v1_5" | "RSA-PSS" | "RSA-OAEP";
  modulusLength: number;
  publicExponent: Uint8Array;
  hash: "SHA-256" | "SHA-384" | "SHA-512";
}
