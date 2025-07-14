# Cara Mengganti Foto Profil

## Langkah-langkah:

1. **Siapkan foto Anda** dengan format:
   - Format: JPG atau PNG
   - Ukuran: 400x400 pixels (square/persegi)
   - Resolusi: Minimum 300x300 pixels
   - Nama file: `profile-photo.jpg`

2. **Copy foto ke folder ini** (`public/pictures/`)
   - Ganti file `profile-photo.jpg` yang ada
   - Atau buat file baru dengan nama `profile-photo.jpg`

3. **Update komponen React** (sudah otomatis):
   - HeroSection.js akan menggunakan `pictures/profile-photo.jpg`
   - YouTubeSection.js akan menggunakan `/pictures/profile-photo.jpg`

4. **Restart server** jika diperlukan:
   ```
   npm start
   ```

## File Structure:
```
public/pictures/
├── profile-photo.jpg          <- Foto utama Anda (GANTI INI)
├── profile-placeholder.svg    <- Placeholder sementara
└── README.md                  <- File instruksi ini
```

## Tips:
- Pastikan foto berkualitas tinggi dan profesional
- Background yang bersih lebih baik
- Wajah menghadap ke depan
- Pencahayaan yang baik
- Format square (1:1 ratio) untuk hasil terbaik

## Troubleshooting:
- Jika foto tidak muncul, cek nama file harus exact: `profile-photo.jpg`
- Refresh browser dengan Ctrl+F5
- Pastikan file tidak corrupt
- Cek ukuran file tidak terlalu besar (max 2MB)
