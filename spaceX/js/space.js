async function recibirInfo() {
    const URL = `https://api.spacexdata.com/v3/launches`;
    const response = await fetch(URL);
    const data = await response.json();

    pintarCard(data);
    return data;
}

const container = document.querySelector(".container-cards");

function pintarCard(data) {
    data.forEach((space, index) => {
        const modalId = `staticBackdrop-${index}`;
        container.innerHTML += `
        <div class="flexbox">
            <div class="country card">
                <div class="front">
                    <img src="${space.links.mission_patch_small}" alt="">
                </div>
                <div class="back">
                    <h1>${space.mission_name}</h1>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalId}">
                        Ver mas
                    </button>
                </div>
            </div>
        </div>
        <div class="modal fade" id="${modalId}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="${modalId}Label">SpaceX</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <video controls width="100%">
                    <source src="${space.video_link}" type="video/mp4">
                    Tu navegador no soporta la etiqueta de video.
                </video>
                <h2>${space.details}</h2>
                <h2>${space.nationality}</h2>

                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
        `;
    });
}

recibirInfo();
