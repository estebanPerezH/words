async function recibirInfo() {
    const URL = `https://api.spacexdata.com/v3/launches`;
    const response = await fetch(URL);
    const data = await response.json();

    pintarCard(data);
    return data;
}

const container = document.querySelector(".container-cards");

function pintarCard(data) {
    data.forEach(space => {
        console.log(space);
        container.innerHTML += `
        <div class="flexbox">
            <div class="country card">
                <div class="front">
                    <img src="${space.links.mission_patch_small}" alt="">
                </div>
                <div class="back">
                    <h1>${space.mission_name}</h1>
                    <button class="btn btn-info">Ver mas</button>
                </div>
            </div>
        </div>`;
    });
}

recibirInfo();
