'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$0$1 = require('crypto');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);

var indexNode = {};

var otpFunctions = {};

var otpNode = {};

const crypto = require$$0__default["default"].webcrypto;

// ### Function: Create one-time pad based on crypto.getRandomValues
function createOnetimePad$2 (length) {
  let otp = '';
  let randomValuesArr = crypto.getRandomValues(new Uint8Array(length));
  // converting to single digits
  for (var i = 0; i < randomValuesArr.length; i++) {
    otp += Math.floor(randomValuesArr[i]/256*10);
  }
  return otp
}

otpNode.createOnetimePad = createOnetimePad$2;

var codebookEmojis = {};

var require$$0 = [
	{
		unicode: "😀",
		plaincode: "00000"
	},
	{
		unicode: "😃",
		plaincode: "00001"
	},
	{
		unicode: "😄",
		plaincode: "00002"
	},
	{
		unicode: "😁",
		plaincode: "00003"
	},
	{
		unicode: "😆",
		plaincode: "00004"
	},
	{
		unicode: "😅",
		plaincode: "00005"
	},
	{
		unicode: "🤣",
		plaincode: "00006"
	},
	{
		unicode: "😂",
		plaincode: "00007"
	},
	{
		unicode: "🙂",
		plaincode: "00008"
	},
	{
		unicode: "🙃",
		plaincode: "00009"
	},
	{
		unicode: "🫠",
		plaincode: "00010"
	},
	{
		unicode: "😉",
		plaincode: "00011"
	},
	{
		unicode: "😊",
		plaincode: "00012"
	},
	{
		unicode: "😇",
		plaincode: "00013"
	},
	{
		unicode: "🥰",
		plaincode: "00014"
	},
	{
		unicode: "😍",
		plaincode: "00015"
	},
	{
		unicode: "🤩",
		plaincode: "00016"
	},
	{
		unicode: "😘",
		plaincode: "00017"
	},
	{
		unicode: "😗",
		plaincode: "00018"
	},
	{
		unicode: "😚",
		plaincode: "00019"
	},
	{
		unicode: "😙",
		plaincode: "00020"
	},
	{
		unicode: "🥲",
		plaincode: "00021"
	},
	{
		unicode: "😋",
		plaincode: "00022"
	},
	{
		unicode: "😛",
		plaincode: "00023"
	},
	{
		unicode: "😜",
		plaincode: "00024"
	},
	{
		unicode: "🤪",
		plaincode: "00025"
	},
	{
		unicode: "😝",
		plaincode: "00026"
	},
	{
		unicode: "🤑",
		plaincode: "00027"
	},
	{
		unicode: "🤗",
		plaincode: "00028"
	},
	{
		unicode: "🤭",
		plaincode: "00029"
	},
	{
		unicode: "🫢",
		plaincode: "00030"
	},
	{
		unicode: "🫣",
		plaincode: "00031"
	},
	{
		unicode: "🤫",
		plaincode: "00032"
	},
	{
		unicode: "🤔",
		plaincode: "00033"
	},
	{
		unicode: "🫡",
		plaincode: "00034"
	},
	{
		unicode: "🤐",
		plaincode: "00035"
	},
	{
		unicode: "🤨",
		plaincode: "00036"
	},
	{
		unicode: "😐",
		plaincode: "00037"
	},
	{
		unicode: "😑",
		plaincode: "00038"
	},
	{
		unicode: "😶",
		plaincode: "00039"
	},
	{
		unicode: "🫥",
		plaincode: "00040"
	},
	{
		unicode: "😶‍🌫️",
		plaincode: "00041"
	},
	{
		unicode: "😏",
		plaincode: "00042"
	},
	{
		unicode: "😒",
		plaincode: "00043"
	},
	{
		unicode: "🙄",
		plaincode: "00044"
	},
	{
		unicode: "😬",
		plaincode: "00045"
	},
	{
		unicode: "😮‍💨",
		plaincode: "00046"
	},
	{
		unicode: "🤥",
		plaincode: "00047"
	},
	{
		unicode: "🫨",
		plaincode: "00048"
	},
	{
		unicode: "😌",
		plaincode: "00049"
	},
	{
		unicode: "😔",
		plaincode: "00050"
	},
	{
		unicode: "😪",
		plaincode: "00051"
	},
	{
		unicode: "🤤",
		plaincode: "00052"
	},
	{
		unicode: "😴",
		plaincode: "00053"
	},
	{
		unicode: "😷",
		plaincode: "00054"
	},
	{
		unicode: "🤒",
		plaincode: "00055"
	},
	{
		unicode: "🤕",
		plaincode: "00056"
	},
	{
		unicode: "🤢",
		plaincode: "00057"
	},
	{
		unicode: "🤮",
		plaincode: "00058"
	},
	{
		unicode: "🤧",
		plaincode: "00059"
	},
	{
		unicode: "🥵",
		plaincode: "00060"
	},
	{
		unicode: "🥶",
		plaincode: "00061"
	},
	{
		unicode: "🥴",
		plaincode: "00062"
	},
	{
		unicode: "😵",
		plaincode: "00063"
	},
	{
		unicode: "😵‍💫",
		plaincode: "00064"
	},
	{
		unicode: "🤯",
		plaincode: "00065"
	},
	{
		unicode: "🤠",
		plaincode: "00066"
	},
	{
		unicode: "🥳",
		plaincode: "00067"
	},
	{
		unicode: "🥸",
		plaincode: "00068"
	},
	{
		unicode: "😎",
		plaincode: "00069"
	},
	{
		unicode: "🤓",
		plaincode: "00070"
	},
	{
		unicode: "🧐",
		plaincode: "00071"
	},
	{
		unicode: "😕",
		plaincode: "00072"
	},
	{
		unicode: "🫤",
		plaincode: "00073"
	},
	{
		unicode: "😟",
		plaincode: "00074"
	},
	{
		unicode: "🙁",
		plaincode: "00075"
	},
	{
		unicode: "😮",
		plaincode: "00076"
	},
	{
		unicode: "😯",
		plaincode: "00077"
	},
	{
		unicode: "😲",
		plaincode: "00078"
	},
	{
		unicode: "😳",
		plaincode: "00079"
	},
	{
		unicode: "🥺",
		plaincode: "00080"
	},
	{
		unicode: "🥹",
		plaincode: "00081"
	},
	{
		unicode: "😦",
		plaincode: "00082"
	},
	{
		unicode: "😧",
		plaincode: "00083"
	},
	{
		unicode: "😨",
		plaincode: "00084"
	},
	{
		unicode: "😰",
		plaincode: "00085"
	},
	{
		unicode: "😥",
		plaincode: "00086"
	},
	{
		unicode: "😢",
		plaincode: "00087"
	},
	{
		unicode: "😭",
		plaincode: "00088"
	},
	{
		unicode: "😱",
		plaincode: "00089"
	},
	{
		unicode: "😖",
		plaincode: "00090"
	},
	{
		unicode: "😣",
		plaincode: "00091"
	},
	{
		unicode: "😞",
		plaincode: "00092"
	},
	{
		unicode: "😓",
		plaincode: "00093"
	},
	{
		unicode: "😩",
		plaincode: "00094"
	},
	{
		unicode: "😫",
		plaincode: "00095"
	},
	{
		unicode: "🥱",
		plaincode: "00096"
	},
	{
		unicode: "😤",
		plaincode: "00097"
	},
	{
		unicode: "😡",
		plaincode: "00098"
	},
	{
		unicode: "😠",
		plaincode: "00099"
	},
	{
		unicode: "🤬",
		plaincode: "00100"
	},
	{
		unicode: "😈",
		plaincode: "00101"
	},
	{
		unicode: "👿",
		plaincode: "00102"
	},
	{
		unicode: "💀",
		plaincode: "00103"
	},
	{
		unicode: "💩",
		plaincode: "00104"
	},
	{
		unicode: "🤡",
		plaincode: "00105"
	},
	{
		unicode: "👹",
		plaincode: "00106"
	},
	{
		unicode: "👺",
		plaincode: "00107"
	},
	{
		unicode: "👻",
		plaincode: "00108"
	},
	{
		unicode: "👽",
		plaincode: "00109"
	},
	{
		unicode: "👾",
		plaincode: "00110"
	},
	{
		unicode: "🤖",
		plaincode: "00111"
	},
	{
		unicode: "😺",
		plaincode: "00112"
	},
	{
		unicode: "😸",
		plaincode: "00113"
	},
	{
		unicode: "😹",
		plaincode: "00114"
	},
	{
		unicode: "😻",
		plaincode: "00115"
	},
	{
		unicode: "😼",
		plaincode: "00116"
	},
	{
		unicode: "😽",
		plaincode: "00117"
	},
	{
		unicode: "🙀",
		plaincode: "00118"
	},
	{
		unicode: "😿",
		plaincode: "00119"
	},
	{
		unicode: "😾",
		plaincode: "00120"
	},
	{
		unicode: "🙈",
		plaincode: "00121"
	},
	{
		unicode: "🙉",
		plaincode: "00122"
	},
	{
		unicode: "🙊",
		plaincode: "00123"
	},
	{
		unicode: "💌",
		plaincode: "00124"
	},
	{
		unicode: "💘",
		plaincode: "00125"
	},
	{
		unicode: "💝",
		plaincode: "00126"
	},
	{
		unicode: "💖",
		plaincode: "00127"
	},
	{
		unicode: "💗",
		plaincode: "00128"
	},
	{
		unicode: "💓",
		plaincode: "00129"
	},
	{
		unicode: "💞",
		plaincode: "00130"
	},
	{
		unicode: "💕",
		plaincode: "00131"
	},
	{
		unicode: "💟",
		plaincode: "00132"
	},
	{
		unicode: "💔",
		plaincode: "00133"
	},
	{
		unicode: "❤️‍🔥",
		plaincode: "00134"
	},
	{
		unicode: "❤️‍🩹",
		plaincode: "00135"
	},
	{
		unicode: "🩷",
		plaincode: "00136"
	},
	{
		unicode: "🧡",
		plaincode: "00137"
	},
	{
		unicode: "💛",
		plaincode: "00138"
	},
	{
		unicode: "💚",
		plaincode: "00139"
	},
	{
		unicode: "💙",
		plaincode: "00140"
	},
	{
		unicode: "🩵",
		plaincode: "00141"
	},
	{
		unicode: "💜",
		plaincode: "00142"
	},
	{
		unicode: "🤎",
		plaincode: "00143"
	},
	{
		unicode: "🖤",
		plaincode: "00144"
	},
	{
		unicode: "🩶",
		plaincode: "00145"
	},
	{
		unicode: "🤍",
		plaincode: "00146"
	},
	{
		unicode: "💋",
		plaincode: "00147"
	},
	{
		unicode: "💯",
		plaincode: "00148"
	},
	{
		unicode: "💢",
		plaincode: "00149"
	},
	{
		unicode: "💥",
		plaincode: "00150"
	},
	{
		unicode: "💫",
		plaincode: "00151"
	},
	{
		unicode: "💦",
		plaincode: "00152"
	},
	{
		unicode: "💨",
		plaincode: "00153"
	},
	{
		unicode: "💬",
		plaincode: "00154"
	},
	{
		unicode: "👁️‍🗨️",
		plaincode: "00155"
	},
	{
		unicode: "💭",
		plaincode: "00156"
	},
	{
		unicode: "💤",
		plaincode: "00157"
	},
	{
		unicode: "👋",
		plaincode: "00158"
	},
	{
		unicode: "👋🏻",
		plaincode: "00159"
	},
	{
		unicode: "👋🏼",
		plaincode: "00160"
	},
	{
		unicode: "👋🏽",
		plaincode: "00161"
	},
	{
		unicode: "👋🏾",
		plaincode: "00162"
	},
	{
		unicode: "👋🏿",
		plaincode: "00163"
	},
	{
		unicode: "🤚",
		plaincode: "00164"
	},
	{
		unicode: "🤚🏻",
		plaincode: "00165"
	},
	{
		unicode: "🤚🏼",
		plaincode: "00166"
	},
	{
		unicode: "🤚🏽",
		plaincode: "00167"
	},
	{
		unicode: "🤚🏾",
		plaincode: "00168"
	},
	{
		unicode: "🤚🏿",
		plaincode: "00169"
	},
	{
		unicode: "🖐🏻",
		plaincode: "00170"
	},
	{
		unicode: "🖐🏼",
		plaincode: "00171"
	},
	{
		unicode: "🖐🏽",
		plaincode: "00172"
	},
	{
		unicode: "🖐🏾",
		plaincode: "00173"
	},
	{
		unicode: "🖐🏿",
		plaincode: "00174"
	},
	{
		unicode: "✋",
		plaincode: "00175"
	},
	{
		unicode: "✋🏻",
		plaincode: "00176"
	},
	{
		unicode: "✋🏼",
		plaincode: "00177"
	},
	{
		unicode: "✋🏽",
		plaincode: "00178"
	},
	{
		unicode: "✋🏾",
		plaincode: "00179"
	},
	{
		unicode: "✋🏿",
		plaincode: "00180"
	},
	{
		unicode: "🖖",
		plaincode: "00181"
	},
	{
		unicode: "🖖🏻",
		plaincode: "00182"
	},
	{
		unicode: "🖖🏼",
		plaincode: "00183"
	},
	{
		unicode: "🖖🏽",
		plaincode: "00184"
	},
	{
		unicode: "🖖🏾",
		plaincode: "00185"
	},
	{
		unicode: "🖖🏿",
		plaincode: "00186"
	},
	{
		unicode: "🫱",
		plaincode: "00187"
	},
	{
		unicode: "🫱🏻",
		plaincode: "00188"
	},
	{
		unicode: "🫱🏼",
		plaincode: "00189"
	},
	{
		unicode: "🫱🏽",
		plaincode: "00190"
	},
	{
		unicode: "🫱🏾",
		plaincode: "00191"
	},
	{
		unicode: "🫱🏿",
		plaincode: "00192"
	},
	{
		unicode: "🫲",
		plaincode: "00193"
	},
	{
		unicode: "🫲🏻",
		plaincode: "00194"
	},
	{
		unicode: "🫲🏼",
		plaincode: "00195"
	},
	{
		unicode: "🫲🏽",
		plaincode: "00196"
	},
	{
		unicode: "🫲🏾",
		plaincode: "00197"
	},
	{
		unicode: "🫲🏿",
		plaincode: "00198"
	},
	{
		unicode: "🫳",
		plaincode: "00199"
	},
	{
		unicode: "🫳🏻",
		plaincode: "00200"
	},
	{
		unicode: "🫳🏼",
		plaincode: "00201"
	},
	{
		unicode: "🫳🏽",
		plaincode: "00202"
	},
	{
		unicode: "🫳🏾",
		plaincode: "00203"
	},
	{
		unicode: "🫳🏿",
		plaincode: "00204"
	},
	{
		unicode: "🫴",
		plaincode: "00205"
	},
	{
		unicode: "🫴🏻",
		plaincode: "00206"
	},
	{
		unicode: "🫴🏼",
		plaincode: "00207"
	},
	{
		unicode: "🫴🏽",
		plaincode: "00208"
	},
	{
		unicode: "🫴🏾",
		plaincode: "00209"
	},
	{
		unicode: "🫴🏿",
		plaincode: "00210"
	},
	{
		unicode: "🫷",
		plaincode: "00211"
	},
	{
		unicode: "🫷🏻",
		plaincode: "00212"
	},
	{
		unicode: "🫷🏼",
		plaincode: "00213"
	},
	{
		unicode: "🫷🏽",
		plaincode: "00214"
	},
	{
		unicode: "🫷🏾",
		plaincode: "00215"
	},
	{
		unicode: "🫷🏿",
		plaincode: "00216"
	},
	{
		unicode: "🫸",
		plaincode: "00217"
	},
	{
		unicode: "🫸🏻",
		plaincode: "00218"
	},
	{
		unicode: "🫸🏼",
		plaincode: "00219"
	},
	{
		unicode: "🫸🏽",
		plaincode: "00220"
	},
	{
		unicode: "🫸🏾",
		plaincode: "00221"
	},
	{
		unicode: "🫸🏿",
		plaincode: "00222"
	},
	{
		unicode: "👌",
		plaincode: "00223"
	},
	{
		unicode: "👌🏻",
		plaincode: "00224"
	},
	{
		unicode: "👌🏼",
		plaincode: "00225"
	},
	{
		unicode: "👌🏽",
		plaincode: "00226"
	},
	{
		unicode: "👌🏾",
		plaincode: "00227"
	},
	{
		unicode: "👌🏿",
		plaincode: "00228"
	},
	{
		unicode: "🤌",
		plaincode: "00229"
	},
	{
		unicode: "🤌🏻",
		plaincode: "00230"
	},
	{
		unicode: "🤌🏼",
		plaincode: "00231"
	},
	{
		unicode: "🤌🏽",
		plaincode: "00232"
	},
	{
		unicode: "🤌🏾",
		plaincode: "00233"
	},
	{
		unicode: "🤌🏿",
		plaincode: "00234"
	},
	{
		unicode: "🤏",
		plaincode: "00235"
	},
	{
		unicode: "🤏🏻",
		plaincode: "00236"
	},
	{
		unicode: "🤏🏼",
		plaincode: "00237"
	},
	{
		unicode: "🤏🏽",
		plaincode: "00238"
	},
	{
		unicode: "🤏🏾",
		plaincode: "00239"
	},
	{
		unicode: "🤏🏿",
		plaincode: "00240"
	},
	{
		unicode: "✌🏻",
		plaincode: "00241"
	},
	{
		unicode: "✌🏼",
		plaincode: "00242"
	},
	{
		unicode: "✌🏽",
		plaincode: "00243"
	},
	{
		unicode: "✌🏾",
		plaincode: "00244"
	},
	{
		unicode: "✌🏿",
		plaincode: "00245"
	},
	{
		unicode: "🤞",
		plaincode: "00246"
	},
	{
		unicode: "🤞🏻",
		plaincode: "00247"
	},
	{
		unicode: "🤞🏼",
		plaincode: "00248"
	},
	{
		unicode: "🤞🏽",
		plaincode: "00249"
	},
	{
		unicode: "🤞🏾",
		plaincode: "00250"
	},
	{
		unicode: "🤞🏿",
		plaincode: "00251"
	},
	{
		unicode: "🫰",
		plaincode: "00252"
	},
	{
		unicode: "🫰🏻",
		plaincode: "00253"
	},
	{
		unicode: "🫰🏼",
		plaincode: "00254"
	},
	{
		unicode: "🫰🏽",
		plaincode: "00255"
	},
	{
		unicode: "🫰🏾",
		plaincode: "00256"
	},
	{
		unicode: "🫰🏿",
		plaincode: "00257"
	},
	{
		unicode: "🤟",
		plaincode: "00258"
	},
	{
		unicode: "🤟🏻",
		plaincode: "00259"
	},
	{
		unicode: "🤟🏼",
		plaincode: "00260"
	},
	{
		unicode: "🤟🏽",
		plaincode: "00261"
	},
	{
		unicode: "🤟🏾",
		plaincode: "00262"
	},
	{
		unicode: "🤟🏿",
		plaincode: "00263"
	},
	{
		unicode: "🤘",
		plaincode: "00264"
	},
	{
		unicode: "🤘🏻",
		plaincode: "00265"
	},
	{
		unicode: "🤘🏼",
		plaincode: "00266"
	},
	{
		unicode: "🤘🏽",
		plaincode: "00267"
	},
	{
		unicode: "🤘🏾",
		plaincode: "00268"
	},
	{
		unicode: "🤘🏿",
		plaincode: "00269"
	},
	{
		unicode: "🤙",
		plaincode: "00270"
	},
	{
		unicode: "🤙🏻",
		plaincode: "00271"
	},
	{
		unicode: "🤙🏼",
		plaincode: "00272"
	},
	{
		unicode: "🤙🏽",
		plaincode: "00273"
	},
	{
		unicode: "🤙🏾",
		plaincode: "00274"
	},
	{
		unicode: "🤙🏿",
		plaincode: "00275"
	},
	{
		unicode: "👈",
		plaincode: "00276"
	},
	{
		unicode: "👈🏻",
		plaincode: "00277"
	},
	{
		unicode: "👈🏼",
		plaincode: "00278"
	},
	{
		unicode: "👈🏽",
		plaincode: "00279"
	},
	{
		unicode: "👈🏾",
		plaincode: "00280"
	},
	{
		unicode: "👈🏿",
		plaincode: "00281"
	},
	{
		unicode: "👉",
		plaincode: "00282"
	},
	{
		unicode: "👉🏻",
		plaincode: "00283"
	},
	{
		unicode: "👉🏼",
		plaincode: "00284"
	},
	{
		unicode: "👉🏽",
		plaincode: "00285"
	},
	{
		unicode: "👉🏾",
		plaincode: "00286"
	},
	{
		unicode: "👉🏿",
		plaincode: "00287"
	},
	{
		unicode: "👆",
		plaincode: "00288"
	},
	{
		unicode: "👆🏻",
		plaincode: "00289"
	},
	{
		unicode: "👆🏼",
		plaincode: "00290"
	},
	{
		unicode: "👆🏽",
		plaincode: "00291"
	},
	{
		unicode: "👆🏾",
		plaincode: "00292"
	},
	{
		unicode: "👆🏿",
		plaincode: "00293"
	},
	{
		unicode: "🖕",
		plaincode: "00294"
	},
	{
		unicode: "🖕🏻",
		plaincode: "00295"
	},
	{
		unicode: "🖕🏼",
		plaincode: "00296"
	},
	{
		unicode: "🖕🏽",
		plaincode: "00297"
	},
	{
		unicode: "🖕🏾",
		plaincode: "00298"
	},
	{
		unicode: "🖕🏿",
		plaincode: "00299"
	},
	{
		unicode: "👇",
		plaincode: "00300"
	},
	{
		unicode: "👇🏻",
		plaincode: "00301"
	},
	{
		unicode: "👇🏼",
		plaincode: "00302"
	},
	{
		unicode: "👇🏽",
		plaincode: "00303"
	},
	{
		unicode: "👇🏾",
		plaincode: "00304"
	},
	{
		unicode: "👇🏿",
		plaincode: "00305"
	},
	{
		unicode: "☝🏻",
		plaincode: "00306"
	},
	{
		unicode: "☝🏼",
		plaincode: "00307"
	},
	{
		unicode: "☝🏽",
		plaincode: "00308"
	},
	{
		unicode: "☝🏾",
		plaincode: "00309"
	},
	{
		unicode: "☝🏿",
		plaincode: "00310"
	},
	{
		unicode: "🫵",
		plaincode: "00311"
	},
	{
		unicode: "🫵🏻",
		plaincode: "00312"
	},
	{
		unicode: "🫵🏼",
		plaincode: "00313"
	},
	{
		unicode: "🫵🏽",
		plaincode: "00314"
	},
	{
		unicode: "🫵🏾",
		plaincode: "00315"
	},
	{
		unicode: "🫵🏿",
		plaincode: "00316"
	},
	{
		unicode: "👍",
		plaincode: "00317"
	},
	{
		unicode: "👍🏻",
		plaincode: "00318"
	},
	{
		unicode: "👍🏼",
		plaincode: "00319"
	},
	{
		unicode: "👍🏽",
		plaincode: "00320"
	},
	{
		unicode: "👍🏾",
		plaincode: "00321"
	},
	{
		unicode: "👍🏿",
		plaincode: "00322"
	},
	{
		unicode: "👎",
		plaincode: "00323"
	},
	{
		unicode: "👎🏻",
		plaincode: "00324"
	},
	{
		unicode: "👎🏼",
		plaincode: "00325"
	},
	{
		unicode: "👎🏽",
		plaincode: "00326"
	},
	{
		unicode: "👎🏾",
		plaincode: "00327"
	},
	{
		unicode: "👎🏿",
		plaincode: "00328"
	},
	{
		unicode: "✊",
		plaincode: "00329"
	},
	{
		unicode: "✊🏻",
		plaincode: "00330"
	},
	{
		unicode: "✊🏼",
		plaincode: "00331"
	},
	{
		unicode: "✊🏽",
		plaincode: "00332"
	},
	{
		unicode: "✊🏾",
		plaincode: "00333"
	},
	{
		unicode: "✊🏿",
		plaincode: "00334"
	},
	{
		unicode: "👊",
		plaincode: "00335"
	},
	{
		unicode: "👊🏻",
		plaincode: "00336"
	},
	{
		unicode: "👊🏼",
		plaincode: "00337"
	},
	{
		unicode: "👊🏽",
		plaincode: "00338"
	},
	{
		unicode: "👊🏾",
		plaincode: "00339"
	},
	{
		unicode: "👊🏿",
		plaincode: "00340"
	},
	{
		unicode: "🤛",
		plaincode: "00341"
	},
	{
		unicode: "🤛🏻",
		plaincode: "00342"
	},
	{
		unicode: "🤛🏼",
		plaincode: "00343"
	},
	{
		unicode: "🤛🏽",
		plaincode: "00344"
	},
	{
		unicode: "🤛🏾",
		plaincode: "00345"
	},
	{
		unicode: "🤛🏿",
		plaincode: "00346"
	},
	{
		unicode: "🤜",
		plaincode: "00347"
	},
	{
		unicode: "🤜🏻",
		plaincode: "00348"
	},
	{
		unicode: "🤜🏼",
		plaincode: "00349"
	},
	{
		unicode: "🤜🏽",
		plaincode: "00350"
	},
	{
		unicode: "🤜🏾",
		plaincode: "00351"
	},
	{
		unicode: "🤜🏿",
		plaincode: "00352"
	},
	{
		unicode: "👏",
		plaincode: "00353"
	},
	{
		unicode: "👏🏻",
		plaincode: "00354"
	},
	{
		unicode: "👏🏼",
		plaincode: "00355"
	},
	{
		unicode: "👏🏽",
		plaincode: "00356"
	},
	{
		unicode: "👏🏾",
		plaincode: "00357"
	},
	{
		unicode: "👏🏿",
		plaincode: "00358"
	},
	{
		unicode: "🙌",
		plaincode: "00359"
	},
	{
		unicode: "🙌🏻",
		plaincode: "00360"
	},
	{
		unicode: "🙌🏼",
		plaincode: "00361"
	},
	{
		unicode: "🙌🏽",
		plaincode: "00362"
	},
	{
		unicode: "🙌🏾",
		plaincode: "00363"
	},
	{
		unicode: "🙌🏿",
		plaincode: "00364"
	},
	{
		unicode: "🫶",
		plaincode: "00365"
	},
	{
		unicode: "🫶🏻",
		plaincode: "00366"
	},
	{
		unicode: "🫶🏼",
		plaincode: "00367"
	},
	{
		unicode: "🫶🏽",
		plaincode: "00368"
	},
	{
		unicode: "🫶🏾",
		plaincode: "00369"
	},
	{
		unicode: "🫶🏿",
		plaincode: "00370"
	},
	{
		unicode: "👐",
		plaincode: "00371"
	},
	{
		unicode: "👐🏻",
		plaincode: "00372"
	},
	{
		unicode: "👐🏼",
		plaincode: "00373"
	},
	{
		unicode: "👐🏽",
		plaincode: "00374"
	},
	{
		unicode: "👐🏾",
		plaincode: "00375"
	},
	{
		unicode: "👐🏿",
		plaincode: "00376"
	},
	{
		unicode: "🤲",
		plaincode: "00377"
	},
	{
		unicode: "🤲🏻",
		plaincode: "00378"
	},
	{
		unicode: "🤲🏼",
		plaincode: "00379"
	},
	{
		unicode: "🤲🏽",
		plaincode: "00380"
	},
	{
		unicode: "🤲🏾",
		plaincode: "00381"
	},
	{
		unicode: "🤲🏿",
		plaincode: "00382"
	},
	{
		unicode: "🤝",
		plaincode: "00383"
	},
	{
		unicode: "🤝🏻",
		plaincode: "00384"
	},
	{
		unicode: "🤝🏼",
		plaincode: "00385"
	},
	{
		unicode: "🤝🏽",
		plaincode: "00386"
	},
	{
		unicode: "🤝🏾",
		plaincode: "00387"
	},
	{
		unicode: "🤝🏿",
		plaincode: "00388"
	},
	{
		unicode: "🫱🏻‍🫲🏼",
		plaincode: "00389"
	},
	{
		unicode: "🫱🏻‍🫲🏽",
		plaincode: "00390"
	},
	{
		unicode: "🫱🏻‍🫲🏾",
		plaincode: "00391"
	},
	{
		unicode: "🫱🏻‍🫲🏿",
		plaincode: "00392"
	},
	{
		unicode: "🫱🏼‍🫲🏻",
		plaincode: "00393"
	},
	{
		unicode: "🫱🏼‍🫲🏽",
		plaincode: "00394"
	},
	{
		unicode: "🫱🏼‍🫲🏾",
		plaincode: "00395"
	},
	{
		unicode: "🫱🏼‍🫲🏿",
		plaincode: "00396"
	},
	{
		unicode: "🫱🏽‍🫲🏻",
		plaincode: "00397"
	},
	{
		unicode: "🫱🏽‍🫲🏼",
		plaincode: "00398"
	},
	{
		unicode: "🫱🏽‍🫲🏾",
		plaincode: "00399"
	},
	{
		unicode: "🫱🏽‍🫲🏿",
		plaincode: "00400"
	},
	{
		unicode: "🫱🏾‍🫲🏻",
		plaincode: "00401"
	},
	{
		unicode: "🫱🏾‍🫲🏼",
		plaincode: "00402"
	},
	{
		unicode: "🫱🏾‍🫲🏽",
		plaincode: "00403"
	},
	{
		unicode: "🫱🏾‍🫲🏿",
		plaincode: "00404"
	},
	{
		unicode: "🫱🏿‍🫲🏻",
		plaincode: "00405"
	},
	{
		unicode: "🫱🏿‍🫲🏼",
		plaincode: "00406"
	},
	{
		unicode: "🫱🏿‍🫲🏽",
		plaincode: "00407"
	},
	{
		unicode: "🫱🏿‍🫲🏾",
		plaincode: "00408"
	},
	{
		unicode: "🙏",
		plaincode: "00409"
	},
	{
		unicode: "🙏🏻",
		plaincode: "00410"
	},
	{
		unicode: "🙏🏼",
		plaincode: "00411"
	},
	{
		unicode: "🙏🏽",
		plaincode: "00412"
	},
	{
		unicode: "🙏🏾",
		plaincode: "00413"
	},
	{
		unicode: "🙏🏿",
		plaincode: "00414"
	},
	{
		unicode: "✍🏻",
		plaincode: "00415"
	},
	{
		unicode: "✍🏼",
		plaincode: "00416"
	},
	{
		unicode: "✍🏽",
		plaincode: "00417"
	},
	{
		unicode: "✍🏾",
		plaincode: "00418"
	},
	{
		unicode: "✍🏿",
		plaincode: "00419"
	},
	{
		unicode: "💅",
		plaincode: "00420"
	},
	{
		unicode: "💅🏻",
		plaincode: "00421"
	},
	{
		unicode: "💅🏼",
		plaincode: "00422"
	},
	{
		unicode: "💅🏽",
		plaincode: "00423"
	},
	{
		unicode: "💅🏾",
		plaincode: "00424"
	},
	{
		unicode: "💅🏿",
		plaincode: "00425"
	},
	{
		unicode: "🤳",
		plaincode: "00426"
	},
	{
		unicode: "🤳🏻",
		plaincode: "00427"
	},
	{
		unicode: "🤳🏼",
		plaincode: "00428"
	},
	{
		unicode: "🤳🏽",
		plaincode: "00429"
	},
	{
		unicode: "🤳🏾",
		plaincode: "00430"
	},
	{
		unicode: "🤳🏿",
		plaincode: "00431"
	},
	{
		unicode: "💪",
		plaincode: "00432"
	},
	{
		unicode: "💪🏻",
		plaincode: "00433"
	},
	{
		unicode: "💪🏼",
		plaincode: "00434"
	},
	{
		unicode: "💪🏽",
		plaincode: "00435"
	},
	{
		unicode: "💪🏾",
		plaincode: "00436"
	},
	{
		unicode: "💪🏿",
		plaincode: "00437"
	},
	{
		unicode: "🦾",
		plaincode: "00438"
	},
	{
		unicode: "🦿",
		plaincode: "00439"
	},
	{
		unicode: "🦵",
		plaincode: "00440"
	},
	{
		unicode: "🦵🏻",
		plaincode: "00441"
	},
	{
		unicode: "🦵🏼",
		plaincode: "00442"
	},
	{
		unicode: "🦵🏽",
		plaincode: "00443"
	},
	{
		unicode: "🦵🏾",
		plaincode: "00444"
	},
	{
		unicode: "🦵🏿",
		plaincode: "00445"
	},
	{
		unicode: "🦶",
		plaincode: "00446"
	},
	{
		unicode: "🦶🏻",
		plaincode: "00447"
	},
	{
		unicode: "🦶🏼",
		plaincode: "00448"
	},
	{
		unicode: "🦶🏽",
		plaincode: "00449"
	},
	{
		unicode: "🦶🏾",
		plaincode: "00450"
	},
	{
		unicode: "🦶🏿",
		plaincode: "00451"
	},
	{
		unicode: "👂",
		plaincode: "00452"
	},
	{
		unicode: "👂🏻",
		plaincode: "00453"
	},
	{
		unicode: "👂🏼",
		plaincode: "00454"
	},
	{
		unicode: "👂🏽",
		plaincode: "00455"
	},
	{
		unicode: "👂🏾",
		plaincode: "00456"
	},
	{
		unicode: "👂🏿",
		plaincode: "00457"
	},
	{
		unicode: "🦻",
		plaincode: "00458"
	},
	{
		unicode: "🦻🏻",
		plaincode: "00459"
	},
	{
		unicode: "🦻🏼",
		plaincode: "00460"
	},
	{
		unicode: "🦻🏽",
		plaincode: "00461"
	},
	{
		unicode: "🦻🏾",
		plaincode: "00462"
	},
	{
		unicode: "🦻🏿",
		plaincode: "00463"
	},
	{
		unicode: "👃",
		plaincode: "00464"
	},
	{
		unicode: "👃🏻",
		plaincode: "00465"
	},
	{
		unicode: "👃🏼",
		plaincode: "00466"
	},
	{
		unicode: "👃🏽",
		plaincode: "00467"
	},
	{
		unicode: "👃🏾",
		plaincode: "00468"
	},
	{
		unicode: "👃🏿",
		plaincode: "00469"
	},
	{
		unicode: "🧠",
		plaincode: "00470"
	},
	{
		unicode: "🫀",
		plaincode: "00471"
	},
	{
		unicode: "🫁",
		plaincode: "00472"
	},
	{
		unicode: "🦷",
		plaincode: "00473"
	},
	{
		unicode: "🦴",
		plaincode: "00474"
	},
	{
		unicode: "👀",
		plaincode: "00475"
	},
	{
		unicode: "👅",
		plaincode: "00476"
	},
	{
		unicode: "👄",
		plaincode: "00477"
	},
	{
		unicode: "🫦",
		plaincode: "00478"
	},
	{
		unicode: "👶",
		plaincode: "00479"
	},
	{
		unicode: "👶🏻",
		plaincode: "00480"
	},
	{
		unicode: "👶🏼",
		plaincode: "00481"
	},
	{
		unicode: "👶🏽",
		plaincode: "00482"
	},
	{
		unicode: "👶🏾",
		plaincode: "00483"
	},
	{
		unicode: "👶🏿",
		plaincode: "00484"
	},
	{
		unicode: "🧒",
		plaincode: "00485"
	},
	{
		unicode: "🧒🏻",
		plaincode: "00486"
	},
	{
		unicode: "🧒🏼",
		plaincode: "00487"
	},
	{
		unicode: "🧒🏽",
		plaincode: "00488"
	},
	{
		unicode: "🧒🏾",
		plaincode: "00489"
	},
	{
		unicode: "🧒🏿",
		plaincode: "00490"
	},
	{
		unicode: "👦",
		plaincode: "00491"
	},
	{
		unicode: "👦🏻",
		plaincode: "00492"
	},
	{
		unicode: "👦🏼",
		plaincode: "00493"
	},
	{
		unicode: "👦🏽",
		plaincode: "00494"
	},
	{
		unicode: "👦🏾",
		plaincode: "00495"
	},
	{
		unicode: "👦🏿",
		plaincode: "00496"
	},
	{
		unicode: "👧",
		plaincode: "00497"
	},
	{
		unicode: "👧🏻",
		plaincode: "00498"
	},
	{
		unicode: "👧🏼",
		plaincode: "00499"
	},
	{
		unicode: "👧🏽",
		plaincode: "00500"
	},
	{
		unicode: "👧🏾",
		plaincode: "00501"
	},
	{
		unicode: "👧🏿",
		plaincode: "00502"
	},
	{
		unicode: "🧑",
		plaincode: "00503"
	},
	{
		unicode: "🧑🏻",
		plaincode: "00504"
	},
	{
		unicode: "🧑🏼",
		plaincode: "00505"
	},
	{
		unicode: "🧑🏽",
		plaincode: "00506"
	},
	{
		unicode: "🧑🏾",
		plaincode: "00507"
	},
	{
		unicode: "🧑🏿",
		plaincode: "00508"
	},
	{
		unicode: "👱",
		plaincode: "00509"
	},
	{
		unicode: "👱🏻",
		plaincode: "00510"
	},
	{
		unicode: "👱🏼",
		plaincode: "00511"
	},
	{
		unicode: "👱🏽",
		plaincode: "00512"
	},
	{
		unicode: "👱🏾",
		plaincode: "00513"
	},
	{
		unicode: "👱🏿",
		plaincode: "00514"
	},
	{
		unicode: "👨",
		plaincode: "00515"
	},
	{
		unicode: "👨🏻",
		plaincode: "00516"
	},
	{
		unicode: "👨🏼",
		plaincode: "00517"
	},
	{
		unicode: "👨🏽",
		plaincode: "00518"
	},
	{
		unicode: "👨🏾",
		plaincode: "00519"
	},
	{
		unicode: "👨🏿",
		plaincode: "00520"
	},
	{
		unicode: "🧔",
		plaincode: "00521"
	},
	{
		unicode: "🧔🏻",
		plaincode: "00522"
	},
	{
		unicode: "🧔🏼",
		plaincode: "00523"
	},
	{
		unicode: "🧔🏽",
		plaincode: "00524"
	},
	{
		unicode: "🧔🏾",
		plaincode: "00525"
	},
	{
		unicode: "🧔🏿",
		plaincode: "00526"
	},
	{
		unicode: "🧔‍♂️",
		plaincode: "00527"
	},
	{
		unicode: "🧔🏻‍♂️",
		plaincode: "00528"
	},
	{
		unicode: "🧔🏼‍♂️",
		plaincode: "00529"
	},
	{
		unicode: "🧔🏽‍♂️",
		plaincode: "00530"
	},
	{
		unicode: "🧔🏾‍♂️",
		plaincode: "00531"
	},
	{
		unicode: "🧔🏿‍♂️",
		plaincode: "00532"
	},
	{
		unicode: "🧔‍♀️",
		plaincode: "00533"
	},
	{
		unicode: "🧔🏻‍♀️",
		plaincode: "00534"
	},
	{
		unicode: "🧔🏼‍♀️",
		plaincode: "00535"
	},
	{
		unicode: "🧔🏽‍♀️",
		plaincode: "00536"
	},
	{
		unicode: "🧔🏾‍♀️",
		plaincode: "00537"
	},
	{
		unicode: "🧔🏿‍♀️",
		plaincode: "00538"
	},
	{
		unicode: "👨‍🦰",
		plaincode: "00539"
	},
	{
		unicode: "👨🏻‍🦰",
		plaincode: "00540"
	},
	{
		unicode: "👨🏼‍🦰",
		plaincode: "00541"
	},
	{
		unicode: "👨🏽‍🦰",
		plaincode: "00542"
	},
	{
		unicode: "👨🏾‍🦰",
		plaincode: "00543"
	},
	{
		unicode: "👨🏿‍🦰",
		plaincode: "00544"
	},
	{
		unicode: "👨‍🦱",
		plaincode: "00545"
	},
	{
		unicode: "👨🏻‍🦱",
		plaincode: "00546"
	},
	{
		unicode: "👨🏼‍🦱",
		plaincode: "00547"
	},
	{
		unicode: "👨🏽‍🦱",
		plaincode: "00548"
	},
	{
		unicode: "👨🏾‍🦱",
		plaincode: "00549"
	},
	{
		unicode: "👨🏿‍🦱",
		plaincode: "00550"
	},
	{
		unicode: "👨‍🦳",
		plaincode: "00551"
	},
	{
		unicode: "👨🏻‍🦳",
		plaincode: "00552"
	},
	{
		unicode: "👨🏼‍🦳",
		plaincode: "00553"
	},
	{
		unicode: "👨🏽‍🦳",
		plaincode: "00554"
	},
	{
		unicode: "👨🏾‍🦳",
		plaincode: "00555"
	},
	{
		unicode: "👨🏿‍🦳",
		plaincode: "00556"
	},
	{
		unicode: "👨‍🦲",
		plaincode: "00557"
	},
	{
		unicode: "👨🏻‍🦲",
		plaincode: "00558"
	},
	{
		unicode: "👨🏼‍🦲",
		plaincode: "00559"
	},
	{
		unicode: "👨🏽‍🦲",
		plaincode: "00560"
	},
	{
		unicode: "👨🏾‍🦲",
		plaincode: "00561"
	},
	{
		unicode: "👨🏿‍🦲",
		plaincode: "00562"
	},
	{
		unicode: "👩",
		plaincode: "00563"
	},
	{
		unicode: "👩🏻",
		plaincode: "00564"
	},
	{
		unicode: "👩🏼",
		plaincode: "00565"
	},
	{
		unicode: "👩🏽",
		plaincode: "00566"
	},
	{
		unicode: "👩🏾",
		plaincode: "00567"
	},
	{
		unicode: "👩🏿",
		plaincode: "00568"
	},
	{
		unicode: "👩‍🦰",
		plaincode: "00569"
	},
	{
		unicode: "👩🏻‍🦰",
		plaincode: "00570"
	},
	{
		unicode: "👩🏼‍🦰",
		plaincode: "00571"
	},
	{
		unicode: "👩🏽‍🦰",
		plaincode: "00572"
	},
	{
		unicode: "👩🏾‍🦰",
		plaincode: "00573"
	},
	{
		unicode: "👩🏿‍🦰",
		plaincode: "00574"
	},
	{
		unicode: "🧑‍🦰",
		plaincode: "00575"
	},
	{
		unicode: "🧑🏻‍🦰",
		plaincode: "00576"
	},
	{
		unicode: "🧑🏼‍🦰",
		plaincode: "00577"
	},
	{
		unicode: "🧑🏽‍🦰",
		plaincode: "00578"
	},
	{
		unicode: "🧑🏾‍🦰",
		plaincode: "00579"
	},
	{
		unicode: "🧑🏿‍🦰",
		plaincode: "00580"
	},
	{
		unicode: "👩‍🦱",
		plaincode: "00581"
	},
	{
		unicode: "👩🏻‍🦱",
		plaincode: "00582"
	},
	{
		unicode: "👩🏼‍🦱",
		plaincode: "00583"
	},
	{
		unicode: "👩🏽‍🦱",
		plaincode: "00584"
	},
	{
		unicode: "👩🏾‍🦱",
		plaincode: "00585"
	},
	{
		unicode: "👩🏿‍🦱",
		plaincode: "00586"
	},
	{
		unicode: "🧑‍🦱",
		plaincode: "00587"
	},
	{
		unicode: "🧑🏻‍🦱",
		plaincode: "00588"
	},
	{
		unicode: "🧑🏼‍🦱",
		plaincode: "00589"
	},
	{
		unicode: "🧑🏽‍🦱",
		plaincode: "00590"
	},
	{
		unicode: "🧑🏾‍🦱",
		plaincode: "00591"
	},
	{
		unicode: "🧑🏿‍🦱",
		plaincode: "00592"
	},
	{
		unicode: "👩‍🦳",
		plaincode: "00593"
	},
	{
		unicode: "👩🏻‍🦳",
		plaincode: "00594"
	},
	{
		unicode: "👩🏼‍🦳",
		plaincode: "00595"
	},
	{
		unicode: "👩🏽‍🦳",
		plaincode: "00596"
	},
	{
		unicode: "👩🏾‍🦳",
		plaincode: "00597"
	},
	{
		unicode: "👩🏿‍🦳",
		plaincode: "00598"
	},
	{
		unicode: "🧑‍🦳",
		plaincode: "00599"
	},
	{
		unicode: "🧑🏻‍🦳",
		plaincode: "00600"
	},
	{
		unicode: "🧑🏼‍🦳",
		plaincode: "00601"
	},
	{
		unicode: "🧑🏽‍🦳",
		plaincode: "00602"
	},
	{
		unicode: "🧑🏾‍🦳",
		plaincode: "00603"
	},
	{
		unicode: "🧑🏿‍🦳",
		plaincode: "00604"
	},
	{
		unicode: "👩‍🦲",
		plaincode: "00605"
	},
	{
		unicode: "👩🏻‍🦲",
		plaincode: "00606"
	},
	{
		unicode: "👩🏼‍🦲",
		plaincode: "00607"
	},
	{
		unicode: "👩🏽‍🦲",
		plaincode: "00608"
	},
	{
		unicode: "👩🏾‍🦲",
		plaincode: "00609"
	},
	{
		unicode: "👩🏿‍🦲",
		plaincode: "00610"
	},
	{
		unicode: "🧑‍🦲",
		plaincode: "00611"
	},
	{
		unicode: "🧑🏻‍🦲",
		plaincode: "00612"
	},
	{
		unicode: "🧑🏼‍🦲",
		plaincode: "00613"
	},
	{
		unicode: "🧑🏽‍🦲",
		plaincode: "00614"
	},
	{
		unicode: "🧑🏾‍🦲",
		plaincode: "00615"
	},
	{
		unicode: "🧑🏿‍🦲",
		plaincode: "00616"
	},
	{
		unicode: "👱‍♀️",
		plaincode: "00617"
	},
	{
		unicode: "👱🏻‍♀️",
		plaincode: "00618"
	},
	{
		unicode: "👱🏼‍♀️",
		plaincode: "00619"
	},
	{
		unicode: "👱🏽‍♀️",
		plaincode: "00620"
	},
	{
		unicode: "👱🏾‍♀️",
		plaincode: "00621"
	},
	{
		unicode: "👱🏿‍♀️",
		plaincode: "00622"
	},
	{
		unicode: "👱‍♂️",
		plaincode: "00623"
	},
	{
		unicode: "👱🏻‍♂️",
		plaincode: "00624"
	},
	{
		unicode: "👱🏼‍♂️",
		plaincode: "00625"
	},
	{
		unicode: "👱🏽‍♂️",
		plaincode: "00626"
	},
	{
		unicode: "👱🏾‍♂️",
		plaincode: "00627"
	},
	{
		unicode: "👱🏿‍♂️",
		plaincode: "00628"
	},
	{
		unicode: "🧓",
		plaincode: "00629"
	},
	{
		unicode: "🧓🏻",
		plaincode: "00630"
	},
	{
		unicode: "🧓🏼",
		plaincode: "00631"
	},
	{
		unicode: "🧓🏽",
		plaincode: "00632"
	},
	{
		unicode: "🧓🏾",
		plaincode: "00633"
	},
	{
		unicode: "🧓🏿",
		plaincode: "00634"
	},
	{
		unicode: "👴",
		plaincode: "00635"
	},
	{
		unicode: "👴🏻",
		plaincode: "00636"
	},
	{
		unicode: "👴🏼",
		plaincode: "00637"
	},
	{
		unicode: "👴🏽",
		plaincode: "00638"
	},
	{
		unicode: "👴🏾",
		plaincode: "00639"
	},
	{
		unicode: "👴🏿",
		plaincode: "00640"
	},
	{
		unicode: "👵",
		plaincode: "00641"
	},
	{
		unicode: "👵🏻",
		plaincode: "00642"
	},
	{
		unicode: "👵🏼",
		plaincode: "00643"
	},
	{
		unicode: "👵🏽",
		plaincode: "00644"
	},
	{
		unicode: "👵🏾",
		plaincode: "00645"
	},
	{
		unicode: "👵🏿",
		plaincode: "00646"
	},
	{
		unicode: "🙍",
		plaincode: "00647"
	},
	{
		unicode: "🙍🏻",
		plaincode: "00648"
	},
	{
		unicode: "🙍🏼",
		plaincode: "00649"
	},
	{
		unicode: "🙍🏽",
		plaincode: "00650"
	},
	{
		unicode: "🙍🏾",
		plaincode: "00651"
	},
	{
		unicode: "🙍🏿",
		plaincode: "00652"
	},
	{
		unicode: "🙍‍♂️",
		plaincode: "00653"
	},
	{
		unicode: "🙍🏻‍♂️",
		plaincode: "00654"
	},
	{
		unicode: "🙍🏼‍♂️",
		plaincode: "00655"
	},
	{
		unicode: "🙍🏽‍♂️",
		plaincode: "00656"
	},
	{
		unicode: "🙍🏾‍♂️",
		plaincode: "00657"
	},
	{
		unicode: "🙍🏿‍♂️",
		plaincode: "00658"
	},
	{
		unicode: "🙍‍♀️",
		plaincode: "00659"
	},
	{
		unicode: "🙍🏻‍♀️",
		plaincode: "00660"
	},
	{
		unicode: "🙍🏼‍♀️",
		plaincode: "00661"
	},
	{
		unicode: "🙍🏽‍♀️",
		plaincode: "00662"
	},
	{
		unicode: "🙍🏾‍♀️",
		plaincode: "00663"
	},
	{
		unicode: "🙍🏿‍♀️",
		plaincode: "00664"
	},
	{
		unicode: "🙎",
		plaincode: "00665"
	},
	{
		unicode: "🙎🏻",
		plaincode: "00666"
	},
	{
		unicode: "🙎🏼",
		plaincode: "00667"
	},
	{
		unicode: "🙎🏽",
		plaincode: "00668"
	},
	{
		unicode: "🙎🏾",
		plaincode: "00669"
	},
	{
		unicode: "🙎🏿",
		plaincode: "00670"
	},
	{
		unicode: "🙎‍♂️",
		plaincode: "00671"
	},
	{
		unicode: "🙎🏻‍♂️",
		plaincode: "00672"
	},
	{
		unicode: "🙎🏼‍♂️",
		plaincode: "00673"
	},
	{
		unicode: "🙎🏽‍♂️",
		plaincode: "00674"
	},
	{
		unicode: "🙎🏾‍♂️",
		plaincode: "00675"
	},
	{
		unicode: "🙎🏿‍♂️",
		plaincode: "00676"
	},
	{
		unicode: "🙎‍♀️",
		plaincode: "00677"
	},
	{
		unicode: "🙎🏻‍♀️",
		plaincode: "00678"
	},
	{
		unicode: "🙎🏼‍♀️",
		plaincode: "00679"
	},
	{
		unicode: "🙎🏽‍♀️",
		plaincode: "00680"
	},
	{
		unicode: "🙎🏾‍♀️",
		plaincode: "00681"
	},
	{
		unicode: "🙎🏿‍♀️",
		plaincode: "00682"
	},
	{
		unicode: "🙅",
		plaincode: "00683"
	},
	{
		unicode: "🙅🏻",
		plaincode: "00684"
	},
	{
		unicode: "🙅🏼",
		plaincode: "00685"
	},
	{
		unicode: "🙅🏽",
		plaincode: "00686"
	},
	{
		unicode: "🙅🏾",
		plaincode: "00687"
	},
	{
		unicode: "🙅🏿",
		plaincode: "00688"
	},
	{
		unicode: "🙅‍♂️",
		plaincode: "00689"
	},
	{
		unicode: "🙅🏻‍♂️",
		plaincode: "00690"
	},
	{
		unicode: "🙅🏼‍♂️",
		plaincode: "00691"
	},
	{
		unicode: "🙅🏽‍♂️",
		plaincode: "00692"
	},
	{
		unicode: "🙅🏾‍♂️",
		plaincode: "00693"
	},
	{
		unicode: "🙅🏿‍♂️",
		plaincode: "00694"
	},
	{
		unicode: "🙅‍♀️",
		plaincode: "00695"
	},
	{
		unicode: "🙅🏻‍♀️",
		plaincode: "00696"
	},
	{
		unicode: "🙅🏼‍♀️",
		plaincode: "00697"
	},
	{
		unicode: "🙅🏽‍♀️",
		plaincode: "00698"
	},
	{
		unicode: "🙅🏾‍♀️",
		plaincode: "00699"
	},
	{
		unicode: "🙅🏿‍♀️",
		plaincode: "00700"
	},
	{
		unicode: "🙆",
		plaincode: "00701"
	},
	{
		unicode: "🙆🏻",
		plaincode: "00702"
	},
	{
		unicode: "🙆🏼",
		plaincode: "00703"
	},
	{
		unicode: "🙆🏽",
		plaincode: "00704"
	},
	{
		unicode: "🙆🏾",
		plaincode: "00705"
	},
	{
		unicode: "🙆🏿",
		plaincode: "00706"
	},
	{
		unicode: "🙆‍♂️",
		plaincode: "00707"
	},
	{
		unicode: "🙆🏻‍♂️",
		plaincode: "00708"
	},
	{
		unicode: "🙆🏼‍♂️",
		plaincode: "00709"
	},
	{
		unicode: "🙆🏽‍♂️",
		plaincode: "00710"
	},
	{
		unicode: "🙆🏾‍♂️",
		plaincode: "00711"
	},
	{
		unicode: "🙆🏿‍♂️",
		plaincode: "00712"
	},
	{
		unicode: "🙆‍♀️",
		plaincode: "00713"
	},
	{
		unicode: "🙆🏻‍♀️",
		plaincode: "00714"
	},
	{
		unicode: "🙆🏼‍♀️",
		plaincode: "00715"
	},
	{
		unicode: "🙆🏽‍♀️",
		plaincode: "00716"
	},
	{
		unicode: "🙆🏾‍♀️",
		plaincode: "00717"
	},
	{
		unicode: "🙆🏿‍♀️",
		plaincode: "00718"
	},
	{
		unicode: "💁",
		plaincode: "00719"
	},
	{
		unicode: "💁🏻",
		plaincode: "00720"
	},
	{
		unicode: "💁🏼",
		plaincode: "00721"
	},
	{
		unicode: "💁🏽",
		plaincode: "00722"
	},
	{
		unicode: "💁🏾",
		plaincode: "00723"
	},
	{
		unicode: "💁🏿",
		plaincode: "00724"
	},
	{
		unicode: "💁‍♂️",
		plaincode: "00725"
	},
	{
		unicode: "💁🏻‍♂️",
		plaincode: "00726"
	},
	{
		unicode: "💁🏼‍♂️",
		plaincode: "00727"
	},
	{
		unicode: "💁🏽‍♂️",
		plaincode: "00728"
	},
	{
		unicode: "💁🏾‍♂️",
		plaincode: "00729"
	},
	{
		unicode: "💁🏿‍♂️",
		plaincode: "00730"
	},
	{
		unicode: "💁‍♀️",
		plaincode: "00731"
	},
	{
		unicode: "💁🏻‍♀️",
		plaincode: "00732"
	},
	{
		unicode: "💁🏼‍♀️",
		plaincode: "00733"
	},
	{
		unicode: "💁🏽‍♀️",
		plaincode: "00734"
	},
	{
		unicode: "💁🏾‍♀️",
		plaincode: "00735"
	},
	{
		unicode: "💁🏿‍♀️",
		plaincode: "00736"
	},
	{
		unicode: "🙋",
		plaincode: "00737"
	},
	{
		unicode: "🙋🏻",
		plaincode: "00738"
	},
	{
		unicode: "🙋🏼",
		plaincode: "00739"
	},
	{
		unicode: "🙋🏽",
		plaincode: "00740"
	},
	{
		unicode: "🙋🏾",
		plaincode: "00741"
	},
	{
		unicode: "🙋🏿",
		plaincode: "00742"
	},
	{
		unicode: "🙋‍♂️",
		plaincode: "00743"
	},
	{
		unicode: "🙋🏻‍♂️",
		plaincode: "00744"
	},
	{
		unicode: "🙋🏼‍♂️",
		plaincode: "00745"
	},
	{
		unicode: "🙋🏽‍♂️",
		plaincode: "00746"
	},
	{
		unicode: "🙋🏾‍♂️",
		plaincode: "00747"
	},
	{
		unicode: "🙋🏿‍♂️",
		plaincode: "00748"
	},
	{
		unicode: "🙋‍♀️",
		plaincode: "00749"
	},
	{
		unicode: "🙋🏻‍♀️",
		plaincode: "00750"
	},
	{
		unicode: "🙋🏼‍♀️",
		plaincode: "00751"
	},
	{
		unicode: "🙋🏽‍♀️",
		plaincode: "00752"
	},
	{
		unicode: "🙋🏾‍♀️",
		plaincode: "00753"
	},
	{
		unicode: "🙋🏿‍♀️",
		plaincode: "00754"
	},
	{
		unicode: "🧏",
		plaincode: "00755"
	},
	{
		unicode: "🧏🏻",
		plaincode: "00756"
	},
	{
		unicode: "🧏🏼",
		plaincode: "00757"
	},
	{
		unicode: "🧏🏽",
		plaincode: "00758"
	},
	{
		unicode: "🧏🏾",
		plaincode: "00759"
	},
	{
		unicode: "🧏🏿",
		plaincode: "00760"
	},
	{
		unicode: "🧏‍♂️",
		plaincode: "00761"
	},
	{
		unicode: "🧏🏻‍♂️",
		plaincode: "00762"
	},
	{
		unicode: "🧏🏼‍♂️",
		plaincode: "00763"
	},
	{
		unicode: "🧏🏽‍♂️",
		plaincode: "00764"
	},
	{
		unicode: "🧏🏾‍♂️",
		plaincode: "00765"
	},
	{
		unicode: "🧏🏿‍♂️",
		plaincode: "00766"
	},
	{
		unicode: "🧏‍♀️",
		plaincode: "00767"
	},
	{
		unicode: "🧏🏻‍♀️",
		plaincode: "00768"
	},
	{
		unicode: "🧏🏼‍♀️",
		plaincode: "00769"
	},
	{
		unicode: "🧏🏽‍♀️",
		plaincode: "00770"
	},
	{
		unicode: "🧏🏾‍♀️",
		plaincode: "00771"
	},
	{
		unicode: "🧏🏿‍♀️",
		plaincode: "00772"
	},
	{
		unicode: "🙇",
		plaincode: "00773"
	},
	{
		unicode: "🙇🏻",
		plaincode: "00774"
	},
	{
		unicode: "🙇🏼",
		plaincode: "00775"
	},
	{
		unicode: "🙇🏽",
		plaincode: "00776"
	},
	{
		unicode: "🙇🏾",
		plaincode: "00777"
	},
	{
		unicode: "🙇🏿",
		plaincode: "00778"
	},
	{
		unicode: "🙇‍♂️",
		plaincode: "00779"
	},
	{
		unicode: "🙇🏻‍♂️",
		plaincode: "00780"
	},
	{
		unicode: "🙇🏼‍♂️",
		plaincode: "00781"
	},
	{
		unicode: "🙇🏽‍♂️",
		plaincode: "00782"
	},
	{
		unicode: "🙇🏾‍♂️",
		plaincode: "00783"
	},
	{
		unicode: "🙇🏿‍♂️",
		plaincode: "00784"
	},
	{
		unicode: "🙇‍♀️",
		plaincode: "00785"
	},
	{
		unicode: "🙇🏻‍♀️",
		plaincode: "00786"
	},
	{
		unicode: "🙇🏼‍♀️",
		plaincode: "00787"
	},
	{
		unicode: "🙇🏽‍♀️",
		plaincode: "00788"
	},
	{
		unicode: "🙇🏾‍♀️",
		plaincode: "00789"
	},
	{
		unicode: "🙇🏿‍♀️",
		plaincode: "00790"
	},
	{
		unicode: "🤦",
		plaincode: "00791"
	},
	{
		unicode: "🤦🏻",
		plaincode: "00792"
	},
	{
		unicode: "🤦🏼",
		plaincode: "00793"
	},
	{
		unicode: "🤦🏽",
		plaincode: "00794"
	},
	{
		unicode: "🤦🏾",
		plaincode: "00795"
	},
	{
		unicode: "🤦🏿",
		plaincode: "00796"
	},
	{
		unicode: "🤦‍♂️",
		plaincode: "00797"
	},
	{
		unicode: "🤦🏻‍♂️",
		plaincode: "00798"
	},
	{
		unicode: "🤦🏼‍♂️",
		plaincode: "00799"
	},
	{
		unicode: "🤦🏽‍♂️",
		plaincode: "00800"
	},
	{
		unicode: "🤦🏾‍♂️",
		plaincode: "00801"
	},
	{
		unicode: "🤦🏿‍♂️",
		plaincode: "00802"
	},
	{
		unicode: "🤦‍♀️",
		plaincode: "00803"
	},
	{
		unicode: "🤦🏻‍♀️",
		plaincode: "00804"
	},
	{
		unicode: "🤦🏼‍♀️",
		plaincode: "00805"
	},
	{
		unicode: "🤦🏽‍♀️",
		plaincode: "00806"
	},
	{
		unicode: "🤦🏾‍♀️",
		plaincode: "00807"
	},
	{
		unicode: "🤦🏿‍♀️",
		plaincode: "00808"
	},
	{
		unicode: "🤷",
		plaincode: "00809"
	},
	{
		unicode: "🤷🏻",
		plaincode: "00810"
	},
	{
		unicode: "🤷🏼",
		plaincode: "00811"
	},
	{
		unicode: "🤷🏽",
		plaincode: "00812"
	},
	{
		unicode: "🤷🏾",
		plaincode: "00813"
	},
	{
		unicode: "🤷🏿",
		plaincode: "00814"
	},
	{
		unicode: "🤷‍♂️",
		plaincode: "00815"
	},
	{
		unicode: "🤷🏻‍♂️",
		plaincode: "00816"
	},
	{
		unicode: "🤷🏼‍♂️",
		plaincode: "00817"
	},
	{
		unicode: "🤷🏽‍♂️",
		plaincode: "00818"
	},
	{
		unicode: "🤷🏾‍♂️",
		plaincode: "00819"
	},
	{
		unicode: "🤷🏿‍♂️",
		plaincode: "00820"
	},
	{
		unicode: "🤷‍♀️",
		plaincode: "00821"
	},
	{
		unicode: "🤷🏻‍♀️",
		plaincode: "00822"
	},
	{
		unicode: "🤷🏼‍♀️",
		plaincode: "00823"
	},
	{
		unicode: "🤷🏽‍♀️",
		plaincode: "00824"
	},
	{
		unicode: "🤷🏾‍♀️",
		plaincode: "00825"
	},
	{
		unicode: "🤷🏿‍♀️",
		plaincode: "00826"
	},
	{
		unicode: "🧑‍⚕️",
		plaincode: "00827"
	},
	{
		unicode: "🧑🏻‍⚕️",
		plaincode: "00828"
	},
	{
		unicode: "🧑🏼‍⚕️",
		plaincode: "00829"
	},
	{
		unicode: "🧑🏽‍⚕️",
		plaincode: "00830"
	},
	{
		unicode: "🧑🏾‍⚕️",
		plaincode: "00831"
	},
	{
		unicode: "🧑🏿‍⚕️",
		plaincode: "00832"
	},
	{
		unicode: "👨‍⚕️",
		plaincode: "00833"
	},
	{
		unicode: "👨🏻‍⚕️",
		plaincode: "00834"
	},
	{
		unicode: "👨🏼‍⚕️",
		plaincode: "00835"
	},
	{
		unicode: "👨🏽‍⚕️",
		plaincode: "00836"
	},
	{
		unicode: "👨🏾‍⚕️",
		plaincode: "00837"
	},
	{
		unicode: "👨🏿‍⚕️",
		plaincode: "00838"
	},
	{
		unicode: "👩‍⚕️",
		plaincode: "00839"
	},
	{
		unicode: "👩🏻‍⚕️",
		plaincode: "00840"
	},
	{
		unicode: "👩🏼‍⚕️",
		plaincode: "00841"
	},
	{
		unicode: "👩🏽‍⚕️",
		plaincode: "00842"
	},
	{
		unicode: "👩🏾‍⚕️",
		plaincode: "00843"
	},
	{
		unicode: "👩🏿‍⚕️",
		plaincode: "00844"
	},
	{
		unicode: "🧑‍🎓",
		plaincode: "00845"
	},
	{
		unicode: "🧑🏻‍🎓",
		plaincode: "00846"
	},
	{
		unicode: "🧑🏼‍🎓",
		plaincode: "00847"
	},
	{
		unicode: "🧑🏽‍🎓",
		plaincode: "00848"
	},
	{
		unicode: "🧑🏾‍🎓",
		plaincode: "00849"
	},
	{
		unicode: "🧑🏿‍🎓",
		plaincode: "00850"
	},
	{
		unicode: "👨‍🎓",
		plaincode: "00851"
	},
	{
		unicode: "👨🏻‍🎓",
		plaincode: "00852"
	},
	{
		unicode: "👨🏼‍🎓",
		plaincode: "00853"
	},
	{
		unicode: "👨🏽‍🎓",
		plaincode: "00854"
	},
	{
		unicode: "👨🏾‍🎓",
		plaincode: "00855"
	},
	{
		unicode: "👨🏿‍🎓",
		plaincode: "00856"
	},
	{
		unicode: "👩‍🎓",
		plaincode: "00857"
	},
	{
		unicode: "👩🏻‍🎓",
		plaincode: "00858"
	},
	{
		unicode: "👩🏼‍🎓",
		plaincode: "00859"
	},
	{
		unicode: "👩🏽‍🎓",
		plaincode: "00860"
	},
	{
		unicode: "👩🏾‍🎓",
		plaincode: "00861"
	},
	{
		unicode: "👩🏿‍🎓",
		plaincode: "00862"
	},
	{
		unicode: "🧑‍🏫",
		plaincode: "00863"
	},
	{
		unicode: "🧑🏻‍🏫",
		plaincode: "00864"
	},
	{
		unicode: "🧑🏼‍🏫",
		plaincode: "00865"
	},
	{
		unicode: "🧑🏽‍🏫",
		plaincode: "00866"
	},
	{
		unicode: "🧑🏾‍🏫",
		plaincode: "00867"
	},
	{
		unicode: "🧑🏿‍🏫",
		plaincode: "00868"
	},
	{
		unicode: "👨‍🏫",
		plaincode: "00869"
	},
	{
		unicode: "👨🏻‍🏫",
		plaincode: "00870"
	},
	{
		unicode: "👨🏼‍🏫",
		plaincode: "00871"
	},
	{
		unicode: "👨🏽‍🏫",
		plaincode: "00872"
	},
	{
		unicode: "👨🏾‍🏫",
		plaincode: "00873"
	},
	{
		unicode: "👨🏿‍🏫",
		plaincode: "00874"
	},
	{
		unicode: "👩‍🏫",
		plaincode: "00875"
	},
	{
		unicode: "👩🏻‍🏫",
		plaincode: "00876"
	},
	{
		unicode: "👩🏼‍🏫",
		plaincode: "00877"
	},
	{
		unicode: "👩🏽‍🏫",
		plaincode: "00878"
	},
	{
		unicode: "👩🏾‍🏫",
		plaincode: "00879"
	},
	{
		unicode: "👩🏿‍🏫",
		plaincode: "00880"
	},
	{
		unicode: "🧑‍⚖️",
		plaincode: "00881"
	},
	{
		unicode: "🧑🏻‍⚖️",
		plaincode: "00882"
	},
	{
		unicode: "🧑🏼‍⚖️",
		plaincode: "00883"
	},
	{
		unicode: "🧑🏽‍⚖️",
		plaincode: "00884"
	},
	{
		unicode: "🧑🏾‍⚖️",
		plaincode: "00885"
	},
	{
		unicode: "🧑🏿‍⚖️",
		plaincode: "00886"
	},
	{
		unicode: "👨‍⚖️",
		plaincode: "00887"
	},
	{
		unicode: "👨🏻‍⚖️",
		plaincode: "00888"
	},
	{
		unicode: "👨🏼‍⚖️",
		plaincode: "00889"
	},
	{
		unicode: "👨🏽‍⚖️",
		plaincode: "00890"
	},
	{
		unicode: "👨🏾‍⚖️",
		plaincode: "00891"
	},
	{
		unicode: "👨🏿‍⚖️",
		plaincode: "00892"
	},
	{
		unicode: "👩‍⚖️",
		plaincode: "00893"
	},
	{
		unicode: "👩🏻‍⚖️",
		plaincode: "00894"
	},
	{
		unicode: "👩🏼‍⚖️",
		plaincode: "00895"
	},
	{
		unicode: "👩🏽‍⚖️",
		plaincode: "00896"
	},
	{
		unicode: "👩🏾‍⚖️",
		plaincode: "00897"
	},
	{
		unicode: "👩🏿‍⚖️",
		plaincode: "00898"
	},
	{
		unicode: "🧑‍🌾",
		plaincode: "00899"
	},
	{
		unicode: "🧑🏻‍🌾",
		plaincode: "00900"
	},
	{
		unicode: "🧑🏼‍🌾",
		plaincode: "00901"
	},
	{
		unicode: "🧑🏽‍🌾",
		plaincode: "00902"
	},
	{
		unicode: "🧑🏾‍🌾",
		plaincode: "00903"
	},
	{
		unicode: "🧑🏿‍🌾",
		plaincode: "00904"
	},
	{
		unicode: "👨‍🌾",
		plaincode: "00905"
	},
	{
		unicode: "👨🏻‍🌾",
		plaincode: "00906"
	},
	{
		unicode: "👨🏼‍🌾",
		plaincode: "00907"
	},
	{
		unicode: "👨🏽‍🌾",
		plaincode: "00908"
	},
	{
		unicode: "👨🏾‍🌾",
		plaincode: "00909"
	},
	{
		unicode: "👨🏿‍🌾",
		plaincode: "00910"
	},
	{
		unicode: "👩‍🌾",
		plaincode: "00911"
	},
	{
		unicode: "👩🏻‍🌾",
		plaincode: "00912"
	},
	{
		unicode: "👩🏼‍🌾",
		plaincode: "00913"
	},
	{
		unicode: "👩🏽‍🌾",
		plaincode: "00914"
	},
	{
		unicode: "👩🏾‍🌾",
		plaincode: "00915"
	},
	{
		unicode: "👩🏿‍🌾",
		plaincode: "00916"
	},
	{
		unicode: "🧑‍🍳",
		plaincode: "00917"
	},
	{
		unicode: "🧑🏻‍🍳",
		plaincode: "00918"
	},
	{
		unicode: "🧑🏼‍🍳",
		plaincode: "00919"
	},
	{
		unicode: "🧑🏽‍🍳",
		plaincode: "00920"
	},
	{
		unicode: "🧑🏾‍🍳",
		plaincode: "00921"
	},
	{
		unicode: "🧑🏿‍🍳",
		plaincode: "00922"
	},
	{
		unicode: "👨‍🍳",
		plaincode: "00923"
	},
	{
		unicode: "👨🏻‍🍳",
		plaincode: "00924"
	},
	{
		unicode: "👨🏼‍🍳",
		plaincode: "00925"
	},
	{
		unicode: "👨🏽‍🍳",
		plaincode: "00926"
	},
	{
		unicode: "👨🏾‍🍳",
		plaincode: "00927"
	},
	{
		unicode: "👨🏿‍🍳",
		plaincode: "00928"
	},
	{
		unicode: "👩‍🍳",
		plaincode: "00929"
	},
	{
		unicode: "👩🏻‍🍳",
		plaincode: "00930"
	},
	{
		unicode: "👩🏼‍🍳",
		plaincode: "00931"
	},
	{
		unicode: "👩🏽‍🍳",
		plaincode: "00932"
	},
	{
		unicode: "👩🏾‍🍳",
		plaincode: "00933"
	},
	{
		unicode: "👩🏿‍🍳",
		plaincode: "00934"
	},
	{
		unicode: "🧑‍🔧",
		plaincode: "00935"
	},
	{
		unicode: "🧑🏻‍🔧",
		plaincode: "00936"
	},
	{
		unicode: "🧑🏼‍🔧",
		plaincode: "00937"
	},
	{
		unicode: "🧑🏽‍🔧",
		plaincode: "00938"
	},
	{
		unicode: "🧑🏾‍🔧",
		plaincode: "00939"
	},
	{
		unicode: "🧑🏿‍🔧",
		plaincode: "00940"
	},
	{
		unicode: "👨‍🔧",
		plaincode: "00941"
	},
	{
		unicode: "👨🏻‍🔧",
		plaincode: "00942"
	},
	{
		unicode: "👨🏼‍🔧",
		plaincode: "00943"
	},
	{
		unicode: "👨🏽‍🔧",
		plaincode: "00944"
	},
	{
		unicode: "👨🏾‍🔧",
		plaincode: "00945"
	},
	{
		unicode: "👨🏿‍🔧",
		plaincode: "00946"
	},
	{
		unicode: "👩‍🔧",
		plaincode: "00947"
	},
	{
		unicode: "👩🏻‍🔧",
		plaincode: "00948"
	},
	{
		unicode: "👩🏼‍🔧",
		plaincode: "00949"
	},
	{
		unicode: "👩🏽‍🔧",
		plaincode: "00950"
	},
	{
		unicode: "👩🏾‍🔧",
		plaincode: "00951"
	},
	{
		unicode: "👩🏿‍🔧",
		plaincode: "00952"
	},
	{
		unicode: "🧑‍🏭",
		plaincode: "00953"
	},
	{
		unicode: "🧑🏻‍🏭",
		plaincode: "00954"
	},
	{
		unicode: "🧑🏼‍🏭",
		plaincode: "00955"
	},
	{
		unicode: "🧑🏽‍🏭",
		plaincode: "00956"
	},
	{
		unicode: "🧑🏾‍🏭",
		plaincode: "00957"
	},
	{
		unicode: "🧑🏿‍🏭",
		plaincode: "00958"
	},
	{
		unicode: "👨‍🏭",
		plaincode: "00959"
	},
	{
		unicode: "👨🏻‍🏭",
		plaincode: "00960"
	},
	{
		unicode: "👨🏼‍🏭",
		plaincode: "00961"
	},
	{
		unicode: "👨🏽‍🏭",
		plaincode: "00962"
	},
	{
		unicode: "👨🏾‍🏭",
		plaincode: "00963"
	},
	{
		unicode: "👨🏿‍🏭",
		plaincode: "00964"
	},
	{
		unicode: "👩‍🏭",
		plaincode: "00965"
	},
	{
		unicode: "👩🏻‍🏭",
		plaincode: "00966"
	},
	{
		unicode: "👩🏼‍🏭",
		plaincode: "00967"
	},
	{
		unicode: "👩🏽‍🏭",
		plaincode: "00968"
	},
	{
		unicode: "👩🏾‍🏭",
		plaincode: "00969"
	},
	{
		unicode: "👩🏿‍🏭",
		plaincode: "00970"
	},
	{
		unicode: "🧑‍💼",
		plaincode: "00971"
	},
	{
		unicode: "🧑🏻‍💼",
		plaincode: "00972"
	},
	{
		unicode: "🧑🏼‍💼",
		plaincode: "00973"
	},
	{
		unicode: "🧑🏽‍💼",
		plaincode: "00974"
	},
	{
		unicode: "🧑🏾‍💼",
		plaincode: "00975"
	},
	{
		unicode: "🧑🏿‍💼",
		plaincode: "00976"
	},
	{
		unicode: "👨‍💼",
		plaincode: "00977"
	},
	{
		unicode: "👨🏻‍💼",
		plaincode: "00978"
	},
	{
		unicode: "👨🏼‍💼",
		plaincode: "00979"
	},
	{
		unicode: "👨🏽‍💼",
		plaincode: "00980"
	},
	{
		unicode: "👨🏾‍💼",
		plaincode: "00981"
	},
	{
		unicode: "👨🏿‍💼",
		plaincode: "00982"
	},
	{
		unicode: "👩‍💼",
		plaincode: "00983"
	},
	{
		unicode: "👩🏻‍💼",
		plaincode: "00984"
	},
	{
		unicode: "👩🏼‍💼",
		plaincode: "00985"
	},
	{
		unicode: "👩🏽‍💼",
		plaincode: "00986"
	},
	{
		unicode: "👩🏾‍💼",
		plaincode: "00987"
	},
	{
		unicode: "👩🏿‍💼",
		plaincode: "00988"
	},
	{
		unicode: "🧑‍🔬",
		plaincode: "00989"
	},
	{
		unicode: "🧑🏻‍🔬",
		plaincode: "00990"
	},
	{
		unicode: "🧑🏼‍🔬",
		plaincode: "00991"
	},
	{
		unicode: "🧑🏽‍🔬",
		plaincode: "00992"
	},
	{
		unicode: "🧑🏾‍🔬",
		plaincode: "00993"
	},
	{
		unicode: "🧑🏿‍🔬",
		plaincode: "00994"
	},
	{
		unicode: "👨‍🔬",
		plaincode: "00995"
	},
	{
		unicode: "👨🏻‍🔬",
		plaincode: "00996"
	},
	{
		unicode: "👨🏼‍🔬",
		plaincode: "00997"
	},
	{
		unicode: "👨🏽‍🔬",
		plaincode: "00998"
	},
	{
		unicode: "👨🏾‍🔬",
		plaincode: "00999"
	},
	{
		unicode: "👨🏿‍🔬",
		plaincode: "01000"
	},
	{
		unicode: "👩‍🔬",
		plaincode: "01001"
	},
	{
		unicode: "👩🏻‍🔬",
		plaincode: "01002"
	},
	{
		unicode: "👩🏼‍🔬",
		plaincode: "01003"
	},
	{
		unicode: "👩🏽‍🔬",
		plaincode: "01004"
	},
	{
		unicode: "👩🏾‍🔬",
		plaincode: "01005"
	},
	{
		unicode: "👩🏿‍🔬",
		plaincode: "01006"
	},
	{
		unicode: "🧑‍💻",
		plaincode: "01007"
	},
	{
		unicode: "🧑🏻‍💻",
		plaincode: "01008"
	},
	{
		unicode: "🧑🏼‍💻",
		plaincode: "01009"
	},
	{
		unicode: "🧑🏽‍💻",
		plaincode: "01010"
	},
	{
		unicode: "🧑🏾‍💻",
		plaincode: "01011"
	},
	{
		unicode: "🧑🏿‍💻",
		plaincode: "01012"
	},
	{
		unicode: "👨‍💻",
		plaincode: "01013"
	},
	{
		unicode: "👨🏻‍💻",
		plaincode: "01014"
	},
	{
		unicode: "👨🏼‍💻",
		plaincode: "01015"
	},
	{
		unicode: "👨🏽‍💻",
		plaincode: "01016"
	},
	{
		unicode: "👨🏾‍💻",
		plaincode: "01017"
	},
	{
		unicode: "👨🏿‍💻",
		plaincode: "01018"
	},
	{
		unicode: "👩‍💻",
		plaincode: "01019"
	},
	{
		unicode: "👩🏻‍💻",
		plaincode: "01020"
	},
	{
		unicode: "👩🏼‍💻",
		plaincode: "01021"
	},
	{
		unicode: "👩🏽‍💻",
		plaincode: "01022"
	},
	{
		unicode: "👩🏾‍💻",
		plaincode: "01023"
	},
	{
		unicode: "👩🏿‍💻",
		plaincode: "01024"
	},
	{
		unicode: "🧑‍🎤",
		plaincode: "01025"
	},
	{
		unicode: "🧑🏻‍🎤",
		plaincode: "01026"
	},
	{
		unicode: "🧑🏼‍🎤",
		plaincode: "01027"
	},
	{
		unicode: "🧑🏽‍🎤",
		plaincode: "01028"
	},
	{
		unicode: "🧑🏾‍🎤",
		plaincode: "01029"
	},
	{
		unicode: "🧑🏿‍🎤",
		plaincode: "01030"
	},
	{
		unicode: "👨‍🎤",
		plaincode: "01031"
	},
	{
		unicode: "👨🏻‍🎤",
		plaincode: "01032"
	},
	{
		unicode: "👨🏼‍🎤",
		plaincode: "01033"
	},
	{
		unicode: "👨🏽‍🎤",
		plaincode: "01034"
	},
	{
		unicode: "👨🏾‍🎤",
		plaincode: "01035"
	},
	{
		unicode: "👨🏿‍🎤",
		plaincode: "01036"
	},
	{
		unicode: "👩‍🎤",
		plaincode: "01037"
	},
	{
		unicode: "👩🏻‍🎤",
		plaincode: "01038"
	},
	{
		unicode: "👩🏼‍🎤",
		plaincode: "01039"
	},
	{
		unicode: "👩🏽‍🎤",
		plaincode: "01040"
	},
	{
		unicode: "👩🏾‍🎤",
		plaincode: "01041"
	},
	{
		unicode: "👩🏿‍🎤",
		plaincode: "01042"
	},
	{
		unicode: "🧑‍🎨",
		plaincode: "01043"
	},
	{
		unicode: "🧑🏻‍🎨",
		plaincode: "01044"
	},
	{
		unicode: "🧑🏼‍🎨",
		plaincode: "01045"
	},
	{
		unicode: "🧑🏽‍🎨",
		plaincode: "01046"
	},
	{
		unicode: "🧑🏾‍🎨",
		plaincode: "01047"
	},
	{
		unicode: "🧑🏿‍🎨",
		plaincode: "01048"
	},
	{
		unicode: "👨‍🎨",
		plaincode: "01049"
	},
	{
		unicode: "👨🏻‍🎨",
		plaincode: "01050"
	},
	{
		unicode: "👨🏼‍🎨",
		plaincode: "01051"
	},
	{
		unicode: "👨🏽‍🎨",
		plaincode: "01052"
	},
	{
		unicode: "👨🏾‍🎨",
		plaincode: "01053"
	},
	{
		unicode: "👨🏿‍🎨",
		plaincode: "01054"
	},
	{
		unicode: "👩‍🎨",
		plaincode: "01055"
	},
	{
		unicode: "👩🏻‍🎨",
		plaincode: "01056"
	},
	{
		unicode: "👩🏼‍🎨",
		plaincode: "01057"
	},
	{
		unicode: "👩🏽‍🎨",
		plaincode: "01058"
	},
	{
		unicode: "👩🏾‍🎨",
		plaincode: "01059"
	},
	{
		unicode: "👩🏿‍🎨",
		plaincode: "01060"
	},
	{
		unicode: "🧑‍✈️",
		plaincode: "01061"
	},
	{
		unicode: "🧑🏻‍✈️",
		plaincode: "01062"
	},
	{
		unicode: "🧑🏼‍✈️",
		plaincode: "01063"
	},
	{
		unicode: "🧑🏽‍✈️",
		plaincode: "01064"
	},
	{
		unicode: "🧑🏾‍✈️",
		plaincode: "01065"
	},
	{
		unicode: "🧑🏿‍✈️",
		plaincode: "01066"
	},
	{
		unicode: "👨‍✈️",
		plaincode: "01067"
	},
	{
		unicode: "👨🏻‍✈️",
		plaincode: "01068"
	},
	{
		unicode: "👨🏼‍✈️",
		plaincode: "01069"
	},
	{
		unicode: "👨🏽‍✈️",
		plaincode: "01070"
	},
	{
		unicode: "👨🏾‍✈️",
		plaincode: "01071"
	},
	{
		unicode: "👨🏿‍✈️",
		plaincode: "01072"
	},
	{
		unicode: "👩‍✈️",
		plaincode: "01073"
	},
	{
		unicode: "👩🏻‍✈️",
		plaincode: "01074"
	},
	{
		unicode: "👩🏼‍✈️",
		plaincode: "01075"
	},
	{
		unicode: "👩🏽‍✈️",
		plaincode: "01076"
	},
	{
		unicode: "👩🏾‍✈️",
		plaincode: "01077"
	},
	{
		unicode: "👩🏿‍✈️",
		plaincode: "01078"
	},
	{
		unicode: "🧑‍🚀",
		plaincode: "01079"
	},
	{
		unicode: "🧑🏻‍🚀",
		plaincode: "01080"
	},
	{
		unicode: "🧑🏼‍🚀",
		plaincode: "01081"
	},
	{
		unicode: "🧑🏽‍🚀",
		plaincode: "01082"
	},
	{
		unicode: "🧑🏾‍🚀",
		plaincode: "01083"
	},
	{
		unicode: "🧑🏿‍🚀",
		plaincode: "01084"
	},
	{
		unicode: "👨‍🚀",
		plaincode: "01085"
	},
	{
		unicode: "👨🏻‍🚀",
		plaincode: "01086"
	},
	{
		unicode: "👨🏼‍🚀",
		plaincode: "01087"
	},
	{
		unicode: "👨🏽‍🚀",
		plaincode: "01088"
	},
	{
		unicode: "👨🏾‍🚀",
		plaincode: "01089"
	},
	{
		unicode: "👨🏿‍🚀",
		plaincode: "01090"
	},
	{
		unicode: "👩‍🚀",
		plaincode: "01091"
	},
	{
		unicode: "👩🏻‍🚀",
		plaincode: "01092"
	},
	{
		unicode: "👩🏼‍🚀",
		plaincode: "01093"
	},
	{
		unicode: "👩🏽‍🚀",
		plaincode: "01094"
	},
	{
		unicode: "👩🏾‍🚀",
		plaincode: "01095"
	},
	{
		unicode: "👩🏿‍🚀",
		plaincode: "01096"
	},
	{
		unicode: "🧑‍🚒",
		plaincode: "01097"
	},
	{
		unicode: "🧑🏻‍🚒",
		plaincode: "01098"
	},
	{
		unicode: "🧑🏼‍🚒",
		plaincode: "01099"
	},
	{
		unicode: "🧑🏽‍🚒",
		plaincode: "01100"
	},
	{
		unicode: "🧑🏾‍🚒",
		plaincode: "01101"
	},
	{
		unicode: "🧑🏿‍🚒",
		plaincode: "01102"
	},
	{
		unicode: "👨‍🚒",
		plaincode: "01103"
	},
	{
		unicode: "👨🏻‍🚒",
		plaincode: "01104"
	},
	{
		unicode: "👨🏼‍🚒",
		plaincode: "01105"
	},
	{
		unicode: "👨🏽‍🚒",
		plaincode: "01106"
	},
	{
		unicode: "👨🏾‍🚒",
		plaincode: "01107"
	},
	{
		unicode: "👨🏿‍🚒",
		plaincode: "01108"
	},
	{
		unicode: "👩‍🚒",
		plaincode: "01109"
	},
	{
		unicode: "👩🏻‍🚒",
		plaincode: "01110"
	},
	{
		unicode: "👩🏼‍🚒",
		plaincode: "01111"
	},
	{
		unicode: "👩🏽‍🚒",
		plaincode: "01112"
	},
	{
		unicode: "👩🏾‍🚒",
		plaincode: "01113"
	},
	{
		unicode: "👩🏿‍🚒",
		plaincode: "01114"
	},
	{
		unicode: "👮",
		plaincode: "01115"
	},
	{
		unicode: "👮🏻",
		plaincode: "01116"
	},
	{
		unicode: "👮🏼",
		plaincode: "01117"
	},
	{
		unicode: "👮🏽",
		plaincode: "01118"
	},
	{
		unicode: "👮🏾",
		plaincode: "01119"
	},
	{
		unicode: "👮🏿",
		plaincode: "01120"
	},
	{
		unicode: "👮‍♂️",
		plaincode: "01121"
	},
	{
		unicode: "👮🏻‍♂️",
		plaincode: "01122"
	},
	{
		unicode: "👮🏼‍♂️",
		plaincode: "01123"
	},
	{
		unicode: "👮🏽‍♂️",
		plaincode: "01124"
	},
	{
		unicode: "👮🏾‍♂️",
		plaincode: "01125"
	},
	{
		unicode: "👮🏿‍♂️",
		plaincode: "01126"
	},
	{
		unicode: "👮‍♀️",
		plaincode: "01127"
	},
	{
		unicode: "👮🏻‍♀️",
		plaincode: "01128"
	},
	{
		unicode: "👮🏼‍♀️",
		plaincode: "01129"
	},
	{
		unicode: "👮🏽‍♀️",
		plaincode: "01130"
	},
	{
		unicode: "👮🏾‍♀️",
		plaincode: "01131"
	},
	{
		unicode: "👮🏿‍♀️",
		plaincode: "01132"
	},
	{
		unicode: "🕵🏻",
		plaincode: "01133"
	},
	{
		unicode: "🕵🏼",
		plaincode: "01134"
	},
	{
		unicode: "🕵🏽",
		plaincode: "01135"
	},
	{
		unicode: "🕵🏾",
		plaincode: "01136"
	},
	{
		unicode: "🕵🏿",
		plaincode: "01137"
	},
	{
		unicode: "🕵️‍♂️",
		plaincode: "01138"
	},
	{
		unicode: "🕵🏻‍♂️",
		plaincode: "01139"
	},
	{
		unicode: "🕵🏼‍♂️",
		plaincode: "01140"
	},
	{
		unicode: "🕵🏽‍♂️",
		plaincode: "01141"
	},
	{
		unicode: "🕵🏾‍♂️",
		plaincode: "01142"
	},
	{
		unicode: "🕵🏿‍♂️",
		plaincode: "01143"
	},
	{
		unicode: "🕵️‍♀️",
		plaincode: "01144"
	},
	{
		unicode: "🕵🏻‍♀️",
		plaincode: "01145"
	},
	{
		unicode: "🕵🏼‍♀️",
		plaincode: "01146"
	},
	{
		unicode: "🕵🏽‍♀️",
		plaincode: "01147"
	},
	{
		unicode: "🕵🏾‍♀️",
		plaincode: "01148"
	},
	{
		unicode: "🕵🏿‍♀️",
		plaincode: "01149"
	},
	{
		unicode: "💂",
		plaincode: "01150"
	},
	{
		unicode: "💂🏻",
		plaincode: "01151"
	},
	{
		unicode: "💂🏼",
		plaincode: "01152"
	},
	{
		unicode: "💂🏽",
		plaincode: "01153"
	},
	{
		unicode: "💂🏾",
		plaincode: "01154"
	},
	{
		unicode: "💂🏿",
		plaincode: "01155"
	},
	{
		unicode: "💂‍♂️",
		plaincode: "01156"
	},
	{
		unicode: "💂🏻‍♂️",
		plaincode: "01157"
	},
	{
		unicode: "💂🏼‍♂️",
		plaincode: "01158"
	},
	{
		unicode: "💂🏽‍♂️",
		plaincode: "01159"
	},
	{
		unicode: "💂🏾‍♂️",
		plaincode: "01160"
	},
	{
		unicode: "💂🏿‍♂️",
		plaincode: "01161"
	},
	{
		unicode: "💂‍♀️",
		plaincode: "01162"
	},
	{
		unicode: "💂🏻‍♀️",
		plaincode: "01163"
	},
	{
		unicode: "💂🏼‍♀️",
		plaincode: "01164"
	},
	{
		unicode: "💂🏽‍♀️",
		plaincode: "01165"
	},
	{
		unicode: "💂🏾‍♀️",
		plaincode: "01166"
	},
	{
		unicode: "💂🏿‍♀️",
		plaincode: "01167"
	},
	{
		unicode: "🥷",
		plaincode: "01168"
	},
	{
		unicode: "🥷🏻",
		plaincode: "01169"
	},
	{
		unicode: "🥷🏼",
		plaincode: "01170"
	},
	{
		unicode: "🥷🏽",
		plaincode: "01171"
	},
	{
		unicode: "🥷🏾",
		plaincode: "01172"
	},
	{
		unicode: "🥷🏿",
		plaincode: "01173"
	},
	{
		unicode: "👷",
		plaincode: "01174"
	},
	{
		unicode: "👷🏻",
		plaincode: "01175"
	},
	{
		unicode: "👷🏼",
		plaincode: "01176"
	},
	{
		unicode: "👷🏽",
		plaincode: "01177"
	},
	{
		unicode: "👷🏾",
		plaincode: "01178"
	},
	{
		unicode: "👷🏿",
		plaincode: "01179"
	},
	{
		unicode: "👷‍♂️",
		plaincode: "01180"
	},
	{
		unicode: "👷🏻‍♂️",
		plaincode: "01181"
	},
	{
		unicode: "👷🏼‍♂️",
		plaincode: "01182"
	},
	{
		unicode: "👷🏽‍♂️",
		plaincode: "01183"
	},
	{
		unicode: "👷🏾‍♂️",
		plaincode: "01184"
	},
	{
		unicode: "👷🏿‍♂️",
		plaincode: "01185"
	},
	{
		unicode: "👷‍♀️",
		plaincode: "01186"
	},
	{
		unicode: "👷🏻‍♀️",
		plaincode: "01187"
	},
	{
		unicode: "👷🏼‍♀️",
		plaincode: "01188"
	},
	{
		unicode: "👷🏽‍♀️",
		plaincode: "01189"
	},
	{
		unicode: "👷🏾‍♀️",
		plaincode: "01190"
	},
	{
		unicode: "👷🏿‍♀️",
		plaincode: "01191"
	},
	{
		unicode: "🫅",
		plaincode: "01192"
	},
	{
		unicode: "🫅🏻",
		plaincode: "01193"
	},
	{
		unicode: "🫅🏼",
		plaincode: "01194"
	},
	{
		unicode: "🫅🏽",
		plaincode: "01195"
	},
	{
		unicode: "🫅🏾",
		plaincode: "01196"
	},
	{
		unicode: "🫅🏿",
		plaincode: "01197"
	},
	{
		unicode: "🤴",
		plaincode: "01198"
	},
	{
		unicode: "🤴🏻",
		plaincode: "01199"
	},
	{
		unicode: "🤴🏼",
		plaincode: "01200"
	},
	{
		unicode: "🤴🏽",
		plaincode: "01201"
	},
	{
		unicode: "🤴🏾",
		plaincode: "01202"
	},
	{
		unicode: "🤴🏿",
		plaincode: "01203"
	},
	{
		unicode: "👸",
		plaincode: "01204"
	},
	{
		unicode: "👸🏻",
		plaincode: "01205"
	},
	{
		unicode: "👸🏼",
		plaincode: "01206"
	},
	{
		unicode: "👸🏽",
		plaincode: "01207"
	},
	{
		unicode: "👸🏾",
		plaincode: "01208"
	},
	{
		unicode: "👸🏿",
		plaincode: "01209"
	},
	{
		unicode: "👳",
		plaincode: "01210"
	},
	{
		unicode: "👳🏻",
		plaincode: "01211"
	},
	{
		unicode: "👳🏼",
		plaincode: "01212"
	},
	{
		unicode: "👳🏽",
		plaincode: "01213"
	},
	{
		unicode: "👳🏾",
		plaincode: "01214"
	},
	{
		unicode: "👳🏿",
		plaincode: "01215"
	},
	{
		unicode: "👳‍♂️",
		plaincode: "01216"
	},
	{
		unicode: "👳🏻‍♂️",
		plaincode: "01217"
	},
	{
		unicode: "👳🏼‍♂️",
		plaincode: "01218"
	},
	{
		unicode: "👳🏽‍♂️",
		plaincode: "01219"
	},
	{
		unicode: "👳🏾‍♂️",
		plaincode: "01220"
	},
	{
		unicode: "👳🏿‍♂️",
		plaincode: "01221"
	},
	{
		unicode: "👳‍♀️",
		plaincode: "01222"
	},
	{
		unicode: "👳🏻‍♀️",
		plaincode: "01223"
	},
	{
		unicode: "👳🏼‍♀️",
		plaincode: "01224"
	},
	{
		unicode: "👳🏽‍♀️",
		plaincode: "01225"
	},
	{
		unicode: "👳🏾‍♀️",
		plaincode: "01226"
	},
	{
		unicode: "👳🏿‍♀️",
		plaincode: "01227"
	},
	{
		unicode: "👲",
		plaincode: "01228"
	},
	{
		unicode: "👲🏻",
		plaincode: "01229"
	},
	{
		unicode: "👲🏼",
		plaincode: "01230"
	},
	{
		unicode: "👲🏽",
		plaincode: "01231"
	},
	{
		unicode: "👲🏾",
		plaincode: "01232"
	},
	{
		unicode: "👲🏿",
		plaincode: "01233"
	},
	{
		unicode: "🧕",
		plaincode: "01234"
	},
	{
		unicode: "🧕🏻",
		plaincode: "01235"
	},
	{
		unicode: "🧕🏼",
		plaincode: "01236"
	},
	{
		unicode: "🧕🏽",
		plaincode: "01237"
	},
	{
		unicode: "🧕🏾",
		plaincode: "01238"
	},
	{
		unicode: "🧕🏿",
		plaincode: "01239"
	},
	{
		unicode: "🤵",
		plaincode: "01240"
	},
	{
		unicode: "🤵🏻",
		plaincode: "01241"
	},
	{
		unicode: "🤵🏼",
		plaincode: "01242"
	},
	{
		unicode: "🤵🏽",
		plaincode: "01243"
	},
	{
		unicode: "🤵🏾",
		plaincode: "01244"
	},
	{
		unicode: "🤵🏿",
		plaincode: "01245"
	},
	{
		unicode: "🤵‍♂️",
		plaincode: "01246"
	},
	{
		unicode: "🤵🏻‍♂️",
		plaincode: "01247"
	},
	{
		unicode: "🤵🏼‍♂️",
		plaincode: "01248"
	},
	{
		unicode: "🤵🏽‍♂️",
		plaincode: "01249"
	},
	{
		unicode: "🤵🏾‍♂️",
		plaincode: "01250"
	},
	{
		unicode: "🤵🏿‍♂️",
		plaincode: "01251"
	},
	{
		unicode: "🤵‍♀️",
		plaincode: "01252"
	},
	{
		unicode: "🤵🏻‍♀️",
		plaincode: "01253"
	},
	{
		unicode: "🤵🏼‍♀️",
		plaincode: "01254"
	},
	{
		unicode: "🤵🏽‍♀️",
		plaincode: "01255"
	},
	{
		unicode: "🤵🏾‍♀️",
		plaincode: "01256"
	},
	{
		unicode: "🤵🏿‍♀️",
		plaincode: "01257"
	},
	{
		unicode: "👰",
		plaincode: "01258"
	},
	{
		unicode: "👰🏻",
		plaincode: "01259"
	},
	{
		unicode: "👰🏼",
		plaincode: "01260"
	},
	{
		unicode: "👰🏽",
		plaincode: "01261"
	},
	{
		unicode: "👰🏾",
		plaincode: "01262"
	},
	{
		unicode: "👰🏿",
		plaincode: "01263"
	},
	{
		unicode: "👰‍♂️",
		plaincode: "01264"
	},
	{
		unicode: "👰🏻‍♂️",
		plaincode: "01265"
	},
	{
		unicode: "👰🏼‍♂️",
		plaincode: "01266"
	},
	{
		unicode: "👰🏽‍♂️",
		plaincode: "01267"
	},
	{
		unicode: "👰🏾‍♂️",
		plaincode: "01268"
	},
	{
		unicode: "👰🏿‍♂️",
		plaincode: "01269"
	},
	{
		unicode: "👰‍♀️",
		plaincode: "01270"
	},
	{
		unicode: "👰🏻‍♀️",
		plaincode: "01271"
	},
	{
		unicode: "👰🏼‍♀️",
		plaincode: "01272"
	},
	{
		unicode: "👰🏽‍♀️",
		plaincode: "01273"
	},
	{
		unicode: "👰🏾‍♀️",
		plaincode: "01274"
	},
	{
		unicode: "👰🏿‍♀️",
		plaincode: "01275"
	},
	{
		unicode: "🤰",
		plaincode: "01276"
	},
	{
		unicode: "🤰🏻",
		plaincode: "01277"
	},
	{
		unicode: "🤰🏼",
		plaincode: "01278"
	},
	{
		unicode: "🤰🏽",
		plaincode: "01279"
	},
	{
		unicode: "🤰🏾",
		plaincode: "01280"
	},
	{
		unicode: "🤰🏿",
		plaincode: "01281"
	},
	{
		unicode: "🫃",
		plaincode: "01282"
	},
	{
		unicode: "🫃🏻",
		plaincode: "01283"
	},
	{
		unicode: "🫃🏼",
		plaincode: "01284"
	},
	{
		unicode: "🫃🏽",
		plaincode: "01285"
	},
	{
		unicode: "🫃🏾",
		plaincode: "01286"
	},
	{
		unicode: "🫃🏿",
		plaincode: "01287"
	},
	{
		unicode: "🫄",
		plaincode: "01288"
	},
	{
		unicode: "🫄🏻",
		plaincode: "01289"
	},
	{
		unicode: "🫄🏼",
		plaincode: "01290"
	},
	{
		unicode: "🫄🏽",
		plaincode: "01291"
	},
	{
		unicode: "🫄🏾",
		plaincode: "01292"
	},
	{
		unicode: "🫄🏿",
		plaincode: "01293"
	},
	{
		unicode: "🤱",
		plaincode: "01294"
	},
	{
		unicode: "🤱🏻",
		plaincode: "01295"
	},
	{
		unicode: "🤱🏼",
		plaincode: "01296"
	},
	{
		unicode: "🤱🏽",
		plaincode: "01297"
	},
	{
		unicode: "🤱🏾",
		plaincode: "01298"
	},
	{
		unicode: "🤱🏿",
		plaincode: "01299"
	},
	{
		unicode: "👩‍🍼",
		plaincode: "01300"
	},
	{
		unicode: "👩🏻‍🍼",
		plaincode: "01301"
	},
	{
		unicode: "👩🏼‍🍼",
		plaincode: "01302"
	},
	{
		unicode: "👩🏽‍🍼",
		plaincode: "01303"
	},
	{
		unicode: "👩🏾‍🍼",
		plaincode: "01304"
	},
	{
		unicode: "👩🏿‍🍼",
		plaincode: "01305"
	},
	{
		unicode: "👨‍🍼",
		plaincode: "01306"
	},
	{
		unicode: "👨🏻‍🍼",
		plaincode: "01307"
	},
	{
		unicode: "👨🏼‍🍼",
		plaincode: "01308"
	},
	{
		unicode: "👨🏽‍🍼",
		plaincode: "01309"
	},
	{
		unicode: "👨🏾‍🍼",
		plaincode: "01310"
	},
	{
		unicode: "👨🏿‍🍼",
		plaincode: "01311"
	},
	{
		unicode: "🧑‍🍼",
		plaincode: "01312"
	},
	{
		unicode: "🧑🏻‍🍼",
		plaincode: "01313"
	},
	{
		unicode: "🧑🏼‍🍼",
		plaincode: "01314"
	},
	{
		unicode: "🧑🏽‍🍼",
		plaincode: "01315"
	},
	{
		unicode: "🧑🏾‍🍼",
		plaincode: "01316"
	},
	{
		unicode: "🧑🏿‍🍼",
		plaincode: "01317"
	},
	{
		unicode: "👼",
		plaincode: "01318"
	},
	{
		unicode: "👼🏻",
		plaincode: "01319"
	},
	{
		unicode: "👼🏼",
		plaincode: "01320"
	},
	{
		unicode: "👼🏽",
		plaincode: "01321"
	},
	{
		unicode: "👼🏾",
		plaincode: "01322"
	},
	{
		unicode: "👼🏿",
		plaincode: "01323"
	},
	{
		unicode: "🎅",
		plaincode: "01324"
	},
	{
		unicode: "🎅🏻",
		plaincode: "01325"
	},
	{
		unicode: "🎅🏼",
		plaincode: "01326"
	},
	{
		unicode: "🎅🏽",
		plaincode: "01327"
	},
	{
		unicode: "🎅🏾",
		plaincode: "01328"
	},
	{
		unicode: "🎅🏿",
		plaincode: "01329"
	},
	{
		unicode: "🤶",
		plaincode: "01330"
	},
	{
		unicode: "🤶🏻",
		plaincode: "01331"
	},
	{
		unicode: "🤶🏼",
		plaincode: "01332"
	},
	{
		unicode: "🤶🏽",
		plaincode: "01333"
	},
	{
		unicode: "🤶🏾",
		plaincode: "01334"
	},
	{
		unicode: "🤶🏿",
		plaincode: "01335"
	},
	{
		unicode: "🧑‍🎄",
		plaincode: "01336"
	},
	{
		unicode: "🧑🏻‍🎄",
		plaincode: "01337"
	},
	{
		unicode: "🧑🏼‍🎄",
		plaincode: "01338"
	},
	{
		unicode: "🧑🏽‍🎄",
		plaincode: "01339"
	},
	{
		unicode: "🧑🏾‍🎄",
		plaincode: "01340"
	},
	{
		unicode: "🧑🏿‍🎄",
		plaincode: "01341"
	},
	{
		unicode: "🦸",
		plaincode: "01342"
	},
	{
		unicode: "🦸🏻",
		plaincode: "01343"
	},
	{
		unicode: "🦸🏼",
		plaincode: "01344"
	},
	{
		unicode: "🦸🏽",
		plaincode: "01345"
	},
	{
		unicode: "🦸🏾",
		plaincode: "01346"
	},
	{
		unicode: "🦸🏿",
		plaincode: "01347"
	},
	{
		unicode: "🦸‍♂️",
		plaincode: "01348"
	},
	{
		unicode: "🦸🏻‍♂️",
		plaincode: "01349"
	},
	{
		unicode: "🦸🏼‍♂️",
		plaincode: "01350"
	},
	{
		unicode: "🦸🏽‍♂️",
		plaincode: "01351"
	},
	{
		unicode: "🦸🏾‍♂️",
		plaincode: "01352"
	},
	{
		unicode: "🦸🏿‍♂️",
		plaincode: "01353"
	},
	{
		unicode: "🦸‍♀️",
		plaincode: "01354"
	},
	{
		unicode: "🦸🏻‍♀️",
		plaincode: "01355"
	},
	{
		unicode: "🦸🏼‍♀️",
		plaincode: "01356"
	},
	{
		unicode: "🦸🏽‍♀️",
		plaincode: "01357"
	},
	{
		unicode: "🦸🏾‍♀️",
		plaincode: "01358"
	},
	{
		unicode: "🦸🏿‍♀️",
		plaincode: "01359"
	},
	{
		unicode: "🦹",
		plaincode: "01360"
	},
	{
		unicode: "🦹🏻",
		plaincode: "01361"
	},
	{
		unicode: "🦹🏼",
		plaincode: "01362"
	},
	{
		unicode: "🦹🏽",
		plaincode: "01363"
	},
	{
		unicode: "🦹🏾",
		plaincode: "01364"
	},
	{
		unicode: "🦹🏿",
		plaincode: "01365"
	},
	{
		unicode: "🦹‍♂️",
		plaincode: "01366"
	},
	{
		unicode: "🦹🏻‍♂️",
		plaincode: "01367"
	},
	{
		unicode: "🦹🏼‍♂️",
		plaincode: "01368"
	},
	{
		unicode: "🦹🏽‍♂️",
		plaincode: "01369"
	},
	{
		unicode: "🦹🏾‍♂️",
		plaincode: "01370"
	},
	{
		unicode: "🦹🏿‍♂️",
		plaincode: "01371"
	},
	{
		unicode: "🦹‍♀️",
		plaincode: "01372"
	},
	{
		unicode: "🦹🏻‍♀️",
		plaincode: "01373"
	},
	{
		unicode: "🦹🏼‍♀️",
		plaincode: "01374"
	},
	{
		unicode: "🦹🏽‍♀️",
		plaincode: "01375"
	},
	{
		unicode: "🦹🏾‍♀️",
		plaincode: "01376"
	},
	{
		unicode: "🦹🏿‍♀️",
		plaincode: "01377"
	},
	{
		unicode: "🧙",
		plaincode: "01378"
	},
	{
		unicode: "🧙🏻",
		plaincode: "01379"
	},
	{
		unicode: "🧙🏼",
		plaincode: "01380"
	},
	{
		unicode: "🧙🏽",
		plaincode: "01381"
	},
	{
		unicode: "🧙🏾",
		plaincode: "01382"
	},
	{
		unicode: "🧙🏿",
		plaincode: "01383"
	},
	{
		unicode: "🧙‍♂️",
		plaincode: "01384"
	},
	{
		unicode: "🧙🏻‍♂️",
		plaincode: "01385"
	},
	{
		unicode: "🧙🏼‍♂️",
		plaincode: "01386"
	},
	{
		unicode: "🧙🏽‍♂️",
		plaincode: "01387"
	},
	{
		unicode: "🧙🏾‍♂️",
		plaincode: "01388"
	},
	{
		unicode: "🧙🏿‍♂️",
		plaincode: "01389"
	},
	{
		unicode: "🧙‍♀️",
		plaincode: "01390"
	},
	{
		unicode: "🧙🏻‍♀️",
		plaincode: "01391"
	},
	{
		unicode: "🧙🏼‍♀️",
		plaincode: "01392"
	},
	{
		unicode: "🧙🏽‍♀️",
		plaincode: "01393"
	},
	{
		unicode: "🧙🏾‍♀️",
		plaincode: "01394"
	},
	{
		unicode: "🧙🏿‍♀️",
		plaincode: "01395"
	},
	{
		unicode: "🧚",
		plaincode: "01396"
	},
	{
		unicode: "🧚🏻",
		plaincode: "01397"
	},
	{
		unicode: "🧚🏼",
		plaincode: "01398"
	},
	{
		unicode: "🧚🏽",
		plaincode: "01399"
	},
	{
		unicode: "🧚🏾",
		plaincode: "01400"
	},
	{
		unicode: "🧚🏿",
		plaincode: "01401"
	},
	{
		unicode: "🧚‍♂️",
		plaincode: "01402"
	},
	{
		unicode: "🧚🏻‍♂️",
		plaincode: "01403"
	},
	{
		unicode: "🧚🏼‍♂️",
		plaincode: "01404"
	},
	{
		unicode: "🧚🏽‍♂️",
		plaincode: "01405"
	},
	{
		unicode: "🧚🏾‍♂️",
		plaincode: "01406"
	},
	{
		unicode: "🧚🏿‍♂️",
		plaincode: "01407"
	},
	{
		unicode: "🧚‍♀️",
		plaincode: "01408"
	},
	{
		unicode: "🧚🏻‍♀️",
		plaincode: "01409"
	},
	{
		unicode: "🧚🏼‍♀️",
		plaincode: "01410"
	},
	{
		unicode: "🧚🏽‍♀️",
		plaincode: "01411"
	},
	{
		unicode: "🧚🏾‍♀️",
		plaincode: "01412"
	},
	{
		unicode: "🧚🏿‍♀️",
		plaincode: "01413"
	},
	{
		unicode: "🧛",
		plaincode: "01414"
	},
	{
		unicode: "🧛🏻",
		plaincode: "01415"
	},
	{
		unicode: "🧛🏼",
		plaincode: "01416"
	},
	{
		unicode: "🧛🏽",
		plaincode: "01417"
	},
	{
		unicode: "🧛🏾",
		plaincode: "01418"
	},
	{
		unicode: "🧛🏿",
		plaincode: "01419"
	},
	{
		unicode: "🧛‍♂️",
		plaincode: "01420"
	},
	{
		unicode: "🧛🏻‍♂️",
		plaincode: "01421"
	},
	{
		unicode: "🧛🏼‍♂️",
		plaincode: "01422"
	},
	{
		unicode: "🧛🏽‍♂️",
		plaincode: "01423"
	},
	{
		unicode: "🧛🏾‍♂️",
		plaincode: "01424"
	},
	{
		unicode: "🧛🏿‍♂️",
		plaincode: "01425"
	},
	{
		unicode: "🧛‍♀️",
		plaincode: "01426"
	},
	{
		unicode: "🧛🏻‍♀️",
		plaincode: "01427"
	},
	{
		unicode: "🧛🏼‍♀️",
		plaincode: "01428"
	},
	{
		unicode: "🧛🏽‍♀️",
		plaincode: "01429"
	},
	{
		unicode: "🧛🏾‍♀️",
		plaincode: "01430"
	},
	{
		unicode: "🧛🏿‍♀️",
		plaincode: "01431"
	},
	{
		unicode: "🧜",
		plaincode: "01432"
	},
	{
		unicode: "🧜🏻",
		plaincode: "01433"
	},
	{
		unicode: "🧜🏼",
		plaincode: "01434"
	},
	{
		unicode: "🧜🏽",
		plaincode: "01435"
	},
	{
		unicode: "🧜🏾",
		plaincode: "01436"
	},
	{
		unicode: "🧜🏿",
		plaincode: "01437"
	},
	{
		unicode: "🧜‍♂️",
		plaincode: "01438"
	},
	{
		unicode: "🧜🏻‍♂️",
		plaincode: "01439"
	},
	{
		unicode: "🧜🏼‍♂️",
		plaincode: "01440"
	},
	{
		unicode: "🧜🏽‍♂️",
		plaincode: "01441"
	},
	{
		unicode: "🧜🏾‍♂️",
		plaincode: "01442"
	},
	{
		unicode: "🧜🏿‍♂️",
		plaincode: "01443"
	},
	{
		unicode: "🧜‍♀️",
		plaincode: "01444"
	},
	{
		unicode: "🧜🏻‍♀️",
		plaincode: "01445"
	},
	{
		unicode: "🧜🏼‍♀️",
		plaincode: "01446"
	},
	{
		unicode: "🧜🏽‍♀️",
		plaincode: "01447"
	},
	{
		unicode: "🧜🏾‍♀️",
		plaincode: "01448"
	},
	{
		unicode: "🧜🏿‍♀️",
		plaincode: "01449"
	},
	{
		unicode: "🧝",
		plaincode: "01450"
	},
	{
		unicode: "🧝🏻",
		plaincode: "01451"
	},
	{
		unicode: "🧝🏼",
		plaincode: "01452"
	},
	{
		unicode: "🧝🏽",
		plaincode: "01453"
	},
	{
		unicode: "🧝🏾",
		plaincode: "01454"
	},
	{
		unicode: "🧝🏿",
		plaincode: "01455"
	},
	{
		unicode: "🧝‍♂️",
		plaincode: "01456"
	},
	{
		unicode: "🧝🏻‍♂️",
		plaincode: "01457"
	},
	{
		unicode: "🧝🏼‍♂️",
		plaincode: "01458"
	},
	{
		unicode: "🧝🏽‍♂️",
		plaincode: "01459"
	},
	{
		unicode: "🧝🏾‍♂️",
		plaincode: "01460"
	},
	{
		unicode: "🧝🏿‍♂️",
		plaincode: "01461"
	},
	{
		unicode: "🧝‍♀️",
		plaincode: "01462"
	},
	{
		unicode: "🧝🏻‍♀️",
		plaincode: "01463"
	},
	{
		unicode: "🧝🏼‍♀️",
		plaincode: "01464"
	},
	{
		unicode: "🧝🏽‍♀️",
		plaincode: "01465"
	},
	{
		unicode: "🧝🏾‍♀️",
		plaincode: "01466"
	},
	{
		unicode: "🧝🏿‍♀️",
		plaincode: "01467"
	},
	{
		unicode: "🧞",
		plaincode: "01468"
	},
	{
		unicode: "🧞‍♂️",
		plaincode: "01469"
	},
	{
		unicode: "🧞‍♀️",
		plaincode: "01470"
	},
	{
		unicode: "🧟",
		plaincode: "01471"
	},
	{
		unicode: "🧟‍♂️",
		plaincode: "01472"
	},
	{
		unicode: "🧟‍♀️",
		plaincode: "01473"
	},
	{
		unicode: "🧌",
		plaincode: "01474"
	},
	{
		unicode: "💆",
		plaincode: "01475"
	},
	{
		unicode: "💆🏻",
		plaincode: "01476"
	},
	{
		unicode: "💆🏼",
		plaincode: "01477"
	},
	{
		unicode: "💆🏽",
		plaincode: "01478"
	},
	{
		unicode: "💆🏾",
		plaincode: "01479"
	},
	{
		unicode: "💆🏿",
		plaincode: "01480"
	},
	{
		unicode: "💆‍♂️",
		plaincode: "01481"
	},
	{
		unicode: "💆🏻‍♂️",
		plaincode: "01482"
	},
	{
		unicode: "💆🏼‍♂️",
		plaincode: "01483"
	},
	{
		unicode: "💆🏽‍♂️",
		plaincode: "01484"
	},
	{
		unicode: "💆🏾‍♂️",
		plaincode: "01485"
	},
	{
		unicode: "💆🏿‍♂️",
		plaincode: "01486"
	},
	{
		unicode: "💆‍♀️",
		plaincode: "01487"
	},
	{
		unicode: "💆🏻‍♀️",
		plaincode: "01488"
	},
	{
		unicode: "💆🏼‍♀️",
		plaincode: "01489"
	},
	{
		unicode: "💆🏽‍♀️",
		plaincode: "01490"
	},
	{
		unicode: "💆🏾‍♀️",
		plaincode: "01491"
	},
	{
		unicode: "💆🏿‍♀️",
		plaincode: "01492"
	},
	{
		unicode: "💇",
		plaincode: "01493"
	},
	{
		unicode: "💇🏻",
		plaincode: "01494"
	},
	{
		unicode: "💇🏼",
		plaincode: "01495"
	},
	{
		unicode: "💇🏽",
		plaincode: "01496"
	},
	{
		unicode: "💇🏾",
		plaincode: "01497"
	},
	{
		unicode: "💇🏿",
		plaincode: "01498"
	},
	{
		unicode: "💇‍♂️",
		plaincode: "01499"
	},
	{
		unicode: "💇🏻‍♂️",
		plaincode: "01500"
	},
	{
		unicode: "💇🏼‍♂️",
		plaincode: "01501"
	},
	{
		unicode: "💇🏽‍♂️",
		plaincode: "01502"
	},
	{
		unicode: "💇🏾‍♂️",
		plaincode: "01503"
	},
	{
		unicode: "💇🏿‍♂️",
		plaincode: "01504"
	},
	{
		unicode: "💇‍♀️",
		plaincode: "01505"
	},
	{
		unicode: "💇🏻‍♀️",
		plaincode: "01506"
	},
	{
		unicode: "💇🏼‍♀️",
		plaincode: "01507"
	},
	{
		unicode: "💇🏽‍♀️",
		plaincode: "01508"
	},
	{
		unicode: "💇🏾‍♀️",
		plaincode: "01509"
	},
	{
		unicode: "💇🏿‍♀️",
		plaincode: "01510"
	},
	{
		unicode: "🚶",
		plaincode: "01511"
	},
	{
		unicode: "🚶🏻",
		plaincode: "01512"
	},
	{
		unicode: "🚶🏼",
		plaincode: "01513"
	},
	{
		unicode: "🚶🏽",
		plaincode: "01514"
	},
	{
		unicode: "🚶🏾",
		plaincode: "01515"
	},
	{
		unicode: "🚶🏿",
		plaincode: "01516"
	},
	{
		unicode: "🚶‍♂️",
		plaincode: "01517"
	},
	{
		unicode: "🚶🏻‍♂️",
		plaincode: "01518"
	},
	{
		unicode: "🚶🏼‍♂️",
		plaincode: "01519"
	},
	{
		unicode: "🚶🏽‍♂️",
		plaincode: "01520"
	},
	{
		unicode: "🚶🏾‍♂️",
		plaincode: "01521"
	},
	{
		unicode: "🚶🏿‍♂️",
		plaincode: "01522"
	},
	{
		unicode: "🚶‍♀️",
		plaincode: "01523"
	},
	{
		unicode: "🚶🏻‍♀️",
		plaincode: "01524"
	},
	{
		unicode: "🚶🏼‍♀️",
		plaincode: "01525"
	},
	{
		unicode: "🚶🏽‍♀️",
		plaincode: "01526"
	},
	{
		unicode: "🚶🏾‍♀️",
		plaincode: "01527"
	},
	{
		unicode: "🚶🏿‍♀️",
		plaincode: "01528"
	},
	{
		unicode: "🧍",
		plaincode: "01529"
	},
	{
		unicode: "🧍🏻",
		plaincode: "01530"
	},
	{
		unicode: "🧍🏼",
		plaincode: "01531"
	},
	{
		unicode: "🧍🏽",
		plaincode: "01532"
	},
	{
		unicode: "🧍🏾",
		plaincode: "01533"
	},
	{
		unicode: "🧍🏿",
		plaincode: "01534"
	},
	{
		unicode: "🧍‍♂️",
		plaincode: "01535"
	},
	{
		unicode: "🧍🏻‍♂️",
		plaincode: "01536"
	},
	{
		unicode: "🧍🏼‍♂️",
		plaincode: "01537"
	},
	{
		unicode: "🧍🏽‍♂️",
		plaincode: "01538"
	},
	{
		unicode: "🧍🏾‍♂️",
		plaincode: "01539"
	},
	{
		unicode: "🧍🏿‍♂️",
		plaincode: "01540"
	},
	{
		unicode: "🧍‍♀️",
		plaincode: "01541"
	},
	{
		unicode: "🧍🏻‍♀️",
		plaincode: "01542"
	},
	{
		unicode: "🧍🏼‍♀️",
		plaincode: "01543"
	},
	{
		unicode: "🧍🏽‍♀️",
		plaincode: "01544"
	},
	{
		unicode: "🧍🏾‍♀️",
		plaincode: "01545"
	},
	{
		unicode: "🧍🏿‍♀️",
		plaincode: "01546"
	},
	{
		unicode: "🧎",
		plaincode: "01547"
	},
	{
		unicode: "🧎🏻",
		plaincode: "01548"
	},
	{
		unicode: "🧎🏼",
		plaincode: "01549"
	},
	{
		unicode: "🧎🏽",
		plaincode: "01550"
	},
	{
		unicode: "🧎🏾",
		plaincode: "01551"
	},
	{
		unicode: "🧎🏿",
		plaincode: "01552"
	},
	{
		unicode: "🧎‍♂️",
		plaincode: "01553"
	},
	{
		unicode: "🧎🏻‍♂️",
		plaincode: "01554"
	},
	{
		unicode: "🧎🏼‍♂️",
		plaincode: "01555"
	},
	{
		unicode: "🧎🏽‍♂️",
		plaincode: "01556"
	},
	{
		unicode: "🧎🏾‍♂️",
		plaincode: "01557"
	},
	{
		unicode: "🧎🏿‍♂️",
		plaincode: "01558"
	},
	{
		unicode: "🧎‍♀️",
		plaincode: "01559"
	},
	{
		unicode: "🧎🏻‍♀️",
		plaincode: "01560"
	},
	{
		unicode: "🧎🏼‍♀️",
		plaincode: "01561"
	},
	{
		unicode: "🧎🏽‍♀️",
		plaincode: "01562"
	},
	{
		unicode: "🧎🏾‍♀️",
		plaincode: "01563"
	},
	{
		unicode: "🧎🏿‍♀️",
		plaincode: "01564"
	},
	{
		unicode: "🧑‍🦯",
		plaincode: "01565"
	},
	{
		unicode: "🧑🏻‍🦯",
		plaincode: "01566"
	},
	{
		unicode: "🧑🏼‍🦯",
		plaincode: "01567"
	},
	{
		unicode: "🧑🏽‍🦯",
		plaincode: "01568"
	},
	{
		unicode: "🧑🏾‍🦯",
		plaincode: "01569"
	},
	{
		unicode: "🧑🏿‍🦯",
		plaincode: "01570"
	},
	{
		unicode: "👨‍🦯",
		plaincode: "01571"
	},
	{
		unicode: "👨🏻‍🦯",
		plaincode: "01572"
	},
	{
		unicode: "👨🏼‍🦯",
		plaincode: "01573"
	},
	{
		unicode: "👨🏽‍🦯",
		plaincode: "01574"
	},
	{
		unicode: "👨🏾‍🦯",
		plaincode: "01575"
	},
	{
		unicode: "👨🏿‍🦯",
		plaincode: "01576"
	},
	{
		unicode: "👩‍🦯",
		plaincode: "01577"
	},
	{
		unicode: "👩🏻‍🦯",
		plaincode: "01578"
	},
	{
		unicode: "👩🏼‍🦯",
		plaincode: "01579"
	},
	{
		unicode: "👩🏽‍🦯",
		plaincode: "01580"
	},
	{
		unicode: "👩🏾‍🦯",
		plaincode: "01581"
	},
	{
		unicode: "👩🏿‍🦯",
		plaincode: "01582"
	},
	{
		unicode: "🧑‍🦼",
		plaincode: "01583"
	},
	{
		unicode: "🧑🏻‍🦼",
		plaincode: "01584"
	},
	{
		unicode: "🧑🏼‍🦼",
		plaincode: "01585"
	},
	{
		unicode: "🧑🏽‍🦼",
		plaincode: "01586"
	},
	{
		unicode: "🧑🏾‍🦼",
		plaincode: "01587"
	},
	{
		unicode: "🧑🏿‍🦼",
		plaincode: "01588"
	},
	{
		unicode: "👨‍🦼",
		plaincode: "01589"
	},
	{
		unicode: "👨🏻‍🦼",
		plaincode: "01590"
	},
	{
		unicode: "👨🏼‍🦼",
		plaincode: "01591"
	},
	{
		unicode: "👨🏽‍🦼",
		plaincode: "01592"
	},
	{
		unicode: "👨🏾‍🦼",
		plaincode: "01593"
	},
	{
		unicode: "👨🏿‍🦼",
		plaincode: "01594"
	},
	{
		unicode: "👩‍🦼",
		plaincode: "01595"
	},
	{
		unicode: "👩🏻‍🦼",
		plaincode: "01596"
	},
	{
		unicode: "👩🏼‍🦼",
		plaincode: "01597"
	},
	{
		unicode: "👩🏽‍🦼",
		plaincode: "01598"
	},
	{
		unicode: "👩🏾‍🦼",
		plaincode: "01599"
	},
	{
		unicode: "👩🏿‍🦼",
		plaincode: "01600"
	},
	{
		unicode: "🧑‍🦽",
		plaincode: "01601"
	},
	{
		unicode: "🧑🏻‍🦽",
		plaincode: "01602"
	},
	{
		unicode: "🧑🏼‍🦽",
		plaincode: "01603"
	},
	{
		unicode: "🧑🏽‍🦽",
		plaincode: "01604"
	},
	{
		unicode: "🧑🏾‍🦽",
		plaincode: "01605"
	},
	{
		unicode: "🧑🏿‍🦽",
		plaincode: "01606"
	},
	{
		unicode: "👨‍🦽",
		plaincode: "01607"
	},
	{
		unicode: "👨🏻‍🦽",
		plaincode: "01608"
	},
	{
		unicode: "👨🏼‍🦽",
		plaincode: "01609"
	},
	{
		unicode: "👨🏽‍🦽",
		plaincode: "01610"
	},
	{
		unicode: "👨🏾‍🦽",
		plaincode: "01611"
	},
	{
		unicode: "👨🏿‍🦽",
		plaincode: "01612"
	},
	{
		unicode: "👩‍🦽",
		plaincode: "01613"
	},
	{
		unicode: "👩🏻‍🦽",
		plaincode: "01614"
	},
	{
		unicode: "👩🏼‍🦽",
		plaincode: "01615"
	},
	{
		unicode: "👩🏽‍🦽",
		plaincode: "01616"
	},
	{
		unicode: "👩🏾‍🦽",
		plaincode: "01617"
	},
	{
		unicode: "👩🏿‍🦽",
		plaincode: "01618"
	},
	{
		unicode: "🏃",
		plaincode: "01619"
	},
	{
		unicode: "🏃🏻",
		plaincode: "01620"
	},
	{
		unicode: "🏃🏼",
		plaincode: "01621"
	},
	{
		unicode: "🏃🏽",
		plaincode: "01622"
	},
	{
		unicode: "🏃🏾",
		plaincode: "01623"
	},
	{
		unicode: "🏃🏿",
		plaincode: "01624"
	},
	{
		unicode: "🏃‍♂️",
		plaincode: "01625"
	},
	{
		unicode: "🏃🏻‍♂️",
		plaincode: "01626"
	},
	{
		unicode: "🏃🏼‍♂️",
		plaincode: "01627"
	},
	{
		unicode: "🏃🏽‍♂️",
		plaincode: "01628"
	},
	{
		unicode: "🏃🏾‍♂️",
		plaincode: "01629"
	},
	{
		unicode: "🏃🏿‍♂️",
		plaincode: "01630"
	},
	{
		unicode: "🏃‍♀️",
		plaincode: "01631"
	},
	{
		unicode: "🏃🏻‍♀️",
		plaincode: "01632"
	},
	{
		unicode: "🏃🏼‍♀️",
		plaincode: "01633"
	},
	{
		unicode: "🏃🏽‍♀️",
		plaincode: "01634"
	},
	{
		unicode: "🏃🏾‍♀️",
		plaincode: "01635"
	},
	{
		unicode: "🏃🏿‍♀️",
		plaincode: "01636"
	},
	{
		unicode: "💃",
		plaincode: "01637"
	},
	{
		unicode: "💃🏻",
		plaincode: "01638"
	},
	{
		unicode: "💃🏼",
		plaincode: "01639"
	},
	{
		unicode: "💃🏽",
		plaincode: "01640"
	},
	{
		unicode: "💃🏾",
		plaincode: "01641"
	},
	{
		unicode: "💃🏿",
		plaincode: "01642"
	},
	{
		unicode: "🕺",
		plaincode: "01643"
	},
	{
		unicode: "🕺🏻",
		plaincode: "01644"
	},
	{
		unicode: "🕺🏼",
		plaincode: "01645"
	},
	{
		unicode: "🕺🏽",
		plaincode: "01646"
	},
	{
		unicode: "🕺🏾",
		plaincode: "01647"
	},
	{
		unicode: "🕺🏿",
		plaincode: "01648"
	},
	{
		unicode: "🕴🏻",
		plaincode: "01649"
	},
	{
		unicode: "🕴🏼",
		plaincode: "01650"
	},
	{
		unicode: "🕴🏽",
		plaincode: "01651"
	},
	{
		unicode: "🕴🏾",
		plaincode: "01652"
	},
	{
		unicode: "🕴🏿",
		plaincode: "01653"
	},
	{
		unicode: "👯",
		plaincode: "01654"
	},
	{
		unicode: "👯‍♂️",
		plaincode: "01655"
	},
	{
		unicode: "👯‍♀️",
		plaincode: "01656"
	},
	{
		unicode: "🧖",
		plaincode: "01657"
	},
	{
		unicode: "🧖🏻",
		plaincode: "01658"
	},
	{
		unicode: "🧖🏼",
		plaincode: "01659"
	},
	{
		unicode: "🧖🏽",
		plaincode: "01660"
	},
	{
		unicode: "🧖🏾",
		plaincode: "01661"
	},
	{
		unicode: "🧖🏿",
		plaincode: "01662"
	},
	{
		unicode: "🧖‍♂️",
		plaincode: "01663"
	},
	{
		unicode: "🧖🏻‍♂️",
		plaincode: "01664"
	},
	{
		unicode: "🧖🏼‍♂️",
		plaincode: "01665"
	},
	{
		unicode: "🧖🏽‍♂️",
		plaincode: "01666"
	},
	{
		unicode: "🧖🏾‍♂️",
		plaincode: "01667"
	},
	{
		unicode: "🧖🏿‍♂️",
		plaincode: "01668"
	},
	{
		unicode: "🧖‍♀️",
		plaincode: "01669"
	},
	{
		unicode: "🧖🏻‍♀️",
		plaincode: "01670"
	},
	{
		unicode: "🧖🏼‍♀️",
		plaincode: "01671"
	},
	{
		unicode: "🧖🏽‍♀️",
		plaincode: "01672"
	},
	{
		unicode: "🧖🏾‍♀️",
		plaincode: "01673"
	},
	{
		unicode: "🧖🏿‍♀️",
		plaincode: "01674"
	},
	{
		unicode: "🧗",
		plaincode: "01675"
	},
	{
		unicode: "🧗🏻",
		plaincode: "01676"
	},
	{
		unicode: "🧗🏼",
		plaincode: "01677"
	},
	{
		unicode: "🧗🏽",
		plaincode: "01678"
	},
	{
		unicode: "🧗🏾",
		plaincode: "01679"
	},
	{
		unicode: "🧗🏿",
		plaincode: "01680"
	},
	{
		unicode: "🧗‍♂️",
		plaincode: "01681"
	},
	{
		unicode: "🧗🏻‍♂️",
		plaincode: "01682"
	},
	{
		unicode: "🧗🏼‍♂️",
		plaincode: "01683"
	},
	{
		unicode: "🧗🏽‍♂️",
		plaincode: "01684"
	},
	{
		unicode: "🧗🏾‍♂️",
		plaincode: "01685"
	},
	{
		unicode: "🧗🏿‍♂️",
		plaincode: "01686"
	},
	{
		unicode: "🧗‍♀️",
		plaincode: "01687"
	},
	{
		unicode: "🧗🏻‍♀️",
		plaincode: "01688"
	},
	{
		unicode: "🧗🏼‍♀️",
		plaincode: "01689"
	},
	{
		unicode: "🧗🏽‍♀️",
		plaincode: "01690"
	},
	{
		unicode: "🧗🏾‍♀️",
		plaincode: "01691"
	},
	{
		unicode: "🧗🏿‍♀️",
		plaincode: "01692"
	},
	{
		unicode: "🤺",
		plaincode: "01693"
	},
	{
		unicode: "🏇",
		plaincode: "01694"
	},
	{
		unicode: "🏇🏻",
		plaincode: "01695"
	},
	{
		unicode: "🏇🏼",
		plaincode: "01696"
	},
	{
		unicode: "🏇🏽",
		plaincode: "01697"
	},
	{
		unicode: "🏇🏾",
		plaincode: "01698"
	},
	{
		unicode: "🏇🏿",
		plaincode: "01699"
	},
	{
		unicode: "🏂",
		plaincode: "01700"
	},
	{
		unicode: "🏂🏻",
		plaincode: "01701"
	},
	{
		unicode: "🏂🏼",
		plaincode: "01702"
	},
	{
		unicode: "🏂🏽",
		plaincode: "01703"
	},
	{
		unicode: "🏂🏾",
		plaincode: "01704"
	},
	{
		unicode: "🏂🏿",
		plaincode: "01705"
	},
	{
		unicode: "🏌🏻",
		plaincode: "01706"
	},
	{
		unicode: "🏌🏼",
		plaincode: "01707"
	},
	{
		unicode: "🏌🏽",
		plaincode: "01708"
	},
	{
		unicode: "🏌🏾",
		plaincode: "01709"
	},
	{
		unicode: "🏌🏿",
		plaincode: "01710"
	},
	{
		unicode: "🏌️‍♂️",
		plaincode: "01711"
	},
	{
		unicode: "🏌🏻‍♂️",
		plaincode: "01712"
	},
	{
		unicode: "🏌🏼‍♂️",
		plaincode: "01713"
	},
	{
		unicode: "🏌🏽‍♂️",
		plaincode: "01714"
	},
	{
		unicode: "🏌🏾‍♂️",
		plaincode: "01715"
	},
	{
		unicode: "🏌🏿‍♂️",
		plaincode: "01716"
	},
	{
		unicode: "🏌️‍♀️",
		plaincode: "01717"
	},
	{
		unicode: "🏌🏻‍♀️",
		plaincode: "01718"
	},
	{
		unicode: "🏌🏼‍♀️",
		plaincode: "01719"
	},
	{
		unicode: "🏌🏽‍♀️",
		plaincode: "01720"
	},
	{
		unicode: "🏌🏾‍♀️",
		plaincode: "01721"
	},
	{
		unicode: "🏌🏿‍♀️",
		plaincode: "01722"
	},
	{
		unicode: "🏄",
		plaincode: "01723"
	},
	{
		unicode: "🏄🏻",
		plaincode: "01724"
	},
	{
		unicode: "🏄🏼",
		plaincode: "01725"
	},
	{
		unicode: "🏄🏽",
		plaincode: "01726"
	},
	{
		unicode: "🏄🏾",
		plaincode: "01727"
	},
	{
		unicode: "🏄🏿",
		plaincode: "01728"
	},
	{
		unicode: "🏄‍♂️",
		plaincode: "01729"
	},
	{
		unicode: "🏄🏻‍♂️",
		plaincode: "01730"
	},
	{
		unicode: "🏄🏼‍♂️",
		plaincode: "01731"
	},
	{
		unicode: "🏄🏽‍♂️",
		plaincode: "01732"
	},
	{
		unicode: "🏄🏾‍♂️",
		plaincode: "01733"
	},
	{
		unicode: "🏄🏿‍♂️",
		plaincode: "01734"
	},
	{
		unicode: "🏄‍♀️",
		plaincode: "01735"
	},
	{
		unicode: "🏄🏻‍♀️",
		plaincode: "01736"
	},
	{
		unicode: "🏄🏼‍♀️",
		plaincode: "01737"
	},
	{
		unicode: "🏄🏽‍♀️",
		plaincode: "01738"
	},
	{
		unicode: "🏄🏾‍♀️",
		plaincode: "01739"
	},
	{
		unicode: "🏄🏿‍♀️",
		plaincode: "01740"
	},
	{
		unicode: "🚣",
		plaincode: "01741"
	},
	{
		unicode: "🚣🏻",
		plaincode: "01742"
	},
	{
		unicode: "🚣🏼",
		plaincode: "01743"
	},
	{
		unicode: "🚣🏽",
		plaincode: "01744"
	},
	{
		unicode: "🚣🏾",
		plaincode: "01745"
	},
	{
		unicode: "🚣🏿",
		plaincode: "01746"
	},
	{
		unicode: "🚣‍♂️",
		plaincode: "01747"
	},
	{
		unicode: "🚣🏻‍♂️",
		plaincode: "01748"
	},
	{
		unicode: "🚣🏼‍♂️",
		plaincode: "01749"
	},
	{
		unicode: "🚣🏽‍♂️",
		plaincode: "01750"
	},
	{
		unicode: "🚣🏾‍♂️",
		plaincode: "01751"
	},
	{
		unicode: "🚣🏿‍♂️",
		plaincode: "01752"
	},
	{
		unicode: "🚣‍♀️",
		plaincode: "01753"
	},
	{
		unicode: "🚣🏻‍♀️",
		plaincode: "01754"
	},
	{
		unicode: "🚣🏼‍♀️",
		plaincode: "01755"
	},
	{
		unicode: "🚣🏽‍♀️",
		plaincode: "01756"
	},
	{
		unicode: "🚣🏾‍♀️",
		plaincode: "01757"
	},
	{
		unicode: "🚣🏿‍♀️",
		plaincode: "01758"
	},
	{
		unicode: "🏊",
		plaincode: "01759"
	},
	{
		unicode: "🏊🏻",
		plaincode: "01760"
	},
	{
		unicode: "🏊🏼",
		plaincode: "01761"
	},
	{
		unicode: "🏊🏽",
		plaincode: "01762"
	},
	{
		unicode: "🏊🏾",
		plaincode: "01763"
	},
	{
		unicode: "🏊🏿",
		plaincode: "01764"
	},
	{
		unicode: "🏊‍♂️",
		plaincode: "01765"
	},
	{
		unicode: "🏊🏻‍♂️",
		plaincode: "01766"
	},
	{
		unicode: "🏊🏼‍♂️",
		plaincode: "01767"
	},
	{
		unicode: "🏊🏽‍♂️",
		plaincode: "01768"
	},
	{
		unicode: "🏊🏾‍♂️",
		plaincode: "01769"
	},
	{
		unicode: "🏊🏿‍♂️",
		plaincode: "01770"
	},
	{
		unicode: "🏊‍♀️",
		plaincode: "01771"
	},
	{
		unicode: "🏊🏻‍♀️",
		plaincode: "01772"
	},
	{
		unicode: "🏊🏼‍♀️",
		plaincode: "01773"
	},
	{
		unicode: "🏊🏽‍♀️",
		plaincode: "01774"
	},
	{
		unicode: "🏊🏾‍♀️",
		plaincode: "01775"
	},
	{
		unicode: "🏊🏿‍♀️",
		plaincode: "01776"
	},
	{
		unicode: "⛹🏻",
		plaincode: "01777"
	},
	{
		unicode: "⛹🏼",
		plaincode: "01778"
	},
	{
		unicode: "⛹🏽",
		plaincode: "01779"
	},
	{
		unicode: "⛹🏾",
		plaincode: "01780"
	},
	{
		unicode: "⛹🏿",
		plaincode: "01781"
	},
	{
		unicode: "⛹️‍♂️",
		plaincode: "01782"
	},
	{
		unicode: "⛹🏻‍♂️",
		plaincode: "01783"
	},
	{
		unicode: "⛹🏼‍♂️",
		plaincode: "01784"
	},
	{
		unicode: "⛹🏽‍♂️",
		plaincode: "01785"
	},
	{
		unicode: "⛹🏾‍♂️",
		plaincode: "01786"
	},
	{
		unicode: "⛹🏿‍♂️",
		plaincode: "01787"
	},
	{
		unicode: "⛹️‍♀️",
		plaincode: "01788"
	},
	{
		unicode: "⛹🏻‍♀️",
		plaincode: "01789"
	},
	{
		unicode: "⛹🏼‍♀️",
		plaincode: "01790"
	},
	{
		unicode: "⛹🏽‍♀️",
		plaincode: "01791"
	},
	{
		unicode: "⛹🏾‍♀️",
		plaincode: "01792"
	},
	{
		unicode: "⛹🏿‍♀️",
		plaincode: "01793"
	},
	{
		unicode: "🏋🏻",
		plaincode: "01794"
	},
	{
		unicode: "🏋🏼",
		plaincode: "01795"
	},
	{
		unicode: "🏋🏽",
		plaincode: "01796"
	},
	{
		unicode: "🏋🏾",
		plaincode: "01797"
	},
	{
		unicode: "🏋🏿",
		plaincode: "01798"
	},
	{
		unicode: "🏋️‍♂️",
		plaincode: "01799"
	},
	{
		unicode: "🏋🏻‍♂️",
		plaincode: "01800"
	},
	{
		unicode: "🏋🏼‍♂️",
		plaincode: "01801"
	},
	{
		unicode: "🏋🏽‍♂️",
		plaincode: "01802"
	},
	{
		unicode: "🏋🏾‍♂️",
		plaincode: "01803"
	},
	{
		unicode: "🏋🏿‍♂️",
		plaincode: "01804"
	},
	{
		unicode: "🏋️‍♀️",
		plaincode: "01805"
	},
	{
		unicode: "🏋🏻‍♀️",
		plaincode: "01806"
	},
	{
		unicode: "🏋🏼‍♀️",
		plaincode: "01807"
	},
	{
		unicode: "🏋🏽‍♀️",
		plaincode: "01808"
	},
	{
		unicode: "🏋🏾‍♀️",
		plaincode: "01809"
	},
	{
		unicode: "🏋🏿‍♀️",
		plaincode: "01810"
	},
	{
		unicode: "🚴",
		plaincode: "01811"
	},
	{
		unicode: "🚴🏻",
		plaincode: "01812"
	},
	{
		unicode: "🚴🏼",
		plaincode: "01813"
	},
	{
		unicode: "🚴🏽",
		plaincode: "01814"
	},
	{
		unicode: "🚴🏾",
		plaincode: "01815"
	},
	{
		unicode: "🚴🏿",
		plaincode: "01816"
	},
	{
		unicode: "🚴‍♂️",
		plaincode: "01817"
	},
	{
		unicode: "🚴🏻‍♂️",
		plaincode: "01818"
	},
	{
		unicode: "🚴🏼‍♂️",
		plaincode: "01819"
	},
	{
		unicode: "🚴🏽‍♂️",
		plaincode: "01820"
	},
	{
		unicode: "🚴🏾‍♂️",
		plaincode: "01821"
	},
	{
		unicode: "🚴🏿‍♂️",
		plaincode: "01822"
	},
	{
		unicode: "🚴‍♀️",
		plaincode: "01823"
	},
	{
		unicode: "🚴🏻‍♀️",
		plaincode: "01824"
	},
	{
		unicode: "🚴🏼‍♀️",
		plaincode: "01825"
	},
	{
		unicode: "🚴🏽‍♀️",
		plaincode: "01826"
	},
	{
		unicode: "🚴🏾‍♀️",
		plaincode: "01827"
	},
	{
		unicode: "🚴🏿‍♀️",
		plaincode: "01828"
	},
	{
		unicode: "🚵",
		plaincode: "01829"
	},
	{
		unicode: "🚵🏻",
		plaincode: "01830"
	},
	{
		unicode: "🚵🏼",
		plaincode: "01831"
	},
	{
		unicode: "🚵🏽",
		plaincode: "01832"
	},
	{
		unicode: "🚵🏾",
		plaincode: "01833"
	},
	{
		unicode: "🚵🏿",
		plaincode: "01834"
	},
	{
		unicode: "🚵‍♂️",
		plaincode: "01835"
	},
	{
		unicode: "🚵🏻‍♂️",
		plaincode: "01836"
	},
	{
		unicode: "🚵🏼‍♂️",
		plaincode: "01837"
	},
	{
		unicode: "🚵🏽‍♂️",
		plaincode: "01838"
	},
	{
		unicode: "🚵🏾‍♂️",
		plaincode: "01839"
	},
	{
		unicode: "🚵🏿‍♂️",
		plaincode: "01840"
	},
	{
		unicode: "🚵‍♀️",
		plaincode: "01841"
	},
	{
		unicode: "🚵🏻‍♀️",
		plaincode: "01842"
	},
	{
		unicode: "🚵🏼‍♀️",
		plaincode: "01843"
	},
	{
		unicode: "🚵🏽‍♀️",
		plaincode: "01844"
	},
	{
		unicode: "🚵🏾‍♀️",
		plaincode: "01845"
	},
	{
		unicode: "🚵🏿‍♀️",
		plaincode: "01846"
	},
	{
		unicode: "🤸",
		plaincode: "01847"
	},
	{
		unicode: "🤸🏻",
		plaincode: "01848"
	},
	{
		unicode: "🤸🏼",
		plaincode: "01849"
	},
	{
		unicode: "🤸🏽",
		plaincode: "01850"
	},
	{
		unicode: "🤸🏾",
		plaincode: "01851"
	},
	{
		unicode: "🤸🏿",
		plaincode: "01852"
	},
	{
		unicode: "🤸‍♂️",
		plaincode: "01853"
	},
	{
		unicode: "🤸🏻‍♂️",
		plaincode: "01854"
	},
	{
		unicode: "🤸🏼‍♂️",
		plaincode: "01855"
	},
	{
		unicode: "🤸🏽‍♂️",
		plaincode: "01856"
	},
	{
		unicode: "🤸🏾‍♂️",
		plaincode: "01857"
	},
	{
		unicode: "🤸🏿‍♂️",
		plaincode: "01858"
	},
	{
		unicode: "🤸‍♀️",
		plaincode: "01859"
	},
	{
		unicode: "🤸🏻‍♀️",
		plaincode: "01860"
	},
	{
		unicode: "🤸🏼‍♀️",
		plaincode: "01861"
	},
	{
		unicode: "🤸🏽‍♀️",
		plaincode: "01862"
	},
	{
		unicode: "🤸🏾‍♀️",
		plaincode: "01863"
	},
	{
		unicode: "🤸🏿‍♀️",
		plaincode: "01864"
	},
	{
		unicode: "🤼",
		plaincode: "01865"
	},
	{
		unicode: "🤼‍♂️",
		plaincode: "01866"
	},
	{
		unicode: "🤼‍♀️",
		plaincode: "01867"
	},
	{
		unicode: "🤽",
		plaincode: "01868"
	},
	{
		unicode: "🤽🏻",
		plaincode: "01869"
	},
	{
		unicode: "🤽🏼",
		plaincode: "01870"
	},
	{
		unicode: "🤽🏽",
		plaincode: "01871"
	},
	{
		unicode: "🤽🏾",
		plaincode: "01872"
	},
	{
		unicode: "🤽🏿",
		plaincode: "01873"
	},
	{
		unicode: "🤽‍♂️",
		plaincode: "01874"
	},
	{
		unicode: "🤽🏻‍♂️",
		plaincode: "01875"
	},
	{
		unicode: "🤽🏼‍♂️",
		plaincode: "01876"
	},
	{
		unicode: "🤽🏽‍♂️",
		plaincode: "01877"
	},
	{
		unicode: "🤽🏾‍♂️",
		plaincode: "01878"
	},
	{
		unicode: "🤽🏿‍♂️",
		plaincode: "01879"
	},
	{
		unicode: "🤽‍♀️",
		plaincode: "01880"
	},
	{
		unicode: "🤽🏻‍♀️",
		plaincode: "01881"
	},
	{
		unicode: "🤽🏼‍♀️",
		plaincode: "01882"
	},
	{
		unicode: "🤽🏽‍♀️",
		plaincode: "01883"
	},
	{
		unicode: "🤽🏾‍♀️",
		plaincode: "01884"
	},
	{
		unicode: "🤽🏿‍♀️",
		plaincode: "01885"
	},
	{
		unicode: "🤾",
		plaincode: "01886"
	},
	{
		unicode: "🤾🏻",
		plaincode: "01887"
	},
	{
		unicode: "🤾🏼",
		plaincode: "01888"
	},
	{
		unicode: "🤾🏽",
		plaincode: "01889"
	},
	{
		unicode: "🤾🏾",
		plaincode: "01890"
	},
	{
		unicode: "🤾🏿",
		plaincode: "01891"
	},
	{
		unicode: "🤾‍♂️",
		plaincode: "01892"
	},
	{
		unicode: "🤾🏻‍♂️",
		plaincode: "01893"
	},
	{
		unicode: "🤾🏼‍♂️",
		plaincode: "01894"
	},
	{
		unicode: "🤾🏽‍♂️",
		plaincode: "01895"
	},
	{
		unicode: "🤾🏾‍♂️",
		plaincode: "01896"
	},
	{
		unicode: "🤾🏿‍♂️",
		plaincode: "01897"
	},
	{
		unicode: "🤾‍♀️",
		plaincode: "01898"
	},
	{
		unicode: "🤾🏻‍♀️",
		plaincode: "01899"
	},
	{
		unicode: "🤾🏼‍♀️",
		plaincode: "01900"
	},
	{
		unicode: "🤾🏽‍♀️",
		plaincode: "01901"
	},
	{
		unicode: "🤾🏾‍♀️",
		plaincode: "01902"
	},
	{
		unicode: "🤾🏿‍♀️",
		plaincode: "01903"
	},
	{
		unicode: "🤹",
		plaincode: "01904"
	},
	{
		unicode: "🤹🏻",
		plaincode: "01905"
	},
	{
		unicode: "🤹🏼",
		plaincode: "01906"
	},
	{
		unicode: "🤹🏽",
		plaincode: "01907"
	},
	{
		unicode: "🤹🏾",
		plaincode: "01908"
	},
	{
		unicode: "🤹🏿",
		plaincode: "01909"
	},
	{
		unicode: "🤹‍♂️",
		plaincode: "01910"
	},
	{
		unicode: "🤹🏻‍♂️",
		plaincode: "01911"
	},
	{
		unicode: "🤹🏼‍♂️",
		plaincode: "01912"
	},
	{
		unicode: "🤹🏽‍♂️",
		plaincode: "01913"
	},
	{
		unicode: "🤹🏾‍♂️",
		plaincode: "01914"
	},
	{
		unicode: "🤹🏿‍♂️",
		plaincode: "01915"
	},
	{
		unicode: "🤹‍♀️",
		plaincode: "01916"
	},
	{
		unicode: "🤹🏻‍♀️",
		plaincode: "01917"
	},
	{
		unicode: "🤹🏼‍♀️",
		plaincode: "01918"
	},
	{
		unicode: "🤹🏽‍♀️",
		plaincode: "01919"
	},
	{
		unicode: "🤹🏾‍♀️",
		plaincode: "01920"
	},
	{
		unicode: "🤹🏿‍♀️",
		plaincode: "01921"
	},
	{
		unicode: "🧘",
		plaincode: "01922"
	},
	{
		unicode: "🧘🏻",
		plaincode: "01923"
	},
	{
		unicode: "🧘🏼",
		plaincode: "01924"
	},
	{
		unicode: "🧘🏽",
		plaincode: "01925"
	},
	{
		unicode: "🧘🏾",
		plaincode: "01926"
	},
	{
		unicode: "🧘🏿",
		plaincode: "01927"
	},
	{
		unicode: "🧘‍♂️",
		plaincode: "01928"
	},
	{
		unicode: "🧘🏻‍♂️",
		plaincode: "01929"
	},
	{
		unicode: "🧘🏼‍♂️",
		plaincode: "01930"
	},
	{
		unicode: "🧘🏽‍♂️",
		plaincode: "01931"
	},
	{
		unicode: "🧘🏾‍♂️",
		plaincode: "01932"
	},
	{
		unicode: "🧘🏿‍♂️",
		plaincode: "01933"
	},
	{
		unicode: "🧘‍♀️",
		plaincode: "01934"
	},
	{
		unicode: "🧘🏻‍♀️",
		plaincode: "01935"
	},
	{
		unicode: "🧘🏼‍♀️",
		plaincode: "01936"
	},
	{
		unicode: "🧘🏽‍♀️",
		plaincode: "01937"
	},
	{
		unicode: "🧘🏾‍♀️",
		plaincode: "01938"
	},
	{
		unicode: "🧘🏿‍♀️",
		plaincode: "01939"
	},
	{
		unicode: "🛀",
		plaincode: "01940"
	},
	{
		unicode: "🛀🏻",
		plaincode: "01941"
	},
	{
		unicode: "🛀🏼",
		plaincode: "01942"
	},
	{
		unicode: "🛀🏽",
		plaincode: "01943"
	},
	{
		unicode: "🛀🏾",
		plaincode: "01944"
	},
	{
		unicode: "🛀🏿",
		plaincode: "01945"
	},
	{
		unicode: "🛌",
		plaincode: "01946"
	},
	{
		unicode: "🛌🏻",
		plaincode: "01947"
	},
	{
		unicode: "🛌🏼",
		plaincode: "01948"
	},
	{
		unicode: "🛌🏽",
		plaincode: "01949"
	},
	{
		unicode: "🛌🏾",
		plaincode: "01950"
	},
	{
		unicode: "🛌🏿",
		plaincode: "01951"
	},
	{
		unicode: "🧑‍🤝‍🧑",
		plaincode: "01952"
	},
	{
		unicode: "🧑🏻‍🤝‍🧑🏻",
		plaincode: "01953"
	},
	{
		unicode: "🧑🏻‍🤝‍🧑🏼",
		plaincode: "01954"
	},
	{
		unicode: "🧑🏻‍🤝‍🧑🏽",
		plaincode: "01955"
	},
	{
		unicode: "🧑🏻‍🤝‍🧑🏾",
		plaincode: "01956"
	},
	{
		unicode: "🧑🏻‍🤝‍🧑🏿",
		plaincode: "01957"
	},
	{
		unicode: "🧑🏼‍🤝‍🧑🏻",
		plaincode: "01958"
	},
	{
		unicode: "🧑🏼‍🤝‍🧑🏼",
		plaincode: "01959"
	},
	{
		unicode: "🧑🏼‍🤝‍🧑🏽",
		plaincode: "01960"
	},
	{
		unicode: "🧑🏼‍🤝‍🧑🏾",
		plaincode: "01961"
	},
	{
		unicode: "🧑🏼‍🤝‍🧑🏿",
		plaincode: "01962"
	},
	{
		unicode: "🧑🏽‍🤝‍🧑🏻",
		plaincode: "01963"
	},
	{
		unicode: "🧑🏽‍🤝‍🧑🏼",
		plaincode: "01964"
	},
	{
		unicode: "🧑🏽‍🤝‍🧑🏽",
		plaincode: "01965"
	},
	{
		unicode: "🧑🏽‍🤝‍🧑🏾",
		plaincode: "01966"
	},
	{
		unicode: "🧑🏽‍🤝‍🧑🏿",
		plaincode: "01967"
	},
	{
		unicode: "🧑🏾‍🤝‍🧑🏻",
		plaincode: "01968"
	},
	{
		unicode: "🧑🏾‍🤝‍🧑🏼",
		plaincode: "01969"
	},
	{
		unicode: "🧑🏾‍🤝‍🧑🏽",
		plaincode: "01970"
	},
	{
		unicode: "🧑🏾‍🤝‍🧑🏾",
		plaincode: "01971"
	},
	{
		unicode: "🧑🏾‍🤝‍🧑🏿",
		plaincode: "01972"
	},
	{
		unicode: "🧑🏿‍🤝‍🧑🏻",
		plaincode: "01973"
	},
	{
		unicode: "🧑🏿‍🤝‍🧑🏼",
		plaincode: "01974"
	},
	{
		unicode: "🧑🏿‍🤝‍🧑🏽",
		plaincode: "01975"
	},
	{
		unicode: "🧑🏿‍🤝‍🧑🏾",
		plaincode: "01976"
	},
	{
		unicode: "🧑🏿‍🤝‍🧑🏿",
		plaincode: "01977"
	},
	{
		unicode: "👭",
		plaincode: "01978"
	},
	{
		unicode: "👭🏻",
		plaincode: "01979"
	},
	{
		unicode: "👩🏻‍🤝‍👩🏼",
		plaincode: "01980"
	},
	{
		unicode: "👩🏻‍🤝‍👩🏽",
		plaincode: "01981"
	},
	{
		unicode: "👩🏻‍🤝‍👩🏾",
		plaincode: "01982"
	},
	{
		unicode: "👩🏻‍🤝‍👩🏿",
		plaincode: "01983"
	},
	{
		unicode: "👩🏼‍🤝‍👩🏻",
		plaincode: "01984"
	},
	{
		unicode: "👭🏼",
		plaincode: "01985"
	},
	{
		unicode: "👩🏼‍🤝‍👩🏽",
		plaincode: "01986"
	},
	{
		unicode: "👩🏼‍🤝‍👩🏾",
		plaincode: "01987"
	},
	{
		unicode: "👩🏼‍🤝‍👩🏿",
		plaincode: "01988"
	},
	{
		unicode: "👩🏽‍🤝‍👩🏻",
		plaincode: "01989"
	},
	{
		unicode: "👩🏽‍🤝‍👩🏼",
		plaincode: "01990"
	},
	{
		unicode: "👭🏽",
		plaincode: "01991"
	},
	{
		unicode: "👩🏽‍🤝‍👩🏾",
		plaincode: "01992"
	},
	{
		unicode: "👩🏽‍🤝‍👩🏿",
		plaincode: "01993"
	},
	{
		unicode: "👩🏾‍🤝‍👩🏻",
		plaincode: "01994"
	},
	{
		unicode: "👩🏾‍🤝‍👩🏼",
		plaincode: "01995"
	},
	{
		unicode: "👩🏾‍🤝‍👩🏽",
		plaincode: "01996"
	},
	{
		unicode: "👭🏾",
		plaincode: "01997"
	},
	{
		unicode: "👩🏾‍🤝‍👩🏿",
		plaincode: "01998"
	},
	{
		unicode: "👩🏿‍🤝‍👩🏻",
		plaincode: "01999"
	},
	{
		unicode: "👩🏿‍🤝‍👩🏼",
		plaincode: "02000"
	},
	{
		unicode: "👩🏿‍🤝‍👩🏽",
		plaincode: "02001"
	},
	{
		unicode: "👩🏿‍🤝‍👩🏾",
		plaincode: "02002"
	},
	{
		unicode: "👭🏿",
		plaincode: "02003"
	},
	{
		unicode: "👫",
		plaincode: "02004"
	},
	{
		unicode: "👫🏻",
		plaincode: "02005"
	},
	{
		unicode: "👩🏻‍🤝‍👨🏼",
		plaincode: "02006"
	},
	{
		unicode: "👩🏻‍🤝‍👨🏽",
		plaincode: "02007"
	},
	{
		unicode: "👩🏻‍🤝‍👨🏾",
		plaincode: "02008"
	},
	{
		unicode: "👩🏻‍🤝‍👨🏿",
		plaincode: "02009"
	},
	{
		unicode: "👩🏼‍🤝‍👨🏻",
		plaincode: "02010"
	},
	{
		unicode: "👫🏼",
		plaincode: "02011"
	},
	{
		unicode: "👩🏼‍🤝‍👨🏽",
		plaincode: "02012"
	},
	{
		unicode: "👩🏼‍🤝‍👨🏾",
		plaincode: "02013"
	},
	{
		unicode: "👩🏼‍🤝‍👨🏿",
		plaincode: "02014"
	},
	{
		unicode: "👩🏽‍🤝‍👨🏻",
		plaincode: "02015"
	},
	{
		unicode: "👩🏽‍🤝‍👨🏼",
		plaincode: "02016"
	},
	{
		unicode: "👫🏽",
		plaincode: "02017"
	},
	{
		unicode: "👩🏽‍🤝‍👨🏾",
		plaincode: "02018"
	},
	{
		unicode: "👩🏽‍🤝‍👨🏿",
		plaincode: "02019"
	},
	{
		unicode: "👩🏾‍🤝‍👨🏻",
		plaincode: "02020"
	},
	{
		unicode: "👩🏾‍🤝‍👨🏼",
		plaincode: "02021"
	},
	{
		unicode: "👩🏾‍🤝‍👨🏽",
		plaincode: "02022"
	},
	{
		unicode: "👫🏾",
		plaincode: "02023"
	},
	{
		unicode: "👩🏾‍🤝‍👨🏿",
		plaincode: "02024"
	},
	{
		unicode: "👩🏿‍🤝‍👨🏻",
		plaincode: "02025"
	},
	{
		unicode: "👩🏿‍🤝‍👨🏼",
		plaincode: "02026"
	},
	{
		unicode: "👩🏿‍🤝‍👨🏽",
		plaincode: "02027"
	},
	{
		unicode: "👩🏿‍🤝‍👨🏾",
		plaincode: "02028"
	},
	{
		unicode: "👫🏿",
		plaincode: "02029"
	},
	{
		unicode: "👬",
		plaincode: "02030"
	},
	{
		unicode: "👬🏻",
		plaincode: "02031"
	},
	{
		unicode: "👨🏻‍🤝‍👨🏼",
		plaincode: "02032"
	},
	{
		unicode: "👨🏻‍🤝‍👨🏽",
		plaincode: "02033"
	},
	{
		unicode: "👨🏻‍🤝‍👨🏾",
		plaincode: "02034"
	},
	{
		unicode: "👨🏻‍🤝‍👨🏿",
		plaincode: "02035"
	},
	{
		unicode: "👨🏼‍🤝‍👨🏻",
		plaincode: "02036"
	},
	{
		unicode: "👬🏼",
		plaincode: "02037"
	},
	{
		unicode: "👨🏼‍🤝‍👨🏽",
		plaincode: "02038"
	},
	{
		unicode: "👨🏼‍🤝‍👨🏾",
		plaincode: "02039"
	},
	{
		unicode: "👨🏼‍🤝‍👨🏿",
		plaincode: "02040"
	},
	{
		unicode: "👨🏽‍🤝‍👨🏻",
		plaincode: "02041"
	},
	{
		unicode: "👨🏽‍🤝‍👨🏼",
		plaincode: "02042"
	},
	{
		unicode: "👬🏽",
		plaincode: "02043"
	},
	{
		unicode: "👨🏽‍🤝‍👨🏾",
		plaincode: "02044"
	},
	{
		unicode: "👨🏽‍🤝‍👨🏿",
		plaincode: "02045"
	},
	{
		unicode: "👨🏾‍🤝‍👨🏻",
		plaincode: "02046"
	},
	{
		unicode: "👨🏾‍🤝‍👨🏼",
		plaincode: "02047"
	},
	{
		unicode: "👨🏾‍🤝‍👨🏽",
		plaincode: "02048"
	},
	{
		unicode: "👬🏾",
		plaincode: "02049"
	},
	{
		unicode: "👨🏾‍🤝‍👨🏿",
		plaincode: "02050"
	},
	{
		unicode: "👨🏿‍🤝‍👨🏻",
		plaincode: "02051"
	},
	{
		unicode: "👨🏿‍🤝‍👨🏼",
		plaincode: "02052"
	},
	{
		unicode: "👨🏿‍🤝‍👨🏽",
		plaincode: "02053"
	},
	{
		unicode: "👨🏿‍🤝‍👨🏾",
		plaincode: "02054"
	},
	{
		unicode: "👬🏿",
		plaincode: "02055"
	},
	{
		unicode: "💏",
		plaincode: "02056"
	},
	{
		unicode: "💏🏻",
		plaincode: "02057"
	},
	{
		unicode: "💏🏼",
		plaincode: "02058"
	},
	{
		unicode: "💏🏽",
		plaincode: "02059"
	},
	{
		unicode: "💏🏾",
		plaincode: "02060"
	},
	{
		unicode: "💏🏿",
		plaincode: "02061"
	},
	{
		unicode: "🧑🏻‍❤️‍💋‍🧑🏼",
		plaincode: "02062"
	},
	{
		unicode: "🧑🏻‍❤️‍💋‍🧑🏽",
		plaincode: "02063"
	},
	{
		unicode: "🧑🏻‍❤️‍💋‍🧑🏾",
		plaincode: "02064"
	},
	{
		unicode: "🧑🏻‍❤️‍💋‍🧑🏿",
		plaincode: "02065"
	},
	{
		unicode: "🧑🏼‍❤️‍💋‍🧑🏻",
		plaincode: "02066"
	},
	{
		unicode: "🧑🏼‍❤️‍💋‍🧑🏽",
		plaincode: "02067"
	},
	{
		unicode: "🧑🏼‍❤️‍💋‍🧑🏾",
		plaincode: "02068"
	},
	{
		unicode: "🧑🏼‍❤️‍💋‍🧑🏿",
		plaincode: "02069"
	},
	{
		unicode: "🧑🏽‍❤️‍💋‍🧑🏻",
		plaincode: "02070"
	},
	{
		unicode: "🧑🏽‍❤️‍💋‍🧑🏼",
		plaincode: "02071"
	},
	{
		unicode: "🧑🏽‍❤️‍💋‍🧑🏾",
		plaincode: "02072"
	},
	{
		unicode: "🧑🏽‍❤️‍💋‍🧑🏿",
		plaincode: "02073"
	},
	{
		unicode: "🧑🏾‍❤️‍💋‍🧑🏻",
		plaincode: "02074"
	},
	{
		unicode: "🧑🏾‍❤️‍💋‍🧑🏼",
		plaincode: "02075"
	},
	{
		unicode: "🧑🏾‍❤️‍💋‍🧑🏽",
		plaincode: "02076"
	},
	{
		unicode: "🧑🏾‍❤️‍💋‍🧑🏿",
		plaincode: "02077"
	},
	{
		unicode: "🧑🏿‍❤️‍💋‍🧑🏻",
		plaincode: "02078"
	},
	{
		unicode: "🧑🏿‍❤️‍💋‍🧑🏼",
		plaincode: "02079"
	},
	{
		unicode: "🧑🏿‍❤️‍💋‍🧑🏽",
		plaincode: "02080"
	},
	{
		unicode: "🧑🏿‍❤️‍💋‍🧑🏾",
		plaincode: "02081"
	},
	{
		unicode: "👩‍❤️‍💋‍👨",
		plaincode: "02082"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👨🏻",
		plaincode: "02083"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👨🏼",
		plaincode: "02084"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👨🏽",
		plaincode: "02085"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👨🏾",
		plaincode: "02086"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👨🏿",
		plaincode: "02087"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👨🏻",
		plaincode: "02088"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👨🏼",
		plaincode: "02089"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👨🏽",
		plaincode: "02090"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👨🏾",
		plaincode: "02091"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👨🏿",
		plaincode: "02092"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👨🏻",
		plaincode: "02093"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👨🏼",
		plaincode: "02094"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👨🏽",
		plaincode: "02095"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👨🏾",
		plaincode: "02096"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👨🏿",
		plaincode: "02097"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👨🏻",
		plaincode: "02098"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👨🏼",
		plaincode: "02099"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👨🏽",
		plaincode: "02100"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👨🏾",
		plaincode: "02101"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👨🏿",
		plaincode: "02102"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👨🏻",
		plaincode: "02103"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👨🏼",
		plaincode: "02104"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👨🏽",
		plaincode: "02105"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👨🏾",
		plaincode: "02106"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👨🏿",
		plaincode: "02107"
	},
	{
		unicode: "👨‍❤️‍💋‍👨",
		plaincode: "02108"
	},
	{
		unicode: "👨🏻‍❤️‍💋‍👨🏻",
		plaincode: "02109"
	},
	{
		unicode: "👨🏻‍❤️‍💋‍👨🏼",
		plaincode: "02110"
	},
	{
		unicode: "👨🏻‍❤️‍💋‍👨🏽",
		plaincode: "02111"
	},
	{
		unicode: "👨🏻‍❤️‍💋‍👨🏾",
		plaincode: "02112"
	},
	{
		unicode: "👨🏻‍❤️‍💋‍👨🏿",
		plaincode: "02113"
	},
	{
		unicode: "👨🏼‍❤️‍💋‍👨🏻",
		plaincode: "02114"
	},
	{
		unicode: "👨🏼‍❤️‍💋‍👨🏼",
		plaincode: "02115"
	},
	{
		unicode: "👨🏼‍❤️‍💋‍👨🏽",
		plaincode: "02116"
	},
	{
		unicode: "👨🏼‍❤️‍💋‍👨🏾",
		plaincode: "02117"
	},
	{
		unicode: "👨🏼‍❤️‍💋‍👨🏿",
		plaincode: "02118"
	},
	{
		unicode: "👨🏽‍❤️‍💋‍👨🏻",
		plaincode: "02119"
	},
	{
		unicode: "👨🏽‍❤️‍💋‍👨🏼",
		plaincode: "02120"
	},
	{
		unicode: "👨🏽‍❤️‍💋‍👨🏽",
		plaincode: "02121"
	},
	{
		unicode: "👨🏽‍❤️‍💋‍👨🏾",
		plaincode: "02122"
	},
	{
		unicode: "👨🏽‍❤️‍💋‍👨🏿",
		plaincode: "02123"
	},
	{
		unicode: "👨🏾‍❤️‍💋‍👨🏻",
		plaincode: "02124"
	},
	{
		unicode: "👨🏾‍❤️‍💋‍👨🏼",
		plaincode: "02125"
	},
	{
		unicode: "👨🏾‍❤️‍💋‍👨🏽",
		plaincode: "02126"
	},
	{
		unicode: "👨🏾‍❤️‍💋‍👨🏾",
		plaincode: "02127"
	},
	{
		unicode: "👨🏾‍❤️‍💋‍👨🏿",
		plaincode: "02128"
	},
	{
		unicode: "👨🏿‍❤️‍💋‍👨🏻",
		plaincode: "02129"
	},
	{
		unicode: "👨🏿‍❤️‍💋‍👨🏼",
		plaincode: "02130"
	},
	{
		unicode: "👨🏿‍❤️‍💋‍👨🏽",
		plaincode: "02131"
	},
	{
		unicode: "👨🏿‍❤️‍💋‍👨🏾",
		plaincode: "02132"
	},
	{
		unicode: "👨🏿‍❤️‍💋‍👨🏿",
		plaincode: "02133"
	},
	{
		unicode: "👩‍❤️‍💋‍👩",
		plaincode: "02134"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👩🏻",
		plaincode: "02135"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👩🏼",
		plaincode: "02136"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👩🏽",
		plaincode: "02137"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👩🏾",
		plaincode: "02138"
	},
	{
		unicode: "👩🏻‍❤️‍💋‍👩🏿",
		plaincode: "02139"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👩🏻",
		plaincode: "02140"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👩🏼",
		plaincode: "02141"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👩🏽",
		plaincode: "02142"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👩🏾",
		plaincode: "02143"
	},
	{
		unicode: "👩🏼‍❤️‍💋‍👩🏿",
		plaincode: "02144"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👩🏻",
		plaincode: "02145"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👩🏼",
		plaincode: "02146"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👩🏽",
		plaincode: "02147"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👩🏾",
		plaincode: "02148"
	},
	{
		unicode: "👩🏽‍❤️‍💋‍👩🏿",
		plaincode: "02149"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👩🏻",
		plaincode: "02150"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👩🏼",
		plaincode: "02151"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👩🏽",
		plaincode: "02152"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👩🏾",
		plaincode: "02153"
	},
	{
		unicode: "👩🏾‍❤️‍💋‍👩🏿",
		plaincode: "02154"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👩🏻",
		plaincode: "02155"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👩🏼",
		plaincode: "02156"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👩🏽",
		plaincode: "02157"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👩🏾",
		plaincode: "02158"
	},
	{
		unicode: "👩🏿‍❤️‍💋‍👩🏿",
		plaincode: "02159"
	},
	{
		unicode: "💑",
		plaincode: "02160"
	},
	{
		unicode: "💑🏻",
		plaincode: "02161"
	},
	{
		unicode: "💑🏼",
		plaincode: "02162"
	},
	{
		unicode: "💑🏽",
		plaincode: "02163"
	},
	{
		unicode: "💑🏾",
		plaincode: "02164"
	},
	{
		unicode: "💑🏿",
		plaincode: "02165"
	},
	{
		unicode: "🧑🏻‍❤️‍🧑🏼",
		plaincode: "02166"
	},
	{
		unicode: "🧑🏻‍❤️‍🧑🏽",
		plaincode: "02167"
	},
	{
		unicode: "🧑🏻‍❤️‍🧑🏾",
		plaincode: "02168"
	},
	{
		unicode: "🧑🏻‍❤️‍🧑🏿",
		plaincode: "02169"
	},
	{
		unicode: "🧑🏼‍❤️‍🧑🏻",
		plaincode: "02170"
	},
	{
		unicode: "🧑🏼‍❤️‍🧑🏽",
		plaincode: "02171"
	},
	{
		unicode: "🧑🏼‍❤️‍🧑🏾",
		plaincode: "02172"
	},
	{
		unicode: "🧑🏼‍❤️‍🧑🏿",
		plaincode: "02173"
	},
	{
		unicode: "🧑🏽‍❤️‍🧑🏻",
		plaincode: "02174"
	},
	{
		unicode: "🧑🏽‍❤️‍🧑🏼",
		plaincode: "02175"
	},
	{
		unicode: "🧑🏽‍❤️‍🧑🏾",
		plaincode: "02176"
	},
	{
		unicode: "🧑🏽‍❤️‍🧑🏿",
		plaincode: "02177"
	},
	{
		unicode: "🧑🏾‍❤️‍🧑🏻",
		plaincode: "02178"
	},
	{
		unicode: "🧑🏾‍❤️‍🧑🏼",
		plaincode: "02179"
	},
	{
		unicode: "🧑🏾‍❤️‍🧑🏽",
		plaincode: "02180"
	},
	{
		unicode: "🧑🏾‍❤️‍🧑🏿",
		plaincode: "02181"
	},
	{
		unicode: "🧑🏿‍❤️‍🧑🏻",
		plaincode: "02182"
	},
	{
		unicode: "🧑🏿‍❤️‍🧑🏼",
		plaincode: "02183"
	},
	{
		unicode: "🧑🏿‍❤️‍🧑🏽",
		plaincode: "02184"
	},
	{
		unicode: "🧑🏿‍❤️‍🧑🏾",
		plaincode: "02185"
	},
	{
		unicode: "👩‍❤️‍👨",
		plaincode: "02186"
	},
	{
		unicode: "👩🏻‍❤️‍👨🏻",
		plaincode: "02187"
	},
	{
		unicode: "👩🏻‍❤️‍👨🏼",
		plaincode: "02188"
	},
	{
		unicode: "👩🏻‍❤️‍👨🏽",
		plaincode: "02189"
	},
	{
		unicode: "👩🏻‍❤️‍👨🏾",
		plaincode: "02190"
	},
	{
		unicode: "👩🏻‍❤️‍👨🏿",
		plaincode: "02191"
	},
	{
		unicode: "👩🏼‍❤️‍👨🏻",
		plaincode: "02192"
	},
	{
		unicode: "👩🏼‍❤️‍👨🏼",
		plaincode: "02193"
	},
	{
		unicode: "👩🏼‍❤️‍👨🏽",
		plaincode: "02194"
	},
	{
		unicode: "👩🏼‍❤️‍👨🏾",
		plaincode: "02195"
	},
	{
		unicode: "👩🏼‍❤️‍👨🏿",
		plaincode: "02196"
	},
	{
		unicode: "👩🏽‍❤️‍👨🏻",
		plaincode: "02197"
	},
	{
		unicode: "👩🏽‍❤️‍👨🏼",
		plaincode: "02198"
	},
	{
		unicode: "👩🏽‍❤️‍👨🏽",
		plaincode: "02199"
	},
	{
		unicode: "👩🏽‍❤️‍👨🏾",
		plaincode: "02200"
	},
	{
		unicode: "👩🏽‍❤️‍👨🏿",
		plaincode: "02201"
	},
	{
		unicode: "👩🏾‍❤️‍👨🏻",
		plaincode: "02202"
	},
	{
		unicode: "👩🏾‍❤️‍👨🏼",
		plaincode: "02203"
	},
	{
		unicode: "👩🏾‍❤️‍👨🏽",
		plaincode: "02204"
	},
	{
		unicode: "👩🏾‍❤️‍👨🏾",
		plaincode: "02205"
	},
	{
		unicode: "👩🏾‍❤️‍👨🏿",
		plaincode: "02206"
	},
	{
		unicode: "👩🏿‍❤️‍👨🏻",
		plaincode: "02207"
	},
	{
		unicode: "👩🏿‍❤️‍👨🏼",
		plaincode: "02208"
	},
	{
		unicode: "👩🏿‍❤️‍👨🏽",
		plaincode: "02209"
	},
	{
		unicode: "👩🏿‍❤️‍👨🏾",
		plaincode: "02210"
	},
	{
		unicode: "👩🏿‍❤️‍👨🏿",
		plaincode: "02211"
	},
	{
		unicode: "👨‍❤️‍👨",
		plaincode: "02212"
	},
	{
		unicode: "👨🏻‍❤️‍👨🏻",
		plaincode: "02213"
	},
	{
		unicode: "👨🏻‍❤️‍👨🏼",
		plaincode: "02214"
	},
	{
		unicode: "👨🏻‍❤️‍👨🏽",
		plaincode: "02215"
	},
	{
		unicode: "👨🏻‍❤️‍👨🏾",
		plaincode: "02216"
	},
	{
		unicode: "👨🏻‍❤️‍👨🏿",
		plaincode: "02217"
	},
	{
		unicode: "👨🏼‍❤️‍👨🏻",
		plaincode: "02218"
	},
	{
		unicode: "👨🏼‍❤️‍👨🏼",
		plaincode: "02219"
	},
	{
		unicode: "👨🏼‍❤️‍👨🏽",
		plaincode: "02220"
	},
	{
		unicode: "👨🏼‍❤️‍👨🏾",
		plaincode: "02221"
	},
	{
		unicode: "👨🏼‍❤️‍👨🏿",
		plaincode: "02222"
	},
	{
		unicode: "👨🏽‍❤️‍👨🏻",
		plaincode: "02223"
	},
	{
		unicode: "👨🏽‍❤️‍👨🏼",
		plaincode: "02224"
	},
	{
		unicode: "👨🏽‍❤️‍👨🏽",
		plaincode: "02225"
	},
	{
		unicode: "👨🏽‍❤️‍👨🏾",
		plaincode: "02226"
	},
	{
		unicode: "👨🏽‍❤️‍👨🏿",
		plaincode: "02227"
	},
	{
		unicode: "👨🏾‍❤️‍👨🏻",
		plaincode: "02228"
	},
	{
		unicode: "👨🏾‍❤️‍👨🏼",
		plaincode: "02229"
	},
	{
		unicode: "👨🏾‍❤️‍👨🏽",
		plaincode: "02230"
	},
	{
		unicode: "👨🏾‍❤️‍👨🏾",
		plaincode: "02231"
	},
	{
		unicode: "👨🏾‍❤️‍👨🏿",
		plaincode: "02232"
	},
	{
		unicode: "👨🏿‍❤️‍👨🏻",
		plaincode: "02233"
	},
	{
		unicode: "👨🏿‍❤️‍👨🏼",
		plaincode: "02234"
	},
	{
		unicode: "👨🏿‍❤️‍👨🏽",
		plaincode: "02235"
	},
	{
		unicode: "👨🏿‍❤️‍👨🏾",
		plaincode: "02236"
	},
	{
		unicode: "👨🏿‍❤️‍👨🏿",
		plaincode: "02237"
	},
	{
		unicode: "👩‍❤️‍👩",
		plaincode: "02238"
	},
	{
		unicode: "👩🏻‍❤️‍👩🏻",
		plaincode: "02239"
	},
	{
		unicode: "👩🏻‍❤️‍👩🏼",
		plaincode: "02240"
	},
	{
		unicode: "👩🏻‍❤️‍👩🏽",
		plaincode: "02241"
	},
	{
		unicode: "👩🏻‍❤️‍👩🏾",
		plaincode: "02242"
	},
	{
		unicode: "👩🏻‍❤️‍👩🏿",
		plaincode: "02243"
	},
	{
		unicode: "👩🏼‍❤️‍👩🏻",
		plaincode: "02244"
	},
	{
		unicode: "👩🏼‍❤️‍👩🏼",
		plaincode: "02245"
	},
	{
		unicode: "👩🏼‍❤️‍👩🏽",
		plaincode: "02246"
	},
	{
		unicode: "👩🏼‍❤️‍👩🏾",
		plaincode: "02247"
	},
	{
		unicode: "👩🏼‍❤️‍👩🏿",
		plaincode: "02248"
	},
	{
		unicode: "👩🏽‍❤️‍👩🏻",
		plaincode: "02249"
	},
	{
		unicode: "👩🏽‍❤️‍👩🏼",
		plaincode: "02250"
	},
	{
		unicode: "👩🏽‍❤️‍👩🏽",
		plaincode: "02251"
	},
	{
		unicode: "👩🏽‍❤️‍👩🏾",
		plaincode: "02252"
	},
	{
		unicode: "👩🏽‍❤️‍👩🏿",
		plaincode: "02253"
	},
	{
		unicode: "👩🏾‍❤️‍👩🏻",
		plaincode: "02254"
	},
	{
		unicode: "👩🏾‍❤️‍👩🏼",
		plaincode: "02255"
	},
	{
		unicode: "👩🏾‍❤️‍👩🏽",
		plaincode: "02256"
	},
	{
		unicode: "👩🏾‍❤️‍👩🏾",
		plaincode: "02257"
	},
	{
		unicode: "👩🏾‍❤️‍👩🏿",
		plaincode: "02258"
	},
	{
		unicode: "👩🏿‍❤️‍👩🏻",
		plaincode: "02259"
	},
	{
		unicode: "👩🏿‍❤️‍👩🏼",
		plaincode: "02260"
	},
	{
		unicode: "👩🏿‍❤️‍👩🏽",
		plaincode: "02261"
	},
	{
		unicode: "👩🏿‍❤️‍👩🏾",
		plaincode: "02262"
	},
	{
		unicode: "👩🏿‍❤️‍👩🏿",
		plaincode: "02263"
	},
	{
		unicode: "👪",
		plaincode: "02264"
	},
	{
		unicode: "👨‍👩‍👦",
		plaincode: "02265"
	},
	{
		unicode: "👨‍👩‍👧",
		plaincode: "02266"
	},
	{
		unicode: "👨‍👩‍👧‍👦",
		plaincode: "02267"
	},
	{
		unicode: "👨‍👩‍👦‍👦",
		plaincode: "02268"
	},
	{
		unicode: "👨‍👩‍👧‍👧",
		plaincode: "02269"
	},
	{
		unicode: "👨‍👨‍👦",
		plaincode: "02270"
	},
	{
		unicode: "👨‍👨‍👧",
		plaincode: "02271"
	},
	{
		unicode: "👨‍👨‍👧‍👦",
		plaincode: "02272"
	},
	{
		unicode: "👨‍👨‍👦‍👦",
		plaincode: "02273"
	},
	{
		unicode: "👨‍👨‍👧‍👧",
		plaincode: "02274"
	},
	{
		unicode: "👩‍👩‍👦",
		plaincode: "02275"
	},
	{
		unicode: "👩‍👩‍👧",
		plaincode: "02276"
	},
	{
		unicode: "👩‍👩‍👧‍👦",
		plaincode: "02277"
	},
	{
		unicode: "👩‍👩‍👦‍👦",
		plaincode: "02278"
	},
	{
		unicode: "👩‍👩‍👧‍👧",
		plaincode: "02279"
	},
	{
		unicode: "👨‍👦",
		plaincode: "02280"
	},
	{
		unicode: "👨‍👦‍👦",
		plaincode: "02281"
	},
	{
		unicode: "👨‍👧",
		plaincode: "02282"
	},
	{
		unicode: "👨‍👧‍👦",
		plaincode: "02283"
	},
	{
		unicode: "👨‍👧‍👧",
		plaincode: "02284"
	},
	{
		unicode: "👩‍👦",
		plaincode: "02285"
	},
	{
		unicode: "👩‍👦‍👦",
		plaincode: "02286"
	},
	{
		unicode: "👩‍👧",
		plaincode: "02287"
	},
	{
		unicode: "👩‍👧‍👦",
		plaincode: "02288"
	},
	{
		unicode: "👩‍👧‍👧",
		plaincode: "02289"
	},
	{
		unicode: "👤",
		plaincode: "02290"
	},
	{
		unicode: "👥",
		plaincode: "02291"
	},
	{
		unicode: "🫂",
		plaincode: "02292"
	},
	{
		unicode: "👣",
		plaincode: "02293"
	},
	{
		unicode: "🏻",
		plaincode: "02294"
	},
	{
		unicode: "🏼",
		plaincode: "02295"
	},
	{
		unicode: "🏽",
		plaincode: "02296"
	},
	{
		unicode: "🏾",
		plaincode: "02297"
	},
	{
		unicode: "🏿",
		plaincode: "02298"
	},
	{
		unicode: "🦰",
		plaincode: "02299"
	},
	{
		unicode: "🦱",
		plaincode: "02300"
	},
	{
		unicode: "🦳",
		plaincode: "02301"
	},
	{
		unicode: "🦲",
		plaincode: "02302"
	},
	{
		unicode: "🐵",
		plaincode: "02303"
	},
	{
		unicode: "🐒",
		plaincode: "02304"
	},
	{
		unicode: "🦍",
		plaincode: "02305"
	},
	{
		unicode: "🦧",
		plaincode: "02306"
	},
	{
		unicode: "🐶",
		plaincode: "02307"
	},
	{
		unicode: "🐕",
		plaincode: "02308"
	},
	{
		unicode: "🦮",
		plaincode: "02309"
	},
	{
		unicode: "🐕‍🦺",
		plaincode: "02310"
	},
	{
		unicode: "🐩",
		plaincode: "02311"
	},
	{
		unicode: "🐺",
		plaincode: "02312"
	},
	{
		unicode: "🦊",
		plaincode: "02313"
	},
	{
		unicode: "🦝",
		plaincode: "02314"
	},
	{
		unicode: "🐱",
		plaincode: "02315"
	},
	{
		unicode: "🐈",
		plaincode: "02316"
	},
	{
		unicode: "🐈‍⬛",
		plaincode: "02317"
	},
	{
		unicode: "🦁",
		plaincode: "02318"
	},
	{
		unicode: "🐯",
		plaincode: "02319"
	},
	{
		unicode: "🐅",
		plaincode: "02320"
	},
	{
		unicode: "🐆",
		plaincode: "02321"
	},
	{
		unicode: "🐴",
		plaincode: "02322"
	},
	{
		unicode: "🫎",
		plaincode: "02323"
	},
	{
		unicode: "🫏",
		plaincode: "02324"
	},
	{
		unicode: "🐎",
		plaincode: "02325"
	},
	{
		unicode: "🦄",
		plaincode: "02326"
	},
	{
		unicode: "🦓",
		plaincode: "02327"
	},
	{
		unicode: "🦌",
		plaincode: "02328"
	},
	{
		unicode: "🦬",
		plaincode: "02329"
	},
	{
		unicode: "🐮",
		plaincode: "02330"
	},
	{
		unicode: "🐂",
		plaincode: "02331"
	},
	{
		unicode: "🐃",
		plaincode: "02332"
	},
	{
		unicode: "🐄",
		plaincode: "02333"
	},
	{
		unicode: "🐷",
		plaincode: "02334"
	},
	{
		unicode: "🐖",
		plaincode: "02335"
	},
	{
		unicode: "🐗",
		plaincode: "02336"
	},
	{
		unicode: "🐽",
		plaincode: "02337"
	},
	{
		unicode: "🐏",
		plaincode: "02338"
	},
	{
		unicode: "🐑",
		plaincode: "02339"
	},
	{
		unicode: "🐐",
		plaincode: "02340"
	},
	{
		unicode: "🐪",
		plaincode: "02341"
	},
	{
		unicode: "🐫",
		plaincode: "02342"
	},
	{
		unicode: "🦙",
		plaincode: "02343"
	},
	{
		unicode: "🦒",
		plaincode: "02344"
	},
	{
		unicode: "🐘",
		plaincode: "02345"
	},
	{
		unicode: "🦣",
		plaincode: "02346"
	},
	{
		unicode: "🦏",
		plaincode: "02347"
	},
	{
		unicode: "🦛",
		plaincode: "02348"
	},
	{
		unicode: "🐭",
		plaincode: "02349"
	},
	{
		unicode: "🐁",
		plaincode: "02350"
	},
	{
		unicode: "🐀",
		plaincode: "02351"
	},
	{
		unicode: "🐹",
		plaincode: "02352"
	},
	{
		unicode: "🐰",
		plaincode: "02353"
	},
	{
		unicode: "🐇",
		plaincode: "02354"
	},
	{
		unicode: "🦫",
		plaincode: "02355"
	},
	{
		unicode: "🦔",
		plaincode: "02356"
	},
	{
		unicode: "🦇",
		plaincode: "02357"
	},
	{
		unicode: "🐻",
		plaincode: "02358"
	},
	{
		unicode: "🐻‍❄️",
		plaincode: "02359"
	},
	{
		unicode: "🐨",
		plaincode: "02360"
	},
	{
		unicode: "🐼",
		plaincode: "02361"
	},
	{
		unicode: "🦥",
		plaincode: "02362"
	},
	{
		unicode: "🦦",
		plaincode: "02363"
	},
	{
		unicode: "🦨",
		plaincode: "02364"
	},
	{
		unicode: "🦘",
		plaincode: "02365"
	},
	{
		unicode: "🦡",
		plaincode: "02366"
	},
	{
		unicode: "🐾",
		plaincode: "02367"
	},
	{
		unicode: "🦃",
		plaincode: "02368"
	},
	{
		unicode: "🐔",
		plaincode: "02369"
	},
	{
		unicode: "🐓",
		plaincode: "02370"
	},
	{
		unicode: "🐣",
		plaincode: "02371"
	},
	{
		unicode: "🐤",
		plaincode: "02372"
	},
	{
		unicode: "🐥",
		plaincode: "02373"
	},
	{
		unicode: "🐦",
		plaincode: "02374"
	},
	{
		unicode: "🐧",
		plaincode: "02375"
	},
	{
		unicode: "🦅",
		plaincode: "02376"
	},
	{
		unicode: "🦆",
		plaincode: "02377"
	},
	{
		unicode: "🦢",
		plaincode: "02378"
	},
	{
		unicode: "🦉",
		plaincode: "02379"
	},
	{
		unicode: "🦤",
		plaincode: "02380"
	},
	{
		unicode: "🪶",
		plaincode: "02381"
	},
	{
		unicode: "🦩",
		plaincode: "02382"
	},
	{
		unicode: "🦚",
		plaincode: "02383"
	},
	{
		unicode: "🦜",
		plaincode: "02384"
	},
	{
		unicode: "🪽",
		plaincode: "02385"
	},
	{
		unicode: "🐦‍⬛",
		plaincode: "02386"
	},
	{
		unicode: "🪿",
		plaincode: "02387"
	},
	{
		unicode: "🐸",
		plaincode: "02388"
	},
	{
		unicode: "🐊",
		plaincode: "02389"
	},
	{
		unicode: "🐢",
		plaincode: "02390"
	},
	{
		unicode: "🦎",
		plaincode: "02391"
	},
	{
		unicode: "🐍",
		plaincode: "02392"
	},
	{
		unicode: "🐲",
		plaincode: "02393"
	},
	{
		unicode: "🐉",
		plaincode: "02394"
	},
	{
		unicode: "🦕",
		plaincode: "02395"
	},
	{
		unicode: "🦖",
		plaincode: "02396"
	},
	{
		unicode: "🐳",
		plaincode: "02397"
	},
	{
		unicode: "🐋",
		plaincode: "02398"
	},
	{
		unicode: "🐬",
		plaincode: "02399"
	},
	{
		unicode: "🦭",
		plaincode: "02400"
	},
	{
		unicode: "🐟",
		plaincode: "02401"
	},
	{
		unicode: "🐠",
		plaincode: "02402"
	},
	{
		unicode: "🐡",
		plaincode: "02403"
	},
	{
		unicode: "🦈",
		plaincode: "02404"
	},
	{
		unicode: "🐙",
		plaincode: "02405"
	},
	{
		unicode: "🐚",
		plaincode: "02406"
	},
	{
		unicode: "🪸",
		plaincode: "02407"
	},
	{
		unicode: "🪼",
		plaincode: "02408"
	},
	{
		unicode: "🐌",
		plaincode: "02409"
	},
	{
		unicode: "🦋",
		plaincode: "02410"
	},
	{
		unicode: "🐛",
		plaincode: "02411"
	},
	{
		unicode: "🐜",
		plaincode: "02412"
	},
	{
		unicode: "🐝",
		plaincode: "02413"
	},
	{
		unicode: "🪲",
		plaincode: "02414"
	},
	{
		unicode: "🐞",
		plaincode: "02415"
	},
	{
		unicode: "🦗",
		plaincode: "02416"
	},
	{
		unicode: "🪳",
		plaincode: "02417"
	},
	{
		unicode: "🦂",
		plaincode: "02418"
	},
	{
		unicode: "🦟",
		plaincode: "02419"
	},
	{
		unicode: "🪰",
		plaincode: "02420"
	},
	{
		unicode: "🪱",
		plaincode: "02421"
	},
	{
		unicode: "🦠",
		plaincode: "02422"
	},
	{
		unicode: "💐",
		plaincode: "02423"
	},
	{
		unicode: "🌸",
		plaincode: "02424"
	},
	{
		unicode: "💮",
		plaincode: "02425"
	},
	{
		unicode: "🪷",
		plaincode: "02426"
	},
	{
		unicode: "🌹",
		plaincode: "02427"
	},
	{
		unicode: "🥀",
		plaincode: "02428"
	},
	{
		unicode: "🌺",
		plaincode: "02429"
	},
	{
		unicode: "🌻",
		plaincode: "02430"
	},
	{
		unicode: "🌼",
		plaincode: "02431"
	},
	{
		unicode: "🌷",
		plaincode: "02432"
	},
	{
		unicode: "🪻",
		plaincode: "02433"
	},
	{
		unicode: "🌱",
		plaincode: "02434"
	},
	{
		unicode: "🪴",
		plaincode: "02435"
	},
	{
		unicode: "🌲",
		plaincode: "02436"
	},
	{
		unicode: "🌳",
		plaincode: "02437"
	},
	{
		unicode: "🌴",
		plaincode: "02438"
	},
	{
		unicode: "🌵",
		plaincode: "02439"
	},
	{
		unicode: "🌾",
		plaincode: "02440"
	},
	{
		unicode: "🌿",
		plaincode: "02441"
	},
	{
		unicode: "🍀",
		plaincode: "02442"
	},
	{
		unicode: "🍁",
		plaincode: "02443"
	},
	{
		unicode: "🍂",
		plaincode: "02444"
	},
	{
		unicode: "🍃",
		plaincode: "02445"
	},
	{
		unicode: "🪹",
		plaincode: "02446"
	},
	{
		unicode: "🪺",
		plaincode: "02447"
	},
	{
		unicode: "🍄",
		plaincode: "02448"
	},
	{
		unicode: "🍇",
		plaincode: "02449"
	},
	{
		unicode: "🍈",
		plaincode: "02450"
	},
	{
		unicode: "🍉",
		plaincode: "02451"
	},
	{
		unicode: "🍊",
		plaincode: "02452"
	},
	{
		unicode: "🍋",
		plaincode: "02453"
	},
	{
		unicode: "🍌",
		plaincode: "02454"
	},
	{
		unicode: "🍍",
		plaincode: "02455"
	},
	{
		unicode: "🥭",
		plaincode: "02456"
	},
	{
		unicode: "🍎",
		plaincode: "02457"
	},
	{
		unicode: "🍏",
		plaincode: "02458"
	},
	{
		unicode: "🍐",
		plaincode: "02459"
	},
	{
		unicode: "🍑",
		plaincode: "02460"
	},
	{
		unicode: "🍒",
		plaincode: "02461"
	},
	{
		unicode: "🍓",
		plaincode: "02462"
	},
	{
		unicode: "🫐",
		plaincode: "02463"
	},
	{
		unicode: "🥝",
		plaincode: "02464"
	},
	{
		unicode: "🍅",
		plaincode: "02465"
	},
	{
		unicode: "🫒",
		plaincode: "02466"
	},
	{
		unicode: "🥥",
		plaincode: "02467"
	},
	{
		unicode: "🥑",
		plaincode: "02468"
	},
	{
		unicode: "🍆",
		plaincode: "02469"
	},
	{
		unicode: "🥔",
		plaincode: "02470"
	},
	{
		unicode: "🥕",
		plaincode: "02471"
	},
	{
		unicode: "🌽",
		plaincode: "02472"
	},
	{
		unicode: "🫑",
		plaincode: "02473"
	},
	{
		unicode: "🥒",
		plaincode: "02474"
	},
	{
		unicode: "🥬",
		plaincode: "02475"
	},
	{
		unicode: "🥦",
		plaincode: "02476"
	},
	{
		unicode: "🧄",
		plaincode: "02477"
	},
	{
		unicode: "🧅",
		plaincode: "02478"
	},
	{
		unicode: "🥜",
		plaincode: "02479"
	},
	{
		unicode: "🫘",
		plaincode: "02480"
	},
	{
		unicode: "🌰",
		plaincode: "02481"
	},
	{
		unicode: "🫚",
		plaincode: "02482"
	},
	{
		unicode: "🫛",
		plaincode: "02483"
	},
	{
		unicode: "🍞",
		plaincode: "02484"
	},
	{
		unicode: "🥐",
		plaincode: "02485"
	},
	{
		unicode: "🥖",
		plaincode: "02486"
	},
	{
		unicode: "🫓",
		plaincode: "02487"
	},
	{
		unicode: "🥨",
		plaincode: "02488"
	},
	{
		unicode: "🥯",
		plaincode: "02489"
	},
	{
		unicode: "🥞",
		plaincode: "02490"
	},
	{
		unicode: "🧇",
		plaincode: "02491"
	},
	{
		unicode: "🧀",
		plaincode: "02492"
	},
	{
		unicode: "🍖",
		plaincode: "02493"
	},
	{
		unicode: "🍗",
		plaincode: "02494"
	},
	{
		unicode: "🥩",
		plaincode: "02495"
	},
	{
		unicode: "🥓",
		plaincode: "02496"
	},
	{
		unicode: "🍔",
		plaincode: "02497"
	},
	{
		unicode: "🍟",
		plaincode: "02498"
	},
	{
		unicode: "🍕",
		plaincode: "02499"
	},
	{
		unicode: "🌭",
		plaincode: "02500"
	},
	{
		unicode: "🥪",
		plaincode: "02501"
	},
	{
		unicode: "🌮",
		plaincode: "02502"
	},
	{
		unicode: "🌯",
		plaincode: "02503"
	},
	{
		unicode: "🫔",
		plaincode: "02504"
	},
	{
		unicode: "🥙",
		plaincode: "02505"
	},
	{
		unicode: "🧆",
		plaincode: "02506"
	},
	{
		unicode: "🥚",
		plaincode: "02507"
	},
	{
		unicode: "🍳",
		plaincode: "02508"
	},
	{
		unicode: "🥘",
		plaincode: "02509"
	},
	{
		unicode: "🍲",
		plaincode: "02510"
	},
	{
		unicode: "🫕",
		plaincode: "02511"
	},
	{
		unicode: "🥣",
		plaincode: "02512"
	},
	{
		unicode: "🥗",
		plaincode: "02513"
	},
	{
		unicode: "🍿",
		plaincode: "02514"
	},
	{
		unicode: "🧈",
		plaincode: "02515"
	},
	{
		unicode: "🧂",
		plaincode: "02516"
	},
	{
		unicode: "🥫",
		plaincode: "02517"
	},
	{
		unicode: "🍱",
		plaincode: "02518"
	},
	{
		unicode: "🍘",
		plaincode: "02519"
	},
	{
		unicode: "🍙",
		plaincode: "02520"
	},
	{
		unicode: "🍚",
		plaincode: "02521"
	},
	{
		unicode: "🍛",
		plaincode: "02522"
	},
	{
		unicode: "🍜",
		plaincode: "02523"
	},
	{
		unicode: "🍝",
		plaincode: "02524"
	},
	{
		unicode: "🍠",
		plaincode: "02525"
	},
	{
		unicode: "🍢",
		plaincode: "02526"
	},
	{
		unicode: "🍣",
		plaincode: "02527"
	},
	{
		unicode: "🍤",
		plaincode: "02528"
	},
	{
		unicode: "🍥",
		plaincode: "02529"
	},
	{
		unicode: "🥮",
		plaincode: "02530"
	},
	{
		unicode: "🍡",
		plaincode: "02531"
	},
	{
		unicode: "🥟",
		plaincode: "02532"
	},
	{
		unicode: "🥠",
		plaincode: "02533"
	},
	{
		unicode: "🥡",
		plaincode: "02534"
	},
	{
		unicode: "🦀",
		plaincode: "02535"
	},
	{
		unicode: "🦞",
		plaincode: "02536"
	},
	{
		unicode: "🦐",
		plaincode: "02537"
	},
	{
		unicode: "🦑",
		plaincode: "02538"
	},
	{
		unicode: "🦪",
		plaincode: "02539"
	},
	{
		unicode: "🍦",
		plaincode: "02540"
	},
	{
		unicode: "🍧",
		plaincode: "02541"
	},
	{
		unicode: "🍨",
		plaincode: "02542"
	},
	{
		unicode: "🍩",
		plaincode: "02543"
	},
	{
		unicode: "🍪",
		plaincode: "02544"
	},
	{
		unicode: "🎂",
		plaincode: "02545"
	},
	{
		unicode: "🍰",
		plaincode: "02546"
	},
	{
		unicode: "🧁",
		plaincode: "02547"
	},
	{
		unicode: "🥧",
		plaincode: "02548"
	},
	{
		unicode: "🍫",
		plaincode: "02549"
	},
	{
		unicode: "🍬",
		plaincode: "02550"
	},
	{
		unicode: "🍭",
		plaincode: "02551"
	},
	{
		unicode: "🍮",
		plaincode: "02552"
	},
	{
		unicode: "🍯",
		plaincode: "02553"
	},
	{
		unicode: "🍼",
		plaincode: "02554"
	},
	{
		unicode: "🥛",
		plaincode: "02555"
	},
	{
		unicode: "☕",
		plaincode: "02556"
	},
	{
		unicode: "🫖",
		plaincode: "02557"
	},
	{
		unicode: "🍵",
		plaincode: "02558"
	},
	{
		unicode: "🍶",
		plaincode: "02559"
	},
	{
		unicode: "🍾",
		plaincode: "02560"
	},
	{
		unicode: "🍷",
		plaincode: "02561"
	},
	{
		unicode: "🍸",
		plaincode: "02562"
	},
	{
		unicode: "🍹",
		plaincode: "02563"
	},
	{
		unicode: "🍺",
		plaincode: "02564"
	},
	{
		unicode: "🍻",
		plaincode: "02565"
	},
	{
		unicode: "🥂",
		plaincode: "02566"
	},
	{
		unicode: "🥃",
		plaincode: "02567"
	},
	{
		unicode: "🫗",
		plaincode: "02568"
	},
	{
		unicode: "🥤",
		plaincode: "02569"
	},
	{
		unicode: "🧋",
		plaincode: "02570"
	},
	{
		unicode: "🧃",
		plaincode: "02571"
	},
	{
		unicode: "🧉",
		plaincode: "02572"
	},
	{
		unicode: "🧊",
		plaincode: "02573"
	},
	{
		unicode: "🥢",
		plaincode: "02574"
	},
	{
		unicode: "🍴",
		plaincode: "02575"
	},
	{
		unicode: "🥄",
		plaincode: "02576"
	},
	{
		unicode: "🔪",
		plaincode: "02577"
	},
	{
		unicode: "🫙",
		plaincode: "02578"
	},
	{
		unicode: "🏺",
		plaincode: "02579"
	},
	{
		unicode: "🌍",
		plaincode: "02580"
	},
	{
		unicode: "🌎",
		plaincode: "02581"
	},
	{
		unicode: "🌏",
		plaincode: "02582"
	},
	{
		unicode: "🌐",
		plaincode: "02583"
	},
	{
		unicode: "🗾",
		plaincode: "02584"
	},
	{
		unicode: "🧭",
		plaincode: "02585"
	},
	{
		unicode: "🌋",
		plaincode: "02586"
	},
	{
		unicode: "🗻",
		plaincode: "02587"
	},
	{
		unicode: "🧱",
		plaincode: "02588"
	},
	{
		unicode: "🪨",
		plaincode: "02589"
	},
	{
		unicode: "🪵",
		plaincode: "02590"
	},
	{
		unicode: "🛖",
		plaincode: "02591"
	},
	{
		unicode: "🏠",
		plaincode: "02592"
	},
	{
		unicode: "🏡",
		plaincode: "02593"
	},
	{
		unicode: "🏢",
		plaincode: "02594"
	},
	{
		unicode: "🏣",
		plaincode: "02595"
	},
	{
		unicode: "🏤",
		plaincode: "02596"
	},
	{
		unicode: "🏥",
		plaincode: "02597"
	},
	{
		unicode: "🏦",
		plaincode: "02598"
	},
	{
		unicode: "🏨",
		plaincode: "02599"
	},
	{
		unicode: "🏩",
		plaincode: "02600"
	},
	{
		unicode: "🏪",
		plaincode: "02601"
	},
	{
		unicode: "🏫",
		plaincode: "02602"
	},
	{
		unicode: "🏬",
		plaincode: "02603"
	},
	{
		unicode: "🏭",
		plaincode: "02604"
	},
	{
		unicode: "🏯",
		plaincode: "02605"
	},
	{
		unicode: "🏰",
		plaincode: "02606"
	},
	{
		unicode: "💒",
		plaincode: "02607"
	},
	{
		unicode: "🗼",
		plaincode: "02608"
	},
	{
		unicode: "🗽",
		plaincode: "02609"
	},
	{
		unicode: "⛪",
		plaincode: "02610"
	},
	{
		unicode: "🕌",
		plaincode: "02611"
	},
	{
		unicode: "🛕",
		plaincode: "02612"
	},
	{
		unicode: "🕍",
		plaincode: "02613"
	},
	{
		unicode: "🕋",
		plaincode: "02614"
	},
	{
		unicode: "⛲",
		plaincode: "02615"
	},
	{
		unicode: "⛺",
		plaincode: "02616"
	},
	{
		unicode: "🌁",
		plaincode: "02617"
	},
	{
		unicode: "🌃",
		plaincode: "02618"
	},
	{
		unicode: "🌄",
		plaincode: "02619"
	},
	{
		unicode: "🌅",
		plaincode: "02620"
	},
	{
		unicode: "🌆",
		plaincode: "02621"
	},
	{
		unicode: "🌇",
		plaincode: "02622"
	},
	{
		unicode: "🌉",
		plaincode: "02623"
	},
	{
		unicode: "🎠",
		plaincode: "02624"
	},
	{
		unicode: "🛝",
		plaincode: "02625"
	},
	{
		unicode: "🎡",
		plaincode: "02626"
	},
	{
		unicode: "🎢",
		plaincode: "02627"
	},
	{
		unicode: "💈",
		plaincode: "02628"
	},
	{
		unicode: "🎪",
		plaincode: "02629"
	},
	{
		unicode: "🚂",
		plaincode: "02630"
	},
	{
		unicode: "🚃",
		plaincode: "02631"
	},
	{
		unicode: "🚄",
		plaincode: "02632"
	},
	{
		unicode: "🚅",
		plaincode: "02633"
	},
	{
		unicode: "🚆",
		plaincode: "02634"
	},
	{
		unicode: "🚇",
		plaincode: "02635"
	},
	{
		unicode: "🚈",
		plaincode: "02636"
	},
	{
		unicode: "🚉",
		plaincode: "02637"
	},
	{
		unicode: "🚊",
		plaincode: "02638"
	},
	{
		unicode: "🚝",
		plaincode: "02639"
	},
	{
		unicode: "🚞",
		plaincode: "02640"
	},
	{
		unicode: "🚋",
		plaincode: "02641"
	},
	{
		unicode: "🚌",
		plaincode: "02642"
	},
	{
		unicode: "🚍",
		plaincode: "02643"
	},
	{
		unicode: "🚎",
		plaincode: "02644"
	},
	{
		unicode: "🚐",
		plaincode: "02645"
	},
	{
		unicode: "🚑",
		plaincode: "02646"
	},
	{
		unicode: "🚒",
		plaincode: "02647"
	},
	{
		unicode: "🚓",
		plaincode: "02648"
	},
	{
		unicode: "🚔",
		plaincode: "02649"
	},
	{
		unicode: "🚕",
		plaincode: "02650"
	},
	{
		unicode: "🚖",
		plaincode: "02651"
	},
	{
		unicode: "🚗",
		plaincode: "02652"
	},
	{
		unicode: "🚘",
		plaincode: "02653"
	},
	{
		unicode: "🚙",
		plaincode: "02654"
	},
	{
		unicode: "🛻",
		plaincode: "02655"
	},
	{
		unicode: "🚚",
		plaincode: "02656"
	},
	{
		unicode: "🚛",
		plaincode: "02657"
	},
	{
		unicode: "🚜",
		plaincode: "02658"
	},
	{
		unicode: "🛵",
		plaincode: "02659"
	},
	{
		unicode: "🦽",
		plaincode: "02660"
	},
	{
		unicode: "🦼",
		plaincode: "02661"
	},
	{
		unicode: "🛺",
		plaincode: "02662"
	},
	{
		unicode: "🚲",
		plaincode: "02663"
	},
	{
		unicode: "🛴",
		plaincode: "02664"
	},
	{
		unicode: "🛹",
		plaincode: "02665"
	},
	{
		unicode: "🛼",
		plaincode: "02666"
	},
	{
		unicode: "🚏",
		plaincode: "02667"
	},
	{
		unicode: "⛽",
		plaincode: "02668"
	},
	{
		unicode: "🛞",
		plaincode: "02669"
	},
	{
		unicode: "🚨",
		plaincode: "02670"
	},
	{
		unicode: "🚥",
		plaincode: "02671"
	},
	{
		unicode: "🚦",
		plaincode: "02672"
	},
	{
		unicode: "🛑",
		plaincode: "02673"
	},
	{
		unicode: "🚧",
		plaincode: "02674"
	},
	{
		unicode: "⚓",
		plaincode: "02675"
	},
	{
		unicode: "🛟",
		plaincode: "02676"
	},
	{
		unicode: "⛵",
		plaincode: "02677"
	},
	{
		unicode: "🛶",
		plaincode: "02678"
	},
	{
		unicode: "🚤",
		plaincode: "02679"
	},
	{
		unicode: "🚢",
		plaincode: "02680"
	},
	{
		unicode: "🛫",
		plaincode: "02681"
	},
	{
		unicode: "🛬",
		plaincode: "02682"
	},
	{
		unicode: "🪂",
		plaincode: "02683"
	},
	{
		unicode: "💺",
		plaincode: "02684"
	},
	{
		unicode: "🚁",
		plaincode: "02685"
	},
	{
		unicode: "🚟",
		plaincode: "02686"
	},
	{
		unicode: "🚠",
		plaincode: "02687"
	},
	{
		unicode: "🚡",
		plaincode: "02688"
	},
	{
		unicode: "🚀",
		plaincode: "02689"
	},
	{
		unicode: "🛸",
		plaincode: "02690"
	},
	{
		unicode: "🧳",
		plaincode: "02691"
	},
	{
		unicode: "⌛",
		plaincode: "02692"
	},
	{
		unicode: "⏳",
		plaincode: "02693"
	},
	{
		unicode: "⌚",
		plaincode: "02694"
	},
	{
		unicode: "⏰",
		plaincode: "02695"
	},
	{
		unicode: "🕛",
		plaincode: "02696"
	},
	{
		unicode: "🕧",
		plaincode: "02697"
	},
	{
		unicode: "🕐",
		plaincode: "02698"
	},
	{
		unicode: "🕜",
		plaincode: "02699"
	},
	{
		unicode: "🕑",
		plaincode: "02700"
	},
	{
		unicode: "🕝",
		plaincode: "02701"
	},
	{
		unicode: "🕒",
		plaincode: "02702"
	},
	{
		unicode: "🕞",
		plaincode: "02703"
	},
	{
		unicode: "🕓",
		plaincode: "02704"
	},
	{
		unicode: "🕟",
		plaincode: "02705"
	},
	{
		unicode: "🕔",
		plaincode: "02706"
	},
	{
		unicode: "🕠",
		plaincode: "02707"
	},
	{
		unicode: "🕕",
		plaincode: "02708"
	},
	{
		unicode: "🕡",
		plaincode: "02709"
	},
	{
		unicode: "🕖",
		plaincode: "02710"
	},
	{
		unicode: "🕢",
		plaincode: "02711"
	},
	{
		unicode: "🕗",
		plaincode: "02712"
	},
	{
		unicode: "🕣",
		plaincode: "02713"
	},
	{
		unicode: "🕘",
		plaincode: "02714"
	},
	{
		unicode: "🕤",
		plaincode: "02715"
	},
	{
		unicode: "🕙",
		plaincode: "02716"
	},
	{
		unicode: "🕥",
		plaincode: "02717"
	},
	{
		unicode: "🕚",
		plaincode: "02718"
	},
	{
		unicode: "🕦",
		plaincode: "02719"
	},
	{
		unicode: "🌑",
		plaincode: "02720"
	},
	{
		unicode: "🌒",
		plaincode: "02721"
	},
	{
		unicode: "🌓",
		plaincode: "02722"
	},
	{
		unicode: "🌔",
		plaincode: "02723"
	},
	{
		unicode: "🌕",
		plaincode: "02724"
	},
	{
		unicode: "🌖",
		plaincode: "02725"
	},
	{
		unicode: "🌗",
		plaincode: "02726"
	},
	{
		unicode: "🌘",
		plaincode: "02727"
	},
	{
		unicode: "🌙",
		plaincode: "02728"
	},
	{
		unicode: "🌚",
		plaincode: "02729"
	},
	{
		unicode: "🌛",
		plaincode: "02730"
	},
	{
		unicode: "🌜",
		plaincode: "02731"
	},
	{
		unicode: "🌝",
		plaincode: "02732"
	},
	{
		unicode: "🌞",
		plaincode: "02733"
	},
	{
		unicode: "🪐",
		plaincode: "02734"
	},
	{
		unicode: "⭐",
		plaincode: "02735"
	},
	{
		unicode: "🌟",
		plaincode: "02736"
	},
	{
		unicode: "🌠",
		plaincode: "02737"
	},
	{
		unicode: "🌌",
		plaincode: "02738"
	},
	{
		unicode: "⛅",
		plaincode: "02739"
	},
	{
		unicode: "🌀",
		plaincode: "02740"
	},
	{
		unicode: "🌈",
		plaincode: "02741"
	},
	{
		unicode: "🌂",
		plaincode: "02742"
	},
	{
		unicode: "☔",
		plaincode: "02743"
	},
	{
		unicode: "⚡",
		plaincode: "02744"
	},
	{
		unicode: "⛄",
		plaincode: "02745"
	},
	{
		unicode: "🔥",
		plaincode: "02746"
	},
	{
		unicode: "💧",
		plaincode: "02747"
	},
	{
		unicode: "🌊",
		plaincode: "02748"
	},
	{
		unicode: "🎃",
		plaincode: "02749"
	},
	{
		unicode: "🎄",
		plaincode: "02750"
	},
	{
		unicode: "🎆",
		plaincode: "02751"
	},
	{
		unicode: "🎇",
		plaincode: "02752"
	},
	{
		unicode: "🧨",
		plaincode: "02753"
	},
	{
		unicode: "✨",
		plaincode: "02754"
	},
	{
		unicode: "🎈",
		plaincode: "02755"
	},
	{
		unicode: "🎉",
		plaincode: "02756"
	},
	{
		unicode: "🎊",
		plaincode: "02757"
	},
	{
		unicode: "🎋",
		plaincode: "02758"
	},
	{
		unicode: "🎍",
		plaincode: "02759"
	},
	{
		unicode: "🎎",
		plaincode: "02760"
	},
	{
		unicode: "🎏",
		plaincode: "02761"
	},
	{
		unicode: "🎐",
		plaincode: "02762"
	},
	{
		unicode: "🎑",
		plaincode: "02763"
	},
	{
		unicode: "🧧",
		plaincode: "02764"
	},
	{
		unicode: "🎀",
		plaincode: "02765"
	},
	{
		unicode: "🎁",
		plaincode: "02766"
	},
	{
		unicode: "🎫",
		plaincode: "02767"
	},
	{
		unicode: "🏆",
		plaincode: "02768"
	},
	{
		unicode: "🏅",
		plaincode: "02769"
	},
	{
		unicode: "🥇",
		plaincode: "02770"
	},
	{
		unicode: "🥈",
		plaincode: "02771"
	},
	{
		unicode: "🥉",
		plaincode: "02772"
	},
	{
		unicode: "⚽",
		plaincode: "02773"
	},
	{
		unicode: "⚾",
		plaincode: "02774"
	},
	{
		unicode: "🥎",
		plaincode: "02775"
	},
	{
		unicode: "🏀",
		plaincode: "02776"
	},
	{
		unicode: "🏐",
		plaincode: "02777"
	},
	{
		unicode: "🏈",
		plaincode: "02778"
	},
	{
		unicode: "🏉",
		plaincode: "02779"
	},
	{
		unicode: "🎾",
		plaincode: "02780"
	},
	{
		unicode: "🥏",
		plaincode: "02781"
	},
	{
		unicode: "🎳",
		plaincode: "02782"
	},
	{
		unicode: "🏏",
		plaincode: "02783"
	},
	{
		unicode: "🏑",
		plaincode: "02784"
	},
	{
		unicode: "🏒",
		plaincode: "02785"
	},
	{
		unicode: "🥍",
		plaincode: "02786"
	},
	{
		unicode: "🏓",
		plaincode: "02787"
	},
	{
		unicode: "🏸",
		plaincode: "02788"
	},
	{
		unicode: "🥊",
		plaincode: "02789"
	},
	{
		unicode: "🥋",
		plaincode: "02790"
	},
	{
		unicode: "🥅",
		plaincode: "02791"
	},
	{
		unicode: "⛳",
		plaincode: "02792"
	},
	{
		unicode: "🎣",
		plaincode: "02793"
	},
	{
		unicode: "🤿",
		plaincode: "02794"
	},
	{
		unicode: "🎽",
		plaincode: "02795"
	},
	{
		unicode: "🎿",
		plaincode: "02796"
	},
	{
		unicode: "🛷",
		plaincode: "02797"
	},
	{
		unicode: "🥌",
		plaincode: "02798"
	},
	{
		unicode: "🎯",
		plaincode: "02799"
	},
	{
		unicode: "🪀",
		plaincode: "02800"
	},
	{
		unicode: "🪁",
		plaincode: "02801"
	},
	{
		unicode: "🔫",
		plaincode: "02802"
	},
	{
		unicode: "🎱",
		plaincode: "02803"
	},
	{
		unicode: "🔮",
		plaincode: "02804"
	},
	{
		unicode: "🪄",
		plaincode: "02805"
	},
	{
		unicode: "🎮",
		plaincode: "02806"
	},
	{
		unicode: "🎰",
		plaincode: "02807"
	},
	{
		unicode: "🎲",
		plaincode: "02808"
	},
	{
		unicode: "🧩",
		plaincode: "02809"
	},
	{
		unicode: "🧸",
		plaincode: "02810"
	},
	{
		unicode: "🪅",
		plaincode: "02811"
	},
	{
		unicode: "🪩",
		plaincode: "02812"
	},
	{
		unicode: "🪆",
		plaincode: "02813"
	},
	{
		unicode: "🃏",
		plaincode: "02814"
	},
	{
		unicode: "🀄",
		plaincode: "02815"
	},
	{
		unicode: "🎴",
		plaincode: "02816"
	},
	{
		unicode: "🎭",
		plaincode: "02817"
	},
	{
		unicode: "🎨",
		plaincode: "02818"
	},
	{
		unicode: "🧵",
		plaincode: "02819"
	},
	{
		unicode: "🪡",
		plaincode: "02820"
	},
	{
		unicode: "🧶",
		plaincode: "02821"
	},
	{
		unicode: "🪢",
		plaincode: "02822"
	},
	{
		unicode: "👓",
		plaincode: "02823"
	},
	{
		unicode: "🥽",
		plaincode: "02824"
	},
	{
		unicode: "🥼",
		plaincode: "02825"
	},
	{
		unicode: "🦺",
		plaincode: "02826"
	},
	{
		unicode: "👔",
		plaincode: "02827"
	},
	{
		unicode: "👕",
		plaincode: "02828"
	},
	{
		unicode: "👖",
		plaincode: "02829"
	},
	{
		unicode: "🧣",
		plaincode: "02830"
	},
	{
		unicode: "🧤",
		plaincode: "02831"
	},
	{
		unicode: "🧥",
		plaincode: "02832"
	},
	{
		unicode: "🧦",
		plaincode: "02833"
	},
	{
		unicode: "👗",
		plaincode: "02834"
	},
	{
		unicode: "👘",
		plaincode: "02835"
	},
	{
		unicode: "🥻",
		plaincode: "02836"
	},
	{
		unicode: "🩱",
		plaincode: "02837"
	},
	{
		unicode: "🩲",
		plaincode: "02838"
	},
	{
		unicode: "🩳",
		plaincode: "02839"
	},
	{
		unicode: "👙",
		plaincode: "02840"
	},
	{
		unicode: "👚",
		plaincode: "02841"
	},
	{
		unicode: "🪭",
		plaincode: "02842"
	},
	{
		unicode: "👛",
		plaincode: "02843"
	},
	{
		unicode: "👜",
		plaincode: "02844"
	},
	{
		unicode: "👝",
		plaincode: "02845"
	},
	{
		unicode: "🎒",
		plaincode: "02846"
	},
	{
		unicode: "🩴",
		plaincode: "02847"
	},
	{
		unicode: "👞",
		plaincode: "02848"
	},
	{
		unicode: "👟",
		plaincode: "02849"
	},
	{
		unicode: "🥾",
		plaincode: "02850"
	},
	{
		unicode: "🥿",
		plaincode: "02851"
	},
	{
		unicode: "👠",
		plaincode: "02852"
	},
	{
		unicode: "👡",
		plaincode: "02853"
	},
	{
		unicode: "🩰",
		plaincode: "02854"
	},
	{
		unicode: "👢",
		plaincode: "02855"
	},
	{
		unicode: "🪮",
		plaincode: "02856"
	},
	{
		unicode: "👑",
		plaincode: "02857"
	},
	{
		unicode: "👒",
		plaincode: "02858"
	},
	{
		unicode: "🎩",
		plaincode: "02859"
	},
	{
		unicode: "🎓",
		plaincode: "02860"
	},
	{
		unicode: "🧢",
		plaincode: "02861"
	},
	{
		unicode: "🪖",
		plaincode: "02862"
	},
	{
		unicode: "📿",
		plaincode: "02863"
	},
	{
		unicode: "💄",
		plaincode: "02864"
	},
	{
		unicode: "💍",
		plaincode: "02865"
	},
	{
		unicode: "💎",
		plaincode: "02866"
	},
	{
		unicode: "🔇",
		plaincode: "02867"
	},
	{
		unicode: "🔈",
		plaincode: "02868"
	},
	{
		unicode: "🔉",
		plaincode: "02869"
	},
	{
		unicode: "🔊",
		plaincode: "02870"
	},
	{
		unicode: "📢",
		plaincode: "02871"
	},
	{
		unicode: "📣",
		plaincode: "02872"
	},
	{
		unicode: "📯",
		plaincode: "02873"
	},
	{
		unicode: "🔔",
		plaincode: "02874"
	},
	{
		unicode: "🔕",
		plaincode: "02875"
	},
	{
		unicode: "🎼",
		plaincode: "02876"
	},
	{
		unicode: "🎵",
		plaincode: "02877"
	},
	{
		unicode: "🎶",
		plaincode: "02878"
	},
	{
		unicode: "🎤",
		plaincode: "02879"
	},
	{
		unicode: "🎧",
		plaincode: "02880"
	},
	{
		unicode: "📻",
		plaincode: "02881"
	},
	{
		unicode: "🎷",
		plaincode: "02882"
	},
	{
		unicode: "🪗",
		plaincode: "02883"
	},
	{
		unicode: "🎸",
		plaincode: "02884"
	},
	{
		unicode: "🎹",
		plaincode: "02885"
	},
	{
		unicode: "🎺",
		plaincode: "02886"
	},
	{
		unicode: "🎻",
		plaincode: "02887"
	},
	{
		unicode: "🪕",
		plaincode: "02888"
	},
	{
		unicode: "🥁",
		plaincode: "02889"
	},
	{
		unicode: "🪘",
		plaincode: "02890"
	},
	{
		unicode: "🪇",
		plaincode: "02891"
	},
	{
		unicode: "🪈",
		plaincode: "02892"
	},
	{
		unicode: "📱",
		plaincode: "02893"
	},
	{
		unicode: "📲",
		plaincode: "02894"
	},
	{
		unicode: "📞",
		plaincode: "02895"
	},
	{
		unicode: "📟",
		plaincode: "02896"
	},
	{
		unicode: "📠",
		plaincode: "02897"
	},
	{
		unicode: "🔋",
		plaincode: "02898"
	},
	{
		unicode: "🪫",
		plaincode: "02899"
	},
	{
		unicode: "🔌",
		plaincode: "02900"
	},
	{
		unicode: "💻",
		plaincode: "02901"
	},
	{
		unicode: "💽",
		plaincode: "02902"
	},
	{
		unicode: "💾",
		plaincode: "02903"
	},
	{
		unicode: "💿",
		plaincode: "02904"
	},
	{
		unicode: "📀",
		plaincode: "02905"
	},
	{
		unicode: "🧮",
		plaincode: "02906"
	},
	{
		unicode: "🎥",
		plaincode: "02907"
	},
	{
		unicode: "🎬",
		plaincode: "02908"
	},
	{
		unicode: "📺",
		plaincode: "02909"
	},
	{
		unicode: "📷",
		plaincode: "02910"
	},
	{
		unicode: "📸",
		plaincode: "02911"
	},
	{
		unicode: "📹",
		plaincode: "02912"
	},
	{
		unicode: "📼",
		plaincode: "02913"
	},
	{
		unicode: "🔍",
		plaincode: "02914"
	},
	{
		unicode: "🔎",
		plaincode: "02915"
	},
	{
		unicode: "💡",
		plaincode: "02916"
	},
	{
		unicode: "🔦",
		plaincode: "02917"
	},
	{
		unicode: "🏮",
		plaincode: "02918"
	},
	{
		unicode: "🪔",
		plaincode: "02919"
	},
	{
		unicode: "📔",
		plaincode: "02920"
	},
	{
		unicode: "📕",
		plaincode: "02921"
	},
	{
		unicode: "📖",
		plaincode: "02922"
	},
	{
		unicode: "📗",
		plaincode: "02923"
	},
	{
		unicode: "📘",
		plaincode: "02924"
	},
	{
		unicode: "📙",
		plaincode: "02925"
	},
	{
		unicode: "📚",
		plaincode: "02926"
	},
	{
		unicode: "📓",
		plaincode: "02927"
	},
	{
		unicode: "📒",
		plaincode: "02928"
	},
	{
		unicode: "📃",
		plaincode: "02929"
	},
	{
		unicode: "📜",
		plaincode: "02930"
	},
	{
		unicode: "📄",
		plaincode: "02931"
	},
	{
		unicode: "📰",
		plaincode: "02932"
	},
	{
		unicode: "📑",
		plaincode: "02933"
	},
	{
		unicode: "🔖",
		plaincode: "02934"
	},
	{
		unicode: "💰",
		plaincode: "02935"
	},
	{
		unicode: "🪙",
		plaincode: "02936"
	},
	{
		unicode: "💴",
		plaincode: "02937"
	},
	{
		unicode: "💵",
		plaincode: "02938"
	},
	{
		unicode: "💶",
		plaincode: "02939"
	},
	{
		unicode: "💷",
		plaincode: "02940"
	},
	{
		unicode: "💸",
		plaincode: "02941"
	},
	{
		unicode: "💳",
		plaincode: "02942"
	},
	{
		unicode: "🧾",
		plaincode: "02943"
	},
	{
		unicode: "💹",
		plaincode: "02944"
	},
	{
		unicode: "📧",
		plaincode: "02945"
	},
	{
		unicode: "📨",
		plaincode: "02946"
	},
	{
		unicode: "📩",
		plaincode: "02947"
	},
	{
		unicode: "📤",
		plaincode: "02948"
	},
	{
		unicode: "📥",
		plaincode: "02949"
	},
	{
		unicode: "📦",
		plaincode: "02950"
	},
	{
		unicode: "📫",
		plaincode: "02951"
	},
	{
		unicode: "📪",
		plaincode: "02952"
	},
	{
		unicode: "📬",
		plaincode: "02953"
	},
	{
		unicode: "📭",
		plaincode: "02954"
	},
	{
		unicode: "📮",
		plaincode: "02955"
	},
	{
		unicode: "📝",
		plaincode: "02956"
	},
	{
		unicode: "💼",
		plaincode: "02957"
	},
	{
		unicode: "📁",
		plaincode: "02958"
	},
	{
		unicode: "📂",
		plaincode: "02959"
	},
	{
		unicode: "📅",
		plaincode: "02960"
	},
	{
		unicode: "📆",
		plaincode: "02961"
	},
	{
		unicode: "📇",
		plaincode: "02962"
	},
	{
		unicode: "📈",
		plaincode: "02963"
	},
	{
		unicode: "📉",
		plaincode: "02964"
	},
	{
		unicode: "📊",
		plaincode: "02965"
	},
	{
		unicode: "📋",
		plaincode: "02966"
	},
	{
		unicode: "📌",
		plaincode: "02967"
	},
	{
		unicode: "📍",
		plaincode: "02968"
	},
	{
		unicode: "📎",
		plaincode: "02969"
	},
	{
		unicode: "📏",
		plaincode: "02970"
	},
	{
		unicode: "📐",
		plaincode: "02971"
	},
	{
		unicode: "🔒",
		plaincode: "02972"
	},
	{
		unicode: "🔓",
		plaincode: "02973"
	},
	{
		unicode: "🔏",
		plaincode: "02974"
	},
	{
		unicode: "🔐",
		plaincode: "02975"
	},
	{
		unicode: "🔑",
		plaincode: "02976"
	},
	{
		unicode: "🔨",
		plaincode: "02977"
	},
	{
		unicode: "🪓",
		plaincode: "02978"
	},
	{
		unicode: "💣",
		plaincode: "02979"
	},
	{
		unicode: "🪃",
		plaincode: "02980"
	},
	{
		unicode: "🏹",
		plaincode: "02981"
	},
	{
		unicode: "🪚",
		plaincode: "02982"
	},
	{
		unicode: "🔧",
		plaincode: "02983"
	},
	{
		unicode: "🪛",
		plaincode: "02984"
	},
	{
		unicode: "🔩",
		plaincode: "02985"
	},
	{
		unicode: "🦯",
		plaincode: "02986"
	},
	{
		unicode: "🔗",
		plaincode: "02987"
	},
	{
		unicode: "🪝",
		plaincode: "02988"
	},
	{
		unicode: "🧰",
		plaincode: "02989"
	},
	{
		unicode: "🧲",
		plaincode: "02990"
	},
	{
		unicode: "🪜",
		plaincode: "02991"
	},
	{
		unicode: "🧪",
		plaincode: "02992"
	},
	{
		unicode: "🧫",
		plaincode: "02993"
	},
	{
		unicode: "🧬",
		plaincode: "02994"
	},
	{
		unicode: "🔬",
		plaincode: "02995"
	},
	{
		unicode: "🔭",
		plaincode: "02996"
	},
	{
		unicode: "📡",
		plaincode: "02997"
	},
	{
		unicode: "💉",
		plaincode: "02998"
	},
	{
		unicode: "🩸",
		plaincode: "02999"
	},
	{
		unicode: "💊",
		plaincode: "03000"
	},
	{
		unicode: "🩹",
		plaincode: "03001"
	},
	{
		unicode: "🩼",
		plaincode: "03002"
	},
	{
		unicode: "🩺",
		plaincode: "03003"
	},
	{
		unicode: "🩻",
		plaincode: "03004"
	},
	{
		unicode: "🚪",
		plaincode: "03005"
	},
	{
		unicode: "🛗",
		plaincode: "03006"
	},
	{
		unicode: "🪞",
		plaincode: "03007"
	},
	{
		unicode: "🪟",
		plaincode: "03008"
	},
	{
		unicode: "🪑",
		plaincode: "03009"
	},
	{
		unicode: "🚽",
		plaincode: "03010"
	},
	{
		unicode: "🪠",
		plaincode: "03011"
	},
	{
		unicode: "🚿",
		plaincode: "03012"
	},
	{
		unicode: "🛁",
		plaincode: "03013"
	},
	{
		unicode: "🪤",
		plaincode: "03014"
	},
	{
		unicode: "🪒",
		plaincode: "03015"
	},
	{
		unicode: "🧴",
		plaincode: "03016"
	},
	{
		unicode: "🧷",
		plaincode: "03017"
	},
	{
		unicode: "🧹",
		plaincode: "03018"
	},
	{
		unicode: "🧺",
		plaincode: "03019"
	},
	{
		unicode: "🧻",
		plaincode: "03020"
	},
	{
		unicode: "🪣",
		plaincode: "03021"
	},
	{
		unicode: "🧼",
		plaincode: "03022"
	},
	{
		unicode: "🫧",
		plaincode: "03023"
	},
	{
		unicode: "🪥",
		plaincode: "03024"
	},
	{
		unicode: "🧽",
		plaincode: "03025"
	},
	{
		unicode: "🧯",
		plaincode: "03026"
	},
	{
		unicode: "🛒",
		plaincode: "03027"
	},
	{
		unicode: "🚬",
		plaincode: "03028"
	},
	{
		unicode: "🪦",
		plaincode: "03029"
	},
	{
		unicode: "🧿",
		plaincode: "03030"
	},
	{
		unicode: "🪬",
		plaincode: "03031"
	},
	{
		unicode: "🗿",
		plaincode: "03032"
	},
	{
		unicode: "🪧",
		plaincode: "03033"
	},
	{
		unicode: "🪪",
		plaincode: "03034"
	},
	{
		unicode: "🏧",
		plaincode: "03035"
	},
	{
		unicode: "🚮",
		plaincode: "03036"
	},
	{
		unicode: "🚰",
		plaincode: "03037"
	},
	{
		unicode: "♿",
		plaincode: "03038"
	},
	{
		unicode: "🚹",
		plaincode: "03039"
	},
	{
		unicode: "🚺",
		plaincode: "03040"
	},
	{
		unicode: "🚻",
		plaincode: "03041"
	},
	{
		unicode: "🚼",
		plaincode: "03042"
	},
	{
		unicode: "🚾",
		plaincode: "03043"
	},
	{
		unicode: "🛂",
		plaincode: "03044"
	},
	{
		unicode: "🛃",
		plaincode: "03045"
	},
	{
		unicode: "🛄",
		plaincode: "03046"
	},
	{
		unicode: "🛅",
		plaincode: "03047"
	},
	{
		unicode: "🚸",
		plaincode: "03048"
	},
	{
		unicode: "⛔",
		plaincode: "03049"
	},
	{
		unicode: "🚫",
		plaincode: "03050"
	},
	{
		unicode: "🚳",
		plaincode: "03051"
	},
	{
		unicode: "🚭",
		plaincode: "03052"
	},
	{
		unicode: "🚯",
		plaincode: "03053"
	},
	{
		unicode: "🚱",
		plaincode: "03054"
	},
	{
		unicode: "🚷",
		plaincode: "03055"
	},
	{
		unicode: "📵",
		plaincode: "03056"
	},
	{
		unicode: "🔞",
		plaincode: "03057"
	},
	{
		unicode: "🔃",
		plaincode: "03058"
	},
	{
		unicode: "🔄",
		plaincode: "03059"
	},
	{
		unicode: "🔙",
		plaincode: "03060"
	},
	{
		unicode: "🔚",
		plaincode: "03061"
	},
	{
		unicode: "🔛",
		plaincode: "03062"
	},
	{
		unicode: "🔜",
		plaincode: "03063"
	},
	{
		unicode: "🔝",
		plaincode: "03064"
	},
	{
		unicode: "🛐",
		plaincode: "03065"
	},
	{
		unicode: "🕎",
		plaincode: "03066"
	},
	{
		unicode: "🔯",
		plaincode: "03067"
	},
	{
		unicode: "🪯",
		plaincode: "03068"
	},
	{
		unicode: "♈",
		plaincode: "03069"
	},
	{
		unicode: "♉",
		plaincode: "03070"
	},
	{
		unicode: "♊",
		plaincode: "03071"
	},
	{
		unicode: "♋",
		plaincode: "03072"
	},
	{
		unicode: "♌",
		plaincode: "03073"
	},
	{
		unicode: "♍",
		plaincode: "03074"
	},
	{
		unicode: "♎",
		plaincode: "03075"
	},
	{
		unicode: "♏",
		plaincode: "03076"
	},
	{
		unicode: "♐",
		plaincode: "03077"
	},
	{
		unicode: "♑",
		plaincode: "03078"
	},
	{
		unicode: "♒",
		plaincode: "03079"
	},
	{
		unicode: "♓",
		plaincode: "03080"
	},
	{
		unicode: "⛎",
		plaincode: "03081"
	},
	{
		unicode: "🔀",
		plaincode: "03082"
	},
	{
		unicode: "🔁",
		plaincode: "03083"
	},
	{
		unicode: "🔂",
		plaincode: "03084"
	},
	{
		unicode: "⏩",
		plaincode: "03085"
	},
	{
		unicode: "⏪",
		plaincode: "03086"
	},
	{
		unicode: "🔼",
		plaincode: "03087"
	},
	{
		unicode: "⏫",
		plaincode: "03088"
	},
	{
		unicode: "🔽",
		plaincode: "03089"
	},
	{
		unicode: "⏬",
		plaincode: "03090"
	},
	{
		unicode: "🎦",
		plaincode: "03091"
	},
	{
		unicode: "🔅",
		plaincode: "03092"
	},
	{
		unicode: "🔆",
		plaincode: "03093"
	},
	{
		unicode: "📶",
		plaincode: "03094"
	},
	{
		unicode: "🛜",
		plaincode: "03095"
	},
	{
		unicode: "📳",
		plaincode: "03096"
	},
	{
		unicode: "📴",
		plaincode: "03097"
	},
	{
		unicode: "➕",
		plaincode: "03098"
	},
	{
		unicode: "➖",
		plaincode: "03099"
	},
	{
		unicode: "➗",
		plaincode: "03100"
	},
	{
		unicode: "🟰",
		plaincode: "03101"
	},
	{
		unicode: "❓",
		plaincode: "03102"
	},
	{
		unicode: "❔",
		plaincode: "03103"
	},
	{
		unicode: "❕",
		plaincode: "03104"
	},
	{
		unicode: "❗",
		plaincode: "03105"
	},
	{
		unicode: "💱",
		plaincode: "03106"
	},
	{
		unicode: "💲",
		plaincode: "03107"
	},
	{
		unicode: "🔱",
		plaincode: "03108"
	},
	{
		unicode: "📛",
		plaincode: "03109"
	},
	{
		unicode: "🔰",
		plaincode: "03110"
	},
	{
		unicode: "⭕",
		plaincode: "03111"
	},
	{
		unicode: "✅",
		plaincode: "03112"
	},
	{
		unicode: "❌",
		plaincode: "03113"
	},
	{
		unicode: "❎",
		plaincode: "03114"
	},
	{
		unicode: "➰",
		plaincode: "03115"
	},
	{
		unicode: "➿",
		plaincode: "03116"
	},
	{
		unicode: "#️⃣",
		plaincode: "03117"
	},
	{
		unicode: "*️⃣",
		plaincode: "03118"
	},
	{
		unicode: "0️⃣",
		plaincode: "03119"
	},
	{
		unicode: "1️⃣",
		plaincode: "03120"
	},
	{
		unicode: "2️⃣",
		plaincode: "03121"
	},
	{
		unicode: "3️⃣",
		plaincode: "03122"
	},
	{
		unicode: "4️⃣",
		plaincode: "03123"
	},
	{
		unicode: "5️⃣",
		plaincode: "03124"
	},
	{
		unicode: "6️⃣",
		plaincode: "03125"
	},
	{
		unicode: "7️⃣",
		plaincode: "03126"
	},
	{
		unicode: "8️⃣",
		plaincode: "03127"
	},
	{
		unicode: "9️⃣",
		plaincode: "03128"
	},
	{
		unicode: "🔟",
		plaincode: "03129"
	},
	{
		unicode: "🔠",
		plaincode: "03130"
	},
	{
		unicode: "🔡",
		plaincode: "03131"
	},
	{
		unicode: "🔢",
		plaincode: "03132"
	},
	{
		unicode: "🔣",
		plaincode: "03133"
	},
	{
		unicode: "🔤",
		plaincode: "03134"
	},
	{
		unicode: "🆎",
		plaincode: "03135"
	},
	{
		unicode: "🆑",
		plaincode: "03136"
	},
	{
		unicode: "🆒",
		plaincode: "03137"
	},
	{
		unicode: "🆓",
		plaincode: "03138"
	},
	{
		unicode: "🆔",
		plaincode: "03139"
	},
	{
		unicode: "🆕",
		plaincode: "03140"
	},
	{
		unicode: "🆖",
		plaincode: "03141"
	},
	{
		unicode: "🆗",
		plaincode: "03142"
	},
	{
		unicode: "🆘",
		plaincode: "03143"
	},
	{
		unicode: "🆙",
		plaincode: "03144"
	},
	{
		unicode: "🆚",
		plaincode: "03145"
	},
	{
		unicode: "🈁",
		plaincode: "03146"
	},
	{
		unicode: "🈶",
		plaincode: "03147"
	},
	{
		unicode: "🈯",
		plaincode: "03148"
	},
	{
		unicode: "🉐",
		plaincode: "03149"
	},
	{
		unicode: "🈹",
		plaincode: "03150"
	},
	{
		unicode: "🈚",
		plaincode: "03151"
	},
	{
		unicode: "🈲",
		plaincode: "03152"
	},
	{
		unicode: "🉑",
		plaincode: "03153"
	},
	{
		unicode: "🈸",
		plaincode: "03154"
	},
	{
		unicode: "🈴",
		plaincode: "03155"
	},
	{
		unicode: "🈳",
		plaincode: "03156"
	},
	{
		unicode: "🈺",
		plaincode: "03157"
	},
	{
		unicode: "🈵",
		plaincode: "03158"
	},
	{
		unicode: "🔴",
		plaincode: "03159"
	},
	{
		unicode: "🟠",
		plaincode: "03160"
	},
	{
		unicode: "🟡",
		plaincode: "03161"
	},
	{
		unicode: "🟢",
		plaincode: "03162"
	},
	{
		unicode: "🔵",
		plaincode: "03163"
	},
	{
		unicode: "🟣",
		plaincode: "03164"
	},
	{
		unicode: "🟤",
		plaincode: "03165"
	},
	{
		unicode: "⚫",
		plaincode: "03166"
	},
	{
		unicode: "⚪",
		plaincode: "03167"
	},
	{
		unicode: "🟥",
		plaincode: "03168"
	},
	{
		unicode: "🟧",
		plaincode: "03169"
	},
	{
		unicode: "🟨",
		plaincode: "03170"
	},
	{
		unicode: "🟩",
		plaincode: "03171"
	},
	{
		unicode: "🟦",
		plaincode: "03172"
	},
	{
		unicode: "🟪",
		plaincode: "03173"
	},
	{
		unicode: "🟫",
		plaincode: "03174"
	},
	{
		unicode: "⬛",
		plaincode: "03175"
	},
	{
		unicode: "⬜",
		plaincode: "03176"
	},
	{
		unicode: "◾",
		plaincode: "03177"
	},
	{
		unicode: "◽",
		plaincode: "03178"
	},
	{
		unicode: "🔶",
		plaincode: "03179"
	},
	{
		unicode: "🔷",
		plaincode: "03180"
	},
	{
		unicode: "🔸",
		plaincode: "03181"
	},
	{
		unicode: "🔹",
		plaincode: "03182"
	},
	{
		unicode: "🔺",
		plaincode: "03183"
	},
	{
		unicode: "🔻",
		plaincode: "03184"
	},
	{
		unicode: "💠",
		plaincode: "03185"
	},
	{
		unicode: "🔘",
		plaincode: "03186"
	},
	{
		unicode: "🔳",
		plaincode: "03187"
	},
	{
		unicode: "🔲",
		plaincode: "03188"
	},
	{
		unicode: "🏁",
		plaincode: "03189"
	},
	{
		unicode: "🚩",
		plaincode: "03190"
	},
	{
		unicode: "🎌",
		plaincode: "03191"
	},
	{
		unicode: "🏴",
		plaincode: "03192"
	},
	{
		unicode: "🏳️‍🌈",
		plaincode: "03193"
	},
	{
		unicode: "🏳️‍⚧️",
		plaincode: "03194"
	},
	{
		unicode: "🏴‍☠️",
		plaincode: "03195"
	},
	{
		unicode: "🇦🇨",
		plaincode: "03196"
	},
	{
		unicode: "🇦🇩",
		plaincode: "03197"
	},
	{
		unicode: "🇦🇪",
		plaincode: "03198"
	},
	{
		unicode: "🇦🇫",
		plaincode: "03199"
	},
	{
		unicode: "🇦🇬",
		plaincode: "03200"
	},
	{
		unicode: "🇦🇮",
		plaincode: "03201"
	},
	{
		unicode: "🇦🇱",
		plaincode: "03202"
	},
	{
		unicode: "🇦🇲",
		plaincode: "03203"
	},
	{
		unicode: "🇦🇴",
		plaincode: "03204"
	},
	{
		unicode: "🇦🇶",
		plaincode: "03205"
	},
	{
		unicode: "🇦🇷",
		plaincode: "03206"
	},
	{
		unicode: "🇦🇸",
		plaincode: "03207"
	},
	{
		unicode: "🇦🇹",
		plaincode: "03208"
	},
	{
		unicode: "🇦🇺",
		plaincode: "03209"
	},
	{
		unicode: "🇦🇼",
		plaincode: "03210"
	},
	{
		unicode: "🇦🇽",
		plaincode: "03211"
	},
	{
		unicode: "🇦🇿",
		plaincode: "03212"
	},
	{
		unicode: "🇧🇦",
		plaincode: "03213"
	},
	{
		unicode: "🇧🇧",
		plaincode: "03214"
	},
	{
		unicode: "🇧🇩",
		plaincode: "03215"
	},
	{
		unicode: "🇧🇪",
		plaincode: "03216"
	},
	{
		unicode: "🇧🇫",
		plaincode: "03217"
	},
	{
		unicode: "🇧🇬",
		plaincode: "03218"
	},
	{
		unicode: "🇧🇭",
		plaincode: "03219"
	},
	{
		unicode: "🇧🇮",
		plaincode: "03220"
	},
	{
		unicode: "🇧🇯",
		plaincode: "03221"
	},
	{
		unicode: "🇧🇱",
		plaincode: "03222"
	},
	{
		unicode: "🇧🇲",
		plaincode: "03223"
	},
	{
		unicode: "🇧🇳",
		plaincode: "03224"
	},
	{
		unicode: "🇧🇴",
		plaincode: "03225"
	},
	{
		unicode: "🇧🇶",
		plaincode: "03226"
	},
	{
		unicode: "🇧🇷",
		plaincode: "03227"
	},
	{
		unicode: "🇧🇸",
		plaincode: "03228"
	},
	{
		unicode: "🇧🇹",
		plaincode: "03229"
	},
	{
		unicode: "🇧🇻",
		plaincode: "03230"
	},
	{
		unicode: "🇧🇼",
		plaincode: "03231"
	},
	{
		unicode: "🇧🇾",
		plaincode: "03232"
	},
	{
		unicode: "🇧🇿",
		plaincode: "03233"
	},
	{
		unicode: "🇨🇦",
		plaincode: "03234"
	},
	{
		unicode: "🇨🇨",
		plaincode: "03235"
	},
	{
		unicode: "🇨🇩",
		plaincode: "03236"
	},
	{
		unicode: "🇨🇫",
		plaincode: "03237"
	},
	{
		unicode: "🇨🇬",
		plaincode: "03238"
	},
	{
		unicode: "🇨🇭",
		plaincode: "03239"
	},
	{
		unicode: "🇨🇮",
		plaincode: "03240"
	},
	{
		unicode: "🇨🇰",
		plaincode: "03241"
	},
	{
		unicode: "🇨🇱",
		plaincode: "03242"
	},
	{
		unicode: "🇨🇲",
		plaincode: "03243"
	},
	{
		unicode: "🇨🇳",
		plaincode: "03244"
	},
	{
		unicode: "🇨🇴",
		plaincode: "03245"
	},
	{
		unicode: "🇨🇵",
		plaincode: "03246"
	},
	{
		unicode: "🇨🇷",
		plaincode: "03247"
	},
	{
		unicode: "🇨🇺",
		plaincode: "03248"
	},
	{
		unicode: "🇨🇻",
		plaincode: "03249"
	},
	{
		unicode: "🇨🇼",
		plaincode: "03250"
	},
	{
		unicode: "🇨🇽",
		plaincode: "03251"
	},
	{
		unicode: "🇨🇾",
		plaincode: "03252"
	},
	{
		unicode: "🇨🇿",
		plaincode: "03253"
	},
	{
		unicode: "🇩🇪",
		plaincode: "03254"
	},
	{
		unicode: "🇩🇬",
		plaincode: "03255"
	},
	{
		unicode: "🇩🇯",
		plaincode: "03256"
	},
	{
		unicode: "🇩🇰",
		plaincode: "03257"
	},
	{
		unicode: "🇩🇲",
		plaincode: "03258"
	},
	{
		unicode: "🇩🇴",
		plaincode: "03259"
	},
	{
		unicode: "🇩🇿",
		plaincode: "03260"
	},
	{
		unicode: "🇪🇦",
		plaincode: "03261"
	},
	{
		unicode: "🇪🇨",
		plaincode: "03262"
	},
	{
		unicode: "🇪🇪",
		plaincode: "03263"
	},
	{
		unicode: "🇪🇬",
		plaincode: "03264"
	},
	{
		unicode: "🇪🇭",
		plaincode: "03265"
	},
	{
		unicode: "🇪🇷",
		plaincode: "03266"
	},
	{
		unicode: "🇪🇸",
		plaincode: "03267"
	},
	{
		unicode: "🇪🇹",
		plaincode: "03268"
	},
	{
		unicode: "🇪🇺",
		plaincode: "03269"
	},
	{
		unicode: "🇫🇮",
		plaincode: "03270"
	},
	{
		unicode: "🇫🇯",
		plaincode: "03271"
	},
	{
		unicode: "🇫🇰",
		plaincode: "03272"
	},
	{
		unicode: "🇫🇲",
		plaincode: "03273"
	},
	{
		unicode: "🇫🇴",
		plaincode: "03274"
	},
	{
		unicode: "🇫🇷",
		plaincode: "03275"
	},
	{
		unicode: "🇬🇦",
		plaincode: "03276"
	},
	{
		unicode: "🇬🇧",
		plaincode: "03277"
	},
	{
		unicode: "🇬🇩",
		plaincode: "03278"
	},
	{
		unicode: "🇬🇪",
		plaincode: "03279"
	},
	{
		unicode: "🇬🇫",
		plaincode: "03280"
	},
	{
		unicode: "🇬🇬",
		plaincode: "03281"
	},
	{
		unicode: "🇬🇭",
		plaincode: "03282"
	},
	{
		unicode: "🇬🇮",
		plaincode: "03283"
	},
	{
		unicode: "🇬🇱",
		plaincode: "03284"
	},
	{
		unicode: "🇬🇲",
		plaincode: "03285"
	},
	{
		unicode: "🇬🇳",
		plaincode: "03286"
	},
	{
		unicode: "🇬🇵",
		plaincode: "03287"
	},
	{
		unicode: "🇬🇶",
		plaincode: "03288"
	},
	{
		unicode: "🇬🇷",
		plaincode: "03289"
	},
	{
		unicode: "🇬🇸",
		plaincode: "03290"
	},
	{
		unicode: "🇬🇹",
		plaincode: "03291"
	},
	{
		unicode: "🇬🇺",
		plaincode: "03292"
	},
	{
		unicode: "🇬🇼",
		plaincode: "03293"
	},
	{
		unicode: "🇬🇾",
		plaincode: "03294"
	},
	{
		unicode: "🇭🇰",
		plaincode: "03295"
	},
	{
		unicode: "🇭🇲",
		plaincode: "03296"
	},
	{
		unicode: "🇭🇳",
		plaincode: "03297"
	},
	{
		unicode: "🇭🇷",
		plaincode: "03298"
	},
	{
		unicode: "🇭🇹",
		plaincode: "03299"
	},
	{
		unicode: "🇭🇺",
		plaincode: "03300"
	},
	{
		unicode: "🇮🇨",
		plaincode: "03301"
	},
	{
		unicode: "🇮🇩",
		plaincode: "03302"
	},
	{
		unicode: "🇮🇪",
		plaincode: "03303"
	},
	{
		unicode: "🇮🇱",
		plaincode: "03304"
	},
	{
		unicode: "🇮🇲",
		plaincode: "03305"
	},
	{
		unicode: "🇮🇳",
		plaincode: "03306"
	},
	{
		unicode: "🇮🇴",
		plaincode: "03307"
	},
	{
		unicode: "🇮🇶",
		plaincode: "03308"
	},
	{
		unicode: "🇮🇷",
		plaincode: "03309"
	},
	{
		unicode: "🇮🇸",
		plaincode: "03310"
	},
	{
		unicode: "🇮🇹",
		plaincode: "03311"
	},
	{
		unicode: "🇯🇪",
		plaincode: "03312"
	},
	{
		unicode: "🇯🇲",
		plaincode: "03313"
	},
	{
		unicode: "🇯🇴",
		plaincode: "03314"
	},
	{
		unicode: "🇯🇵",
		plaincode: "03315"
	},
	{
		unicode: "🇰🇪",
		plaincode: "03316"
	},
	{
		unicode: "🇰🇬",
		plaincode: "03317"
	},
	{
		unicode: "🇰🇭",
		plaincode: "03318"
	},
	{
		unicode: "🇰🇮",
		plaincode: "03319"
	},
	{
		unicode: "🇰🇲",
		plaincode: "03320"
	},
	{
		unicode: "🇰🇳",
		plaincode: "03321"
	},
	{
		unicode: "🇰🇵",
		plaincode: "03322"
	},
	{
		unicode: "🇰🇷",
		plaincode: "03323"
	},
	{
		unicode: "🇰🇼",
		plaincode: "03324"
	},
	{
		unicode: "🇰🇾",
		plaincode: "03325"
	},
	{
		unicode: "🇰🇿",
		plaincode: "03326"
	},
	{
		unicode: "🇱🇦",
		plaincode: "03327"
	},
	{
		unicode: "🇱🇧",
		plaincode: "03328"
	},
	{
		unicode: "🇱🇨",
		plaincode: "03329"
	},
	{
		unicode: "🇱🇮",
		plaincode: "03330"
	},
	{
		unicode: "🇱🇰",
		plaincode: "03331"
	},
	{
		unicode: "🇱🇷",
		plaincode: "03332"
	},
	{
		unicode: "🇱🇸",
		plaincode: "03333"
	},
	{
		unicode: "🇱🇹",
		plaincode: "03334"
	},
	{
		unicode: "🇱🇺",
		plaincode: "03335"
	},
	{
		unicode: "🇱🇻",
		plaincode: "03336"
	},
	{
		unicode: "🇱🇾",
		plaincode: "03337"
	},
	{
		unicode: "🇲🇦",
		plaincode: "03338"
	},
	{
		unicode: "🇲🇨",
		plaincode: "03339"
	},
	{
		unicode: "🇲🇩",
		plaincode: "03340"
	},
	{
		unicode: "🇲🇪",
		plaincode: "03341"
	},
	{
		unicode: "🇲🇫",
		plaincode: "03342"
	},
	{
		unicode: "🇲🇬",
		plaincode: "03343"
	},
	{
		unicode: "🇲🇭",
		plaincode: "03344"
	},
	{
		unicode: "🇲🇰",
		plaincode: "03345"
	},
	{
		unicode: "🇲🇱",
		plaincode: "03346"
	},
	{
		unicode: "🇲🇲",
		plaincode: "03347"
	},
	{
		unicode: "🇲🇳",
		plaincode: "03348"
	},
	{
		unicode: "🇲🇴",
		plaincode: "03349"
	},
	{
		unicode: "🇲🇵",
		plaincode: "03350"
	},
	{
		unicode: "🇲🇶",
		plaincode: "03351"
	},
	{
		unicode: "🇲🇷",
		plaincode: "03352"
	},
	{
		unicode: "🇲🇸",
		plaincode: "03353"
	},
	{
		unicode: "🇲🇹",
		plaincode: "03354"
	},
	{
		unicode: "🇲🇺",
		plaincode: "03355"
	},
	{
		unicode: "🇲🇻",
		plaincode: "03356"
	},
	{
		unicode: "🇲🇼",
		plaincode: "03357"
	},
	{
		unicode: "🇲🇽",
		plaincode: "03358"
	},
	{
		unicode: "🇲🇾",
		plaincode: "03359"
	},
	{
		unicode: "🇲🇿",
		plaincode: "03360"
	},
	{
		unicode: "🇳🇦",
		plaincode: "03361"
	},
	{
		unicode: "🇳🇨",
		plaincode: "03362"
	},
	{
		unicode: "🇳🇪",
		plaincode: "03363"
	},
	{
		unicode: "🇳🇫",
		plaincode: "03364"
	},
	{
		unicode: "🇳🇬",
		plaincode: "03365"
	},
	{
		unicode: "🇳🇮",
		plaincode: "03366"
	},
	{
		unicode: "🇳🇱",
		plaincode: "03367"
	},
	{
		unicode: "🇳🇴",
		plaincode: "03368"
	},
	{
		unicode: "🇳🇵",
		plaincode: "03369"
	},
	{
		unicode: "🇳🇷",
		plaincode: "03370"
	},
	{
		unicode: "🇳🇺",
		plaincode: "03371"
	},
	{
		unicode: "🇳🇿",
		plaincode: "03372"
	},
	{
		unicode: "🇴🇲",
		plaincode: "03373"
	},
	{
		unicode: "🇵🇦",
		plaincode: "03374"
	},
	{
		unicode: "🇵🇪",
		plaincode: "03375"
	},
	{
		unicode: "🇵🇫",
		plaincode: "03376"
	},
	{
		unicode: "🇵🇬",
		plaincode: "03377"
	},
	{
		unicode: "🇵🇭",
		plaincode: "03378"
	},
	{
		unicode: "🇵🇰",
		plaincode: "03379"
	},
	{
		unicode: "🇵🇱",
		plaincode: "03380"
	},
	{
		unicode: "🇵🇲",
		plaincode: "03381"
	},
	{
		unicode: "🇵🇳",
		plaincode: "03382"
	},
	{
		unicode: "🇵🇷",
		plaincode: "03383"
	},
	{
		unicode: "🇵🇸",
		plaincode: "03384"
	},
	{
		unicode: "🇵🇹",
		plaincode: "03385"
	},
	{
		unicode: "🇵🇼",
		plaincode: "03386"
	},
	{
		unicode: "🇵🇾",
		plaincode: "03387"
	},
	{
		unicode: "🇶🇦",
		plaincode: "03388"
	},
	{
		unicode: "🇷🇪",
		plaincode: "03389"
	},
	{
		unicode: "🇷🇴",
		plaincode: "03390"
	},
	{
		unicode: "🇷🇸",
		plaincode: "03391"
	},
	{
		unicode: "🇷🇺",
		plaincode: "03392"
	},
	{
		unicode: "🇷🇼",
		plaincode: "03393"
	},
	{
		unicode: "🇸🇦",
		plaincode: "03394"
	},
	{
		unicode: "🇸🇧",
		plaincode: "03395"
	},
	{
		unicode: "🇸🇨",
		plaincode: "03396"
	},
	{
		unicode: "🇸🇩",
		plaincode: "03397"
	},
	{
		unicode: "🇸🇪",
		plaincode: "03398"
	},
	{
		unicode: "🇸🇬",
		plaincode: "03399"
	},
	{
		unicode: "🇸🇭",
		plaincode: "03400"
	},
	{
		unicode: "🇸🇮",
		plaincode: "03401"
	},
	{
		unicode: "🇸🇯",
		plaincode: "03402"
	},
	{
		unicode: "🇸🇰",
		plaincode: "03403"
	},
	{
		unicode: "🇸🇱",
		plaincode: "03404"
	},
	{
		unicode: "🇸🇲",
		plaincode: "03405"
	},
	{
		unicode: "🇸🇳",
		plaincode: "03406"
	},
	{
		unicode: "🇸🇴",
		plaincode: "03407"
	},
	{
		unicode: "🇸🇷",
		plaincode: "03408"
	},
	{
		unicode: "🇸🇸",
		plaincode: "03409"
	},
	{
		unicode: "🇸🇹",
		plaincode: "03410"
	},
	{
		unicode: "🇸🇻",
		plaincode: "03411"
	},
	{
		unicode: "🇸🇽",
		plaincode: "03412"
	},
	{
		unicode: "🇸🇾",
		plaincode: "03413"
	},
	{
		unicode: "🇸🇿",
		plaincode: "03414"
	},
	{
		unicode: "🇹🇦",
		plaincode: "03415"
	},
	{
		unicode: "🇹🇨",
		plaincode: "03416"
	},
	{
		unicode: "🇹🇩",
		plaincode: "03417"
	},
	{
		unicode: "🇹🇫",
		plaincode: "03418"
	},
	{
		unicode: "🇹🇬",
		plaincode: "03419"
	},
	{
		unicode: "🇹🇭",
		plaincode: "03420"
	},
	{
		unicode: "🇹🇯",
		plaincode: "03421"
	},
	{
		unicode: "🇹🇰",
		plaincode: "03422"
	},
	{
		unicode: "🇹🇱",
		plaincode: "03423"
	},
	{
		unicode: "🇹🇲",
		plaincode: "03424"
	},
	{
		unicode: "🇹🇳",
		plaincode: "03425"
	},
	{
		unicode: "🇹🇴",
		plaincode: "03426"
	},
	{
		unicode: "🇹🇷",
		plaincode: "03427"
	},
	{
		unicode: "🇹🇹",
		plaincode: "03428"
	},
	{
		unicode: "🇹🇻",
		plaincode: "03429"
	},
	{
		unicode: "🇹🇼",
		plaincode: "03430"
	},
	{
		unicode: "🇹🇿",
		plaincode: "03431"
	},
	{
		unicode: "🇺🇦",
		plaincode: "03432"
	},
	{
		unicode: "🇺🇬",
		plaincode: "03433"
	},
	{
		unicode: "🇺🇲",
		plaincode: "03434"
	},
	{
		unicode: "🇺🇳",
		plaincode: "03435"
	},
	{
		unicode: "🇺🇸",
		plaincode: "03436"
	},
	{
		unicode: "🇺🇾",
		plaincode: "03437"
	},
	{
		unicode: "🇺🇿",
		plaincode: "03438"
	},
	{
		unicode: "🇻🇦",
		plaincode: "03439"
	},
	{
		unicode: "🇻🇨",
		plaincode: "03440"
	},
	{
		unicode: "🇻🇪",
		plaincode: "03441"
	},
	{
		unicode: "🇻🇬",
		plaincode: "03442"
	},
	{
		unicode: "🇻🇮",
		plaincode: "03443"
	},
	{
		unicode: "🇻🇳",
		plaincode: "03444"
	},
	{
		unicode: "🇻🇺",
		plaincode: "03445"
	},
	{
		unicode: "🇼🇫",
		plaincode: "03446"
	},
	{
		unicode: "🇼🇸",
		plaincode: "03447"
	},
	{
		unicode: "🇽🇰",
		plaincode: "03448"
	},
	{
		unicode: "🇾🇪",
		plaincode: "03449"
	},
	{
		unicode: "🇾🇹",
		plaincode: "03450"
	},
	{
		unicode: "🇿🇦",
		plaincode: "03451"
	},
	{
		unicode: "🇿🇲",
		plaincode: "03452"
	},
	{
		unicode: "🇿🇼",
		plaincode: "03453"
	},
	{
		unicode: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
		plaincode: "03454"
	},
	{
		unicode: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
		plaincode: "03455"
	},
	{
		unicode: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
		plaincode: "03456"
	}
];

