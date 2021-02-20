var xmlString = "<script type='text/javascript' defer=''> var _protocol = (('https:' == document.location.protocol) ? ' https://' : ' http://'); var _site_hash_code = 'd8050639ebb0253e4624c68ca1714af2'; var _suid = 14280; </script><script type='text/javascript' defer='' src='https://a.plerdy.com/public/js/click/main.js'></script>";
var doc = new DOMParser().parseFromString(xmlString, "text/xml");
console.log(doc.firstChild.innerHTML); // => <a href="#">Link...
console.log(doc.firstChild.firstChild.innerHTML); // => Link