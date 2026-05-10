---
title: Sway Dotfiles
tags:
  - slipbox
---

![[sway-desktop.png]]

Penjabaran konfigurasi Sway Compositor/Swaywm yang aku pakai sekarang, utamanya ditujukan untukku sendiri sebagai referensi kalau nanti dipakai di komputer lain. 

Backup dotfile bisa diakses di [sini](https://copy.maulanamd.my.id/share/dotfiles/) (unduh direktori sebagai zip di pojok kanan bawah UI copyparty).

# terkait dotfiles

Alasan file konfigurasi di linux disebut dotfile(s) simpel, karena file dan direktori terkait menggunakan awalan titik / dot, yang membuat file-file ini tidak tampil secara default kepada user. Jika menggunakan GUI file manager seperti `dolphin` (KDE), `nautilus` (Gnome), atau `nemo` (Cinnamon), (harusnya) file tersembunyi seperti ini bisa dilihat dengan menggunakan keybind `Ctrl + H`. Konsepnya sama dengan hidden file dan folder di Windows, hanya saja di Windows sistemnya berupa toggle, sedangkan di Unix menggunakan awalan titik seperti ini.

Direktori `~/.config` (`~` berarti singkatan dari direktori `/home/[username]`, atau juga bisa digantikan dengan `$HOME` dalam file konfigurasi, secara fungsi “sama saja”) berisi konfigurasi di tingkat user untuk package yang dipasang. Perhatikan bahwa direktori di dalam backup dotfile yang aku punya tidak memiliki titik di depannya tapi memiliki nama yang sama—isi masing-masing direktori, ataupun file (`bashrc` dan `profile`) hanya perlu diubah nama file/direktorinya saja.

Direktori `~/.local` normalnya berisikan empat subdirektori: `/bin`, `/lib`, `/share`, dan `/state`; `/bin` berarti *binary/binaries*, atau aplikasi, `/lib` berarti *library/libraries*, kurang lebih filesystem yang diperlukan sebagai dependensi oleh aplikasi, `/share` berisi file-file non-konfigurasi yang dibuat oleh aplikasi di tingkat user, dan `/state` berisikan log yang dicatat oleh aplikasi ketika diperlukan oleh aplikasi itu sendiri—*clipboard manager*, misalnya, sepengetahuanku meletakkan catatan histori clipboard di direktori ini atau `~/.cache`. Menghapus pemasangan aplikasi di tingkat user (non-flatpak, seperti jika memasang aplikasi dari script yang didapat dari github, seperti `lf` yang konfigurasinya tertulis di sini) sejatinya semudah menghapus binary terkait di `~/.local/bin`, misalnya.

# .config/sway

Konfigurasi `sway` sudah ditulis ulang/rebase sehingga tidak bergantung kepada file-file `/config.d` dari `sway-config-fedora`.

File konfigurasi sway (`config`) sudah berisikan komentar sebagai keterangan konfigurasi, tapi rangkuman konfigurasi juga bisa dilihat di bawah.

Package yang digunakan di dalam konfigurasi ini:

- `foot` - terminal
- `rofi` / `rofi-wayland` - app launcher / menu
- `waybar` - status bar
- `mako` - notification
- `sway-contrib`  untuk script tambahan, seperti `grimshot` untuk Screenshot
- `playerctl` - media button
- `wl-color-picker` - color picker - [jgmdev/wil-color-picker](https://github.com/jgmdev/wl-color-picker)
- `wpaperd` - wallpaper manager - [danyspin97/wpaperd](https://github.com/danyspin97/wpaperd)
- `copyq` - clipboard manager
- `kdeconnectd` - KDE Connect (karena sudah terbiasa menggunakan ini) - termasuk autostart `kdeconnect-indicator` untuk tray support
- `fcitx5` dan `fcitx5-mozc` - japanese input support
- `nm-applet` - akses `networkmanager` via tray
- `lxpolkit` - policy kit dari lxqt
- `otd` - OpenTabletDriver, manager pen tablet

Konfigurasi kustom yang aku buat:

1. Pengaturan floating untuk window kecil (menu, task dialog), termasuk untuk aplikasi-aplikasi yang menggunakan window semacam ini (seperti `pavucontrol`), dan game/aplikasi yang menggunakan Steam dan Proton (dengan aturan class `.*steam_app.*` dan `.*steam_proton.*`).
2. Keybind untuk Compose Key menggunakan `RightAlt`
3. Keybind untuk file manager (`Ctrl+T`)
4. Pengaturan gap/jeda antar window dan membuat window menjadi borderless
5. Autostart `rclone` untuk fileserver pribadi - perlu setup rclone terlebih dahulu, sekaligus mengganti direktori di dalam command kalau perlu
6. Utilitas dari `sway-config-fedora`, yang dimasukkan menjadi satu di dalam `config`:
	1. `systemd-cgroups`
	2. `systemd-session`
	3. `xdg-desktop-autostart`
	4. `xdg-user-dirs`
	5. `bindings-brightness`
	6. `bindings-volume`
	Skrip terkait sudah dimasukkan ke dalam `config/sway/scripts`

# .config/waybar

`config.jsonc` dan `style.css` sudah ditulis ulang/rebase—konfigurasi per modul diletakkan di `config/waybar/modules`, dan script tambahan diletakkan di `config/waybar/scripts`.

Package yang digunakan di dalam konfigurasi waybar:

- `pavucontrol` / `pavucontrol-qt` - audio & volume manager
- `pulseaudio` - daemon audio
- `mpris` - media state (play/pause/dst.)

Script tambahan yang ada di direktori `config/waybar/scripts`:

- `keyboard-state.sh` - Caps/Num/ScrollLock notifier - [ErfanRasti/dotfiles](https://github.com/ErfanRasti/dotfiles/blob/f5fdcc28517f8fc4926bdbda92aca4cfcf0aea86/dotfiles/waybar/.config/waybar/scripts/keyboard_state.sh)
- `power-menu.xml` - Power-related button - [Alexays/Waybar](github.com/Alexays/Waybar/blob/master/resources/custom_modules/power_menu.xml)

# .config/foot

Terminal emulator. Dipilih karena 1) bawaan dari sway, dan 2) mendukung sixel untuk menampilkan gambar di terminal.

File konfigurasi (`foot.ini`) diekspor dari konfigurasi bawaan foot (`/etc/xdg/foot/foot.ini`). Pengubahan:

- Disable `locked-title` - judul window bisa berubah mengikuti aplikasi yang berjalan - konfigurasi tambahan terkait bisa dilihat di [[sway-dotfiles#bashrc]]

# .config/lf

File manager TUI. Dipilih karena 1) alasan edgy: GUI file manager masih terhitung bloat, dan 2) alasan yang lebih masuk akal: ingin mencoba konfigurasi sendiri file manager TUI sesuai kebutuhan, dan sukses.

File konfigurasi (`lfrc`)  diambil dari wiki `lf` di github ([link](https://github.com/gokcehan/lf/wiki/Tutorial)). Penambahan:

- Open command untuk file teks dan gambar, yang setelah konfigurasi lebih lanjut rasanya redundan tapi masih mager buat dihapus/ganti.
- Menyalakan fungsi preview menggunakan skrip `scope.sh` dari wiki `lf` di github, yang sudah dimodifikasi dengan tambahan beberapa jenis file seperti .kra dan .psd.
	- Optimasi preview `lf` dengan menggunakan `lfimg-sixel` ([github](https://github.com/horriblename/lfimg-sixel))

Skrip previewer, `preview` dari `lfimg-sixel` dan `scope.sh` yang sudah dimodifikasi tersedia di direktori `lf/scripts`. Selain itu, ada file konfigurasi `colors` dan `icons` yang seingatku belum dimodifikasi sama sekali, dari wiki `lf` ([link](https://github.com/gokcehan/lf/wiki/Colors-and-Icons)).

# .config/mako

Konfigurasi untuk `mako`, utilitas notifikasi yang aku pakai. Isinya kustomisasi UI seperti font dan fontsize, warna, dan ukuran pop up notifikasi.

# .config/wpaperd

Konfigurasi untuk `wpaperd`, utilitas pengatur wallpaper yang aku pakai. Isinya pengaturan letak direktori wallpaper, durasi per wallpaper sebelum berpindah, mode tampilan wallpaper, dan pengurutan tampilan wallpaper dari direktori. Kalau cuma menggunakan satu wallpaper saja, lebih baik menggunakan utilitas `swaybg` dari bawaan sway yang bisa dikonfigurasi di `.config/sway/config`.

# .swaylock

Konfigurasi untuk `swaylock`, utilitas lock screen bawaan sway. Isinya cuma kustomisasi bg lockscreen beserta wallpaper yang dirujuk.

# `gtk`-related

Konfigurasi ini terkait dengan 3 file, semuanya untuk mengatur tema dan mode gelap untuk aplikasi berbasis gtk, sekaligus mengarahkan metode input kepada fcitx5:

- `~/.gtkrc-2.0`
- `~/.config/gtk-3.0/settings.ini`
- `~/.config/gtk-4.0/settings.ini`

# `krita`-related

Konfigurasi yang dibuat secara otomatis oleh Krita, diantaranya:

- `kritadisplayrc` - terkait pengaturan display, seperti HiDPI
- `kritarc` - terkait value pengaturan secara umum, seperti brush maupun `state`
- `kritashortcutsrc` - tekait kustomisasi shortcut yang digunakan terakhir

# .profile

Fungsi `~/.profile` adalah tempat sistem linux membaca flag environment / env yang diaplikasikan secara global di tingkat user. Kalau env flag ini dinyalakan per aplikasi, bisa dimasukkan ke dalam command ketika dibuka lewat terminal ataupu dimasukkan ke dalam desktop file jika dibuka lewat app launcher (KDE punya utilitas `kmenuedit` atau `Menu Editor` sebagai frontend GUI, sedangkan lokasi desktop file di tingkat user sendiri ada di `~/.local/share/applications` - aku kurang tahu utilitas serupa di Gnome atau DE lainnya).

Rangkuman isi file ini:

- Pengaturan session type
- Pengaturan platform theme untuk aplikasi Qt (menggunakan `qt5ct` dan `qt6ct`), termasuk untuk mengatur mode gelap sebagai mode display utama
- Pengaturan input module dengan `fcitx` untuk aplikasi berbasis Qt `< 6.7` maupun setelahnya
- Pengaturan scaling dan font DPI untuk aplikasi berbasis Qt

Sudah terdapat anotasi untuk memperjelas fungsi konfigurasi.

# .bashrc

Fungsi `~/.bashrc` adalah mengatur konfigurasi `bash`, *command-line shell* yang menjadi bawaan sebagian besar distro linux. Kalau kamu baru tahu soal `bash` dan *command-line shell* dari sini, besar kemungkinan distro yang kamu gunakan menggunakan `bash` sebagai perantara command-line.

Dasar dari `.bashrc` diambil dari bawaan Fedora, dengan penambahan diantaranya:

1. Penggunaan `bash-preexec.sh` dari rcaloras/bash-preexec ([github](https://github.com/rcaloras/bash-preexec))
2. Otomasi pengubahan judul `foot` menjadi aplikasi yang dijalankan (`foot` → `lf` ketika membuka `lf`, misalnya)[^1]
3. Alias untuk `lf` dari `lfimg-sixel`
4. Alias untuk integrasi `fzf`
5. export env `EDITOR` dan `TERMINAL`

[^1]: Menjalankan aplikasi terminal dari app launcher masih memerlukan modifikasi di desktop file terkait - yang aku gunakan untuk lf misalnya `Exec=foot -T "lf" sh -c "/usr/bin/lfrun"` - `-T` untuk mengatur judul window `foot`, dan `sh -c` menyebutkan command yang dijalankan dengan bash