// to run this file: node --experimental-json-modules codebook-emojis.js
// import * as codebookRaw from './codebook-emojis.json' assert { type: 'json' }
const codebookRaw$1 = require$$0;

codebookEmojis.codebookRaw = codebookRaw$1;

var regexEmojis = {};

const emojiRegex$1 = ['\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFF\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFE\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFD\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFC\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])|\uD83E\uDEF1\uD83C\uDFFB\u200D\uD83E\uDEF2)(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDEF1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|(?:\uD83D[\uDC08\uDC26])\u200D\u2B1B|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC26\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]'];

regexEmojis.emojiRegex = emojiRegex$1;

var conversiontableEng = {};

const eng$2 = {
  plaincodeRegex: '0\\d{4}|[1-5]|(90[0-9]{1})|(6[0-9]{1})|(7[0-9]{1})|(8[0-9]{1})|(9[1-9]{1})',
  textRegex: '[a-z0-9\\s]|[,@#+-/.:!(=?)]',
  table: [
    { unicode: 'a', plaincode: '1' },
    { unicode: 'e', plaincode: '2' },
    { unicode: 'i', plaincode: '3' },
    { unicode: 'n', plaincode: '4' },
    { unicode: 'o', plaincode: '5' },
    { unicode: 't', plaincode: '60' },
    { unicode: 'b', plaincode: '61' },
    { unicode: 'c', plaincode: '62' },
    { unicode: 'd', plaincode: '63' },
    { unicode: 'f', plaincode: '64' },
    { unicode: 'g', plaincode: '65' },
    { unicode: 'h', plaincode: '66' },
    { unicode: 'j', plaincode: '67' },
    { unicode: 'k', plaincode: '68' },
    { unicode: 'l', plaincode: '69' },
    { unicode: 'm', plaincode: '70' },
    { unicode: 'p', plaincode: '71' },
    { unicode: 'q', plaincode: '72' },
    { unicode: 'r', plaincode: '73' },
    { unicode: 's', plaincode: '74' },
    { unicode: 'u', plaincode: '75' },
    { unicode: 'v', plaincode: '76' },
    { unicode: 'w', plaincode: '77' },
    { unicode: 'x', plaincode: '78' },
    { unicode: 'y', plaincode: '79' },
    { unicode: 'z', plaincode: '80' },
    { unicode: ',', plaincode: '84' },
    { unicode: '@', plaincode: '85' },
    { unicode: '#', plaincode: '86' },
    { unicode: '+', plaincode: '87' },
    { unicode: '-', plaincode: '88' },
    { unicode: '/', plaincode: '89' },
    { unicode: '0', plaincode: '900' },
    { unicode: '1', plaincode: '901' },
    { unicode: '2', plaincode: '902' },
    { unicode: '3', plaincode: '903' },
    { unicode: '4', plaincode: '904' },
    { unicode: '5', plaincode: '905' },
    { unicode: '6', plaincode: '906' },
    { unicode: '7', plaincode: '907' },
    { unicode: '8', plaincode: '908' },
    { unicode: '9', plaincode: '909' },
    { unicode: '.', plaincode: '91' },
    { unicode: ':', plaincode: '92' },
    { unicode: '\'', plaincode: '93' },
    { unicode: '!', plaincode: '94' },
    { unicode: '(', plaincode: '95' },
    { unicode: ')', plaincode: '96' },
    { unicode: '=', plaincode: '97' },
    { unicode: '?', plaincode: '98' },
    { unicode: ' ', plaincode: '99' }
  ]
};

