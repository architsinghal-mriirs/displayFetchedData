const PORT = process.env.PORT || 8000
const express = require('express');

const app = express();

const axios = require('axios');
const data = JSON.stringify({
    "SiteID": "Centrum2",                
    "VendorID": "PesAndroid",
    "MeterID": "11"
});

const config = {
    method: 'GET',
    url: 'http://www.pesonline.in/WebServicesFinal/PesAdmin/LiveBalanceCalculation',
    headers: {
        'Content-Type': 'application/JSON'
    },
    data: data
};

const getter = async () => {
    const response = await axios(config)
    //console.log(response.data.Data)
}

const setData = (response) => {
    var json = JSON.stringify(response.data);
    var obj = JSON.parse(json);

    const Data = obj.Data[0];

    var Grid = Data["Grid Charge"];
    var DG = Data["DG Charge"];
    var MC = Data["MaintenanceCharge"];
    var FMPK = Data["FixedMainPerKW"];
    var FCDK = Data["FixChrgDGPKW"];
    var LM = Data["Load Main"];
    var LDG = Data["Load DG"];
    var Area = Data["Area"];
    var LBD = Data["Last Bill Date"];
    var OB = Data["Opening Balance"];
    var OM = Data["Opening Mains"];
    var oDG = Data["Opening DG"];
    var CM = Data["Current Main"];
    var CDG = Data["Current DG"];
    var LB = Data["LiveBalance"];
    var MCPM = Data["Maintenance Charge Per Month"];
    var FMCPM = Data["Fixed Mains Charge Per Month"];
    var FDGCPM = Data["Fixed DG Charge Per Month"];
    var WCPM = Data["Water Charge Per Month"];
    var CA = Data["Cultural Activity"];
    var SC = Data["Service Charge"];
    var TMA = Data["Total Monthly Amt"];
    var DDC = Data["Daily Deducton Charge"];
    var MO = Data["Months"];
    var DAYS = Data["Days"];
    var UCM = Data["Unit Consumed Main"];
    var UCDG = Data["Unit Consumed Dg"];
    var MCC = Data["Mains Consumption Charges"];
    var LL = Data["Line Loss"];
    var EDC = Data["Electricity Duty Charges"];
    var DGCC = Data["DG Consumption Chargesea"];
    var TFD = Data["Total Fixed Deduction"];
    var GSTC = Data["GST Charges"];
    var LBAl = Data["Last balance"];
    var R = Data["Recharge"];
    var CAMT = Data["Current Amt"];
    var ADJUST = Data["Adjsutment"];
    var FA = Data["FinalAmount"];

    console.log("Load = ", LM)
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Document</title>
    
        <style>
            table {
                width: 100%;
            }
            td,th{
                padding:.2rem 0rem;
            }
            table,
            td,
            th {
                border: 1px solid black;
                border-collapse: collapse;
            }
    
            .nav {
                width: 85%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0rem auto;
            }
    
            .nav h2 {
                text-decoration: underline;
                font-family: 'Poor Story', cursive;
            }
    
            .btn {
                font-size: 1rem;
                outline: none;
                background: red;
                color: White;
            }
    
            .btn:hover {
                color: red;
                background: none;
                border: 1px solid red;
            }
        </style>
    </head>
    
    <body>
    
        <!-- <button id="exportPdF" onclick="btnHide()" class="btn btn-sm">Download In Pdf</button>
        <div id="example">
            <table style="width: 100%; border:1px solid black">
                <td>
                    <h2>Eldeco Infrastructure & Properties Ltd</h2>
                    <p>H.O. -201-202, 2 nd floor, Splendor Forum, Jasola District Center, New Delhi-110025</p>
                    <p>Ph-no-01140655000 Website:<a href="">www.eldecogroup.com</a>,Email: <a
                            href="">billing.ludhiana@eldecoproperties.com</a></p>
                    <p>Site: Eldeco Estate One, Vpo Hussainpura , Ludhiana-141008</p>
                    <p>CIN: U74899HR200PLC043893 , GSTIN No: 03AAACE8177D1ZW</p>
                </td>
                <td>
                    <img src="./Eldeco logo.jpeg" alt="logo">
                </td>
    
                <table style="width: 100%; margin: .5% 0%;">
                    <td><b>Monthly Statement</b></td>
                    <td><b>Month : June 2022</b></td>
                    <td><b>Bill No. : 40370</b></td>
                </table>
    
                <table style="width: 100%;">
                    <tr>
                        <td><b>Name</b></td>
                        <td>Mr Kuldeep Singh, 52V</td>
                        <td><b>Unit No.</b></td>
                        <td>52V</td>
                        <td rowspan="2"><b>Site :</b></td>
                        <td><b>ELDECO</b></td>
    
                    </tr>
                    <tr>
                        <td rowspan="2"><b>Postal <br> Address</b></td>
                        <td rowspan="2">Unit No : 52V,<br> Eldeco estate one vpo Hussainpura <br>Ludhiana - 141008</td>
                        <td><b>Unit Area (Sqr. Yards.)</b></td>
                        <td>291.55</td>
                        <td><b>ESTATE ONE</b></td>
                    <tr>
                        <td rowspan="2"><b>Bill for period</b></td>
                        <td colspan="2"><b>From</b></td>
                        <td colspan="2"><b>To</b></td>
                    </tr>
                    <tr>
                        <td><b>GSTIN</b></td>
                        <td>03AAACE8177D1ZW</td>
                        <td colspan="2">01/06/2022</td>
                        <td colspan="2">30/06/2022</td>
                    </tr>
                    <tr>
                        <td><b>Login ID</b></td>
                        <td>1</td>
                        <td><b>Statement No</b></td>
                        <td colspan="2">40370</td>
                        <td></td>
                    </tr>
                </table>
    
                <table style="width: 100%; margin: .5% 0%;">
                    <tr>
                        <td style="text-align: center;" colspan="7"><b>A. Power Backup Charges</b></td>
                    </tr>
                    <tr>
                        <td rowspan="2"><b>Fixed <br> Charges</b></td>
                        <td style="text-align: center;" colspan="2">Load (KVA)</td>
                        <td style="text-align: center;" colspan="2">Amount @ Rs. 100.00 / KVA</td>
                        <td style="text-align: center;">Payable (Rs.)</td>
                        <td style="text-align: center;" colspan="2"><b>Total B</b></td>
                    </tr>
                    <tr>
                        <td style="text-align: center;" colspan="2">5.00</td>
                        <td style="text-align: center;" colspan="2">500.00</td>
                        <td style="text-align: center;">500.00</td>
                    </tr>
                    <tr>
                        <td rowspan="3"><b>Variable <br> Charges</b></td>
                        <td style="text-align: center;" colspan="2"><b>Reading ( Unit )</b></td>
                        <td style="text-align: center;" rowspan="2"><b>Consumed Units</b></td>
                        <td style="text-align: center;" rowspan="2"><b>Chargable Units</b></td>
                        <td style="text-align: center;" rowspan="2"><b>Payable (Rs.)</b></td>
                        <td style="text-align: center;" rowspan="2">500.00</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">Last</td>
                        <td style="text-align: center;">Current</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">467.80</td>
                        <td style="text-align: center;">485.80</td>
                        <td style="text-align: center;">18.00</td>
                        <td style="text-align: center;"> 0.00</td>
                        <td style="text-align: center;"> 0.00</td>
                    </tr>
                </table>
    
                <table style="width: 100%; margin: .5% 0%;">
                    <tr>
                        <td style="text-align: center;" colspan="7"><b>B. CAM Charges</b></td>
                    </tr>
                    <tr>
                        <td style="text-align: center;"><b>SAC</b></td>
                        <td style="text-align: center;"><b>Area</b></td>
                        <td style="text-align: center;"><b>CAM</b></td>
                        <td style="text-align: center;"><b>SGST @ 9 %</b></td>
                        <td style="text-align: center;"><b>CGST @ 9 %</b></td>
                        <td style="text-align: center;"><b>Other Charges</b></td>
                        <td style="text-align: center;"><b>Total (C)</b></td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">9954</td>
                        <td style="text-align: center;">${Area}</td>
                        <td style="text-align: center;">2,367.39</td>
                        <td style="text-align: center;">213.06</td>
                        <td style="text-align: center;">213.06</td>
                        <td style="text-align: center;">-</td>
                        <td style="text-align: center;"> 2,793.51</td>
                    </tr>
                </table>
    
                <table style="width: 100%; margin: .5% 0%;">
                    <tr>
                        <td style="text-align: right; "><b>Grand Total = A + B + C ( Current Month Bill )</b></td>
                        <td style="text-align: center;"><b> 3293.51</b></td>
                    </tr>
                </table>
    
                <table style="width: 100%; margin: .5% 0%;">
                    <tr>
                        <td style="text-align: center;" colspan="7"><b>Statement of Account (Rs.)</b></td>
                    </tr>
                    <tr>
                        <td style="text-align: center;"><b>Last Balance</b></td>
                        <td style="text-align: center;"><b>Credit</b></td>
                        <td style="text-align: center;"><b>Debit</b></td>
                        <td style="text-align: center;"><b>Interest on Delay <br>Payment</b></td>
                        <td style="text-align: center;"><b>Recharge <br> Amount</b></td>
                        <td style="text-align: center;"><b>Current Month Bill</b></td>
                        <td style="text-align: center;"><b>Commulative Outstanding <br> Amount</b></td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">${LBAl}</td>
                        <td style="text-align: center;">0.00</td>
                        <td style="text-align: center;">0.00</td>
                        <td style="text-align: center;">0.00</td>
                        <td style="text-align: center;"> 3500.00</td>
                        <td style="text-align: center;">3293.51</td>
                        <td style="text-align: center;"> 1027.18</td>
                    </tr>
                </table>
    
                <table style="width: 100%; margin: .5% 0%;">
                    <tr>
                        <td style="text-align: center;" colspan="7"><b>TARRIF</b></td>
                    </tr>
                    <tr>
                        <td style="text-align: center;"><b>Category</b></td>
                        <td style="text-align: center;"><b>Power Backup</b></td>
                        <td style="text-align: center;" colspan="2"><b>CAM Rate</b></td>
                    </tr>
                    <tr>
                        <td style="text-align: center;" class="outline-remove">Fixed Charges</td>
                        <td style="text-align: center;" class="outline-remove">Rs. 100.00 <span
                                style="padding: 0rem 5rem;">Per
                                KVA</span></td>
                        <td style="text-align: center;" class="outline-remove">Plots</td>
                        <td style="text-align: center;" class="outline-remove">Rs. 6.25/Sq Yds</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;" class="outline-remove" rowspan="2">Variable Charges</td>
                        <td style="text-align: center;" class="outline-remove" rowspan="2">Rs.27.27 <span
                                style="padding: 0rem 5rem;">Per Unit</span></td>
                        <td style="text-align: center;" class="outline-remove">Villas</td>
                        <td style="text-align: center;" class="outline-remove">Rs. 8.12 /Sq Yds</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;" class="outline-remove">Floors</td>
                        <td style="text-align: center;" class="outline-remove">Rs. 1.25/Sq Ft</td>
                    </tr>
                </table>
    
                <p style="font-size:.8rem;">Note: All figures in Rs unless otherwise mentioned/not applicable <br>
                    <br>
                    <i class='bx bxs-circle'></i>Kindly settle your outstanding amount payment (if any) to avoid
                    disconnection
                    of service. Pease pay directly
                    at site to Facility Manager-(9911114102) by <br>
                    Cheque/ DD or Pay Order in favor of “Eldeco Infrastructure & Properties Ltd”
                    <br>
                    <i class='bx bxs-circle'></i>Customer may pay the dues by NEFT to HDFC Bank Current Account no.
                    06342560003284, IFSC Code HDFC0000634,
                    Branch Stock Exchange, <br>
                    Ludhiana.
                    <br>
                    <i class='bx bxs-circle'></i>While making NEFT request, Please mention site name /flat no.(e.g. “Villa
                    No/Plot No”) in the transaction
                    narration row of bank.
                    <br>
                    <i class='bx bxs-circle'></i>After Making Successful payment, you are requested to email the transaction
                    details including Customer
                    name/Site/Flat No/amount to site accountant at <br>
                    billing.ludhiana@eldecoproperties.comas a confirmation of having made the payment.
                    <br>
                    <i class='bx bxs-circle'></i>On Receipt of this intimation by email, site team would recharge the
                    prepaid
                    account with the amount
                    credited and would reply back through email/SMS <br>
                    for having updated prepaid account
                    <br>
                    <i class='bx bxs-circle'></i>Prepaid account will be updated within 24 – 48 working hours of receipt of
                    email/payment detail. In case of
                    non-receipt / non – reflection of payment <br>
                    details in the next month’s statement of account, please inform at billing.ludhiana@eldecoproperties.com
                    and
                    with the details of the transaction
                    <br>
                    <i class='bx bxs-circle'></i>Online recharge can be done at www.paytm.com > Electricity > City –
                    Ludhiana>
                    Apartment – Eldeco estate one> Enter Meter ID at Place of Flat No. <br>
                    (mentioned in your monthly statement).
                    <br>
                    <i class='bx bxs-circle'></i>Owner/co-owner shall remain responsible for nonpayment of charges by the
                    tenant
                    Late payment shall attract interest at the rate mentioned in the <br>
                    Agreements. Cheque bouncing charges will apply in case of dishonored cheques
                    <br>
                <h2 style="margin:2rem 0rem; text-align:center;">*This is computer generated Statement and does not require
                    signature.</h2>
                </p>
            </table>
        </div> -->
        <!-- <script>
            function btnHide() {
                document.getElementById('exportPdF').style.display = "none";
                window.print();
            }
        </script> -->
    
        <button id="exportPdF" onclick="btnHide()" class="btn btn-sm">Download In Pdf</button>
        <div id="example">
            <section id="main">
                <table class="tbl-1">
                    <tr class="t-row1">
                        <td style="text-align: center; text-decoration: underline; border: none;"><b>Lotus Maintenance
                                Services Pvt. Ltd</b></td>
                        <td rowspan="3" style="text-align: center; padding: 0rem 4rem;"><img
                                src="https://ajnara.com/images/project-logo/Le%20Garden.jpg" alt="image"
                                style="width: 5rem;"></td>
                        <td style="text-align: center;"><b>GSTIN</b> <span
                                style="padding: 0rem 4rem;">09AABCL2081Q1Z2</span>
                        </td>
                    </tr>
                    <tr class="t-row1">
                        <td style="text-align: center;"><b>Le Garden, Sector - 16, Greater Noida (UP)</b></td>
                        <td style="text-align: center;"><b>PAN No</b> <span style="padding: 0rem 4rem;">09AABCL2081Q</span>
                        </td>
                    </tr>
                    <tr class="t-row1">
                        <td style="text-align: center; "><b></b></td>
                        <td style="text-align: center;"><b> </b> <span style="padding: 0rem 4rem;"></span></td>
                    </tr>
                    <tr class="t-row1">
                        <td colspan="3" style="text-align:center;"><b>Email :</b> <a href=""
                                style="color: black; text-decoration:none; font-size: 1.2rem;"><b>estatemanager.legarden@lmspl.co.in</b></a>
                        </td>
                    </tr>
                    <tr class="t-row1">
    
                    </tr>
                </table>
    
                <table class="tbl-2">
                    <tr class="t-row2">
                        <td class="td-2"><b>Owner Name</b></td>
                        <td class="td-2">Mr. Shiv Kumar Singh </td>
                        <td class="td-2"><b>Meter ID</b></td>
                        <td class="td-2" style="text-align: right;">1</td>
                    </tr>
                    <tr class="t-row2">
                        <td class="td-2"><b>GSTIN</b></td>
                        <td class="td-2"> </td>
                        <td class="td-2"><b>Invoice No . :-</b></td>
                        <td class="td-2" style="text-align: right;">27953</td>
                    </tr>
                    <tr class="t-row2">
                        <td class="td-2"><b>Unit No</b></td>
                        <td class="td-2">A-110 </td>
                        <td class="td-2"><b>Statement Period</b></td>
                        <td class="td-2" style="text-align: right;">01-08-2021 <span
                                style="padding: 0 2rem;"><b>To</b></span>
                            31-08-2021</td>
                    </tr>
                    <tr class="t-row2">
                        <td class="td-2"><b>Area of Unit(F)</b></td>
                        <td class="td-2">995.00 </td>
                        <td class="td-2"><b>Statement Date</b></td>
                        <td class="td-2" style="text-align: right;">1/9/2021</td>
                    </tr>
                    <tr class="t-row2">
                        <td class="td-2"><b>Load Main</b></td>
                        <td class="td-2">${LM}<span style="padding: 0 3rem;"><b>Load DG</b></span>${LDG}</td>
                        <td class="td-2"><b>Meter No</b></td>
                        <td class="td-2" style="text-align: right;"></td>
                    </tr>
                    <tr class="t-row2">
                        <td class="td-2"><b>CAE Charges</b></td>
                        <td class="td-2">1.90</td>
                        <td class="td-2"><b>Resident Code</b></td>
                        <td class="td-2" style="text-align: right;">100066</td>
                    </tr>
                </table>
    
                <table class="tbl-3">
                    <tr class="t-row3">
                        <td class="td-3" colspan="9">A-110 , Sec - 16, Greater Noida (W), U.P.</td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3" colspan="9" style="text-align:center;"><b>DETAILS OF CHARGES FOR THIS STATEMENT
                                PERIOD</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3"><b>HSN</b></td>
                        <td class="td-3"><b>Service Name</b> </td>
                        <td class="td-3"><b>Present</b> <br> <b>Reading</b></td>
                        <td class="td-3"><b>Previous</b> <br> <b>Reading</b> </td>
                        <td class="td-3"><b>Unit</b> <br> <b>Consumed</b></td>
                        <td class="td-3"><b>Free</b> <br> <b>Units</b></td>
                        <td class="td-3"><b>Billed <br> Unit</b></td>
                        <td class="td-3"><b>Energy <br> Charges</b></td>
                        <td class="td-3" style="text-align: right;"><b>Total Amount (Rs.)</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3">9987</td>
                        <td class="td-3">DG Units Charges</td>
                        <td class="td-3">460.90</td>
                        <td class="td-3">458.80</td>
                        <td class="td-3">2.10</td>
                        <td class="td-3">4.0</td>
                        <td class="td-3"> 0.0</td>
                        <td class="td-3">19.00</td>
                        <td class="td-3" style="text-align: right;">0.00</td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3" colspan="9" style="padding: .8rem 0rem;"></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3" colspan="5"><b>A. Taxable Services</b></td>
                        <td class="td-3"><b>Amount</b> </td>
                        <td class="td-3"><b>CGST @ 9 %</b> </td>
                        <td class="td-3"><b>SGST @ 9 %</b> </td>
                        <td class="td-3" rowspan="2" style="text-align: right;"><b>Total Amount (Rs.)</b> </td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3"><b>HSN</b></td>
                        <td class="td-3" colspan="3"><b>Service Name </b></td>
                        <td class="td-3"> </td>
                        <td class="td-3"> </td>
                        <td class="td-3"><b>Amt</b></td>
                        <td class="td-3"><b>Amt</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-4"><b>9987</b></td>
                        <td class="td-4" colspan="3">DG Minimum Usage Charges </td>
                        <td class="td-4"><b></b></td>
                        <td class="td-4"><b> 100.00</b></td>
                        <td class="td-4"><b>9.00</b></td>
                        <td class="td-4"><b>9.00 </b></td>
                        <td class="td-4" style="text-align: right;"><b>118.00</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-4"><b>9987</b></td>
                        <td class="td-4" colspan="3">DG Unit Charges (Unit Comsumed : 2.10 )</td>
                        <td class="td-4"><b></b></td>
                        <td class="td-4"><b> 0.00</b></td>
                        <td class="td-4"><b> 0.00</b></td>
                        <td class="td-4"><b> 0.00 </b></td>
                        <td class="td-4" style="text-align: right;"><b> 0.00</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-4"><b>9987</b></td>
                        <td class="td-4" colspan="3">DG Minimum Usage Charges </td>
                        <td class="td-4"><b></b></td>
                        <td class="td-4"><b> 100.00</b></td>
                        <td class="td-4"><b>9.00</b></td>
                        <td class="td-4"><b>9.00 </b></td>
                        <td class="td-4" style="text-align: right;"><b>118.00</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-4"><b>9987</b></td>
                        <td class="td-4" colspan="3">DG Fixed Charges</td>
                        <td class="td-4"><b></b></td>
                        <td class="td-4"><b> 100.00</b></td>
                        <td class="td-4"><b>9.00</b></td>
                        <td class="td-4"><b>9.00 </b></td>
                        <td class="td-4" style="text-align: right;"><b>118.00</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-4"><b>9987</b></td>
                        <td class="td-4" colspan="3">Vending Charges </td>
                        <td class="td-4"><b></b></td>
                        <td class="td-4"><b> 40.00</b></td>
                        <td class="td-4"><b>3.60</b></td>
                        <td class="td-4"><b>3.60 </b></td>
                        <td class="td-4" style="text-align: right;"><b>47.20</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-4"><b>9987</b></td>
                        <td class="td-4" colspan="3">Extra burden on C.A.E.</td>
                        <td class="td-4"><b></b></td>
                        <td class="td-4"><b> 99.50</b></td>
                        <td class="td-4"><b>0.00</b></td>
                        <td class="td-4"><b>0.00 </b></td>
                        <td class="td-4" style="text-align: right;"><b> 99.50</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-4"><b>9987</b></td>
                        <td class="td-4" colspan="3">Waste Management Charges</td>
                        <td class="td-4"><b></b></td>
                        <td class="td-4"><b> 60.00</b></td>
                        <td class="td-4"><b>5.40</b></td>
                        <td class="td-4"><b>5.40 </b></td>
                        <td class="td-4" style="text-align: right;"><b>70.80</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3" colspan="8"><b>Sub Total (A)</b></td>
                        <td class="td-3" style="text-align: right;"><b>453.50</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3" colspan="9"><b>B. Supply of Utilities :</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3"><b>HSN</b></td>
                        <td class="td-3" colspan="2"><b>Service Name</b></td>
                        <td class="td-3"><b>Present Reading</b></td>
                        <td class="td-3"><b>Previous Reading</b></td>
                        <td class="td-3"><b>Unit Consumed</b></td>
                        <td class="td-3"><b>Energy Charges</b></td>
                        <td class="td-3" colspan="2" style="text-align: right;"><b>Total Amount (Rs.)</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3">2716</td>
                        <td class="td-3" colspan="2">Mains Unit Charges</td>
                        <td class="td-3"> 6258.90</td>
                        <td class="td-3">5969.50</td>
                        <td class="td-3"> 289.40</td>
                        <td class="td-3"> 7.72</td>
                        <td class="td-3" colspan="2" style="text-align: right;">2234.17</td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3">2716</td>
                        <td class="td-3" colspan="2">Mains Fixed Charges</td>
                        <td class="td-3">0.00</td>
                        <td class="td-3">0.00</td>
                        <td class="td-3">0.00</td>
                        <td class="td-3">363.84</td>
                        <td class="td-3" colspan="2" style="text-align: right;">363.84</td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3" colspan="9"><b>C. Maintenace Charges :</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3"><b>HSN</b></td>
                        <td class="td-3" colspan="3"><b> Service Name</b></td>
                        <td class="td-3"><b>Amount</b></td>
                        <td class="td-3"><b>CGST @ 9 %</b></td>
                        <td class="td-3"><b>SGST @ 9 %</b></td>
                        <td class="td-3" colspan="2" style="text-align: right;"><b>Total Amount (Rs.)</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3">9987</td>
                        <td class="td-3" colspan="3"> Maintenance Charges @ 1.90</td>
                        <td class="td-3">1,890.50</td>
                        <td class="td-3">170.14</td>
                        <td class="td-3">170.14</td>
                        <td class="td-3" colspan="2" style="text-align: right;">2,230.78</td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3" colspan="9"><b>D. Other Charges :</b></td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-3" colspan="9" style="text-align: right;"> 0.00</td>
                    </tr>
                    <tr class="t-row3">
                        <td class="td-5" colspan="8"> <b>Total Charges for this Statement Period (A) + (B) + (C) + (D)</b>
                        </td>
                        <td class="td-5" style="text-align: right;"> 5,282.30 </td>
                    </tr>
                </table>
                <!-- table 4 start -->
                <table class="tbl4">
                    <tr>
                        <th class="tdata2">Recharge Details :-</th>
                        <th class="tdata2" colspan="5"></th>

                    </tr>
                    <tr class="t-row1">
                        <th class="tdata1">SrNo</th>
                        <th class="tdata1">Rchrg Date</th>
                        <th class="tdata1">Card No</th>
                        <th class="tdata1">Card Value</th>
                        <th class="tdata1">PaymentMode</th>
                        <th class="tdata1" style="text-decoration: underline;"> Comments</th>
                    </tr>
                    <tr class="t-row2">
                        <td class="tdata1">1</td>
                        <td class="tdata1">7/8/2021</td>
                        <td class="tdata1">38884</td>
                        <td class="tdata1">500</td>
                        <td class="tdata1">M</td>
                        <td class="tdata1"></td>
                    </tr>
                    <tr>
                        <td class="tdata1">2</td>
                        <td class="tdata1">11/8/2021</td>
                        <td class="tdata1">39108</td>
                        <td class="tdata1">2000</td>
                        <td class="tdata1">M</td>
                        <td class="tdata1"></td>
                    </tr>
                    <tr>
                        <td class="tdata1">3</td>
                        <td class="tdata1">25/8/2021</td>
                        <td class="tdata1">40167</td>
                        <td class="tdata1">1000</td>
                        <td class="tdata1">M</td>
                        <td class="tdata1"></td>
                    </tr>
                    <tr>
                        <td class="tdata1">4</td>
                        <td class="tdata1">31/8/2021</td>
                        <td class="tdata1">40642</td>
                        <td class="tdata1">1200</td>
                        <td class="tdata1">M</td>
                        <td class="tdata1"></td>
                    </tr>
                </table>
                <table class="tbl5">
                    <tr class="t-row3-3">
                        <th class="tdata1-1">Opening Balance</th>
                        <th class="tdata1-1" colspan="4">Total Charges for this Statement Period</th>
                        <th class="tdata1-1">Recharges</th>
                        <th class="tdata1-1">Closing Balance</th>
                    </tr>
                    <tr class="t-row3-3">
                        <td class="tdata1-1">Amount (Rs.)</td>
                        <td class="tdata1-1">Amount (Rs.)</td>
                        <td class="tdata1-1">CGST</td>
                        <td class="tdata1-1">SGST</td>
                        <td class="tdata1-1">Total ( Rs.)</td>
                        <td class="tdata1-1">Amount (Rs.)</td>
                        <td class="tdata1-1">Amount (Rs.)</td>
                    </tr>
                    <tr class="t-row3-3">
                        <td class="tdata1-1">896</td>
                        <td class="tdata1-1">1,880.73</td>
                        <td class="tdata1-1">197.14</td>
                        <td class="tdata1-1">197.14</td>
                        <td class="tdata1-1">4,465.52</td>
                        <td class="tdata1-1"> 4700.00</td>
                        <td class="tdata1-1">1130</td>
                    </tr>
                </table>
            </section>
        </div>
    
        <script>
            function btnHide() {
                document.getElementById('exportPdF').style.display = "none";
                window.print();
            }
        </script>
    </body>
    
    </html>`

    return html
}

app.get("/", async (req, res) => {

    const response = await axios(config)
    const html =  setData(response)

            res.setHeader('Content-Type', 'text/html');
            res.status(200).send(html);
});



app.listen(PORT, () => {
    console.log("Your Server is Running Port Number http://localhost:8000", PORT);
    getter()
});

