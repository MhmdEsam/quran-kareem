let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
	 name: "سُورَةُ الفَاتِحَة",
	 path: "https://server10.mp3quran.net/minsh/001.mp3",
	 img: "imgspng/1.png",
	 singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
   },
   {
	 name: "سُورَةُ البَقَرَة",
	 path: "https://server10.mp3quran.net/minsh/002.mp3",
	 img: "imgspng/2.png",
	 singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
   },
   {
     name: "سُورَةُ آل عِمرَان",
     path: "https://server10.mp3quran.net/minsh/003.mp3",
	 img: "imgspng/3.png",
     singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
   },
   {
     name: "سُورَةُ النِّسَاء",
     path: "https://server10.mp3quran.net/minsh/004.mp3",
	 img: "imgspng/4.png",
     singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
   },
   {
     name: "سُورَةُ المَائدة",
     path: "https://server10.mp3quran.net/minsh/005.mp3",
	 img: "imgspng/5.png",
     singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
   },
   {
	name: "سُورَةُ الأنعَام",
	path: "https://server10.mp3quran.net/minsh/006.mp3",
	img: "imgspng/6.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الأعرَاف",
	path: "https://server10.mp3quran.net/minsh/007.mp3",
	img: "imgspng/7.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الأنفَال",
	path: "https://server10.mp3quran.net/minsh/008.mp3",
	img: "imgspng/8.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ التوبَة",
	path: "https://server10.mp3quran.net/minsh/009.mp3",
	img: "imgspng/9.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ يُونس",
	path: "https://server10.mp3quran.net/minsh/010.mp3",
	img: "imgspng/10.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ هُود",
	path: "https://server10.mp3quran.net/minsh/011.mp3",
	img: "imgspng/11.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ يُوسُف",
	path: "https://server10.mp3quran.net/minsh/012.mp3",
	img: "imgspng/12.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الرَّعْد",
	path: "https://server10.mp3quran.net/minsh/013.mp3",
	img: "imgspng/13.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ إبراهِيم",
	path: "https://server10.mp3quran.net/minsh/014.mp3",
	img: "imgspng/14.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الحِجْر",
	path: "https://server10.mp3quran.net/minsh/015.mp3",
	img: "imgspng/15.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ النَّحْل",
	path: "https://server10.mp3quran.net/minsh/016.mp3",
	img: "imgspng/16.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الإسْرَاء",
	path: "https://server10.mp3quran.net/minsh/017.mp3",
	img: "imgspng/17.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الكهْف",
	path: "https://server10.mp3quran.net/minsh/018.mp3",
	img: "imgspng/18.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ مَريَم",
	path: "https://server10.mp3quran.net/minsh/019.mp3",
	img: "imgspng/19.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ طه",
	path: "https://server10.mp3quran.net/minsh/020.mp3",
	img: "imgspng/20.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الأنبيَاء",
	path: "https://server10.mp3quran.net/minsh/021.mp3",
	img: "imgspng/21.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
    {
	name: "سُورَةُ الحَج",
	path: "https://server10.mp3quran.net/minsh/022.mp3",
	img: "imgspng/22.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المُؤمنون",
	path: "https://server10.mp3quran.net/minsh/023.mp3",
	img: "imgspng/23.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ النُّور",
	path: "https://server10.mp3quran.net/minsh/024.mp3",
	img: "imgspng/24.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
    {
	name: "سُورَةُ الفُرْقان",
	path: "https://server10.mp3quran.net/minsh/025.mp3",
	img: "imgspng/25.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الشُّعَرَاء",
	path: "https://server10.mp3quran.net/minsh/026.mp3",
	img: "imgspng/26.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ النَّمْل",
	path: "https://server10.mp3quran.net/minsh/027.mp3",
	img: "imgspng/27.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ القَصَص",
	path: "https://server10.mp3quran.net/minsh/028.mp3",
	img: "imgspng/28.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
    {
	name: "سُورَةُ العَنكبوت",
	path: "https://server10.mp3quran.net/minsh/029.mp3",
	img: "imgspng/29.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
    {
	name: "سُورَةُ الرُّوم",
	path: "https://server10.mp3quran.net/minsh/030.mp3",
	img: "imgspng/30.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
    {
	name: "سُورَةُ لقمَان",
	path: "https://server10.mp3quran.net/minsh/031.mp3",
	img: "imgspng/31.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ السَّجدَة",
	path: "https://server10.mp3quran.net/minsh/032.mp3",
	img: "imgspng/32.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الأحزَاب",
	path: "https://server10.mp3quran.net/minsh/033.mp3",
	img: "imgspng/33.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ سَبَأ",
	path: "https://server10.mp3quran.net/minsh/034.mp3",
	img: "imgspng/34.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ فَاطِر",
	path: "https://server10.mp3quran.net/minsh/035.mp3",
	img: "imgspng/35.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ يس",
	path: "https://server10.mp3quran.net/minsh/036.mp3",
	img: "imgspng/36.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الصَّافات",
	path: "https://server10.mp3quran.net/minsh/037.mp3",
	img: "imgspng/37.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ ص",
	path: "https://server10.mp3quran.net/minsh/038.mp3",
	img: "imgspng/38.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الزُّمَر",
	path: "https://server10.mp3quran.net/minsh/039.mp3",
	img: "imgspng/39.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ غَافِر",
	path: "https://server10.mp3quran.net/minsh/040.mp3",
	img: "imgspng/40.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ فُصِّلَتْ",
	path: "https://server10.mp3quran.net/minsh/041.mp3",
	img: "imgspng/41.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الشُّورَى",
	path: "https://server10.mp3quran.net/minsh/042.mp3",
	img: "imgspng/42.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الزُّخْرُف",
	path: "https://server10.mp3quran.net/minsh/043.mp3",
	img: "imgspng/43.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الدُّخان",
	path: "https://server10.mp3quran.net/minsh/044.mp3",
	img: "imgspng/44.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الجاثِية",
	path: "https://server10.mp3quran.net/minsh/045.mp3",
	img: "imgspng/45.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الأحقاف",
	path: "https://server10.mp3quran.net/minsh/046.mp3",
	img: "imgspng/46.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ مُحَمّد",
	path: "https://server10.mp3quran.net/minsh/047.mp3",
	img: "imgspng/47.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
    {
	name: "سُورَةُ الفَتْح",
	path: "https://server10.mp3quran.net/minsh/048.mp3",
	img: "imgspng/48.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الحُجُرات",
	path: "https://server10.mp3quran.net/minsh/049.mp3",
	img: "imgspng/49.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ ق",
	path: "https://server10.mp3quran.net/minsh/050.mp3",
	img: "imgspng/50.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الذَّاريَات",
	path: "https://server10.mp3quran.net/minsh/051.mp3",
	img: "imgspng/51.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الطُّور	",
	path: "https://server10.mp3quran.net/minsh/052.mp3",
	img: "imgspng/52.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ النَّجْم",
	path: "https://server10.mp3quran.net/minsh/053.mp3",
	img: "imgspng/53.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ القَمَر",
	path: "https://server10.mp3quran.net/minsh/054.mp3",
	img: "imgspng/54.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الرَّحمن",
	path: "https://server10.mp3quran.net/minsh/055.mp3",
	img: "imgspng/55.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الواقِعَة",
	path: "https://server10.mp3quran.net/minsh/056.mp3",
	img: "imgspng/56.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الحَديد",
	path: "https://server10.mp3quran.net/minsh/057.mp3",
	img: "imgspng/57.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المُجادَلة",
	path: "https://server10.mp3quran.net/minsh/058.mp3",
	img: "imgspng/58.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الحَشْر",
	path: "https://server10.mp3quran.net/minsh/059.mp3",
	img: "imgspng/59.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المُمتَحَنة",
	path: "https://server10.mp3quran.net/minsh/060.mp3",
	img: "imgspng/60.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الصَّف",
	path: "https://server10.mp3quran.net/minsh/061.mp3",
	img: "imgspng/61.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الجُّمُعة",
	path: "https://server10.mp3quran.net/minsh/062.mp3",
	img: "imgspng/62.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المُنافِقُون",
	path: "https://server10.mp3quran.net/minsh/063.mp3",
	img: "imgspng/63.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ التَّغابُن",
	path: "https://server10.mp3quran.net/minsh/064.mp3",
	img: "imgspng/64.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
    {
	name: "سُورَةُ الطَّلاق",
	path: "https://server10.mp3quran.net/minsh/065.mp3",
	img: "imgspng/65.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ التَّحْريم",
	path: "https://server10.mp3quran.net/minsh/066.mp3",
	img: "imgspng/66.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المُلْك",
	path: "https://server10.mp3quran.net/minsh/067.mp3",
	img: "imgspng/67.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ القَلـََم",
	path: "https://server10.mp3quran.net/minsh/068.mp3",
	img: "imgspng/68.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الحَاقّـَة",
	path: "https://server10.mp3quran.net/minsh/069.mp3",
	img: "imgspng/69.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المَعارِج",
	path: "https://server10.mp3quran.net/minsh/070.mp3",
	img: "imgspng/70.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ نُوح",
	path: "https://server10.mp3quran.net/minsh/071.mp3",
	img: "imgspng/71.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الجِنّ",
	path: "https://server10.mp3quran.net/minsh/072.mp3",
	img: "imgspng/72.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المُزَّمّـِل",
	path: "https://server10.mp3quran.net/minsh/073.mp3",
	img: "imgspng/73.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المُدَّثــِّر",
	path: "https://server10.mp3quran.net/minsh/074.mp3",
	img: "imgspng/74.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  }, 
  {
	name: "سُورَةُ القِيامَة",
	path: "https://server10.mp3quran.net/minsh/075.mp3",
	img: "imgspng/75.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الإنسان",
	path: "https://server10.mp3quran.net/minsh/076.mp3",
	img: "imgspng/76.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المُرسَلات",
	path: "https://server10.mp3quran.net/minsh/077.mp3",
	img: "imgspng/77.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ النـَّبأ",
	path: "https://server10.mp3quran.net/minsh/078.mp3",
	img: "imgspng/78.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ النـّازِعات",
	path: "https://server10.mp3quran.net/minsh/079.mp3",
	img: "imgspng/79.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ عَبَس",
	path: "https://server10.mp3quran.net/minsh/080.mp3",
	img: "imgspng/80.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ التـَّكْوير",
	path: "https://server10.mp3quran.net/minsh/081.mp3",
	img: "imgspng/81.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الإنفِطار",
	path: "https://server10.mp3quran.net/minsh/082.mp3",
	img: "imgspng/82.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المُطـَفِّفين",
	path: "https://server10.mp3quran.net/minsh/083.mp3",
	img: "imgspng/83.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الإنشِقاق",
	path: "https://server10.mp3quran.net/minsh/084.mp3",
	img: "imgspng/84.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ البُروج",
	path: "https://server10.mp3quran.net/minsh/085.mp3",
	img: "imgspng/85.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الطّارق",
	path: "https://server10.mp3quran.net/minsh/086.mp3",
	img: "imgspng/86.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الأعلی",
	path: "https://server10.mp3quran.net/minsh/087.mp3",
	img: "imgspng/87.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الغاشِيَة",
	path: "https://server10.mp3quran.net/minsh/088.mp3",
	img: "imgspng/88.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الفَجْر",
	path: "https://server10.mp3quran.net/minsh/089.mp3",
	img: "imgspng/89.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ البَـلـَد",
	path: "https://server10.mp3quran.net/minsh/090.mp3",
	img: "imgspng/90.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الشــَّمْس",
	path: "https://server10.mp3quran.net/minsh/091.mp3",
	img: "imgspng/91.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ اللـَّيل",
	path: "https://server10.mp3quran.net/minsh/092.mp3",
	img: "imgspng/92.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الضُّحی",
	path: "https://server10.mp3quran.net/minsh/093.mp3",
	img: "imgspng/93.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الشَّرْح",
	path: "https://server10.mp3quran.net/minsh/094.mp3",
	img: "imgspng/94.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ التـِّين",
	path: "https://server10.mp3quran.net/minsh/095.mp3",
	img: "imgspng/95.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ العَلـَق",
	path: "https://server10.mp3quran.net/minsh/096.mp3",
	img: "imgspng/96.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ القـَدر",
	path: "https://server10.mp3quran.net/minsh/097.mp3",
	img: "imgspng/97.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ البَيِّنَة",
	path: "https://server10.mp3quran.net/minsh/098.mp3",
	img: "imgspng/98.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الزلزَلة",
	path: "https://server10.mp3quran.net/minsh/099.mp3",
	img: "imgspng/99.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ العَادِيات",
	path: "https://server10.mp3quran.net/minsh/100.mp3",
	img: "imgspng/100.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ القارِعَة",
	path: "https://server10.mp3quran.net/minsh/101.mp3",
	img: "imgspng/101.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ التَكاثـُر",
	path: "https://server10.mp3quran.net/minsh/102.mp3",
	img: "imgspng/102.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ العَصْر",
	path: "https://server10.mp3quran.net/minsh/103.mp3",
	img: "imgspng/103.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الهُمَزَة",
	path: "https://server10.mp3quran.net/minsh/104.mp3",
	img: "imgspng/104.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الفِيل",
	path: "https://server10.mp3quran.net/minsh/105.mp3",
	img: "imgspng/105.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ قـُرَيْش",
	path: "https://server10.mp3quran.net/minsh/106.mp3",
	img: "imgspng/106.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المَاعُون",
	path: "https://server10.mp3quran.net/minsh/107.mp3",
	img: "imgspng/107.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الكَوْثَر",
	path: "https://server10.mp3quran.net/minsh/108.mp3",
	img: "imgspng/108.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الكَافِرُون",
	path: "https://server10.mp3quran.net/minsh/109.mp3",
	img: "imgspng/109.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ النـَّصر",
	path: "https://server10.mp3quran.net/minsh/110.mp3",
	img: "imgspng/110.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ المَسَد",
	path: "https://server10.mp3quran.net/minsh/111.mp3",
	img: "imgspng/111.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الإخْلَاص",
	path: "https://server10.mp3quran.net/minsh/112.mp3",
	img: "imgspng/112.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ الفَلَق",
	path: "https://server10.mp3quran.net/minsh/113.mp3",
	img: "imgspng/113.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  {
	name: "سُورَةُ النَّاس",
	path: "https://server10.mp3quran.net/minsh/114.mp3",
	img: "imgspng/114.png",
	singer: "صوت الشيخ محمد صديق المنشاوي رحمة الله"
  },
  
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}




// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


const trigger = document.querySelector("menu > .trigger");
trigger.addEventListener('click', (e) => {
  e.currentTarget.parentElement.classList.toggle("open");
});


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
