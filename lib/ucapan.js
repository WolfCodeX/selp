const axios = require("axios");
const fs = require("fs-extra")
const fetch = require('node-fetch')
const moment = require("moment-timezone")
const PhoneNumber = require('awesome-phonenumber')

     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
     if(time2 < "23:59:00"){
     var ucapanWaktu = 'πππ₯ππ¦ππ­ πππ₯ππ¦'
                                        }
     if(time2 < "19:00:00"){
     var ucapanWaktu = 'πππ₯ππ¦ππ­ πππ­ππ§π '
                                         }
     if(time2 < "18:00:00"){
     var ucapanWaktu = 'πππ₯ππ¦ππ­ ππ¨π«π'
                                         }
     if(time2 < "15:00:00"){
     var ucapanWaktu = 'πππ₯ππ¦ππ­ ππ’ππ§π '
                                         }
     if(time2 < "11:00:00"){
     var ucapanWaktu = 'πππ₯ππ¦ππ­ πππ π’'
                                         }
     if(time2 < "05:00:00"){
     var ucapanWaktu = 'πππ₯ππ¦ππ­ ππ’π§π’ πππ«π’'
                                         }    
var ase = new Date();
var waktoo = ase.getHours();
switch(waktoo){
case 0: waktoo = 'Waktu Tengah Malamπ΄'; break;
case 1: waktoo = 'Waktu Tengah Malamπ΄'; break;
case 2: waktoo = 'Waktu Dini Hariπβ'; break;
case 3: waktoo = 'Waktu Dini Hariπβ'; break;
case 4: waktoo = 'Selamat Subuh kakπβ'; break;
case 5: waktoo = 'Selamat Subuh kakπβ'; break;
case 6: waktoo = 'Selamat Pagi kakπ'; break;
case 7: waktoo = 'Selamat Pagi kakπ'; break;
case 8: waktoo = 'Selamat Pagi kakπ'; break;
case 9: waktoo = 'Selamat Pagi kakπ'; break;
case 10: waktoo = 'Selamat Pagi kakβ¨'; break;
case 11: waktoo = 'Selamat Siang KakβοΈ'; break;
case 12: waktoo = 'Selamat Siang KakβοΈ'; break;
case 13: waktoo = 'Selamat Siang KakβοΈ'; break;
case 14: waktoo = 'Selamat Siang KakβοΈ'; break;
case 15: waktoo = 'Selamat Sore Kakβ'; break;
case 16: waktoo = 'Selamat Sore Kakβ'; break;
case 17: waktoo = 'Selamat Sore Kakβ'; break;
case 18: waktoo = 'Waktu Magribπ¦'; break;
case 19: waktoo = 'Waktu Magribπ¦οΈ'; break;
case 20: waktoo = 'Selamat Malamπ'; break;
case 21: waktoo = 'Selamat Malamπ'; break;
case 22: waktoo = 'Selamat Malamπ'; break;
case 23: waktoo = 'Tengah Malamπ'; break;
}
var tampilUcapan = '' + waktoo; 
var ase = new Date();
var waktoonyabro = ase.getHours();
switch(waktoonyabro){
case 0: waktoonyabro = `Selamat Malamπ`; break;
case 1: waktoonyabro = `Selamat Malamπ`; break;
case 2: waktoonyabro = `Selamat Malamπ`; break;
case 3: waktoonyabro = `Selamat Pagiπ`; break;
case 4: waktoonyabro = `Selamat Pagiπ`; break;
case 5: waktoonyabro = `Selamat Pagiπ`; break;
case 6: waktoonyabro = `Selamat Pagiπ`; break;
case 7: waktoonyabro = `Selamat Pagiπ`; break;
case 8: waktoonyabro = `Selamat Pagiπ`; break;
case 9: waktoonyabro = `Selamat Pagiπ`; break;
case 10: waktoonyabro = `Selamat Pagiπ`; break;
case 11: waktoonyabro = `Selamat Siangπ`; break;
case 12: waktoonyabro = `Selamat Siangπ`; break;
case 13: waktoonyabro = `Selamat Siangπ`; break;
case 14: waktoonyabro = `Selamat Siangπ`; break;
case 15: waktoonyabro = `Selamat Soreπ`; break;
case 16: waktoonyabro = `Selamat Soreπ`; break;
case 17: waktoonyabro = `Selamat Soreπ`; break;
case 18: waktoonyabro = `Selamat Malamπ`; break;
case 19: waktoonyabro = `Selamat Malamπ`; break;
case 20: waktoonyabro = `Selamat Malamπ`; break;
case 21: waktoonyabro = `Selamat Malamπ`; break;
case 22: waktoonyabro = `Selamat Malamπ`; break;
case 23: waktoonyabro = `Selamat Malamπ`; break;
}
var ucapanFakereply = '' + waktoonyabro;                                                                                      
                                                                                                                                                                                                                                                         
const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
}) 



module.exports = { 

calender, 

week,

weton,

jmn,
time2,
ucapanWaktu,
waktoonyabro,
waktoo

}
