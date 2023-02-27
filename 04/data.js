const allPosts = [
  {
      title: "Re kanna",
      status: "Pengerjaan",
      description: "Re Kanna merupakan template yang bertema Anime yang di buat oleh exploit tekloggers perkiraan pada Tahun 2019. Re Kanna merupakan Template Premium walaupun sekarang sudah banyak yang bocor atau versi Free.",
      star: "23 Februari 2022",
      end: "???",
      author: "exploit tekloggers",
      demo: "https://re-kanna-4-o.blogspot.com",
      progress: "75%"
  },

  {
      title: "Manga Dora",
      status: "Di Tunda",
      description: "Manga Dora merupakan Thema manga yang sudah di Re desain dari Thema originalnya dari Manga Madara dan Thema ini premium atau berbayar.",
      star: "???",
      end: "???",
      author: "???",
      demo: "https://mangadora.com/all-manga/",
      progress: "25%"
  },

  {
      title: "Aniflv",
      status: "Kelar",
      description: "Aniflv merupakan Thema Streaming Anime dengan tampilan keren, unik dan simpel.",
      star: "18 September 2022",
      end: "21 Desember 2022",
      author: "???",
      demo: "https://www2.animeflv.bz/",
      progress: "100%"
  },

  {
      title: "Javmama",
      status: "Kelar",
      description: "Javmama merupakan Thema Streaming dengan tampilan sederhana dan Minimalis",
      star: "18 Februari 2021",
      end: "17 Desember 2022",
      author: "???",
      demo: "https://javmama.me/",
      progress: "100%"
  },

  {
      title: "Drivenime",
      status: "Kelar",
      description: "Drivenime merupakan Thema Anime Batch atau Pack dengan tampilan klasik dan Minimalis",
      star: "11 Mei 2022",
      end: "19 Agustus 2022",
      author: "drivenime",
      demo: "https://drivenime.com/",
      progress: "100%"
  },

  {
      title: "Juragan Anime",
      status: "Kelar",
      description: "Juragan Anime merupakan Thema Anime Batch dengan tampilan klasik dan Minimalis",
      star: "08 November 2021",
      end: "18 Agustus 2022",
      author: "DorobouDeszign",
      demo: "https://www.juragan-anime.net/",
      progress: "100%"
  },

  {
      title: "Nekopoi",
      status: "Kelar",
      description: "Nekopoi masak tidak kalian tidak kenal dengan situs ini. situs Kucing Peduli.",
      star: "05 Oktober 2022",
      end: "05 Oktober 2022",
      author: "???",
      demo: "https://nekopoi.care/",
      progress: "100%"
  },

  {
    title: "Mangastrap",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "Code Pelajar",
    demo: "https://mangastrap.blogspot.com/",
    progress: "0%"
  },

  {
    title: "Manga Madara",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "mangabooth",
    demo: "https://live.mangabooth.com/",
    progress: "0%"
  },

  {
    title: "Kusonime",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "C-Thema",
    demo: "https://kusonime.com/",
    progress: "0%"
  },

  {
    title: "Animebatch",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "Z-Studio",
    demo: "https://www.animebatch.id/",
    progress: "0%"
  },

  {
    title: "Wibudesu",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "Themesia",
    demo: "https://wibudesu.co/",
    progress: "0%"
  },

  {
    title: "Wibudesu",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "Themesia",
    demo: "https://wibudesu.co/",
    progress: "0%"
  },

  {
    title: "Animebatchs",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "???",
    demo: "https://animebatchs.us/",
    progress: "0%"
  },

  {
    title: "jav.guru",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "???",
    demo: "https://jav.guru/",
    progress: "0%"
  },

  {
    title: "jav.guru",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "???",
    demo: "https://jav.guru/",
    progress: "0%"
  },

  {
    title: "Sakuracircle",
    status: "Kelar",
    description: "No Data",
    star: "22 January 2023",
    end: "22 January 2023",
    author: "Tennouji",
    demo: "https://sakuracircle.com/",
    progress: "100%"
  },

  {
    title: "Hentaisun",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "???",
    demo: "https://hentaisun.com/",
    progress: "0%"
  },

  {
    title: "batch.moe",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "???",
    demo: "https://batch.moe/",
    progress: "0%"
  },

  {
    title: "hentairead",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "WPStylish",
    demo: "https://hentairead.com/",
    progress: "0%"
  },

  {
    title: "Javsky",
    status: "Belum Tau",
    description: "No Data",
    star: "???",
    end: "???",
    author: "???",
    demo: "https://javsky.tv/",
    progress: "0%"
  }
];



