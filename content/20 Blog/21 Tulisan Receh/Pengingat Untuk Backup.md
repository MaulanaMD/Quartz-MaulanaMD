---
title: Backup, Backup, Backup!
tags:
  - blog
---
![[Banner Backup.webp]]
> waktu install ulang kemarin - *debian masterrace*

Artikel singkat, karena kepikiran topik ini, dan sepertinya yang paling perlu untuk ditulis saat ini.

Jum'at lalu (26 April) tiba-tiba kena masalah yang lumayan besar - HDD (kirain SSD) laptop mulai failing makin parah, besar kemungkinan karena bolak-balik mati mendadak karena baterai laptop juga sudah hamil dan bermasalah sampe drop ke 2%. Masalah utamanya adalah yang kena paling parah partisi yang penting buat kegiatan akhir-akhir ini (`/` dan `/home`, kurang lebih kayak `C:/` kalau kamu pakai produk Microsoft), sampai dimana direktori `/home` ancur parah isinya dan `/` nggak bisa dibuat boot - direktori `/run` nggak bisa kebaca.

Dari sini kepikiran dan bersyukur kalau workflow akhir-akhir ini (sejak 2023an) sudah mengintegrasikan kegiatan backup file-file penting. Untuk Scanlation, sejak ikut Kouhai semuanya sudah berpusat ke shared folder di GDrive, dan ini juga aku aplikasikan ke Pinandhita. Untuk tulis menulis, karena sekarang semua berpusat ke Vault pribadi Obsidian, semuanya sudah disinkronkan ke hape, dan penulisan blog juga dibuat redundansi ke Vault khusus Quartz, yang disimpan baik di laptop maupun di repositori github. Baru akhirnya kerasa banget pentingnya backup, apalagi file-file penting, bukan hanya file koleksi pribadi.

File-file dokumen pribadi dan kerjaan terdahulu belum dibackup, tapi untungnya partisi yang bersangkutan belum kena masalah yang terlalu besar, jadi masih bisa diakses. Setelah kemarin beres pasang NVME, alhamdulillah masih bisa dipindah dan sekarang (yang penting banget) sudah disinkronkan ke hape.

Ini bukan mau menyatroni atau apa, tapi artikel ini sekiranya bisa dibuat sebagai pengingat, kalau ada file penting entah karena sering dibuka, berhubungan dengan kerjaan, atau memang punya status penting, segera backup, minimal ke cloud drive, entah GDrive, MEGA, ataupun Apple Cloud(?, ga ngerti namanya apa karena nggak make). Kalau memang punya piranti lain yang bisa digunakan sebagai backup redundan seperti hape, simpan aja salinannya - entah secara manual atau menggunakan app sinkronisasi berkala seperti [Syncthing](https://syncthing.net/)(tersedia untuk Unix, Windows, dan MacOS, untuk sinkronisasi antar gawai). Harusnya aplikasi alternatif lainnya juga banyak. Mau beli drive eksternal juga bisa, cuma akhir-akhir ini harganya pada melejit.