conversiontableEng.eng = eng$2;

var conversiontableNob = {};

const nob$2 = {
  plaincodeRegex: '0\\d{4}|[1-5]|(90[0-9]{1})|(6[0-9]{1})|(7[0-9]{1})|(8[0-9]{1})|(9[1-9]{1})',
  textRegex: '[a-zæøå0-9\\s]|[,@#+-/.:!(=?)]',
  table: [
    { unicode: 'e', plaincode: '1' },
    { unicode: 'r', plaincode: '2' },
    { unicode: 't', plaincode: '3' },
    { unicode: 'n', plaincode: '4' },
    { unicode: 's', plaincode: '5' },
    { unicode: 'i', plaincode: '60' },
    { unicode: 'a', plaincode: '61' },
    { unicode: 'l', plaincode: '62' },
    { unicode: 'o', plaincode: '63' },
    { unicode: 'd', plaincode: '64' },
    { unicode: 'g', plaincode: '65' },
    { unicode: 'k', plaincode: '66' },
    { unicode: 'm', plaincode: '67' },
    { unicode: 'v', plaincode: '68' },
    { unicode: 'p', plaincode: '69' },
    { unicode: 'f', plaincode: '70' },
    { unicode: 'u', plaincode: '71' },
    { unicode: 'h', plaincode: '72' },
    { unicode: 'å', plaincode: '73' },
    { unicode: 'b', plaincode: '74' },
    { unicode: 'j', plaincode: '75' },
    { unicode: 'ø', plaincode: '76' },
    { unicode: 'y', plaincode: '77' },
    { unicode: 'c', plaincode: '78' },
    { unicode: 'æ', plaincode: '79' },
    { unicode: 'w', plaincode: '80' },
    { unicode: 'x', plaincode: '81' },
    { unicode: 'z', plaincode: '82' },
    { unicode: 'q', plaincode: '83' },
    { unicode: ',', plaincode: '84' },
    { unicode: '@', plaincode: '85' },
    { unicode: '#', plaincode: '86' },
    { unicode: '+', plaincode: '87' },
    { unicode: '-', plaincode: '88' },
    { unicode: '/', plaincode: '89' },
    { unicode: '0', plaincode: '900' },
    { unicode: '1', plaincode: '901' },
    { unicode: '2', plaincode: '902' },
    { unicode: '3', plaincode: '903' },
    { unicode: '4', plaincode: '904' },
    { unicode: '5', plaincode: '905' },
    { unicode: '6', plaincode: '906' },
    { unicode: '7', plaincode: '907' },
    { unicode: '8', plaincode: '908' },
    { unicode: '9', plaincode: '909' },
    { unicode: '.', plaincode: '91' },
    { unicode: ':', plaincode: '92' },
    { unicode: '\'', plaincode: '93' },
    { unicode: '!', plaincode: '94' },
    { unicode: '(', plaincode: '95' },
    { unicode: ')', plaincode: '96' },
    { unicode: '=', plaincode: '97' },
    { unicode: '?', plaincode: '98' },
    { unicode: ' ', plaincode: '99' }
  ]
};

