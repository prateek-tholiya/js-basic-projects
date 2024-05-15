var arr = [
    {
        dp: "https://i.insider.com/611b83d2a4b07b0018ade4c0?width=700",
        story: "https://i.guim.co.uk/img/media/3f183e3024872dc0280012487854dc5807048166/0_42_3600_2160/master/3600.jpg?width=1200 & height=1200& quality=85& auto=format& fit=crop & s=058c94b78fa84d2639fecbef790041f1",
    },
    {
        dp: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
        story: "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg",
    },
    {
        dp: "https://s.france24.com/media/display/a5045694-9f86-11ee-8604-005056bf30b7/w:1280/p:1x1/23f4afc01883680753493261ebeb370cb0e875e0.jpg",
        story: "https://e0.365dm.com/24/02/768x432/skysports-kylian-mbappe-psg_6462523.jpg?20240220164300",
    },
    {
        dp: "https://i.tribune.com.pk/media/images/haaland1667480338-0/haaland1667480338-0.jpg",
        story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsvqKKX6uZZWL19GRDLtyAg1czqaJFR2UrgkTjsmTXg&s",
    },
];


var nav = document.querySelector("#navbar")
var clutter = "";

arr.forEach(function (elem, idx) {
    clutter += `<div id="story">
    <img id= "${idx}" src="${elem.dp}" alt=""> 
</div>`;
});

nav.innerHTML = clutter;

nav.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
});

