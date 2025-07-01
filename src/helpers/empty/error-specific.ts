export class ErrorSpecific{
      static ErrorEmpty(message: string){
        return {
        code: 400,
        message: message,
        };
    }
}