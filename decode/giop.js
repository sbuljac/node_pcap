function GIOP(emitter) {
  this.emitter = emitter;
  this.magic = undefined;
  this.version = undefined;
  this.flag = undefined;
  this.messageType = undefined;
  this.messageSize = undefined;
  this.requestId = undefined;
  this.responseFlag = undefined;
  this.reserved = undefined;
  this.data = undefined;
}

GIOP.prototype.decode = function(raw_packet, offset) {
  this.magic = raw_packet.readUInt32BE(offset);
  this.version = raw_packet.readUInt16BE(offset + 4);
  this.flag = raw_packet[offset + 6];
  this.messageType = raw_packet[offset + 7];
  this.messageSize = raw_packet.readUInt32LE(offset + 8);
  this.requestId = raw_packet.readUInt32LE(offset + 12);
  this.responseFlag = raw_packet[offset + 16];
  this.reserved = raw_packet.readUIntLE(offset + 17, 3);
  this.keyAddress = raw_packet.readUInt16LE(offset + 20);
  this.data = raw_packet.slice(offset + 76);
  return this;
};

GIOP.prototype.decoderName = "giop";
GIOP.prototype.eventsOnDecode = true;

GIOP.prototype.toString = function() {
  return "Samo testiram";
};
module.exports = GIOP;
