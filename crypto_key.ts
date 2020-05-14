import { AesKeyGenParams } from "./aes/mod.ts";
import { RsaHashedKeyGenParams } from "./rsa/mod.ts";
import { EcKeyGenParams } from "./ec/mod.ts";
import { HmacKeyGenParams } from "./hmac/mod.ts";

export type Usage =
  | "encrypt"
  | "decrypt"
  | "sign"
  | "verify"
  | "deriveKey"
  | "deriveBits"
  | "wrapKey"
  | "unwrapKey";

/**
 * The CryptoKey interface of the Web Crypto API represents a cryptographic key obtained from
 * one of the SubtleCrypto methods generateKey(), deriveKey(), importKey(), or unwrapKey().
 * 
 * For security reasons, the CryptoKey interface can only be used in a secure context.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey
 */
export interface CryptoKey {
  type: "secret" | "private" | "public";
  extractable: boolean;
  algorithm:
    | AesKeyGenParams
    | RsaHashedKeyGenParams
    | EcKeyGenParams
    | HmacKeyGenParams;
  usages: Usage[];
}
