---
tags:
  - to-do
  - writing/blog
---
Parent notes: [[Use Case Obsidian - Outline]]

---

Artikel ini sudah ditulis untuk yang kedua kalinya. Sebelumnya, penulisannya dibuat dengan tujuan yang sama, untuk sharing use case pribadi dari Obsidian, tapi arah penulisannya makin lama jadi tutorial dasar fitur-fitur Obsidian yang, menurutku, nggak punya nilai guna lebih selain reiterasi apa yang bisa kamu dapatkan dari dokumentasi fitur-fitur Obsidian di [laman resminya](https://help.obsidian.md/Home).

Artikel ini bukan ditujukan untuk menjadi acuan saklek atas bagaimana kamu harus menggunakan aplikasi manajemen pengetahuan. Menurutku secara pribadi, untuk penggunaan aplikasi yang use casenya bakal berbeda dari individu ke individu, penggunaan yang paling bagus adalah menyesuaikan dengan kebutuhanmu di satu waktu.

Ambil contoh kalau aku butuh aplikasi buat manajemen catatan kecil, entah buah pikiran yang random terbesit di pikiran, atau catatan sehari-hari yang perlu dicatat entah dimana pokoknya biar nggak perlu dipikirkan terus-terusan seperti hasil diskusi singkat. Setelah mencari rekomendasi di mana-mana dan menemukan satu  review atau rekomendasi di internet yang meyakinkan, seperti [video esai yang luar biasa dari No Boilerplate ini](https://www.youtube.com/watch?v=DbsAQSIKQXk&t=554s&pp=ygUXbm8gYm9pbGVycGxhdGUgb2JzaWRpYW4%3D), aku akhirnya nyoba Obsidian. Apakah kemudian aku perlu menggunakan Obsidian sesuai dengan peruntukan, ataupun use case terbaiknya seperti yang direkomendasikan orang-orang, sebagai aplikasi manajemen pengetahuan? Tentu saja nggak. Akan lebih baik untuk menggunakan aplikasi ini sesuai dengan kebutuhanku sebelumnya, karena a) aku nggak perlu belajar banyak di awal seputar sistem manajemen pengetahuan HANYA untuk make Obsidian, dan b) aku bisa menunda itu nanti ketika aku butuh atau tertarik dengan fitur-fitur yang lebih in-depth.

Hence, tujuan utama artikel ini sebagai tempat sharing penggunaanku dan sebagai referensi kalau kamu punya atau ingin punya use case serupa. IMO, nanti kalian bakal punya pemahaman sendiri seputar bagaimana penggunaan Obsidian (ataupun aplikasi manajemen pengetahuan lain, tapi aku kurang yakin bisa diaplikasikan seutuhnya untuk aplikasi yang sistem dasarnya berbeda jauh - lihat [post blog sebelumnya untuk jenis-jenis dan perbandingannya](https://maulanamd.wordpress.com/2023/12/30/saya-mencoba-aplikasi-tulis-menulis-dan-manajemen-pengetahuan/)) seharusnya, seperti bagaimana menata bagian-bagian notes yang rapi dan nyaman dilihat, ataupun penggunaan sistem penulisan [sintaks Markdown](https://www.markdownguide.org/basic-syntax/) secara efektif.

Salah satu tujuan lain dari ditulisnya artikel ini adalah karena terpicu oleh beberapa thread dan artikel blog yang pernah kubaca terkait penggunaan Obsidian, yang bakal disebutkan di bagian-bagian yang relevan.

# Penggunaan Obsidian olehku secara pribadi

Kalau diurutkan dari pengelompokan folder di Vault pribadiku, aku menggunakan Obsidian untuk hal-hal ini:

- Mencatat daily tasking dan to-do
- Tempat catatan kecil yang terpusat dan mudah dicari
- Knowledge management atau personal wiki dari apa-apa saja yang sudah kubaca dan pelajari
- Manajemen aspek-aspek penulisan cerita fiksi
- Manajemen penulisan artikel blog dari bidang yang aku minati ataupun menarik untuk disebarkan

## Daily tasking & to-do dalam Obsidian

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

*Priority Tasking* aku buat berjangka mingguan dan bulanan karena masih butuh membuat urgensi waktu untuk task-task tertentu tapi masih terasa terlalu menyekik kalau harus dijangka secara harian. Task lain yang ingin dilakukan tapi sifatnya bukan urgent ataupun memang nggak punya tenggat waktu tertentu dimasukkan di bagian *No Due Date*. *Outstanding Tasks* nggak banyak diubah dari template Eleanor Konik, dan secara pribadi aku juga masih bingung ini diisi apa berdasarkan workflow dan kebutuhan saat ini.

Selain itu, di dalam folder Tasking/To-do tapi di luar topik ini, aku juga menggunakan notetaking Obsidian untuk mencatat goal atau target jangka pendek, menengah, dan panjang, serta perencanaan finansial.

## Obsidian sebagai alat manajemen catatan kecil

Ini kurasa masih masuk fungsionalitas dasar dari Obsidian.

Sebelumnya, catatan kecil seperti menuliskan buah pikiran, catatan kuliah (yang ditulis di laptop), ataupun outlining tulisan, entah itu untuk tugas kuliah atau yang lainnya, aku tulis di dalam file .txt yang nggak punya sistem manajemen yang tertata. Kalau mau baca perjalananku akhir-akhir ini seputar pencarian sistem dan aplikasi manajemen catatan, kamu bisa baca [post blog sebelumnya](https://maulanamd.wordpress.com/2023/12/30/saya-mencoba-aplikasi-tulis-menulis-dan-manajemen-pengetahuan/).

Waktu awal menggunakan Obsidian, aku masih menggunakan sistem manajemen seperti umumnya—folder dengan penamaan sesuai dengan topik yang tidak terurutkan. Tapi sekitar satu-dua bulan lalu, aku mulai merasa kalau manajemen yang "asal taruh" seperti ini rasanya makin merepotkan, dan secara pribadi aku kurang begitu cocok dengan penggunaan fitur *Graph* di Obsidian sebagai salah satu opsi manajemen notes, terutama karena masangin wikilink dan tags buat catatan kecil itu malah bikin ribet. I just want to write stuff so I can go back and check it later. Aku menemukan jawaban dari permasalahan ini di [thread](https://forum.obsidian.md/t/increasingly-atomic-folders-a-workflow/14345) Eleanor Konik seputar atomic notes management dengan menggunakan sistem [Johnny Decimals](https://johnnydecimal.com/), yang bakal kubahas lebih lanjut di bagian akhir artikel ini.

## Obsidian sebagai alat Knowledge Management

Salah satu titik berangkat penggunaan Obsidian sebagai aplikasi manajemen pengetahuan adalah [metode Zettelkasten](https://zettelkasten.de/introduction). Wajar kalau kamu belum pernah dengar ini kalau nggak tertarik ke sistem produktivitas atau manajemen pengetahuan. Aku sendiri baru tahu metode ini setelah menggunakan Obsidian dan masuk sedikit ke dalam rabbit holenya. Kalau kamu tahu Zettelkasten duluan sebelum memakai Obsidian, [thread](https://forum.obsidian.md/t/limit-folders-how-to-use-zettelkasten-in-obsidian/35008) milik Edmund seputar aplikasi Zettelkasten di Obsidian mungkin dapat membantu. Tapi kalau tidak, sama seperti aku, bisa jadi kamu merasa overwhelmed ketika harus belajar sistem baru seperti ini.

Titik tengah dari "dilema" ini adalah menggunakan sistem manajemen arbriter dalam penataan folder dan file catatan terkait ilmu yang dipelajari, tapi tidak dengan sistem yang ketat sebagaimana Zettelkasten.

![[../../00 Meta/06 Attachments/Screenshot_2024-02-07-15-30-48-107_md.obsidian-edit.jpg]]

Gambar di atas adalah manajemen folder yang aku pakai untuk notes terkait hal ini. Struktur ini disadur dari [thread](https://forum.obsidian.md/t/increasingly-atomic-folders-a-workflow/14345) Eleanor Konik yang sudah kusebut sebelumnya seputar manajemen Vault secara atomik, atau yang makin terperinci dari topik umum hingga satuan kategori terkecil.

*Rangkuman Ensiklopedik* merupakan folder rangkuman dari sebuah topik, yang nantinya dihubungkan dengan pembahasan yang lebih terperinci dengan menggunakan wikilink. Fungsionalitas ini juga kurang lebih sama dengan parent notes yang memungkinkan navigasi notes-notes keilmuan lain secara mudah jika perlu masuk kepada pembahasan yang lebih terperinci.

Seperti namanya, *Sumber Referensi* merupakan folder dari notes yang berisi saduran atau simpulan yang didapat dari sumber-sumber tertentu, yang dikategorisasikan berdasarkan bentuk sumbernya, kecuali untuk *Diskusi* yang kurang lebih sebagai dump percakapan dengan teman atas topik tertentu agar lebih mudah diakses, daripada harus repot-repot scrolling medsos saat ingin membaca lagi diskusi tersebut.

*Pertanyaan* berisi daftar topik yang ingin dicari nanti, diisi ketika masih belum ada waktu untuk mencari topik itu.

*Pencerahan dan Sintesis Ide* diambil sepenuhnya dari sistem penataan dari Eleanor Konik. Ini sebenarnya merupakan dua kategori yang dijadikan satu, karena untuk saat ini sifatnya masih interchangeable. Sesuai deskripsinya, folder ini berisi simpulan pribadi ataupun hasil diskusi tentang topik tertentu, yang bukan berasal dari sumber-sumber yang telah di kategorisasikan di folder Sumber Referensi.

Isi *Monolog* dimaksudkan untuk menampung file rekaman dan transkripsi pemikiran yang muncul waktu secara spontan memikirkan topik tertentu, tapi semakin hari isinya berupa pengembangan pemikiran yang tiba-tiba terbesit. Aku punya kebiasaan (entah buruk atau baik) untuk berdialog sendiri ketika sedang memikirkan sesuatu, dan folder ini dimaksudkan untuk mengakomodir dokumentasi saat-saat seperti itu. Monolog yang direkam dan diindekskan dalam folder ini direkam menggunakan *Core Plugin* **Audio Recorder**.

*Keahlian* merupakan folder dump(?)/copy dari artikel-artikel terkait keahlian tertentu, seperti kiat kepenulisan fiksi, yang aku rasa perlu untuk diakses dari waktu ke waktu. Kurang lebih seperti folder bookmark tapi offline first, dan dibagi berdasarkan jenis keahlian yang sedang menjadi fokus ketertarikanku. Obsidian bakal secara otomatis mengatur formatting dari teks asal yang dicopas, jadi nggak perlu repot-repot ngatur formattingnya dari awal lagi setelah dicopas ke notes Obsidian.

Penomoran sebelum nama kategori folder mengikuti sistem Johnny Decimals. Anggap saja ini preview dari pembahasan JDs yang lebih terperinci di bawah.

Ada beberapa tujuan kenapa aku merasa perlu menggunakan manajemen pengetahuan seperti ini. Selain upaya pencatatan apa saja yang sedang dan sudah kupelajari, salah satu alasan besarnya adalah karena aku masih tertarik untuk retracing ilmu yang sudah kupelajari selama kuliah dan mengaplikasikannya ke dalam riset pribadi ataupun sebagai riset lepas. Untuk saat ini ada beberapa topik yang sudah masuk ke dalam list topik yang ingin kubuat menjadi riset lepas, tapi saat ini masih belum menjadi sebuah naskah kerja karena aku masih merasa banyak kurang tahu seputar topiknya secara mendalam, thus kenapa aku memerlukan manajemen pengetahuan.

Buatku, yang jadi kunci dari pembentukan personal wiki seperti ini adalah sebisa mungkin memperbanyak entri semampunya, dengan rajin-rajin mempelajari sesuatu, entah dalam satu kategori atau topik tertentu maupun dalam jenis yang beragam, sekaligus melakukan pencatatan ataupun paling tidak rangkuman dari apa yang sedang dan telah dipelajari. Untuk urusan backlinking, formatting, ataupun tagging notes, bisa dipikir setelah proses pencatatan ini selesai dalam satu satuan waktu yang kalian tentukan sendiri. Bukan berarti baru dikerjakan setelah semuanya selesai, tapi setelah merasa apa yang ditulis ini cukup dalam satu bagian tertentu.

## Obsidian sebagai alat manajemen penulisan cerita

Ada tiga aspek penggunaan Obsidian secara pribadi yang berkaitan dengan manajemen penulisan cerita, dua diantara saat ini lumayan aktif kugunakan: *Worldbuilding, Character Creation & Tracking*, dan *Storywriting*.

As a note, aku masih belum pake secara penuh Obsidian untuk tujuan penulisan cerita. Ada beberapa tulisan yang sebelumnya sudah separuh jadi dari tools penulisan lain, tapi masih belum banyak dilanjutin lagi nulisnya di Obsidian. Tapi manajemen aspek-aspek lain seperti template character notes dan setup plugin sudah jadi, jadi memang tinggal ngumpulin niat doang.

Sebagai referensi, Vanessa Glau punya [artikel Medium](https://medium.com/@vanessaglau/how-i-plan-and-write-fiction-in-obsidian-f140455281c1) terkait penggunaan Obsidian untuk perencanaan dan penulisan cerita fiksi yang cukup komprehensif, mulai dari contoh use case hingga beberapa tautan ke referensi-referensi lain yang menjadi inspirasi use casenya. Aku rasa ini jauh lebih bagus jadi patokan dari apa yang aku lakukan sekarang, selain beberapa aspek yang kubuat sendiri. Ada juga referensi lain berupa pengalaman penulisan novel dengan Obsidian dari P. D. Workman, dengan posisi yang lebih otoritatif dan lebih bagus sebagai patokan daripada tulisan ini, yang bisa dibaca [di sini](https://pdworkman.com/writing-a-novel-in-markdown/).

Salah satu bagian yang aku bangun sendiri (dari referensi sumber-sumber lain tentunya) adalah template character notes.

```
---
tags:
  - character-notes
aliases:
---
# Biography

- Nama:
- Nama Panggilan:
- Tanggal Lahir:
- Tempat Asal:
- Tempat Tinggal Saat Ini:
- Agama/Kepercayaan:
- Pekerjaan:
- Status Hubungan:
- Bahasa:

# Physical Appearance

*Deskripsikan tampilan wajah, perawakan badan, dan pakaian yang paling sering digunakan.*

# Background

*Latar karakter yang penting, seperti kondisi sosial dari asal tempat, keluarga, masa kecil dan remaja.*

# Personality and Traits

*Deskripsikan kepribadian, bagaimana hubungan mereka dengan orang lain (dengan tingkatan relasi dari orang asing hingga orang terdekat), dan sifat menonjol yang membedakan mereka dari orang lain.*

# Powers

*Deskripsikan kekuatan yang dapat digunakan, serta asal-usul dari kekuatan tersebut sedetail mungkin karena urusan metanaratif.*

# Relationships

*Hubungan dengan orang lain yang telah berkontak dengan karakter di dalam cerita, baik yang telah muncul/disebut dalam cerita ataupun belum.*

- Orang tua:
- Saudara/i:
- Anak:
- Teman:
- Kolega:
- Tunangan atau orang spesial:

# Interests

*Kepentingan dan keinginan dari karakter. Dapat pula menyebutkan bagaimana kepentingan tersebut berkonflik dengan kepentingan/keinginan karakter lain.*

# Items and Equipments

*Perangkat dan barang yang dimiliki dan paling sering digunakan oleh karakter, dari urutan yang paling penting hingga paling tidak penting dalam cerita.*

# What they do before the story starts

*Apa yang dilakukan karakter sebelum muncul di dalam cerita.*
```

Template ini didasarkan kepada penjelasan artikel Masterclass tentang [bagaimana cara menulis deskripsi karakter](https://www.masterclass.com/articles/how-to-write-vivid-character-descriptions), ditambah dengan input dari seorang kawan. Deskripsi singkat dari apa saja yang perlu dituliskan di tiap headings ditulis dengan *italics*, sehubungan dengan tampilan tema Obsidian yang kupakai yang memberikan warna-warna berbeda untuk styling paragraf dan heading.

Sama seperti yang disebutkan oleh Vanessa Glau, proses awal dari penulisan cerita seperti ini adalah menuliskan sesegera mungkin ide yang terbesit seputar worldbuilding/karakter/ide cerita, lalu setelah memiliki gambaran yang dirasa cukup seputar arah plot yang diinginkan, memulai proses penulisan cerita. Vanessa Glau juga menyebutkan tentang Plotter vs. Seater, yang aku rasa bisa dijembatani perbedaannya dengan workflow seperti ini

## Obsidian sebagai aplikasi manajemen dan penulisan artikel

Artikel ini dibuat di Obsidian, dengan menggunakan formatting Markdown yang bisa dicopas ke editor Wordpress secara langsung. Bagian yang nggak kompatibel cuma di bagian attachment (yang harus diupload secara manual), dan (sepertinya) snippet code untuk template yang ditaruh di dalam notes artikel ini.

Ada dua hal yang aku butuhkan dalam proses penulisan artikel, selain masalah tracking artikel apa saja yang sudah dan ingin kutulis: *Outlining* dan *Penulisan*. Untuk outlining kerangka artikel, aku memakai template simpel untuk pencatatan rangkuman topik yang dibahas dalam satu artikel, dan kerangka bagian artikel.

```
---
tags:
  - writing/blog
  - writing-meta
---
Artikel kerja: 

---
# Topik

*Rangkuman singkat dan elaborasi dari topik artikel. Sekaligus [[General Types of Blog Articles|jenis dari artikel blog]].*

# Outline

*Pembagian pembahasan dalam artikel, dan beberapa catatan singkat terkait pembahasan tersebut.*

- a
- b
- c
- etc

# Fleeting Notes

*Catatan lain tentang artikel yang tidak termasuk di dalam pembagian di atas, ataupun belum dimasukkan ke dalamnya.*
```

Template ini khusus buat ide tulisan artikel blog. Untuk ide status facebook yang agak panjang biasanya aku letakkan di folder 23-24-25 dari manajemen pengetahuan, sedangkan untuk penulisan riset kecil masih belum kubuatkan templatenya.

Kurang lebih fungsi notes outline/plotting seperti ini adalah buat mempermudah proses godok ide dari topik awal menjadi sesuatu yang actually bisa dikerjakan, karena seringkali aku kejebak dalam kondisi dimana ada ide tulisan yang ingin dibuat tapi nggak ngerti harus dikembangkan seperti apa, atau kepikiran pengembangan tulisan tapi mager atau masih belum ada waktu untuk nulis. Dulu waktu aku kuliah dan mengerjakan tugas mingguan review jurnal, proses penulisannya kurang lebih sama (baca reading material > outlining sampai dirasa cukup detail > nulis), hanya saja di dalam satu file yang sama (bagian outline dihapus/cuma mindah bagian utamanya aja ke Word) dibandingkan sekarang yang dibuat secara terpisah.

Ada referensi penggunaan plugin *Projects* untuk penulisan artikel blog yang bisa dilihat [di sini](https://medium.com/obsidian-observer/how-i-use-obsidian-to-create-a-blog-pipeline-84627aed0d1), yang ditulis oleh Annette Raffan.

# Meningkatkan Quality-of-Life penggunaan Obsidian

TBH, fungsionalitas Obsidian out of the box itu di tingkatan usable tapi masih punya banyak keterbatasan, bahkan dengan Core Plugin sekalipun. Obsidian memungkinkan penggunanya untuk memasang *Community Plugin*, tambahan fitur yang dibuat dan dimaintain oleh komunitas pengguna Obsidian sendiri, serta *Community Theme* untuk kustomisasi tampilan Obsidian. Untuk tema sendiri, selain Community Theme, kustomisasi juga bisa dilakukan dengan mengubah pengaturan Appearance dan CSS Snippets di dalamnya.

## Tema dan Community Plugin

Bagian ini berisi list tema dan plugin apa saja yang saat ini aku gunakan untuk use caseku, beserta deskripsi singkat bagaimana penggunaannya buatku.

Untuk tema, sekarang aku memakai tema **Obsidian Nord**, setelah sebelumnya menggunakan tema ini dan berpindah ke tema **Wikipedia**. Menurut pengamatanku, ada dua tipe tema Obsidian: satu yang berfokus ke *color-coded visibility*, dan satu lagi yang berfokus ke *estetika*. Obsidian Nord adalah tema yang masuk ke tipe pertama, sedangkan Wikipedia lebih masuk ke tipe kedua dengan tambahan kustomisasi untuk Reading View yang bisa membuatnya menjadi lebih mirip dengan tampilan entri Wikipedia. Buatku, pemilihan warna Obsidian Nord merupakan yang paling enak dilihat dibandingkan tipe tema serupa, jadi ini lebih ke masalah preferensial aja.

Plugin yang kupakai sesuai dengan use caseku diantaranya:

- Annotator
	Anotasi file pdf dan epub. Untuk menggunakan plugin ini, file pdf/epub target harus dimasukkan ke dalam Vault, yang nantinya dibaca sebagai attachment. Masih belum sempat dipakai karena belum bikin manajemen buku/jurnal yang ketata rapi.
- Better Word Count
	Untuk keperluan tulis menulis. Pengembangan fungsionalitas dari Core Plugin *Word Count*, yang disarankan untuk dinonaktifkan jika menggunakan plugin ini.
- Colored Tags
	Modifikasi tampilan warna untuk tags, termasuk gradasi pada nested tags. Plugin estetik yang punya nilai guna yang lumayan buat aku, tapi non-esensial.
- Dataview
	Query Language System untuk menampilkan manajemen notes berdasarkan metadata. Dalam kiat-kiat penggunaan Obsidian untuk kepenulisan, plugin ini banyak direkomendasikan untuk mempermudah manajemen notes secara visual, tapi saat ini baru kupakai untuk mempermudah/sedikit otomasi pembuatan file index.
- Enchancing Export
	Untuk keperluan ekspor file tunggal hasil penulisan ke format lain. Sama seperti plugin Longform di bawah, plugin ini memerlukan Pandoc sebagai utilitas dasar ekspor format file teks.
- Image Toolkit
	Menambah fungsionalitas image preview di Obsidian kalau menggunakan mode Live Preview ataupun Reading Mode.
- Longform
	Untuk keperluan penulisan. Longform memungkinkan kamu untuk membuat proyek penulisan yang panjang, seperti novel ataupun kumpulan cerita, tanpa harus melakukan formatting ulang dan menyatukan file secara manual ketika nanti akan mengekspor file yang sudah jadi. Selain itu, Longform memungkinkan penggunaan Obsidian sebagaimana biasanya (seperti manajemen notes dengan wikilink, pengaturan tags dan properties YAML) tanpa harus mengubah semuanya secara manual karena akan melewati proses penghapusan format teks yang menggunakan format internal Obsidian sebelum menjadi dokumen jadi. Selain itu, juga memiliki fitur daily word count untuk menghitung seberapa banyak kata yang ditulis dalam satu hari.
- Nested Tag Graph
	Plugin untuk membuat nested tags bisa ditampilkan di dalam Graph View. Perlu diketahui kalau versi 1.0.2 nggak bisa diinstall secara langsung lewat pengaturan Community Plugins, jadi harus download versi 1.0.1 lewat laman GitHub dan dipasang manual di direktori Vault.
- Unicode Search
	Plugin untuk memasukkan karakter spesial Unicode lewat command pallete. Terutama buat desktop use untuk jaga-jaga/memudahkan ketika butuh.
- Word Sprint
	Integrasi sistem sprint penulisan. Kalau kurang familiar dengan istilahnya, "sprint" dalam hal ini adalah berusaha menulis sebanyak mungkin dalam jangka waktu yang ditentukan, biasanya dalam jumlah yang sudah ditargetkan. Niatnya digunakan waktu penulisan cerita.
- WordNet Dictionary
	Kamus bahasa Inggris yang databasenya diambil dari WordNet. Kalau dibandingkan dengan pemahaman yang lebih umum sekarang, ini lebih dekat ke glosarium yang mengandung makna dari satu kata, dibandingkan kamus terjemahan seperti Google Translate atau semacamnya. Lebih ke buat jaga-jaga kalau perlu.

## Obsidian Mobile

Selain aplikasi PC, yang tersedia di platform Windows, Mac OS, maupun Linux (lewat sistem flatpak, yang aku pakai sekarang), Obsidian juga tersedia di smartphone, baik iOS dan Android sejak 2021.

Buatku, fungsionalitas utama dari Obsidian Mobile ada tiga: 1) Daily tasking tanpa harus membuka laptop, 2) jaga-jaga kalau ingin lanjut nulis sesuatu tapi dalam kondisi nggak bisa buka laptop, dan 3) rekaman audio supaya nanti bisa dibuka di laptop. Fungsi seperti ini jelas memerlukan sinkronisasi antar device agar data yang dibuka bisa langsung diedit di tiap device tanpa harus proses pemindahan file tiap mau mengedit di device yang berbeda.

Obsidian sendiri menyediakan fitur sinkronisasi melalui [Obsidian Sync](https://obsidian.md/sync) yang disimpan di server pusat, tapi fitur ini merupakan fitur berbayar sebesar 8 USD per bulan (aku kurang tahu apakah ada regional pricing atau engga). Tapi fitur ini lebih sebagai jalan pintas untuk memudahkan mereka yang butuh fitur sinkronisasi tanpa harus ribet memikirkan dan menyiapkan aplikasi lain sebagai sarana sinkronisasinya.

Kelebihan Obsidian adalah penggunaan direktori simpel sebagai Vault atau tempat kerjanya, selain penggunaan format dan file Markdown yang memungkinkan pengeditan filenya di luar Obsidian. Dengan kata lain, selama kamu punya cara untuk mensinkronisasikan direktori Vaultmu di device yang kamu gunakan, you're good to go—terlepas dari apakah platform tiap device berbeda ataupun bahkan kalau nantinya kamu menggunakan aplikasi yang berbeda di tiap device, selama aplikasi itu menggunakan sistem yang serupa (aku nyebut aplikasi seperti ini Obsidian-like di [post blog sebelumnya](https://maulanamd.wordpress.com/2023/12/30/saya-mencoba-aplikasi-tulis-menulis-dan-manajemen-pengetahuan/)).

Untuk sinkronisasi, aku saat ini menggunakan [Syncthing](https://syncthing.net/), program sinkronisasi berbasis peer-to-peer, dengan front end Syncthing GTK. Learning curve penggunaannya nggak sebegitu besar, dan lumayan accessible untuk pengguna baru. Selain belajar parameter Ignore Patternnya, setup awal Syncthing terhitung mudah selama menggunakan front end GUI. Karena basisnya adalah peer-to-peer, datamu cuma disimpan di device yang disinkronkan saja. Jika kamu butuh fitur backup selain sinkronisasi antar device, atau lebih tertarik untuk menggunakan aplikasi dengan sistem lain, ada beberapa aplikasi yang menggunakan cloud storage sebagai dasar sinkronisasi file, kurang lebih dianggap sebagai server utama data yang nantinya disinkronkan kepada perangkat yang memasang aplikasi tersebut. Beberapa yang sempat kubaca diantaranya adalah aplikasi yang menggunakan Google Drive dan Dropbox sebagai dasar sistem sinkronisasinya, yang disebut di dalam review milik [Vanessa Glau](https://medium.com/@vanessaglau/how-i-plan-and-write-fiction-in-obsidian-f140455281c1) dan [P. D. Workman](https://pdworkman.com/writing-a-novel-in-markdown/), tapi harusnya pencarian singkat dengan kata kunci terkait sudah memunculkan beberapa opsi yang sesuai dengan apa yang kalian cari.

Sama seperti aplikasi desktopnya, Obsidian Mobile juga mendukung penggunaan tema dan Community Plugins. Tapi karena use case Obsidian Mobile lebih terbatas daripada aplikasi desktopnya, aku cuma memasang tiga Community Plugins di mobile: Annotator, Colored Tags, dan Dataview.

## Manajemen File dan Folder

Meskipun secara teknis bisa digunakan hanya dengan satu folder utama dan menggunakan Graph View, Quick Search, dan wikilinks untuk navigasi antar notes, aku rasa penggunaan Obsidian akan jauh lebih mudah dan nyaman jika menggunakan manajemen folder sebagai sarana penataan yang bersifat arbriter. Dalam kasusku, dulu aku menggunakan kategorisasi simpel berupa nama topik atau jenis umum dari notes sebagai nama folder, tapi lama kelamaan karena aku tidak membuat sebuah batasan bagaimana kategori-kategori ini dibuat, manajemen folder seperti ini malah makin membuat ruwet manajemen notes saat digunakan.

Enter Johnny Decimals.

[Johnny Decimals](https://johnnydecimal.com/) adalah sebuah sistem manajemen folder yang menggunakan pembatasan jumlah kategori dan subkategori secara sengaja untuk membuat manajemen file dan folder menjadi lebih mudah untuk diingat dan dinavigasikan. 