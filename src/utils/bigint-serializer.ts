// utils/bigint-serializer.ts
export function configureBigIntSerialization(): void {
  // Solución global para JSON.stringify - Type Safe
  (BigInt.prototype as any).toJSON = function (this: bigint): string {
    return this.toString();
  };
}