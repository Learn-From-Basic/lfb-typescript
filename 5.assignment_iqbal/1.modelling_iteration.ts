enum EWarna {
    Hitam = 'Hitam',
    Putih = 'Putih',
    Merah = 'Merah',
    Biru = 'Biru',
}
type Mobil = {
    Produk: string;
    Brand: string;
    Warna: EWarna;
}
const mobilAvanza: Mobil = {
    Produk: 'Avanza',
    Brand: 'Toyota',
    Warna: (EWarna.Hitam, EWarna.Putih, EWarna.Merah, EWarna.Biru)
}
console.info('mobilAvanza', mobilAvanza);
const mobilVeloz: Mobil = {
    Produk: 'Veloz',
    Brand: 'Toyota',
    Warna: EWarna.Hitam,
}
console.info('mobilVeloz', mobilVeloz);
const mobilErtiga: Mobil = {
    Produk: 'Ertiga',
    Brand: 'Suzuki',
    Warna: (EWarna.Hitam, EWarna.Putih, EWarna.Merah, EWarna.Biru)
}
console.info('mobilErtiga', mobilErtiga);
const mobilJimny: Mobil = {
    Produk: 'Jimny',
    Brand: 'Suzuki',
    Warna: EWarna.Putih,
}
console.info('mobilJimny', mobilJimny);