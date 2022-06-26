function GerarRegistro() {
    const proprietario = document.querySelector("#proprietario").value
    const placa = document.querySelector("#placa").value
    const veiculo = document.querySelector("#veiculo").value
    const entrada = document.querySelector("#entrada").value
    const saida = document.querySelector("#saida").value
    const tabela = document.querySelector("#tabela")

    const tr = document.createElement("tr")
    // const TrVazio = document.createElement("td")

    const TdEdit = document.createElement("td")
    const IEdit = document.createElement("i")
    IEdit.classList.add("fa-regular", "fa-pen-to-square", "btn", "fs-4")
    TdEdit.appendChild(IEdit)
    // <i class="fa-regular fa-pen-to-square btn fs-4"></i>

    const TdDel = document.createElement("td")
    const IDel = document.createElement("i")
    IDel.classList.add("fa-solid", "fa-trash-can", "btn", "fs-4")
    TdDel.appendChild(IDel)
    // <i class="fa-solid fa-trash-can btn fs-4"></i>

    const TdPlaca = document.createElement("th")
    TdPlaca.innerHTML = placa.toUpperCase()
    tr.appendChild(TdPlaca)

    const TdVeiculo = document.createElement("td")
    TdVeiculo.innerHTML = veiculo
    tr.appendChild(TdVeiculo)

    const TdProprietario = document.createElement("td")
    TdProprietario.innerHTML = proprietario
    tr.appendChild(TdProprietario)
    
    const TdEntra = document.createElement("td")
    TdEntra.innerHTML = entrada
    tr.appendChild(TdEntra)

    const TdSaida = document.createElement("td")
    TdSaida.innerHTML = saida
    tr.appendChild(TdSaida)

    tr.appendChild(TdEdit)
    tr.appendChild(TdDel)


    tabela.appendChild(tr)

    console.log('trest')
}

// const registrar = document.querySelector('#registrar')
// registrar.addEventListener("click", GerarRegistro())