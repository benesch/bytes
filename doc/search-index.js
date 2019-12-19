var N=null,E="",T="t",U="u",searchIndex={};
var R=["into_inner","get_ref","get_mut","Gets a reference to the underlying `Buf`.","Gets a mutable reference to the underlying `Buf`.","set_limit","usize","Gets a reference to the underlying `BufMut`.","Gets a mutable reference to the underlying `BufMut`.","reader","bytes::buf","Gets an unsigned 32 bit integer from `self` in the…","Gets an IEEE754 single-precision (4 bytes) floating point…","Gets an IEEE754 double-precision (8 bytes) floating point…","Transfer bytes into `self` from `src` and advance the…","Writes an IEEE754 single-precision (4 bytes) floating…","Writes an IEEE754 double-precision (8 bytes) floating…","bytesmut","is_empty","split_off","Splits the bytes into two at the given index.","split_to","truncate","Shortens the buffer, keeping the first `len` bytes and…","Clears the buffer, removing all data.","Read bytes from a buffer.","remaining","Returns the number of bytes between the current position…","Returns a slice starting at the current position and of…","bytes_vectored","Fills `dst` with potentially multiple slices starting at…","Advance the internal cursor of the Buf","has_remaining","Returns true if there are any more bytes to consume","copy_to_slice","Copies bytes from `self` into `dst`.","Gets an unsigned 8 bit integer from `self`.","Gets a signed 8 bit integer from `self`.","Gets an unsigned 16 bit integer from `self` in big-endian…","get_u16_le","Gets an unsigned 16 bit integer from `self` in…","Gets a signed 16 bit integer from `self` in big-endian…","get_i16_le","Gets a signed 16 bit integer from `self` in little-endian…","get_u32_le","Gets a signed 32 bit integer from `self` in big-endian…","get_i32_le","Gets a signed 32 bit integer from `self` in little-endian…","Gets an unsigned 64 bit integer from `self` in big-endian…","get_u64_le","Gets an unsigned 64 bit integer from `self` in…","Gets a signed 64 bit integer from `self` in big-endian…","get_i64_le","Gets a signed 64 bit integer from `self` in little-endian…","get_u128","Gets an unsigned 128 bit integer from `self` in big-endian…","get_u128_le","Gets an unsigned 128 bit integer from `self` in…","get_i128","Gets a signed 128 bit integer from `self` in big-endian…","get_i128_le","Gets a signed 128 bit integer from `self` in little-endian…","get_uint","Gets an unsigned n-byte integer from `self` in big-endian…","get_uint_le","Gets an unsigned n-byte integer from `self` in…","Gets a signed n-byte integer from `self` in big-endian…","get_int_le","Gets a signed n-byte integer from `self` in little-endian…","get_f32_le","get_f64_le","to_bytes","Consumes remaining bytes inside self and returns new…","A trait for values that provide sequential write access to…","remaining_mut","Returns the number of bytes that can be written from the…","advance_mut","Advance the internal cursor of the BufMut","has_remaining_mut","Returns true if there is space in `self` for more bytes.","bytes_mut","Returns a mutable slice starting at the current BufMut…","bytes_vectored_mut","Fills `dst` with potentially multiple mutable slices…","put_slice","Writes an unsigned 8 bit integer to `self`.","Writes a signed 8 bit integer to `self`.","Writes an unsigned 16 bit integer to `self` in big-endian…","put_u16_le","Writes an unsigned 16 bit integer to `self` in…","Writes a signed 16 bit integer to `self` in big-endian…","put_i16_le","Writes a signed 16 bit integer to `self` in little-endian…","Writes an unsigned 32 bit integer to `self` in big-endian…","put_u32_le","Writes an unsigned 32 bit integer to `self` in…","Writes a signed 32 bit integer to `self` in big-endian…","put_i32_le","Writes a signed 32 bit integer to `self` in little-endian…","Writes an unsigned 64 bit integer to `self` in the…","put_u64_le","Writes an unsigned 64 bit integer to `self` in…","Writes a signed 64 bit integer to `self` in the big-endian…","put_i64_le","Writes a signed 64 bit integer to `self` in little-endian…","Writes an unsigned 128 bit integer to `self` in the…","put_u128_le","Writes an unsigned 128 bit integer to `self` in…","Writes a signed 128 bit integer to `self` in the…","put_i128_le","Writes a signed 128 bit integer to `self` in little-endian…","Writes an unsigned n-byte integer to `self` in big-endian…","put_uint_le","Writes an unsigned n-byte integer to `self` in the…","Writes a signed n-byte integer to `self` in big-endian…","put_int_le","Writes a signed n-byte integer to `self` in little-endian…","put_f32_le","put_f64_le","into_iter","borrow_mut","clone_into","try_from","try_into","bytes::buf::ext","type_id","advance","ioslicemut","formatter","ordering","partial_cmp","from_iter","intoiterator","put_u128","put_i128","put_uint","BufMutExt","IoSliceMut"];

