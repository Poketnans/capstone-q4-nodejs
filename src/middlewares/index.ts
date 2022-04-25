import validateSchemaMiddleware from "./validateSchema.middleware";
import validateAuth from "./validateAuth.middleware";

export {
  // por ter somente uma importação o slint reclama para exportar default ao inves de desfragmentado
  // eslint-disable-next-line import/prefer-default-export
  validateSchemaMiddleware,
  validateAuth,
}