---
title: Sway Config
tags:
  - self
---
Penjabaran konfigurasi dotfile swaywm yang aku pakai sekarang, yang utamanya ditujukan untuk aku sendiri sebagai referensi ketika akan memakai dotfile-dotfile ini di mesin lain.

Backup dotfile bisa diakses di [sini]() (TBA).

# sway/config

Konfigurasi config sway diambil dari dotfile yang dibuat oleh package `sway-config-fedora`. Dependensi yang mungkin perlu dipasang kalau nggak menggunakan Fedora Spin:

- `foot` - terminal
- `rofi / rofi-wayland` - app launcher
- dotfile-dotfile yang ada di `/usr/share/sway/config.d` dan `/etc/sway/config.d` - *TBA di backup dotfile. Supaya bisa mendapat prioritas lebih, modifikasi perlu dimasukkan di .config/sway/config.d*

Konfigurasi tambahan yang aku buat:

1. `mako` - notification
2. `wpaperd` - wallpaper service - *perlu compile sendiri untuk distro selain Arch. Ada contoh konfigurasi dasar yang menggunakan swaybg* - [github](https://github.com/danyspin97/wpaperd)
3. Uncomment input touchpad dari config sway, ganti device name jadi `input type:touchpad` (mengandalkan deteksi otomatis mesin)
4. `swaynagmode` - miscellaneous untuk navigasi exit sway session dengan keyboard- [github](https://github.com/b0o/swaynagmode)
5. `copyq` - clipboard manager - *sudah termasuk keybind dan window management rules*
6. Tambahan `[Xwayland]` di kudul window yang menggunakan Xwayland
7. Aturan untuk floating window, termasuk untuk Thunar (commented), KDE Connect, dan game Steam (dengan rule `class=".*steam_app.*]`)
8. `kdeconnectd` - Autostart daemon KDE Connect
9. `kdeconnect-indicator` - system tray untuk KDE Connect
	- Kalau sering bermasalah (nggak muncul di tray, misal) bisa uncomment line selanjutnya (dan comment line kdeconnect-indicator) untuk menggunakan `xfconnect-indicator.py` (pyhton script untuk alternatif indikator bawaan KDE Connect - [github](https://github.com/juanramoncastan/xfconnect-indicator))
10. `fcitx5` (untuk `mozc`) - bisa diganti dengan ibus sesuai preferensi
11. `otd / OpenTabletDriver` - Autostart daemon driver pentab - [situs](https://opentabletdriver.net/)
12. Keybind untuk Compose Key menggunakan `RightAlt`
13. Keybind untuk `Dolphin` - bisa diganti dengan file manager lain atau dihapus
14. Pengaturan gap/jeda antar window
15. Autostart `rclone` untuk fileserver pribadi - perlu setup rclone terlebih dahulu, sekaligus mengganti direktori di dalam command kalau perlu

# Waybar

TBA.

# Environment values

Mengatur penggunaan dark mode, input mode, dan scaling aplikasi Qt.

## GTK-related

Pengaturan aplikasi GTK diatur dengan file `.gtkrc-2.0` dan `settings.ini` di direktori `.config/gtk-3.0` / `.config/gtk-4.0`. Isinya pengaturan tema GTK menggunakan `Adwaita-dark` (untuk gtk 3.0 & 4.0, juga preferensi untuk dark mode) dan IM module `fcitx`.

## .profile

Pengaturan aplikasi Qt menggunakan file `.profile` sebagai pusat pengaturan environment value. `QT_QPA_PLATFORMTHEME`, untuk mengatur tema aplikasi Qt, diatur dengan menggunakan `qt5ct - qt6ct`, yang masing-masing menggunakan pengaturan:

- Tema `Fusion`
- Warna tema `Breeze-dark`
- Font ukuran 11, fonts.conf (cukup generate sekali karena digunakan sistem):
	- [x] Antialiasing
	- [x] Hinting
	- [x] Hinting style: Full
	- [x] Subpixel geometry: rgb
	- [x] Automatic hinting
	- [ ] LCD filter: lcdnone
	- [x] Font resolution: 96 dpi

`QT_SELECT_DARK_THEME` juga diatur dengan nilai `1`.

### fcitx5-related

Diatur dengan mengisi  environment value untuk `XMODIFIERS`, `QT_IM_MODULE` (untuk Qt < 6.7) dan `QT_IM_MODULES` (untuk Qt > 6.7) dengan `fcitx` atau sepadan - `QT_IM_MODULES` diisi dengan `"wayland;fcitx"` karena versi Qt 6.7 dan setelahnya sudah mulai mendapat dukungan yang lebih bagus soal penggantian input, atau setidaknya begitu asumsiku.

### Qt scaling bug(?)

~~Rasanya scaling UI aplikasi Qt jadi jauh lebih besar dari seharusnya (ini alasanku menggunakan Thunar di sway) - kalaupun bisa diubah pengaturannya (mengakali dengan menggunakan tema `Fusion` yang lebih compact), beberapa bagian seperti drop-down menu masih sangat besar. Beberapa tiket isu di github terkait ini diantaranya [ini](https://github.com/swaywm/sway/issues/2424) (menyarankan memakai `QT_FONT_DPI` & `QT_WAYLAND_FORCE_DPI` = `physical`, tapi masalahnya belum hilang) dan [ini](https://github.com/WayfireWM/wayfire/issues/2039)~~

(Harusnya) sudah beres dengan mengotak-atik `QT_FONT_DPI` & `QT_WAYLAND_FORCE_DPI`. Sepertinya ini perlu diganti per mesin/layar, tapi yang aku pakai sekarang 88 dpi. Pengaturan skala yang lain juga ada di dalam file ini, tapi harusnya semua menggunakan value default. Pengaturan dpi dan font scale pada akhirnya kembali ke preferensi masing-masing.