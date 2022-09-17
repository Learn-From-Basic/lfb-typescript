const keranjangBola = ['Bola Merah', 'Bola Kuning', 'Bola Hijau', 'Bola Kuning'];

console.info('===== for let');
for (let i=0; i<keranjangBola.length; i++) {
  console.info(keranjangBola[i]);
}

console.info('===== for of');
for (const bola of keranjangBola) {
  console.info(bola);
}

console.info('===== for in');
for (const index in keranjangBola) {
  console.info(keranjangBola[index]);
}

console.info('===== foreach');
keranjangBola.forEach(bola => {
  console.info(bola);
})

console.info('===== find 1 data');
const bolaKuning = keranjangBola.find(bola => bola === 'Bola Kuning');
if (bolaKuning) {
  console.info('Bola Kuning Ada');
} else {
  console.info('Bola Kuning Tidak Ada');
}

const bolaHitam = keranjangBola.find((bola) => bola === 'Bola Hitam');
if (bolaHitam) {
  console.info('Bola Hitam Ada');
} else {
  console.info('Bola Hitam Tidak Ada');
}

console.info('===== filter data');
const wadahBolaKuning = keranjangBola.filter((bola) => bola === 'Bola Kuning');
console.info(wadahBolaKuning);
