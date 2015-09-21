var lib  = require('./build/Release/mill.node');
module.exports = ctx = {
  test          : lib.test,
  tcplisten     : lib.tcplisten,
  tcpaccept     : lib.tcpaccept,
  tcpconnect    : lib.tcpconnect,
  tcpsend       : lib.tcpsend,
  tcpflush      : lib.tcpflush,
  tcprecv       : lib.tcprecv,
  tcprecvuntil  : lib.tcprecvuntil,
  tcpattach     : lib.tcpattach,
  tcpdetach     : lib.tcpdetach,
  tcpport       : lib.tcpport,
  tcpclose      : lib.tcpclose,
  udplisten     : lib.udplisten,
  udpport       : lib.udpport,
  udpsend       : lib.udpsend,
  udprecv       : lib.udprecv,
  udpclose      : lib.udpclose,
  udpattach     : lib.udpattach,
  udpdetach     : lib.udpdetach,
  unixlisten    : lib.unixlisten,
  unixaccept    : lib.unixaccept,
  unixconnect   : lib.unixconnect,
  unixpair      : lib.unixpair,
  unixsend      : lib.unixsend,
  unixflush     : lib.unixflush,
  unixrecv      : lib.unixrecv,
  unixrecvuntil : lib.unixrecvuntil,
  unixclose     : lib.unixclose,
  unixattach    : lib.unixattach,
  unixdetach    : lib.unixdetach,
  goredump      : lib.goredump,
  gotrace       : lib.gotrace
}