conversiontableNob.nob = nob$2;

const { createOnetimePad: createOnetimePad$1 } = otpNode;
const { codebookRaw } = codebookEmojis;
const { emojiRegex } = regexEmojis;
const { eng: eng$1 } = conversiontableEng;
const { nob: nob$1 } = conversiontableNob;
const codebook$1 = codebookRaw;

// ### Function: Text to plaincode
function textToPlaincode$1 (text, conversionLanguage, codebook) {
  // Joining regular conversion table and codebook
  conversionLanguage.table = [...conversionLanguage.table, ...codebook];
  text = text.toLowerCase();

  // split into array of characters
  let regex = emojiRegex + '|' + conversionLanguage.textRegex;
  regex = new RegExp(regex, 'g');
  const textArr = text.match(regex);

  // convert text to plaincode
  const plaincode = textArr.map((character) => {
    const letterObj = conversionLanguage.table.find(obj => obj.unicode === character);
    try {
      return letterObj.plaincode
    } catch (error) {
      return ' '
    }
  });
  return plaincode.join('')
}

// ### Function: Plaincode to text
function plaincodeToText$1 (plaincode, conversionLanguage, codebook) {
  // Joining regular conversion table and codebook
  conversionLanguage.table = [...conversionLanguage.table, ...codebook];
  // finding via regex: plaincode enteties in plaincode string
  const regex = new RegExp(conversionLanguage.plaincodeRegex, 'g');
  const plaincodeArr = plaincode.match(regex);

  // convert plaincode to text
  const text = plaincodeArr.map((plaincode) => {
    const letterObj = conversionLanguage.table.find(obj => obj.plaincode === plaincode);
    return letterObj.unicode
  });
  return text.join('')
}

