import { CryptoKey } from "../crypto_key.ts";

export type RsaOaepParams = {};
export type AesCtrParams = {};
export type AesCbcParams = {};

export type EncryptionAlgorithmParams =
  | RsaOaepParams
  | AesCtrParams
  | AesCbcParams;

/**
 * Returns a Promise that fufills with the encrypted data corresponding to the clear text,
 * algorithm, and key given as parameters.
 *
 * @param algorithm Object specifying algorithm to be used, and any extra parameters if required.
 * @param key
 * @param data
 */
export async function encrypt(
  algorithm: EncryptionAlgorithmParams,
  key: CryptoKey,
  data: any
): Promise<ArrayBuffer> {
  return new ArrayBuffer(8);
}