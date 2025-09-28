
class Video {
  constructor(title, uploader, time) {
    this.title=title;     
    this.uploader=uploader; 
    this.time=time;       
  }
  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}



const video1=new Video("JavaScript Basics", "Alice", 300);
video1.watch(); 

const video2=new Video("OOP in JS", "Bob", 450);
video2.watch(); 

// --- BONUS PART ---

const videoData =[
  { title: "React Tutorial", uploader: "Charlie", time: 600 },
  { title: "Node.js Crash Course", uploader: "Diana", time: 1200 },
  { title: "CSS Animations", uploader: "Eve", time: 500 },
  { title: "HTML5 Features", uploader: "Frank", time: 700 },
  { title: "Async JS", uploader: "Grace", time: 900 }
];

const videoInstances = videoData.map(data => new Video(data.title, data.uploader, data.time));
videoInstances.forEach(video => video.watch());