searchIndex["bytes"]={"doc":"Provides abstractions for working with bytes.","i":[[3,"BytesMut","bytes","A unique reference to a contiguous slice of memory.",N,N],[3,"Bytes",E,"A reference counted contiguous slice of memory.",N,N],[0,"buf",E,"Utilities for working with buffers.",N,N],[3,R[137],R[10],"A buffer type used for `readv`.",N,N],[3,"IntoIter",E,"Iterator over the bytes contained by the buffer.",N,N],[0,"ext",E,"Extra utilities for `Buf` and `BufMut` types.",N,N],[3,"Limit",R[124],"A `BufMut` adapter which limits the amount of bytes that…",N,N],[3,"Take",E,"A `Buf` adapter which limits the bytes read from an…",N,N],[3,"Chain",E,"A `Chain` sequences two buffers.",N,N],[3,"Reader",E,"A `Buf` adapter which implements `io::Read` for the inner…",N,N],[3,"Writer",E,"A `BufMut` adapter which implements `io::Write` for the…",N,N],[11,"new",E,"Creates a new `Chain` sequencing the provided values.",0,[[[U],[T]],["chain"]]],[11,"first_ref",E,"Gets a reference to the first underlying `Buf`.",0,[[["self"]],[T]]],[11,"first_mut",E,"Gets a mutable reference to the first underlying `Buf`.",0,[[["self"]],[T]]],[11,"last_ref",E,"Gets a reference to the last underlying `Buf`.",0,[[["self"]],[U]]],[11,"last_mut",E,"Gets a mutable reference to the last underlying `Buf`.",0,[[["self"]],[U]]],[11,R[0],E,"Consumes this `Chain`, returning the underlying values.",0,[[]]],[11,R[0],E,"Consumes this `Limit`, returning the underlying value.",1,[[],[T]]],[11,R[1],E,R[7],1,[[["self"]],[T]]],[11,R[2],E,R[8],1,[[["self"]],[T]]],[11,"limit",E,"Returns the maximum number of bytes that can be written",1,[[["self"]],[R[6]]]],[11,R[5],E,"Sets the maximum number of bytes that can be written.",1,[[["self"],[R[6]]]]],[11,R[1],E,R[3],2,[[["self"]],["b"]]],[11,R[2],E,R[4],2,[[["self"]],["b"]]],[11,R[0],E,"Consumes this `Reader`, returning the underlying value.",2,[[],["b"]]],[11,R[0],E,"Consumes this `Take`, returning the underlying value.",3,[[],[T]]],[11,R[1],E,R[3],3,[[["self"]],[T]]],[11,R[2],E,R[4],3,[[["self"]],[T]]],[11,"limit",E,"Returns the maximum number of bytes that can be read.",3,[[["self"]],[R[6]]]],[11,R[5],E,"Sets the maximum number of bytes that can be read.",3,[[["self"],[R[6]]]]],[11,R[1],E,R[7],4,[[["self"]],["b"]]],[11,R[2],E,R[8],4,[[["self"]],["b"]]],[11,R[0],E,"Consumes this `Writer`, returning the underlying value.",4,[[],["b"]]],[8,"BufExt",E,"Extra methods for implementations of `Buf`.",N,N],[11,"take",E,"Creates an adaptor which will read at most `limit` bytes…",5,[[[R[6]]],["take"]]],[11,"chain",E,"Creates an adaptor which will chain this buffer with…",5,[[["buf"]],[["chain"],["buf"]]]],[11,R[9],E,"Creates an adaptor which implements the `Read` trait for…",5,[[],[R[9]]]],[8,R[136],E,"Extra methods for implementations of `BufMut`.",N,N],[11,"limit",E,"Creates an adaptor which can write at most `limit` bytes…",6,[[[R[6]]],["limit"]]],[11,"writer",E,"Creates an adaptor which implements the `Write` trait for…",6,[[],["writer"]]],[11,"chain_mut",E,"Creates an adapter which will chain this buffer with…",6,[[["bufmut"]],[["bufmut"],["chain"]]]],[11,"new",R[10],"Creates an iterator over the bytes contained by the buffer.",7,[[[T]],["intoiter"]]],[11,R[0],E,"Consumes this `IntoIter`, returning the underlying value.",7,[[],[T]]],[11,R[1],E,R[3],7,[[["self"]],[T]]],[11,R[2],E,R[4],7,[[["self"]],[T]]],[8,"Buf",E,R[25],N,N],[10,R[26],E,R[27],8,[[["self"]],[R[6]]]],[10,"bytes",E,R[28],8,[[["self"]]]],[11,R[29],E,R[30],8,[[["self"]],[R[6]]]],[10,R[126],E,R[31],8,[[["self"],[R[6]]]]],[11,R[32],E,R[33],8,[[["self"]],["bool"]]],[11,R[34],E,R[35],8,[[["self"]]]],[11,"get_u8",E,R[36],8,[[["self"]],["u8"]]],[11,"get_i8",E,R[37],8,[[["self"]],["i8"]]],[11,"get_u16",E,R[38],8,[[["self"]],["u16"]]],[11,R[39],E,R[40],8,[[["self"]],["u16"]]],[11,"get_i16",E,R[41],8,[[["self"]],["i16"]]],[11,R[42],E,R[43],8,[[["self"]],["i16"]]],[11,"get_u32",E,R[11],8,[[["self"]],["u32"]]],[11,R[44],E,R[11],8,[[["self"]],["u32"]]],[11,"get_i32",E,R[45],8,[[["self"]],["i32"]]],[11,R[46],E,R[47],8,[[["self"]],["i32"]]],[11,"get_u64",E,R[48],8,[[["self"]],["u64"]]],[11,R[49],E,R[50],8,[[["self"]],["u64"]]],[11,"get_i64",E,R[51],8,[[["self"]],["i64"]]],[11,R[52],E,R[53],8,[[["self"]],["i64"]]],[11,R[54],E,R[55],8,[[["self"]],["u128"]]],[11,R[56],E,R[57],8,[[["self"]],["u128"]]],[11,R[58],E,R[59],8,[[["self"]],["i128"]]],[11,R[60],E,R[61],8,[[["self"]],["i128"]]],[11,R[62],E,R[63],8,[[["self"],[R[6]]],["u64"]]],[11,R[64],E,R[65],8,[[["self"],[R[6]]],["u64"]]],[11,"get_int",E,R[66],8,[[["self"],[R[6]]],["i64"]]],[11,R[67],E,R[68],8,[[["self"],[R[6]]],["i64"]]],[11,"get_f32",E,R[12],8,[[["self"]],["f32"]]],[11,R[69],E,R[12],8,[[["self"]],["f32"]]],[11,"get_f64",E,R[13],8,[[["self"]],["f64"]]],[11,R[70],E,R[13],8,[[["self"]],["f64"]]],[11,R[71],E,R[72],8,[[["self"]],["bytes"]]],[8,"BufMut",E,R[73],N,N],[10,R[74],E,R[75],9,[[["self"]],[R[6]]]],[10,R[76],E,R[77],9,[[["self"],[R[6]]]]],[11,R[78],E,R[79],9,[[["self"]],["bool"]]],[10,R[80],E,R[81],9,[[["self"]]]],[11,R[82],E,R[83],9,[[["self"]],[R[6]]]],[11,"put",E,R[14],9,[[["buf"],["self"]]]],[11,R[84],E,R[14],9,[[["self"]]]],[11,"put_u8",E,R[85],9,[[["self"],["u8"]]]],[11,"put_i8",E,R[86],9,[[["self"],["i8"]]]],[11,"put_u16",E,R[87],9,[[["u16"],["self"]]]],[11,R[88],E,R[89],9,[[["u16"],["self"]]]],[11,"put_i16",E,R[90],9,[[["self"],["i16"]]]],[11,R[91],E,R[92],9,[[["self"],["i16"]]]],[11,"put_u32",E,R[93],9,[[["self"],["u32"]]]],[11,R[94],E,R[95],9,[[["self"],["u32"]]]],[11,"put_i32",E,R[96],9,[[["self"],["i32"]]]],[11,R[97],E,R[98],9,[[["self"],["i32"]]]],[11,"put_u64",E,R[99],9,[[["self"],["u64"]]]],[11,R[100],E,R[101],9,[[["self"],["u64"]]]],[11,"put_i64",E,R[102],9,[[["i64"],["self"]]]],[11,R[103],E,R[104],9,[[["i64"],["self"]]]],[11,R[133],E,R[105],9,[[["self"],["u128"]]]],[11,R[106],E,R[107],9,[[["self"],["u128"]]]],[11,R[134],E,R[108],9,[[["self"],["i128"]]]],[11,R[109],E,R[110],9,[[["self"],["i128"]]]],[11,R[135],E,R[111],9,[[["self"],["u64"],[R[6]]]]],[11,R[112],E,R[113],9,[[["self"],["u64"],[R[6]]]]],[11,"put_int",E,R[114],9,[[["i64"],["self"],[R[6]]]]],[11,R[115],E,R[116],9,[[["i64"],["self"],[R[6]]]]],[11,"put_f32",E,R[15],9,[[["f32"],["self"]]]],[11,R[117],E,R[15],9,[[["f32"],["self"]]]],[11,"put_f64",E,R[16],9,[[["self"],["f64"]]]],[11,R[118],E,R[16],9,[[["self"],["f64"]]]],[11,"with_capacity","bytes","Creates a new `BytesMut` with the specified capacity.",10,[[[R[6]]],[R[17]]]],[11,"new",E,"Creates a new `BytesMut` with default capacity.",10,[[],[R[17]]]],[11,"len",E,"Returns the number of bytes contained in this `BytesMut`.",10,[[["self"]],[R[6]]]],[11,R[18],E,"Returns true if the `BytesMut` has a length of 0.",10,[[["self"]],["bool"]]],[11,"capacity",E,"Returns the number of bytes the `BytesMut` can hold…",10,[[["self"]],[R[6]]]],[11,"freeze",E,"Converts `self` into an immutable `Bytes`.",10,[[],["bytes"]]],[11,R[19],E,R[20],10,[[["self"],[R[6]]],[R[17]]]],[11,"split",E,"Removes the bytes from the current view, returning them in…",10,[[["self"]],[R[17]]]],[11,R[21],E,"Splits the buffer into two at the given index.",10,[[["self"],[R[6]]],[R[17]]]],[11,R[22],E,R[23],10,[[["self"],[R[6]]]]],[11,"clear",E,R[24],10,[[["self"]]]],[11,"resize",E,"Resizes the buffer so that `len` is equal to `new_len`.",10,[[["self"],[R[6]],["u8"]]]],[11,"set_len",E,"Sets the length of the buffer.",10,[[["self"],[R[6]]]]],[11,"reserve",E,"Reserves capacity for at least `additional` more bytes to…",10,[[["self"],[R[6]]]]],[11,"extend_from_slice",E,"Appends given bytes to this object.",10,[[["self"]]]],[11,"unsplit",E,"Combine splitted BytesMut objects back as contiguous.",10,[[["self"],[R[17]]]]],[11,"new",E,"Creates a new empty `Bytes`.",11,[[],["bytes"]]],[11,"from_static",E,"Creates a new `Bytes` from a static slice.",11,[[],["bytes"]]],[11,"len",E,"Returns the number of bytes contained in this `Bytes`.",11,[[["self"]],[R[6]]]],[11,R[18],E,"Returns true if the `Bytes` has a length of 0.",11,[[["self"]],["bool"]]],[11,"copy_from_slice",E,"Creates `Bytes` instance from slice, by copying it.",11,[[],["self"]]],[11,"slice",E,"Returns a slice of self for the provided range.",11,[[["self"]],["bytes"]]],[11,"slice_ref",E,"Returns a slice of self that is equivalent to the given…",11,[[["self"]],["bytes"]]],[11,R[19],E,R[20],11,[[["self"],[R[6]]],["bytes"]]],[11,R[21],E,R[20],11,[[["self"],[R[6]]],["bytes"]]],[11,R[22],E,R[23],11,[[["self"],[R[6]]]]],[11,"clear",E,R[24],11,[[["self"]]]],[8,"Buf",E,R[25],N,N],[10,R[26],E,R[27],8,[[["self"]],[R[6]]]],[10,"bytes",E,R[28],8,[[["self"]]]],[11,R[29],R[10],R[30],8,[[["self"]],[R[6]]]],[10,R[126],"bytes",R[31],8,[[["self"],[R[6]]]]],[11,R[32],R[10],R[33],8,[[["self"]],["bool"]]],[11,R[34],E,R[35],8,[[["self"]]]],[11,"get_u8",E,R[36],8,[[["self"]],["u8"]]],[11,"get_i8",E,R[37],8,[[["self"]],["i8"]]],[11,"get_u16",E,R[38],8,[[["self"]],["u16"]]],[11,R[39],E,R[40],8,[[["self"]],["u16"]]],[11,"get_i16",E,R[41],8,[[["self"]],["i16"]]],[11,R[42],E,R[43],8,[[["self"]],["i16"]]],[11,"get_u32",E,R[11],8,[[["self"]],["u32"]]],[11,R[44],E,R[11],8,[[["self"]],["u32"]]],[11,"get_i32",E,R[45],8,[[["self"]],["i32"]]],[11,R[46],E,R[47],8,[[["self"]],["i32"]]],[11,"get_u64",E,R[48],8,[[["self"]],["u64"]]],[11,R[49],E,R[50],8,[[["self"]],["u64"]]],[11,"get_i64",E,R[51],8,[[["self"]],["i64"]]],[11,R[52],E,R[53],8,[[["self"]],["i64"]]],[11,R[54],E,R[55],8,[[["self"]],["u128"]]],[11,R[56],E,R[57],8,[[["self"]],["u128"]]],[11,R[58],E,R[59],8,[[["self"]],["i128"]]],[11,R[60],E,R[61],8,[[["self"]],["i128"]]],[11,R[62],E,R[63],8,[[["self"],[R[6]]],["u64"]]],[11,R[64],E,R[65],8,[[["self"],[R[6]]],["u64"]]],[11,"get_int",E,R[66],8,[[["self"],[R[6]]],["i64"]]],[11,R[67],E,R[68],8,[[["self"],[R[6]]],["i64"]]],[11,"get_f32",E,R[12],8,[[["self"]],["f32"]]],[11,R[69],E,R[12],8,[[["self"]],["f32"]]],[11,"get_f64",E,R[13],8,[[["self"]],["f64"]]],[11,R[70],E,R[13],8,[[["self"]],["f64"]]],[11,R[71],E,R[72],8,[[["self"]],["bytes"]]],[8,"BufMut","bytes",R[73],N,N],[10,R[74],E,R[75],9,[[["self"]],[R[6]]]],[10,R[76],E,R[77],9,[[["self"],[R[6]]]]],[11,R[78],R[10],R[79],9,[[["self"]],["bool"]]],[10,R[80],"bytes",R[81],9,[[["self"]]]],[11,R[82],R[10],R[83],9,[[["self"]],[R[6]]]],[11,"put",E,R[14],9,[[["buf"],["self"]]]],[11,R[84],E,R[14],9,[[["self"]]]],[11,"put_u8",E,R[85],9,[[["self"],["u8"]]]],[11,"put_i8",E,R[86],9,[[["self"],["i8"]]]],[11,"put_u16",E,R[87],9,[[["u16"],["self"]]]],[11,R[88],E,R[89],9,[[["u16"],["self"]]]],[11,"put_i16",E,R[90],9,[[["self"],["i16"]]]],[11,R[91],E,R[92],9,[[["self"],["i16"]]]],[11,"put_u32",E,R[93],9,[[["self"],["u32"]]]],[11,R[94],E,R[95],9,[[["self"],["u32"]]]],[11,"put_i32",E,R[96],9,[[["self"],["i32"]]]],[11,R[97],E,R[98],9,[[["self"],["i32"]]]],[11,"put_u64",E,R[99],9,[[["self"],["u64"]]]],[11,R[100],E,R[101],9,[[["self"],["u64"]]]],[11,"put_i64",E,R[102],9,[[["i64"],["self"]]]],[11,R[103],E,R[104],9,[[["i64"],["self"]]]],[11,R[133],E,R[105],9,[[["self"],["u128"]]]],[11,R[106],E,R[107],9,[[["self"],["u128"]]]],[11,R[134],E,R[108],9,[[["self"],["i128"]]]],[11,R[109],E,R[110],9,[[["self"],["i128"]]]],[11,R[135],E,R[111],9,[[["self"],["u64"],[R[6]]]]],[11,R[112],E,R[113],9,[[["self"],["u64"],[R[6]]]]],[11,"put_int",E,R[114],9,[[["i64"],["self"],[R[6]]]]],[11,R[115],E,R[116],9,[[["i64"],["self"],[R[6]]]]],[11,"put_f32",E,R[15],9,[[["f32"],["self"]]]],[11,R[117],E,R[15],9,[[["f32"],["self"]]]],[11,"put_f64",E,R[16],9,[[["self"],["f64"]]]],[11,R[118],E,R[16],9,[[["self"],["f64"]]]],[11,"from","bytes",E,10,[[[T]],[T]]],[11,R[122],E,E,10,[[[U]],["result"]]],[11,R[119],E,E,10,[[],["i"]]],[11,"into",E,E,10,[[],[U]]],[11,R[123],E,E,10,[[],["result"]]],[11,"borrow",E,E,10,[[["self"]],[T]]],[11,R[120],E,E,10,[[["self"]],[T]]],[11,R[125],E,E,10,[[["self"]],["typeid"]]],[11,"to_owned",E,E,10,[[["self"]],[T]]],[11,R[121],E,E,10,[[["self"],[T]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[122],E,E,11,[[[U]],["result"]]],[11,R[119],E,E,11,[[],["i"]]],[11,"into",E,E,11,[[],[U]]],[11,R[123],E,E,11,[[],["result"]]],[11,"borrow",E,E,11,[[["self"]],[T]]],[11,R[120],E,E,11,[[["self"]],[T]]],[11,R[125],E,E,11,[[["self"]],["typeid"]]],[11,"to_owned",E,E,11,[[["self"]],[T]]],[11,R[121],E,E,11,[[["self"],[T]]]],[11,"from",R[10],E,12,[[[T]],[T]]],[11,R[122],E,E,12,[[[U]],["result"]]],[11,"into",E,E,12,[[],[U]]],[11,R[123],E,E,12,[[],["result"]]],[11,"borrow",E,E,12,[[["self"]],[T]]],[11,R[120],E,E,12,[[["self"]],[T]]],[11,R[125],E,E,12,[[["self"]],["typeid"]]],[11,"from",E,E,7,[[[T]],[T]]],[11,R[122],E,E,7,[[[U]],["result"]]],[11,R[119],E,E,7,[[],["i"]]],[11,"into",E,E,7,[[],[U]]],[11,R[123],E,E,7,[[],["result"]]],[11,"borrow",E,E,7,[[["self"]],[T]]],[11,R[120],E,E,7,[[["self"]],[T]]],[11,R[125],E,E,7,[[["self"]],["typeid"]]],[11,"from",R[124],E,1,[[[T]],[T]]],[11,R[122],E,E,1,[[[U]],["result"]]],[11,"into",E,E,1,[[],[U]]],[11,R[123],E,E,1,[[],["result"]]],[11,"borrow",E,E,1,[[["self"]],[T]]],[11,R[120],E,E,1,[[["self"]],[T]]],[11,R[125],E,E,1,[[["self"]],["typeid"]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[122],E,E,3,[[[U]],["result"]]],[11,"into",E,E,3,[[],[U]]],[11,R[123],E,E,3,[[],["result"]]],[11,"borrow",E,E,3,[[["self"]],[T]]],[11,R[120],E,E,3,[[["self"]],[T]]],[11,R[125],E,E,3,[[["self"]],["typeid"]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[122],E,E,0,[[[U]],["result"]]],[11,R[119],E,E,0,[[],["i"]]],[11,"into",E,E,0,[[],[U]]],[11,R[123],E,E,0,[[],["result"]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,R[120],E,E,0,[[["self"]],[T]]],[11,R[125],E,E,0,[[["self"]],["typeid"]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[122],E,E,2,[[[U]],["result"]]],[11,"into",E,E,2,[[],[U]]],[11,R[123],E,E,2,[[],["result"]]],[11,"borrow",E,E,2,[[["self"]],[T]]],[11,R[120],E,E,2,[[["self"]],[T]]],[11,R[125],E,E,2,[[["self"]],["typeid"]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[122],E,E,4,[[[U]],["result"]]],[11,"into",E,E,4,[[],[U]]],[11,R[123],E,E,4,[[],["result"]]],[11,"borrow",E,E,4,[[["self"]],[T]]],[11,R[120],E,E,4,[[["self"]],[T]]],[11,R[125],E,E,4,[[["self"]],["typeid"]]],[11,R[26],E,E,0,[[["self"]],[R[6]]]],[11,"bytes",E,E,0,[[["self"]]]],[11,R[126],E,E,0,[[["self"],[R[6]]]]],[11,R[29],E,E,0,[[["self"]],[R[6]]]],[11,R[26],E,E,3,[[["self"]],[R[6]]]],[11,"bytes",E,E,3,[[["self"]]]],[11,R[126],E,E,3,[[["self"],[R[6]]]]],[11,R[26],"bytes",E,10,[[["self"]],[R[6]]]],[11,"bytes",E,E,10,[[["self"]]]],[11,R[126],E,E,10,[[["self"],[R[6]]]]],[11,R[71],E,E,10,[[["self"]],["bytes"]]],[11,R[26],E,E,11,[[["self"]],[R[6]]]],[11,"bytes",E,E,11,[[["self"]]]],[11,R[126],E,E,11,[[["self"],[R[6]]]]],[11,R[71],E,E,11,[[["self"]],["bytes"]]],[11,R[74],R[124],E,0,[[["self"]],[R[6]]]],[11,R[80],E,E,0,[[["self"]]]],[11,R[76],E,E,0,[[["self"],[R[6]]]]],[11,R[82],E,E,0,[[["self"]],[R[6]]]],[11,R[74],E,E,1,[[["self"]],[R[6]]]],[11,R[80],E,E,1,[[["self"]]]],[11,R[76],E,E,1,[[["self"],[R[6]]]]],[11,R[74],"bytes",E,10,[[["self"]],[R[6]]]],[11,R[76],E,E,10,[[["self"],[R[6]]]]],[11,R[80],E,E,10,[[["self"]]]],[11,"put",E,E,10,[[["buf"],["self"]]]],[11,R[84],E,E,10,[[["self"]]]],[11,"from",R[10],E,12,[[],[R[127]]]],[11,"from",E,E,12,[[],[R[127]]]],[11,"from","bytes",E,10,[[],[R[17]]]],[11,"from",E,E,10,[[["str"]],[R[17]]]],[11,"from",E,E,11,[[[R[17]]],["bytes"]]],[11,"from",E,E,11,[[],["bytes"]]],[11,"from",E,E,11,[[["str"]],["bytes"]]],[11,"from",E,E,11,[[["vec",["u8"]],["u8"]],["bytes"]]],[11,"from",E,E,11,[[["string"]],["bytes"]]],[11,"fmt",R[10],E,12,[[[R[128]],["self"]],["result"]]],[11,"fmt",R[124],E,0,[[["self"],[R[128]]],["result"]]],[11,"fmt",E,E,1,[[["self"],[R[128]]],["result"]]],[11,"fmt",E,E,2,[[["self"],[R[128]]],["result"]]],[11,"fmt",E,E,3,[[["self"],[R[128]]],["result"]]],[11,"fmt",E,E,4,[[["self"],[R[128]]],["result"]]],[11,"fmt",R[10],E,7,[[["self"],[R[128]]],["result"]]],[11,"fmt","bytes",E,10,[[[R[128]],["self"]],["result"]]],[11,"fmt",E,E,11,[[[R[128]],["self"]],["result"]]],[11,"eq",E,E,10,[[["self"],[R[17]]],["bool"]]],[11,"eq",E,E,10,[[["self"]],["bool"]]],[11,"eq",E,E,10,[[["str"],["self"]],["bool"]]],[11,"eq",E,E,10,[[["vec"],["self"]],["bool"]]],[11,"eq",E,E,10,[[["string"],["self"]],["bool"]]],[11,"eq",E,E,10,[[[T],["self"]],["bool"]]],[11,"eq",E,E,11,[[["self"],[R[17]]],["bool"]]],[11,"eq",E,E,10,[[["bytes"],["self"]],["bool"]]],[11,"eq",E,E,11,[[["bytes"],["self"]],["bool"]]],[11,"eq",E,E,11,[[["self"]],["bool"]]],[11,"eq",E,E,11,[[["str"],["self"]],["bool"]]],[11,"eq",E,E,11,[[["vec"],["self"]],["bool"]]],[11,"eq",E,E,11,[[["string"],["self"]],["bool"]]],[11,"eq",E,E,11,[[[T],["self"]],["bool"]]],[11,"cmp",E,E,10,[[["self"],[R[17]]],[R[129]]]],[11,"cmp",E,E,11,[[["bytes"],["self"]],[R[129]]]],[11,R[130],E,E,10,[[["self"],[R[17]]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,10,[[["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,10,[[["str"],["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,10,[[["vec"],["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,10,[[["string"],["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,10,[[[T],["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,11,[[["bytes"],["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,11,[[["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,11,[[["str"],["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,11,[[["vec"],["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,11,[[["string"],["self"]],[[R[129]],["option",[R[129]]]]]],[11,R[130],E,E,11,[[[T],["self"]],[[R[129]],["option",[R[129]]]]]],[11,"deref",E,E,10,[[["self"]]]],[11,"deref",E,E,11,[[["self"]]]],[11,"deref_mut",E,E,10,[[["self"]]]],[11,"drop",E,E,10,[[["self"]]]],[11,"drop",E,E,11,[[["self"]]]],[11,"hash",E,E,10,[[["self"],["h"]]]],[11,"hash",E,E,11,[[["self"],["h"]]]],[11,"next",R[10],E,7,[[["self"]],[["option",["u8"]],["u8"]]]],[11,"size_hint",E,E,7,[[["self"]]]],[11,R[131],"bytes",E,10,[[[R[132]]],["self"]]],[11,R[131],E,E,10,[[[R[132]]],["self"]]],[11,R[131],E,E,11,[[[R[132]]],["self"]]],[11,R[119],R[124],E,0,[[]]],[11,R[119],"bytes",E,10,[[]]],[11,R[119],E,E,11,[[]]],[11,"extend",E,E,10,[[["self"],[T]]]],[11,"extend",E,E,10,[[["self"],[T]]]],[11,"write_str",E,E,10,[[["str"],["self"]],["result"]]],[11,"write_fmt",E,E,10,[[["arguments"],["self"]],["result"]]],[11,"as_ref",E,E,10,[[["self"]]]],[11,"as_ref",E,E,11,[[["self"]]]],[11,"as_mut",E,E,10,[[["self"]]]],[11,"fmt",E,E,11,[[["self"],[R[128]]],["result"]]],[11,"fmt",E,E,10,[[["self"],[R[128]]],["result"]]],[11,"fmt",E,E,11,[[["self"],[R[128]]],["result"]]],[11,"fmt",E,E,10,[[["self"],[R[128]]],["result"]]],[11,"clone",E,E,10,[[["self"]],[R[17]]]],[11,"clone",E,E,11,[[["self"]],["bytes"]]],[11,"default",E,E,10,[[],[R[17]]]],[11,"default",E,E,11,[[],["bytes"]]],[11,"borrow",E,E,10,[[["self"]]]],[11,"borrow",E,E,11,[[["self"]]]],[11,R[120],E,E,10,[[["self"]]]],[11,"read",R[124],E,2,[[["self"]],[["result",[R[6]]],[R[6]]]]],[11,"write",E,E,4,[[["self"]],[["result",[R[6]]],[R[6]]]]],[11,"flush",E,E,4,[[["self"]],["result"]]],[11,"fill_buf",E,E,2,[[["self"]],["result"]]],[11,"consume",E,E,2,[[["self"],[R[6]]]]],[11,R[29],R[10],R[30],8,[[["self"]],[R[6]]]],[11,R[32],E,R[33],8,[[["self"]],["bool"]]],[11,R[34],E,R[35],8,[[["self"]]]],[11,"get_u8",E,R[36],8,[[["self"]],["u8"]]],[11,"get_i8",E,R[37],8,[[["self"]],["i8"]]],[11,"get_u16",E,R[38],8,[[["self"]],["u16"]]],[11,R[39],E,R[40],8,[[["self"]],["u16"]]],[11,"get_i16",E,R[41],8,[[["self"]],["i16"]]],[11,R[42],E,R[43],8,[[["self"]],["i16"]]],[11,"get_u32",E,R[11],8,[[["self"]],["u32"]]],[11,R[44],E,R[11],8,[[["self"]],["u32"]]],[11,"get_i32",E,R[45],8,[[["self"]],["i32"]]],[11,R[46],E,R[47],8,[[["self"]],["i32"]]],[11,"get_u64",E,R[48],8,[[["self"]],["u64"]]],[11,R[49],E,R[50],8,[[["self"]],["u64"]]],[11,"get_i64",E,R[51],8,[[["self"]],["i64"]]],[11,R[52],E,R[53],8,[[["self"]],["i64"]]],[11,R[54],E,R[55],8,[[["self"]],["u128"]]],[11,R[56],E,R[57],8,[[["self"]],["u128"]]],[11,R[58],E,R[59],8,[[["self"]],["i128"]]],[11,R[60],E,R[61],8,[[["self"]],["i128"]]],[11,R[62],E,R[63],8,[[["self"],[R[6]]],["u64"]]],[11,R[64],E,R[65],8,[[["self"],[R[6]]],["u64"]]],[11,"get_int",E,R[66],8,[[["self"],[R[6]]],["i64"]]],[11,R[67],E,R[68],8,[[["self"],[R[6]]],["i64"]]],[11,"get_f32",E,R[12],8,[[["self"]],["f32"]]],[11,R[69],E,R[12],8,[[["self"]],["f32"]]],[11,"get_f64",E,R[13],8,[[["self"]],["f64"]]],[11,R[70],E,R[13],8,[[["self"]],["f64"]]],[11,R[71],E,R[72],8,[[["self"]],["bytes"]]],[11,R[78],E,R[79],9,[[["self"]],["bool"]]],[11,R[82],E,R[83],9,[[["self"]],[R[6]]]],[11,"put",E,R[14],9,[[["buf"],["self"]]]],[11,R[84],E,R[14],9,[[["self"]]]],[11,"put_u8",E,R[85],9,[[["self"],["u8"]]]],[11,"put_i8",E,R[86],9,[[["self"],["i8"]]]],[11,"put_u16",E,R[87],9,[[["u16"],["self"]]]],[11,R[88],E,R[89],9,[[["u16"],["self"]]]],[11,"put_i16",E,R[90],9,[[["self"],["i16"]]]],[11,R[91],E,R[92],9,[[["self"],["i16"]]]],[11,"put_u32",E,R[93],9,[[["self"],["u32"]]]],[11,R[94],E,R[95],9,[[["self"],["u32"]]]],[11,"put_i32",E,R[96],9,[[["self"],["i32"]]]],[11,R[97],E,R[98],9,[[["self"],["i32"]]]],[11,"put_u64",E,R[99],9,[[["self"],["u64"]]]],[11,R[100],E,R[101],9,[[["self"],["u64"]]]],[11,"put_i64",E,R[102],9,[[["i64"],["self"]]]],[11,R[103],E,R[104],9,[[["i64"],["self"]]]],[11,R[133],E,R[105],9,[[["self"],["u128"]]]],[11,R[106],E,R[107],9,[[["self"],["u128"]]]],[11,R[134],E,R[108],9,[[["self"],["i128"]]]],[11,R[109],E,R[110],9,[[["self"],["i128"]]]],[11,R[135],E,R[111],9,[[["self"],["u64"],[R[6]]]]],[11,R[112],E,R[113],9,[[["self"],["u64"],[R[6]]]]],[11,"put_int",E,R[114],9,[[["i64"],["self"],[R[6]]]]],[11,R[115],E,R[116],9,[[["i64"],["self"],[R[6]]]]],[11,"put_f32",E,R[15],9,[[["f32"],["self"]]]],[11,R[117],E,R[15],9,[[["f32"],["self"]]]],[11,"put_f64",E,R[16],9,[[["self"],["f64"]]]],[11,R[118],E,R[16],9,[[["self"],["f64"]]]]],"p":[[3,"Chain"],[3,"Limit"],[3,"Reader"],[3,"Take"],[3,"Writer"],[8,"BufExt"],[8,R[136]],[3,"IntoIter"],[8,"Buf"],[8,"BufMut"],[3,"BytesMut"],[3,"Bytes"],[3,R[137]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);