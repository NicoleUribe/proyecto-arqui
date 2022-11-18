import Facturacion from "./telecomunicacion.js";

describe("telecomunicacion", () => {

  
    const factura = new Facturacion();

  it("1. Tipo de pago", () => {
    expect(factura.pago("postpago")).toEqual(true);
    expect(factura.pago("prepago")).toEqual(false);
  });

  it("2. Tipo de plan postpago", () => {
    expect(factura.plan("postpago", 200)).toEqual("WAO");
    expect(factura.plan("postpago", 150)).toEqual("L a medida");
    expect(factura.plan("postpago", 50)).toEqual("S a medida");
    expect(factura.plan("postpago", 100)).toEqual("M a medida");
  });

  it("3. Tipo de plan", () => {
    expect(factura.plan("prepago", 150)).toEqual("prepago");
  });

  it("4. Identificar cuando no pueden tener addON", () => {
    expect(factura.extras("postpago", 200)).toEqual(false);
    expect(factura.extras("prepago", 130)).toEqual(false);
  });

  it("5. Identificar addON", () => {
    expect(factura.extras("postpago", 50)).toEqual(true);
    expect(factura.extras("postpago", 100)).toEqual(true);
  });
});