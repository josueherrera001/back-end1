// types/bigint.d.ts
declare global {
  interface BigInt {
    toJSON(): string;
  }
}

export {};