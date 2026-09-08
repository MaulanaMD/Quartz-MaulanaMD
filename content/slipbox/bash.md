---
title: "Bash (Linux) - Snippets"
tags:
  - slipbox
draft: true
---
Kumpulan resource terkait menjalankan aplikasi di linux/unix via bash.

## Bash Execution: `&`, `;`, `&&`, `||` [^1]

Semua karakter di atas bisa digunakan untuk menyambung jalannya perintah satu setelah yang lain.

- `&` digunakan untuk menjalankan dua perintah secara bersamaan; perintah **a** dilakukan di latar belakang/*background*, sedangkan perintah **b** dijalankan secara normal.
- `;` digunakan untuk menjalankan perintah secara berurutan; perintah **b** dijalankan setelah perintah **a** sebelumnya *selesai* dijalankan—selesai berarti perintah sebelumnya telah keluar, terlepas dari berhasil atau tidaknya.
- `&&` digunakan untuk menjalankan perintah secara berurutan, *jika perintah yang lebih awal berhasil dijalankan*; setelah perintah **a** berhasil dijalankan, jalankan perintah **b**.
- `||` digunakan untuk menjalankan perintah secara berurutan, *jika perintah yang lebih awal gagal dijalankan*; setelah perintah **a** selesai dijalankan dan gagal, jalankan perintah **b**—jika perintah **a** berhasil, jangan jalankan perintah **b**.

Demonstrasi bisa dilakukan dengan menjalankan dua perintah `echo`, untuk menampilkan/mengulang frasa yang dimasukkan setelahnya sebagai hasil.

- `echo Hello & echo World`
- `echo Hello ; echo World` 
- `echo Hello && echo World`
- `echo Hello || echo World`

```
thea2@fedora:~$ echo Hello ; echo World
Hello
World
thea2@fedora:~$ echo Hello & echo World
[1] 84078
World
Hello
[1]+  Done                       echo Hello
thea2@fedora:~$ echo Hello && echo World
Hello
World
thea2@fedora:~$ echo Hello || echo World
Hello
thea2@fedora:~$ 
```

[^1]: https://dev.to/bowmanjd/bash-execution-tips-for-shell-jockeys-and-script-fabricators-5dan