---
title: "Berpindah ke Sway"
tags:
  - slipbox
draft: true
---

Jadi… sekarang aku pindah dari KDE Plasma ke Sway. The thing you do for optimization.

Nggak kaget juga sih kalau akhirnya pindah ke kompositor/window manager (kompositor/*compositing manager* untuk yang berbasis wayland/wlroots, *window manager* sendiri adalah istilah lama untuk utilitas serupa dengan dasar x11/xorg - rangkuman yang lumayan komprehensif terkait ini bisa dilihat di artikel linuxteck [ini](https://www.linuxteck.com/x11-vs-wayland/)), sebelumnya aku juga sudah nyoba sedikit-sedikit tiling window manager menggunakan [Polonium](https://github.com/zeroxoneafour/polonium), autotiling manager untuk KWin yang digunakan oleh KDE Plasma sebagai window manager. Karena waktu itu baru menggunakan tiling manager, masih lumayan kagok, apalagi karena Polonium punya mode pengaturan otomatis yang berbeda beda (BTree, Half, Three Coloumn, Monocle, KWin - waktu aku masih menggunakan Polonium seingatku cuma tiga dari lima yang tersedia) - kurang lebih aku sangat minim pemahaman soal auto-tiling lalu tiba-tiba terjun ke workflownya, tapi pengalaman ini sudah lebih dari cukup untuk membiasakan sistem tiling window itu sendiri.

Alasan utama pindah karena Exilium, game gacha yang aktif aku mainkan sekarang, masih agak kembang kempis performanya di KDE Plasma. Setelah ngulik beberapa pengaturan, termasuk membuat swap 3 x RAM, yang aku lihat jadi masalah adalah kapasitas RAM yang ada di laptop yang aku pakai sekarang, mentok 6 GB (aslinya 8 GB, tapi 2 GB sudah terpotong untuk VRAM karena ada integrated GPU) dan naasnya versi laptop ini cuma punya satu slot RAM. Kalaupun bisa nambah, mempertimbangkan pasar komponen komputer dan laptop agak pesimis bisa upgrade, sih. Menggunakan WM/kompositor jelas bisa mengurangi penggunaan RAM, dan karena aku sendiri sudah membiasakan workflownya, terjun langsung seperti ini adalah langkah yang bisa mudah aku lakukan.

That said, pengalaman menggunakan Sway selama 2-3 bulan ini lumayan juga, overall sudah puas dengan pengalaman dan pengaturan yang aku buat. Mempertimbangkan aku memilih Sway (daripada Hyprland - Niri dll. sama sekali luput dari perhatian waktu aku belum terjun bebas ke lubang ini) tanpa alasan tertentu selain kompatibilitas dengan i3 (*yang bahkan aku nggak pakai sebelumnya*), Sway jatuh ke persimpangan antara preferensiku soal UI sistem komputer, kapabilitas kustomisasi yang bisa aku lakukan, dan kebutuhanku saat ini soal GUI yang sat-set tanpa banyak eyecandy. Package dasar sway di Fedora, `sway-config-minimal`, yang apesnya aku pakai duluan, memang termasuk “primitif”(?), tapi package yang digunakan oleh Fedora Spin Sway, `sway-config-fedora`, sangat membantu sebagai impresi pertama dan batu loncatan untuk ricing Sway kedepannya. Kustomisasi Sway yang aku gunakan bisa dibaca rangkumannya di [[sway-dotfiles]].



draft:

1. pembukaan - berpindah dari KDE Plasma ke Sway compositor sejak Maret, sampai akhirnya sekarang settle dengan ricing yang sudah dibuat
2. kenapa berpindah? alasan utamanya karena performa game 3D (exilium) di KDE Plasma masih ngos-ngosan - dulu overestimating performa laptop yang sekarang dipakai, yang ternyata cuma 1-2 step lebih kuat dibandingkan laptop yang sekarang jadi homeserver. akhirnya mencoba pindah ke WM / Compositor karena load resource yang bisa lebih rendah (sudah ngecek permasalahannya di RAM yang kurang, dan laptop lenovo ini nggak bisa ditambah RAM lagi)
3. smooth-sailing migration karena sebelumnya sudah membiasakan konsep tiling window manager dengan addon/plugin Polonium untuk KWin, meskipun agak berbeda (Polonium dynamic tiling manager, tapi kurang enak konfigurasinya karena perlu restart KWin - saat itu masih belum sebegitu paham bagaimana caranya, jadi akhirnya perlu reboot/log out, dan Sway static tiling manager - perlu diset dulu mau split vertikal atau horizontal sebelum membuka window baru)
4. dari perjalanan migrasi itu, so-so nyaranin pindah ke tiling WM/Compositor. kalau tertarik dengan workflownya dan ada yang dikejar dari WM (kustomisasi dan pengalaman ricing sendiri, performa yang sedikit (tapi terasa) lebih unggul karena bloat DE, ataupun ingin memegang kontrol ke komputer sendiri), worth aja, tapi kalau masih belum mantap lebih baik membiasakan workflow tiling window manager dulu - Niri mungkin nggak sebegitu karena masih lumayan lepas dari keyboard? tapi Hyprland dan terutama Sway sangat bergantung ke input keyboard - kembali ke konsep [[starting-out|memulai belajar]] yang dilakukan perlahan tapi pasti
5. list aplikasi/utilitas yang dipakai sekarang, termasuk wikilink ke dotfiles
	Selain yang sudah ada di dotfiles:
	- Floorp - web browser
	- Obsidian - writing utility
	- Bottles - Wineprefix manager (mostly for gaming but also for other thing like EAC)
	- Lutris, Steam - Game launcher
	- PixelBatch (flatpak) - GUI Image converter
	- ferrosonic - TUI Navidrome client
	- Kid3-qt - Audio tagger
	- Vesktop (flatpak) - Discord wayland-compatible client
	- Signal (flatpak) - Messaging app
	- Flatseal (flatpak) - Flatpak environment manager
	- `lf`-related:
		- Mupdf - `.pdf` previewer dependency
		- Transmission - `.torrent` previewer dependency
		- ranger - `rifle` for opener (technically can just use `rifle.sh` from ranger repo)
		- atool, bsdtar, unrar, 7z, unzip - archive extractor and previewer dependency
		- odt2txt, xlsx2csv - document previewer dependency
		- pandoc - multiple media format previewer dependency
		- jq / `json.tool` from python - json previewer dependency
		- mediainfo - audio and video previewer dependency
		- chafa - image previewer with sixel (since foot supports sixel)
		- exiftool - fallback previewer dependency for media files
		- epub-thumbnailer - epub previewer dependency
		- catdoc - `.rtf` / `.doc` previewer dependency
		- pygmentize, highlight - text highlighting previewer dependency
	- Betterbird - Mail client
	- Haruna - Media player
	- Htop - System task manager
	- Krita - Drawing and image editor
	- Inkscape - Vector image editor
	- Neovim - Terminal text editor
	- Okular - Document viewer
	- Spek (flatpak) - Audio spectrum analysis
	- RSS Guard (flatpak) - RSS client
	- Qrca - QR code scanner
	- ExactAudioCopy (wine), whipper - CD ripping utilities
	- Dolphin - GUI file manager, alternatif lf buat beberapa task tertentu
