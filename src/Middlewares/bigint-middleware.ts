// middleware/bigint-middleware.ts
import { Request, Response, NextFunction } from 'express';

// Tipo para el replacer
type Replacer = (key: string, value: any) => any;

export function bigIntReplacer(key: string, value: any): any {
  if (typeof value === 'bigint') {
    return value.toString();
  }
  
  if (value instanceof Date) {
    return value.toISOString();
  }
  
  if (value === null || value === undefined) {
    return value;
  }
  
  return value;
}

export function bigIntSerializer(req: Request, res: Response, next: NextFunction): void {
  const originalSend = res.send;
  
  res.send = function <T>(data: T): Response<T> {
    if (typeof data === 'object' && data !== null) {
      const serializedData = JSON.parse(JSON.stringify(data, bigIntReplacer));
      return originalSend.call(this, serializedData);
    }
    return originalSend.call(this, data);
  };
  
  next();
}