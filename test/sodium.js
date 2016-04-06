const lib       = require('..')
module.exports  = sodium

function sodium (t) {
  t.test('nbuf', nbuf)
  t.test('socket buffer integrity check', socketbuffers)
}

function nbuf (t) {
  t.plan(2)

  var nonce = lib.nstr()

  t.ok( nonce,   `nonce hex: ${nonce}` );
  t.is( nonce.length,  48, `nonce hex length: ${nonce.length}`   );
}

function socketbuffers (t) {
  t.plan(20)

  var port      = 5678
  var i         = 20
  var bufs      = {}
  var sockets   = []

  while (i--) {
    var ipaddr = lib.iplocal(port++)
    var s = lib.udplisten(ipaddr)
    bufs[ s ] = i
    sockets.push(s)
  }

  sockets
    .reverse()
    .map( s => t.is( ++i,  bufs[s], `socketbuffer # ${i} == ${bufs[s]}` ) )
}
