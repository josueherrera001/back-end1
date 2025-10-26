export class ErrorSpecific {
  static ErrorEmpty(message: string) {
    return {
      code: 400,
      message: message,
    };
  }

  static ErrorDB(error: any) {
    switch (error.code) {
      case "P2001":
        return {
          code: 404,
          message: "El registro que intenta acceder no existe",
        };
      case "P2002":
        return {
          code: 409,
          message: `Ya existe un registro con los mismos datos --> ${error.meta.target.split('_')[1]}`,
        };
      case "P2003":
        return {
          code: 409,
          message:
            "El registro que intenta eliminar esta siendo utilizado en otro registro",
        };
      case "P2025":
        return {
          code: 400,
          message: "El registro que intenta actualizar no existe",
        };
      default:
        return {
          code: 400,
          message: "Contacte al administraror del sistema",
        };
    }
  }
}