// ### Function: Check one-time pad >= plaincode
function checkLength$1 (plaincode, otp) {
  let tooLong = false;
  const plaincodeLength = plaincode.length;
  const otpLength = otp.length;
  if (plaincodeLength > otpLength) {
    tooLong = true;
  }
  return { plaincodeLength: plaincodeLength, otpLength: otpLength, tooLong: tooLong }
}

// ### Function: Encrypt
function encryptPlaincode$1 (plaincode, otp) {
  // Split string into array
  const plaincodeArr = plaincode.split('');
  const otpArr = otp.split('');

  // Encrypt
  const encryptedMsg = plaincodeArr.map((digit, index) => {
    const encryptedDigit = encryptDecryptDigit(digit, otpArr[index], 'encrypt');
    return encryptedDigit
  });
  return encryptedMsg
}

// ### Function: Decrypt
function decryptEncryptedMsg$1 (encryptedMsg, otp) {
  // Split string into array
  const encryptedMsgArr = encryptedMsg.split('');
  const otpArr = otp.split('');

  // Decrypt
  const decryptedMsg = encryptedMsgArr.map((encryptedDigit, index) => {
    const decryptedDigit = encryptDecryptDigit(encryptedDigit, otpArr[index], 'decrypt');
    return decryptedDigit
  });
  return decryptedMsg
}

