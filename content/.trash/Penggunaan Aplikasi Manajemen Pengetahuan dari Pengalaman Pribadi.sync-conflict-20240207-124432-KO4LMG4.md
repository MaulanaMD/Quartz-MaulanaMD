---
tags:
  - to-do
  - writing/blog
---
Parent notes: [[Use Case Obsidian - Outline]]

---

Artikel ini sudah ditulis untuk kedua kalinya. Sebelumnya, penulisannya dibuat dengan tujuan yang sama, untuk sharing use case pribadi dari Obsidian, tapi arah penulisannya makin lama jadi tutorial dasar fitur-fitur Obsidian yang, menurutku, nggak punya nilai guna lebih selain reiterasi apa yang bisa kamu dapatkan dari dokumentasi fitur-fitur Obsidian di web resminya.

Artikel ini bukan ditujukan untuk menjadi acuan saklek atas bagaimana kamu harus menggunakan aplikasi manajemen pengetahuan. Menurutku secara pribadi, untuk penggunaan aplikasi yang use casenya bakal berbeda dari individu ke individu, penggunaan yang paling bagus adalah menyesuaikan dengan kebutuhanmu di satu waktu.

Ambil contoh kalau aku butuh aplikasi buat manajemen catatan kecil, entah buah pikiran yang random terbesit di pikiran, atau catatan sehari-hari yang perlu dicatat entah dimana pokoknya biar nggak perlu dipikirkan terus-terusan seperti hasil diskusi singkat. Setelah mencari rekomendasi di mana-mana dan menemukan satu  review atau rekomendasi di internet yang meyakinkan, seperti [video esai yang luar biasa dari No Boilerplate ini](https://www.youtube.com/watch?v=DbsAQSIKQXk&t=554s&pp=ygUXbm8gYm9pbGVycGxhdGUgb2JzaWRpYW4%3D), aku akhirnya nyoba Obsidian. Apakah kemudian aku perlu menggunakan Obsidian sesuai dengan peruntukan, ataupun use case terbaiknya seperti yang direkomendasikan orang-orang, sebagai aplikasi manajemen pengetahuan? Tentu saja nggak. Akan lebih baik untuk menggunakan aplikasi ini sesuai dengan kebutuhanku sebelumnya, karena a) aku nggak perlu belajar banyak di awal seputar sistem manajemen pengetahuan HANYA untuk make Obsidian, dan b) aku bisa menunda itu nanti ketika aku butuh atau tertarik dengan fitur-fitur yang lebih in-depth.

Hence, tujuan utama artikel ini sebagai tempat sharing penggunaanku dan sebagai referensi kalau kamu punya atau ingin punya use case serupa. IMO, nanti kalian bakal punya pemahaman sendiri seputar bagaimana penggunaan Obsidian (ataupun aplikasi manajemen pengetahuan lain, tapi aku kurang yakin bisa diaplikasikan seutuhnya untuk aplikasi yang sistem dasarnya berbeda jauh - lihat [post blog sebelumnya untuk jenis-jenis dan perbandingannya](https://maulanamd.wordpress.com/2023/12/30/saya-mencoba-aplikasi-tulis-menulis-dan-manajemen-pengetahuan/)) seharusnya, seperti bagaimana menata bagian-bagian notes yang rapi dan nyaman dilihat, ataupun penggunaan sistem penulisan [sintaks Markdown](https://www.markdownguide.org/basic-syntax/) secara efektif.

# Penggunaan Obsidian secara Pribadi

Kalau diurutkan dari pengelompokan folder di Vault pribadiku, aku menggunakan Obsidian untuk hal-hal ini:

- Mencatat daily tasking dan to-do
- Tempat catatan kecil yang terpusat dan mudah dicari
- Knowledge management atau personal wiki dari apa-apa saja yang sudah kubaca dan pelajari
- Manajemen aspek-aspek penulisan cerita fiksi
- Manajemen penulisan artikel blog dari bidang yang aku minati ataupun menarik untuk disebarkan

Penejelasan terkait tiap-tiap jenis penggunaan akan dijabarkan di bagian selanjutnya
## Daily tasking & to-do list

Penggunaan Obsidian yang paling sering dan paling penting buatku untuk saat ini adalah tracking apa yang harus dilakukan dalam satu hari, satu minggu, maupun dalam jangka waktu menengah dan panjang. Ada dua plugin Obsidian yang berkaitan dengan penggunaan ini, yaitu *Core Plugin* **Daily Notes** dan **Template**.

Kegunaan plugin Daily Notes itu simpel. Obsidian bakal generate secara otomatis satu note yang bisa kamu gunakan untuk apapun secara harian. Digabungkan dengan plugin Template, yang memungkinkan kamu membuat kerangka template sehingga bisa membuat note baru tanpa repot-repot menulis ulang kerangkanya, kamu bisa menggunakan keduanya untuk manajemen daily tasking sesuai dengan kebutuhanmu.

Ini template daily notes yang saat ini aku pakai, didasarkan dari [thread template daily notes dan tasking](https://forum.obsidian.md/t/a-template-for-daily-notes/15619)  di Forum Obsidian oleh Eleanor Konik:

```
# {{date}}

![[Tasking#Priority Tasking]]

---
## Occurences

- [ ] Japanese Drill
- [ ] Drawing

---
## Minor Tasking

- [ ] 

---
## Reading Log

![[Reading List#Sedang Dibaca]]

*Goal is at least 3-4 pages worth of reading per day*

 - 

---
## Accomplishments 

- 

---
## Gratitude

- 

---
## Health

- 
```

Ada fitur yang aku rasa sedikit advanced yang dipake dalam template ini. Kalau kalian menggunakan "!" sebelum menyantumkan wikilink/internal link notes lain, notes yang kalian cantumkan linknya akan keluar sebagai interactive preview (interaktif jika punya elemen yang sifatnya interaktif, seperti checkbox, tapi nggak bisa diedit secara langsung di notes yang kalian buka saat ini). Penggunaan "#" di dalam wikilink berarti aku menspesifikkan heading tertentu untuk ditampilkan di notes saat ini. Sebagai contoh,

```
![[Reading List#Sedang dibaca]]]
```

berarti aku ingin menampilkan heading/subjudul Sedang dibaca di dalam notes Reading List.

![[Pasted image 20240207122318.png]]

Dengan tampilan tema yang aku gunakan, kurang lebih akan keluar seperti ini. Ikon link di pojok kanan atas bisa digunakan untuk mengedit heading yang ditampilkan di notes aslinya.

*Occurences* maksudnya kegiatan harian yang aku harap bisa dilakukan tiap hari, tanpa perlu ditulis ulang tiap harinya. Sebelum menggunakan template yang ini, aku perlu nulis ulang task yang ada di bagian ini karena nggak kepikiran bisa digunakan seperti ini. Pegel dan bikin males untuk dikerjakan.

*Minor Tasking* maksudnya apa saja yang perlu atau ingin aku lakukan dalam satu hari, bisa berupa pemecahan task yang sudah disebutkan di notes Tasking sehingga bisa dikerjakan secara lebih atomik/selangkah demi selangkah atau kegiatan lain yang perlu dikerjakan tapi belum ditulis di bagian-bagian lain.

*Reading Log* dibuat untuk ngetrack apa aja yang sudah dibaca dalam satu hari. Tujuan utama dibuat satu bagian yang spesifik ini biar jadi dorongan membuat habit baca buku atau artikel non-hiburan, meskipun cuma sedikit-sedikit. Biasanya aku isi waktu malam hari karena ngeluangin waktu baca buku di waktu itu, tapi kalau sempat baca di waktu yang lain langsung diisi setelah selesai baca satu bagian yang bisa berhenti. Biasanya bagian ini diisi rangkuman singkat atau ide pokok dari bagian yang dibaca sebelumnya, biar nanti bisa dikembangkan lebih lanjut pencatatannya di folder Pengetahuan.

*Accomplishments, Gratitude,* dan *Health* diambil secara langsung dari template Eleanor Konik tanpa pengubahan. Kurang lebih deskriptif sesuai dengan subjudulnya.

Menurutku, yang jadi kunci dari penulisan daily notes ini adalah menulis entri terkait sedetil mungkin senyamanmu. Sebelumnya entri-entri selain daily task aku jadikan satu sebagai Notes atau Thoughts, yang ujungnya nggak banyak diisi, dan jadi ngerasa nggak banyak yang aku lakuin dalam sehari.

Sedangkan struktur note Tasking yang menjadi parent notes untuk kegiatan berjangka waktu lebih dari sehari kurang lebih seperti ini:

```
# Priority Tasking

## (Jangka mingguan, dideskripsikan dengan tanggal awal hingga akhir satu minggu)

- [ ] Tasks

## Things that need to be done in the next one month (bulan)

- [ ] Tasks

# No Due Date (sorted by priority/recency)

- [ ] Tasks

# Outstanding Tasks

## Learning
- 
```

Template ini juga disadur dari template buatan Eleanor Konik yang disebutkan di atas.

*Priority Tasking* aku buat berjangka mingguan dan bulanan karena masih butuh membuat urgensi waktu untuk task-task tertentu tapi masih terasa terlalu menyekik kalau harus dijangka secara harian. Task lain yang ingin dilakuka