class Facturacion{
    constructor() {
    }
    
    pago(tipo){
       if(tipo=="postpago")
       return true
       return false

    }

    planPostpago(pago){
        if(pago==200)
        return "WAO"
        if(pago==50)
        return "S a medida"
        if(pago==100)
        return "M a medida"
        if(pago==150)
        return "L a medida"

    }

    plan(tipo, monto){ 
        if(this.pago(tipo))
        return this.planPostpago(monto)
        return tipo
    }

    extras(tipo, monto){
        if(this.plan(tipo,monto)!="prepago" && this.plan(tipo,monto)!="WAO")
        return true
        return false
    }

    
}
export default Facturacion