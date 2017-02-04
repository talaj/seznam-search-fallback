query = document.getElementById("q").value;
paging = document.getElementById("paging");

engines = [
    ["Yandex", "https://yandex.com/search/?text="],
    ["Google", "https://google.com/search?q="],
    ["Qwant", "https://qwant.com/?q="]
]

for (engine of engines) {
    fallback = document.createElement("div");
    fallback.classList.add("pad");
    fallback.innerHTML = "<a href=\"" + engine[1] + query + "\">" + engine[0] + "</a>";
    paging.append(fallback);
}
