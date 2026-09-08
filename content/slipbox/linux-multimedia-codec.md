---
title: "Linux Multimedia Codec"
tags:
  - slipbox
---
Jadi, kamu sudah melakukan instalasi Linux sendiri di pirantimu karena muak dengan Windows sekarang ini. Selamat!

Salah satu langkah yang menurutku penting setelah instalasi, selain update sistem, adalah memasang media codec (lebih tepatnya baru kejadian juga setelah instalasi Fedora di laptop baru hehe). Sistem linux pada dasarnya sudah menyediakan multimedia codec yang bersifat bebas/*free*, tapi untuk penggunaan sehari-hari sebagai pengganti sistem operasi lain, ini seringkali belum cukup, karena beberapa alasan. Solusinya adalah memasang repositori tambahan yang menyediakan codec *non-free*, yang harusnya tersedia untuk kebanyakan distro kanal umum. Yang tertulis di sini adalah langkah memasang codec multimedia tambahan di distro yang beberapa waktu terakhir aku pakai.

Di Debian, terdapat repositori tambahan ***deb-multimedia*** ([link](https://deb-multimedia.org/)). Untuk Debian 13 Trixie, langkah pertama adalah menambahkan baris ini di `/etc/apt/sources.list`, daftar repositori utama yang dirujuk oleh sistem Debian di perangkatmu:

```systemd
Types: deb  
URIs: https://www.deb-multimedia.org  
Suites: trixie  
Components: main non-free  
Signed-By: /usr/share/keyrings/deb-multimedia-keyring.pgp  
Enabled: yes
```

Setelah itu, jalankan perintah ini di terminal untuk memasang keyring kredensial untuk deb-multimedia, agar `apt` bisa terhubung dengan server repositori:

```bash
wget https://www.deb-multimedia.org/pool/main/d/deb-multimedia-keyring/deb-multimedia-keyring_2024.9.1_all.deb  
sudo dpkg -i deb-multimedia-keyring_2024.9.1_all.deb
```

Terakhir, perbarui sistem secara penuh, untuk memperbaharui codec yang sudah terpasang di sistem:

```bash
sudo apt update
sudo apt dist-upgrade
```

Untuk Fedora, ada repositori ***RPM Fusion*** ([link](https://rpmfusion.org/RPM%20Fusion)) yang berisikan perangkat lunak tambahan yang tidak dibawa oleh Fedora Project dan Red Hat.

Semua pemasangan tambahan seperti ini di Fedora dan sistem berbasis rpm lainnya menggunakan package .rpm, jadi langkah pertama adalah memasang package `rpmfusion-free` dan `rpmfusion-nonfree`, dengan mengunduh kedua package tersebut di link [ini](https://rpmfusion.org/Configuration) sesuai dengan versi distro yang terpasang.

Misalkan kedua package tersebut diunduh di `~/Downloads`, masuk ke direktori unduhan dan pasang dengan `dnf` (`free` dulu, baru `nonfree` - di sini aku menggunakan Fedora 43):

```bash
cd Downloads/
sudo dnf install ./rpmfusion-free-release-43.noarch.rpm
sudo dnf install ./rpmfusion-nonfree-release-43.noarch.rpm
```

Atau buka file yang sudah diunduh lewat web ataupun file browser.

Kalau ingin memasang perangkat lunak dari RPM Fusion lewat app store (Discover (KDE) atau Gnome Software (Gnome)), jalankan juga perintah ini supaya metadata aplikasi bisa keluar di app store tersebut (perintah kedua terutama untuk Fedora 41 ke atas yang menggunakan DNF5):

```bash
sudo dnf update @core
sudo dnf install rpmfusion-\*-appstream-data
```

Lalu untuk mengganti package FFmpeg dari repositori utama Fedora ke RPM Fusion, dan memasang codec tambahan:

```bash
sudo dnf swap ffmpeg-free ffmpeg --allowerasing
sudo dnf update @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
```

Untuk memasang codec yang menggunakan akselerasi perangkat keras (Hardware Accelerated Codec):

- Intel

```bash
sudo dnf install intel-media-driver
```

- Intel (lawas)

```bash
sudo dnf install libva-intel-driver
```

- AMD (mesa)

```bash
sudo dnf swap mesa-va-drivers mesa-va-drivers-freeworld
sudo dnf swap mesa-va-drivers.i686 mesa-va-drivers-freeworld.i686
```

- NVIDIA

```bash
sudo dnf install libva-nvidia-driver.{i686,x86_64}
```