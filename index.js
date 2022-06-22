console.log('Hola')

function ingresar() {
    var usuario = document.getElementById('typeEmailX').value;
    var contrasenia = document.getElementById('typePasswordX').value;

    console.log(usuario, contrasenia)
    if ((usuario == 'u20181h213' && contrasenia == 'finanzas2022') || (usuario == 'u202014476' && contrasenia == 'finanzas2022'))
        window.location.replace('/Trabajo---Ing---Econ-mica/metodo_frances.html')

}



function modify() {
    const tabla_1 = document.getElementById('tabla_1')
    var precio_venta_activo = Number(document.getElementById('precio_venta_activo').value)
    var cuota_inicial = Number(document.getElementById('cuota_inicial').value)
    var n_anios = Number(document.getElementById('n_anios').value)
    var frecuencia_pago = Number(document.getElementById('frecuencia_pago').value)
    var n_dias_anio = Number(document.getElementById('n_dias_anio').value)
    tabla_1.innerHTML = `
    
                    <tbody>
                        <tr>
                            <th scope="row">Precio de Venta del Activo</th>
                            <td><input id="precio_venta_activo" type="number" onchange="modify()" value=${precio_venta_activo}></td>
                        </tr>
                        <tr>
                            <th scope="row">% Cuota Inicial</th>
                            <td><input id="cuota_inicial" type="number" onchange="modify()" value=${cuota_inicial}></td>
                        </tr>
                        <tr>
                            <th scope="row">Nº de Años</th>
                            <td><input id="n_anios" type="number" onchange="modify()" value=${n_anios}></td>
                        </tr>
                        <tr>
                            <th scope="row">Frecuencia de pago</th>
                            <td><input id="frecuencia_pago" type="number" onchange="modify()" value=${frecuencia_pago}></td>
                        </tr>
                        <tr>
                            <th scope="row">Nº de días por año</th>
                            <td><input id="n_dias_anio" type="number" onchange="modify()" value=${n_dias_anio}></td>
                        </tr>
                    </tbody>
                    `;

    //tabla 2

    const tabla_2 = document.getElementById('tabla_2')
    var costes_notariales = Number(document.getElementById('costes_notariales').value)
    var costes_registrales = Number(document.getElementById('costes_registrales').value)
    var tasacion = Number(document.getElementById('tasacion').value)
    var comision_estudio = Number(document.getElementById('comision_estudio').value)
    var comision_activacion = Number(document.getElementById('comision_activacion').value)
    tabla_2.innerHTML = `
    
    <tbody>
    <tr>
        <th scope="row">Costes Notariales </th>
        <td><input id="costes_notariales" type="number" onchange="modify()" value=${costes_notariales}></td>
    </tr>
    <tr>
        <th scope="row">Costes Registrales</th>
        <td><input id="costes_registrales" type="number" onchange="modify()" value=${costes_registrales}></td>
    </tr>
    <tr>
        <th scope="row">Tasación</th>
        <td><input id="tasacion" type="number" onchange="modify()" value=${tasacion}></td>
    </tr>
    <tr>
        <th scope="row">Comisión de estudio</th>
        <td><input id="comision_estudio" type="number" onchange="modify()" value=${comision_estudio}></td>
    </tr>
    <tr>
        <th scope="row">Comisión activación</th>
        <td><input id="comision_activacion" type="number" onchange="modify()" value=${comision_activacion}></td>
    </tr>
</tbody>
                    `;


    //tabla_3
    const tabla_3 = document.getElementById('tabla_3')
    var comision_periodica = Number(document.getElementById('comision_periodica').value)
    var portes = Number(document.getElementById('portes').value)
    var gastos_administracion = Number(document.getElementById('gastos_administracion').value)
    var seguro_desgravamem = Number(document.getElementById('seguro_desgravamem').value)
    var seguro_riesgo = Number(document.getElementById('seguro_riesgo').value)
    tabla_3.innerHTML = `
    
    <tbody>
    <tr>
        <th scope="row">Comisión periodica</th>
        <td><input id="comision_periodica" type="number" onchange="modify()" value=${comision_periodica}></td>
    </tr>
    <tr>
        <th scope="row">Portes</th>
        <td><input id="portes" type="number" onchange="modify()" value=${portes}></td>
    </tr>
    <tr>
        <th scope="row">Gastos de Administración</th>
        <td><input id="gastos_administracion" type="number" onchange="modify()" value=${gastos_administracion}></td>
    </tr>
    <tr>
        <th scope="row">% de Seguro desgravamen</th>
        <td><input id="seguro_desgravamem" type="number" onchange="modify()" value=${seguro_desgravamem}></td>
    </tr>
    <tr>
        <th scope="row">% de Seguro riesgo</th>
        <td><input id="seguro_riesgo" type="number" onchange="modify()" value=${seguro_riesgo}></td>
    </tr>
</tbody>
                    `;


    //tabla_4
    const tabla_4 = document.getElementById('tabla_4')
    var tasa_descuento = Number(document.getElementById('tasa_descuento').value)
    tabla_4.innerHTML = `
    
    <tbody>
                        <tr>
                            <th scope="row">Tasa de descuento</th>
                            <td><input id="tasa_descuento" type="number" onchange="modify()" value=${tasa_descuento}></td>
                        </tr>
                    </tbody>
                    `;


    //RES

    //tabla 5
    const tabla_5 = document.getElementById('tabla_5')
    var saldo_financiar = precio_venta_activo - (precio_venta_activo * (cuota_inicial / 100));
    var monto_prestamo = saldo_financiar + costes_notariales + costes_registrales + tasacion + comision_estudio
    var n_cuotas_anio = n_dias_anio / frecuencia_pago
    var n_total_cuotas = n_cuotas_anio * n_anios
    tabla_5.innerHTML = `
    
    <tbody>
                        <tr>
                            <th scope="row">Saldo a financiar</th>
                            <td>
                                <input id="saldo_financiar" type="number" onchange="modify()" value=${saldo_financiar}></td>
                        </tr>
                        <tr>
                            <th scope="row ">Monto del préstamo</th>
                            <td><input id="monto_prestamo" type="number" onchange="modify()" value=${monto_prestamo}></td>
                        </tr>
                        <tr>
                            <th scope="row ">Nº Cuotas por Año</th>
                            <td><input id="n_cuotas_anio" type="number" onchange="modify()" value=${n_cuotas_anio}></td>
                        </tr>
                        <tr>
                            <th scope="row ">Nº Total de Cuotas</th>
                            <td><input id="n_total_cuotas" type="number" onchange="modify()" value=${n_total_cuotas}></td>
                        </tr>
                    </tbody>
                    `;


    //tabla_6
    const tabla_6 = document.getElementById('tabla_6')
    var seguro_desgrav_per = (seguro_desgravamem) * (frecuencia_pago / 30)
    var seguro_riesgo_resultado = (seguro_riesgo / 100) * (precio_venta_activo / n_cuotas_anio)
    tabla_6.innerHTML = `
    
    <tbody>
                        <tr>
                            <th scope="row ">% de Seguro desgrav. per.</th>
                            <td><input id="seguro_desgrav_per" type="number" onchange="modify() " value=${seguro_desgrav_per}></td>
                        </tr>
                        <tr>
                            <th scope="row ">Seguro riesgo</th>
                            <td><input id="seguro_riesgo_resultado" type="number " onchange="modify() " value=${seguro_riesgo_resultado}></td>
                        </tr>
                    </tbody>
                    `;









    //tabla_7
    const tabla_7 = document.getElementById('tabla_7')
    tabla_7.innerHTML = `
    
    <tbody>
    <tr>
        <th scope="row ">Intereses</th>
        <td><input id="intereses " type="number " onchange="modify() "></td>
    </tr>
    <tr>
        <th scope="row ">Amortización del capital</th>
        <td><input id="amortizacion_capital " type="number " onchange="modify() "></td>
    </tr>
    <tr>
        <th scope="row ">Seguro de desgravamen</th>
        <td><input id="seguro_desgravamen_resultado " type="number " onchange="modify() "></td>
    </tr>
    <tr>
        <th scope="row ">Seguro contra todo riesgo</th>
        <td><input id="seguro_contra_todo_riesgo " type="number " onchange="modify() "></td>
    </tr>
    <tr>
        <th scope="row ">Comisiones periodicas</th>
        <td><input id="comisiones_periodicas " type="number " onchange="modify() "></td>
    </tr>
    <tr>
        <th scope="row ">Portes / Gastos de adm.</th>
        <td><input id="portes_gastos_adm " type="number " onchange="modify() "></td>
    </tr>
</tbody>
                    `;

}