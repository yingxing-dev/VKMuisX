const url = new URL(window.location.href);
const id = url.searchParams.get("id");
console.log(id);

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://vk.com/audio" + id)
xhr.send(null);

if (xhr.status === 200) {
    console.log(xhr.responseText);
}
else console.log("Error");