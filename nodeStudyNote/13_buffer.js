function buffer() {
  const buf = Buffer.from('Hi');
  console.log(buf);
  console.log(buf.length);
  console.log(buf[0]);
  console.log(buf[1]);
  console.log(buf.toString());

  const buf2 = Buffer.alloc(2);
  const buf3 = Buffer.allocUnsafe(2);
  console.log(buf2)
  console.log(buf3)
}
buffer()