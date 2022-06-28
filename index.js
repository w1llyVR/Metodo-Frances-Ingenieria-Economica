console.log('Hola')
var year, month, day;

var iniciado = false;




var arr = [
    []
];
for (let h = 0; h < 30; h++) {
    arr.push(new Array());
}

function get_date(days, fecha_actual) {
    var date = new Date(fecha_actual)
    date.addDays(days, date);

    var res = '';
    res += year + '-' + month + '-' + day;
    return res;
}
//15/06/2022 
//console.log(get_date(32, '2022-03-15'))

function ingresar() {
    var usuario = document.getElementById('typeEmailX').value;
    var contrasenia = document.getElementById('typePasswordX').value;

    console.log(usuario, contrasenia)
    if ((usuario == 'u20181h213' && contrasenia == 'finanzas2022') || (usuario == 'u202014476' && contrasenia == 'finanzas2022'))
        window.location.replace('/Trabajo---Ing---Econ-mica/metodo_frances.html')

}

function s_frecuencia_cupon() {
    const tabla_1 = document.getElementById('s_frecuencia_cupon')

}

function modify() {
    const tabla_1 = document.getElementById('tabla_1')
    var valor_nominal = Number(document.getElementById('valor_nominal').value)
    var valor_comercial = Number(document.getElementById('valor_comercial').value)
    var n_anios = Number(document.getElementById('n_anios').value)
    var frecuencia_cupon = (document.getElementById('frecuencia_cupon')).value
    var dias_x_anio = Number(document.getElementById('dias_x_anio').value)
    var tipo_tasa_interes = (document.getElementById('tipo_tasa_interes').value)
    var capitalizacion = (document.getElementById('capitalizacion').value)
    var tasa_interes = Number(document.getElementById('tasa_interes').value)
    var tasa_anual_descuento = Number(document.getElementById('tasa_anual_descuento').value)
    var imp_renta = Number(document.getElementById('imp_renta').value)
    var fecha_emision = (document.getElementById('fecha_emision').value)
    console.log(typeof(fecha_emision), fecha_emision)

    tabla_1.innerHTML = `
    
    <tbody>
    <tr>
        <th scope="row">Valor Nominal</th>
        <td><input id="valor_nominal" type="number" onchange="modify()" value="${valor_nominal}"></td>
    </tr>
    <tr>
        <th scope="row">Valor Comercial</th>
        <td><input id="valor_comercial" type="number" onchange="modify()" value="${valor_comercial}"></td>
    </tr>
    <tr>
        <th scope="row">Nº de Años</th>
        <td><input id="n_anios" type="number" onchange="modify()" value="${n_anios}"></td>
    </tr>
    <tr>
        <th scope="row">Frecuencia del cupón</th>
        <td><input id="frecuencia_cupon" type="text" onchange="modify()" value="${frecuencia_cupon}"></td>
    </tr>
    <tr>
        <th scope="row">Dias x Año</th>
        <td><input id="dias_x_anio" type="number" onchange="modify()" value="${dias_x_anio}"></td>
    </tr>
    <tr>
        <th scope="row">Tipo de Tasa de Interés</th>
        <td><input id="tipo_tasa_interes" type="text" onchange="modify()" value="${tipo_tasa_interes}"></td>
    </tr>
    <tr>
        <th scope="row">Capitalización</th>
        <td><input id="capitalizacion" type="text" onchange="modify()" value="${capitalizacion}"></td>
    </tr>
    <tr>
        <th scope="row">Tasa de interés</th>
        <td><input id="tasa_interes" type="number" onchange="modify()" value="${tasa_interes}"></td>
    </tr>
    <tr>
        <th scope="row">Tasa anual de descuento</th>
        <td><input id="tasa_anual_descuento" type="number" onchange="modify()" value="${tasa_anual_descuento}"></td>
    </tr>
    <tr>
        <th scope="row">Imp. a la Renta</th>
        <td><input id="imp_renta" type="number" onchange="modify()" value="${imp_renta}"></td>
    </tr>
    <tr>
        <th scope="row">Fecha de Emisión</th>
        <td><input style="width: 61%;" id="fecha_emision" type="date" onchange="modify()" value="${fecha_emision}"></td>
    </tr>
</tbody>
                    `;


    //tabla 2

    const tabla_2 = document.getElementById('tabla_2')
    var prima = Number(document.getElementById('prima').value)
    var estructuracion = Number(document.getElementById('estructuracion').value)
    var colocacion = Number(document.getElementById('colocacion').value)
    var flotacion = Number(document.getElementById('flotacion').value)
    var cavali = Number(document.getElementById('cavali').value)

    tabla_2.innerHTML = `
    
    <tbody>
    <tr>
        <th scope="row">% Prima </th>
        <td><input id="prima" type="number" onchange="modify()" value="${prima}"></td>
    </tr>
    <tr>
        <th scope="row">% Estructuración</th>
        <td><input id="estructuracion" type="number" onchange="modify()" value="${estructuracion}"></td>
    </tr>
    <tr>
        <th scope="row">% Colocación</th>
        <td><input id="colocacion" type="number" onchange="modify()" value="${colocacion}"></td>
    </tr>
    <tr>
        <th scope="row">% Flotación</th>
        <td><input id="flotacion" type="number" onchange="modify()" value="${flotacion}"></td>
    </tr>
    <tr>
        <th scope="row">% CAVALI</th>
        <td><input id="cavali" type="number" onchange="modify()" value="${cavali}"></td>
    </tr>
</tbody>
                    `;


    //tabla_3
    const tabla_3 = document.getElementById('tabla_3')
    var frecuencia_cupon_tabla3;
    if (frecuencia_cupon == 'Mensual') frecuencia_cupon_tabla3 = 30;
    else if (frecuencia_cupon == 'Bimestral') frecuencia_cupon_tabla3 = 60;
    else if (frecuencia_cupon == 'Trimestral') frecuencia_cupon_tabla3 = 90;
    else if (frecuencia_cupon == 'Cuatrimestral') frecuencia_cupon_tabla3 = 120;
    else if (frecuencia_cupon == 'Semestral') frecuencia_cupon_tabla3 = 180;
    else frecuencia_cupon_tabla3 = 360;
    var dias_capitalizacion;
    if (capitalizacion == 'Diaria') dias_capitalizacion = 1;
    else if (capitalizacion == 'Quincenal') dias_capitalizacion = 15;
    else if (capitalizacion == 'Mensual') dias_capitalizacion = 30;
    else if (capitalizacion == 'Bimestral') dias_capitalizacion = 60;
    else if (capitalizacion == 'Trimestral') dias_capitalizacion = 90;
    else if (capitalizacion == 'Cuatrimestral') dias_capitalizacion = 120;
    else if (capitalizacion == 'Semestral') dias_capitalizacion = 180;
    else dias_capitalizacion = 360;
    var n_peridios_anio = dias_x_anio / frecuencia_cupon_tabla3;
    var total_periodos = n_anios * n_peridios_anio;
    var tasa_efectiva_anual;
    if (tipo_tasa_interes == 'Efectiva') tasa_efectiva_anual = tasa_interes;
    else if (tipo_tasa_interes == 'Nominal') {
        let base = 1 + ((tasa_interes / 100) / (dias_x_anio / dias_capitalizacion))
        let exponente = (dias_x_anio / dias_capitalizacion)
            //console.log(base, exponente)
        tasa_efectiva_anual = (Math.pow(base, exponente) - 1) * 100;
    }
    //console.log(1, tasa_interes, dias_x_anio, dias_capitalizacion)
    var tasa_efectiva = (Math.pow((1 + tasa_efectiva_anual / 100), (frecuencia_cupon_tabla3 / dias_x_anio)) - 1) * 100;
    var cok = (Math.pow((1 + tasa_anual_descuento / 100), (frecuencia_cupon_tabla3 / dias_x_anio)) - 1) * 100;
    var costes_iniciales_emisor = (estructuracion / 100 + colocacion / 100 + flotacion / 100 + cavali / 100) * valor_comercial;
    var costes_iniciales_bonista = (flotacion / 100 + cavali / 100) * valor_comercial;


    tabla_3.innerHTML = `
    
                    <tbody>
                        <tr>
                            <th scope="row">Frecuencia del cupón </th>
                            <td id="frecuencia_cupon_tabla3">${frecuencia_cupon_tabla3}</td>
                        </tr>
                        <tr>
                            <th scope="row">Días capitalización</th>
                            <td id="dias_capitalizacion">${dias_capitalizacion}</td>
                        </tr>
                        <tr>
                            <th scope="row">Nº Períodos por Año</th>
                            <td id="n_peridios_anio">${n_peridios_anio}</td>
                        </tr>
                        <tr>
                            <th scope="row">Nº Total de Periodos</th>
                            <td id="total_periodos">${total_periodos}</td>
                        </tr>
                        <tr>
                            <th scope="row">Tasa efectiva anual</th>
                            <td id="tasa_efectiva_anual">${tasa_efectiva_anual}</td>
                        </tr>
                        <tr>
                            <th scope="row">Tasa efectiva </th>
                            <td id="tasa_efectiva">${tasa_efectiva}</td>
                        </tr>
                        <tr>
                            <th scope="row">COK </th>
                            <td id="cok">${cok}</td>
                        </tr>
                        <tr>
                            <th scope="row">Costes Iniciales Emisor</th>
                            <td id="costes_iniciales_emisor">${costes_iniciales_emisor}</td>
                        </tr>
                        <tr>
                            <th scope="row">Costes Iniciales Bonista</th>
                            <td id="costes_iniciales_bonista">${costes_iniciales_bonista}</td>
                        </tr>
                    </tbody>
                    `;

    //Masacre
    //console.log(get_date(6, '2022-06-15'))


    // var today = new Date(2022, 3, 15);
    // var tomorrow = new Date();
    // tomorrow.setDate(today.getDate() + 30);



    let id = 'inflacion_anual_' + String()
    var fecha_programada_tg = fecha_emision;
    var inflacion_anual_tg;
    var inflacion_tg;
    var plazo_de_gracia_tg;
    var bono_tg;
    var bono_indexado_tg;
    var cupon_interes_tg;
    var cuota_tg;
    var amort_tg;
    var prima_tg;
    var escudo_tg;
    var flujo_emisor_tg;
    var flujo_emisor_escudo_tg;
    var flujo_bonista_tg;
    var flujo_act_tg;
    var fa_x_plazo_tg;
    var factor_p4_convexidad_tg;

    let idffecha = document.getElementById('fecha_programada');
    idffecha.value = fecha_emision

    document.getElementById('cambio_inicio').innerHTML = `${valor_comercial - costes_iniciales_emisor}`
    document.getElementById('cambio_inicio2').innerHTML = `${valor_comercial - costes_iniciales_emisor}`
    document.getElementById('cambio_inicio3').innerHTML = `(${valor_comercial + costes_iniciales_bonista})`


    for (let i = 1; i <= 30; i++) {
        arr[i - 1][0] = (i);

        var anioxx = Number(fecha_emision[0] + fecha_emision[1] + fecha_emision[2] + fecha_emision[3]);
        var fecha_restante = '';
        for (let j = 4; j < fecha_emision.length; j++)
            fecha_restante += fecha_emision[j];
        var mesxx;
        if (fecha_restante[1] == '0') {
            mesxx = Number(fecha_restante[2])
        } else mesxx = Number(fecha_restante[1] + fecha_restante[2]);
        var indice = 3;
        var diaxx;
        if (fecha_restante[indice + 1] == '0')
            diaxx = Number(fecha_restante[indice + 2])
        else
            diaxx = Number(fecha_restante[indice + 1] + fecha_restante[indice + 2]);
        //console.log(typeof(anioxx), anioxx, typeof(mesxx), mesxx, typeof(diaxx), diaxx)
        var tomorrow = new Date(anioxx, mesxx, diaxx);
        tomorrow.setDate(tomorrow.getDate() + (frecuencia_cupon_tabla3 * i));
        let id = 'fecha_emision_' + String(i);
        console.log(id)
        let f_emision = document.getElementById(id);
        f_emision.innerHTML = `${tomorrow.getFullYear()} - ${tomorrow.getMonth() } - ${tomorrow.getDate()}`

        let aux;

        //3
        id = 'plazo_gracia_' + String(i);
        aux = document.getElementById(id);
        plazo_de_gracia_tg = String(aux.value);
        if (arr[i - 1][3] != plazo_de_gracia_tg)
            arr[i - 1][3] = plazo_de_gracia_tg;

        //1
        id = 'inflacion_anual_' + String(i);
        aux = document.getElementById(id);
        inflacion_anual_tg = Number(aux.value);
        if (arr[i - 1][1] != inflacion_anual_tg)
            arr[i - 1][1] = inflacion_anual_tg;
        aux.innerHTML = `${arr[i-1][1]}`

        //2
        id = 'inflacion_' + String(i);
        aux = document.getElementById(id);
        if (arr[i - 1][0] <= total_periodos)
            inflacion_anual_tg = ((Math.pow((1 + arr[i - 1][1] / 100), (frecuencia_cupon_tabla3 / dias_x_anio))) - 1) * 100;
        else
            inflacion_anual_tg = 0;
        arr[i - 1][2] = inflacion_anual_tg;
        aux.innerHTML = `${arr[i-1][2]}`


        //4
        id = 'bono_' + String(i);
        aux = document.getElementById(id);
        if (arr[i - 1][0] == 1)
            bono_tg = Number(valor_nominal);
        else {
            if (arr[i - 1][0] <= total_periodos) {
                if (arr[i - 2][3] == 'T')
                    bono_tg = arr[i - 2][5] + arr[i - 2][6];
                else {
                    bono_tg = arr[i - 2][5] + arr[i - 2][8];
                }


            } else
                bono_tg = 0;
        }
        arr[i - 1][4] = bono_tg;
        aux.innerHTML = `${arr[i-1][4]}`


        //5
        id = 'bono_indexado_' + String(i);
        aux = document.getElementById(id);
        bono_indexado_tg = arr[i - 1][4] * (1 + arr[i - 1][2] / 100);
        arr[i - 1][5] = bono_indexado_tg;
        aux.innerHTML = `${arr[i-1][5]}`

        //6
        id = 'cupon_interes_' + String(i);
        aux = document.getElementById(id);
        cupon_interes_tg = tasa_efectiva / 100 * arr[i - 1][5];
        arr[i - 1][6] = cupon_interes_tg;
        aux.innerHTML = `${arr[i-1][6]}`


        //8
        id = 'amort_' + String(i);
        aux = document.getElementById(id);
        if (arr[i - 1][0] <= total_periodos) {
            if (arr[i - 1][0] <= total_periodos - 1) {
                amort_tg = 0;
            } else {
                amort_tg = arr[i - 1][5] * 1;
            }
        } else amort_tg = 0;
        arr[i - 1][8] = amort_tg;
        aux.innerHTML = `${arr[i-1][8]}`

        //7
        id = 'cuota_' + String(i);
        aux = document.getElementById(id);
        if (arr[i - 1][0] <= total_periodos) {
            if (arr[i - 1][3] == 'T')
                cuota_tg = 0;
            else
                cuota_tg = arr[i - 1][6] + arr[i - 1][8];
        } else cuota_tg = 0;
        arr[i - 1][7] = cuota_tg;
        aux.innerHTML = `${arr[i-1][7]}`

        //9
        id = 'prima_' + String(i);
        aux = document.getElementById(id);
        if (arr[i - 1][0] == 30) {
            prima_tg = prima / 100 * valor_nominal;
        } else
            prima_tg = 0;
        arr[i - 1][9] = prima_tg;
        aux.innerHTML = `${arr[i-1][9]}`

        //10
        id = 'escudo_' + String(i);
        aux = document.getElementById(id);
        escudo_tg = arr[i - 1][6] * imp_renta / 100;
        arr[i - 1][10] = escudo_tg;
        aux.innerHTML = `${arr[i-1][10]}`

        //11
        id = 'flujo_emisor_' + String(i);
        aux = document.getElementById(id);
        if (arr[i - 1][0] <= total_periodos) {
            flujo_emisor_tg = arr[i - 1][7] + arr[i - 1][9];
        } else
            flujo_emisor_tg = 0;
        arr[i - 1][11] = flujo_emisor_tg;
        aux.innerHTML = `${arr[i-1][11]}`

        //12
        id = 'flujo_emisor_escudo_' + String(i);
        aux = document.getElementById(id);
        flujo_emisor_escudo_tg = arr[i - 1][10] * arr[i - 1][11];
        arr[i - 1][12] = flujo_emisor_escudo_tg;
        aux.innerHTML = `${arr[i-1][12]}`

        //13
        id = 'flujo_bonista_' + String(i);
        aux = document.getElementById(id);
        flujo_bonista_tg = arr[i - 1][11];
        arr[i - 1][13] = flujo_bonista_tg;
        aux.innerHTML = `${arr[i-1][13]}`

        //14
        id = 'flujo_act_' + String(i);
        aux = document.getElementById(id);
        flujo_act_tg = arr[i - 1][13] / (Math.pow((1 + cok / 100), arr[i - 1][0]));
        arr[i - 1][14] = flujo_act_tg;
        aux.innerHTML = `${arr[i-1][14]}`

        //15
        id = 'fa_x_plazo_' + String(i);
        aux = document.getElementById(id);
        fa_x_plazo_tg = arr[i - 1][14] * arr[i - 1][0] * (frecuencia_cupon_tabla3 / dias_x_anio);
        arr[i - 1][15] = fa_x_plazo_tg;
        aux.innerHTML = `${arr[i-1][15]}`

        //16
        id = 'factor_p4_convexidad_' + String(i);
        aux = document.getElementById(id);
        factor_p4_convexidad_tg = arr[i - 1][14] * arr[i - 1][0] * (1 + arr[i - 1][0]);
        arr[i - 1][16] = factor_p4_convexidad_tg;
        aux.innerHTML = `${arr[i-1][16]}`
    }



    // for (let i = 1; i < 30; i++) {
    //     let id = 'inflacion_anual_' + String(i);
    //     inflacion_anual_tg = Number(document.getElementById(id).value);
    //     arr[i - 1][1] = Number(inflacion_anual_tg)
    //     const space = document.getElementById(id);
    //     space.innerHTML = `${arr[i-1][1]}`;




    //     if (i <= total_periodos)
    //         inflacion_tg = ((Math.pow(1 + inflacion_anual_tg / 100, frecuencia_cupon_tabla3 / 360)) - 1) * 100;
    // }





    console.log(arr)
        // <td style="width: 5%;"><input style="width: 100%;" id="fecha_programada" type="date" onchange="" value="2018-07-22"></td>
        // <td style="width: 5%;"><input style="width: 100%;" id="inflacion_anual" type="number " onchange="" value="0"></td>
        //tabla_4
    const tabla_4 = document.getElementById('tabla_4')
    var precio_actual = Number(document.getElementById('precio_actual').value)
    var utilidad_perdida = Number(document.getElementById('utilidad_perdida').value)
    tabla_4.innerHTML = `
    
                    <tbody>
                        <tr>
                            <th scope="row">Precio Actual </th>
                            <td id="precio_actual"></td>
                        </tr>
                        <tr> 
                            <th scope="row">Utilidad / Pérdida</th>
                            <td id="utilidad_perdida"></td>
                        </tr>
                    </tbody>
                    `;



    //tabla_5
    const tabla_5 = document.getElementById('tabla_5')
    var duracion = Number(document.getElementById('duracion').value)
    var convexidad = Number(document.getElementById('convexidad').value)
    var total = Number(document.getElementById('total').value)
    var duracion_modificada = Number(document.getElementById('duracion_modificada').value)
    tabla_5.innerHTML = `
    
    <tbody>
    <tr>
        <th scope="row">Duración </th>
        <td id="duracion"></td>
    </tr>
    <tr>
        <th scope="row">Convexidad</th>
        <td id="convexidad"></td>
    </tr>
    <tr>
        <th scope="row">Total</th>
        <td id="total"></td>
    </tr>
    <tr>
        <th scope="row">Duración modificada</th>
        <td id="duracion_modificada"></td>
    </tr>
    </tbody>
                    `;


    //tabla_6
    const tabla_6 = document.getElementById('tabla_6')
    var tcea_emisor = Number(document.getElementById('tcea_emisor').value)
    var tcea_emisor_2 = Number(document.getElementById('tcea_emisor_2').value)
    var tcea_emisor_escudo = Number(document.getElementById('tcea_emisor_escudo').value)
    var tcea_emisor_escudo_2 = Number(document.getElementById('tcea_emisor_escudo_2').value)
    var trea_bonista = Number(document.getElementById('trea_bonista').value)
    var trea_bonista_2 = Number(document.getElementById('trea_bonista_2').value)
    tabla_6.innerHTML = `
       
       <tbody>
       <tr>
           <th scope="row">TCEA Emisor </th>
           <td id="tcea_emisor"></td>
           <td id="tcea_emisor_2"></td>
       </tr>
       <tr>
           <th scope="row">TCEA Emisor c/Escudo</th>
           <td id="tcea_emisor_escudo"></td>
           <td id="tcea_emisor_escudo_2"></td>
       </tr>
       <tr>
           <th scope="row">TREA Bonista</th>
           <td id="trea_bonista"></td>
           <td id="trea_bonista_2"></td>
       </tr>
   </tbody>
                       `;






    //     //RES

    //     //tabla 5
    //     const tabla_5 = document.getElementById('tabla_5')
    //     var saldo_financiar = precio_venta_activo - (precio_venta_activo * (cuota_inicial / 100));
    //     var monto_prestamo = saldo_financiar + costes_notariales + costes_registrales + tasacion + comision_estudio
    //     var n_cuotas_anio = n_dias_anio / frecuencia_pago
    //     var n_total_cuotas = n_cuotas_anio * n_anios
    //     tabla_5.innerHTML = `

    //     <tbody>
    //                         <tr>
    //                             <th scope="row">Saldo a financiar</th>
    //                             <td>
    //                                 <input id="saldo_financiar" type="number" onchange="modify()" value=${saldo_financiar}></td>
    //                         </tr>
    //                         <tr>
    //                             <th scope="row ">Monto del préstamo</th>
    //                             <td><input id="monto_prestamo" type="number" onchange="modify()" value=${monto_prestamo}></td>
    //                         </tr>
    //                         <tr>
    //                             <th scope="row ">Nº Cuotas por Año</th>
    //                             <td><input id="n_cuotas_anio" type="number" onchange="modify()" value=${n_cuotas_anio}></td>
    //                         </tr>
    //                         <tr>
    //                             <th scope="row ">Nº Total de Cuotas</th>
    //                             <td><input id="n_total_cuotas" type="number" onchange="modify()" value=${n_total_cuotas}></td>
    //                         </tr>
    //                     </tbody>
    //                     `;


    //     //tabla_6
    //     const tabla_6 = document.getElementById('tabla_6')
    //     var seguro_desgrav_per = (seguro_desgravamem) * (frecuencia_pago / 30)
    //     var seguro_riesgo_resultado = (seguro_riesgo / 100) * (precio_venta_activo / n_cuotas_anio)
    //     tabla_6.innerHTML = `

    //     <tbody>
    //                         <tr>
    //                             <th scope="row ">% de Seguro desgrav. per.</th>
    //                             <td><input id="seguro_desgrav_per" type="number" onchange="modify() " value=${seguro_desgrav_per}></td>
    //                         </tr>
    //                         <tr>
    //                             <th scope="row ">Seguro riesgo</th>
    //                             <td><input id="seguro_riesgo_resultado" type="number " onchange="modify() " value=${seguro_riesgo_resultado}></td>
    //                         </tr>
    //                     </tbody>
    //                     `;


    //     var saldo_final_inicial = 0;
    //     var flujo_inicial = monto_prestamo;

    //     //tabla_general
    //     const tabla_general = document.getElementById('tabla_general')
    //     var arr_total = [];
    //     for (let i = 0; i < 360; i++) {
    //         arr_total.push([]);
    //     }
    //     var i = 1;
    //     var v0 = 10;
    //     var v1 = (Math.pow(((1 + v0 / 100)), (frecuencia_pago / n_dias_anio)) - 1) * 100;
    //     var v2 = 0;
    //     var v3 = Math.pow((1 + v2 / 100), (frecuencia_pago / n_dias_anio));
    //     var v4 = ' ';
    //     var v5 = arr_total[i - 1][16]
    //     var v6 = v5;
    //     var v7 = (-1 * v5 * v1) / 100;







    //     //tabla_7
    //     const tabla_7 = document.getElementById('tabla_7')
    //     tabla_7.innerHTML = `

    //     <tbody>
    //     <tr>
    //         <th scope="row ">Intereses</th>
    //         <td><input id="intereses " type="number " onchange="modify() "></td>
    //     </tr>
    //     <tr>
    //         <th scope="row ">Amortización del capital</th>
    //         <td><input id="amortizacion_capital " type="number " onchange="modify() "></td>
    //     </tr>
    //     <tr>
    //         <th scope="row ">Seguro de desgravamen</th>
    //         <td><input id="seguro_desgravamen_resultado " type="number " onchange="modify() "></td>
    //     </tr>
    //     <tr>
    //         <th scope="row ">Seguro contra todo riesgo</th>
    //         <td><input id="seguro_contra_todo_riesgo " type="number " onchange="modify() "></td>
    //     </tr>
    //     <tr>
    //         <th scope="row ">Comisiones periodicas</th>
    //         <td><input id="comisiones_periodicas " type="number " onchange="modify() "></td>
    //     </tr>
    //     <tr>
    //         <th scope="row ">Portes / Gastos de adm.</th>
    //         <td><input id="portes_gastos_adm " type="number " onchange="modify() "></td>
    //     </tr>
    // </tbody>
    //                     `;

}