const fs = require("fs");
const XLSX = require("xlsx");
const jsontoxml = require("jsontoxml");

const workbook = XLSX.readFile("Pension Calculation Tool Advanced 2018 - 6 (1).xlsx");
let worksheets = {};




$(document).ready(function (){
    $("#age,#averageIncome").keyup(function (){
        var total = 0;

        var x = Number($("#age").val());
        var y = Number($("#averageIncome").val());
        var total = x * y;
        $("#totalpension").val(total);
    });
})

//P (1 + r/n)^(nt)
