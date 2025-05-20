---
tags:
  - konsep
---
https://johnnydecimal.com/

---

Tulisan ini lebih banyak berisi simpulan dasar dari sistem Johnny Decimal (JD).

Manajemen direktori web ini menggunakan JD, *btw*.

Hal lain yang perlu diperhatikan adalah JD bukanlah sebuah aturan yang harus diikuti secara kaku, namun sebagai *guideline* atau arahan secara umum. Pada akhirnya, tujuan dari kategorisasi seperti ini adalah mempermudah hidup, bukannya malah mempersulit.

JD adalah hasil dari upaya [[pengorganisasian]] data digital, terutama pada hal yang bersifat kolaboratif. Tujuan utamanya adalah membuat sistem organisasi folder yang bersifat unik, dalam artian dapat dibedakan dengan folder serupa dalam kategori yang berbeda, yang dapat di*refer* secara spesifik tanpa membingungkan orang lain, apalagi diri sendiri.

Solusi dari masalah pengorganisasian ini adalah membuat rak virtual di dalam komputermu, atau tempat datamu berada.

Langkah pertama adalah memberikan nama untuk tiap rak yang akan digunakan, sesuai dengan kategori dari apa yang akan diisi di dalam rak-rak tersebut. Penamaan **kategori besar** ini, pada akhirnya, kembali kepada kebutuhanmu sendiri, sesuai dengan data yang kamu punya dan apa yang ingin kamu simpan. Jangan terlalu spesifik, karena setelah itu tiap rak ini akan diisi oleh kotak atau boks yang berisikan kategori yang lebih spesifik lagi. Rak ini adalah **folder tingkat pertama** di dalam direktori penyimpananmu.

Langkah kedua adalah memberikan nama untuk boks-boks yang akan dimasukkan ke dalam rak tadi. Kategori ini bersifat lebih spesifik dibandingkan kategori yang dimiliki oleh rak tadi, jadi penamaannya bersifat hirearkis. Jika misalnya aku mengkategorikan rak berdasar jenis/format file, maka (sebagai contoh, bisa saja kamu ingin memberi kategori yang lain) kategori dari boks di dalam rak `Musik` adalah nama author dari musik-musik tersebut. Yang aku gunakan saat ini di laptopku adalah Folder `Artist & Band`, `Label, Records, & Collaboration`, dan `Other Audio` - dua kategori pertama karena ada beberapa file musik yang kusimpan yang sifatnya kolaboratif (satu album berisi 10 lagu bisa diisi oleh 10 artist berbeda), yang jelas nggak bisa dimasukkan ke dalam kategori boks pertama, sedangkan kategori terakhir karena aku menggunakan folder Musik sebagai folder `Audio` secara umum. Boks ini adalah **folder tingkat kedua** di dalam direktori penyimpananmu.

> [!note]
> Penggunaan nama yang ambigu seperti ini sebenarnya bukan sesuatu yang direkomendasikan dalam JD. Aku memilih untuk nggak mengganti nama kategori dasarnya karena aku menggunakan folder jadi yang sudah dibuat oleh sistem di direktori `Home`, dan aku sendiri masih bisa menalar bahwa Audio berhubungan dengan Musik.

Langkah selanjutnya kemudian adalah menyiapkan kategori berupa folder (dalam pengandaian ini, yang dimaksud adalah folder fisik atau map dalam bahasa Indonesia) yang akan dimasukkan di dalam boks. Jika menggunakan contoh sebelumnya (Musik > Author - nama artist), maka di tingkat ini kategorisasinya adalah judul album atau rilisan dari artist tersebut. Folder atau map ini adalah **folder tingkat ketiga** di dalam direktori penyimpananmu. Di dalam folder ini kemudian kamu meletakkan file sesuai kategori yang sudah kamu buat, dan hanya sesuai kategori tersebut - kalau nggak, kemudian buat apa membuat kategorisasi seperti ini?

Yang membuat JD spesial adalah, selain menggunakan kategorisasi tadi, kamu juga memberikan nomor yang berurutan sesuai kategori dan analoginya sebelumnya. 00-09, 10-19, dst. untuk folder tingkat pertama (yang kemudian disingkat menggunakan bilangan puluhannya), bilangan sesuai rentang nomor dari kategori di atasnya untuk folder tingkat kedua, dan bilangan sesuai kategori sebelumnya ditambah desimal untuk folder tingkat ketiga. *there should be a better way to explain this part*.

![[Johnny Decimal Example.png]]
> Contoh manajemen direktori Vault untuk web ini.

Tujuan dari penomoran seperti ini adalah membuat sistem organisasi dimana kamu bisa me*refer* letak file dan folder berdasarkan penomorannya - paling tidak gambaran umum seperti "oh, tulisan seputar *digital garden* ditaruh di folder 30" (sesuai contoh di atas) jika kamu malas menghafalkan penomoran yang lebih spesifik. *Perks* lainnya adalah pengkategorianmu tertata rapi dengan urutan yang kamu tentukan, bukan berdasarkan urutan yang tidak menentu seperti berdasarkan abjad yang bisa berganti jika ada yang nyempil begitu aja.