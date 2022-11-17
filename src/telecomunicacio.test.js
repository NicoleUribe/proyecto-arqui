import Facturacion from "./telecomunicacion.js";

describe("telecomunicacion", () => {
    const factura = new Facturacion();
  it("1. Tipo de pago", () => {
    expect(factura.pago("postpago")).toEqual(true);
    expect(factura.pago("prepago")).toEqual(false);
  });

});