// ### Function
function encryptDecryptDigit (digit, otpKey, direction) {
  let encryptedDecrypted;
  if (direction === 'encrypt') {
    encryptedDecrypted = (parseInt(digit, 10) + parseInt(otpKey, 10)) % 10;
  }
  if (direction === 'decrypt') {
    encryptedDecrypted = (digit - otpKey + 10) % 10;
  }
  return encryptedDecrypted
}

otpFunctions.textToPlaincode = textToPlaincode$1;
otpFunctions.plaincodeToText = plaincodeToText$1;
otpFunctions.checkLength = checkLength$1;
otpFunctions.encryptPlaincode = encryptPlaincode$1;
otpFunctions.decryptEncryptedMsg = decryptEncryptedMsg$1;
otpFunctions.eng = eng$1;
otpFunctions.nob = nob$1;
otpFunctions.codebook = codebook$1;
otpFunctions.createOnetimePad = createOnetimePad$1;

const { textToPlaincode, plaincodeToText, eng, nob, codebook, checkLength, encryptPlaincode, decryptEncryptedMsg } = otpFunctions;
const { createOnetimePad } = otpNode;

var createOnetimePad_1 = indexNode.createOnetimePad = createOnetimePad;
var textToPlaincode_1 = indexNode.textToPlaincode = textToPlaincode;
var plaincodeToText_1 = indexNode.plaincodeToText = plaincodeToText;
var eng_1 = indexNode.eng = eng;
var nob_1 = indexNode.nob = nob;
var codebook_1 = indexNode.codebook = codebook;
var checkLength_1 = indexNode.checkLength = checkLength;
var encryptPlaincode_1 = indexNode.encryptPlaincode = encryptPlaincode;
var decryptEncryptedMsg_1 = indexNode.decryptEncryptedMsg = decryptEncryptedMsg;

exports.checkLength = checkLength_1;
exports.codebook = codebook_1;
exports.createOnetimePad = createOnetimePad_1;
exports.decryptEncryptedMsg = decryptEncryptedMsg_1;
exports["default"] = indexNode;
exports.encryptPlaincode = encryptPlaincode_1;
exports.eng = eng_1;
exports.nob = nob_1;
exports.plaincodeToText = plaincodeToText_1;
exports.textToPlaincode = textToPlaincode_1;