const dataBookmarks = document.querySelector(".Data_Bookmark");
const generateReleatedPosts = () => {
  let html = '',
      html2 = `<div class="TotalBookmark">Total ${allPosts.length} Bookmarks</div>`;
  const shuffledList = allPosts;
  shuffledList.forEach((post) => {
    html += `
    <div class="item">
      <div class="item_Header">
        <div class="item_icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>xml</title><path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" /></svg>
        </div>
        <div class="title_item">${post.title}</div>
        <span class="${post.status}">${post.status}</span>
      </div>
        <div class="item_Body">
          <p>${post.description}</p>
          <div class="status">
            <div class="data_status">
              <div class="iconStart">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 5H18V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2C16.7348 2 16.4804 2.10536 16.2929 2.29289C16.1054 2.48043 16 2.73478 16 3V5H8V3C8 2.73478 7.89464 2.48043 7.70711 2.29289C7.51957 2.10536 7.26522 2 7 2C6.73478 2 6.48043 2.10536 6.29289 2.29289C6.10536 2.48043 6 2.73478 6 3V5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V9H22V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7957 5 19 5Z" fill="#92caff"></path><path d="M2 19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7957 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V11H2V19Z" fill="#51A6F5"></path></svg>
              </div>
              <div>
                <span>Start/Rilis</span>
                <p>${post.star}</p>
              </div>
            </div>
            <div class="data_status">
              <div class="iconEnd">
                <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6601 8.6858C18.5437 8.44064 18.2965 8.28427 18.025 8.28427H10.9728L15.2413 1.06083C15.3697 0.843469 15.3718 0.573844 15.2466 0.354609C15.1214 0.135375 14.8884 -9.37014e-05 14.6359 4.86277e-08L8.61084 0.000656299C8.3608 0.000750049 8.12957 0.1335 8.00362 0.349453L0.0958048 13.905C-0.0310859 14.1224 -0.0319764 14.3911 0.0934142 14.6094C0.218805 14.8277 0.451352 14.9624 0.703117 14.9624H7.71037L5.66943 23.1263C5.58955 23.4457 5.74213 23.7779 6.03651 23.9255C6.13691 23.9757 6.24459 24 6.35123 24C6.55729 24 6.75923 23.9094 6.89638 23.7413L18.5699 9.43186C18.7415 9.22148 18.7766 8.93105 18.6601 8.6858V8.6858Z" fill="#FF4C41"></path></svg>
              </div>
              <div>
                <span>End/Update</span>
                <p>${post.end}</p>
              </div>
            </div>

            <div class="data_status">
              <div class="iconAuthor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: #ff4c41;"><title>account</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path></svg>
              </div>
              <div>
                <span>Author</span>
                <p>${post.author}</p>
              </div>
            </div>

            <div class="data_status">
              <div class="iconDemo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: #51a6f5;"><title>web</title><path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
              </div>
              <div>
                <span>Demo</span>
                <a href="${post.demo}" target="_blank">Click Here</a>
              </div>
            </div>
          </div>
        </div>
        <div class="item_Footer">
          <div class="StatusProses">
            Progress
            <span>${post.progress}</span>
          </div>
          <div class="progress">
            <div class="progress-bar progress-animated" role="progressbar" style="width: ${post.progress}; height: 6px;"></div>
          </div>
        </div>
    </div>`;
  });
  dataBookmarks.innerHTML = `${html2} ${html}`;
};
if(dataBookmarks){
  generateReleatedPosts();
}